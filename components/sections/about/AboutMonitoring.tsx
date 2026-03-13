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
  const containerRef = useRef<HTMLOptionElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  useGSAP(
    () => {
      gsap.fromTo(
        objectRef.current,
        { scale: 0.5, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.to(objectRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-black relative flex flex-col items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#660DFF]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative z-10 text-center px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
          Monitor Assets <br /> <span className="text-[#B36EE6]">Remotely</span>
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Keep your finger on the pulse of your digital economy.
        </p>
      </div>
      <div ref={objectRef} className="relative z-10 mb-20">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-white/5 border border-white/10 rounded-full flex justify-center items-center backdrop-blur-md shadow-[0_0_100px_rgba(102,13,255,0.2)]">
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-sm">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#660DFF] text-white shadow-lg shadow-[#660DFF]/50"
                  : "text-white/50 hover:text-white hover:bg-white/10"
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
                 className="text-white/80 text-lg md:text-xl font-medium animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl"
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