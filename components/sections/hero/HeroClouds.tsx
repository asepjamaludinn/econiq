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

    const generatedClouds = Array.from({
      length: Math.floor(Math.random() * 5) + 6,
    }).map((_, i) => ({
      id: i,
      src: awanImages[Math.floor(Math.random() * awanImages.length)],
      top: `${Math.random() * 10}%`,
      left: `${Math.random() * 120 - 10}%`,
      width: Math.floor(Math.random() * 250) + 150,
      opacity: Number((Math.random() * 0.4 + 0.5).toFixed(2)),
    }));

    setClouds(generatedClouds);
  }, []);

  useGSAP(
    () => {
      if (clouds.length === 0) return;
      const awanElements = gsap.utils.toArray<HTMLDivElement>(".awan-terbang");

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
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    >
      {clouds.map((awan) => (
        <div
          key={`awan-${awan.id}`}
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
            alt={`Awan Tipe ${awan.id}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
