import AboutHero from "@/components/sections/about/AboutHero"
import AboutSplash from "@/components/sections/about/AboutSplash"
import AboutStory from "@/components/sections/about/AboutStory"
import AboutFeatures from "@/components/sections/about/AboutFeatures"
import AboutSecurity from "@/components/sections/about/AboutSecurity"
import AboutMarquee from "@/components/sections/about/AboutMarquee"
import AboutTimeline from "@/components/sections/about/AboutTimeline"
import AboutCTA from "@/components/sections/about/AboutCTA"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <AboutSplash />
      <AboutStory />
      <AboutFeatures />
      <AboutSecurity />
      <AboutMarquee />
      <AboutTimeline />
      <AboutCTA />
    </main>
  )
}