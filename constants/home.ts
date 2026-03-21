import { SvgWallet } from "@/components/icons/SvgWallet";
import { SvgLearn } from "@/components/icons/SvgLearn";
import { SvgTrack } from "@/components/icons/SvgTrack";
import { SvgGrow } from "@/components/icons/SvgGrow";
import { FeatureData, StepData, ImageData, FAQItemData } from "@/types";

export const heroData = {
  titleLine1: "Kenali Uangmu.",
  titleLine2: "Kembangkan Uangmu.",
};

export const featuresData: FeatureData[] = [
  {
    title: "Ramah Pemula",
    desc: "Mulai perjalananmu di dunia keuangan digital dengan aman. ECONIQ menyediakan panduan bertahap tanpa hambatan teknis.",
  },
  {
    title: "Literasi Finansial",
    desc: "Pahami dasar ekonomi Web3 dan bagaimana sistem keuangan terdesentralisasi bekerja di dunia nyata.",
  },
  {
    title: "Pusat Pengetahuan Terpercaya",
    desc: "Bangun fondasi kuat dengan informasi yang terverifikasi. Kami membantumu menjelajahi Web3 secara aman dan terhindar dari penipuan digital.",
  },
  {
    title: "Bacaan Berwawasan",
    desc: "Pelajari konsep kompleks seperti blockchain dan smart contract dengan cara yang sederhana dan mudah dipahami.",
  },
];

export const walletAssetsData: string[] = [
  "/images/card.svg",
  "/images/BitCoin.svg",
  "/images/kalung.svg",
  "/images/Dolar.webp",
  "/images/75Rp.svg",
  "/images/gelang.svg",
];

export const sumberUangData: string[] = [
  "/images/Uang1 blur.svg",
  "/images/Uang2 blur.svg",
  "/images/Uang3 blur.svg",
];

export const stepsData: StepData[] = [
  {
    num: "01",
    title: "Temukan Tren",
    desc: "Awali perjalananmu dengan menemukan berita dan tren terbaru seputar Web3, blockchain, dan keuangan digital.",
    Icon: SvgWallet,
  },
  {
    num: "02",
    title: "Pelajari & Eksplorasi",
    desc: "Akses artikel komprehensif untuk memahami dasar-dasar Web3, keamanan blockchain, dan literasi keuangan digital dari tahap paling awal.",
    Icon: SvgLearn,
  },
  {
    num: "03",
    title: "Berpikir Analitis",
    desc: "Baca wawasan harian kami untuk mempelajari cara memahami dinamika pasar kripto dan perkembangan teknologi secara lebih kritis.",
    Icon: SvgTrack,
  },
  {
    num: "04",
    title: "Berdayakan Ekonomi",
    desc: "Terapkan pengetahuan finansialmu untuk membuat keputusan yang lebih cerdas dan berkontribusi pada ekonomi digital yang lebih inovatif dan berkelanjutan.",
    Icon: SvgGrow,
  },
];

export const marketingImages: ImageData[] = [
  {
    src: "/images/feed1.webp",
    alt: "Umpan 1",
    positionClasses:
      "top-[2%] md:top-[8%] lg:top-[12%] left-[-5%] md:left-[2%] lg:left-[5%] w-[180px] md:w-[280px] lg:w-[320px] -rotate-[12deg]",
  },
  {
    src: "/images/feed2.webp",
    alt: "Umpan 2",
    positionClasses:
      "bottom-[8%] md:bottom-[3%] lg:bottom-[8%] left-[10%] md:left-[0%] lg:left-[20%] w-[160px] md:w-[250px] lg:w-[200px] rotate-[6deg]",
  },
  {
    src: "/images/feed3.webp",
    alt: "Umpan 3",
    positionClasses:
      "top-[15%] md:top-[10%] lg:top-[18%] right-[-5%] md:-right-[5%] lg:right-[5%] w-[180px] md:w-[280px] lg:w-[280px] rotate-[15deg]",
  },
];

export const locationImages: ImageData[] = [
  {
    src: "/images/store1.png",
    alt: "Toko 1",
    positionClasses:
      "top-[5%] md:top-[10%] left-[2%] md:left-[5%] lg:left-[8%] w-[120px] md:w-[180px] lg:w-[220px]",
  },
  {
    src: "/images/store2.png",
    alt: "Toko 2",
    positionClasses:
      "bottom-[12%] md:bottom-[15%] left-[5%] md:left-[10%] lg:left-[15%] w-[100px] md:w-[160px] lg:w-[180px]",
  },
  {
    src: "/images/store3.png",
    alt: "Toko 3",
    positionClasses:
      "top-[15%] md:top-[12%] right-[2%] md:right-[5%] lg:right-[8%] w-[110px] md:w-[170px] lg:w-[200px]",
  },
  {
    src: "/images/store4.png",
    alt: "Toko 4",
    positionClasses:
      "bottom-[10%] md:bottom-[8%] right-[8%] md:right-[15%] lg:right-[10%] w-[130px] md:w-[190px] lg:w-[240px]",
  },
  {
    src: "/images/store5.png",
    alt: "Toko 5",
    positionClasses:
      "top-[30%] md:top-[10%] lg:top-[10%] left-[5%] md:left-[40%] lg:left-[45%] w-[90px] md:w-[140px] lg:w-[160px]",
  },
];

