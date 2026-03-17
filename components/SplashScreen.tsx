"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

export default function SplashScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  const lenis = useLenis();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (lenis) {
      lenis.stop();
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (lenis) lenis.start();
    };
  }, [lenis]);

  useGSAP(
    () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        delay: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";

          if (lenis) {
            lenis.start();
          }

          setShow(false);
        },
      });
    },
    { scope: containerRef, dependencies: [lenis] },
  );

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-999 flex items-center justify-center bg-brand-primary w-screen h-screen"
    >
      <Image
        src="/images/Logo.svg"
        alt="Eqonic Logo"
        width={256}
        height={256}
        className="w-48 h-48 md:w-64 md:h-64 object-contain"
        priority
      />
    </div>
  );
}
