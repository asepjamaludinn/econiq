"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 1. Entrance Animation untuk Teks (Fade & Slide Up bersahutan)
      gsap.fromTo(
        textElementsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%", 
          },
        }
      );

      mm.add("(min-width: 1024px)", () => {
        // 2. Parallax Effect yang super smooth dengan scrub inertia
        imagesRef.current.forEach((img, index) => {
          if (!img) return;
          const speed = parseFloat(img.getAttribute("data-speed") || "1");
          
          // Efek Parallax Scroll
          gsap.to(img, {
            yPercent: -30 * speed, // Menggunakan yPercent lebih stabil dari y absolut
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5, // Angka 1.5 memberikan efek smooth delay/inertia
            },
          });

          // 3. Continuous Floating Effect (Breathing)
          gsap.to(img, {
            y: "+=15",
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  const addToImages = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el);
  };

  const addToText = (el: HTMLElement | null) => {
    if (el && !textElementsRef.current.includes(el)) textElementsRef.current.push(el);
  };

  return (
    <section ref={containerRef} className="relative w-full bg-zinc-900 px-6 md:px-12 py-24 pb-48">
      {/* Container utama menggunakan flex items-start agar sticky berfungsi optimal */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
        
        {/* KOLOM KIRI: Parallax Grid (dibuat lebih tinggi agar scroll terasa panjang) */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative pt-10 pb-32">
          
          {/* Card 1 */}
          <div ref={addToImages} data-speed="1.2" className="mt-32 relative group will-change-transform">
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#B36EE6] shadow-lg">
              24/7 Uptime
            </div>
            <div className="w-full aspect-4/5 bg-white/5 border border-white/10 rounded-4xl flex justify-center items-center overflow-hidden hover:border-[#660DFF]/50 transition-colors duration-500">
              <Image src="/images/Dompet.svg" alt="Wallet" width={150} height={150} className="group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl" />
            </div>
          </div>

          {/* Card 2 */}
          <div ref={addToImages} data-speed="0.7" className="relative group will-change-transform">
             <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#B36EE6] shadow-lg">
              Instant Sync
            </div>
            <div className="w-full aspect-square bg-linear-to-br from-[#660DFF]/10 to-transparent border border-[#660DFF]/20 rounded-4xl flex justify-center items-center overflow-hidden hover:border-[#B36EE6]/50 transition-colors duration-500">
               <Image src="/images/BitCoin.svg" alt="Crypto" width={120} height={120} className="group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl" />
            </div>
          </div>

          {/* Card 3 */}
          <div ref={addToImages} data-speed="1.6" className="col-span-2 relative group mt-12 will-change-transform">
            <div className="w-full h-72 bg-black/40 backdrop-blur-md border border-white/10 rounded-4xlex justify-center items-center overflow-hidden hover:border-[#660DFF]/50 transition-colors duration-500 shadow-2xl">
               <Image src="/images/card.svg" alt="Card" width={220} height={220} className="group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 drop-shadow-2xl" />
            </div>
          </div>

        </div>

        {/* KOLOM KANAN: Pinned Description dengan Native CSS Sticky */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-40 flex flex-col justify-center">
          <div className="max-w-lg">
            {/* Line Indicator */}
            <div ref={addToText} className="w-16 h-1 bg-linear-to-r from-[#B36EE6] to-[#660DFF] mb-10 rounded-full" />
            
            <h3 ref={addToText} className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-8">
              Empowering Your <br/> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50">
                Digital Assets
              </span>
            </h3>
            
            <p ref={addToText} className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 font-medium">
              Seamlessly connect your physical and digital economy. Our infrastructure ensures high-speed execution, top-tier security, and real-time monitoring directly from your dashboard.
            </p>
            
            <ul className="space-y-6">
              {['Smart Contract Integration', 'Cross-border Payments', 'Decentralized Identity'].map((item, i) => (
                <li key={i} ref={addToText} className="flex items-center gap-4 text-white/80 font-bold text-lg">
                  <div className="w-3 h-3 rounded-full bg-linear-to-tr from-[#660DFF] to-[#B36EE6] shadow-[0_0_10px_#B36EE6]" />
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