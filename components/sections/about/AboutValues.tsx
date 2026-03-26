"use client"

export default function AboutValues() {

  const values = [
    {
      title:"Innovation",
      desc:"Pushing the boundaries of financial technology."
    },
    {
      title:"Sustainability",
      desc:"Building solutions that scale responsibly."
    },
    {
      title:"Community",
      desc:"Empowering people through economic access."
    }
  ]

  return (
    <section className="py-24 bg-gray-50 px-6">

      <h2 className="text-6xl font-black text-center mb-20">
        Core Values
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {values.map((v,i)=>(
          <div
            key={i}
            className="bg-white p-12 rounded-[40px] shadow hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {v.title}
            </h3>

            <p className="text-gray-600">
              {v.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}