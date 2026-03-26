"use client"

import { motion } from "framer-motion"

export default function FloatingOrb(){

return(

<motion.div
animate={{
y:[0,-20,0],
x:[0,10,0]
}}
transition={{
duration:6,
repeat:Infinity
}}
className="absolute w-[300px] h-[300px] bg-orange-400/20 blur-3xl rounded-full"
/>

)

}