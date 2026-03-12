"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { stepsData } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [activeMobileStep, setActiveMobileStep] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.fromTo(
        sectionRef.current,
        { clipPath: "polygon(0 0, 100% 0vw, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 5vw, 100% 100%, 0 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        },
      );

      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      imageTl.fromTo(
        imageRef.current,
        { x: "-40vw", opacity: 1, rotation: 0 },
        { x: "10vw", opacity: 1, rotation: 20, ease: "none" },
      );

      mm.add("(min-width: 1024px)", () => {
        const textTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });

        textTl
          .fromTo(
            ".text-line-1",
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
            },
          )
          .fromTo(
            ".text-line-2",
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
            "-=0.9",
          );

        const steps = gsap.utils.toArray<HTMLDivElement>(".desktop-step-card");
        const stepContents = gsap.utils.toArray<HTMLDivElement>(
          ".desktop-step-content",
        );
        const stepCircles = gsap.utils.toArray<HTMLDivElement>(
          ".desktop-step-circle",
        );
        const stepTexts =
          gsap.utils.toArray<HTMLSpanElement>(".desktop-step-text");
        const imageSlides = gsap.utils.toArray<HTMLDivElement>(
          ".desktop-image-slide",
        );

        gsap.set([stepContents, stepCircles, stepTexts], { opacity: 0.25 });
        gsap.set(stepContents, { y: 20 });
        gsap.set(imageSlides, { y: "150vh" });

        gsap.set([stepCircles[0], stepTexts[0], stepContents[0]], {
          opacity: 1,
          y: 0,
        });
        gsap.set(imageSlides[0], { y: "0vh" });

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            start: "top 20%",
            end: "+=3500",
            pin: sectionRef.current,
            pinSpacing: true,
            scrub: 1,
          },
        });

        steps.forEach((step, index) => {
          if (index === 0) return;
          const progress = index / (steps.length - 1);

          pinTl
            .to(".line-progress", {
              scaleY: progress,
              duration: 1.5,
              ease: "none",
            })
            .to([stepCircles[index], stepTexts[index]], {
              opacity: 1,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
            })
            .to(
              stepContents[index],
              { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
              "<",
            )
            .to(
              imageSlides[index - 1],
              { y: "-150vh", duration: 1, ease: "power2.inOut" },
              "<",
            )
            .to(
              imageSlides[index],
              { y: "0vh", duration: 1, ease: "power2.inOut" },
              "<",
            )
            .to({}, { duration: 0.5 });
        });
      });

      mm.add("(min-width: 1280px)", () => {
        gsap.set(textContainerRef.current, {
          transformPerspective: 1500,
          transformOrigin: "center center",
          rotationY: -55,
          rotationZ: -10,
          y: "10vh",
        });
        gsap.to(textContainerRef.current, {
          rotationY: 55,
          rotationZ: 10,
          y: "-60vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 40%",
            scrub: 1.5,
          },
        });
      });

      mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
        gsap.set(textContainerRef.current, {
          transformPerspective: 1500,
          rotationY: -30,
          rotationZ: -5,
          y: "5vh",
        });
        gsap.to(textContainerRef.current, {
          rotationY: 0,
          rotationZ: 0,
          y: "-60vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 50%",
            scrub: 1,
          },
        });

        const textLines = gsap.utils.toArray<HTMLDivElement>(".text-line");
        gsap.to(textLines, {
          opacity: 0.3,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "bottom 50%",
            scrub: 1,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[120vh] md:min-h-[130vh] flex flex-col items-center pt-[30vw] md:pt-[20vw] pb-[20vh] px-4 bg-[#B36EE6] text-white z-[130] -mt-[5vw] overflow-hidden"
    >
      <Image
        ref={imageRef}
        src="/images/card blur.svg"
        alt="Decorative Card Blur"
        aria-hidden="true"
        width={400}
        height={400}
        className="absolute left-0 top-[10%] md:top-[30%] -translate-y-1/2 w-48 md:w-80 lg:w-96 h-auto z-30 pointer-events-none transform-gpu"
        style={{ willChange: "transform, opacity" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center mt-10 md:mt-20">
        <div
          ref={textContainerRef}
          className="relative z-10 flex flex-col items-center text-center px-4 mb-16 md:mb-24"
          style={{ willChange: "transform" }}
        >
          <h2 className="w-full px-2 text-center text-[clamp(34px,10vw,70px)] md:text-[clamp(50px,7vw,100px)] lg:text-[clamp(70px,7.5vw,120px)] xl:text-[clamp(90px,8vw,140px)] font-black uppercase tracking-tighter leading-[1.05] relative z-20 text-white">
            <div
              className="flex flex-col items-center justify-center w-full max-w-[100vw]"
              style={{ perspective: "1000px" }}
            >
              <div className="text-line text-line-1 block transform-gpu md:whitespace-nowrap">
                Navigate Your
              </div>
              <div className="text-line text-line-2 block transform-gpu md:whitespace-nowrap">
                Financial Journey
              </div>
            </div>
          </h2>
        </div>

        <div
          ref={pinWrapperRef}
          className="w-full max-w-6xl relative z-20 text-left"
        >
          <div className="hidden lg:grid grid-cols-2 gap-20 items-center">
            {/* KOLOM KIRI (Teks) */}
            <div className="relative flex flex-col gap-10 w-full pt-4">
              <div className="absolute left-[28px] top-[calc(2.5rem+1.25rem)] h-[calc(100%-120px)] w-[1px] -translate-x-1/2 bg-white/20 z-0" />
              <div className="line-progress absolute left-[28px] top-14 h-[calc(100%-120px)] w-[1px] -translate-x-1/2 bg-white z-[5] origin-top scale-y-0" />

              {stepsData.map((step, index) => (
                <div
                  key={index}
                  className="desktop-step-card relative flex items-start gap-10 z-10"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#B36EE6] flex items-center justify-center relative z-20 mt-1.5">
                    <div className="desktop-step-circle absolute inset-0 rounded-full border border-white"></div>
                    <span className="desktop-step-text font-semibold text-lg text-white relative z-10">
                      {step.num}
                    </span>
                  </div>
                  <div className="desktop-step-content flex flex-col">
                    <h3 className="text-3xl font-bold mb-2 tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed tracking-tight text-base max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* KOLOM KANAN  */}
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {stepsData.map((step, index) => (
                <div
                  key={index}
                  className="desktop-image-slide absolute inset-0 flex flex-col items-center justify-center px-6"
                >
                  {React.createElement(step.Icon)}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dan Tab */}
          <div className="flex lg:hidden flex-col w-full relative z-20 px-2 md:px-8">
            <div className="w-full max-w-3xl mx-auto flex flex-col">
              <div className="w-full flex justify-center items-center min-h-[250px] sm:min-h-[350px] md:min-h-[450px] mb-6 sm:mb-8 md:mb-12 transition-all duration-500 ease-in-out">
                {React.createElement(stepsData[activeMobileStep].Icon)}
              </div>

              <div className="flex items-center justify-between w-full mb-4 sm:mb-6 md:mb-8 border-b border-white/20 pb-4 md:pb-6 gap-1.5 sm:gap-3">
                {/* KIRI */}
                <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                  {stepsData.map(
                    (step, index) =>
                      index < activeMobileStep && (
                        <button
                          key={index}
                          onClick={() => setActiveMobileStep(index)}
                          // Diturunkan jadi w-10 h-10 untuk HP, membesar di tablet
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/40 flex items-center justify-center transition-all active:scale-95 hover:bg-white/10"
                        >
                          <span className="font-semibold text-white/60 text-sm sm:text-base md:text-lg">
                            {step.num}
                          </span>
                        </button>
                      ),
                  )}
                </div>

                {/* TENGAH */}
                <div className="flex items-center gap-2.5 sm:gap-4 flex-grow justify-start min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-[1.5px] border-white bg-white/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="font-bold text-white text-base sm:text-lg md:text-xl">
                      {stepsData[activeMobileStep].num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-none pt-1 truncate w-full">
                    {stepsData[activeMobileStep].title}
                  </h3>
                </div>

                {/* KANAN */}
                <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                  {stepsData.map(
                    (step, index) =>
                      index > activeMobileStep && (
                        <button
                          key={index}
                          onClick={() => setActiveMobileStep(index)}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/40 flex items-center justify-center transition-all active:scale-95 hover:bg-white/10"
                        >
                          <span className="font-semibold text-white/60 text-sm sm:text-base md:text-lg">
                            {step.num}
                          </span>
                        </button>
                      ),
                  )}
                </div>
              </div>

              <div className="min-h-[120px] md:min-h-[140px]">
                <p className="text-white/85 leading-relaxed text-[15px] sm:text-base md:text-lg transition-opacity duration-300 tracking-tight">
                  {stepsData[activeMobileStep].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
