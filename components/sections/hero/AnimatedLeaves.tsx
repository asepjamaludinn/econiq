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
      className="absolute inset-0 w-full h-full pointer-events-none z-[20]"
    >
      <div className="daun-angin absolute -top-[3%] -right-35 w-[40%] h-[40%] opacity-90">
        <Image
          src="/images/Daun.svg"
          alt="Daun cluster"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
