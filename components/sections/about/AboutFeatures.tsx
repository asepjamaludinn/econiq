"use client"

import { motion } from "framer-motion"

export default function AboutFeatures() {
  const features = [
    { title: "Inovasi", desc: "Mendobrak batasan dari financial technology Web3." },
    { title: "Keberlanjutan", desc: "Membangun solusi dan infrastruktur yang bisa di-scale secara bertanggung jawab." },
    { title: "Komunitas", desc: "Memberdayakan orang-orang secara global melalui sistem ekonomi yang mudah diakses." }
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

      <h2 className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-24 uppercase tracking-wide text-white">
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
            className="bg-white/5 border border-white/10 p-10 rounded-4xl backdrop-blur-md hover:border-brand-tertiary/50 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform transform-gpu shadow-[0_0_20px_rgba(102,13,255,0.4)]">
               <span className="text-white font-black text-2xl">{i + 1}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">{f.title}</h3>
            <p className="text-white/90 font-medium leading-relaxed drop-shadow-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}