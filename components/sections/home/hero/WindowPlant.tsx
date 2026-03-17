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
    <div className="hidden xl:block absolute top-[70%] 2xl:top-[65%] left-[5%] 2xl:left-[5%] w-[10%] aspect-square z-30 pointer-events-none">
      {/* JENDELA (Background) */}
      <Image
        src="/images/Jendela tanpa.svg"
        alt="Jendela Kiri"
        fill
        className="object-contain"
      />

      {/* TANAMAN  */}
      <div className="absolute =bottom-[20%] left-1/2 -translate-x-1/2 w-[130%] flex flex-col items-center justify-end z-40">
        {/* Container Tanaman */}
        <div
          ref={tanamanJendelaRef}
          className="relative w-[75%] aspect-square z-40 pointer-events-none"
        >
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              transform: "translate(5%,5%) skewX(25deg)",
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

        {/* Container Wadah/Pot */}
        <div className="relative w-[85%] aspect-[2/1] -mt-[10%] z-50 pointer-events-none">
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              transform: "translate(15%, -25%) skewX(20deg)",
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
            className="object-contain object-top"
          />
        </div>
      </div>
    </div>
  );
}
