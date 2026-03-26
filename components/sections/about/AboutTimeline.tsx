"use client"

import { motion } from "framer-motion"

const items = [
  { year: "2023", title: "Inisiasi Edukasi", desc: "Menganalisis kesenjangan literasi digital dan mulai merumuskan kurikulum dasar teknologi Web3." },
  { year: "2024", title: "Pengembangan Modul", desc: "Membangun platform pembelajaran interaktif yang dilengkapi dengan simulasi transaksi aman." },
  { year: "2025", title: "Membangun Komunitas", desc: "Memperluas akses edukasi untuk mencetak generasi muda yang melek finansial digital." }
]

export default function AboutTimeline() {
  return (
    <section className="py-24 md:py-40 px-6 bg-transparent relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-32 uppercase tracking-wide text-white drop-shadow-sm">
        Perjalanan Kami
      </h2>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-1 bg-gradient-to-b from-brand-tertiary via-brand-primary to-transparent md:-translate-x-1/2 opacity-30 rounded-full" />

        <div className="space-y-16 md:space-y-24">
          {items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-12 md:pl-0 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-[13px] md:left-1/2 top-1.5 md:top-auto md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_15px_#660dff] border-2 border-zinc-900 z-10" />

                <div className={`w-full md:w-[45%] ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <div className="inline-block px-4 py-1 mb-4 rounded-full bg-brand-tertiary/10 border border-brand-tertiary/30 text-brand-tertiary font-black tracking-widest text-xs md:text-sm">
                    {item.year}
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-medium leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}