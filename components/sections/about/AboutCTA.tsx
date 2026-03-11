"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".cta-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto bg-linear-to-br from-[#660DFF]/20 to-[#0A7B5E]/20 border border-white/10 rounded-4xl p-12 md:p-20 text-center relative overflow-hidden">
        
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#660DFF]/10 blur-[100px] -z-10" />

        <div className="cta-content flex flex-col items-center z-10 relative">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6 tracking-tight">
            High Security. <br/> Maximum Yield.
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Our network grows day by day in strategic regions approved by our core protocol. Join the ecosystem and deploy your node today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#660DFF] hover:bg-[#8644F7] transition-colors rounded-full font-bold text-white uppercase tracking-wider text-sm shadow-lg shadow-[#660DFF]/30">
              Start Your Node
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 transition-colors rounded-full font-bold text-white uppercase tracking-wider text-sm">
              Read Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}