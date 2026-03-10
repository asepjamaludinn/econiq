"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedLeaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const daunElements = gsap.utils.toArray<HTMLDivElement>(".daun-angin");
      daunElements.forEach((daun) => {
        gsap.to(daun, {
          rotation: gsap.utils.random(-5, 5),
          x: `+=${gsap.utils.random(-5, 5)}`,
          y: `+=${gsap.utils.random(-2, 2)}`,
          transformOrigin: "top center",
          duration: gsap.utils.random(5, 9),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="hidden md:block absolute top-[5%] xl:top-[5%] right-[-2%] w-[100%] xl:w-[30%] z-15 pointer-events-none"
    >
      <div className="relative w-full h-auto">
        <Image
          src="/images/Pohon.svg"
          alt="Pohon Kanan"
          width={500}
          height={500}
          className="w-full h-auto"
        />

        <div className="daun-angin absolute -top-[15%] -right-[12%] w-[120%] opacity-90">
          <Image
            src="/images/Daun.svg"
            alt="Daun cluster"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
