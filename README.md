# JUDUL KARYA

_ECONIQ: Akselerasi Generasi Baru Keuangan Digital melalui Edukasi Interaktif_

## Institusi

Telkom University

## Anggota Tim

- Ketua: Asep Jamaludin
- Anggota : Muhammad Lazuardi

## Deskripsi Karya

**Latar Belakang**
Transformasi internet dari era Web 2.0 yang terpusat menuju Web 3.0 yang terdesentralisasi telah membawa revolusi besar, khususnya di sektor keuangan digital (Decentralized Finance dan Blockchain). Namun, adopsi teknologi yang masif ini tidak dibarengi dengan literasi publik yang memadai. Kurangnya edukasi fundamental menyebabkan tingginya angka penipuan siber (scam/phishing), misinformasi, dan skeptisisme masyarakat terhadap teknologi blockchain. Masyarakat membutuhkan wadah informasi yang aman untuk belajar tanpa harus mengambil risiko finansial secara langsung.

**Tujuan**
ECONIQ dibangun sebagai platform edukasi interaktif yang bertujuan untuk mendemokratisasi pengetahuan seputar Web3, blockchain, dan literasi keuangan digital. Sejalan dengan tema **INNOVATE** (Impel Novelty, Navigate, Optimize, Validate, Advance Technological Endeavors), ECONIQ menavigasi (Navigate) masyarakat melalui kompleksitas teknologi blockchain, mengoptimalkan (Optimize) pengalaman belajar melalui antarmuka visual yang sangat interaktif (berbasis animasi GSAP), serta memvalidasi (Validate) pemahaman pengguna melalui informasi yang kredibel dan terstruktur.

**Pemilihan Subtema**
Karya ini mengintegrasikan 3 subtema utama sekaligus dalam satu ekosistem:

1. **Pendidikan (Utama):** Menyediakan basis pengetahuan (knowledge base) fundamental dari nol hingga pemahaman smart contract, bertindak sebagai garis pertahanan pertama melawan misinformasi digital.
2. **Ekonomi:** Berfokus pada peningkatan literasi finansial masyarakat agar siap menghadapi pergeseran menuju ekonomi digital masa depan.
3. **Lingkungan:** Mengangkat topik Green Blockchain untuk meluruskan stigma negatif terkait konsumsi energi kripto dan mempromosikan adopsi teknologi yang ramah lingkungan.

**Manfaat**

1. **Bagi Masyarakat:** Memberikan akses belajar gratis, aman (tanpa perlu menyambungkan dompet kripto asli), dan mudah dipahami oleh pemula untuk menghindari risiko penipuan digital.
2. **Bagi Ekosistem Teknologi:** Mempersiapkan talenta dan pengguna yang memiliki pemikiran kritis serta fondasi yang kuat sebelum terjun langsung ke dalam ekosistem Web3 dan ekonomi digital.
3. **Bagi Keberlanjutan:** Meningkatkan kesadaran akan pentingnya teknologi terdesentralisasi yang peduli terhadap Regenerative Finance (ReFi) dan aksi iklim global.

## Link Website

https://econiq-digital.vercel.app/

---

## Teknologi yang Digunakan

- **Framework:** Next.js (App Router), React.js
- **Styling & UI:** Tailwind CSS
- **Animation:** GSAP (GreenSock Animation Platform), Lenis (Smooth Scroll), LottieFiles
- **Form & Validation:** React Hook Form, Zod
- **Email Service:** Nodemailer
- **Security:** Google reCAPTCHA v2

## Cara Menjalankan Proyek Secara Lokal

Jika dewan juri ingin meninjau _source code_ dan menjalankan proyek ini secara lokal, silakan ikuti langkah-langkah berikut:

**1. Persyaratan Sistem**
Pastikan perangkat sudah terinstal **Node.js** (versi 18.x atau lebih baru).

**2. Ekstrak Folder**
Ekstrak file `.zip` yang telah dikirimkan, lalu buka terminal/command prompt dan arahkan ke _root folder_ proyek (`cd nama-folder-ekstrak`).

**3. Instalasi Dependencies**
Jalankan perintah berikut untuk menginstal semua pustaka yang dibutuhkan:

```bash
npm install
```

**4. Konfigurasi Environment Variables**
Buat file baru bernama .env di root folder proyek. Salin konfigurasi berikut dan isi dengan kredensial yang valid agar fitur Contact Form dan Email berfungsi (atau biarkan kosong jika hanya meninjau UI):

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
EMAIL_USER=email_anda@gmail.com
EMAIL_PASS=password_app_email_anda
```

**5. Jalankan Development Server**

```bash
npm run dev
```

Buka browser dan akses http://localhost:3000 untuk melihat website ECONIQ.

---

## Disclaimer

Data, statistik, dan informasi entitas yang ditampilkan pada website ini (termasuk klaim "100+ Tempat", lokasi, dan metrik pengguna) adalah data _dummy_ atau fiktif. Data tersebut digunakan secara eksklusif untuk keperluan demonstrasi visual dan fungsionalitas purwarupa (_prototype_) dalam rangka SOFTCOMPT 2026.
