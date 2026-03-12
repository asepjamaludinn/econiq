"use client"

import { motion } from "framer-motion"

export default function AboutTimeline(){

const items=[
{year:"2023",title:"Company Founded"},
{year:"2024",title:"Platform Development"},
{year:"2025",title:"Community Expansion"}
]

return(

<section className="py-32 bg-gradient-to-b from-[#3A2A7B] to-[#0F1B4C] text-white px-6">

<h2 className="text-6xl font-black text-center mb-24">
Our Journey
</h2>

<div className="max-w-3xl mx-auto space-y-20">

{items.map((i,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="flex justify-between"
>

<span className="text-4xl font-black text-[#E7C27D]">
{i.year}
</span>

<div className="text-xl">
{i.title}
</div>

</motion.div>
))}

</div>

</section>

)

}