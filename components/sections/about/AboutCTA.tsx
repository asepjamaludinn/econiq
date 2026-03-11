"use client";

import Image from "next/image";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#EBA754] pt-32 pb-24 px-4 overflow-visible relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Gambar Overlap (Tarik ke atas menggunakan -mt) */}
        <div className="w-full md:w-1/2 relative -mt-48 mb-12 md:mb-0 z-20">
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image src="/images/Rumah tengah.svg" alt="Econiq Store" fill className="object-cover bg-white" />
          </div>
        </div>

        {/* Teks Kanan */}
        <div className="w-full md:w-1/2 md:pl-16 text-[#4A2010]">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
            LOW INVESTMENT.<br/>HIGH YIELD.
          </h2>
          <p className="text-lg font-medium mb-8">
            Franchisees grow day by day in strategic zones approved by us.
          </p>
          <button className="px-6 py-3 bg-white text-[#4A2010] rounded-full font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform">
            Start your Node ➔
          </button>
        </div>

      </div>
    </section>
  );
}