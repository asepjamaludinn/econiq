"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WindowPlant() {
  const tanamanJendelaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (tanamanJendelaRef.current) {
      gsap.to(tanamanJendelaRef.current, {
        rotation: 3,
        transformOrigin: "bottom center",
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  });

  return (
    <>
      <div className="hidden md:block absolute top-[65%] left-10 w-[20%] h-[20%] z-30 pointer-events-none">
        <Image
          src="/images/Jendela tanpa.svg"
          alt="Jendela Kiri"
          fill
          className="object-contain"
        />
      </div>

      <div
        ref={tanamanJendelaRef}
        className="hidden md:block absolute top-[73%] left-25 w-[12%] h-[12%] z-40 pointer-events-none"
      >
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: "translate(25px, 10px) skewX(25deg)",
            transformOrigin: "bottom center",
            opacity: 0.2,
            zIndex: -1,
          }}
        >
          <Image
            src="/images/tanaman jendela kiri.svg"
            alt="Shadow"
            fill
            className="object-contain object-bottom brightness-0"
          />
        </div>
        <Image
          src="/images/tanaman jendela kiri.svg"
          alt="Tanaman"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="hidden md:block absolute top-[80%] left-25 w-[12%] h-[12%] z-50 pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: "translate(30px, 10px) skewX(20deg)",
            transformOrigin: "bottom center",
            opacity: 0.2,
            zIndex: -1,
          }}
        >
          <Image
            src="/images/wadah tanaman jendela kiri.svg"
            alt="Shadow Wadah"
            fill
            className="object-contain brightness-0"
          />
        </div>
        <Image
          src="/images/wadah tanaman jendela kiri.svg"
          alt="Wadah"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}
