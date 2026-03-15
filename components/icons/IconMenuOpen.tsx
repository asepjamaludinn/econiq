interface IconProps {
  isOpen: boolean;
  className?: string;
}

export const IconMenuOpen = ({ isOpen, className = "" }: IconProps) => (
  <div className={`relative flex justify-center items-center ${className}`}>
    <span
      className={`absolute bg-white rounded-full transition-all duration-300 ease-out origin-center ${
        isOpen
          ? "w-full h-[3px] lg:w-2 lg:h-2 translate-y-0 rotate-45 lg:rotate-0"
          : "w-full h-[3px] -translate-y-[4px] lg:-translate-y-[3px] rotate-0"
      }`}
    />
    <span
      className={`absolute bg-white rounded-full transition-all duration-300 ease-out origin-center ${
        isOpen
          ? "w-full h-[3px] lg:w-0 lg:opacity-0 translate-y-0 -rotate-45 lg:rotate-0"
          : "w-full h-[3px] translate-y-[4px] lg:translate-y-[3px] rotate-0 opacity-100"
      }`}
    />
  </div>
);
