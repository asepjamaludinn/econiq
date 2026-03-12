"use client"

import { motion } from "framer-motion"

export default function AboutSplash(){

  return(
    <section className="py-40 bg-white flex justify-center px-6">

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="text-6xl md:text-7xl font-black text-center max-w-4xl"
      >
        Reimagining the Future of Digital Economy
      </motion.h2>

    </section>
  )

}