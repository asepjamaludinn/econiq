"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
          },
        });

        tl.to(heroContentRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "none",
        });

        tl.fromTo(
          videoContainerRef.current,
          { scale: 1.15, filter: "brightness(40%)" },
          { scale: 1, filter: "brightness(100%)", ease: "none" },
          0
        );
      });
      
      mm.add("(max-width: 767px)", () => {
         gsap.to(heroContentRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            ease: "none",
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top top",
               end: "bottom top",
               scrub: true,
            }
         })
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-zinc-900 overflow-hidden">
      
      <div
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full z-0 flex flex-col items-center justify-end bg-black pb-12 md:pb-20"
      >
        <video
          src="/animations/econiq.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        
        <div className="relative z-10 border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
            Building The Concept
          </span>
        </div>
      </div>

      <div
        ref={heroContentRef}
        className="absolute inset-0 w-full h-full z-10 bg-zinc-900 flex flex-col justify-between"
        style={{ clipPath: "inset(0% 0% 0% 0%)", willChange: "clip-path" }}
      >
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-[#660DFF]/30 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#B36EE6]/20 blur-[100px] rounded-full pointer-events-none" />

        <header className="w-full flex justify-between items-center px-6 md:px-12 py-6 relative z-20">
           <div className="text-white font-black text-xl tracking-widest">ECONIQ</div>
           <div className="flex items-center gap-4">
              <button className="text-white hover:text-[#B36EE6] transition-colors"><Search size={20}/></button>
              <button className="border border-[#660DFF] bg-[#660DFF]/10 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#660DFF] transition-all">
                 Ecosystem
              </button>
           </div>
        </header>

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
          <p className="text-[#B36EE6] font-bold tracking-widest uppercase mb-4 text-sm md:text-base border border-[#B36EE6]/30 px-4 py-1.5 rounded-full">
            The Digital Frontier
          </p>
          
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-2xl whitespace-nowrap">
            REIMAGINING <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B36EE6] to-[#660DFF]">
              ECONOMY
            </span>
          </h1>
        </div>

        <div className="relative z-20 w-full border-y border-white/10 bg-black/40 backdrop-blur-md py-5 overflow-hidden flex items-center">
          <div className="whitespace-nowrap animate-marquee flex gap-12 text-white/40 text-xl md:text-2xl font-bold uppercase tracking-widest">
            <span>Decentralized Web3</span>
            <span className="text-[#660DFF]">•</span>
            <span>Smart Contracts</span>
            <span className="text-[#660DFF]">•</span>
            <span>Financial Tech</span>
            <span className="text-[#660DFF]">•</span>
            <span>Innovation</span>
            <span className="text-[#660DFF]">•</span>
            <span>Decentralized Web3</span>
            <span className="text-[#660DFF]">•</span>
            <span>Smart Contracts</span>
            <span className="text-[#660DFF]">•</span>
            <span>Financial Tech</span>
            <span className="text-[#660DFF]">•</span>
            <span>Innovation</span>
            <span className="text-[#660DFF]">•</span>
          </div>
        </div>
      </div>

    </section>
  );
}