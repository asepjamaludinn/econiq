import AboutHero from "@/components/sections/about/AboutHero";
import AboutMarquee from "@/components/sections/about/AboutMarquee";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutFeatures from "@/components/sections/about/AboutFeatures";
import AboutCTA from "@/components/sections/about/AboutCTA";
import AboutSecurity from "@/components/sections/about/AboutSecurity";
import AboutTimeline from "@/components/sections/about/AboutTimeline";

export const metadata = {
  title: "About Us | Econiq",
  description: "Econiq concept and journey.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden bg-zinc-900 text-white">
      <AboutHero />
      <AboutMarquee />
      <AboutStory />
      <AboutFeatures />
      <AboutCTA />
      <AboutSecurity />
      <AboutTimeline />
    </main>
  );
}