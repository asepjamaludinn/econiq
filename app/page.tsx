import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/sections/HeroSection";

const WalletSection = dynamic(
  () => import("@/components/sections/WalletSection"),
);
const FeatureSection = dynamic(
  () => import("@/components/sections/FeatureSection"),
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/HowItWorksSection"),
);
const MarketingSection = dynamic(
  () => import("@/components/sections/MarketSection"),
);
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));

export default function Home() {
  return (
    <>
      <SplashScreen />

      <main className="relative w-full overflow-hidden bg-zinc-900">
        <HeroSection />
        <WalletSection />
        <FeatureSection />
        <HowItWorksSection />
        <MarketingSection />
        <FAQSection />
      </main>
    </>
  );
}
