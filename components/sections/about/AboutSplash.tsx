"use client"

import { motion } from "framer-motion"

export default function AboutSplash() {
  return (
    <section className="py-32 md:py-40 flex justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-primary/5 to-transparent pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-7xl font-black text-center max-w-5xl leading-tight uppercase tracking-wide"
      >
        Reimagining the Future of <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-tertiary to-brand-primary">
          Digital Economy
        </span>
      </motion.h2>
    </section>
  )
}