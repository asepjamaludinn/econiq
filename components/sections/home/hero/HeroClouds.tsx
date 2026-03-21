"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CloudData {
  id: number;
  src: string;
  top: string;
  left: string;
  width: number;
  opacity: number;
}

export default function HeroClouds() {
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const awanImages = [
      "/images/awan1.svg",
      "/images/awan2.svg",
      "/images/awan3.svg",
      "/images/awan4.svg",
    ];

    const isMobile = window.innerWidth < 768;

    const maxClouds = isMobile
      ? Math.floor(Math.random() * 2) + 2
      : Math.floor(Math.random() * 5) + 6;

    const generatedClouds = Array.from({
      length: maxClouds,
    }).map((_, i) => ({
      id: i,
      src: awanImages[Math.floor(Math.random() * awanImages.length)],
      top: `${Math.random() * 60}%`,
      left: `${Math.random() * 100 - 20}%`,
      width: Math.floor(Math.random() * 250) + 150,
      opacity: Number((Math.random() * 0.4 + 0.5).toFixed(2)),
    }));

    setClouds(generatedClouds);
  }, []);

  useGSAP(
    () => {
      if (clouds.length === 0 || !containerRef.current) return;

      const awanElements = gsap.utils.toArray<HTMLDivElement>(
        ".awan-terbang",
        containerRef.current,
      );

      awanElements.forEach((awan) => {
        const driftRight = () => {
          gsap.to(awan, {
            x: "150vw",
            duration: gsap.utils.random(50, 90),
            ease: "none",
            onComplete: () => {
              gsap.set(awan, { x: "-50vw" });
              driftRight();
            },
          });
        };

        gsap.to(awan, {
          y: `+=${gsap.utils.random(-15, 15)}`,
          duration: gsap.utils.random(5, 10),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        driftRight();
      });
    },
    { scope: containerRef, dependencies: [clouds] },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    >
      {clouds.map((awan, idx) => (
        <div
          key={`awan-${idx}`}
          className="awan-terbang absolute"
          style={{
            top: awan.top,
            left: awan.left,
            width: `${awan.width}px`,
            height: `${awan.width / 2}px`,
            opacity: awan.opacity,
          }}
        >
          <Image
            src={awan.src}
            alt={`Awan Terbang ${idx}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
