import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import ContentCTA from "@/components/sections/content/ContentCTA";
import AboutProductShowcase from "@/components/sections/about/AboutProductShowcase";
import AboutMonitoring from "@/components/sections/about/AboutMonitoring";
import AboutPlatform from "@/components/sections/about/AboutPlatform";
import AboutMarquee from "@/components/sections/about/AboutMarquee";
import AboutTimeline from "@/components/sections/about/AboutTimeline";

export const metadata: Metadata = {
  title: "About Us | Eqonic",
  description:
    "Kenali lebih jauh tentang Eqonic dan misi kami dalam membangun literasi keuangan digital Web3.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      <AboutHero />
      <AboutProductShowcase />
      <AboutMonitoring />
      <AboutPlatform />
      <AboutMarquee />
      <AboutTimeline />
      <ContentCTA />
    </main>
  );
}
