import { useEffect } from "react";
import gsap from "gsap";

export const useNavbarAnimations = (
  isOpen: boolean,
  menuListRef: React.RefObject<HTMLDivElement | null>,
  overlayRef: React.RefObject<HTMLDivElement | null>,
) => {
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
  }, [isOpen, menuListRef, overlayRef]);
};
