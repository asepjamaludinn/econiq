"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useLenis } from "lenis/react";
import ContactModal from "@/components/ui/ContactModal";
import FormModal from "@/components/ui/FormModal";
import { EnvelopeIcon } from "@/components/icons/EnvelopeIcon";
import { IconMenuOpen } from "@/components/icons/IconMenuOpen";
import { useModalStore } from "@/store/useModalStore";
import { useNavbarAnimations } from "@/hooks/useNavbarAnimations";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const {
    isFormOpen,
    isContactOpen,
    openFormModal,
    closeFormModal,
    openContactModal,
    closeContactModal,
  } = useModalStore();

  const router = useRouter();
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Home", href: "/", action: null },
    { name: "About Us", href: "/about", action: null },
    { name: "Content", href: "/content", action: null },
    { name: "Contact", href: "#", action: "contact-modal" },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const activeIndex = navLinks.findIndex((link) => pathname === link.href);
  const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  const itemHeight = 32;
  const dotStartOffset = 12;
  const currentDotY =
    targetIndex !== -1 ? dotStartOffset + targetIndex * itemHeight : 0;

  useNavbarAnimations(isOpen, menuListRef, overlayRef);

  useEffect(() => {
    const isMobileOrTablet =
      typeof window !== "undefined" && window.innerWidth < 1024;

    if (isOpen && isMobileOrTablet) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

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

  const handleMenuClick = (action: string | null) => {
    setIsOpen(false);
    if (action === "contact-modal") openContactModal();
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 z-[140] hidden lg:hidden touch-none"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed top-4 lg:top-5 left-4 right-4 lg:right-auto lg:left-6 z-150 flex justify-center lg:justify-start items-start gap-2.5 font-sans pointer-events-none">
        <div
          ref={menuRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative bg-brand-primary rounded-md lg:rounded-[15px] shadow-[0_8px_25px_rgba(102,13,255,0.3)] flex flex-col overflow-hidden w-full max-w-[360px] md:max-w-[320px] lg:max-w-none lg:w-fit pointer-events-auto overscroll-none"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between lg:justify-start px-5 py-5 lg:py-2.5 cursor-pointer relative z-20 w-full bg-transparent border-none outline-none"
          >
            <div className="flex items-center gap-3.5 z-30">
              <IconMenuOpen
                isOpen={isOpen}
                className="w-8 lg:w-6 h-4 pointer-events-none z-30"
              />
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

            <div
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openFormModal();
              }}
              className="lg:hidden z-30 group flex items-center justify-center p-1 -mr-1 cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-[22px] h-[18px] pointer-events-none">
                <EnvelopeIcon />
              </div>
            </div>
          </button>

          <div ref={menuListRef} className="h-0 opacity-0 hidden pb-12 lg:pb-3">
            <DesktopMenu
              navLinks={navLinks}
              targetIndex={targetIndex}
              currentDotY={currentDotY}
              handleMenuClick={handleMenuClick}
              setHoverIndex={setHoverIndex}
            />

            <MobileMenu
              navLinks={navLinks}
              targetIndex={targetIndex}
              handleMenuClick={handleMenuClick}
              setHoverIndex={setHoverIndex}
            />
          </div>
        </div>

        {pathname !== "/" && (
          <div
            className={`pointer-events-auto absolute lg:relative right-0 lg:right-auto top-0 transition-all duration-300 hidden lg:block ${
              isOpen
                ? "opacity-0 scale-90 pointer-events-none lg:-translate-x-4"
                : "opacity-100 scale-100 lg:translate-x-0"
            }`}
          >
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] bg-brand-light text-brand-primary rounded-[12px] shadow-[0_6px_20px_rgba(226,209,249,0.4)] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>

      <div className="fixed top-4 lg:top-5 right-4 lg:right-6 z-[160] pointer-events-auto hidden lg:block">
        <button
          onClick={openFormModal}
          className="group flex items-center justify-center gap-2 lg:gap-3 bg-brand-primary hover:bg-brand-dark px-3 py-2.5 lg:px-5 lg:py-2.5 rounded-[12px] lg:rounded-xl shadow-[0_8px_25px_rgba(102,13,255,0.3)] transition-all duration-300 active:scale-95 border-none outline-none cursor-pointer"
        >
          <span className="text-white font-medium text-sm lg:text-base tracking-tight pointer-events-none">
            Email
          </span>
          <div className="relative flex items-center justify-center w-[22px] h-[18px] pointer-events-none">
            <EnvelopeIcon />
          </div>
        </button>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />
      <FormModal isOpen={isFormOpen} onClose={closeFormModal} />
    </>
  );
}
