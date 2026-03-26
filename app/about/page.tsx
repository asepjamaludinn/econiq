"use client";

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

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-zinc-900 text-white selection:bg-brand-secondary selection:text-white pb-0">
      <AboutHero />
      <AboutBigTypography />
      <AboutProductShowcase />
      <AboutInvestment />
      <AboutMonitoring />
      <AboutStory />
      <AboutFeatures />
      <AboutSecurity />
      <AboutMarquee />
      <div className="w-full bg-gradient-to-b from-zinc-900 via-zinc-900/60 to-grad-end">
        <AboutTimeline />
        <AboutCTA />
      </div>
    </main>
  );
}