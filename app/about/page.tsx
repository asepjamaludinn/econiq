"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AboutHero from "@/components/sections/about/AboutHero";
import AboutBigTypography from "@/components/sections/about/AboutBigTypography";
import AboutProductShowcase from "@/components/sections/about/AboutProductShowcase";
import AboutInvestment from "@/components/sections/about/AboutInvestment";
import AboutMonitoring from "@/components/sections/about/AboutMonitoring";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutFeatures from "@/components/sections/about/AboutFeatures";
import AboutSecurity from "@/components/sections/about/AboutSecurity";
import AboutMarquee from "@/components/sections/about/AboutMarquee";
import AboutTimeline from "@/components/sections/about/AboutTimeline";
import AboutCTA from "@/components/sections/about/AboutCTA";
import FooterNightScene from "@/components/sections/about/FooterNightScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, 
      },
    });
    tl.to(mainRef.current, { backgroundColor: "#1A0B2E", color: "#FFFFFF", duration: 1.5, ease: "power1.inOut" }) 
      .to(mainRef.current, { backgroundColor: "#0b1021", color: "#FFFFFF", duration: 1.5, ease: "power1.inOut" });

  }, { scope: mainRef });

  return (
    <main 
      ref={mainRef}
      className="relative w-full min-h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: "#FDFBF7", color: "#000000" }}
    >
      <AboutHero />
      <AboutBigTypography />
      <AboutProductShowcase />
      <AboutInvestment />
      <AboutMonitoring />
      <AboutStory />
      <AboutFeatures />
      <AboutSecurity />
      <AboutMarquee />
      <AboutTimeline />
      <AboutCTA />
      <FooterNightScene />
    </main>
  );
}