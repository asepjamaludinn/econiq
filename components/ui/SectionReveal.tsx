"use client"

import { motion } from "framer-motion"

export default function SectionReveal({
children
}:{children:React.ReactNode}){

return(

<motion.div
initial={{opacity:0,y:80,filter:"blur(20px)"}}
whileInView={{opacity:1,y:0,filter:"blur(0px)"}}
transition={{duration:0.8}}
viewport={{once:true}}
>
{children}
</motion.div>

)

}