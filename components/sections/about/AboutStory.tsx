"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutStory() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(".story-vid", { opacity: 0, scale: 0.9, x: -50 }, { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" })
      .fromTo(".story-text", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Video Player */}
        <div className="story-vid relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <video
            src="/animations/econiq.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Description */}
        <div className="story-text flex flex-col">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 text-white leading-tight">
            Finance At <br/><span className="text-[#0A7B5E]">Any Time</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-lg mb-8">
            Econiq offers users the ability to manage their digital assets seamlessly. Our versatility allows real-time tracking, transparent transactions, and a comprehensive approach to the ecosystem, complimenting the offer of smart contracts and giving a broader scope to the "ready-to-grow" concept.
          </p>
          <button className="w-max px-8 py-3 bg-white text-zinc-900 hover:bg-gray-200 transition-colors rounded-full font-bold uppercase tracking-wider text-sm">
            View Features
          </button>
        </div>

      </div>
    </section>
  );
}