export const teamImages: ImageData[] = [
  {
    src: "/images/lazz.png",
    alt: "Lazz",
    positionClasses:
      "bottom-[5%] md:bottom-[10%] left-[5%] md:left-[0%] lg:left-[10%] w-[150px] md:w-[300px] lg:w-[300px] -rotate-6",
  },
  {
    src: "/images/sepp.png",
    alt: "Sepp",
    positionClasses:
      "top-[10%] md:top-[15%] right-[0%] md:right-[0%] lg:right-[10%] w-[150px] md:w-[300px] lg:w-[300px] rotate-6",
  },
];

export const faqData: FAQItemData[] = [
  {
    question: "Apa visi Eqonic dalam mendukung tema INNOVATE?",
    answer:
      "Sejalan dengan semangat INNOVATE (Impel Novelty, Navigate, Optimize, Validate, Advance Technological Endeavors), Eqonic hadir sebagai inovasi edukasi digital. Kami menavigasi masyarakat melalui kompleksitas keuangan Web3 via platform yang aman, tervalidasi, dan optimal untukmembantu lebih banyak orang memahami Web3 secara mudah dan terbuka.",
  },
  {
    question: "Mengapa Eqonic hanya berfokus pada artikel edukasi dan berita?",
    answer:
      "Kami percaya bahwa pendidikan adalah garis pertahanan pertama. Ruang Web3 penuh dengan teknologi kompleks dan potensi misinformasi. Dengan menyediakan basis pengetahuan yang komprehensif dan terverifikasi, kami memberdayakan pemula untuk membangun fondasi yang kuat dan keterampilan berpikir kritis sebelum mereka memasuki ekonomi digital yang sesungguhnya.",
  },
  {
    question:
      "Apakah platform ini hanya membahas Ekonomi, atau juga menyentuh isu keberlanjutan (lingkungan)?",
    answer:
      "Eqonic mencakup keduanya! Selain artikel keuangan, Akademi Eqonic juga menyoroti subtema Lingkungan dengan menyediakan edukasi tentang 'Green Blockchain' (jaringan kripto rendah emisi karbon) dan bagaimana teknologi terdesentralisasi dapat digunakan untuk mendanai inisiatif iklim dan kesehatan global.",
  },
  {
    question: "Bagaimana platform ini berdampak pada masyarakat luas?",
    answer:
      "Website ini bukan sekadar media informasi, melainkan alat untuk pemberdayaan. Dengan membuka akses pengetahuan Web3 untuk semua orang secara gratis dan mudah dipahami secara gratis, Eqonic bertujuan untuk meningkatkan kesadaran publik, menumbuhkan pemikiran kritis di kalangan generasi muda, dan mempersiapkan masyarakat menuju transisi ekonomi digital yang inklusif.",
  },
  {
    question:
      "Apakah saya perlu menghubungkan crypto wallet atau membayar untuk menggunakan Eqonic?",
    answer:
      "Tentu saja tidak. Eqonic adalah platform edukasi yang 100% gratis. Kami tidak akan pernah meminta Anda untuk menghubungkan crypto wallet asli, melakukan deposit, atau membeli token. Satu-satunya tujuan kami adalah menyediakan literasi keuangan yang aman dan bebas risiko bagi siapa saja.",
  },
  {
    question: "Saya benar-benar pemula. Dari mana saya harus mulai?",
    answer:
      "Kami merekomendasikan untuk memulai dengan artikel 'Dasar-dasar Web3' dan 'Evolusi Internet'. Artikel fundamental ini dirancang tanpa jargon teknis yang rumit, sehingga memudahkan Anda untuk memahami konsep inti sebelum mendalami topik lanjutan seperti Smart Contract atau Crypto Wallet.",
  },
  {
    question: "Seberapa sering konten edukasi diperbarui?",
    answer:
      "Tim ahli kami terus memantau perubahan cepat dalam lanskap Web3 dan keuangan digital. Kami memperbarui basis pengetahuan kami dan menerbitkan wawasan baru setiap minggu untuk memastikan komunitas kami selalu menerima informasi yang paling akurat dan tervalidasi.",
  },
];
