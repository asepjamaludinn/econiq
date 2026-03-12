"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import FloatingOrb from "@/components/ui/FloatingOrb"

export default function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center overflow-hidden px-4"
    >
      <div className="absolute top-1/4 left-1/4 w-75 h-75 bg-[#660DFF]/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-62.5 h-62.5 bg-[#B36EE6]/20 blur-[100px] rounded-full pointer-events-none" />

      <FloatingOrb />

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center">
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 mb-8">
          <span className="text-[#B36EE6] text-sm font-bold tracking-widest uppercase">The Econiq Vision</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tight uppercase leading-[1.1] drop-shadow-2xl">
          REIMAGINING <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B36EE6] to-[#660DFF]">
            DIGITAL ECONOMY
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-medium">
          Building a smarter, scalable, and decentralized financial ecosystem for everyone.
        </p>
      </motion.div>
    </section>
  )
}