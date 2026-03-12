"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { marketingImages, locationImages, teamImages } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const locationTextContainerRef = useRef<HTMLDivElement>(null);
  const teamTextContainerRef = useRef<HTMLDivElement>(null);

  const mobileTl = useRef<gsap.core.Timeline | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      const form3DParams = {
        opacity: 0,
        y: 80,
        z: -50,
        rotationX: -60,
        scale: 0.9,
      };

      const to3DParams = {
        opacity: 1,
        y: 0,
        z: 0,
        rotationX: 0,
        scale: 1,
        ease: "power3.out",
      };

      const marketingEls = gsap.utils.toArray([
        ".marketing-badge",
        ".market-text-line-1",
        ".market-text-line-2",
        ".market-subtext-p",
      ]);

      const locationEls = gsap.utils.toArray([
        ".location-badge",
        ".location-title",
        ".location-subtext-p",
      ]);

      const teamEls = gsap.utils.toArray([
        ".team-badge",
        ".team-title",
        ".team-subtext-p",
      ]);

      // 1. ANIMASI DESKTOP
      mm.add("(min-width: 1024px)", () => {
        gsap.set(
          [
            textContainerRef.current,
            locationTextContainerRef.current,
            teamTextContainerRef.current,
          ],
          {
            transformPerspective: 800,
            transformOrigin: "center center",
            rotationY: -55,
            rotationZ: -10,
            y: "55vh",
          },
        );

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=600%",
            pin: true,
            scrub: 1.5,
          },
        });

        pinTl

          .addLabel("marketingEntry")
          .to(
            textContainerRef.current,
            { rotationY: 0, rotationZ: 0, y: "0vh", duration: 0.8 },
            "marketingEntry",
          )
          .to(
            marketingEls,
            { ...to3DParams, duration: 0.8, stagger: 0.08 },
            "marketingEntry",
          )
          .to({}, { duration: 0.5 })
          .fromTo(
            ".zoom-image-wrapper",
            { scale: 0.4, opacity: 0, y: 100 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
              stagger: 0.25,
            },
          )
          .to({}, { duration: 1 })

          .addLabel("marketingExit")
          .to(
            ".marketing-images-container",
            { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" },
            "marketingExit",
          )
          .to(
            textContainerRef.current,
            {
              rotationY: 40,
              rotationZ: 8,
              y: "-60vh",
              opacity: 0,
              duration: 1.5,
              ease: "none",
            },
            "marketingExit",
          )

          .addLabel("locationEntry")
          .fromTo(
            ".location-wrapper",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "locationEntry-=0.5",
          )
          .fromTo(
            locationTextContainerRef.current,
            {
              transformPerspective: 800,
              transformOrigin: "center center",
              rotationY: -55,
              rotationZ: -10,
              y: "40vh",
            },
            {
              transformPerspective: 800,
              rotationY: 0,
              rotationZ: 0,
              y: "0vh",
              duration: 2,
            },
            "locationEntry",
          )
          .fromTo(
            locationEls,
            form3DParams,
            { ...to3DParams, duration: 2, stagger: 0.2 },
            "locationEntry",
          )
          .fromTo(
            ".location-image-wrapper",
            { scale: 0.5, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
              stagger: 0.2,
            },
            "<0.5",
          )
          .to({}, { duration: 1 })

          .addLabel("locationExit")
          .to(
            ".location-images-container",
            { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" },
            "locationExit",
          )
          .to(
            locationTextContainerRef.current,
            {
              rotationY: 40,
              rotationZ: 8,
              y: "-60vh",
              opacity: 0,
              duration: 1.5,
              ease: "none",
            },
            "locationExit",
          )

          .addLabel("teamEntry")
          .fromTo(
            ".team-wrapper",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "teamEntry-=0.5",
          )
          .fromTo(
            teamTextContainerRef.current,
            {
              transformPerspective: 800,
              transformOrigin: "center center",
              rotationY: -55,
              rotationZ: -10,
              y: "40vh",
            },
            {
              transformPerspective: 800,
              rotationY: 0,
              rotationZ: 0,
              y: "0vh",
              duration: 2,
            },
            "teamEntry",
          )
          .fromTo(
            teamEls,
            form3DParams,
            { ...to3DParams, duration: 2, stagger: 0.2 },
            "teamEntry",
          )
          .fromTo(
            ".team-image-wrapper",
            { scale: 0.5, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
              stagger: 0.2,
            },
            "<0.5",
          )
          .to({}, { duration: 0.5 });
      });

      // 2. ANIMASI MOBILE & TABLET

      mm.add("(max-width: 1023px)", () => {
        gsap.set(
          [
            textContainerRef.current,
            locationTextContainerRef.current,
            teamTextContainerRef.current,
          ],
          {
            transformPerspective: 800,
            transformOrigin: "center center",
          },
        );

        // Initial State (Slide 0)
        gsap.set(textContainerRef.current, {
          rotationY: 0,
          rotationZ: 0,
          y: 0,
          opacity: 1,
        });
        gsap.set(marketingEls, {
          opacity: 1,
          y: 0,
          z: 0,
          rotationX: 0,
          scale: 1,
        });
        gsap.set(".marketing-images-container", { opacity: 1, y: 0 });
        gsap.set(".zoom-image-wrapper", { scale: 1, opacity: 1, y: 0 });
        gsap.set(".marketing-wrapper", { opacity: 1, pointerEvents: "auto" });

        gsap.set(".location-wrapper", { opacity: 0, pointerEvents: "none" });
        gsap.set(locationTextContainerRef.current, { opacity: 0 });

        gsap.set(".team-wrapper", { opacity: 0, pointerEvents: "none" });
        gsap.set(teamTextContainerRef.current, { opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.addLabel("slide0");

        tl.to(textContainerRef.current, {
          rotationY: 35,
          rotationZ: 8,
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
          .to(
            ".zoom-image-wrapper",
            {
              scale: 0.4,
              opacity: 0,
              y: -50,
              duration: 0.4,
              stagger: 0.05,
              ease: "power2.inOut",
            },
            "<",
          )
          .set(".marketing-wrapper", { pointerEvents: "none" })
          .set(".location-wrapper", { pointerEvents: "auto", opacity: 1 })
          .fromTo(
            locationTextContainerRef.current,
            { rotationY: -35, rotationZ: -8, y: 50, opacity: 0 },
            {
              rotationY: 0,
              rotationZ: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.1",
          )
          .fromTo(
            locationEls,
            form3DParams,
            { ...to3DParams, duration: 0.6, stagger: 0.08 },
            "<0.1",
          )
          .fromTo(
            ".location-image-wrapper",
            { scale: 0.4, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "back.out(1.2)",
            },
            "<0.1",
          );

        // SLIDE 1
        tl.addLabel("slide1");

        // Transisi ke TEAM (Slide 2)
        tl.to(locationTextContainerRef.current, {
          rotationY: 35,
          rotationZ: 8,
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
          .to(
            ".location-image-wrapper",
            {
              scale: 0.4,
              opacity: 0,
              y: -50,
              duration: 0.4,
              stagger: 0.05,
              ease: "power2.inOut",
            },
            "<",
          )
          .set(".location-wrapper", { pointerEvents: "none" })
          .set(".team-wrapper", { pointerEvents: "auto", opacity: 1 })
          .fromTo(
            teamTextContainerRef.current,
            { rotationY: -35, rotationZ: -8, y: 50, opacity: 0 },
            {
              rotationY: 0,
              rotationZ: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.1",
          )
          .fromTo(
            teamEls,
            form3DParams,
            { ...to3DParams, duration: 0.6, stagger: 0.08 },
            "<0.1",
          )
          .fromTo(
            ".team-image-wrapper",
            { scale: 0.4, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "back.out(1.2)",
            },
            "<0.1",
          );

        // SLIDE 2
        tl.addLabel("slide2");

        mobileTl.current = tl;
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
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
      className="relative w-full h-[100vh] bg-gradient-to-t from-[#7020f9] to-[#B36EE6] text-white overflow-hidden z-[140] -mt-[5vw]"
      style={{ willChange: "transform" }}
    >
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
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Text Marketing Container */}
        <div
          ref={textContainerRef}
          className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-2xl lg:max-w-4xl pointer-events-auto transform-gpu"
        >
          <div className="marketing-badge border-[1px] md:border-2 border-white/10 text-white bg-transparent rounded-full px-4 py-1.5 md:px-5 md:py-1.5 mb-4 md:mb-6 flex items-center justify-center transform-gpu backdrop-blur-sm opacity-0">
            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-center">
              Global Awareness
            </span>
          </div>
          <h1 className="w-full px-2 md:px-4 text-center text-[clamp(28px,8vw,58px)] font-black uppercase tracking-tight text-white leading-[1.05] mb-4 md:mb-6">
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
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Text Location Container */}
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
              className="location-title block w-full text-center text-[clamp(28px,8vw,58px)] font-black uppercase tracking-tight text-white leading-[1.05] transform-gpu opacity-0 lg:whitespace-nowrap"
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
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Text Team Container */}
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
              className="team-title block w-full text-center text-[clamp(28px,8vw,58px)] font-black uppercase tracking-tight text-white leading-[1.05] transform-gpu opacity-0 lg:whitespace-nowrap"
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

      {/* Mobile dan Tab */}
      <div className="lg:hidden absolute top-[65%] md:top-[70%] -translate-y-1/2 left-0 w-full flex items-center justify-center z-[200] pointer-events-none">
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          {/* Tombol Kiri */}
          <button
            onClick={handlePrev}
            disabled={activeSlide === 0}
            aria-label="Previous Slide"
            className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-[20px] md:rounded-2xl bg-white/20 backdrop-blur-md transition-all active:scale-95 ${
              activeSlide === 0
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white w-7 h-7 md:w-8 md:h-8"
              viewBox="0 0 24 24"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Tombol Kanan */}
          <button
            onClick={handleNext}
            disabled={activeSlide === 2}
            aria-label="Next Slide"
            className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-[20px] md:rounded-2xl bg-white/20 backdrop-blur-md transition-all active:scale-95 ${
              activeSlide === 2
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white w-7 h-7 md:w-8 md:h-8"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
