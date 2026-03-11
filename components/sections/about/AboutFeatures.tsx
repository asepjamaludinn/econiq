"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeatureCard from "@/components/ui/FeatureCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES_DATA = [
  { id: 1, title: "Smart Vaults", description: "Automated staking and yield generation.", imageSrc: "/images/Dompet.svg", timestamp: "00h21" },
  { id: 2, title: "Digital Assets", description: "Manage multiple cryptocurrencies seamlessly.", imageSrc: "/images/BitCoin.svg", timestamp: "09h26" },
  { id: 3, title: "Convenience", description: "Access your dashboard from any device.", imageSrc: "/images/Dolar.svg", timestamp: "12h37" },
];

export default function AboutFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollWidth = scrollContainerRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;

    gsap.to(scrollContainerRef.current, {
      x: -(scrollWidth - windowWidth + 100), // Geser ke kiri sejauh sisa lebar kartu
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true, // KUNCI HALAMAN
        scrub: 1,  // Ikat dengan scroll
        start: "top top",
        end: () => `+=${scrollWidth}`, // Panjang scroll = lebar container
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#DCA953] flex items-center overflow-hidden">
      
      {/* Judul Kiri (Fixed / Diam saat di-pin) */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-full max-w-sm md:max-w-lg z-10 pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-[#4A2010] leading-[0.9]">
          FINANCE AT <br/> ANY HOUR
        </h2>
      </div>

      {/* Container Kartu yang bergerak ke kiri */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pl-[50vw] md:pl-[40vw]">
        <div ref={scrollContainerRef} className="flex gap-8 px-8">
          {FEATURES_DATA.map((feature) => (
            <div key={feature.id} className="w-[300px] md:w-[450px] shrink-0">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}