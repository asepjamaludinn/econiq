"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const TIMELINE_DATA = [
  { year: "2020", title: "Econiq Genesis", desc: "Creation of the brand and launching our first smart contract protocol." },
  { year: "2022", title: "Expansion Starts", desc: "First cross-chain integration and reaching 50+ institutional partners." },
  { year: "2024", title: "Global Ecosystem", desc: "Deployed Econiq globally, empowering users in multiple continents." },
  { year: "2026", title: "Web3 Pioneer", desc: "Distinguished as the most transparent digital finance platform." },
];

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animasi garis vertikal memanjang ke bawah
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // Animasi elemen timeline muncul satu per satu
    gsap.utils.toArray<HTMLElement>(".time-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: item.classList.contains("item-left") ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full max-w-5xl mx-auto px-4 py-32 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-black text-center uppercase text-white mb-24">The Journey</h2>

      <div className="relative">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2" />
        <div ref={lineRef} className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#0A7B5E] z-10 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12 md:gap-24">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.year} 
                className={`time-item relative flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse item-right" : "item-left"} pl-16 md:pl-0`}
              >
                <div className="absolute left-5.25 md:left-1/2 top-1 md:top-1/2 w-4 h-4 rounded-full bg-[#660DFF] ring-4 ring-zinc-900 z-20 -translate-x-1/2 md:-translate-y-1/2" />

                {/* Konten */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                  <span className="text-[#B36EE6] font-extrabold text-lg tracking-widest mb-2 block">{item.year}</span>
                  <h3 className="text-3xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}