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
        scrollTrigger: { trigger: containerRef.current, start: "top 70%", end: "bottom 80%", toggleActions: "play none none reverse" },
      });

      tl.fromTo(textRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .fromTo(imageRef.current, { x: 100, opacity: 0, scale: 0.8, rotation: 10 }, { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.5)" }, "-=0.7");

      gsap.to(imageRef.current, { y: -50, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 1 } });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 flex items-center overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 relative z-10">
        <div ref={textRef} className="relative z-30 flex flex-col justify-center pr-0 lg:pr-12">
          <h2 className="text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
            BARRIER RENDAH. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tertiary to-brand-primary">
              YIELD MAKSIMAL.
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-md leading-relaxed">
            Econiq menghilangkan hambatan dari sistem <i>finance</i> tradisional. <i>Deploy</i> aset kamu ke dalam ekosistem kami dengan biaya minimal dan maksimalkan <i>return</i> secara instan.
          </p>
        </div>
        <div className="relative flex justify-center lg:justify-start items-center lg:-ml-16 xl:-ml-24">
          <div ref={imageRef} className="relative z-20 w-full max-w-100 aspect-square rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(102,13,255,0.1)] flex justify-center items-center transform-gpu will-change-transform">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-[40px] pointer-events-none" />
             <Image src="/images/BitCoin.svg" alt="High Yield Asset" width={200} height={200} className="drop-shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 bg-brand-tertiary text-white font-black uppercase tracking-wider text-xs px-6 py-3 rounded-full rotate-[-5deg] shadow-xl">
                ROI Maksimal
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}