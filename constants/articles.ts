import { ArticleData } from "@/types";

// KONTEN ARTIKEL 1: Web3Basics
const contentWeb3Basics = `
  <p>Istilah <strong>“Web 3.0”</strong> mulai mencuri perhatian dunia teknologi sejak beberapa tahun terakhir. Setelah melewati dua generasi internet Web 1.0 yang statis dan Web 2.0 yang interaktif namun terpusat Web 3.0 hadir sebagai visi masa depan internet yang lebih terbuka, aman, dan dikelola oleh komunitas, bukan oleh raksasa teknologi.</p>
  
  <p>Web 3.0 menjanjikan revolusi di berbagai sektor: dari keuangan, media sosial, hingga pengelolaan data pribadi. Namun, apa sebenarnya yang dimaksud dengan Web 3.0? Bagaimana cara kerjanya? Dan apa dampaknya terhadap kehidupan digital kita?</p>

  <h3>Dari Web 1.0 hingga Web 3.0</h3>
  <ul>
    <li><strong>Web 1.0 (1990-an):</strong> Era web statis. Pengguna hanya bisa membaca informasi tanpa interaksi.</li>
    <li><strong>Web 2.0 (2000-an hingga kini):</strong> Era media sosial dan platform. Pengguna dapat membuat konten, tetapi data sepenuhnya dikuasai oleh platform penyedia layanan.</li>
    <li><strong>Web 3.0 (Masa Depan):</strong> Era desentralisasi. Internet yang dibangun di atas teknologi blockchain, di mana pengguna memiliki kendali penuh atas data dan aset digitalnya.</li>
  </ul>

  <h3>Teknologi Utama Pendukung Web 3.0</h3>
  <p><strong>1. Blockchain</strong><br/>Menjadi tulang punggung Web 3.0. Teknologi ini menyimpan data dalam blok yang saling terhubung secara aman dan tidak dapat diubah (<em>immutable</em>), menciptakan transparansi dan keamanan tingkat tinggi.</p>
  
  <p><strong>2. Smart Contract</strong><br/>Program otomatis yang berjalan di atas blockchain. Mereka memungkinkan transaksi dan interaksi dilakukan secara aman tanpa memerlukan pihak ketiga atau perantara.</p>
  
  <p><strong>3. Web Semantik dan AI</strong><br/>Web 3.0 mengintegrasikan kecerdasan buatan dan web semantik agar mesin bisa memahami konteks dan makna dari informasi. Ini membuat pengalaman pengguna menjadi lebih personal dan efisien.</p>

  <img src="/images/content/web3-gallery.webp" alt="Ilustrasi Desentralisasi Web3" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Visualisasi arsitektur jaringan desentralisasi</p>

  <h3>Karakteristik dan Manfaat Web 3.0</h3>
  <ul>
    <li><strong>Desentralisasi & Kontrol Data:</strong> Tidak ada entitas tunggal yang mengontrol jaringan. Pengguna dapat menyimpan datanya di dompet digital (<em>crypto wallet</em>) dan memilih secara spesifik aplikasi mana yang dapat mengakses informasi tersebut.</li>
    <li><strong>Transaksi Aman Tanpa Perantara:</strong> Dengan <em>smart contract</em>, layanan seperti keuangan (DeFi), pinjam-meminjam, atau jual beli dapat dilakukan secara langsung secara <em>peer-to-peer</em>.</li>
    <li><strong>Keadilan dalam Ekosistem (Ekonomi Terbuka):</strong> Web 3.0 memperkenalkan ekonomi berbasis token. Sistem ini memberi insentif kepada pengguna secara langsung atas kontribusinya dalam jaringan.</li>
  </ul>

  <h3>Tantangan dan Kendala</h3>
  <p>Meskipun menjanjikan, adopsi Web 3.0 masih menghadapi beberapa kendala. <strong>Skala dan Kompleksitas</strong> teknologi blockchain belum bisa menangani lalu lintas pengguna dalam jumlah masif seefisien Web 2.0. Selain itu, masalah <strong>Regulasi dan Legalitas</strong> yang belum seragam di berbagai negara, serta kurangnya <strong>Aksesibilitas dan Edukasi</strong>, masih menjadi hambatan yang bisa menciptakan kesenjangan digital baru.</p>

  <h3>Menyambut Era Baru Internet</h3>
  <p>Web 3.0 bukan sekadar tren, melainkan fondasi baru bagi tatanan digital global. Ia membuka peluang bagi ekonomi kreator, pemerintahan digital, hingga sistem pendidikan berbasis blockchain. Indonesia sendiri memiliki potensi besar di sektor ini berkat komunitas digital yang berkembang pesat dan generasi muda yang melek teknologi.</p>
  
  <p>Dengan memanfaatkan teknologi blockchain, AI, dan semantik web, Web 3.0 membawa harapan bagi terciptanya internet yang lebih manusiawi dan inklusif. Maka dari itu, penting bagi kita untuk mulai memahami dan mempersiapkan diri menghadapi era ini, bukan hanya sebagai pengguna, tetapi juga sebagai bagian dari komunitas yang aktif membentuk masa depan.</p>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Artikel & Ilustrasi: <a href="https://berita-seru.co.id/teknologi/apa-itu-web-3-0-masa-depan-internet-terdesentralisasi/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Berita Seru (Apa itu Web 3.0)</a></li>
      <li>Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

// KONTEN ARTIKEL 2: Blockchain
const contentBlockchain = `
  <p>Sering kali orang menyamakan blockchain dengan cryptocurrency, padahal keduanya berbeda. <strong>Blockchain</strong> adalah teknologi fundamental yang memungkinkan cryptocurrency seperti Bitcoin berfungsi. Secara sederhana, blockchain adalah basis data terdistribusi (buku besar digital) yang menyimpan informasi secara elektronik dan dibagikan ke seluruh simpul (<em>nodes</em>) dalam jaringan komputer.</p>
  
  <p>Perbedaan utama antara blockchain dan basis data biasa terletak pada cara data disusun. Basis data biasa menyusun data dalam bentuk tabel, sedangkan blockchain mengelompokkan data ke dalam bongkahan atau <strong>blok</strong>. Setelah sebuah blok terisi penuh dengan data transaksi, blok tersebut akan dirantai (<em>chained</em>) ke blok sebelumnya secara permanen.</p>
  
  <h3>Bagaimana Cara Kerja Blockchain?</h3>
  <p>Proses transaksi dalam jaringan blockchain dapat dirangkum dalam enam langkah berikut:</p>
  <ul>
    <li><strong>1. Inisiasi Transaksi:</strong> Sebuah transaksi baru memasuki jaringan. Semua informasi dienkripsi ganda menggunakan kunci publik dan privat untuk keamanan.</li>
    <li><strong>2. Verifikasi:</strong> Transaksi dikirim ke jaringan komputer (<em>peer-to-peer</em>) di seluruh dunia. Seluruh <em>node</em> akan memeriksa validitasnya, misalnya memastikan saldo pengirim mencukupi.</li>
    <li><strong>3. Pembentukan Blok Baru:</strong> Transaksi yang terverifikasi akan dikumpulkan di sebuah tempat penampungan (<em>mempool</em>). Kumpulan transaksi dari mempool ini kemudian diikat menjadi sebuah blok baru.</li>
    <li><strong>4. Algoritma Konsensus:</strong> <em>Nodes</em> menggunakan mekanisme konsensus (kesepakatan bersama) untuk memvalidasi blok. Node yang berhasil menambahkan blok akan mendapat imbalan (mereka disebut <em>miners</em> atau penambang).</li>
    <li><strong>5. Penambahan ke Rantai:</strong> Setelah divalidasi dan mendapat kode <em>hash</em> yang unik, blok ditambahkan ke blockchain. Setiap blok berisi nilai hash dari blok sebelumnya, sehingga mereka saling terkait secara kriptografi.</li>
    <li><strong>6. Transaksi Selesai:</strong> Transaksi selesai dan datanya tersimpan secara permanen. Siapa pun dapat melacak dan mengonfirmasi transaksi tersebut.</li>
  </ul>

  <img src="/images/content/blockchain-gallery.jpg" alt="Cara Kerja Blok dan Rantai Kriptografi" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Visualisasi cara kerja blockchain dan kriptografi</p>

  <h3>Contoh Kasus: Jack dan Phil</h3>
  <p>Mari kita gunakan contoh sederhana. Misalkan Jack ingin mengirim 20 BTC (Bitcoin) kepada Phil melalui jaringan blockchain.</p>
  <ul>
    <li>Pertama, pesan transaksi dikirim ke seluruh jaringan. <em>Node</em> akan memverifikasi apakah Jack benar-benar memiliki minimal 20 BTC.</li>
    <li>Setelah diverifikasi, transaksi tersebut masuk ke dalam blok baru.</li>
    <li>Sistem menggunakan konsensus <strong>Proof-of-Work (PoW)</strong>. Para penambang (<em>miners</em>) berlomba memecahkan teka-teki matematika yang rumit untuk menemukan nilai <em>hash</em> blok tersebut.</li>
    <li>Setelah teka-teki terpecahkan dan divalidasi oleh penambang lain, blok ditambahkan ke jaringan. Transaksi selesai, dan 20 BTC berpindah dari dompet Jack ke dompet Phil secara transparan dan permanen.</li>
  </ul>

  <h3>Apakah Blockchain Benar-Benar Aman?</h3>
  <p>Secara konsep, blockchain mirip dengan rantai yang saling mengunci. Setiap blok berisi data hash dari blok sebelumnya. Rantai ini dimulai dari blok pertama yang disebut <em>Genesis Block</em>.</p>
  
  <p>Jika seorang peretas mencoba meretas dan mengubah data pada "Blok 2", maka nilai hash Blok 2 akan berubah. Hal ini akan otomatis membuat "Blok 3", "Blok 4", dan seterusnya menjadi tidak valid karena mereka merujuk pada hash Blok 2 yang lama. Untuk berhasil meretasnya, peretas harus menghitung ulang seluruh hash dari semua blok secara bersamaan.</p>
  
  <p>Selain itu, peretas juga harus menguasai setidaknya 51% dari seluruh komputer dalam jaringan (dikenal sebagai <strong>51% Attack</strong>) agar versi blockchain palsunya diakui sebagai kebenaran mayoritas. Mempertimbangkan skala jaringan seperti Bitcoin saat ini, serangan semacam ini membutuhkan waktu, uang, dan daya komputasi yang nyaris mustahil untuk dicapai.</p>

  <h3>Faktor Pengaman Tambahan</h3>
  <ul>
    <li><strong>Byzantine Generals Problem:</strong> Ini adalah prinsip di mana sistem hanya akan menyetujui transaksi jika mayoritas penambang (misalnya 2/3) sepakat. Jika ada sebagian kecil penambang yang berniat buruk atau diretas, jaringan akan tetap berjalan aman mengikuti konsensus mayoritas.</li>
    <li><strong>Proof of Work (PoW):</strong> Menambahkan blok baru membutuhkan daya komputasi dan energi listrik yang sangat besar. Jika seorang penambang mencoba memasukkan blok palsu, <em>node</em> lain akan langsung menolaknya. Akibatnya, peretas tersebut hanya akan rugi waktu dan biaya listrik yang mahal tanpa mendapatkan imbalan apa pun.</li>
  </ul>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Artikel & Ilustrasi: <a href="https://www.geeksforgeeks.org/ethical-hacking/how-does-the-blockchain-work/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">GeeksforGeeks (How Does Blockchain Work)</a></li>
      <li>Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

