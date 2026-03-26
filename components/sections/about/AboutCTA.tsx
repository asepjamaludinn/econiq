"use client"

import Link from "next/link"
import MagneticButton from "@/components/ui/MagneticButton"
import { useModalStore } from "@/store/useModalStore"

export default function AboutCTA() {
  const openFormModal = useModalStore((state) => state.openFormModal);  
  return (
    <section className="relative pt-12 pb-48 md:pb-64 px-6 text-center bg-transparent z-10 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 blur-[100px] md:blur-[150px] rounded-full transform-gpu" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tight text-white drop-shadow-2xl leading-[1.1] md:leading-[0.9]">
          Mulai Belajar di <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tertiary via-[#e0aaff] to-white">
            Econiq
          </span>
        </h2>
        
        <p className="text-white/90 text-sm md:text-xl mb-12 max-w-2xl font-medium leading-relaxed drop-shadow-md">
          Siap menguasai teknologi masa depan? Eksplorasi materi kami dan tingkatkan literasi digitalmu hari ini.
        </p>

        <div 
          onClick={openFormModal} 
          className="cursor-pointer border border-white/20 rounded-full p-2 bg-black/10 backdrop-blur-xl hover:bg-black/20 hover:border-white/30 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
          <MagneticButton>
            <span className="px-8 py-4 block font-bold uppercase tracking-widest text-xs md:text-sm text-white whitespace-nowrap">
              Mulai Belajar
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}