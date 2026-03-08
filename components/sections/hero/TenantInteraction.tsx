"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TenantInteraction() {
  const penutupTenantRef = useRef<HTMLDivElement>(null);
  const penutupShadowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const penutupElement = penutupTenantRef.current;
      const shadowElement = penutupShadowRef.current;

      if (penutupElement && shadowElement) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = penutupElement.getBoundingClientRect();
          const relativeY = (e.clientY - rect.top) / rect.height;
          const yPos = (relativeY - 0.5) * 2;

          gsap.to([penutupElement, shadowElement], {
            scaleY: 1 + yPos * 0.06,
            rotationX: yPos * -25,
            transformOrigin: "50% 0%",
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const handleMouseLeave = () => {
          gsap.to([penutupElement, shadowElement], {
            scaleY: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.2)",
            overwrite: "auto",
          });
        };

        penutupElement.addEventListener("mousemove", handleMouseMove);
        penutupElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          penutupElement.removeEventListener("mousemove", handleMouseMove);
          penutupElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  });

  return (
    <>
      {/* Container Tenant Utama (Statis) */}
      <div className="absolute bottom-0 md:bottom-[0%] left-1/2 -translate-x-1/2 w-[70%] md:w-[35%] h-[45%] md:h-[55%] z-30 pointer-events-none flex justify-center items-end">
        <Image
          src="/images/Tenant.svg"
          alt="Tenant"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div
        className="absolute top-[57%] md:top-[40%] left-1/2 -translate-x-1/2 w-[85%] md:w-[40%] aspect-[16/9] z-40 pointer-events-none"
        style={{ perspective: "800px" }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "translate(2px, 20px) skewX(25deg)",
            transformOrigin: "top left",
            opacity: 0.2,
            zIndex: -1,
          }}
        >
          <Image
            src="/images/Penutup Atas Tenant.svg"
            alt="Shadow"
            fill
            className="object-contain object-top brightness-0"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/images/Penutup Atas Tenant.svg"
            alt="Atap"
            fill
            className="object-contain object-top"
          />
        </div>
      </div>

      <div
        className="absolute top-[70%] md:top-[58.9%] left-1/2 -translate-x-1/2 w-[80%] md:w-[38%] aspect-[16/9] z-40"
        style={{ perspective: "800px" }}
      >
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: "translate(80px, 18px)",
            opacity: 0.2,
            zIndex: -1,
          }}
        >
          <div ref={penutupShadowRef} className="w-full h-full">
            <Image
              src="/images/Penutup depan tenant.svg"
              alt="Shadow"
              fill
              className="object-contain object-top brightness-0"
            />
          </div>
        </div>
        <div
          ref={penutupTenantRef}
          className="absolute inset-0 w-full h-full cursor-pointer md:cursor-default"
        >
          <Image
            src="/images/Penutup depan tenant.svg"
            alt="Penutup"
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </>
  );
}
