"use client";

import { useRef, useState } from "react";
import { marketingImages, locationImages, teamImages } from "@/constants";
import { useMarketAnimations } from "@/hooks/useMarketAnimations";
import SliderControls from "@/components/ui/SliderControls";
import MarketSlide from "@/components/ui/MarketSlide";

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
      <MarketSlide
        textRef={textContainerRef}
        images={marketingImages}
        wrapperClassName="marketing-wrapper pointer-events-none"
        imageContainerClassName="marketing-images-container absolute inset-0 z-10"
        imageWrapperClassName="zoom-image-wrapper aspect-square md:aspect-[4/5] drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] rounded-2xl"
        imageClassName="object-contain object-center"
        badgeClassName="marketing-badge"
        badgeText="KESADARAN GLOBAL"
        titleContent={
          <h1 className="w-full px-2 md:px-4 text-center text-fluid-h2 font-black uppercase tracking-tight text-white leading-[1.05] mb-4 md:mb-6">
            <div className="block w-full" style={{ perspective: "1000px" }}>
              <div
                className="market-text-line market-text-line-1 block transform-gpu lg:whitespace-nowrap opacity-0"
                style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                Memberdayakan Lewat
              </div>
              <div
                className="market-text-line market-text-line-2 block transform-gpu lg:whitespace-nowrap opacity-0"
                style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                Pengetahuan
              </div>
            </div>
          </h1>
        }
        subtexts={[
          "Memimpin gerakan literasi keuangan Web3 secara global.",
          "Menjembatani kesenjangan antara teknologi dan masyarakat.",
        ]}
        subtextClassName="market-subtext-p"
        subtextWrapperClassName="marketing-subtext lg:max-w-lg"
      />

      <MarketSlide
        textRef={locationTextContainerRef}
        images={locationImages}
        wrapperClassName="location-wrapper opacity-0 pointer-events-none"
        imageContainerClassName="location-images-container absolute inset-0 z-10"
        imageWrapperClassName="location-image-wrapper aspect-square drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] rounded-full border-2 border-white/20"
        badgeClassName="location-badge"
        badgeText="Jaringan Komunitas"
        titleContent={
          <div
            className="w-full px-2 md:px-4 mb-4 md:mb-6"
            style={{ perspective: "1000px" }}
          >
            <h2
              className="location-title block w-full text-center text-fluid-h2 font-black uppercase tracking-tight text-white leading-[1.05] transform-gpu opacity-0 lg:whitespace-nowrap"
              style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            >
              Edukasi Inklusif
            </h2>
          </div>
        }
        subtexts={[
          "Bergabunglah dengan komunitas lokal kami untuk merasakan pembelajaran Web3 secara langsung di lingkungan Anda.",
        ]}
        subtextClassName="location-subtext-p"
        subtextWrapperClassName="location-subtext"
      />

      <MarketSlide
        textRef={teamTextContainerRef}
        images={teamImages}
        wrapperClassName="team-wrapper opacity-0 pointer-events-none"
        imageWrapperClassName="team-image-wrapper aspect-square drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] rounded-3xl"
        badgeClassName="team-badge"
        badgeText="MENTOR BERDEDIKASI"
        titleContent={
          <div
            className="w-full px-2 md:px-4 mb-4 md:mb-6"
            style={{ perspective: "1000px" }}
          >
            <h2
              className="team-title block w-full text-center text-fluid-h2 font-black uppercase tracking-tight text-white leading-[1.05] transform-gpu opacity-0 lg:whitespace-nowrap"
              style={{ textShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            >
              Dipandu Inovator
            </h2>
          </div>
        }
        subtexts={[
          "Mentor yang berdedikasi dalam menyederhanakan ekosistem blockchain",
          "untuk generasi baru pelopor digital.",
        ]}
        subtextClassName="team-subtext-p"
        subtextWrapperClassName="team-subtext"
      />

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
