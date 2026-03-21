import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";

interface NavLink {
  name: string;
  href: string;
  action: string | null;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  targetIndex: number;
  handleMenuClick: (action: string | null) => void;
  setHoverIndex: (index: number | null) => void;
}

export default function MobileMenu({
  navLinks,
  targetIndex,
  handleMenuClick,
  setHoverIndex,
}: MobileMenuProps) {
  return (
    <div className="flex lg:hidden relative flex-col gap-0 mt-2">
      <div className="w-full flex justify-center mb-8 mt-1 nav-item-content pointer-events-none">
        <span className="border border-white/20 text-white/80 rounded-full px-4 py-1 text-[10px] font-normal tracking-tight">
          Explore Eqonic
        </span>
      </div>

      {navLinks.map((link, idx) => {
        const isTargeted = targetIndex === idx;
        const itemClasses =
          "nav-item-content cursor-pointer group flex items-center justify-center px-5 h-12 mb-4 w-full bg-transparent border-none outline-none transition-colors relative z-10 text-center no-underline";
        const textClasses = `text-[30px] font-medium tracking-tight transition-colors duration-300 ${
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
            <span className={textClasses}>{link.name}</span>
          </Link>
        );
      })}

      <div className="mt-10 nav-item-content w-full px-5">
        <SocialLinks />
      </div>
    </div>
  );
}
