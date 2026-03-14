"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { sumberUangData } from "@/constants";

const uangHujan = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  src: sumberUangData[i % sumberUangData.length],
  size: 40 + (i % 3) * 15,
}));

export default function MoneyRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const uangElements = gsap.utils.toArray<HTMLDivElement>(".uang-jatuh");

        uangElements.forEach((uang) => {
          const dropUang = () => {
            gsap.fromTo(
              uang,
              {
                y: -150,
                x: () => gsap.utils.random(0, window.innerWidth),
                opacity: 1,
              },
              {
                y: window.innerHeight + 150,
                x: `+=${gsap.utils.random(-150, 150)}`,
                duration: gsap.utils.random(7, 12),
                ease: "none",
                onComplete: () => {
                  const nextDelay = gsap.utils.random(2, 12);
                  gsap.delayedCall(nextDelay, dropUang);
                },
              },
            );
          };
          gsap.delayedCall(gsap.utils.random(2, 8), dropUang);
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[65]"
    >
      {uangHujan.map((uang) => (
        <div
          key={`uang-${uang.id}`}
          className="uang-jatuh absolute top-[-100px] left-0 opacity-0"
          style={{ width: `${uang.size}px`, height: `${uang.size}px` }}
        >
          <Image src={uang.src} alt="Uang" fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}
