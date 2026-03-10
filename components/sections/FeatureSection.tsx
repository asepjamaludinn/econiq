"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Unlock, TrendingUp, Zap, Globe } from "lucide-react";
import { featuresData } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featureIcons = [Unlock, TrendingUp, Zap, Globe];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(bgRef.current, {
        transformOrigin: "top left",
      });

      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
        rotation: -2,
        scaleX: 1.1,
        scaleY: 1.1,
        ease: "none",
      });

      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const revealItems = gsap.utils.toArray<HTMLElement>(".reveal-item");

        gsap.set(revealItems, {
          y: "25vh",
          opacity: 0,
          rotationY: -40,
          rotationX: 40,
          transformOrigin: "center center",
          filter: "brightness(50%)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 10%",
            scrub: 2.5,
          },
        });

        tl.to(revealItems, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          filter: "brightness(100%)",
          duration: 1,
          ease: "none",
          stagger: 0.15,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const revealItems = gsap.utils.toArray<HTMLElement>(".reveal-item");

        gsap.set(revealItems, {
          y: "10vh",
          opacity: 0,
        });

        gsap.to(revealItems, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 2,
          },
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.15,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center z-[120] py-32 px-4"
      style={{ perspective: "1500px" }}
    >
      <div
        ref={bgRef}
        className="absolute -top-10 -left-[5%] w-[110%] h-[130%] bg-[#660DFF] -z-10"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div
          ref={textContainerRef}
          className="text-center mb-16 flex flex-col items-center w-full"
          style={{ perspective: "1500px" }}
        >
          <h2 className="text-[clamp(32px,5vw,80px)] font-black uppercase tracking-normal leading-[1.1] text-white mb-8 drop-shadow-md">
            <div className="reveal-item will-change-transform">
              THE NEXT GENERATION
            </div>
            <div className="reveal-item will-change-transform">OF DIGITAL</div>
            <div className="reveal-item will-change-transform">FINANCE</div>
            <div className="reveal-item will-change-transform">EXPERIENCE</div>
          </h2>

          <div className="reveal-item will-change-transform w-full max-w-4xl aspect-video bg-black/10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden group cursor-pointer transition-colors duration-300 hover:border-white/40 hover:bg-black/20">
            <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
            </div>
            <span className="text-white/80 font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors duration-300">
              Watch The Video
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full mt-8 reveal-item">
          {featuresData.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <div
                key={index}
                className="flex flex-row items-start p-2 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mr-4 flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col flex-1 text-left pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
