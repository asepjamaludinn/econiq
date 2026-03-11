"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe, ShieldCheck } from "lucide-react";

export default function AboutSecurity() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".sec-item", 
      { x: -50, opacity: 0 },
      { 
        x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#660DFF]/10 py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="sec-item">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6">Track <br/>Remotely</h2>
          <p className="text-white/70 text-lg mb-8">
            Listen, see, and manage your assets in real-time. Our Web3 infrastructure ensures complete protection against tampering.
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#660DFF] flex items-center justify-center mb-3">
                <Globe className="text-white w-8 h-8" />
              </div>
              <span className="font-bold text-sm">Global Node</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center mb-3">
                <ShieldCheck className="text-[#0A7B5E] w-8 h-8" />
              </div>
              <span className="font-bold text-sm">Encrypted</span>
            </div>
          </div>
        </div>
        
        <div className="sec-item relative w-full aspect-square md:aspect-auto md:h-125 bg-zinc-800 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#660DFF]/30 to-transparent opacity-50" />
          <span className="text-white/30 font-bold uppercase tracking-widest relative z-10">Ecosystem UI Simulation</span>
        </div>
      </div>
    </section>
  );
}