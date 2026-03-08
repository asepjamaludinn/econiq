"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdVerified } from "react-icons/md";
import { walletAssetsData } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WalletSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dompetRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const assetRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      // 1. Posisi Awal Dompet
      gsap.set(dompetRef.current, {
        xPercent: -50,
        yPercent: -50,
        rotation: 4,
        transformOrigin: "center center",
      });

      // 2. Posisi Awal Aset
      walletAssetsData.forEach((_, i) => {
        gsap.set(assetRefs.current[i], {
          x: i % 2 === 0 ? -150 : 150,
          y: -120,
          opacity: 0,
          scale: 0.8,
          rotation: i % 2 === 0 ? -45 : 45,
        });
      });

      // 3. Setting Awal Teks
      gsap.set(textContainerRef.current, {
        y: "20vh",
        opacity: 0,
        rotationY: -40,
        rotationX: 25,
        transformOrigin: "center center",
      });

      // 4. Timeline Utama untuk Scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextSectionRef.current,
          start: "top 85%",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      tl.to(
        dompetRef.current,
        { y: "103vh", left: "50%", scale: 8, ease: "none", duration: 1 },
        0,
      )
        .to(
          dompetRef.current,
          { rotation: -90, ease: "sine.inOut", duration: 0.5 },
          0,
        )
        .to(
          dompetRef.current,
          { rotation: 4, ease: "sine.inOut", duration: 0.5 },
          0.5,
        );

      tl.to(
        textContainerRef.current,
        {
          opacity: 1,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        textContainerRef.current,
        {
          y: "-35vh",
          rotationY: 10,
          rotationX: -15,
          duration: 1,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        textContainerRef.current,
        {
          filter: "opacity(85%) brightness(90%)",
        },
        {
          filter: "opacity(100%) brightness(100%)",
          duration: 1,
          ease: "none",
        },
        0,
      );

      tl.to(
        textContainerRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        0.85,
      );

      // 5. Timeline Animasi Aset
      const assetTL = gsap.timeline({ paused: true });

      assetTL.to(assetRefs.current, {
        keyframes: [
          { opacity: 1, duration: 0.01 },
          {
            x: 0,
            y: -10,
            opacity: 1,
            rotation: 0,
            scale: 0.5,
            duration: 1.4,
            ease: "power1.out",
          },
          { y: 15, opacity: 0, scale: 0.2, duration: 1.2, ease: "power2.in" },
        ],
        stagger: 0.8,
      });

      // 6. TRIGGER ASET MASUK TEPAT SAAT DOMPET SELESAI
      tl.to(
        {},
        {
          duration: 0.1,
          onStart: () => {
            assetTL.restart();
          },
          onReverseComplete: () => {
            gsap.to(assetRefs.current, {
              opacity: 0,
              duration: 0.2,
              ease: "power1.out",
              onComplete: () => assetTL.pause(0),
            });
          },
        },
        1.0,
      );
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef}>
      <div
        ref={dompetRef}
        className="absolute left-[30%] top-[75vh] md:top-[79vh] z-100 w-[100px] h-[100px] flex items-center justify-center pointer-events-none"
      >
        {walletAssetsData.map((src, i) => (
          <Image
            key={i}
            ref={(el) => {
              assetRefs.current[i] = el;
            }}
            src={src}
            alt={`Asset Web3 ${i}`}
            width={35}
            height={35}
            className="absolute object-contain z-90"
          />
        ))}

        <Image
          src="/images/Dompet.svg"
          alt="Dompet Eqonic"
          width={60}
          height={60}
          className="relative z-110 object-contain"
          priority
        />
      </div>

      <section
        ref={nextSectionRef}
        className="relative w-full h-screen flex flex-col items-center justify-start pt-32 bg-[#B36EE6] text-white z-80"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={textContainerRef}
          className="relative z-10 flex flex-col items-center text-center px-4"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="border-[2px] border-[#0A7B5E] text-[#0A7B5E] bg-transparent rounded-full px-5 py-1 mb-10 flex items-center gap-2">
            <MdVerified className="w-5 h-5" />
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest">
              WEB3 FINANCIAL
            </span>
          </div>

          <h2 className="text-[clamp(48px,8vw,120px)] font-black uppercase tracking-normal leading-[1.1] text-[#3D2616] mb-8 relative z-20 whitespace-nowrap">
            Learn, Manage, Grow
          </h2>

          <p className="text-[#3D2616] font-bold text-base md:text-xl mt-2 relative z-20">
            Manage your Web3 finances with full transparency, anytime, anywhere.
          </p>
        </div>
      </section>
    </div>
  );
}
