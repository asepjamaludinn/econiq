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
    <section ref={containerRef} className="relative w-full h-screen bg-transparent overflow-hidden">
      
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
        
        {/* Teks di atas video dibiarkan statis putih karena background-nya video gelap */}
        <div className="relative z-10 border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 cursor-pointer hover:bg-white/10 transition-colors">
          <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
            Building The Concept
          </span>
        </div>
      </div>

      <div
        ref={heroContentRef}
        className="absolute inset-0 w-full h-full z-10 bg-transparent flex flex-col justify-between"
        style={{ clipPath: "inset(0% 0% 0% 0%)", willChange: "clip-path" }}
      >
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-[#660DFF]/30 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#B36EE6]/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
          <p className="text-[#B36EE6] font-bold tracking-widest uppercase mb-4 text-sm md:text-base border border-[#B36EE6]/30 px-4 py-1.5 rounded-full">
            The Digital Frontier
          </p>
          
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] drop-shadow-2xl whitespace-nowrap text-white">
            REIMAGINING <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B36EE6] to-[#660DFF]">
              ECONOMY
            </span>
          </h1>
        </div>

        <div className="relative z-20 w-full border-y border-current/10 bg-black/5 backdrop-blur-md py-5 overflow-hidden flex items-center">
          <div className="whitespace-nowrap animate-marquee flex gap-12 opacity-60 text-xl md:text-2xl font-bold uppercase tracking-widest">
            <span>Decentralized Web3</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Smart Contracts</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Financial Tech</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Innovation</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Decentralized Web3</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Smart Contracts</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Financial Tech</span>
            <span className="text-[#660DFF] opacity-100">•</span>
            <span>Innovation</span>
            <span className="text-[#660DFF] opacity-100">•</span>
          </div>
        </div>
      </div>

    </section>
  );
}