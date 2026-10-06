import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Hari peluncuran sebuah aplikasi atau website biasanya dirayakan: tim berkumpul, pemilik bisnis tersenyum, dan semua orang merasa proyek besar akhirnya selesai. Dua atau tiga bulan kemudian, suasananya sering berbeda. Ada fitur kecil yang perlu diubah, ada laporan yang angkanya janggal, ada pengguna yang kesulitan, dan sertifikat keamanan yang tiba-tiba kedaluwarsa. Pertanyaan yang muncul sama: siapa yang bertanggung jawab sekarang, dan berapa biayanya?",
  },
  {
    type: "p",
    text: "Banyak bisnis memperlakukan peluncuran sebagai garis akhir, padahal sebenarnya itu garis awal. Software yang berjalan di dunia nyata hidup di lingkungan yang terus berubah: sistem operasi diperbarui, pustaka yang dipakai menemukan celah keamanan, perilaku pengguna berubah, volume data membengkak, dan kebutuhan bisnis bergeser. Software yang tidak dirawat akan perlahan menurun, bukan karena dibuat buruk, tetapi karena dunia di sekitarnya bergerak.",
  },
  {
    type: "p",
    text: "Artikel ini menjelaskan apa saja yang termasuk pemeliharaan aplikasi, mengapa hal ini perlu direncanakan sejak awal, bagaimana menyusun anggaran dan perjanjian layanan yang masuk akal, serta apa yang sebaiknya Anda minta dari pengembang sebelum proyek dinyatakan selesai. Cocok bagi pemilik bisnis yang akan, sedang, atau baru saja meluncurkan aplikasi atau website.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Pemeliharaan adalah bagian dari kepemilikan software, bukan biaya kejutan; rencanakan sejak sebelum proyek dimulai",
      "Pemeliharaan mencakup perbaikan bug, pembaruan keamanan, pemantauan, pencadangan, dan pengembangan kecil berkelanjutan",
      "Perjanjian layanan yang jelas menetapkan apa yang ditanggung, berapa waktu respons, dan siapa yang dihubungi saat terjadi masalah",
      "Dokumentasi, akses, dan kepemilikan kode harus diserahterimakan dengan jelas saat peluncuran",
      "Anggaran pemeliharaan yang wajar lebih murah daripada memperbaiki kerusakan setelah terjadi",
    ],
  },
  { type: "h2", text: "Mengapa software perlu dirawat" },
  {
    type: "p",
    text: "Berbeda dengan barang fisik, software tidak aus karena dipakai. Namun ia tetap menua, karena hal-hal di sekelilingnya berubah. Beberapa penyebab paling umum di antaranya adalah sebagai berikut.",
  },
  {
    type: "ul",
    items: [
      "Keamanan: celah baru ditemukan secara berkala pada sistem operasi, kerangka kerja, dan pustaka pihak ketiga; tanpa pembaruan, celah itu tetap terbuka",
      "Kompatibilitas: peramban, ponsel, dan sistem operasi terus berubah, sehingga tampilan atau fitur yang dulu berjalan bisa bermasalah",
      "Layanan pihak ketiga: penyedia pembayaran, peta, email, atau pesan dapat mengubah API atau aturan mereka, dan integrasi yang tidak disesuaikan akan berhenti bekerja",
      "Pertumbuhan data: tabel yang cepat pada seribu baris bisa lambat pada sejuta baris tanpa penyesuaian",
      "Perubahan bisnis: produk baru, aturan pajak, struktur organisasi, atau proses yang berubah membutuhkan penyesuaian di sistem",
      "Pengetahuan yang hilang: orang yang memahami sistem berpindah, dan tanpa dokumentasi, perbaikan sederhana menjadi mahal",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1774645215883-14d1553f3fa0",
    alt: "Satu set kunci pas logam di dalam kotak perkakas",
    caption: "Software bisnis yang sehat dirawat oleh tim atau mitra yang jelas, bukan dibiarkan sampai bermasalah.",
  },
  { type: "h2", text: "Apa saja yang termasuk pemeliharaan" },
  {
    type: "p",
    text: "Pemeliharaan sering dianggap hanya memperbaiki bug. Kenyataannya, cakupannya lebih luas, dan biasanya dibagi menjadi beberapa jenis.",
  },
  {
    type: "h3",
    text: "Pemeliharaan korektif",
  },
  {
    type: "p",
    text: "Memperbaiki kesalahan yang ditemukan setelah aplikasi dipakai. Seberapa teliti pengujian dilakukan, selalu ada hal yang baru terlihat saat banyak orang memakainya dengan cara yang tidak terduga. Perbaikan korektif menangani masalah seperti tombol yang tidak berfungsi, perhitungan yang keliru, atau halaman yang gagal dimuat pada kondisi tertentu.",
  },
  {
    type: "h3",
    text: "Pemeliharaan preventif dan keamanan",
  },
  {
    type: "p",
    text: "Mencegah masalah sebelum terjadi: memperbarui pustaka dan kerangka kerja, menambal celah keamanan, memperpanjang sertifikat, memeriksa konfigurasi server, dan meninjau hak akses. Pekerjaan ini jarang terlihat dari luar, tetapi sering kali menentukan apakah bisnis Anda aman dari insiden yang merugikan.",
  },
  {
    type: "h3",
    text: "Pemantauan, pencadangan, dan pemulihan",
  },
  {
    type: "p",
    text: "Pemantauan memastikan Anda tahu saat ada masalah sebelum pelanggan mengeluh: server yang lambat, kesalahan yang meningkat, atau ruang penyimpanan yang hampir penuh. Pencadangan yang berjalan otomatis perlu diuji secara berkala dengan benar-benar memulihkannya, karena cadangan yang tidak pernah diuji belum tentu bisa dipakai ketika dibutuhkan. Rencana pemulihan menjelaskan siapa melakukan apa jika sistem mati.",
  },
  {
    type: "h3",
    text: "Pemeliharaan adaptif",
  },
  {
    type: "p",
    text: "Menyesuaikan aplikasi dengan perubahan lingkungan, seperti versi peramban baru, perubahan API penyedia pembayaran, atau perubahan regulasi yang memengaruhi proses di sistem. Jenis ini sering tidak terhindarkan: bila tidak dilakukan, aplikasi akan berhenti berfungsi pada saat tertentu.",
  },
  {
    type: "h3",
    text: "Pengembangan dan perbaikan berkelanjutan",
  },
  {
    type: "p",
    text: "Setelah dipakai, pengguna akan menemukan hal-hal yang bisa lebih baik, dan bisnis akan memunculkan kebutuhan baru. Ini bukan pemeliharaan dalam arti sempit, tetapi sebaiknya dianggarkan bersama karena memanfaatkan pemahaman tim yang sama atas sistem. Pisahkan dengan jelas antara perbaikan yang menjadi tanggungan garansi atau pemeliharaan dan fitur baru yang dihitung sebagai pekerjaan tambahan.",
  },
  { type: "h2", text: "Garansi bukan pemeliharaan" },
  {
    type: "p",
    text: "Banyak kontrak pengembangan menyertakan masa garansi, misalnya beberapa bulan setelah peluncuran. Garansi biasanya menutup perbaikan bug yang merupakan kesalahan pengembang dalam pekerjaan yang disepakati. Garansi umumnya tidak mencakup pembaruan keamanan berkelanjutan, penyesuaian akibat perubahan eksternal, pemantauan, atau fitur baru. Pastikan Anda memahami batas ini dan membaca bagian garansi dengan teliti dalam kontrak; tanyakan secara eksplisit apa yang terjadi ketika masa garansi berakhir.",
  },
  { type: "h2", text: "Menyusun perjanjian layanan yang jelas" },
  {
    type: "p",
    text: "Untuk aplikasi yang penting bagi operasional, pertimbangkan perjanjian pemeliharaan tertulis. Isinya tidak perlu rumit, tetapi harus menjawab hal-hal berikut.",
  },
  {
    type: "ol",
    items: [
      "Cakupan: apa saja yang termasuk, misalnya perbaikan bug, pembaruan keamanan, pemantauan, pencadangan, dan sejumlah jam pengembangan kecil per bulan",
      "Pengecualian: apa yang tidak termasuk dan dihitung terpisah, seperti fitur baru atau perubahan besar",
      "Tingkat prioritas dan waktu respons: seberapa cepat tanggapan untuk masalah mendesak dibanding permintaan biasa, dan pada jam apa layanan tersedia",
      "Saluran komunikasi: ke mana melaporkan masalah dan siapa yang menanggapi",
      "Pelaporan: laporan berkala tentang pekerjaan yang dilakukan, kondisi sistem, dan rekomendasi",
      "Biaya dan skema pembayaran: biaya tetap bulanan, paket jam, atau berdasarkan permintaan, beserta cara penghitungan kelebihan jam",
      "Durasi dan cara mengakhiri: berapa lama berlaku, kapan ditinjau, dan bagaimana proses serah terima bila Anda ingin berpindah mitra",
    ],
  },
  {
    type: "callout",
    title: "Jangan menunggu masalah besar untuk mencari mitra",
    text: "Mencari pengembang saat sistem sudah mati jauh lebih mahal dan menegangkan daripada memiliki mitra yang sudah mengenal sistem Anda. Tetapkan siapa yang dihubungi sebelum ada keadaan darurat.",
  },
  { type: "h2", text: "Memperkirakan anggaran pemeliharaan" },
  {
    type: "p",
    text: "Tidak ada angka tunggal yang cocok untuk semua aplikasi, jadi hindari janji persentase pasti dari siapa pun tanpa memahami sistem Anda. Biaya pemeliharaan bergantung pada ukuran dan kerumitan aplikasi, jumlah integrasi, tingkat kepentingan bagi operasional, kebutuhan ketersediaan, serta seberapa sering bisnis Anda berubah. Aplikasi yang melayani proses inti dengan banyak integrasi tentu membutuhkan perhatian lebih besar daripada website profil perusahaan yang sederhana.",
  },
  {
    type: "p",
    text: "Pendekatan yang lebih berguna adalah membahas pemeliharaan sebagai bagian dari perhitungan biaya kepemilikan sejak sebelum proyek dimulai. Minta pengembang menjelaskan komponen apa saja yang memerlukan biaya berulang, misalnya hosting, domain, lisensi, layanan pihak ketiga, dan jam pemeliharaan. Dengan begitu, Anda membandingkan penawaran dengan cara yang adil, karena penawaran termurah di awal bisa saja yang paling mahal dalam beberapa tahun.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1707902665498-a202981fb5ac",
    alt: "Seseorang duduk di meja dengan kalkulator dan buku catatan",
    caption: "Tinjauan berkala bersama tim pengembang membantu bisnis merencanakan perbaikan sebelum masalah muncul.",
  },
  { type: "h2", text: "Yang harus diserahterimakan saat peluncuran" },
  {
    type: "p",
    text: "Kemudahan merawat aplikasi sangat ditentukan oleh apa yang diserahkan di akhir proyek. Pastikan hal-hal berikut tersedia sebelum Anda menyatakan proyek selesai dan melunasi pembayaran akhir.",
  },
  {
    type: "ul",
    items: [
      "Akses dan kepemilikan: akun domain, hosting, repositori kode, basis data, dan layanan pihak ketiga terdaftar atas nama bisnis Anda, bukan atas nama pengembang pribadi",
      "Kode sumber dan riwayat perubahannya, lengkap dengan petunjuk cara menjalankan dan menerapkannya",
      "Dokumentasi: gambaran arsitektur, daftar integrasi, struktur data, dan prosedur penting seperti cara melakukan pembaruan dan memulihkan cadangan",
      "Daftar kredensial dan kunci yang disimpan secara aman, beserta siapa yang berwenang mengelolanya",
      "Panduan pengguna dan pelatihan singkat untuk tim yang akan memakai dan mengelola sistem",
      "Daftar masalah yang sudah diketahui dan rencana perbaikannya",
      "Prosedur yang disepakati untuk melaporkan masalah dan meminta perubahan",
    ],
  },
  { type: "h2", text: "Membangun kebiasaan yang membuat pemeliharaan lebih murah" },
  {
    type: "p",
    text: "Sebagian besar biaya pemeliharaan bisa ditekan dengan kebiasaan sederhana di sisi bisnis. Latih pengguna agar melaporkan masalah dengan informasi yang cukup: apa yang dilakukan, apa yang terjadi, dan kapan. Kumpulkan permintaan perubahan dalam satu daftar dan prioritaskan, daripada mengirimkannya satu per satu sebagai keadaan darurat. Tinjau kondisi sistem bersama pengembang secara berkala, misalnya setiap kuartal, untuk membahas pembaruan yang perlu dilakukan dan rencana pengembangan. Dan jangan menunda pembaruan penting karena takut mengganggu; pembaruan kecil yang rutin jauh lebih aman daripada pembaruan besar yang tertunda bertahun-tahun.",
  },
  { type: "h2", text: "Pemeliharaan website dibanding aplikasi bisnis" },
  {
    type: "p",
    text: "Tingkat pemeliharaan yang dibutuhkan berbeda antara website profil perusahaan dan aplikasi bisnis yang menjalankan proses inti. Website profil umumnya cukup dengan pembaruan keamanan, pemantauan ketersediaan, pencadangan, dan perbaruan konten berkala. Aplikasi bisnis dengan banyak pengguna, transaksi, dan integrasi memerlukan pemantauan yang lebih ketat, uji pemulihan yang rutin, serta jalur dukungan yang lebih cepat karena gangguan langsung memengaruhi operasional.",
  },
  {
    type: "p",
    text: "Karena itu, jangan menyalin paket pemeliharaan begitu saja dari satu sistem ke sistem lain. Mulailah dengan menilai dampak jika sistem berhenti selama satu jam, satu hari, atau satu minggu, lalu tetapkan tingkat layanan yang sepadan dengan dampak tersebut.",
  },
  { type: "h2", text: "Kesalahan yang sering terjadi" },
  {
    type: "ul",
    items: [
      "Menganggap proyek selesai di hari peluncuran dan tidak menganggarkan apa pun sesudahnya",
      "Mendaftarkan domain, hosting, atau akun penting atas nama pengembang, sehingga bisnis sulit mengambil alih",
      "Tidak pernah menguji pemulihan dari cadangan sampai benar-benar dibutuhkan",
      "Menunda pembaruan keamanan berbulan-bulan karena merasa sistem baik-baik saja",
      "Mengandalkan satu orang yang memahami sistem tanpa dokumentasi",
      "Mencampuradukkan garansi dengan pemeliharaan sehingga timbul perselisihan saat ada masalah",
      "Memilih mitra pemeliharaan semata berdasarkan harga termurah tanpa melihat kemampuan dan responsivitas",
    ],
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Memiliki aplikasi atau website berarti memiliki sesuatu yang perlu dirawat, sama seperti kendaraan atau bangunan. Perawatan yang terencana jauh lebih murah dan tenang daripada perbaikan darurat. Bicarakan pemeliharaan sebelum proyek dimulai, pastikan serah terima akses dan dokumentasi dilakukan dengan benar, tetapkan perjanjian layanan yang jelas, dan jadikan tinjauan berkala sebagai kebiasaan. Dengan begitu, software Anda tetap aman, cepat, dan relevan bagi bisnis yang terus tumbuh.",
  },
  {
    type: "cta",
    title: "Butuh mitra yang merawat aplikasi atau website Anda?",
    text: "Tim AG·SORA menyediakan layanan pemeliharaan, pemantauan, dan pengembangan berkelanjutan untuk aplikasi yang kami bangun maupun yang sudah Anda miliki. Konsultasinya gratis, tanpa komitmen.",
    href: "/contact",
    label: "Hubungi Kami",
  },
];
