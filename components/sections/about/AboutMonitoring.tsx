"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tabData = [
  { id: "realtime", label: "Real-time Tracker", desc: "Monitor your portfolio and transaction history instantly with zero latency." },
  { id: "security", label: "Encrypted Vault", desc: "Military-grade encryption securing your digital assets across the blockchain." },
  { id: "analytics", label: "Yield Analytics", desc: "Deep dive into your economic growth with AI-driven visual analytics." },
];

export default function AboutMonitoring() {
  const containerRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("realtime");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      gsap.fromTo(
        objectRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
      mm.add("(min-width: 768px)", () => {
        gsap.to(objectRef.current, {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          force3D: true,
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-transparent relative flex flex-col items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#660DFF]/15 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
          Monitor Assets <br /> <span className="text-[#B36EE6]">Remotely</span>
        </h2>
        <p className="opacity-60 text-lg max-w-xl mx-auto">
          Keep your finger on the pulse of your digital economy.
        </p>
      </div>

      <div ref={objectRef} className="relative z-10 mb-20">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-black/10 border border-current/10 rounded-full flex justify-center items-center backdrop-blur-md shadow-[0_0_100px_rgba(102,13,255,0.2)]">
           <Image 
              src="/globe.svg" 
              alt="Global Monitoring" 
              width={180} 
              height={180} 
              className="opacity-90"
           />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 bg-black/5 p-2 rounded-full border border-current/10 backdrop-blur-sm">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#660DFF] text-white shadow-lg shadow-[#660DFF]/50"
                  : "opacity-50 hover:opacity-100 hover:bg-current/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="h-24 flex items-start justify-center text-center">
          {tabData.map((tab) => (
             activeTab === tab.id && (
               <p 
                 key={tab.id} 
                 className="opacity-80 text-lg md:text-xl font-medium animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl"
               >
                 {tab.desc}
               </p>
             )
          ))}
        </div>
      </div>
    </section>
  );
}