// KONTEN ARTIKEL 3: Crypto Wallet
const contentWallet = `
  <p>Berbeda dengan dompet fisik yang menyimpan uang kertas, <strong>Crypto Wallet</strong> (Dompet Kripto) sebenarnya tidak menyimpan koin Anda di dalamnya. Koin digital Anda tetap berada di dalam jaringan blockchain, sebuah jaringan terdesentralisasi yang tidak dimiliki oleh satu entitas pun.</p>
  
  <p>Lalu, apa fungsi dompet ini? Yang disimpan oleh wallet adalah <strong>kunci privat (Private Key)</strong>, yaitu kode rahasia kriptografi yang membuktikan kepemilikan Anda atas aset di blockchain tersebut dan mengizinkan Anda untuk melakukan transaksi.</p>

  <h3>Fungsi Utama Crypto Wallet</h3>
  <ul>
    <li><strong>Menyimpan Private Key:</strong> Kunci mutlak yang membuktikan kepemilikan aset kripto Anda.</li>
    <li><strong>Mengirim dan Menerima:</strong> Memungkinkan transaksi aset digital antar pengguna secara global.</li>
    <li><strong>Berinteraksi dengan dApps:</strong> Menjadi pintu masuk untuk menggunakan aplikasi blockchain, seperti <em>Decentralized Finance</em> (DeFi), NFT, dan <em>Smart Contract</em>.</li>
    <li><strong>Memantau Saldo:</strong> Menampilkan jumlah aset kripto yang dimiliki berdasarkan catatan data asli dari blockchain.</li>
  </ul>
  
  <img src="/images/content/wallet-gallery.jpg" alt="Antarmuka Crypto Wallet" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Visualisasi antarmuka dompet kripto</p>

  <h3>Jenis Dompet: Hot Wallet vs Cold Wallet</h3>
  <p>Ada dua kategori besar dompet kripto yang dibedakan berdasarkan koneksinya ke internet:</p>
  
  <p><strong>1. Hot Wallet</strong><br/>
  Wallet yang terhubung ke internet secara konstan. Paling umum digunakan karena nyaman untuk transaksi sehari-hari. Contohnya:</p>
  <ul>
    <li><strong>Exchange Wallet:</strong> Disediakan oleh bursa kripto (seperti Binance/Indodax). Mudah digunakan, tapi <em>private key</em> dikontrol oleh platform (kustodial).</li>
    <li><strong>Software Wallet:</strong> Aplikasi di <em>smartphone</em> atau PC (seperti MetaMask/Trust Wallet). Pengguna memegang <em>private key</em>-nya sendiri (non-kustodial).</li>
  </ul>

  <p><strong>2. Cold Wallet</strong><br/>
  Wallet yang tidak terhubung ke internet (<em>offline</em>). Digunakan untuk penyimpanan jangka panjang dengan tingkat keamanan maksimal. Contohnya:</p>
  <ul>
    <li><strong>Hardware Wallet:</strong> Perangkat fisik mirip <em>flashdisk</em> (seperti Ledger/Trezor). Hanya dihubungkan ke komputer saat melakukan transaksi.</li>
    <li><strong>Paper Wallet:</strong> Kunci privat dicetak atau ditulis di atas kertas. Sangat aman dari peretas digital, tapi rentan terhadap kerusakan fisik (terbakar/basah).</li>
  </ul>

  <div style="overflow-x: auto; -webkit-overflow-scrolling: touch; touch-action: pan-x pan-y; margin-top: 2rem; margin-bottom: 2rem;" data-lenis-prevent="true">
  <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <thead>
        <tr style="background-color: #f4effc; color: #5200cc;">
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Karakteristik</th>
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Hot Wallet</th>
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Cold Wallet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Koneksi</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Online</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Offline</td>
        </tr>
        <tr style="background-color: #fafafa;">
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Kemudahan Akses</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Tinggi (Cepat)</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Rendah (Butuh perangkat fisik)</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Keamanan</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Sedang</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Sangat Tinggi</td>
        </tr>
        <tr style="background-color: #fafafa;">
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Cocok Untuk</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Transaksi & Trading Aktif</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Investasi & Penyimpanan Jangka Panjang</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Risiko Utama</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Hacking, Malware, Phishing</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Kerusakan fisik, Kehilangan alat</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Keamanan Private Key: Aturan Emas Web3</h3>
  <p><em>Private Key</em> adalah inti dari keamanan dompet Anda. Berbeda dari kata sandi m-banking yang bisa di-<em>reset</em> melalui <em>customer service</em>, <em>Private Key</em> yang hilang atau bocor berarti aset Anda hilang secara permanen.</p>
  <ul>
    <li>Simpan <strong>Seed Phrase</strong> (frasa pemulihan 12-24 kata) Anda secara fisik di kertas. Jangan pernah menyimpannya dalam bentuk <em>screenshot</em> atau di aplikasi pencatat digital.</li>
    <li>Waspadai <em>Phishing</em>: situs web atau aplikasi palsu yang menyamar untuk mencuri <em>seed phrase</em> Anda.</li>
    <li>Selalu ingat prinsip komunitas kripto: <strong>"Not your keys, not your coins."</strong> Jika pihak lain yang mengontrol kunci tersebut, Anda tidak benar-benar memiliki aset tersebut secara penuh.</li>
  </ul>

  <h3>Risiko Kehilangan Akses</h3>
  <p>Risiko terbesar dalam memiliki <em>wallet</em> non-kustodial bukanlah serangan dari luar, melainkan kelalaian pengguna. Diperkirakan sekitar 20% dari total Bitcoin yang pernah ditambang hilang permanen karena pemiliknya lupa cara mengakses dompet mereka. Beberapa skenario umum meliputi:</p>
  <ul>
    <li>Lupa atau membuang kertas berisi <em>Seed Phrase</em>.</li>
    <li>Perangkat <em>Hardware Wallet</em> rusak dan pengguna tidak memiliki cadangan (<em>backup</em>) <em>Seed Phrase</em>-nya.</li>
    <li>Kematian tanpa rencana pewarisan: aset kripto tidak akan pernah bisa diwariskan jika keluarga tidak mengetahui akses <em>Private Key</em>-nya.</li>
  </ul>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Artikel: <a href="https://www.heygotrade.com/id/blog/crypto-wallet-dompet-kripto-adalah" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Gotrade Blog (Crypto Wallet)</a></li>
      <li>Ilustrasi & Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

// KONTEN ARTIKEL 4: Evolusi Internet
const contentEvolusi = `
  <p>Perkembangan internet adalah salah satu kisah evolusi teknologi tercepat dalam sejarah peradaban manusia. Untuk memahami urgensi dari revolusi Web3 saat ini, kita perlu menengok kembali bagaimana semuanya bermula—dari era di mana kita hanya menjadi konsumen pasif, hingga era kedaulatan digital secara utuh.</p>
  
  <h3>Web 1.0 (1990-an): Etalase Digital (Read-Only)</h3>
  <p>Bermula pada era 1990-an, internet tidak lebih dari sebuah etalase digital atau perpustakaan raksasa yang statis. Pengguna diposisikan murni sebagai konsumen pasif yang hanya bisa membaca informasi dari halaman web sederhana berbasis HTML. Di masa ini, tidak ada interaksi dua arah, tidak ada kolom komentar, apalagi pembuatan akun personal. Informasi mengalir hanya dari satu arah.</p>
  
  <h3>Web 2.0 (2004-Sekarang): Era Sosial (Read & Write)</h3>
  <p>Menginjak pertengahan dekade 2000-an, internet bertransformasi menjadi ruang interaktif. Inilah masa kejayaan media sosial, platform blog, dan layanan berbagi video. Setiap orang kini memiliki suara untuk membuat konten (<em>User-Generated Content</em>). Sayangnya, kemudahan interaksi ini dibayar mahal dengan privasi. Seluruh data, konten, dan identitas digital pengguna dikuasai, disimpan di server terpusat, dan dikomersialkan oleh segelintir perusahaan teknologi raksasa.</p>

  <h3>Web 3.0 (Masa Depan): Era Kedaulatan (Read, Write, Own)</h3>
  <p>Inilah inti dari edukasi ECONIQ. Memasuki fase evolusi terbaru, Web3 hadir untuk merebut kembali kendali dari tangan raksasa teknologi. Mengusung prinsip "Kepemilikan" (<em>Own</em>), era ini dibangun di atas infrastruktur desentralisasi. Aset digital, karya seni, hingga identitas pribadi tidak lagi tersimpan di server terpusat pihak ketiga, melainkan dipegang langsung oleh Anda sendiri.</p>

  <p>Pergeseran fundamental ini dimungkinkan oleh kombinasi teknologi inovatif:</p>
  <ul>
    <li><strong>Blockchain:</strong> Buku besar digital yang terdistribusi, memastikan keamanan data tanpa celah manipulasi.</li>
    <li><strong>Smart Contract:</strong> Kode perjanjian otomatis yang mengeksekusi layanan tanpa memerlukan perantara.</li>
    <li><strong>Aset Kripto & NFT:</strong> Representasi nilai dan bukti sah kepemilikan suatu aset di dunia digital.</li>
  </ul>

  <img src="/images/content/evolution-gallery.jpg" alt="Perbandingan Evolusi Internet" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Visualisasi pergeseran arsitektur internet</p>

  <h3>Perbandingan Utama Era Internet</h3>
  <div style="overflow-x: auto; -webkit-overflow-scrolling: touch; touch-action: pan-x pan-y; margin-top: 2rem; margin-bottom: 2rem;" data-lenis-prevent="true">
  <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <thead>
        <tr style="background-color: #f4effc; color: #5200cc;">
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Aspek</th>
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Web 1.0 (Read)</th>
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Web 2.0 (Read & Write)</th>
          <th style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: bold;">Web 3.0 (Own)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Sifat Konten</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Statis, searah (hanya baca)</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Dinamis & interaktif tinggi</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Terdesentralisasi & transparan</td>
        </tr>
        <tr style="background-color: #fafafa;">
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Peran Pengguna</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Konsumen informasi pasif</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Kreator & konsumen</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Pemilik tunggal aset & data</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5; font-weight: 600;">Contoh Platform</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Website berita lawas, direktori HTML</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Instagram, YouTube, E-Commerce</td>
          <td style="padding: 12px 16px; border: 1px solid #e5e5e5;">Aplikasi DeFi, Marketplace NFT, GameFi</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Mengapa Web 3.0 Sangat Krusial?</h3>
  <p>Visi Web 3.0 menjanjikan masa depan yang lebih demokratis. Selain mengembalikan hak privasi data sepenuhnya ke tangan pengguna, sistem ini membuka gerbang ekonomi digital global yang tidak terhalang oleh batas geografis maupun intervensi lembaga keuangan tradisional. Inovasi ini memicu lahirnya kolaborasi global yang jauh lebih adil bagi para kreator dan komunitas.</p>

  <p>Meskipun menyimpan potensi yang sangat revolusioner, perjalanan menuju adopsi Web 3.0 secara massal masih panjang. Tantangan nyata seperti regulasi yang belum matang dan berbeda-beda di setiap negara, celah keamanan pada aplikasi yang baru seumur jagung, serta tingkat literasi masyarakat yang belum merata adalah pekerjaan rumah besar yang harus diselesaikan secara bersama-sama.</p>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Artikel & Ilustrasi: <a href="https://socs.binus.ac.id/2025/09/29/evolusi-internet-dari-web1-hingga-web3/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">BINUS University (Evolusi Internet)</a></li>
      <li>Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

