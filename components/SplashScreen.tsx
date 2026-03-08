"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SplashScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
          setShow(false);
        },
      });
    },
    { scope: containerRef },
  );

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#660DFF] w-screen h-screen"
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
