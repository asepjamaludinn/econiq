"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { heroData } from "@/constants";
import TenantInteraction from "./hero/TenantInteraction";
import WindowPlant from "./hero/WindowPlant";
import AnimatedLeaves from "./hero/AnimatedLeaves";
const HeroClouds = dynamic(() => import("./hero/HeroClouds"), { ssr: false });
const WalkingMan = dynamic(() => import("./hero/WalkingMan"), { ssr: false });
const CatAnimation = dynamic(() => import("./hero/CatAnimation"), {
  ssr: false,
});
const MoneyRain = dynamic(() => import("./hero/MoneyRain"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pagarRef = useRef<HTMLDivElement>(null);
  const ekstensiRef = useRef<HTMLDivElement>(null);
  const jalanRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        if (pagarRef.current && ekstensiRef.current) {
          tlScroll.to(
            [pagarRef.current, ekstensiRef.current],
            {
              y: "-30vh",
              scale: 1.1,
              ease: "none",
              transformOrigin: "bottom center",
            },
            0,
          );
        }

        if (jalanRef.current) {
          tlScroll.to(
            jalanRef.current,
            { rotationX: 60, scaleX: 1.1, ease: "none" },
            0,
          );
        }

        const nempelJalanElements =
          gsap.utils.toArray<HTMLElement>(".nempel-jalan");
        if (nempelJalanElements.length > 0) {
          tlScroll.to(nempelJalanElements, { y: "6vh", ease: "none" }, 0);
        }

        return () => {
          tlScroll.kill();
        };
      });

      mm.add("(max-width: 1279px)", () => {
        gsap.set(
          [
            pagarRef.current,
            ekstensiRef.current,
            jalanRef.current,
            ".nempel-jalan",
          ],
          {
            clearProps: "all",
          },
        );
      });

      if (arrowRef.current) {
        gsap.to(arrowRef.current, {
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200",
            scrub: true,
          },
        });
      }

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden bg-brand-secondary md:bg-transparent"
    >
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Biru langit.svg"
          alt="Langit Biru"
          aria-hidden="true"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="hidden md:block">
        <HeroClouds />
      </div>

      <AnimatedLeaves />

      <div className="absolute top-[18%] md:top-[12%] lg:top-[10%] left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] max-w-3xl lg:max-w-5xl xl:max-w-7xl z-50 pointer-events-none flex flex-col items-center justify-center text-center">
        <h1 className="text-[clamp(32px,8vw,48px)] md:text-5xl lg:text-6xl xl:text-5xl font-black uppercase tracking-normal leading-[1.15] text-white drop-shadow-lg mt-8 md:mt-0">
          {heroData.titleLine1} <br className="hidden md:block" />
          <span className="text-white">{heroData.titleLine2}</span>
        </h1>
      </div>

      <div className="nempel-jalan absolute bottom-[10%] w-full h-full z-20">
        <div className="hidden xl:block absolute bottom-0 -left-[14.8%] w-[40%] h-[80%] z-20 pointer-events-none">
          <Image
            src="/images/Rumah kiri.svg"
            alt="Rumah Kiri"
            aria-hidden="true"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </div>
        <div className="hidden xl:block absolute bottom-0 -right-[14.8%] w-[40%] h-[80%] z-20 pointer-events-none">
          <Image
            src="/images/Rumah kanan.svg"
            alt="Rumah Kanan"
            aria-hidden="true"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>

        <WindowPlant />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full xl:w-[50%] h-full z-25 pointer-events-none">
          <div className="absolute inset-0 bg-brand-secondary xl:shadow-[0_0_40px_rgba(102,13,255,0.4)]" />

          <div className="absolute bottom-0 left-0 w-[15%] md:w-[10%] xl:w-[15%] h-full z-30 transform -translate-x-[45%] md:-translate-x-[50%] xl:-translate-x-[5%]">
            <Image
              src="/images/Hiasan Tembok.svg"
              alt="Hiasan Tembok Kiri"
              aria-hidden="true"
              fill
              className="object-cover xl:object-contain object-left-bottom"
              priority
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[15%] md:w-[10%] xl:w-[15%] h-full z-30 transform translate-x-[45%] md:translate-x-[60%] xl:translate-x-[8%]">
            <Image
              src="/images/Hiasan Tembok.svg"
              alt="Hiasan Tembok Kanan"
              aria-hidden="true"
              fill
              className="object-cover xl:object-contain object-right-bottom"
              priority
            />
          </div>
        </div>

        <TenantInteraction />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[10%] z-40 pointer-events-none"
        style={{ perspective: "1000px" }}
      >
        <div ref={jalanRef} className="relative w-full h-full origin-bottom">
          <Image
            src="/images/Jalan.svg"
            alt="Jalan"
            aria-hidden="true"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>

      <div className="hidden md:flex nempel-jalan absolute bottom-4 left-[14%] w-20 aspect-[1/1.2] z-40 pointer-events-none flex-col items-center">
        <CatAnimation />
      </div>

      <div className="hidden md:block nempel-jalan absolute inset-0 w-full h-full z-50 pointer-events-none">
        <WalkingMan />
      </div>

      <div
        ref={pagarRef}
        className="absolute bottom-0 left-0 w-full h-[15%] xl:h-[20%] z-60 pointer-events-none origin-bottom will-change-transform"
      >
        <Image
          src="/images/Pager.webp"
          alt="Pagar Depan"
          aria-hidden="true"
          fill
          className="object-cover xl:object-contain object-bottom"
          priority
        />
      </div>

      <MoneyRain />

      <div
        ref={ekstensiRef}
        className="absolute bottom-0 left-0 w-full h-[15%] md:h-[25%] z-70 pointer-events-none origin-bottom will-change-transform"
      >
        <div className="absolute top-full left-0 w-full h-[50vh] bg-brand-tertiary"></div>
      </div>

      <div
        ref={arrowRef}
        className="absolute bottom-[4%] md:bottom-[6%] inset-x-0 mx-auto w-fit z-80 animate-bounce pointer-events-none"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary rounded-[14px] md:rounded-[18px] flex items-center justify-center">
          <ArrowDown size={28} strokeWidth={2.5} className="text-white" />
        </div>
      </div>
    </section>
  );
}
