"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function WalkingMan() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);

  useGSAP(
    () => {
      const orangJalan = gsap.utils.toArray<HTMLDivElement>(".orang-jalan");
      orangJalan.forEach((orang) => {
        gsap.fromTo(
          orang,
          { x: "50vw", display: "flex", opacity: 1 },
          {
            x: "150vw",
            duration: 8,
            ease: "none",
            onComplete: () => {
              gsap.set(orang, { display: "none" });
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <div className="orang-jalan absolute bottom-[4%] md:bottom-[10%] left-0 pointer-events-none">
        <div className="w-[300px] md:w-[400px] flex flex-col justify-end items-center translate-y-[15%] relative">
          <div className="relative w-full aspect-square z-10">
            {isInView && (
              <DotLottieReact
                src="/animations/man walking.json"
                loop
                autoplay
              />
            )}
          </div>
          <div
            className="absolute z-0"
            style={{
              bottom: "0%",
              left: "15%",
              width: "70%",
              height: "20%",
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
              filter: "blur(5px)",
              transform: "scaleY(0.5)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
