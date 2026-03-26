'use client';

import { useRef, ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {

  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgOpacity = useTransform(scrollYProgress, (v) => Math.max(0, 1 - (v * 2.5)));
  
  const mediaWidth = useTransform(scrollYProgress, (v) => `calc(300px + ((100vw - 300px) * ${v}))`);
  const mediaHeight = useTransform(scrollYProgress, (v) => `calc(400px + ((100vh - 400px) * ${v}))`);
  
  const mediaBorderRadius = useTransform(scrollYProgress, (v) => `${Math.max(0, 40 - (40 * (v * 1.5)))}px`);

  const mediaShadow = useTransform(scrollYProgress, (v) => {
    const opacity = Math.max(0, 0.4 - (v * 0.5));
    const spread = Math.max(0, 80 - (v * 100));
    return `0px 0px ${spread}px rgba(102, 13, 255, ${opacity})`;
  });

  const filterStyle = useTransform(scrollYProgress, (v) => `blur(${Math.max(0, 8 - (v * 20))}px)`);

  const textTranslateXLeft = useTransform(scrollYProgress, (v) => `${-150 * v}vw`);
  const textTranslateXRight = useTransform(scrollYProgress, (v) => `${150 * v}vw`);

  const firstWord = "REDEFINISI EKONOMI";
  const restOfTitle = "ECONIQ";
  const dateText = date || "ERA BARU DIGITAL";
  const scrollText = scrollToExpand || "Scroll Untuk Eksplorasi";

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-zinc-900 z-10">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

        <motion.div className="absolute inset-0 z-0 h-full" style={{ opacity: bgOpacity }}>
          {bgImageSrc && (
            <Image src={bgImageSrc} alt="Background" fill priority className="object-cover" />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

          <motion.div
            className="absolute top-1/2 left-1/2 z-0 overflow-hidden transform-gpu flex flex-col items-center justify-center"
            style={{
              x: "-50%",
              y: "-50%", 
              width: mediaWidth,
              height: mediaHeight,
              borderRadius: mediaBorderRadius,
              boxShadow: mediaShadow,
              filter: filterStyle,
              willChange: "transform, width, height, filter"
            }}
          >
            {mediaType === "video" ? (
              <>
                <video src={mediaSrc} poster={posterSrc} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-black/40 z-10" />
              </>
            ) : (
              <>
                <Image src={mediaSrc} alt={firstWord} fill className="absolute inset-0 object-cover z-0" />
                <div className="absolute inset-0 bg-black/40 z-10" />
              </>
            )}

            <div className="relative z-20 flex flex-col items-center justify-center text-center mt-4 px-6 w-full">
              <motion.p className="text-xl md:text-2xl text-brand-tertiary font-bold tracking-widest uppercase whitespace-nowrap" style={{ x: textTranslateXLeft }}>
                {dateText}
              </motion.p>
              <motion.p className="text-white/60 font-medium uppercase tracking-[0.2em] mt-2 text-sm whitespace-nowrap" style={{ x: textTranslateXRight }}>
                {scrollText}
              </motion.p>
            </div>
          </motion.div>

          <div className={`relative z-20 flex flex-col items-center justify-center w-full gap-2 md:gap-4 pointer-events-none ${textBlend ? "mix-blend-difference" : "mix-blend-normal"}`}>
            <motion.h2 className="text-5xl md:text-7xl lg:text-[9vw] font-black text-white uppercase tracking-tighter whitespace-nowrap" style={{ x: textTranslateXLeft }}>
              {firstWord}
            </motion.h2>
            <motion.h2 className="text-5xl md:text-7xl lg:text-[9vw] font-black text-brand-tertiary uppercase tracking-tighter whitespace-nowrap" style={{ x: textTranslateXRight }}>
              {restOfTitle}
            </motion.h2>
          </div>

        </div>
      </div>
      
    </div>
  );
}