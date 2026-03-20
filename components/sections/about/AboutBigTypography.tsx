"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutBigTypography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="py-32 md:py-48 bg-transparent flex justify-center items-center px-6"
    >
      <h2 
        ref={textRef}
        className="text-5xl md:text-8xl lg:text-[110px] font-black uppercase text-center leading-[0.9] tracking-tighter"
      >
        <span>TRANSACT</span> <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B36EE6] to-[#660DFF]">
          ANYWHERE, ANYTIME
        </span>
      </h2>
    </section>
  );
}