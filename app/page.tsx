import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/sections/HeroSection";
import WalletSection from "@/components/sections/WalletSection";
import FeatureSection from "@/components/sections/FeatureSection";

export default function Home() {
  return (
    <>
      <SplashScreen />

      <main className="relative w-full overflow-hidden bg-zinc-900">
        <HeroSection />
        <WalletSection />
        <FeatureSection />
      </main>
    </>
  );
}
