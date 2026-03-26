"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Unlock, TrendingUp, Zap, Globe } from "lucide-react";
import { featuresData } from "@/constants";
import CustomVideoPlayer from "@/components/ui/CustomVideoPlayer";
import { SvgBadgeStores } from "@/components/icons/SvgBadgeStores";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
              <div className="reveal-item opacity-0">GENERASI BARU</div>
              <div className="reveal-item opacity-0">KEUANGAN DIGITAL</div>
              <div className="reveal-item opacity-0">DIMULAI DARI</div>
              <div className="reveal-item opacity-0">ECONIQ</div>
            </h2>

            <div
              className={cn(
                "reveal-item opacity-0 absolute pointer-events-none drop-shadow-2xl z-20",
                "w-20 h-20 -top-20 right-0",
                "sm:w-24 sm:h-24 sm:-top-6 sm:-right-12",
                "md:w-32 md:h-32 md:-top-30 md:-right-5",
                "lg:w-36 lg:h-36 lg:-top-30 lg:-right-0",
                "xl:w-44 xl:h-44 xl:-top-30 xl:right-5",
              )}
            >
              <SvgBadgeStores ref={badgeRef} countRef={countRef} />
            </div>
          </div>

          <div className="reveal-item opacity-0 w-full max-w-4xl aspect-video bg-black/10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
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

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 w-full reveal-item opacity-0">
          <Link
            href="/content"
            className={cn(
              buttonVariants({ variant: "glass", size: "lg" }),
              "w-full sm:w-auto group gap-3",
            )}
          >
            Mulai Belajar
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
