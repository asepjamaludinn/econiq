"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{ lerp: 0.08, duration: 1.5, syncTouch: true }}
    >
      {children}
    </ReactLenis>
  );
}