// KONTEN ARTIKEL 5: Keamanan Wallet
const contentSecurity = `
  <p>Dalam dunia desentralisasi Web3, Anda bertindak sebagai bank bagi diri Anda sendiri. Hal ini memberikan kebebasan luar biasa, namun juga menuntut tanggung jawab yang besar. Sayangnya, banyak pemula merasa ragu karena maraknya berita peretasan. Mari kita bedah mitos dan fakta nyata untuk memahami di mana sebenarnya risiko itu berada.</p>

  <h3>Mitos 1: "Blockchain Aman Karena Menggunakan Kriptografi Kuat"</h3>
  <p><strong>Faktanya:</strong> Kriptografi (enkripsi matematika) memang sangat kuat, tetapi itu hanyalah satu kepingan dari teka-teki keamanan. Enkripsi yang hebat tidak bisa melindungi Anda dari praktik yang buruk.</p>
  <ul>
    <li><strong>UI/UX Exploits:</strong> Ada <em>malware</em> yang bisa mengganti alamat wallet yang Anda salin (copy-paste) secara otomatis. Jika tidak teliti, Anda bisa mengirim dana ke alamat peretas tanpa sadar.</li>
    <li><strong>Phishing:</strong> Situs palsu yang menyerupai layanan resmi dapat menipu Anda untuk memberikan akses penuh ke aset Anda.</li>
  </ul>

  <img src="/images/content/security-gallery.jpg" alt="Ilustrasi Keamanan Siber dan Enkripsi" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Kriptografi kuat harus dibarengi dengan kewaspadaan pengguna.</p>

  <h3>Mitos 2: "Semua Transaksi di Blockchain Bersifat Anonim"</h3>
  <p><strong>Faktanya:</strong> Transaksi blockchain bersifat <strong>pseudonim</strong>, bukan anonim. Artinya, meskipun nama asli Anda tidak muncul, alamat wallet Anda dan seluruh riwayat transaksinya tercatat secara transparan di buku besar publik.</p>
  <p>Jika seseorang berhasil menghubungkan identitas nyata Anda dengan alamat wallet tersebut, mereka bisa melihat seluruh saldo dan aktivitas keuangan Anda di masa lalu. Inilah mengapa privasi data tetap menjadi tantangan besar di dunia Web3.</p>

  <h3>Mitos 3: "Smart Contract Tidak Bisa Diubah, Jadi Pasti Aman"</h3>
  <p><strong>Faktanya:</strong> Sifat <em>immutable</em> (tidak dapat diubah) berarti kesalahan atau celah dalam kode juga menjadi permanen. Jika ada <em>bug</em> dalam kontrak yang sudah diterbitkan, peretas bisa mengeksploitasinya selamanya karena kode tersebut tidak bisa langsung dipindahkan atau diperbaiki dengan mudah.</p>

  <h3>Aturan Emas: Seed Phrase Adalah Nyawa Aset Anda</h3>
  <p>Saat membuat dompet non-kustodial, Anda diberikan 12-24 kata acak yang disebut <strong>Seed Phrase</strong>. Ini adalah kunci master tunggal menuju aset Anda.</p>
  <ul>
    <li><strong>Jangan pernah digitalisasi:</strong> Jangan simpan di cloud, email, atau galeri HP. Jika perangkat Anda diretas, aset Anda habis.</li>
    <li><strong>Simpan secara fisik:</strong> Tulis di kertas dan simpan di tempat yang aman dari risiko air atau api.</li>
    <li><strong>Not your keys, not your coins:</strong> Jika Anda menyimpan aset di bursa (exchange) dan tidak memegang seed phrase sendiri, maka secara teknis Anda tidak memiliki kendali penuh atas aset tersebut.</li>
  </ul>

  <h3>Di Mana Risiko Sebenarnya Berada?</h3>
  <p>Keamanan Web3 harus dilihat secara holistik. Risiko seringkali muncul di lapisan berikut:</p>
  <ul>
    <li><strong>Human Behavior:</strong> Kehilangan kunci, tertipu phishing, atau ceroboh dalam menyimpan data sensitif.</li>
    <li><strong>Interoperabilitas (Bridges):</strong> Menghubungkan satu blockchain ke blockchain lain seringkali menjadi titik paling lemah yang sering dieksploitasi peretas.</li>
    <li><strong>Governance:</strong> Dalam organisasi desentralisasi (DAO), pemegang dana besar (<em>whales</em>) terkadang bisa memanipulasi keputusan yang merugikan anggota lain.</li>
  </ul>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Referensi Penulisan: <a href="https://a16zcrypto.com/posts/article/6-myths-privacy-blockchains/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">a16z crypto (Myths & Privacy)</a></li>
      <li>Ilustrasi & Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

// KONTEN ARTIKEL 6: Green Blockchain
const contentGreen = `
  <p>Salah satu kritik terbesar terhadap teknologi blockchain, khususnya generasi awal seperti Bitcoin, adalah jejak karbonnya yang masif. Beberapa indeks konsumsi energi bahkan mencatat bahwa kebutuhan listrik untuk menambang kripto setara dengan konsumsi listrik seluruh negara kecil. Namun, mengadopsi teknologi masa depan tidak seharusnya mengorbankan bumi kita.</p>

  <p>Untungnya, inovasi di ranah Web3 bergerak sangat cepat untuk menyelesaikan masalah ini melalui konsep <strong>Green Blockchain</strong> (Blockchain Hijau) sebuah jaringan yang mekanisme operasionalnya dirancang agar tidak menyumbang emisi gas rumah kaca secara signifikan.</p>

  <h3>Mengapa Penambangan Kripto (Mining) Boros Energi?</h3>
  <p>Jaringan blockchain generasi pertama beroperasi menggunakan mekanisme <em>Proof of Work</em> (PoW). Dalam sistem ini, ribuan komputer di seluruh dunia harus berlomba memecahkan teka-teki kriptografi yang sangat rumit untuk memvalidasi transaksi dan memperbarui buku besar digital. Komputer yang menang akan mendapatkan imbalan koin. Proses komputasi tanpa henti inilah yang menyedot energi luar biasa besar.</p>
  
  <p>Karena para penambang (<em>miners</em>) selalu ingin menekan biaya operasional demi keuntungan maksimal, mereka kerap mencari sumber listrik termurah. Sayangnya, energi termurah ini sering kali berasal dari pembangkit listrik berbahan bakar fosil.</p>

  <img src="/images/content/green-gallery.jpg" alt="Ilustrasi Teknologi Hijau dan Ramah Lingkungan" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Inovasi Web3 menuju pelestarian lingkungan</p>

  <h3>Solusi Menuju Net-Zero Emissions</h3>
  <p>Komunitas kripto global menyadari bahwa masalah lingkungan ini harus diselesaikan agar Web3 bisa diadopsi secara massal. Ada dua solusi utama yang saat ini sedang diterapkan untuk mencapai emisi nol bersih (<em>Net-Zero Emissions</em>):</p>

  <ul>
    <li><strong>Transisi ke Konsensus Proof of Stake (PoS):</strong> Ini adalah solusi paling berkelanjutan. Alih-alih menyuruh komputer berlomba memecahkan teka-teki yang menguras listrik, PoS memvalidasi transaksi berdasarkan "saham" (<em>stake</em>) atau aset yang dikunci oleh pengguna di dalam jaringan. Pembaruan ini (yang juga telah diadopsi oleh jaringan Ethereum) terbukti memangkas konsumsi energi hingga 99,9%.</li>
    <li><strong>Beralih ke Energi Terbarukan:</strong> Bagi jaringan yang masih menggunakan PoW seperti Bitcoin, para penambang mulai bermigrasi secara agresif menggunakan sumber energi hijau. Contohnya, pemanfaatan energi panas bumi (vulkanik) di El Salvador, serta tenaga surya dan hidro (air) di berbagai negara lainnya.</li>
  </ul>

  <h3>Jaringan Blockchain Ramah Lingkungan</h3>
  <p>Saat ini, sebagian besar aset kripto generasi baru (mencapai lebih dari 60% dari total blockchain aktif) dibangun di atas jaringan yang sudah mengusung konsep <em>eco-friendly</em>. Beberapa contoh jaringan populer yang tergolong hijau antara lain:</p>
  <ul>
    <li><strong>Cardano (ADA)</strong> & <strong>Polkadot (DOT)</strong></li>
    <li><strong>Solana (SOL)</strong></li>
    <li><strong>Stellar Lumens (XLM)</strong></li>
  </ul>

  <h3>Blockchain untuk Aksi Iklim Global (ReFi)</h3>
  <p>Di luar upaya menekan emisinya sendiri, teknologi <em>Green Blockchain</em> kini justru berbalik menjadi alat bantu untuk menyelamatkan bumi melalui gerakan <strong>Regenerative Finance (ReFi)</strong>. Saat ini, banyak proyek Web3 yang memanfaatkan transparansi blockchain untuk melacak jejak karbon perusahaan secara <em>real-time</em>, menerbitkan kredit karbon dalam bentuk token digital yang tidak bisa dipalsukan, hingga mendanai proyek reboisasi hutan secara global dan terdesentralisasi.</p>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Artikel: <a href="https://www.casper.network/get-started/a-brief-guide-to-green-blockchain-technology" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Casper Network (Green Blockchain Guide)</a></li>
      <li>Ilustrasi & Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

