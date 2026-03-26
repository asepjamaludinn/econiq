"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BookOpen, ShieldCheck, LineChart } from "lucide-react";

type FeatureData = {
  icon: React.ElementType;
  title: string;
  desc: string;
  colorA: string;
  colorB: string;
};

const features: FeatureData[] = [
  { icon: BookOpen, title: "Modul Terstruktur", desc: "Kurikulum Web3 dari konsep dasar hingga tahap lanjutan.", colorA: "#660dff", colorB: "#efaa8c" },
  { icon: ShieldCheck, title: "Simulasi Aman", desc: "Praktek interaktif tanpa risiko finansial dunia nyata.", colorA: "#efaa8c", colorB: "#ffffff" },
  { icon: LineChart, title: "Evaluasi Belajar", desc: "Pantau perkembangan pemahamanmu secara berkala.", colorA: "#ffffff", colorB: "#660dff" },
];

const cardVariants: Variants = {
  offscreen: { y: 200 },
  onscreen: {
    y: 0,
    rotate: -6, 
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

function Card({ feature, i }: { feature: FeatureData; i: number }) {
  const Icon = feature.icon;
  const background = `linear-gradient(306deg, ${feature.colorA}, ${feature.colorB})`;

  return (
    <motion.div
      className={`relative flex justify-center items-center w-full overflow-hidden pt-5 h-[300px] md:h-[500px] -mb-16 md:-mb-[120px]`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6 }} 
    >
      <div
        style={{ background, clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")` }}
        className="absolute inset-0 opacity-15"
      />
      
      <motion.div
        variants={cardVariants}
        className="w-[90vw] md:w-[300px] h-[250px] md:h-[400px] flex flex-col justify-center items-center rounded-2xl origin-[10%_60%] bg-white/3 border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] p-6 text-center transform-gpu"
      >
        <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-white drop-shadow-lg" />
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">{feature.title}</h3>
        <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed">{feature.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default function AboutMonitoring() {
  return (
    <section className="py-24 md:py-48 relative flex flex-col items-center overflow-hidden bg-transparent z-10 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none transform-gpu -z-10" />
      
      <div className="relative z-10 text-center mb-8 md:mb-12 px-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
          Pantau Progres <br /> <span className="text-brand-tertiary">Belajarmu</span>
        </h2>
        <p className="text-white/60 text-base md:text-xl max-w-xl mx-auto font-medium">
          Dapatkan wawasan mendalam tentang perkembangan literasi digital dan pemahaman teknologimu.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[500px] mx-auto pb-20 md:pb-[100px]">
        {features.map((feature, i) => (
          <Card feature={feature} i={i} key={i} />
        ))}
      </div>
    </section>
  );
}