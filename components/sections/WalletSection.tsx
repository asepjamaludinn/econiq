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
  const mobileWalletContainerRef = useRef<HTMLDivElement>(null);
  const mobileAssetRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        gsap.set(dompetRef.current, {
          xPercent: -50,
          yPercent: -50,
          rotation: 4,
          transformOrigin: "center center",
        });

        walletAssetsData.forEach((_, i) => {
          gsap.set(assetRefs.current[i], {
            x: i % 2 === 0 ? -150 : 150,
            y: -120,
            opacity: 0,
            scale: 0.8,
            rotation: i % 2 === 0 ? -45 : 45,
          });
        });

        gsap.set(textContainerRef.current, {
          y: "20vh",
          opacity: 0,
          rotationY: -40,
          rotationX: 25,
          transformOrigin: "center center",
        });

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
          { y: "98vh", left: "50%", scale: 8, ease: "none", duration: 0.6 },
          0,
        )
          .to(
            dompetRef.current,
            { rotation: -60, ease: "sine.inOut", duration: 0.3 },
            0,
          )
          .to(
            dompetRef.current,
            { rotation: 4, ease: "sine.inOut", duration: 0.2 },
            0.4,
          );

        tl.to(
          textContainerRef.current,
          { opacity: 1, duration: 0.9, ease: "power2.inOut" },
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
          { filter: "opacity(85%) brightness(90%)" },
          {
            filter: "opacity(100%) brightness(100%)",
            duration: 1,
            ease: "none",
          },
          0,
        );
        tl.to(textContainerRef.current, { opacity: 1, duration: 1 }, 0.85);

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
              duration: 0.8,
              ease: "power1.out",
            },
            { y: 15, opacity: 0, scale: 0.2, duration: 0.6, ease: "power2.in" },
          ],
          stagger: 0.4,
        });

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
                onComplete: () => {
                  assetTL.pause(0);
                },
              });
            },
          },
          0.6,
        );
      });

      mm.add("(max-width: 1279px)", () => {
        gsap.set(dompetRef.current, {
          xPercent: -50,
          yPercent: -50,
          rotation: 4,
          y: 0,
          left: "30%",
          scale: 1,
        });

        gsap.set(textContainerRef.current, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          filter: "none",
        });

        const contH = mobileWalletContainerRef.current?.offsetHeight || 220;

        mobileAssetRefs.current.forEach((el, i) => {
          gsap.set(el, {
            x: i % 2 === 0 ? -contH * 1.2 : contH * 1.2,
            y: -contH * 1.2,
            opacity: 0,
            scale: 0.8,
            rotation: i % 2 === 0 ? -45 : 45,
          });
        });

        const mobileAssetTL = gsap.timeline({
          paused: true,
          repeat: -1,
        });

        mobileAssetTL.to(mobileAssetRefs.current, {
          keyframes: [
            { opacity: 1, duration: 0.01 },
            {
              x: 0,
              y: contH * 0.23,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 1.4,
              ease: "power1.out",
            },
            {
              y: contH * 0.14,
              opacity: 0,
              scale: 0.3,
              duration: 1.2,
              ease: "power2.in",
            },
          ],
          stagger: 0.6,
        });

        ScrollTrigger.create({
          trigger: mobileWalletContainerRef.current,
          start: "top 75%",
          onEnter: () => mobileAssetTL.play(),
        });
      });

      return () => mm.revert();
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef}>
      <div
        ref={dompetRef}
        className="absolute left-[30%] top-[83dvh] md:top-[84vh] xl:top-[79vh] z-100 w-[100px] h-[100px] flex items-center justify-center pointer-events-none"
      >
        <div className="hidden xl:flex absolute inset-0 w-full h-full items-center justify-center">
          {walletAssetsData.map((src, i) => (
            <Image
              key={`desktop-asset-${i}`}
              ref={(el) => {
                assetRefs.current[i] = el;
              }}
              src={src}
              alt={`Asset Web3 Desktop ${i}`}
              width={35}
              height={35}
              className="absolute object-contain z-90"
            />
          ))}
        </div>

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
        className="relative w-full min-h-fit md:min-h-[100vh] flex flex-col items-center pt-28 md:pt-32 pb-32 md:pb-16 bg-[#B36EE6] text-white z-80"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={textContainerRef}
          className="relative z-10 flex flex-col items-center text-center px-4"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="border-[2px] border-[#0A7B5E] text-[#0A7B5E] bg-transparent rounded-full px-4 md:px-5 py-1 mb-6 md:mb-10 flex items-center gap-2">
            <MdVerified className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[10px] md:text-sm font-extrabold uppercase tracking-widest=">
              WEB3 FINANCIAL
            </span>
          </div>

          <h2 className="text-[clamp(32px,7vw,120px)] font-black uppercase tracking-tight leading-[1.1] text-white mb-4 md:mb-8 relative z-20 whitespace-normal md:whitespace-nowrap ">
            Learn, Manage, Grow
          </h2>

          <p className="text-white text-sm md:text-xl mt-2 relative z-20 max-w-2xl px-2 tracking-tight">
            Manage your Web3 finances with full transparency, anytime, anywhere.
          </p>
        </div>

        <div
          ref={mobileWalletContainerRef}
          className="xl:hidden relative z-20 mt-32 md:mt-40 lg:mt-100 mb-8 md:mb-10 w-[250px] h-[220px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] flex items-end justify-center pointer-events-none rotate-[4deg]"
        >
          {walletAssetsData.map((src, i) => (
            <Image
              key={`mobile-asset-${i}`}
              ref={(el) => {
                mobileAssetRefs.current[i] = el;
              }}
              src={src}
              alt={`Asset Web3 Mobile ${i}`}
              width={200}
              height={200}
              className="absolute top-0 w-[100px] md:w-[160px] lg:w-[180px] h-auto object-contain z-90"
            />
          ))}

          <Image
            src="/images/Dompet.svg"
            alt="Dompet Besar Mobile"
            fill
            className="relative z-110 object-bottom object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </section>
    </div>
  );
}
