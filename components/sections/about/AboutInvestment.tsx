"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutInvestment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 0.8, rotation: 10 },
        { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.5)" },
        "-=0.7"
      );

      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-32 md:py-48 flex items-center overflow-hidden bg-[linear-gradient(to_bottom,var(--color-zinc-900)_50%,#000000_50%)] lg:bg-[linear-gradient(to_right,var(--color-zinc-900)_50%,#000000_50%)]"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 relative z-10">
        <div ref={textRef} className="flex flex-col justify-center pr-0 lg:pr-12">
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] mb-6">
            LOW BARRIER. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B36EE6] to-[#660DFF]">
              HIGH YIELD.
            </span>
          </h2>
          <p className="text-white/70 text-xl font-medium max-w-md leading-relaxed">
            Econiq removes the friction of traditional finance. Deploy your assets into our ecosystem with minimal fees and maximize your returns instantly.
          </p>
        </div>
        <div className="relative flex justify-center lg:justify-start items-center lg:-ml-16 xl:-ml-24">
          <div ref={imageRef} className="relative z-20 w-full max-w-100 aspect-square rounded-[40px] bg-linear-to-br from-[#660DFF]/20 to-black/80 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(102,13,255,0.3)] flex justify-center items-center">
             <Image 
                src="/images/BitCoin.svg" 
                alt="High Yield Asset" 
                width={200} 
                height={200} 
                className="drop-shadow-2xl"
             />
             <div className="absolute -bottom-6 -right-6 bg-[#B36EE6] text-black font-black uppercase text-sm px-6 py-3 rounded-full rotate-[-5deg]">
                Maximized ROI
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}