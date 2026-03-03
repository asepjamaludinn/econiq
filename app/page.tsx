"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const dataAwan = [
  { id: 1, top: "10%", left: "5%", width: 300, opacity: 0.9 },
  { id: 2, top: "25%", left: "40%", width: 200, opacity: 0.7 },
  { id: 3, top: "8%", left: "75%", width: 280, opacity: 0.8 },
  { id: 4, top: "35%", left: "85%", width: 150, opacity: 0.6 },
  { id: 5, top: "18%", left: "-10%", width: 320, opacity: 0.85 },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tanamanJendelaRef = useRef<HTMLDivElement>(null);
  const penutupTenantRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const awanElements = gsap.utils.toArray<HTMLDivElement>(".awan-terbang");

      awanElements.forEach((awan) => {
        const driftRight = () => {
          gsap.to(awan, {
            x: window.innerWidth + 400,
            duration: gsap.utils.random(40, 70),
            ease: "none",
            onComplete: () => {
              gsap.set(awan, { x: -window.innerWidth - 400 });
              driftRight();
            },
          });
        };

        gsap.to(awan, {
          y: `+=${gsap.utils.random(-10, 10)}`,
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        driftRight();
      });

      if (tanamanJendelaRef.current) {
        gsap.to(tanamanJendelaRef.current, {
          rotation: 3,
          transformOrigin: "bottom center",
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const handleMouseMove = (e: MouseEvent) => {
        if (!penutupTenantRef.current) return;

        const yPos = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(penutupTenantRef.current, {
          scaleY: 1 + yPos * 0.04,
          rotationX: yPos * -15,
          transformOrigin: "50% 0%",
          duration: 0.8,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );

  return (
    <main className="overflow-hidden">
      <section
        ref={containerRef}
        className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden"
      >
        {/* Layer Background Langit */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/Biru langit.svg"
            alt="Langit Biru"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Layer Awan */}
        {dataAwan.map((awan) => (
          <div
            key={awan.id}
            className="awan-terbang absolute z-10"
            style={{
              top: awan.top,
              left: awan.left,
              width: `${awan.width}px`,
              height: `${awan.width / 2}px`,
              opacity: awan.opacity,
            }}
          >
            <Image
              src="/images/awan1.svg"
              alt={`Awan ${awan.id}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}

        <div className="absolute -top-[45%] -right-15 w-[30%] h-[100%] z-[15] pointer-events-none">
          <Image
            src="/images/Pohon.svg"
            alt="Pohon di belakang rumah kanan"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div
          className="absolute top-[5%] left-1/2 -translate-x-1/2 
                w-[90%] max-w-3xl 
                z-50 pointer-events-none 
                flex flex-col items-center justify-center text-center"
        >
          <h1
            className="text-3xl md:text-4xl lg:text-6xl
             font-semibold
             tracking-tight
             text-white
             leading-snug
             drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Know Your Money. <br className="hidden md:block" />
            <span className="text-white">Grow Your Money.</span>
          </h1>
        </div>

        <div className="absolute bottom-[10%] w-[100%] h-[100%] z-20">
          <Image
            src="/images/Rumah bersatu.svg"
            alt="Rumah Bersatu"
            fill
            className="object-cover object-bottom scale-[1.02]"
            priority
          />

          <div className="absolute top-[65%] left-15 w-[12%] h-[12%] z-30">
            <Image
              src="/images/Jendela tanpa.svg"
              alt="Jendela Kiri"
              fill
              className="object-contain"
            />
          </div>

          <div
            ref={tanamanJendelaRef}
            className="absolute top-[70%] left-22 w-[8%] h-[8%] z-40"
          >
            <Image
              src="/images/tanaman jendela kiri.svg"
              alt="Tanaman Jendela"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="absolute top-[74%] left-22 w-[8%] h-[8%] z-50">
            <Image
              src="/images/wadah tanaman jendela kiri.svg"
              alt="Wadah Tanaman Jendela"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] z-30">
            <Image
              src="/images/Tenant.svg"
              alt="Tenant"
              fill
              className="object-contain"
            />
          </div>

          <div
            className="absolute top-[56.5%] left-1/2 -translate-x-1/2 w-[35%] aspect-[16/9] z-40 pointer-events-none"
            style={{ perspective: "800px" }}
          >
            <div ref={penutupTenantRef} className="relative w-full h-full">
              <Image
                src="/images/Penutup depan tenant.svg"
                alt="Penutup Depan Tenant"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>

        {/* Layer Jalan */}
        <div className="absolute bottom-0 left-0 w-full h-[10%] z-40">
          <Image
            src="/images/Jalan.svg"
            alt="Jalan"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </section>
    </main>
  );
}
