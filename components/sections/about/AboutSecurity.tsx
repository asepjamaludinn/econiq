"use client"

import { motion } from "framer-motion"

export default function AboutSecurity() {
  return (
    <section className="py-32 bg-transparent text-center px-6 relative overflow-hidden">
      <div className="absolute w-150 h-150 bg-[#660DFF]/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase tracking-tight leading-tight">
          Powered by <br /> <span className="text-[#B36EE6]">Modern Technology</span>
        </h2>

        <div className="w-full h-75 md:h-112.5 bg-black/10 border border-current/10 rounded-[40px] flex flex-col items-center justify-center backdrop-blur-lg shadow-2xl">
           <div className="w-20 h-20 bg-black/5 border border-current/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <div className="w-10 h-10 bg-[#660DFF] rounded-full blur-sm" />
           </div>
           <p className="opacity-50 font-bold uppercase tracking-widest text-sm">Infrastructure Visual</p>
        </div>
      </motion.div>
    </section>
  )
}