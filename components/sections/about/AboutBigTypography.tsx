"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const textsToCycle = [
  "KAPAN PUN, DI MANA PUN.",
  "AMAN, TRANSPARAN, DESENTRALISASI.",
  "MASA DEPAN EKONOMI DIGITAL.",
  "DITENAGAI OLEH SMART CONTRACTS.",
];

export default function AboutBigTypography() {
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  const displayText = useTransform(rounded, (latest) => {
    const currentText = textsToCycle[textIndex.get()];
    return currentText.slice(0, latest);
  });

  useEffect(() => {
    let isMounted = true;

    const startTypewriter = async () => {
      while (isMounted) {
        const currentText = textsToCycle[textIndex.get()];
        const textLength = currentText.length;

        await animate(count, textLength, {
          duration: textLength * 0.08, 
          ease: "linear",
        });

        await new Promise((resolve) => setTimeout(resolve, 2500));

        await animate(count, 0, {
          duration: textLength * 0.03,
          ease: "linear",
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        if (isMounted) {
          textIndex.set((textIndex.get() + 1) % textsToCycle.length);
        }
      }
    };

    startTypewriter();

    return () => {
      isMounted = false;
    };
  }, [count, textIndex]);

  return (
    <section 
      className="py-32 md:py-48 flex justify-center items-center px-6 relative bg-transparent overflow-hidden z-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none transform-gpu -z-10" />

      <h2 
        className="text-5xl md:text-8xl lg:text-[110px] font-black uppercase text-center leading-[0.9] tracking-tighter text-white drop-shadow-2xl"
      >
        <span>TRANSAKSI</span> <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-tertiary to-brand-primary">
          <motion.span>{displayText}</motion.span>
          <span className="text-brand-primary animate-pulse ml-1">|</span>
        </span>
      </h2>
    </section>
  );
}