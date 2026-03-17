"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

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

      const activeTweens = new Set<gsap.core.Tween>();

      awanElements.forEach((awan) => {
        const driftRight = () => {
          const tween = gsap.to(awan, {
            x: "150vw",
            duration: gsap.utils.random(50, 90),
            ease: "none",
            onComplete: () => {
              activeTweens.delete(tween);
              gsap.set(awan, { x: "-50vw" });
              driftRight();
            },
          });
          activeTweens.add(tween);
        };

        const floatTween = gsap.to(awan, {
          y: `+=${gsap.utils.random(-15, 15)}`,
          duration: gsap.utils.random(5, 10),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        activeTweens.add(floatTween);
        driftRight();
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          if (self.isActive) {
            activeTweens.forEach((t) => t.play());
          } else {
            activeTweens.forEach((t) => t.pause());
          }
        },
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
