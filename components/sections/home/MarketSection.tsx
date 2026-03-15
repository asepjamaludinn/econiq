"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { marketingImages, locationImages, teamImages } from "@/constants";
import { useMarketAnimations } from "@/hooks/useMarketAnimations";
import SliderControls from "@/components/ui/SliderControls";

export default function MarketingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const locationTextContainerRef = useRef<HTMLDivElement>(null);
  const teamTextContainerRef = useRef<HTMLDivElement>(null);

  const mobileTl = useRef<gsap.core.Timeline | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useMarketAnimations(
    sectionRef,
    textContainerRef,
    locationTextContainerRef,
    teamTextContainerRef,
    mobileTl,
  );

  const handleNext = () => {
    if (activeSlide < 2 && mobileTl.current) {
      const nextSlide = activeSlide + 1;
      mobileTl.current.tweenTo(`slide${nextSlide}`);
      setActiveSlide(nextSlide);
    }
  };

  const handlePrev = () => {
    if (activeSlide > 0 && mobileTl.current) {
      const prevSlide = activeSlide - 1;
      mobileTl.current.tweenTo(`slide${prevSlide}`);
      setActiveSlide(prevSlide);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] bg-gradient-to-t from-grad-start to-brand-tertiary text-white overflow-hidden z-[140] -mt-[5vw]"
      style={{ willChange: "transform" }}
    >
      {/* 1. MARKETING SLIDE */}
      <div className="marketing-wrapper absolute inset-0 w-full h-full flex items-center justify-center max-w-[1600px] mx-auto pointer-events-none pb-12 lg:pb-0">
        <div className="marketing-images-container absolute inset-0 z-10">
          {marketingImages.map((image, index) => (
            <div
              key={`marketing-img-${index}`}
              className={`absolute ${image.positionClasses} flex items-center justify-center`}
            >
              <div
                className="zoom-image-wrapper relative w-full aspect-square md:aspect-[4/5] drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transform-gpu rounded-2xl overflow-hidden"
                style={{ willChange: "transform, opacity", opacity: 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  aria-hidden="true"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={textContainerRef}
          className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-2xl lg:max-w-4xl pointer-events-auto transform-gpu"
        >
          <div className="marketing-badge border-[1px] md:border-2 border-white/10 text-white bg-transparent rounded-full px-4 py-1.5 md:px-5 md:py-1.5 mb-4 md:mb-6 flex items-center justify-center transform-gpu backdrop-blur-sm opacity-0">
            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-center">
              Global Awareness
            </span>
          </div>
          <h1 className="w-full px-2 md:px-4 text-center text-fluid-h2 font-black uppercase tracking-tight text-white leading-[1.05] mb-4 md:mb-6">
            <div className="block w-full" style={{ perspective: "1000px" }}>
              <div
                className="market-text-line market-text-line-1 block transform-gpu lg:whitespace-nowrap opacity-0"
                style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                Empowering Through
              </div>
              <div
                className="market-text-line market-text-line-2 block transform-gpu lg:whitespace-nowrap opacity-0"
                style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                Knowledge
              </div>
            </div>
          </h1>

          <div className="marketing-subtext flex flex-col items-center w-full max-w-sm lg:max-w-lg transform-gpu">
            <p className="market-subtext-p text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0">
              Leading the movement for Web3 financial literacy worldwide.
            </p>
            <p className="market-subtext-p text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0">
              Bridging the gap between technology and the community.
            </p>
          </div>
        </div>
      </div>

      {/* 2. LOCATION SLIDE */}
      <div className="location-wrapper absolute inset-0 w-full h-full flex items-center justify-center max-w-[1600px] mx-auto opacity-0 pointer-events-none pb-12 lg:pb-0">
        <div className="location-images-container absolute inset-0 z-10">
          {locationImages.map((image, index) => (
            <div
              key={`location-img-${index}`}
              className={`absolute ${image.positionClasses} flex items-center justify-center`}
            >
              <div
                className="location-image-wrapper relative w-full aspect-square drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transform-gpu rounded-full overflow-hidden border-2 border-white/20"
                style={{ willChange: "transform, opacity", opacity: 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  aria-hidden="true"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={locationTextContainerRef}
          className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-2xl lg:max-w-4xl pointer-events-auto transform-gpu"
        >
          <div className="location-badge border-[1px] md:border-2 border-white/10 text-white bg-transparent rounded-full px-4 py-1.5 md:px-5 md:py-1.5 mb-4 md:mb-6 flex items-center justify-center transform-gpu backdrop-blur-sm opacity-0">
            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-center">
              Our Locations
            </span>
          </div>

          <div
            className="w-full px-2 md:px-4 mb-4 md:mb-6"
            style={{ perspective: "1000px" }}
          >
            <h2
              className="location-title block w-full text-center text-fluid-h2 font-black uppercase tracking-tight text-white leading-[1.05] transform-gpu opacity-0 lg:whitespace-nowrap"
              style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            >
              Available Everywhere
            </h2>
          </div>

          <div className="location-subtext flex flex-col items-center w-full max-w-sm lg:max-w-xl transform-gpu">
            <p className="location-subtext-p text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0">
              Find our partner stores and experience Web3 directly
            </p>
            <p className="location-subtext-p text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0">
              in your own neighborhood.
            </p>
          </div>
        </div>
      </div>

      {/* 3. TEAM SLIDE */}
      <div className="team-wrapper absolute inset-0 w-full h-full flex items-center justify-center max-w-[1600px] mx-auto opacity-0 pointer-events-none pb-12 lg:pb-0">
        <div className="absolute inset-0 z-10">
          {teamImages.map((image, index) => (
            <div
              key={`team-img-${index}`}
              className={`absolute ${image.positionClasses} flex items-center justify-center`}
            >
              <div
                className="team-image-wrapper relative w-full aspect-square drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] transform-gpu rounded-3xl overflow-hidden"
                style={{ willChange: "transform, opacity" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  aria-hidden="true"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={teamTextContainerRef}
          className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-2xl lg:max-w-4xl pointer-events-auto transform-gpu"
        >
          <div className="team-badge border-[1px] md:border-2 border-white/10 text-white bg-transparent rounded-full px-4 py-1.5 md:px-5 md:py-1.5 mb-4 md:mb-6 flex items-center justify-center transform-gpu backdrop-blur-sm opacity-0">
            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-center">
              The Visionaries
            </span>
          </div>

          <div
            className="w-full px-2 md:px-4 mb-4 md:mb-6"
            style={{ perspective: "1000px" }}
          >
            <h2
              className="team-title block w-full text-center text-fluid-h2 font-black uppercase tracking-tight text-white leading-[1.05] transform-gpu opacity-0 lg:whitespace-nowrap"
              style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            >
              Built by Experts
            </h2>
          </div>

          <div className="team-subtext flex flex-col items-center w-full max-w-sm lg:max-w-xl transform-gpu">
            <p className="team-subtext-p text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0">
              Mentors dedicated to simplifying complex blockchain ecosystems for
            </p>
            <p className="team-subtext-p text-white/90 text-xs md:text-sm lg:text-base font-medium tracking-tight text-center leading-relaxed opacity-0">
              the next generation of digital pioneers.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="lg:hidden absolute top-[65%] md:top-[70%] -translate-y-1/2 left-0 w-full flex items-center justify-center z-[200] pointer-events-none">
        <SliderControls
          onPrev={handlePrev}
          onNext={handleNext}
          isFirst={activeSlide === 0}
          isLast={activeSlide === 2}
        />
      </div>
    </section>
  );
}
