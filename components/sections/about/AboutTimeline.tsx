"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutTimelineSteps } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          },
        );
      }

      gsap.fromTo(
        ".timeline-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-title",
            start: "top 90%",
          },
        },
      );

      const cards = gsap.utils.toArray<HTMLDivElement>(".timeline-item");
      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(
          card,
          {
            x: isEven ? -50 : 50,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const dots = gsap.utils.toArray<HTMLDivElement>(".timeline-dot");
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 px-6 bg-white relative z-10 overflow-hidden"
    >
      <h2 className="timeline-title text-4xl md:text-6xl font-black text-center mb-16 md:mb-32 uppercase tracking-tight text-foreground">
        Perjalanan <span className="text-brand-primary">Kami</span>
      </h2>

      <div className="timeline-container max-w-5xl mx-auto relative">
        <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] bg-zinc-100 md:-translate-x-1/2 rounded-full" />

        <div
          ref={lineRef}
          className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] bg-brand-primary md:-translate-x-1/2 rounded-full origin-top z-0"
        />

        <div className="space-y-20 md:space-y-32">
          {aboutTimelineSteps.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-12 md:pl-0 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="timeline-dot absolute left-[12px] md:left-1/2 top-1.5 md:top-auto md:-translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-brand-primary shadow-[0_0_15px_rgba(102,13,255,0.4)] z-20" />

                <div
                  className={`timeline-item w-full md:w-[45%] ${
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="inline-flex px-4 py-1 mb-4 rounded-full bg-brand-light border border-brand-muted text-brand-primary font-black tracking-widest text-xs md:text-sm shadow-sm">
                    {item.year}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 font-medium leading-relaxed text-base md:text-lg tracking-tight">
                    {item.desc}
                  </p>
                </div>

                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 font-black text-zinc-50 opacity-[0.05] text-8xl pointer-events-none select-none ${
                    isEven ? "right-0" : "left-0"
                  }`}
                >
                  {item.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
