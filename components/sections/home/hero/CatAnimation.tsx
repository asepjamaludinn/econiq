"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function CatAnimation() {
  const kepalaKucingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (kepalaKucingRef.current) {
      gsap.set(kepalaKucingRef.current, {
        transformOrigin: "bottom center",
        rotation: -10,
      });

      gsap.to(kepalaKucingRef.current, {
        rotation: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: kepalaKucingRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        },
      });
    }
  });

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute z-0"
        style={{
          bottom: "22%",
          left: "10%",
          width: "80%",
          height: "15%",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(3px)",
          transform: "scaleY(0.5)",
        }}
      ></div>

      <div className="relative w-full h-[50%] z-10 translate-y-[15%] md:translate-y-[25%] -translate-x-[6%] md:-translate-x-[30%]">
        <div ref={kepalaKucingRef} className="relative w-full h-full">
          <Image
            src="/images/kepala meng1.svg"
            alt="Kepala Kucing"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative w-full h-[65%] -translate-y-[20%] md:-translate-y-[25%]">
        <Image
          src="/images/meng1 tanpa kepala.svg"
          alt="Badan Kucing"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  );
}