// KONTEN ARTIKEL 7: Smart Contract
const contentSmartContract = `
  <p>Pernahkah Anda membayangkan sebuah kontrak perjanjian yang bisa mengeksekusi dirinya sendiri tanpa perlu pengacara, notaris, atau perantara? Di dunia Web3, hal tersebut adalah kenyataan yang disebut <strong>Smart Contract</strong> (Kontrak Pintar).</p>
  
  <p>Secara sederhana, <em>Smart Contract</em> adalah program komputer yang berjalan di atas blockchain. Program ini menyimpan aturan transaksi langsung di dalam kode. Bayangkan seperti mesin penjual otomatis (Vending Machine): Anda memasukkan uang, memilih produk, dan mesin secara otomatis memberikan barangnya tanpa perlu pelayan toko. Jika syarat (uang cukup) terpenuhi, aksi (barang keluar) langsung dieksekusi.</p>

  <h3>Logika Sederhana: "If-This-Then-That"</h3>
  <p>Smart Contract bekerja dengan logika pemrograman dasar: <em>"Jika kondisi X terpenuhi, maka lakukan tindakan Y."</em> Karena kode ini ditanam di blockchain, kontrak tersebut bersifat transparan, otomatis, dan yang paling penting adalah <strong>Immutable</strong>—tidak dapat diubah atau dibatalkan oleh siapa pun setelah diterbitkan.</p>
  
  <img src="/images/content/smart-contract-gallery.png" alt="Visualisasi Logika Eksekusi Smart Contract" />
  <p style="text-align: center; font-size: 0.875rem; color: #71717a; margin-top: -1.5rem;">Automasi transaksi tanpa perantara melalui kode kriptografi.</p>

  <h3>Siklus Hidup Pembuatan Smart Contract</h3>
  <p>Bagi pengembang (<em>developer</em>), pembuatan kontrak pintar melibatkan beberapa tahap krusial:</p>
  <ul>
    <li><strong>Konsep:</strong> Menentukan masalah apa yang ingin diselesaikan secara otomatis (misal: sistem voting atau penggalangan dana).</li>
    <li><strong>Coding:</strong> Menulis aturan kontrak menggunakan bahasa pemrograman khusus seperti <strong>Solidity</strong> (untuk Ethereum).</li>
    <li><strong>Testing:</strong> Karena sifatnya yang tidak bisa diubah, kontrak harus diuji secara ketat di jaringan percobaan (<em>Testnet</em>) menggunakan koin simulasi sebelum diluncurkan.</li>
    <li><strong>Deployment:</strong> Menerbitkan kontrak ke jaringan utama (<em>Mainnet</em>). Di tahap ini, aturan kontrak menjadi aktif dan mulai memproses transaksi nyata.</li>
  </ul>

  <h3>Memahami Biaya: Apa itu Gas Fee?</h3>
  <p>Menjalankan kode di blockchain membutuhkan sumber daya komputasi. Biaya untuk setiap aktivitas ini disebut sebagai <strong>Gas Fee</strong>.</p>
  <ul>
    <li><strong>Gas:</strong> Unit pengukuran untuk jumlah pekerjaan komputasi yang dilakukan oleh jaringan.</li>
    <li><strong>Penentuan Biaya:</strong> Semakin rumit kode kontrak Anda, semakin banyak <em>Gas</em> yang dibutuhkan. Jika Anda memasang batas biaya terlalu rendah, transaksi Anda mungkin gagal diproses oleh jaringan.</li>
  </ul>

  <h3>Implementasi dan Masa Depan</h3>
  <p>Penggunaan <em>Smart Contract</em> kini telah mengubah berbagai industri digital:</p>
  <ul>
    <li><strong>DeFi (Decentralized Finance):</strong> Memungkinkan pinjam-meminjam uang secara global tanpa bank.</li>
    <li><strong>Ekonomi Kreator (NFT):</strong> Mengatur pembayaran royalti otomatis bagi seniman setiap kali karya mereka dijual kembali di pasar sekunder.</li>
    <li><strong>DAO (Governance):</strong> Menjalankan organisasi secara otomatis berdasarkan hasil voting suara komunitas tanpa pemimpin pusat.</li>
  </ul>

  <p>Meskipun revolusioner, <em>Smart Contract</em> tetap memiliki risiko. Karena kodenya tidak bisa diubah, kesalahan kecil dalam penulisan (<em>bug</em>) bisa menjadi celah bagi peretas. Oleh karena itu, perusahaan besar biasanya melakukan <strong>Audit Keamanan</strong> oleh pihak ketiga sebelum meluncurkan kontrak mereka. Memahami logika di balik teknologi ini adalah kunci untuk melihat masa depan otomasi digital yang lebih transparan dan efisien.</p>

  <hr style="margin-top: 3rem; border: none; border-top: 1px solid #e5e5e5;" />
  <div style="font-size: 0.875rem; color: #71717a; margin-top: 1rem; background-color: #fafafa; padding: 1rem; border-radius: 8px;">
    <strong>Sumber Referensi:</strong>
    <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
      <li>Artikel: <a href="https://hedera.com/learning/how-to-create-a-smart-contract/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Hedera (How to Create Smart Contract)</a></li>
      <li>Ilustrasi: <a href="https://image.web.id/images/how-to-make-a-smart-contract-work-for-the-insuranc.png" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Image.web.id</a></li>
      <li>Thumbnail: <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" style="color: #5200cc; text-decoration: underline;">Pexels</a></li>
    </ul>
  </div>
`;

