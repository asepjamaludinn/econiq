import AboutHero from "@/components/sections/about/AboutHero"
import AboutStory from "@/components/sections/about/AboutStory"
import AboutFeatures from "@/components/sections/about/AboutFeatures"
import AboutSecurity from "@/components/sections/about/AboutSecurity"
import AboutMarquee from "@/components/sections/about/AboutMarquee"
import AboutTimeline from "@/components/sections/about/AboutTimeline"
import AboutCTA from "@/components/sections/about/AboutCTA"
import AboutBigTypography from "@/components/sections/about/AboutBigTypography"
import AboutProductShowcase from "@/components/sections/about/AboutProductShowcase"
import AboutInvestment from "@/components/sections/about/AboutInvestment"
import AboutMonitoring from "@/components/sections/about/AboutMonitoring"

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-zinc-900 text-white">
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
    </main>
  )
}