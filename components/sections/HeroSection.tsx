"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroClouds from "./hero/HeroClouds";
import AnimatedLeaves from "./hero/AnimatedLeaves";
import WalkingMan from "./hero/WalkingMan";
import CatAnimation from "./hero/CatAnimation";
import MoneyRain from "./hero/MoneyRain";
import TenantInteraction from "./hero/TenantInteraction";
import WindowPlant from "./hero/WindowPlant";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pagarRef = useRef<HTMLDivElement>(null);
  const ekstensiRef = useRef<HTMLDivElement>(null);
  const jalanRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
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
        } else if (pagarRef.current) {
          tlScroll.to(
            pagarRef.current,
            { y: "-30vh", scale: 1.1, ease: "none" },
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
          gsap.utils.toArray<HTMLDivElement>(".nempel-jalan");
        if (nempelJalanElements.length > 0) {
          tlScroll.to(nempelJalanElements, { y: "6vh", ease: "none" }, 0);
        }
      });

      mm.add("(max-width: 1023px)", () => {});
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden bg-[#8644F7] md:bg-transparent"
    >
      {/* Latar Belakang & Langit*/}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Biru langit.svg"
          alt="Langit Biru"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Awan & Daun Terbang */}
      <div className="hidden md:block">
        <HeroClouds />
        <AnimatedLeaves />
      </div>

      {/* Pohon Latar Belakang */}
      <div className="hidden md:block absolute -top-[30%] -right-5 w-[30%] h-[100%] z-15 pointer-events-none">
        <Image
          src="/images/Pohon.svg"
          alt="Pohon Kanan"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* Judul Utama */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] max-w-3xl z-50 pointer-events-none flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal leading-[1.1] text-white md:text-[#3D2616]">
          Know Your Money. <br className="hidden md:block" />
          <span className="text-white md:text-[#3D2616]">Grow Your Money.</span>
        </h1>
      </div>

      {/* Elemen yang Nempel di Jalan */}
      <div className="nempel-jalan absolute bottom-[10%] w-full h-full z-20">
        {/* Rumah Kiri & Kanan */}
        <div className="hidden md:block absolute bottom-0 -left-[14.8%] w-[40%] h-[80%] z-20 pointer-events-none">
          <Image
            src="/images/Rumah kiri.svg"
            alt="Rumah Kiri"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </div>
        <div className="hidden md:block absolute bottom-0 -right-[14.8%] w-[40%] h-[80%] z-20 pointer-events-none">
          <Image
            src="/images/Rumah kanan.svg"
            alt="Rumah Kanan"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>

        <WindowPlant />

        {/* Background Ungu Tengah */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[50%] h-full bg-[#8644F7] z-25 pointer-events-none shadow-none md:shadow-[0_0_40px_rgba(102,13,255,0.4)]">
          <div className="absolute top-0 -left-10 md:-left-1 w-[15%] h-full z-30">
            <Image
              src="/images/Hiasan Tembok.svg"
              alt="Hiasan Tembok Kiri"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="absolute top-0 -right-10 md:-right-2 w-[15%] h-full z-30">
            <Image
              src="/images/Hiasan Tembok.svg"
              alt="Hiasan Tembok Kanan"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        <TenantInteraction />
      </div>

      {/* Jalan */}
      <div
        className="absolute bottom-0 left-0 w-full h-[10%] z-40 pointer-events-none"
        style={{ perspective: "1000px" }}
      >
        <div ref={jalanRef} className="relative w-full h-full origin-bottom">
          <Image
            src="/images/Jalan.svg"
            alt="Jalan"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>

      {/* Kucing */}
      <div className="hidden md:flex nempel-jalan absolute bottom-4 left-[14%] w-[80px] aspect-[1/1.2] z-40 pointer-events-none flex-col items-center">
        <CatAnimation />
      </div>

      {/* Orang Jalan  */}
      <div className="hidden md:block nempel-jalan absolute inset-0 w-full h-full z-50 pointer-events-none">
        <WalkingMan />
      </div>

      {/* Pagar */}
      <div
        ref={pagarRef}
        className="absolute bottom-0 left-0 w-full h-[15%] md:h-[20%] z-60 pointer-events-none origin-bottom"
      >
        <Image
          src="/images/Pager.svg"
          alt="Pagar Depan"
          fill
          className="object-cover md:object-contain object-bottom"
          priority
        />
      </div>

      <MoneyRain />

      <div
        ref={ekstensiRef}
        className="absolute bottom-0 left-0 w-full h-[15%] md:h-[25%] z-70 pointer-events-none origin-bottom"
      >
        <div className="absolute top-full left-0 w-full h-[50vh] bg-[#B36EE6]"></div>
      </div>
    </section>
  );
}
