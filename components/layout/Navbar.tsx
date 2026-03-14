"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";
import ContactModal from "@/components/ui/ContactModal";
import FormModal from "@/components/ui/FormModal";
import { EnvelopeIcon } from "@/components/icons/EnvelopeIcon";
import { companyInfo } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Home", href: "/", action: null },
    { name: "About Us", href: "/about", action: null },
    { name: "content", href: "/content", action: null },
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
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), 300);
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
    const isMobileOrTablet =
      typeof window !== "undefined" && window.innerWidth < 1024;

    if (isOpen) {
      if (isMobileOrTablet) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      }

      if (menuListRef.current) {
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
      }

      if (overlayRef.current && isMobileOrTablet) {
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          display: "block",
        });
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (menuListRef.current) {
        gsap.to(menuListRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          display: "none",
        });
      }

      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          display: "none",
        });
      }
    }
  }, [isOpen]);

  const handleMenuClick = (action: string | null) => {
    setIsOpen(false);
    if (action === "contact-modal") setIsContactOpen(true);
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 z-[140] hidden lg:hidden"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed top-4 lg:top-5 left-4 right-4 lg:right-auto lg:left-6 z-[150] flex justify-center lg:justify-start items-start gap-2.5 font-sans pointer-events-none">
        <div
          ref={menuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative bg-[#660DFF] rounded-md lg:rounded-[15px] shadow-[0_8px_25px_rgba(102,13,255,0.3)] flex flex-col overflow-hidden w-full max-w-[360px] md:max-w-[320px] lg:max-w-none lg:w-fit pointer-events-auto"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between lg:justify-start px-5 py-5 lg:py-2.5 cursor-pointer relative z-20 w-full bg-transparent border-none outline-none"
          >
            <div className="flex items-center gap-3.5 z-30">
              <div className="w-8 lg:w-6 h-4 relative flex justify-center items-center z-30 pointer-events-none">
                <span
                  className={`absolute bg-white rounded-full transition-all duration-300 ease-out origin-center ${isOpen ? "w-full h-[3px] lg:w-2 lg:h-2 translate-y-0 rotate-45 lg:rotate-0" : "w-full h-[3px] -translate-y-[4px] lg:-translate-y-[3px] rotate-0"}`}
                />
                <span
                  className={`absolute bg-white rounded-full transition-all duration-300 ease-out origin-center ${isOpen ? "w-full h-[3px] lg:w-0 lg:opacity-0 translate-y-0 -rotate-45 lg:rotate-0" : "w-full h-[3px] translate-y-[4px] lg:translate-y-[3px] rotate-0 opacity-100"}`}
                />
              </div>
              <span className="hidden lg:block text-white font-normal text-base tracking-tight z-20 pointer-events-none">
                Menu
              </span>
            </div>

            <div className="lg:hidden pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <Image
                src="/images/Logo.svg"
                alt="Eqonic Logo"
                width={100}
                height={30}
                className="object-contain"
                priority
              />
            </div>
          </button>

          <div ref={menuListRef} className="h-0 opacity-0 hidden pb-12 lg:pb-3">
            <div className="relative flex flex-col mt-2 lg:mt-0 gap-0">
              <div
                className="hidden lg:block absolute left-[31px] w-[2px] bg-white rounded-full transition-all duration-300 ease-out"
                style={{ top: "-12px", height: `calc(${currentDotY}px - 0px)` }}
              />
              <div
                className="hidden lg:block absolute left-[31px] w-[2px] bg-white rounded-full transition-all duration-300 ease-out"
                style={{ top: `calc(${currentDotY}px + 14px)`, bottom: "8px" }}
              />
              <div
                className={`hidden lg:block absolute left-[28px] w-2 h-2 bg-white rounded-full transition-all duration-300 ease-out z-20 pointer-events-none ${targetIndex === -1 ? "opacity-0" : "opacity-100"}`}
                style={{ transform: `translateY(${currentDotY}px)` }}
              />

              <div className="lg:hidden w-full flex justify-center mb-8 mt-1 nav-item-content pointer-events-none">
                <span className="border border-white/20 text-white/80 rounded-full px-4 py-1 text-[10px] font-normal tracking-tight">
                  Explore Eqonic
                </span>
              </div>

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
                    className="nav-item-content cursor-pointer group flex items-center justify-center lg:justify-start px-5 h-12 lg:h-8 mb-4 lg:mb-0 w-full bg-transparent border-none outline-none transition-colors relative z-10 text-center lg:text-left"
                  >
                    <div className="hidden lg:block w-6" />
                    <span
                      className={`lg:ml-3.5 text-[30px] lg:text-[14px] font-medium lg:font-normal tracking-tight transition-colors duration-300 ${isTargeted ? "text-white" : "text-white/60 group-hover:text-white"}`}
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
                    className="nav-item-content cursor-pointer group flex items-center justify-center lg:justify-start px-5 h-12 lg:h-8 mb-4 lg:mb-0 w-full transition-colors relative z-10 no-underline text-center lg:text-left"
                  >
                    <div className="hidden lg:block w-6" />
                    <span
                      className={`lg:ml-3.5 text-[30px] lg:text-[14px] font-medium lg:font-normal tracking-tight transition-colors duration-300 ${isTargeted ? "text-white" : "text-white/60 group-hover:text-white"}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              <div className="lg:hidden flex flex-wrap items-center justify-center gap-3 mt-10 nav-item-content w-full px-5">
                {companyInfo.socials.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <Link
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#660DFF] w-7 h-7 flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-300 shadow-sm"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {pathname !== "/" && (
          <div
            className={`pointer-events-auto absolute lg:relative right-0 lg:right-auto top-0 transition-all duration-300 hidden lg:block ${isOpen ? "opacity-0 scale-90 pointer-events-none lg:-translate-x-4" : "opacity-100 scale-100 lg:translate-x-0"}`}
          >
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] bg-[#E2D1F9] text-[#660DFF] rounded-[12px] shadow-[0_6px_20px_rgba(226,209,249,0.4)] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>

      <div className="fixed top-4 lg:top-5 right-4 lg:right-6 z-[160] pointer-events-auto hidden lg:block">
        <button
          onClick={() => setIsFormOpen(true)}
          className="group flex items-center justify-center gap-2 lg:gap-3 bg-[#660DFF] hover:bg-[#5200CC] px-3 py-2.5 lg:px-5 lg:py-2.5 rounded-[12px] lg:rounded-xl shadow-[0_8px_25px_rgba(102,13,255,0.3)] transition-all duration-300 active:scale-95 border-none outline-none cursor-pointer"
        >
          <span className="text-white font-medium text-sm lg:text-base tracking-tight pointer-events-none">
            Email
          </span>
          <div className="relative flex items-center justify-center w-[22px] h-[18px] pointer-events-none">
            <EnvelopeIcon />
          </div>
        </button>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
