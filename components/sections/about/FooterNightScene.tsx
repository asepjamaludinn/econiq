'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FooterNightScene() {
  const footerRef = useRef<HTMLElement>(null);
  const cloud1Ref = useRef<HTMLImageElement>(null);
  const cloud2Ref = useRef<HTMLImageElement>(null);
  const lampLightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(cloud1Ref.current, {
      x: 100,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(cloud2Ref.current, {
      x: -80,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(lampLightRef.current, {
      opacity: 0.6,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      repeatDelay: Math.random() * 2 + 1, // Kedipan random
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })"
    });
    gsap.fromTo(footerRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer 
      ref={footerRef} 
      className="relative w-full bg-[#0b1021] text-white overflow-hidden pt-40 pb-10"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-800 via-[#0b1021] to-[#0b1021] opacity-60"></div>
      <img 
        ref={cloud1Ref}
        src="/images/awan1.svg" 
        alt="Cloud" 
        className="absolute top-20 left-[10%] w-48 opacity-30 z-10"
      />
      <img 
        ref={cloud2Ref}
        src="/images/awan2.svg" 
        alt="Cloud" 
        className="absolute top-32 right-[15%] w-64 opacity-20 z-10"
      />
      <div className="relative z-20 flex flex-col items-center justify-end h-100 w-full max-w-7xl mx-auto px-6">
        
        <div className="relative flex items-end justify-center w-full">
          <img 
            src="/images/Pohon.svg" 
            alt="Palm Tree" 
            className="absolute left-[10%] md:left-[25%] bottom-0 w-32 md:w-48 z-20"
          />
          <div className="relative z-30 drop-shadow-[0_0_40px_rgba(249,115,22,0.6)]">
            <img 
              src="/images/Tenant.svg" 
              alt="24H Store" 
              className="w-80 md:w-112.5"
            />
          </div>
          <div className="absolute right-[10%] md:right-[25%] bottom-0 flex items-end gap-4 z-20">
            <img 
              src="/images/meng1 tanpa kepala.svg" 
              alt="Dog" 
              className="w-16 md:w-20 mb-2"
            />
            <div className="relative h-64 w-2 bg-zinc-800 rounded-t-lg">
              <div className="absolute -top-4 -left-6 w-14 h-4 bg-zinc-700 rounded-full" />
              <div 
                ref={lampLightRef}
                className="absolute top-0 -left-12 w-24 h-48 bg-linear-to-b from-yellow-300/40 to-transparent blur-md pointer-events-none"
                style={{ clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)' }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-4 bg-zinc-900 rounded-full mt-2 z-10"></div>
      </div>
      <div className="relative z-30 mt-20 pt-8 border-t border-zinc-800 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm text-zinc-400">
        <p className="uppercase tracking-wide">
          © {new Date().getFullYear()} Econiq. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Twitter</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}