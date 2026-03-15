"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ContentCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="w-full px-4 md:px-6 lg:px-10 py-16 max-w-full mx-auto">
      <div
        ref={containerRef}
        className="relative w-full rounded-[30px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-grad-start to-grad-end text-white p-10 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-2xl"
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30 shadow-lg">
          <Mail size={32} className="text-white" />
        </div>

        <h2 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6 max-w-3xl drop-shadow-md">
          Never Miss a Digital Shift
        </h2>

        <p className="relative z-10 text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl leading-relaxed">
          Stay ahead of the curve. Get our latest Web3 insights, market
          deep-dives, and tech news delivered straight to your inbox every week.
        </p>

        <button
          onClick={() => {
            const emailButton = document.querySelector(
              'button[aria-label="Buka form berlangganan email"]',
            ) as HTMLButtonElement;
            emailButton?.click();
          }}
          className="relative z-10 group bg-white text-brand-primary px-10 py-5 rounded-2xl font-bold text-lg md:text-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
}
