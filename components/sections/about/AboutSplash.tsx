"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutSplash() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const layerDarkRef = useRef<HTMLDivElement>(null);
  const layerAccentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Mencegah scroll selama splash screen aktif
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Kembalikan fungsi scroll dan sembunyikan container splash
        document.body.style.overflow = "auto";
        gsap.set(containerRef.current, { display: "none" });
      },
    });

    // 1. Teks muncul perlahan dari bawah
    tl.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    )
    // 2. Teks menghilang ke atas
    .to(textRef.current, {
      y: -30, opacity: 0, duration: 0.6, ease: "power3.in", delay: 0.6
    })
    // 3. Efek "Buka Lembar" - Layer gelap naik ke atas
    .to(layerDarkRef.current, {
      yPercent: -100, duration: 0.8, ease: "power4.inOut"
    })
    // 4. Layer aksen ungu menyusul naik dengan sedikit delay
    .to(layerAccentRef.current, {
      yPercent: -100, duration: 0.8, ease: "power4.inOut"
    }, "-=0.6"); // Mulai 0.6 detik lebih awal sebelum animasi sebelumnya selesai

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-99 pointer-events-none flex flex-col">
      {/* Layer 2: Aksen Ungu (berada di bawah layer gelap) */}
      <div 
        ref={layerAccentRef} 
        className="absolute inset-0 w-full h-full bg-[#660DFF]"
      />
      
      {/* Layer 1: Gelap (berada paling atas, berisi teks) */}
      <div 
        ref={layerDarkRef} 
        className="absolute inset-0 w-full h-full bg-zinc-950 flex items-center justify-center"
      >
        <div ref={textRef} className="overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white">
            Unfolding <span className="text-[#0A7B5E]">The Journey</span>
          </h2>
        </div>
      </div>
    </div>
  );
}