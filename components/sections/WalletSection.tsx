"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdVerified } from "react-icons/md";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const walletAssets = [
  "/images/card.svg",
  "/images/BitCoin.svg",
  "/images/100Rp.svg",
  "/images/Dolar.svg",
  "/images/75Rp.svg",
];

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
      walletAssets.forEach((_, i) => {
        gsap.set(assetRefs.current[i], {
          x: i % 2 === 0 ? -150 : 150,
          y: -120,
          opacity: 0,
          scale: 0.8,
          rotation: i % 2 === 0 ? -45 : 45,
        });
      });

      // 3. Timeline Utama
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: nextSectionRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // Animasi Dompet Jatuh
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
          rotationX: 10,
          rotationY: -10,
          x: 60,
          z: -100,
          scale: 0.95,
          transformOrigin: "bottom center",
          duration: 0.4,
          ease: "power2.out",
        },
        0.1,
      )

        .to(
          textContainerRef.current,
          {
            rotationX: 0,
            rotationY: 0,
            x: 0,
            z: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          0.5,
        );

      // 4. Trigger Terpisah untuk Aset masuk ke dompet
      const assetTL = gsap.timeline({ paused: true });

      assetTL.to(assetRefs.current, {
        keyframes: [
          {
            opacity: 1,
            duration: 0.01,
          },

          {
            x: 0,
            y: -10,
            opacity: 1,
            rotation: 0,
            scale: 0.6,
            duration: 1.4,
            ease: "power1.out",
          },

          {
            y: 15,
            opacity: 0,
            scale: 0.3,
            duration: 1.2,
            ease: "power2.in",
          },
        ],
        stagger: 0.8,
      });

      ScrollTrigger.create({
        trigger: nextSectionRef.current,
        start: "bottom bottom",

        onEnter: () => {
          assetTL.restart();
        },

        onLeaveBack: () => {
          const progress = assetTL.progress();

          if (progress < 1) {
            gsap.to(assetRefs.current, {
              opacity: 0,
              duration: 0.1,
              ease: "power1.out",
              onComplete: () => {
                assetTL.pause(0);
              },
            });
          }
        },
      });
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef}>
      <div
        ref={dompetRef}
        className="absolute left-[30%] top-[75vh] md:top-[79vh] z-[100] w-[100px] h-[100px] flex items-center justify-center pointer-events-none"
      >
        {/* Kontainer Aset */}
        {walletAssets.map((src, i) => (
          <Image
            key={i}
            ref={(el) => {
              assetRefs.current[i] = el;
            }}
            src={src}
            alt={`Asset Web3 ${i}`}
            width={35}
            height={35}
            className="absolute object-contain z-[90]"
          />
        ))}

        {/* Gambar Dompet Utama */}
        <Image
          src="/images/Dompet.svg"
          alt="Dompet Eqonic"
          width={60}
          height={60}
          className="relative z-[110] object-contain"
          priority
        />
      </div>

      <section
        ref={nextSectionRef}
        className="relative w-full h-screen flex flex-col items-center justify-start pt-32 bg-[#B36EE6] text-white z-20"
        style={{ perspective: "800px" }}
      >
        <div
          ref={textContainerRef}
          className="flex flex-col items-center text-center px-4"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="border-[2px] border-[#0A7B5E] text-[#0A7B5E] bg-transparent rounded-full px-5 py-1 mb-10 flex items-center gap-2">
            <MdVerified className="w-5 h-5" />

            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest">
              WEB3 FINANCIAL
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-6xl md:text-8xl lg:text-[110px] font-black uppercase tracking-normal leading-[1.1] text-[#3D2616] mb-8 relative z-20">
            Aset Terkumpul
            <br className="hidden md:block" /> Di Dompetmu
          </h2>
          {/* Subtitle Typography */}
          <p className="text-[#3D2616] font-bold text-base md:text-xl mt-2 relative z-20">
            Kelola keuangan Web3 kamu secara transparan 24h / 365 hari
          </p>
        </div>
      </section>
    </div>
  );
}
