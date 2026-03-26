"use client"

import { motion } from "framer-motion"

export default function AboutMission() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

      <div className="w-full h-[400px] bg-gray-100 rounded-[40px]" />

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
      >
        <h2 className="text-6xl font-black mb-8">
          Our Mission
        </h2>

        <p className="text-lg text-gray-600 mb-6">
          Econiq aims to democratize financial technology by building
          modern economic systems that are accessible and transparent.
        </p>

        <p className="text-lg text-gray-600">
          We connect traditional finance with new decentralized
          technologies to create a scalable economic ecosystem.
        </p>
      </motion.div>

    </section>
  )
}