"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marqueeWidth = marqueeRef.current?.offsetWidth || 0;
    gsap.to(marqueeRef.current, {
      x: `-${marqueeWidth / 2}px`,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  const content = (
    <div className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
      <span>ECONIQ</span><span className="text-brand-primary opacity-100">•</span>
      <span>DIGITAL ECONOMY</span><span className="text-brand-primary opacity-100">•</span>
      <span>WEB3</span><span className="text-brand-primary opacity-100">•</span>
      <span>FINTECH</span><span className="text-brand-primary opacity-100">•</span>
      <span>INOVASI</span><span className="text-brand-primary opacity-100">•</span>
    </div>
  );

  return (
    <section className="overflow-hidden py-16 md:py-24 bg-transparent border-y border-white/5">
      <div 
        ref={marqueeRef} 
        className="flex text-white/40 text-xl md:text-4xl font-black uppercase tracking-widest whitespace-nowrap w-max will-change-transform transform-gpu"
      >
        {content}
        {content}
      </div>
    </section>
  );
}