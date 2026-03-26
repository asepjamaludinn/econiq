"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPlatform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageWrapperRef.current,
        {
          x: -60,
          opacity: 0,
          rotateY: 20,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        textContentRef.current?.children || [],
        {
          x: 40,
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(".floating-blob", {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-6 bg-white overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full text-brand-primary"
        >
          <path
            d="M-100,200 Q150,300 300,200 T700,100 T1200,300 T1600,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M-100,600 Q200,500 400,600 T800,400 T1300,700 T1600,500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        <div
          ref={imageWrapperRef}
          className="relative w-full aspect-square md:aspect-4/5 bg-brand-light rounded-[40px] overflow-hidden border border-brand-muted shadow-2xl"
          style={{ perspective: "1000px" }}
        >
          <Image
            alt="Infrastruktur Edukasi"
            src="/images/blockchain3d.jpg"
            fill
            className="object-cover opacity-90 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent pointer-events-none" />

          <div className="floating-blob absolute bottom-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-brand-secondary/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg" />
          <div className="floating-blob absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 bg-brand-tertiary/20 backdrop-blur-xl rounded-full border border-white/20 shadow-lg" />
        </div>

        <div ref={textContentRef} className="flex flex-col">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-foreground leading-[1.1]">
            Platform Edukasi <br className="hidden md:block" />
            <span className="text-brand-primary">Modern</span>
          </h2>

          <div className="w-16 h-1.5 bg-brand-secondary mb-10 rounded-full" />

          <p className="text-lg md:text-xl text-zinc-600 mb-6 leading-relaxed font-medium tracking-tight">
            Sistem manajemen pembelajaran{" "}
            <span className="text-brand-primary font-bold">Econiq</span>{" "}
            dirancang untuk memberikan pengalaman belajar yang{" "}
            <i className="text-brand-secondary">seamless</i> tanpa hambatan
            teknis.
          </p>

          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium tracking-tight">
            Kami mengubah visualisasi data yang kompleks dan konsep kriptografi
            menjadi materi visual yang ramah dan mudah dicerna oleh pelajar.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-brand-primary">
                100%
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
                Terverifikasi
              </span>
            </div>
            <div className="w-[1px] h-12 bg-zinc-200 mx-4" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-brand-secondary">
                Gratis
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
                Akses Edukasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
