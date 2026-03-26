"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutStory() {
  return (
    <section className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden z-10">
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <svg viewBox="0 0 1440 800" className="w-full h-full text-white">
          <path d="M-100,200 Q150,300 300,200 T700,100 T1200,300 T1600,100" fill="none" className="stroke-white/40" />
          <path d="M-100,600 Q200,500 400,600 T800,400 T1300,700 T1600,500" fill="none" className="stroke-white/40" />
          <circle cx="150" cy="300" r="5" className="fill-brand-primary" />
          <circle cx="700" cy="100" r="5" className="fill-brand-tertiary" />
          <circle cx="1200" cy="300" r="5" className="fill-white" />
          <circle cx="400" cy="600" r="5" className="fill-brand-primary/80" />
          <circle cx="800" cy="400" r="5" className="fill-brand-tertiary/80" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-square md:aspect-4/5 bg-white/[0.02] rounded-[40px] overflow-hidden border border-white/5 backdrop-blur-2xl shadow-2xl"
        >
          <Image alt='' src="/images/abstract3d.jpg" fill className="object-cover opacity-90 mix-blend-overlay" />
          <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg" />
          <div className="absolute top-10 right-10 w-20 h-20 bg-brand-tertiary/10 backdrop-blur-xl rounded-full border border-white/10 shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide text-white">
            Misi Kami
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-brand-tertiary to-brand-primary mb-10 rounded-full" />

          <p className="text-lg md:text-xl text-white/60 mb-6 leading-relaxed font-medium">
            Econiq bertujuan untuk mendemokratisasi <i>financial technology</i> dengan membangun infrastruktur ekonomi modern yang mudah diakses, transparan, dan aman.
          </p>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium">
            Kami menghubungkan <i>finance</i> tradisional dengan sistem yang terdesentralisasi untuk membuka peluang yang <i>scalable</i> bagi pengguna di seluruh dunia.
          </p>
        </motion.div>

      </div>
    </section>
  )
}