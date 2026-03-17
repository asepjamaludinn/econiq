"use client";

import { useState } from "react";
import { FAQItemData } from "@/types";

export default function FAQItem({ question, answer }: FAQItemData) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="faq-item w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/15"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center p-5 md:p-8">
        <h3 className="text-base md:text-lg lg:text-xl font-normal tracking-tight text-white pr-4">
          {question}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-white/20" : "bg-transparent"
          }`}
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
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 md:p-8 pt-0 text-white/70 leading-relaxed text-sm md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
