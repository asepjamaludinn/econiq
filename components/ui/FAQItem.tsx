"use client";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div
      className={`faq-item w-full bg-white rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isOpen ? "shadow-md" : "shadow-sm"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-5 md:p-6 lg:p-7">
        <h3 className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-zinc-900 pr-4 flex items-start gap-2">
          <span className="font-normal text-zinc-500 shrink-0">Q)</span>
          <span>{question}</span>
        </h3>

        <div
          className={`flex-shrink-0 relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <div className="absolute w-[18px] h-[1.5px] bg-zinc-600 rounded-full"></div>
          <div className="absolute w-[1.5px] h-[18px] bg-zinc-600 rounded-full"></div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 md:p-6 lg:p-7 pt-0 md:pt-0 lg:pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
