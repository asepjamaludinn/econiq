// components/layout/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";
import ContactModal from "@/components/ui/ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Home", href: "/", action: null },
    { name: "About Us", href: "/about", action: null },
    { name: "Academy", href: "/content", action: null },
    { name: "Contact", href: "#", action: "contact-modal" },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const activeIndex = navLinks.findIndex((link) => pathname === link.href);
  const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  const itemHeight = 32;
  const dotStartOffset = 12;
  const currentDotY =
    targetIndex !== -1 ? dotStartOffset + targetIndex * itemHeight : 0;

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!menuListRef.current) return;
    if (isOpen) {
      gsap.to(menuListRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        display: "block",
      });
      gsap.fromTo(
        ".nav-item-content",
        { y: -5, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.1,
        },
      );
    } else {
      gsap.to(menuListRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        display: "none",
      });
    }
  }, [isOpen]);

  const handleMenuClick = (action: string | null) => {
    setIsOpen(false);
    if (action === "contact-modal") {
      setIsContactOpen(true);
    }
  };

  return (
    <>
      {/* NAV MENU UTAMA */}
      <div className="fixed top-5 left-4 md:left-6 z-[150] flex items-start gap-2.5 font-sans">
        <div
          ref={menuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative bg-[#660DFF] rounded-[15px] shadow-[0_8px_25px_rgba(102,13,255,0.3)] flex flex-col overflow-hidden"
          style={{ width: "fit-content" }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-5 py-2.5 cursor-pointer relative z-20 w-full bg-transparent border-none outline-none"
          >
            <div className="w-6 h-4 relative flex justify-center items-center z-30 pointer-events-none">
              <span
                className={`absolute bg-white rounded-full transition-all duration-300 ease-out ${isOpen ? "w-2 h-2 translate-y-0" : "w-full h-[1.5px] -translate-y-[3px]"}`}
              />
              <span
                className={`absolute bg-white rounded-full transition-all duration-300 ease-out ${isOpen ? "w-0 h-[1.5px] opacity-0" : "w-full h-[1.5px] translate-y-[3px]"}`}
              />
            </div>
            <span className="ml-3.5 text-white font-normal text-base tracking-wide z-20 pointer-events-none">
              Menu
            </span>
          </button>

          <div ref={menuListRef} className="h-0 opacity-0 hidden pb-3">
            <div className="relative flex flex-col mt-0">
              <div
                className="absolute left-[31px] w-[2px] bg-white rounded-full transition-all duration-300 ease-out"
                style={{ top: "-12px", height: `calc(${currentDotY}px - 0px)` }}
              />
              <div
                className="absolute left-[31px] w-[2px] bg-white rounded-full transition-all duration-300 ease-out"
                style={{ top: `calc(${currentDotY}px + 14px)`, bottom: "8px" }}
              />
              <div
                className={`absolute left-[28px] w-2 h-2 bg-white rounded-full transition-all duration-300 ease-out z-20 pointer-events-none ${targetIndex === -1 ? "opacity-0" : "opacity-100"}`}
                style={{ transform: `translateY(${currentDotY}px)` }}
              />

              {navLinks.map((link, idx) => {
                const isTargeted = targetIndex === idx;

                return link.action ? (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(link.action);
                    }}
                    onMouseEnter={() => setHoverIndex(idx)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="nav-item-content cursor-pointer group flex items-center px-5 h-8 w-full bg-transparent border-none outline-none transition-colors relative z-10 text-left"
                  >
                    <div className="w-6" />
                    <span
                      className={`ml-3.5 text-[14px] font-normal tracking-wide transition-colors duration-300 ${isTargeted ? "text-white" : "text-white/60 group-hover:text-white"}`}
                    >
                      {link.name}
                    </span>
                  </button>
                ) : (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => handleMenuClick(null)}
                    onMouseEnter={() => setHoverIndex(idx)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="nav-item-content cursor-pointer group flex items-center px-5 h-8 transition-colors relative z-10 no-underline"
                  >
                    <div className="w-6" />
                    <span
                      className={`ml-3.5 text-[14px] font-normal tracking-wide transition-colors duration-300 ${isTargeted ? "text-white" : "text-white/60 group-hover:text-white"}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${isOpen ? "opacity-0 -translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"}`}
        >
          {pathname !== "/" && (
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-[40px] h-[40px] bg-[#E2D1F9] text-[#660DFF] rounded-[12px] shadow-[0_6px_20px_rgba(226,209,249,0.4)] hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
