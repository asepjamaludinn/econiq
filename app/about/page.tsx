import AboutSplash from "@/components/sections/about/AboutSplash";
import AboutHero from "@/components/sections/about/AboutHero";
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
    <main className="relative w-full overflow-x-hidden bg-zinc-900 text-white">
      <AboutSplash />
      <AboutHero />
      <AboutFeatures />
      <AboutCTA />
      <AboutSecurity />
      <AboutTimeline />
    </main>
  );
}