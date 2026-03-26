"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const addToText = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const addToImages = (el: HTMLDivElement | null) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useGSAP(() => {
    imageRefs.current.forEach((img) => {
      const speed = img.getAttribute("data-speed") || "1";
      gsap.to(img, {
        yPercent: -20 * parseFloat(speed),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    textRefs.current.forEach((text) => {
      gsap.from(text, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-6 relative pt-4 md:pt-10 pb-16 md:pb-32">
          
          <div ref={addToImages} data-speed="1.2" className="mt-0 md:mt-32 relative group transform-gpu h-[250px] md:h-auto">
            <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold text-brand-tertiary shadow-lg">
              Akses 24/7
            </div>
            
            <div className="w-full h-full md:h-80 bg-zinc-800 rounded-2xl md:rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl">
              <Image 
                src="/images/Dompet.svg"
                alt="Modul Econiq" 
                fill 
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/40 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
          </div>

          <div ref={addToImages} data-speed="0.7" className="relative group transform-gpu h-[250px] md:h-auto">
             <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold text-brand-tertiary shadow-lg">
              Simulasi Praktis
            </div>

            <div className="w-full h-full md:h-96 bg-zinc-800 rounded-2xl md:rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl">
               <Image 
                src="/images/BitCoin.svg" 
                alt="Simulasi Transaksi" 
                fill 
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
               <div className="absolute inset-0 bg-gradient-to-bl from-brand-tertiary/40 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:sticky lg:top-40 flex flex-col justify-center self-start">
          <div className="max-w-lg">
            <div ref={addToText} className="w-16 h-1 bg-gradient-to-r from-brand-tertiary to-brand-primary mb-8 md:mb-10 rounded-full" />
            
            <h3 ref={addToText} className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-6 md:mb-8 text-white">
              Memberdayakan <br/> 
              <span className="text-white/50">
                Literasi Digital
              </span>
            </h3>
            
            <p ref={addToText} className="text-white/70 text-base md:text-xl leading-relaxed mb-8 md:mb-10 font-medium">
              Pahami ekosistem digital secara komprehensif. Platform edukasi kami menyediakan modul interaktif, simulasi nyata, dan evaluasi pemahaman langsung dari <i>dashboard</i> belajarmu.
            </p>
            
            <ul className="space-y-4 md:space-y-6">
              {['Fundamental Blockchain', 'Simulasi Smart Contract', 'Keamanan Transaksi Web3'].map((item, i) => (
                <li key={i} ref={addToText} className="flex items-center gap-4 text-white/90 font-bold text-base md:text-lg">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-tr from-brand-primary to-brand-tertiary shadow-[0_0_10px_var(--color-brand-tertiary)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}