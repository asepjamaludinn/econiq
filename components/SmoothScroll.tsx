"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

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
