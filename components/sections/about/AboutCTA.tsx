"use client"

import MagneticButton from "@/components/ui/MagneticButton"

export default function AboutCTA() {
  return (
    <section className="relative py-40 px-6 text-center bg-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 md:w-125 md:h-125 bg-[#660DFF]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
          Join the <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B36EE6] to-[#660DFF]">
            Econiq Ecosystem
          </span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl font-medium">
          Ready to be part of the decentralized future? Explore our platform and start your journey today.
        </p>
        <div className="border border-white/10 rounded-full p-2 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
          <MagneticButton>
            <span className="px-8 py-4 block font-bold text-white uppercase tracking-widest text-sm">
              Explore Platform
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}