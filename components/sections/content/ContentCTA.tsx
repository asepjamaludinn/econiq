"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "@/components/ui/Button";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ContentCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const openFormModal = useModalStore((state) => state.openFormModal);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-grad-end">
      <div
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none flex justify-center"
        aria-hidden="true"
      >
        <div className="absolute -top-32 w-full max-w-4xl h-80 bg-white/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative px-4 md:px-6 lg:px-10 max-w-6xl mx-auto w-full">
        <div
          ref={containerRef}
          className="relative w-full rounded-[30px] md:rounded-[40px] bg-white/70 backdrop-blur-xl border border-white/60 p-10 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center mb-8 border border-zinc-100 shadow-sm">
            <Mail size={32} className="text-brand-primary" />
          </div>

          <h2 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6 max-w-3xl drop-shadow-sm text-foreground">
            Jangan Lewatkan Perkembangan Digital
          </h2>

          <p className="relative z-10 text-lg md:text-xl text-zinc-600 font-medium mb-10 max-w-3xl leading-relaxed">
            Dapatkan insight Web3 dan tren keuangan digital langsung ke email
            Anda.
          </p>

          <Button
            variant="primary"
            size="xl"
            onClick={openFormModal}
            className="relative z-10 group shadow-xl"
          >
            Berlangganan Informasi
          </Button>
        </div>
      </div>
    </section>
  );
}
