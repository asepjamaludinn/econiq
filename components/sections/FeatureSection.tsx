export default function FeatureSection() {
  const features = [
    {
      title: "Transparan",
      desc: "Setiap aliran dana tercatat dengan jelas menggunakan teknologi blockchain.",
    },
    {
      title: "Edukasi Web3",
      desc: "Pelajari cara kerja aset digital dan tingkatkan literasi finansialmu.",
    },
    {
      title: "Investasi Cerdas",
      desc: "Optimalkan portofoliomu dengan panduan data analitik yang akurat.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#660DFF] text-white z-20 py-24 px-4">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
            Inovasi Ekonomi Digital
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Membangun ekosistem finansial yang inklusif. Kami memadukan
            teknologi Web3 dengan kebutuhan ekonomi sehari-hari agar setiap
            transaksi menjadi lebih mudah, cepat, dan menguntungkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
