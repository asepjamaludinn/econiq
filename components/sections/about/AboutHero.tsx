"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi saat pertama kali load (Reveal Text)
    gsap.fromTo(
      ".hero-reveal",
      { y: 100, opacity: 0, rotationX: -20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );

    // 2. Animasi teks SAAT DI-SCROLL (Parallax & Fade Out)
    gsap.to(".hero-text-wrapper", {
      y: 150, // Teks akan turun sedikit saat discroll ke bawah
      opacity: 0, // Memudar
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "center top", // Animasi selesai saat section mencapai setengah layar atas
        scrub: true, // Membuat animasi terikat mulus dengan scroll
      },
    });

    // 3. Animasi video/banner SAAT DI-SCROLL (Parallax Zoom)
    gsap.to(videoRef.current, {
      scale: 1.1,
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full pt-32 pb-20 flex flex-col items-center">
      {/* Headline Wrapper 
        Class "hero-text-wrapper" ditambahkan di sini untuk ditarget oleh ScrollTrigger
      */}
      <div className="hero-text-wrapper text-center z-20 px-4 mb-12" style={{ perspective: "1000px" }}>
        <h1 className="text-[clamp(40px,8vw,110px)] font-black uppercase leading-[0.9] tracking-tight text-white mb-6">
          <div className="overflow-hidden pb-4">
            <div className="hero-reveal text-3d">We Created</div>
          </div>
          <div className="overflow-hidden pb-4">
            <div className="hero-reveal text-[#660DFF] text-3d-accent">The Concept</div>
          </div>
        </h1>
        <p className="hero-reveal max-w-2xl mx-auto text-white/70 font-medium md:text-xl">
          Econiq represents the evolution of interactive Web3 financial systems, operating automatically 24/7.
        </p>
      </div>

      {/* Video / Image Container */}
      <div className="w-full max-w-[95%] xl:max-w-7xl h-[40vh] md:h-[70vh] rounded-4xl overflow-hidden relative border border-white/10 shadow-2xl z-10 hero-reveal">
        <div ref={videoRef} className="w-full h-full bg-zinc-800">
          {/* Placeholder grafis/banner */}
          <div className="absolute inset-0 bg-[url('/images/Tenant.svg')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent" />
        </div>
      </div>

      {/* CSS 3D Extrusion */}
      <style jsx>{`
        .text-3d {
          text-shadow: 
            1px 1px 0 #52525b,
            2px 2px 0 #52525b,
            3px 3px 0 #3f3f46,
            4px 4px 0 #3f3f46,
            5px 5px 0 #27272a,
            6px 6px 0 #27272a,
            7px 7px 0 #18181b,
            8px 8px 10px rgba(0,0,0,0.5);
        }
        .text-3d-accent {
          text-shadow: 
            1px 1px 0 #4a08b5,
            2px 2px 0 #4a08b5,
            3px 3px 0 #3b0692,
            4px 4px 0 #3b0692,
            5px 5px 0 #2c046e,
            6px 6px 0 #2c046e,
            7px 7px 0 #1a0242,
            8px 8px 10px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}