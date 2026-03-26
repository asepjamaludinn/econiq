"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SocialLinks from "@/components/ui/SocialLinks";
import dynamic from "next/dynamic";

const HeroClouds = dynamic(
  () => import("@/components/sections/home/hero/HeroClouds"),
  { ssr: false },
);

gsap.registerPlugin(ScrollTrigger);

const PineTree = ({ className, alt }: { className: string; alt: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <Image
      src="/images/Pinus.svg"
      alt={alt}
      fill
      className="object-contain object-bottom"
    />
  </div>
);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".mobil-grup",
        { x: "-200px" },
        {
          x: "110vw",
          duration: 25,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.to(".ban-mobil", {
        rotation: 360,
        duration: 1.5,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        force3D: true,
      });
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-brand-primary text-white pt-20 pb-10"
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/images/bg-footer.svg"
          alt="Background Footer"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <HeroClouds />
      </div>

      <div className="absolute bottom-[40vh] md:bottom-[35vh] lg:bottom-[30vh] left-0 w-full h-[30vh] md:h-[45vh] lg:h-[70vh] z-10 pointer-events-none">
        <Image
          src="/images/bukit.svg"
          alt="Bukit Footer"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <PineTree
        alt="Pohon Pinus Kiri"
        className="bottom-[50vh] md:bottom-[50vh] lg:bottom-[45vh] left-[15%] w-12 h-24 md:w-20 md:h-40 lg:w-32 lg:h-64 z-15"
      />
      <PineTree
        alt="Pohon Pinus Tengah Kanan"
        className="bottom-[50vh] md:bottom-[50vh] lg:bottom-[40vh] right-[38%] w-10 h-20 md:w-16 md:h-32 lg:w-24 lg:h-48 z-15 opacity-90"
      />
      <PineTree
        alt="Pohon Pinus Kanan"
        className="bottom-[45vh] md:bottom-[45vh] lg:bottom-[48vh] right-[32%] md:right-[25%] lg:right-[32%] w-14 h-28 md:w-24 md:h-48 lg:w-40 lg:h-60 z-15"
      />

      <div className="absolute bottom-[33vh] md:bottom-[27vh] lg:-bottom-3 left-0 w-full h-[15vh] md:h-[20vh] lg:h-[50vh] z-20 pointer-events-none">
        <Image
          src="/images/jalan-footer.svg"
          alt="Jalan Footer"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="absolute plang-petunjuk bottom-[50vh] md:bottom-[48vh] lg:bottom-[50vh] right-[0%] md:right-[5%] xl:right-[10%] w-12 h-20 md:w-16 md:h-28 lg:w-32 lg:h-48 z-25 pointer-events-none flex justify-center origin-bottom animate-swing">
        <Image
          src="/images/Plang.svg"
          alt="Plang Petunjuk Jalan"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="absolute -bottom-[5vh] md:-bottom-[4vh] lg:-bottom-[14vh] left-0 w-full h-[50vh] md:h-[40vh] lg:h-[51vh] z-30 pointer-events-none">
        <Image
          src="/images/bawahjalan.svg"
          alt="Bawah Jalan"
          fill
          className="object-cover object-top origin-top"
        />
      </div>

      <PineTree
        alt="Pohon Pinus Foreground"
        className="bottom-[30vh] md:bottom-[6vh] lg:-bottom-[10vh] left-[30%] w-16 h-32 md:w-24 md:h-48 lg:w-40 lg:h-[28rem] z-30"
      />

      <div className="hidden lg:block absolute bottom-[35vh] left-0 w-[400px] h-[200px] z-25 mobil-grup pointer-events-none">
        <div
          className="absolute z-[-1]"
          style={{
            bottom: "-20px",
            left: "5%",
            width: "90%",
            height: "40px",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            filter: "blur(6px)",
            transform: "scaleY(0.5)",
          }}
        />

        <div className="absolute inset-0">
          <Image
            src="/images/mobil.svg"
            alt="Mobil"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute -bottom-[5px] right-[35px] w-13 h-13 flex items-center justify-center">
          <img
            src="/images/bandepan.svg"
            alt="Ban Depan"
            className="ban-mobil w-full h-full object-contain"
          />
        </div>
        <div className="absolute -bottom-[5px] left-[30px] w-13 h-13 flex items-center justify-center">
          <img
            src="/images/banbelakang1.svg"
            alt="Ban Belakang 1"
            className="ban-mobil w-full h-full object-contain"
          />
        </div>
        <div className="absolute -bottom-[5px] left-[85px] w-13 h-13 flex items-center justify-center">
          <img
            src="/images/banbelakang2.svg"
            alt="Ban Belakang 2"
            className="ban-mobil w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-60 max-w-[1400px] mx-auto w-full px-5 md:px-8 lg:px-12 flex flex-col mt-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left drop-shadow-md">
          <p className="order-2 lg:order-1 text-white/80 font-medium text-sm tracking-tight">
            © {new Date().getFullYear()} ECONIQ. Seluruh hak cipta dilindungi.
          </p>

          <div className="order-1 lg:order-2">
            <SocialLinks />
          </div>

          <p className="order-3 lg:order-3 text-white/80 font-medium text-sm tracking-tight">
            Didesain & Dikembangkan oleh Bismillah Win
          </p>
        </div>
      </div>
    </footer>
  );
}
