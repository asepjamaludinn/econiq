"use client"

import { motion } from "framer-motion"

export default function AboutStory(){

  return(
    <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

      <div className="h-[420px] bg-gray-100 rounded-[40px]" />

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
      >

        <h2 className="text-6xl font-black mb-8">
          Our Mission
        </h2>

        <p className="text-lg text-gray-600 mb-6">
          Econiq aims to democratize financial technology
          by creating modern economic infrastructure.
        </p>

        <p className="text-lg text-gray-600">
          We connect traditional finance with decentralized
          systems to unlock scalable opportunities.
        </p>

      </motion.div>

    </section>
  )

}