export const articlesData: ArticleData[] = [
  {
    id: "1",
    title: "What is Web3: A Beginner's Guide",
    excerpt:
      "Kenali konsep dasar Web3 dan bagaimana ia akan mengubah cara kita berinteraksi di internet dari sentralisasi ke desentralisasi.",
    topic: "Web3 Basics",
    readTime: "5 min read",
    date: "Sep 01, 2025",
    thumbnail: "/images/content/web3-basics.jpg",
    slug: "/content/apa-itu-web3",
    featured: true,
    authorName: "Asep Jamaludin",
    authorAvatar: "/images/sepp.png",
    content: contentWeb3Basics,
  },
  {
    id: "2",
    title: "What is Blockchain & How Does It Work?",
    excerpt:
      "Penjelasan sederhana tentang teknologi buku besar digital di balik revolusi Web3 tanpa istilah teknis yang memusingkan.",
    topic: "Technology",
    readTime: "5 min read",
    date: "Sep 03, 2025",
    thumbnail: "/images/content/blockchain.jpg",
    slug: "/content/apa-itu-blockchain",
    authorName: "Muh. Lazuardi",
    authorAvatar: "/images/lazz.png",
    content: contentBlockchain,
  },
  {
    id: "4",
    title: "What is a Crypto Wallet?",
    excerpt:
      "Pahami fungsi sebenarnya dari dompet digital, perbedaan Hot dan Cold wallet, serta cara kerja kunci kriptografi.",
    topic: "Wallet",
    readTime: "7 min read",
    date: "Sep 07, 2025",
    thumbnail: "/images/content/wallet.jpg",
    slug: "/content/crypto-wallet",
    authorName: "Asep Jamaludin",
    authorAvatar: "/images/sepp.png",
    content: contentWallet,
  },
  {
    id: "7",
    title: "Internet Evolution: Web1 → Web3",
    excerpt:
      "Jelajahi sejarah evolusi internet dari sekadar membaca informasi hingga era di mana kita bisa memiliki aset digital secara utuh.",
    topic: "History",
    readTime: "6 min read",
    date: "Sep 18, 2025",
    thumbnail: "/images/content/evolusi.jpg",
    slug: "/content/evolusi-internet",
    authorName: "Muh. Lazuardi",
    authorAvatar: "/images/lazz.png",
    content: contentEvolusi,
  },
  {
    id: "8",
    title: "Myths & Facts About Crypto Wallet Security",
    excerpt:
      "Apakah dompet digital benar-benar aman? Mari kita kupas mitos peretasan dan fakta tentang pentingnya menjaga Seed Phrase.",
    topic: "Security",
    readTime: "6 min read",
    date: "Sep 15, 2025",
    thumbnail: "/images/content/security.jpg",
    slug: "/content/mitos-fakta-wallet",
    authorName: "Asep Jamaludin",
    authorAvatar: "/images/sepp.png",
    content: contentSecurity,
  },
  {
    id: "9",
    title: "Green Blockchain: An Eco-Friendly Solution",
    excerpt:
      "Menjawab kekhawatiran lingkungan. Kenali inovasi Proof of Stake dan bagaimana Web3 mendukung aksi keberlanjutan iklim.",
    topic: "Environment",
    readTime: "5 min read",
    date: "Sep 08, 2025",
    thumbnail: "/images/content/green.jpg",
    slug: "/content/green-blockchain",
    authorName: "Muh. Lazuardi",
    authorAvatar: "/images/lazz.png",
    content: contentGreen,
  },
  {
    id: "11",
    title: "A Guide to Creating Your First Smart Contract",
    excerpt:
      "Mengenal logika self-executing code yang memungkinkan transaksi otomatis tanpa perantara di jaringan blockchain.",
    topic: "Development",
    readTime: "5 min read",
    date: "Sep 20, 2025",
    thumbnail: "/images/content/smart-contract.jpg",
    slug: "/content/panduan-smart-contract",
    authorName: "Asep Jamaludin",
    authorAvatar: "/images/sepp.png",
    content: contentSmartContract,
  },
];
