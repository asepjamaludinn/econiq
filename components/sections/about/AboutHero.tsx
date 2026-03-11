"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PARTNER_LOGOS = [
  "/images/BitCoin.svg", "/images/Dolar.svg", "/images/Coin.svg", "/images/100Rp.svg", "/images/75Rp.svg"
];

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".hero-reveal", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full pt-32 pb-20 flex flex-col items-center min-h-[80vh]">
      {/* 1. Headline */}
      <div className="text-center z-20 px-4 mb-10">
        <h1 className="hero-reveal text-[clamp(40px,8vw,120px)] font-black uppercase leading-[0.9] tracking-tight text-white mb-6">
          WE CREATED <br />
          <span className="text-[#660DFF]">THE CONCEPT</span>
        </h1>
        <p className="hero-reveal max-w-xl mx-auto text-white/70 font-medium md:text-xl">
          We are the largest Web3 franchise network, with 200+ active nodes globally.
        </p>
      </div>

      {/* 2. Pill-shaped Marquee (Persis seperti di video) */}
      <div className="hero-reveal relative w-max max-w-[90vw] bg-white rounded-full py-4 px-8 overflow-hidden flex items-center shadow-[0_10px_40px_rgba(102,13,255,0.2)]">
        <div className="flex w-max animate-marquee gap-12 items-center">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
            <Image key={idx} src={logo} alt="Logo" width={50} height={50} className="object-contain h-10 w-auto opacity-70" />
          ))}
        </div>
      </div>

      {/* Marquee Keyframes */}
      <style jsx>{`
        .animate-marquee { animation: marquee 15s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
      `}</style>
    </section>
  );
}