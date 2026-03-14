"use client";

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  className?: string;
}

export default function SliderControls({
  onPrev,
  onNext,
  isFirst,
  isLast,
  className = "",
}: SliderControlsProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 md:gap-4 pointer-events-auto ${className}`}
    >
      <button
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous Slide"
        className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-[20px] md:rounded-2xl bg-white/20 backdrop-blur-md transition-all active:scale-95 ${
          isFirst
            ? "opacity-40 cursor-not-allowed"
            : "opacity-100 hover:bg-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-7 h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={isLast}
        aria-label="Next Slide"
        className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-[20px] md:rounded-2xl bg-white/20 backdrop-blur-md transition-all active:scale-95 ${
          isLast
            ? "opacity-40 cursor-not-allowed"
            : "opacity-100 hover:bg-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white w-7 h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
