"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";

interface AnimatedSideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  contentClassName?: string;
}

export default function AnimatedSideModal({
  isOpen,
  onClose,
  title,
  children,
  contentClassName = "p-6 md:p-8 lg:px-10 lg:py-8 flex-grow flex flex-col gap-4",
}: AnimatedSideModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);
  const cursorIconRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const [isHoveringOverlay, setIsHoveringOverlay] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDesktopEnvironment, setIsDesktopEnvironment] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsDesktopEnvironment(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (lenis) lenis.stop();

      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
        ease: "power2.out",
      });
      tl.to(
        modalRef.current,
        { x: 0, duration: 0.7, ease: "power4.out" },
        "-=0.2",
      );

      tl.fromTo(
        ".modal-animate-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
        },
        "-=0.5",
      );
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";

      window.scrollTo(0, scrollY);

      if (lenis) lenis.start();

      const tl = gsap.timeline();
      tl.to(modalRef.current, { x: "100%", duration: 0.6, ease: "power3.in" });
      tl.to(
        overlayRef.current,
        { opacity: 0, pointerEvents: "none", duration: 0.4, ease: "power2.in" },
        "-=0.3",
      );
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      if (lenis) lenis.start();
    };
  }, [isOpen, lenis, scrollY]);

  useEffect(() => {
    if (isOpen && customCursorRef.current && isDesktopEnvironment) {
      gsap.set(customCursorRef.current, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(customCursorRef.current, "x", {
        duration: 0.08,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(customCursorRef.current, "y", {
        duration: 0.08,
        ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const handleMouseDown = () => {
        setIsMouseDown(true);
        if (cursorIconRef.current)
          gsap.to(cursorIconRef.current, {
            scale: 0.8,
            duration: 0.15,
            ease: "power2.out",
          });
      };

      const handleMouseUp = () => {
        setIsMouseDown(false);
        if (cursorIconRef.current)
          gsap.to(cursorIconRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2.5)",
          });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isOpen, isDesktopEnvironment]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        onMouseEnter={() => setIsHoveringOverlay(true)}
        onMouseLeave={() => setIsHoveringOverlay(false)}
        className={`fixed inset-0 bg-black/50 z-[900] opacity-0 pointer-events-none touch-none ${
          isDesktopEnvironment ? "cursor-none" : ""
        }`}
        aria-hidden="true"
        data-lenis-prevent="true"
      />

      {isDesktopEnvironment && (
        <div
          ref={customCursorRef}
          className="fixed top-0 left-0 z-[950] pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className={`transition-all duration-300 ease-out ${
              isHoveringOverlay && isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-50"
            }`}
          >
            <div
              ref={cursorIconRef}
              className={`w-11 h-11 rounded-xl text-white flex items-center justify-center shadow-[0_8px_20px_rgba(134,68,247,0.4)] transition-colors duration-200 ${
                isMouseDown ? "bg-brand-primary" : "bg-brand-secondary"
              }`}
            >
              <X size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      )}

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed top-0 right-0 h-[100dvh] max-h-[100dvh] bg-white z-[1000] flex flex-col translate-x-full overflow-hidden w-full md:w-[600px] lg:w-[650px] xl:w-[750px] rounded-tl-[20px] rounded-bl-[20px] md:rounded-tl-[30px] md:rounded-bl-[30px] shadow-[-20px_0_60px_rgba(0,0,0,0.15)]"
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between p-4 md:px-6 md:py-4 border-b border-zinc-100 modal-animate-item shrink-0 bg-white z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="group w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-brand-muted text-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:text-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer border-none outline-none"
              aria-label="Close modal"
            >
              <X
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-500 group-hover:rotate-180"
                aria-hidden="true"
              />
            </button>
            <h2
              id="modal-title"
              className="text-base md:text-lg font-bold text-foreground m-0"
            >
              {title}
            </h2>
          </div>
        </div>

        <div
          className={`flex-1 overflow-y-auto overscroll-none touch-pan-y ${contentClassName || ""}`}
          data-lenis-prevent="true"
        >
          {children}
        </div>
      </div>
    </>
  );
}
