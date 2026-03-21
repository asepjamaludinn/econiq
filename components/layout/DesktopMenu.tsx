import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
  action: string | null;
}

interface DesktopMenuProps {
  navLinks: NavLink[];
  targetIndex: number;
  currentDotY: number;
  handleMenuClick: (action: string | null) => void;
  setHoverIndex: (index: number | null) => void;
}

export default function DesktopMenu({
  navLinks,
  targetIndex,
  currentDotY,
  handleMenuClick,
  setHoverIndex,
}: DesktopMenuProps) {
  return (
    <div className="hidden lg:flex relative flex-col gap-0">
      <div
        className="absolute left-[31px] w-[2px] bg-white rounded-full transition-all duration-300 ease-out"
        style={{ top: "-12px", height: `calc(${currentDotY}px - 0px)` }}
      />
      <div
        className="absolute left-[31px] w-[2px] bg-white rounded-full transition-all duration-300 ease-out"
        style={{ top: `calc(${currentDotY}px + 14px)`, bottom: "8px" }}
      />
      <div
        className={`absolute left-[28px] w-2 h-2 bg-white rounded-full transition-all duration-300 ease-out z-20 pointer-events-none ${
          targetIndex === -1 ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: `translateY(${currentDotY}px)` }}
      />

      {navLinks.map((link, idx) => {
        const isTargeted = targetIndex === idx;
        const itemClasses =
          "nav-item-content cursor-pointer group flex items-center justify-start px-5 h-8 w-full bg-transparent border-none outline-none transition-colors relative z-10 text-left no-underline";
        const textClasses = `ml-3.5 text-[14px] font-normal tracking-tight transition-colors duration-300 ${
          isTargeted ? "text-white" : "text-white/60 group-hover:text-white"
        }`;

        if (link.action) {
          return (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(link.action);
              }}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              className={itemClasses}
            >
              <div className="w-6" />
              <span className={textClasses}>{link.name}</span>
            </button>
          );
        }

        return (
          <Link
            key={idx}
            href={link.href}
            onClick={() => handleMenuClick(null)}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
            className={itemClasses}
          >
            <div className="w-6" />
            <span className={textClasses}>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
