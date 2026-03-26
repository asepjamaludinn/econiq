import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/home/HeroSection";

const SectionSkeleton = () => (
  <div
    className="w-full min-h-screen bg-zinc-900 animate-pulse"
    aria-hidden="true"
  />
);

const FAQSkeleton = () => (
  <div
    className="w-full min-h-[50vh] bg-zinc-900 animate-pulse"
    aria-hidden="true"
  />
);

const WalletSection = dynamic(
  () => import("@/components/sections/home/WalletSection"),
  { loading: () => <SectionSkeleton /> },
);

const FeatureSection = dynamic(
  () => import("@/components/sections/home/FeatureSection"),
  { loading: () => <SectionSkeleton /> },
);

const HowItWorksSection = dynamic(
  () => import("@/components/sections/home/HowItWorksSection"),
  { loading: () => <SectionSkeleton /> },
);

const MarketingSection = dynamic(
  () => import("@/components/sections/home/MarketSection"),
  { loading: () => <SectionSkeleton /> },
);

const FAQSection = dynamic(
  () => import("@/components/sections/home/FAQSection"),
  { loading: () => <FAQSkeleton /> },
);

export default function Home() {
  return (
    <>
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
