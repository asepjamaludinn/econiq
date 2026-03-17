"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { stepsData } from "@/constants";
import { useHowItWorksAnimations } from "@/hooks/useHowItWorksAnimations";

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [activeMobileStep, setActiveMobileStep] = useState(0);

  useHowItWorksAnimations(
    sectionRef,
    textContainerRef,
    pinWrapperRef,
    imageRef,
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[120vh] md:min-h-[130vh] flex flex-col items-center pt-[30vw] md:pt-[20vw] pb-[20vh] px-4 bg-brand-tertiary text-white z-[130] -mt-[5vw] overflow-hidden"
    >
      <Image
        ref={imageRef}
        src="/images/card blur.svg"
        alt="Decorative Card Blur"
        aria-hidden="true"
        width={400}
        height={400}
        className="absolute left-0 top-[10%] md:top-[30%] -translate-y-1/2 w-48 md:w-80 lg:w-96 h-auto z-30 pointer-events-none transform-gpu"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center mt-10 md:mt-20">
        <div
          ref={textContainerRef}
          className="relative z-10 flex flex-col items-center text-center px-4 mb-16 md:mb-24"
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
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-tertiary flex items-center justify-center relative z-20 mt-1.5">
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
