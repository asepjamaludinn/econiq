"use client"

import { motion } from "framer-motion"

export default function AboutFeatures(){

const features=[
{title:"Innovation",desc:"Pushing financial technology forward."},
{title:"Sustainability",desc:"Building responsible scalable systems."},
{title:"Community",desc:"Empowering people globally."}
]

return(
<section className="py-24 bg-gray-50 px-6">

<h2 className="text-6xl font-black text-center mb-20">
Core Values
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

{features.map((f,i)=>(
<motion.div
key={i}
whileHover={{y:-10}}
className="bg-white p-12 rounded-[40px] shadow"
>
<h3 className="text-2xl font-bold mb-4">{f.title}</h3>
<p className="text-gray-600">{f.desc}</p>
</motion.div>
))}

</div>

</section>
)

}