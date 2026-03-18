"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".burung-1",
        { x: "-10vw", y: 0 },
        {
          x: "110vw",
          y: -50,
          duration: 30,
          repeat: -1,
          ease: "none",
        },
      );

      gsap.to(".burung-1", {
        y: "+=20",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".burung-2",
        { x: "110vw", y: 30 },
        {
          x: "-10vw",
          y: -20,
          duration: 40,
          repeat: -1,
          ease: "none",
        },
      );

      gsap.to(".burung-2", {
        y: "-=25",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".mobil-grup",
        { x: "-200px" },
        {
          x: "110vw",
          duration: 25,
          repeat: -1,
          ease: "none",
        },
      );

      gsap.to(".ban-depan, .ban-belakang-1, .ban-belakang-2", {
        rotation: 360,
        duration: 1.5,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.to(".plang-petunjuk", {
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 100%",
      });
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-brand-primary text-white pt-20 pb-10"
    >
      {/* 1. Background Dasar Footer (Langit) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/images/bg-footer.svg"
          alt="Background Footer"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* 2. Burung Terbang (Area Atas) */}
      <div className="absolute top-[10%] md:top-[15%] left-0 w-full h-[50%] z-[5] pointer-events-none">
        <div className="burung-1 absolute top-[10%] left-0 w-16 h-16 md:w-24 md:h-24 opacity-80">
          <Image
            src="/images/burung1.svg"
            alt="Burung Terbang"
            fill
            className="object-contain"
          />
        </div>
        <div className="burung-2 absolute top-[30%] right-0 w-12 h-12 md:w-20 md:h-20 opacity-60">
          <Image
            src="/images/burung2.svg"
            alt="Burung Terbang"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 3. Bukit (Background / Midground) */}
      <div className="absolute bottom-[15vh] md:bottom-[25vh] lg:bottom-[30vh] left-0 w-full h-[45vh] md:h-[70vh] z-10 pointer-events-none">
        <Image
          src="/images/bukit.svg"
          alt="Bukit Footer"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* 4. Jalan (Foreground Paling Depan) */}
      <div className="absolute -bottom-3 left-0 w-full h-[20vh] md:h-[30vh] lg:h-[50vh] z-20 pointer-events-none">
        <Image
          src="/images/jalan-footer.svg"
          alt="Jalan Footer"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="absolute plang-petunjuk bottom-[22vh] md:bottom-[32vh] lg:bottom-[50vh] right-[10%] w-20 h-32 md:w-32 md:h-48 z-23 pointer-events-none flex justify-center origin-bottom">
        <Image
          src="/images/Plang.svg"
          alt="Plang Petunjuk Jalan"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* 5. Bawah Jalan (Tanah / Bagian Bawah Aspal) */}
      <div className="absolute bottom-[5vh] md:-bottom[10vh] lg:-bottom-[12vh] left-0 w-full h-[50vh] z-[30] pointer-events-none">
        <Image
          src="/images/bawahjalan.svg"
          alt="Bawah Jalan"
          fill
          className="object-cover object-top origin-top"
        />
      </div>

      <div className="absolute bottom-[15vh] md:bottom-[20vh] lg:bottom-[35vh] left-0 w-72 h-36 md:w-[400px] md:h-[200px] z-25 mobil-grup pointer-events-none">
        {/* Tubuh Mobil */}
        <div className="absolute inset-0">
          <Image
            src="/images/mobil.svg"
            alt="Mobil"
            fill
            className="object-contain"
          />
        </div>

        {/* Ban Depan */}
        <div className="absolute bottom-[15px] md:-bottom-[5px] right-[45px] md:right-[35px] w-7 h-7 md:w-13 md:h-13 flex items-center justify-center">
          <img
            src="/images/bandepan.svg"
            alt="Ban Depan"
            className="ban-depan w-full h-full object-contain"
          />
        </div>

        {/* Ban Belakang 1 */}
        <div className="absolute bottom-[15px] md:-bottom-[5px] left-[32px] md:left-[30px] w-7 h-7 md:w-13 md:h-13 flex items-center justify-center">
          <img
            src="/images/banbelakang1.svg"
            alt="Ban Belakang 1"
            className="ban-belakang-1 w-full h-full object-contain"
          />
        </div>

        {/* Ban Belakang 2 */}
        <div className="absolute bottom-[15px] md:-bottom-[5px] left-[75px] md:left-[85px] w-7 h-7 md:w-13 md:h-13 flex items-center justify-center">
          <img
            src="/images/banbelakang2.svg"
            alt="Ban Belakang 2"
            className="ban-belakang-2 w-full h-full object-contain"
          />
        </div>
      </div>

      {/* --- LAYER CONTENT --- */}
      <div className="relative z-30 max-w-[1400px] mx-auto w-full px-5 md:px-8 lg:px-12 flex flex-col mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 mb-12 md:mb-16 bg-black/10 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-transparent"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left drop-shadow-md">
          <p className="text-white/80 font-medium text-sm tracking-tight">
            © {new Date().getFullYear()} ECONIQ. Seluruh hak cipta dilindungi.
          </p>

          <SocialLinks />

          <p className="text-white/80 font-medium text-sm tracking-tight">
            Didesain & Dikembangkan oleh Bismillah Win
          </p>
        </div>
      </div>
    </footer>
  );
}
