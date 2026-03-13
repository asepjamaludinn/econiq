"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import { companyInfo } from "@/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);
  const cursorIconRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const [isHoveringOverlay, setIsHoveringOverlay] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();

      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to(
        modalRef.current,
        {
          x: 0,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.2",
      );

      gsap.fromTo(
        ".modal-content-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
        },
      );
    } else {
      document.body.style.overflow = "";
      lenis?.start();

      const tl = gsap.timeline();

      tl.to(modalRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.in",
      });

      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.3",
      );
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    if (isOpen && customCursorRef.current) {
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
        if (cursorIconRef.current) {
          gsap.to(cursorIconRef.current, {
            scale: 0.8,
            duration: 0.15,
            ease: "power2.out",
          });
        }
      };

      const handleMouseUp = () => {
        setIsMouseDown(false);
        if (cursorIconRef.current) {
          gsap.to(cursorIconRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2.5)",
          });
        }
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
  }, [isOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        onMouseEnter={() => setIsHoveringOverlay(true)}
        onMouseLeave={() => setIsHoveringOverlay(false)}
        className="fixed inset-0 bg-black/50 z-[900] opacity-0 pointer-events-none cursor-none"
        aria-label="Tutup modal"
        role="button"
      />

      <div
        ref={customCursorRef}
        className="fixed top-0 left-0 z-[950] pointer-events-none flex items-center justify-center"
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
              isMouseDown ? "bg-[#660DFF]" : "bg-[#8644F7]"
            }`}
          >
            <X size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div
        ref={modalRef}
        className="fixed top-0 right-0 h-full bg-white z-[1000] flex flex-col translate-x-full overflow-y-auto w-full 
                   md:w-[600px] lg:w-[650px] xl:w-[750px] 
                   rounded-tl-[20px] rounded-bl-[20px] md:rounded-tl-[30px] md:rounded-bl-[30px]
                   shadow-[-20px_0_60px_rgba(0,0,0,0.15)]"
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between p-4 md:px-6 md:py-4 border-b border-zinc-100 modal-content-item sticky top-0 bg-white z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="group w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#dcc3f4] text-[#8644F7] flex items-center justify-center hover:bg-[#8644F7] hover:text-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Close Contact"
            >
              <X
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
            </button>
            <span className="text-base md:text-lg font-bold text-[#171717]">
              Contact ECONIQ
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:px-10 lg:py-8 flex-grow flex flex-col gap-4 md:gap-5 lg:gap-4 xl:gap-7">
          <div className="modal-content-item">
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter text-[#171717] leading-[0.95] mb-1 md:mb-1.5">
              Let's Build <br />
              <span className="text-[#8644F7]">Something Great.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 lg:gap-4 xl:gap-6">
            {/* Jam Operasional */}
            <div className="modal-content-item">
              <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 flex items-center gap-1.5 leading-none">
                Operating Hours
              </h4>
              <p className="text-lg md:text-xl xl:text-2xl font-black text-[#171717] leading-tight mb-0.5">
                {companyInfo.hours}
              </p>
              <p className="text-sm md:text-base font-semibold text-zinc-600">
                {companyInfo.workDays}
              </p>
            </div>

            {/* WhatsApp / Telepon */}
            <div className="modal-content-item">
              <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 leading-none">
                Phone / WhatsApp
              </h4>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                className="text-lg md:text-xl xl:text-2xl font-black text-[#171717] hover:text-[#8644F7] transition-colors inline-block leading-tight cursor-pointer"
              >
                {companyInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="modal-content-item">
              <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 md:mb-1.5 flex items-center gap-1.5 leading-none">
                Email
              </h4>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-[#171717] hover:text-[#8644F7] transition-colors leading-tight cursor-pointer"
              >
                {companyInfo.email}
              </a>
            </div>

            {/* Lokasi */}
            <div className="modal-content-item">
              <h4 className="text-[13px] md:text-sm font-bold text-zinc-400 tracking-widest mb-1 md:mb-1.5 flex items-center gap-1.5 leading-none">
                Office Address
              </h4>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg md:text-xl xl:text-2xl font-black text-[#8644F7] leading-snug max-w-sm lg:max-w-md hover:text-[#660DFF] transition-colors cursor-pointer"
              >
                {companyInfo.address}
              </a>
            </div>
          </div>

          <div className="modal-content-item mt-auto pt-4 md:pt-5 xl:pt-6 border-t border-zinc-100 flex items-center justify-between gap-4">
            <div>
              <h4 className="text-[11px] font-bold text-zinc-400 tracking-widest mb-0.5 leading-none">
                Follow Our Journey
              </h4>
              <p className="text-xs md:text-sm font-medium text-zinc-500 leading-tight">
                Latest ECONIQ updates.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {companyInfo.socials.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#171717] text-white flex items-center justify-center hover:bg-[#8644F7] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    aria-label={social.name}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
