import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/sections/home/HeroSection";

const WalletSection = dynamic(
  () => import("@/components/sections/home/WalletSection"),
);
const FeatureSection = dynamic(
  () => import("@/components/sections/home/FeatureSection"),
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/home/HowItWorksSection"),
);
const MarketingSection = dynamic(
  () => import("@/components/sections/home/MarketSection"),
);
const FAQSection = dynamic(
  () => import("@/components/sections/home/FAQSection"),
);

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
