"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomVideoPlayer from "@/components/ui/CustomVideoPlayer";
import { cryptoLogos } from "@/constants/about";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const videoScrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(
          ".about-hero-text",
          {
            opacity: 0,
            y: 50,
            z: -20,
            rotationX: -45,
            filter: "blur(12px)",
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            z: 0,
            rotationX: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
          },
        )
          .fromTo(
            ".about-hero-sub",
            {
              opacity: 0,
              y: 60,
              z: -20,
              rotationX: -45,
              filter: "blur(12px)",
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              rotationX: 0,
              filter: "blur(0px)",
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.8",
          )
          .fromTo(
            ".about-hero-pill",
            { y: 40, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" },
            "-=0.6",
          )
          .fromTo(
            ".about-hero-video",
            { y: 80, opacity: 0, rotationX: 30, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.6",
          );

        gsap.set(textContainerRef.current, { transformPerspective: 1500 });
        gsap.to(textContainerRef.current, {
          rotationY: 55,
          rotationZ: 10,
          y: "-60vh",
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom -50%",
            scrub: 1.5,
          },
        });

        gsap.set(videoScrollWrapperRef.current, {
          transformPerspective: 1500,
          x: "-25vw",
          y: "25vh",
          rotationZ: 15,
          scale: 0.5,
          opacity: 0,
        });

        const videoTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom -50%",
            scrub: 1.5,
          },
        });

        videoTl
          .to(videoScrollWrapperRef.current, {
            x: 0,
            y: "5vh",
            rotationZ: 0,
            scale: 1.3,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          })
          .to(
            videoScrollWrapperRef.current,
            {
              y: "-60vh",
              rotationY: 55,
              rotationZ: 10,
              scale: 1.6,
              opacity: 0,
              duration: 1.5,
              ease: "power2.in",
            },
            "+=0.2",
          );
      });

      mm.add("(max-width: 1023px)", () => {});

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center bg-brand-primary px-5 pt-32 pb-32 md:pb-48 overflow-hidden selection:bg-brand-secondary"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto text-center mt-10 lg:mt-0">
        <div
          ref={textContainerRef}
          className="flex flex-col items-center justify-center w-full transform-gpu"
        >
          <h1 className="flex flex-wrap justify-center gap-x-3 md:gap-x-6 text-[clamp(32px,8vw,150px)] font-black uppercase tracking-tighter text-white leading-[0.9] drop-shadow-sm w-full">
            <span className="about-hero-text origin-bottom transform-gpu inline-block">
              MENCIPTAKAN
            </span>
            <span className="about-hero-text origin-bottom transform-gpu inline-block">
              KONSEP
            </span>
          </h1>

          <p className="about-hero-sub mt-6 md:mt-10 text-white/80 font-medium text-base md:text-xl lg:text-2xl text-center max-w-3xl leading-relaxed tracking-tight transform-gpu">
            Kami adalah platform literasi Web3 terdepan di Indonesia, membantu
            ribuan pembelajar menavigasi keuangan digital.
          </p>
        </div>

        <div className="about-hero-pill mt-12 md:mt-16 bg-white/80 backdrop-blur-md rounded-full py-4 md:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 relative z-20 w-full max-w-[90%] md:max-w-4xl overflow-hidden flex items-center">
          <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-30 rounded-l-full pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-30 rounded-r-full pointer-events-none"></div>

          <div className="flex w-max animate-marquee items-center z-20">
            {[...cryptoLogos, ...cryptoLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-8 md:px-14 group"
              >
                <div className="relative flex items-center gap-3 transition-all duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                  <span className="text-lg md:text-xl font-bold text-zinc-800 tracking-tight whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={videoScrollWrapperRef}
          className="mt-16 md:mt-24 w-full max-w-4xl lg:max-w-5xl flex justify-center z-30 transform-gpu"
        >
          <div className="about-hero-video w-full aspect-video bg-black/10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center backdrop-blur-md shadow-2xl relative overflow-hidden group transform-gpu">
            <CustomVideoPlayer src="/animations/about.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
