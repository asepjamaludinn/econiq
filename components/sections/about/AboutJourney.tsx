"use client"

export default function AboutJourney() {

  const data = [
    {year:"2023",title:"Company Founded"},
    {year:"2024",title:"Platform Development"},
    {year:"2025",title:"Community Expansion"},
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-[#3A2A7B] to-[#0F1B4C] text-white px-6">

      <h2 className="text-6xl font-black text-center mb-24">
        Our Journey
      </h2>

      <div className="max-w-3xl mx-auto space-y-16">

        {data.map((item,i)=>(
          <div key={i} className="flex justify-between items-center">

            <span className="text-4xl font-black text-[#E7C27D]">
              {item.year}
            </span>

            <div className="text-xl">
              {item.title}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}