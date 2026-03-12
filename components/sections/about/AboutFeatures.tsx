"use client"

import { motion } from "framer-motion"

export default function AboutFeatures() {
  const features = [
    { title: "Innovation", desc: "Pushing the boundaries of Web3 financial technology." },
    { title: "Sustainability", desc: "Building solutions and infrastructure that scale responsibly." },
    { title: "Community", desc: "Empowering people globally through accessible economic tools." }
  ]

  return (
    <section className="py-24 bg-black px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-[#660DFF]/50 to-transparent" />

      <h2 className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-24 uppercase tracking-wide">
        Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-10 rounded-4xl backdrop-blur-md hover:border-[#B36EE6]/50 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-[#660DFF]/20 rounded-full flex items-center justify-center mb-8 border border-[#660DFF]/30 group-hover:scale-110 transition-transform">
               <span className="text-[#B36EE6] font-bold text-xl">{i + 1}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
            <p className="text-white/60 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}