"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutMonitoringFeatures } from "@/constants/about";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMonitoring() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".monitoring-card-container",
      );

      cards.forEach((card) => {
        const innerCard = card.querySelector(".monitoring-card-inner");

        gsap.fromTo(
          innerCard,
          {
            y: 150,
            rotate: 0,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            rotate: -5,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.from(".monitoring-text-reveal", {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".monitoring-header",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-48 relative flex flex-col items-center overflow-hidden bg-white selection:bg-brand-secondary selection:text-white z-10 px-4"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none transform-gpu -z-10" />

      <div className="monitoring-header relative z-10 text-center mb-16 md:mb-24 px-4 max-w-4xl">
        <h2 className="monitoring-text-reveal text-4xl md:text-[56px] lg:text-[64px] font-black uppercase tracking-tighter mb-6 text-foreground leading-[1.05]">
          Pantau Progres <br />{" "}
          <span className="text-brand-primary">Belajarmu</span>
        </h2>
        <p className="monitoring-text-reveal text-zinc-500 text-base md:text-xl max-w-xl mx-auto font-medium tracking-tight leading-relaxed">
          Dapatkan wawasan mendalam tentang perkembangan literasi digital dan
          pemahaman teknologimu melalui kurikulum yang tervalidasi.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[500px] mx-auto pb-20 md:pb-[100px]">
        {aboutMonitoringFeatures.map((feature, i) => {
          const Icon = feature.icon;
          const background = `linear-gradient(306deg, ${feature.colorA}, ${feature.colorB})`;

          return (
            <div
              key={i}
              className="monitoring-card-container relative flex justify-center items-center w-full overflow-hidden pt-5 h-[320px] md:h-[500px] -mb-20 md:-mb-[140px]"
            >
              <div
                style={{
                  background,
                  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
                }}
                className="absolute inset-0 opacity-[0.08]"
              />

              <div className="monitoring-card-inner w-[85vw] md:w-[320px] h-[260px] md:h-[420px] flex flex-col justify-center items-center rounded-[30px] origin-[10%_60%] bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(102,13,255,0.12)] p-8 text-center transform-gpu">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-light rounded-2xl flex items-center justify-center mb-6 border border-brand-muted/30">
                  <Icon
                    className="w-8 h-8 md:w-10 md:h-10 text-brand-primary"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed tracking-tight">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
