"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { faqData } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="faq-item w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/15"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-white pr-4">
          {question}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45 bg-white/20" : "bg-transparent"}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 md:p-8 pt-0 text-white/70 leading-relaxed text-sm md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

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

      // Animasi Header Teks
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

      // Animasi Stagger untuk Item FAQ
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
      className="relative w-full min-h-fit py-32 md:py-48 flex flex-col items-center bg-gradient-to-t from-[#efaa8c] to-[#7020f9] text-white z-10 px-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Header FAQ */}
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

        {/* List FAQ */}
        <div className="w-full flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
