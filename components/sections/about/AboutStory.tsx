"use client"

import { motion } from "framer-motion"

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-square md:aspect-4/5 bg-black/10 rounded-[40px] overflow-hidden border border-current/10 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-[#660DFF]/20 to-transparent" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-black/5 backdrop-blur-md rounded-2xl border border-current/10" />
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#B36EE6]/20 backdrop-blur-md rounded-full border border-current/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-wide">
            Our Mission
          </h2>

          <p className="text-lg md:text-xl opacity-70 mb-6 leading-relaxed">
            Econiq aims to democratize financial technology by creating modern economic infrastructure that is accessible, transparent, and secure.
          </p>

          <p className="text-lg md:text-xl opacity-70 leading-relaxed">
            We connect traditional finance with decentralized systems to unlock scalable opportunities for users worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}