"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutInvestment() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✨ SOLUSI ABSOLUT: Menggunakan functional mapping untuk menghindari bug overload TS.
  // v adalah angka 0 sampai 1. Kita kalkulasi manual nilai outputnya.
  
  // Background Scale: 1.05 -> 1.0
  const bgScale = useTransform(scrollYProgress, (v) => 1.05 - (v * 0.05));

  // Content Opacity: Fade in di 0.2, Full di 0.6, Fade out di 0.9
  const contentOpacity = useTransform(scrollYProgress, (v) => {
    if (v < 0.2) return 0;
    if (v < 0.6) return (v - 0.2) * 2.5; // Linear fade in
    if (v < 0.9) return 1;
    return 1 - (v - 0.9) * 10; // Fast fade out
  });

  // Title Scale: 8 -> 1 (Dramatis Huge to Fit)
  const titleScale = useTransform(scrollYProgress, (v) => {
    const progress = Math.min(v / 0.4, 1); // Selesai di 40% scroll
    return 8 - (progress * 7);
  });

  // Asset Animations (Opacity & Y)
  const assetOpacity = useTransform(scrollYProgress, (v) => {
    if (v < 0.3) return 0;
    if (v > 0.9) return 0;
    return 1;
  });

  const assetY = useTransform(scrollYProgress, (v) => {
    if (v < 0.3) return 100;
    const progress = Math.min((v - 0.3) / 0.2, 1);
    return 100 - (progress * 100);
  });

  const title = "BELAJAR TANPA RISIKO";
  const description = "Pahami dinamika pasar dan simulasi smart contract dalam lingkungan yang 100% aman sebelum kamu terjun ke dunia nyata.";

  return (
    <section className="relative w-full bg-zinc-900">
      <div ref={containerRef} className="relative w-full h-[300vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          
          {/* Background Layer */}
          <motion.div 
            className="absolute inset-0 z-0 bg-[#030005]"
            style={{ scale: bgScale }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-brand-primary/5 blur-[120px] rounded-full" />
            <div className="absolute inset-0 opacity-[0.02]"
                 style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />
          </motion.div>

          {/* Floating Assets */}
          <motion.div
            className="absolute z-10 left-[10%] top-[20%] w-[15vw] h-[15vw] min-w-[120px]"
            style={{ opacity: assetOpacity, y: assetY }}
          >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full opacity-40"
            >
                <Image src="/images/Dompet.svg" alt="Asset" fill className="object-contain" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute z-10 right-[10%] bottom-[20%] w-[12vw] h-[12vw] min-w-[100px]"
            style={{ opacity: assetOpacity, y: assetY }}
          >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full opacity-40"
            >
                <Image src="/images/BitCoin.svg" alt="Asset" fill className="object-contain" />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="container mx-auto px-6 relative z-20 flex flex-col items-center">
            <motion.div
              className="text-center flex flex-col items-center"
              style={{ opacity: contentOpacity }}
            >
              <div className="px-4 py-1 mb-8 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                <span className="text-brand-tertiary font-bold tracking-[0.2em] text-xs uppercase">
                  LINGKUNGAN SIMULASI
                </span>
              </div>

              <motion.h2 
                className="text-5xl md:text-7xl lg:text-[8vw] font-black text-white uppercase tracking-tighter leading-[0.85] mb-10"
                style={{ scale: titleScale }}
              >
                {title}
              </motion.h2>
              
              <p className="text-white/80 text-lg md:text-2xl max-w-3xl font-medium leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}