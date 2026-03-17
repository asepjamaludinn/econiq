"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { faqData } from "@/constants";
import FAQItem from "@/components/ui/FAQItem";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        textContainerRef.current,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".faq-item",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-fit py-32 md:py-48 flex flex-col items-center bg-gradient-to-t from-grad-end to-grad-start text-white z-10 px-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        <div
          ref={textContainerRef}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <h2 className="text-[clamp(40px,7vw,100px)] font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
            Frequently <br /> Asked
          </h2>
          <p className="text-white/80 text-sm md:text-lg max-w-xl text-center leading-relaxed tracking-tight">
            Punya pertanyaan seputar cara kerja, keamanan, atau integrasi aset
            digital di Eqonic? Temukan jawabannya di bawah ini.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
