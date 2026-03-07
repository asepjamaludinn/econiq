"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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

const sumberUang = [
  "/images/Uang1 blur.svg",
  "/images/Uang2 blur.svg",
  "/images/Uang3 blur.svg",
];

const uangHujan = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  src: sumberUang[i % sumberUang.length],
  size: 40 + (i % 3) * 15,
}));

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tanamanJendelaRef = useRef<HTMLDivElement>(null);
  const penutupTenantRef = useRef<HTMLDivElement>(null);
  const penutupShadowRef = useRef<HTMLDivElement>(null);
  const kepalaKucingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animasi Awan
      const awanElements = gsap.utils.toArray<HTMLDivElement>(".awan-terbang");
      awanElements.forEach((awan) => {
        const driftRight = () => {
          gsap.to(awan, {
            x: "150vw",
            duration: gsap.utils.random(40, 70),
            ease: "none",
            onComplete: () => {
              gsap.set(awan, { x: "-50vw" });
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

      // 2. Animasi Tanaman Jendela
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

      // 3. Animasi Daun Angin
      const daunElements = gsap.utils.toArray<HTMLDivElement>(".daun-angin");
      daunElements.forEach((daun) => {
        gsap.to(daun, {
          rotation: gsap.utils.random(-5, 5),
          x: `+=${gsap.utils.random(-5, 5)}`,
          y: `+=${gsap.utils.random(-2, 2)}`,
          transformOrigin: "top center",
          duration: gsap.utils.random(5, 9),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // 4. Animasi Orang Jalan
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

      // 5. Animasi Uang Hujan
      const uangElements = gsap.utils.toArray<HTMLDivElement>(".uang-jatuh");
      uangElements.forEach((uang) => {
        const dropUang = () => {
          gsap.fromTo(
            uang,
            {
              y: -150,
              x: () => gsap.utils.random(0, window.innerWidth),
              opacity: 1,
            },
            {
              y: window.innerHeight + 150,
              x: `+=${gsap.utils.random(-150, 150)}`,
              duration: gsap.utils.random(7, 12),
              ease: "none",
              onComplete: () => {
                const nextDelay = gsap.utils.random(2, 12);
                gsap.delayedCall(nextDelay, dropUang);
              },
            },
          );
        };
        gsap.delayedCall(gsap.utils.random(2, 8), dropUang);
      });

      // 6. Animasi Interaksi Tenant Hover
      const penutupElement = penutupTenantRef.current;
      const shadowElement = penutupShadowRef.current;

      let cleanupTenantHover = () => {};

      if (penutupElement && shadowElement) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = penutupElement.getBoundingClientRect();
          const relativeY = (e.clientY - rect.top) / rect.height;
          const yPos = (relativeY - 0.5) * 2;

          gsap.to(penutupElement, {
            scaleY: 1 + yPos * 0.06,
            rotationX: yPos * -25,
            transformOrigin: "50% 0%",
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
          });

          gsap.to(shadowElement, {
            scaleY: 1 + yPos * 0.06,
            rotationX: yPos * -25,
            transformOrigin: "50% 0%",
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(penutupElement, {
            scaleY: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.2)",
            overwrite: "auto",
          });

          gsap.to(shadowElement, {
            scaleY: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.2)",
            overwrite: "auto",
          });
        };

        penutupElement.addEventListener("mousemove", handleMouseMove);
        penutupElement.addEventListener("mouseleave", handleMouseLeave);

        cleanupTenantHover = () => {
          penutupElement.removeEventListener("mousemove", handleMouseMove);
          penutupElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }

      // 7. Animasi Kepala Kucing (Geleng Kiri-Kanan)
      if (kepalaKucingRef.current) {
        gsap.set(kepalaKucingRef.current, {
          transformOrigin: "bottom center",
          rotation: -10,
        });

        gsap.to(kepalaKucingRef.current, {
          rotation: 10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      return () => {
        cleanupTenantHover();
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Biru langit.svg"
          alt="Langit Biru"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

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
          />
        </div>
      ))}

      {/* Pohon - Disembunyikan di Mobile */}
      <div className="hidden md:block absolute -top-[30%] -right-5 w-[30%] h-[100%] z-[15] pointer-events-none">
        <Image
          src="/images/Pohon.svg"
          alt="Pohon di belakang rumah kanan"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="daun-angin absolute -top-[3%] -right-35 w-[40%] h-[40%] z-[20] pointer-events-none opacity-90">
        <Image
          src="/images/Daun.svg"
          alt="Daun cluster 1"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] max-w-3xl z-50 pointer-events-none flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal leading-[1.1] text-[#3D2616] drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          Know Your Money. <br className="hidden md:block" />
          <span className="text-[#3D2616]">Grow Your Money.</span>
        </h1>
      </div>

      <div className="absolute bottom-[10%] w-full h-full z-20">
        {/* Rumah Kiri */}
        <div className="hidden md:block absolute bottom-0 -left-[14.8%] w-[40%] h-[80%] z-20 pointer-events-none">
          <Image
            src="/images/Rumah kiri.svg"
            alt="Rumah Kiri"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </div>

        {/* Rumah Kanan */}
        <div className="hidden md:block absolute bottom-0 -right-[14.74%] w-[40%] h-[80%] z-20 pointer-events-none">
          <Image
            src="/images/Rumah kanan.svg"
            alt="Rumah Kanan"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>

        {/* Jendela */}
        <div className="hidden md:block absolute top-[65%] left-10 w-[20%] h-[20%] z-30 pointer-events-none">
          <Image
            src="/images/Jendela tanpa.svg"
            alt="Jendela Kiri"
            fill
            className="object-contain"
          />
        </div>

        <div
          ref={tanamanJendelaRef}
          className="hidden md:block absolute top-[73%] left-25 w-[12%] h-[12%] z-40 pointer-events-none"
        >
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              transform: "translate(25px, 10px) skewX(25deg)",
              transformOrigin: "bottom center",
              opacity: 0.2,
              zIndex: -1,
            }}
          >
            <Image
              src="/images/tanaman jendela kiri.svg"
              alt="Shadow Tanaman"
              fill
              className="object-contain object-bottom brightness-0"
            />
          </div>
          <Image
            src="/images/tanaman jendela kiri.svg"
            alt="Tanaman Jendela"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="hidden md:block absolute top-[80%] left-25 w-[12%] h-[12%] z-50 pointer-events-none">
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              transform: "translate(30px, 10px) skewX(20deg)",
              transformOrigin: "bottom center",
              opacity: 0.2,
              zIndex: -1,
            }}
          >
            <Image
              src="/images/wadah tanaman jendela kiri.svg"
              alt="Shadow Wadah"
              fill
              className="object-contain brightness-0"
            />
          </div>
          <Image
            src="/images/wadah tanaman jendela kiri.svg"
            alt="Wadah Tanaman Jendela"
            fill
            className="object-contain"
          />
        </div>

        {/* Background Ungu Tengah */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[50%] h-[65%] md:h-[100%] bg-[#8644F7] z-[25] pointer-events-none shadow-[0_0_40px_rgba(102,13,255,0.4)]">
          <div className="absolute top-0 -left-1 w-[12%] md:w-[15%] h-full z-30">
            <Image
              src="/images/Hiasan Tembok.svg"
              alt="Hiasan Tembok Kiri"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="absolute top-0 -right-2 w-[12%] md:w-[15%] h-full z-30">
            <Image
              src="/images/Hiasan Tembok.svg"
              alt="Hiasan Tembok Kanan"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
        {/* Tenant */}
        <div className="absolute bottom-0 md:bottom-[0%] left-1/2 -translate-x-1/2 w-[85%] md:w-[35%] h-[55%] z-30 pointer-events-none flex justify-center items-end">
          <Image
            src="/images/Tenant.svg"
            alt="Tenant"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Atap Tenant */}
        <div
          className="absolute top-[39.5%] md:top-[40%] left-1/2 -translate-x-1/2 w-[75%] md:w-[40%] aspect-[16/9] z-40 pointer-events-none"
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
              alt="Shadow Penutup Atas"
              fill
              className="object-contain object-top brightness-0"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/images/Penutup Atas Tenant.svg"
              alt="Penutup Atas Tenant"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>

        {/* Interaksi Penutup Depan Tenant */}
        <div
          className="absolute top-[59%] md:top-[58.9%] left-1/2 -translate-x-1/2 w-[70%] md:w-[38%] aspect-[16/9] z-40"
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
                alt="Shadow Penutup Depan"
                fill
                className="object-contain object-top brightness-0"
              />
            </div>
          </div>
          <div
            ref={penutupTenantRef}
            className="absolute inset-0 w-full h-full cursor-pointer"
          >
            <Image
              src="/images/Penutup depan tenant.svg"
              alt="Penutup Depan Tenant"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[10%] z-40 pointer-events-none">
        <Image
          src="/images/Jalan.svg"
          alt="Jalan"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="absolute bottom-0 md:bottom-4 left-[6%] md:left-[14%] w-[60px] md:w-[80px] aspect-[1/1.2] z-40 pointer-events-none flex flex-col items-center">
        {/* Bayangan Kucing */}
        <div
          className="absolute z-0"
          style={{
            bottom: "22%",
            left: "10%",
            width: "80%",
            height: "15%",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%",
            filter: "blur(3px)",
            transform: "scaleY(0.5)",
          }}
        ></div>

        {/* Kepala Kucing */}
        <div className="relative w-full h-[50%] z-10 translate-y-[15%] md:translate-y-[25%] -translate-x-[6%] md:-translate-x-[30%]">
          <div ref={kepalaKucingRef} className="relative w-full h-full">
            <Image
              src="/images/kepala meng1.svg"
              alt="Kepala Kucing"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Badan Kucing */}
        <div className="relative w-full h-[65%] -translate-y-[20%] md:-translate-y-[25%]">
          <Image
            src="/images/meng1 tanpa kepala.svg"
            alt="Badan Kucing"
            fill
            className="object-contain object-top"
          />
        </div>
      </div>

      <div className="orang-jalan absolute bottom-[4%] md:bottom-[10%] left-0 z-50 pointer-events-none">
        <div className="w-[300px] md:w-[400px] flex flex-col justify-end items-center translate-y-[15%] relative">
          <div className="relative w-full aspect-square z-10">
            <DotLottieReact src="/animations/man walking.json" loop autoplay />
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

      <div className="absolute bottom-0 left-0 w-full h-[15%] md:h-[25%] z-[60] pointer-events-none">
        <Image
          src="/images/Pager.svg"
          alt="Pagar Depan"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {uangHujan.map((uang) => (
        <div
          key={`uang-${uang.id}`}
          className="uang-jatuh absolute top-[-100px] left-0 pointer-events-none z-[65] opacity-0"
          style={{ width: `${uang.size}px`, height: `${uang.size}px` }}
        >
          <Image src={uang.src} alt="Uang" fill className="object-contain" />
        </div>
      ))}
    </section>
  );
}
