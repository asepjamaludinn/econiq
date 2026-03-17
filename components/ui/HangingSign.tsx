interface HangingSignProps {
  text: string;
}

export default function HangingSign({ text }: HangingSignProps) {
  return (
    <div className="relative flex flex-col items-center mb-10 z-10 animate-swing origin-top">
      <div className="w-5 h-5 rounded-full border-[3px] border-brand-primary bg-white z-20 shadow-sm"></div>

      <svg
        width="160"
        height="70"
        className="absolute top-2.5 z-0 text-brand-primary"
        viewBox="0 0 160 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <line x1="80" y1="0" x2="20" y2="70" />
        <line x1="80" y1="0" x2="140" y2="70" />
      </svg>

      <div className="mt-[60px] relative z-10 bg-white border-[3px] border-brand-primary rounded-2xl px-10 py-6 md:px-14 md:py-8 shadow-[0_15px_35px_rgba(102,13,255,0.15)] flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-black text-brand-dark tracking-widest text-center uppercase leading-none">
          {text}
        </h1>
      </div>
    </div>
  );
}
