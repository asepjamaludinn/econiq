"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { marqueeItems } from "@/constants";

export default function AboutMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!marqueeRef.current) return;

      const marqueeWidth = marqueeRef.current.offsetWidth;

      gsap.to(marqueeRef.current, {
        x: `-${marqueeWidth / 2}px`,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      gsap.set(marqueeRef.current, { skewX: -5 });
    },
    { scope: marqueeRef },
  );

  const content = (
    <div className="flex gap-10 md:gap-20 items-center px-5 md:px-10">
      {marqueeItems.map((item, idx) => (
        <div key={idx} className="flex gap-10 md:gap-20 items-center">
          <span className="hover:text-brand-primary transition-colors duration-300">
            {item}
          </span>
          <span className="text-brand-secondary/30 text-2xl md:text-5xl font-light">
            /
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="overflow-hidden py-12 md:py-20 bg-white border-y border-zinc-100 relative">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={marqueeRef}
        className="flex text-zinc-300 text-3xl md:text-7xl font-black uppercase tracking-tighter whitespace-nowrap w-max will-change-transform transform-gpu select-none"
      >
        {content}
        {content}
      </div>
    </section>
  );
}
