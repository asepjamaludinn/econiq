"use client";

import Image from "next/image";

// Placeholder data logo mitra/sertifikasi Econiq
const PARTNER_LOGOS = [
  "/images/BitCoin.svg",
  "/images/Dolar.svg",
  "/images/Coin.svg",
  "/images/100Rp.svg",
  "/images/75Rp.svg",
];

export default function AboutMarquee() {
  return (
    <section className="relative w-full py-8 overflow-hidden bg-zinc-900 border-y border-white/5 flex items-center">
      {/* Gradient overlay */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-linear-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-linear-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track - Kita buat 2 set div yang isinya sama untuk efek infinite */}
      <div className="flex w-max animate-marquee">
        {/* Set 1 */}
        <div className="flex items-center justify-around min-w-max gap-12 md:gap-24 px-6 md:px-12">
          {PARTNER_LOGOS.map((logo, idx) => (
            <div key={`logo-1-${idx}`} className="relative w-20 h-20 md:w-28 md:h-28 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={logo} alt="Partner Logo" fill className="object-contain" />
            </div>
          ))}
        </div>
        {/* Set 2 (Duplikat untuk looping seamless) */}
        <div className="flex items-center justify-around min-w-max gap-12 md:gap-24 px-6 md:px-12">
          {PARTNER_LOGOS.map((logo, idx) => (
            <div key={`logo-2-${idx}`} className="relative w-20 h-20 md:w-28 md:h-28 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src={logo} alt="Partner Logo" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Menambahkan custom keyframe animasi langsung di style jsx agar tidak perlu edit globals.css */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}