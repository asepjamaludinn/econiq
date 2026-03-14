"use client";

import { useRef } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { walletAssetsData } from "@/constants";
import { useWalletAnimations } from "@/hooks/useWalletAnimations";

export default function WalletSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dompetRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const assetRefs = useRef<(HTMLImageElement | null)[]>([]);
  const mobileWalletContainerRef = useRef<HTMLDivElement>(null);
  const mobileAssetRefs = useRef<(HTMLImageElement | null)[]>([]);

  useWalletAnimations(
    wrapperRef,
    dompetRef,
    nextSectionRef,
    textContainerRef,
    assetRefs,
    mobileWalletContainerRef,
    mobileAssetRefs,
  );

  return (
    <div ref={wrapperRef} className="relative xl:static w-full">
      <div
        ref={dompetRef}
        className="absolute left-[30%] -top-[120px] md:-top-[170px] xl:top-[79vh] z-100 w-[100px] h-[100px] flex items-center justify-center pointer-events-none"
      >
        <div className="hidden xl:flex absolute inset-0 w-full h-full items-center justify-center">
          {walletAssetsData.map((src, i) => (
            <Image
              key={`desktop-asset-${i}`}
              ref={(el) => {
                assetRefs.current[i] = el;
              }}
              src={src}
              alt={`Asset Web3 Desktop ${i}`}
              aria-hidden="true"
              width={35}
              height={35}
              className="absolute object-contain z-90"
            />
          ))}
        </div>

        <Image
          src="/images/Dompet.svg"
          alt="Dompet Eqonic"
          aria-hidden="true"
          width={60}
          height={60}
          className="relative z-110 object-contain"
          priority
        />
      </div>

      <section
        ref={nextSectionRef}
        className="relative w-full min-h-fit md:min-h-[100vh] flex flex-col items-center pt-28 md:pt-32 pb-32 md:pb-16 bg-[#B36EE6] text-white z-80"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={textContainerRef}
          className="relative z-10 flex flex-col items-center text-center px-4"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="border-[2px] border-[#0A7B5E] text-[#0A7B5E] bg-transparent rounded-full px-4 md:px-5 py-1 mb-6 md:mb-10 flex items-center gap-2">
            <MdVerified className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[10px] md:text-sm font-extrabold uppercase tracking-widest">
              WEB3 FINANCIAL
            </span>
          </div>

          <h2 className="text-[clamp(32px,7vw,120px)] font-black uppercase tracking-tight leading-[1.1] text-white mb-4 md:mb-8 relative z-20 whitespace-normal md:whitespace-nowrap ">
            Learn, Manage, Grow
          </h2>

          <p className="text-white text-sm md:text-xl mt-2 relative z-20 max-w-2xl px-2 tracking-tight">
            Manage your Web3 finances with full transparency, anytime, anywhere.
          </p>
        </div>

        <div
          ref={mobileWalletContainerRef}
          className="xl:hidden relative z-20 mt-32 md:mt-40 lg:mt-100 mb-8 md:mb-10 w-[250px] h-[220px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] flex items-end justify-center pointer-events-none rotate-[4deg]"
        >
          {walletAssetsData.map((src, i) => (
            <Image
              key={`mobile-asset-${i}`}
              ref={(el) => {
                mobileAssetRefs.current[i] = el;
              }}
              src={src}
              alt={`Asset Web3 Mobile ${i}`}
              width={200}
              height={200}
              className="absolute top-0 w-[100px] md:w-[160px] lg:w-[180px] h-auto object-contain z-90"
            />
          ))}

          <Image
            src="/images/Dompet.svg"
            alt="Dompet Besar Mobile"
            fill
            className="relative z-110 object-bottom object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </section>
    </div>
  );
}
