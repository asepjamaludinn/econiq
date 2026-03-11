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
  {
    id: 1,
    title: "Digital Assets",
    description: "Manage multiple cryptocurrencies and tokens seamlessly in one unified, highly secure dashboard.",
    imageSrc: "/images/BitCoin.svg", // Anda bisa ganti dengan gambar representatif nanti
    timestamp: "00h21"
  },
  {
    id: 2,
    title: "Smart Vaults",
    description: "Automated staking and yield generation working 24/7 without requiring active management.",
    imageSrc: "/images/Dompet.svg",
    timestamp: "09h26"
  },
  {
    id: 3,
    title: "Real-time Tracking",
    description: "Monitor your financial growth globally. Accessible from any device, anywhere, anytime.",
    imageSrc: "/images/Dolar.svg",
    timestamp: "12h37"
  }
];

export default function AboutFeatures() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full max-w-7xl mx-auto px-4 py-24">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">Finance <br/>At Any Hour</h2>
        <p className="text-white/60 max-w-2xl">
          Econiq provides versatility and transparency, complimenting your financial journey 24/7 just like an automated system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES_DATA.map((feature) => (
          <div key={feature.id} className="feature-card">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}