"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import FloatingOrb from "@/components/ui/FloatingOrb"

export default function AboutHero(){

const ref = useRef(null)

const {scrollYProgress} = useScroll({
target:ref,
offset:["start start","end start"]
})

const scale = useTransform(scrollYProgress,[0,1],[1,1.2])
const opacity = useTransform(scrollYProgress,[0,1],[1,0])

return(

<section
ref={ref}
className="relative min-h-screen flex flex-col items-center justify-center bg-[#E7C27D] text-center overflow-hidden"
>

<FloatingOrb/>
<FloatingOrb/>

<motion.h1
style={{scale,opacity}}
className="text-8xl md:text-[120px] font-black tracking-tight"
>
ABOUT ECONIQ
</motion.h1>

<p className="mt-8 text-xl text-black/70 max-w-xl">
Building a smarter digital economic ecosystem
</p>

</section>

)

}