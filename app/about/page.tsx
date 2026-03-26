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
        scrub: true,
      },
    });

    tl.to(mainRef.current, { backgroundColor: "#1A0B2E", duration: 1, ease: "none" })
      .to(mainRef.current, { backgroundColor: "#660dff", duration: 1, ease: "power2.inOut" });
  }, { scope: mainRef });

  return (
    <main 
      ref={mainRef} 
      className="relative z-20 w-full min-h-screen overflow-x-hidden bg-zinc-900 text-white"
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
      <div className="relative z-10 pb-20">
        <AboutCTA />
      </div>
      <div className="absolute -bottom-40 left-0 w-full h-40 bg-linear-to-b from-brand-primary to-transparent z-50 pointer-events-none" />
    </main>
  );
}