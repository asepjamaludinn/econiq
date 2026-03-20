"use client"

import { motion } from "framer-motion"

export default function AboutTimeline() {
  const items = [
    { year: "2023", title: "Company Founded", desc: "The inception of Econiq vision." },
    { year: "2024", title: "Platform Development", desc: "Building the core infrastructure." },
    { year: "2025", title: "Community Expansion", desc: "Growing our global footprint." }
  ]

  return (
    <section className="py-32 bg-transparent px-6 relative border-t border-current/10">
      <h2 className="text-4xl md:text-6xl font-black text-center mb-24 uppercase tracking-wide">
        Our Journey
      </h2>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#660DFF] via-[#B36EE6] to-transparent md:-translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {items.map((i, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#B36EE6] rounded-full -translate-x-1.75 md:-translate-x-1/2 mt-2 md:mt-0 shadow-[0_0_15px_#B36EE6]" />
              <div className="w-full md:w-5/12 pl-16 md:pl-0 flex flex-col">
                <span className={`text-5xl md:text-6xl font-black opacity-40 mb-2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  {i.year}
                </span>
                <h3 className={`text-xl font-bold text-[#B36EE6] mb-2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  {i.title}
                </h3>
                <p className={`opacity-60 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  {i.desc}
                </p>
              </div>
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}