"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Unlock, TrendingUp, Zap, Globe } from "lucide-react";
import { featuresData } from "@/constants";
import CustomVideoPlayer from "@/components/ui/CustomVideoPlayer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featureIcons = [Unlock, TrendingUp, Zap, Globe];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<SVGTSpanElement>(null);
  const badgeRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      // 1. Animasi Background
      gsap.set(bgRef.current, {
        transformOrigin: "center center",
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

      // 2. Animasi Reveal Teks dan Item
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

      // 3. Animasi Counter Angka Acak Berbasis Scroll
      gsap.to(
        { val: 0 },
        {
          val: 100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
          onUpdate: function () {
            if (!countRef.current) return;
            const currentProgress = this.progress();

            if (currentProgress === 0) {
              countRef.current.textContent = "000+";
            } else if (currentProgress === 1) {
              countRef.current.textContent = "100+";
            } else {
              const randomNum = Math.floor(Math.random() * 900) + 100;
              countRef.current.textContent = `${randomNum}+`;
            }
          },
        },
      );

      // 4. Animasi Rotasi Badge
      gsap.set(badgeRef.current, {
        rotation: -12,
        scale: 0.9,
      });

      gsap.to(badgeRef.current, {
        rotation: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center z-120 pt-20 pb-32 sm:py-32 px-4"
      style={{ perspective: "1500px" }}
    >
      <div
        ref={bgRef}
        className="absolute -top-10 -left-[5%] w-[110%] h-[130%] bg-brand-primary -z-10"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div
          ref={textContainerRef}
          className="mb-16 flex flex-col items-center w-full"
          style={{ perspective: "1500px" }}
        >
          <div className="relative inline-block w-full text-left sm:text-center mb-6 sm:mb-8 -mt-10 sm:mt-0">
            <h2 className="text-[44px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[1.05] md:leading-[1.1] font-black uppercase tracking-normal text-white drop-shadow-md relative z-10">
              <div className="reveal-item opacity-0 will-change-transform">
                THE NEXT GENERATION
              </div>
              <div className="reveal-item opacity-0 will-change-transform">
                OF DIGITAL FINANCE
              </div>
              <div className="reveal-item opacity-0 will-change-transform">
                STARTS WITH
              </div>
              <div className="reveal-item opacity-0 will-change-transform">
                ECONIQ
              </div>
            </h2>

            <div
              className="reveal-item opacity-0 will-change-transform absolute pointer-events-none drop-shadow-2xl z-20 
              w-20 h-20 -top-4 right-0 
              sm:w-24 sm:h-24 sm:-top-6 sm:-right-12 
              md:w-32 md:h-32 md:-top-30 md:-right-5
              lg:w-36 lg:h-36 lg:-top-35 lg:-right-5
              xl:w-44 xl:h-44 xl:-top-30 xl:-right-10"
            >
              <svg
                ref={badgeRef}
                viewBox="0 0 168 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                style={{ opacity: 0.95 }}
                aria-hidden="true"
                focusable="false"
              >
                <g>
                  <path
                    d="M84 -3.67176e-06C130.392 -1.6439e-06 168 37.6081 168 84C168 130.392 130.392 168 84 168L-7.34351e-06 168L-3.67176e-06 84C-1.6439e-06 37.6081 37.6081 -5.69961e-06 84 -3.67176e-06Z"
                    fill="white"
                  />
                  <circle cx="84" cy="84" r="48" fill="#660DFF" />
                  <text
                    fill="white"
                    xmlSpace="preserve"
                    fontFamily="sans-serif"
                    fontSize="32"
                    fontWeight="900"
                    textAnchor="middle"
                    letterSpacing="-0.04em"
                    style={{ whiteSpace: "pre" }}
                  >
                    <tspan ref={countRef} x="84" y="87.08">
                      000+
                    </tspan>
                  </text>
                  <text
                    fill="white"
                    xmlSpace="preserve"
                    fontFamily="sans-serif"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    letterSpacing="0.05em"
                    style={{ whiteSpace: "pre" }}
                  >
                    <tspan x="84" y="105.08">
                      STORES
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
          </div>

          <div className="reveal-item opacity-0 will-change-transform w-full max-w-4xl aspect-video bg-black/10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <CustomVideoPlayer src="/animations/econiq.mp4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 w-full mt-8 reveal-item opacity-0">
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
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 w-full reveal-item opacity-0 will-change-transform">
          <Link
            href="/content"
            className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-3xl font-normal text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-lg tracking-tight cursor-pointer"
          >
            Learn More
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="overflow-visible"
            >
              <path
                d="M5 12h14"
                className="transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:scale-x-[1.8]"
                style={{ transformOrigin: "19px 12px" }}
              />
              <path
                d="m12 5 7 7-7 7"
                className="transition-all duration-300 ease-out group-hover:translate-x-3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
