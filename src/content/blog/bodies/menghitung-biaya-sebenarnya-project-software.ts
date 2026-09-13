import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Dua penawaran ada di meja Anda. Yang satu hampir separuh harga yang lain. Keduanya menjanjikan sistem yang sama, jadwal yang mirip, dan tim yang berpengalaman. Keputusannya terlihat mudah — sampai enam bulan kemudian tagihan tambahan mulai berdatangan.",
  },
  {
    type: "p",
    text: "Membandingkan project software hanya dari angka total penawaran adalah salah satu kesalahan paling mahal dalam pengadaan teknologi. Angka di halaman penawaran hanyalah sebagian dari biaya yang benar-benar akan Anda keluarkan. Sisanya muncul pelan-pelan: saat data harus dibersihkan, saat tim harus meluangkan waktu, saat kebutuhan berubah, dan saat sistem harus dirawat bertahun-tahun setelah diluncurkan. Artikel ini membantu Anda melihat gambaran utuhnya sebelum menandatangani apa pun.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Biaya project software terdiri dari biaya terlihat dan biaya yang sering terlewat",
      "Waktu tim internal dan migrasi data adalah biaya nyata meski tidak tercatat sebagai pengeluaran",
      "Bandingkan total biaya kepemilikan dalam rentang tiga tahun, bukan hanya harga awal",
      "Penawaran yang jauh lebih murah perlu dipertanyakan, bukan langsung dipilih",
      "Pertanyaan yang tepat ke vendor mengungkap biaya sebelum menjadi kejutan",
    ],
  },
  { type: "h2", text: "Kenapa angka penawaran menyesatkan" },
  {
    type: "p",
    text: "Setiap vendor menyusun penawaran dengan asumsinya sendiri. Satu vendor mungkin memasukkan migrasi data, pelatihan, dan tiga bulan dukungan setelah rilis. Vendor lain mungkin hanya menghitung pembuatan aplikasi, lalu menagih sisanya terpisah. Di atas kertas, yang kedua terlihat jauh lebih murah, padahal ruang lingkupnya sangat berbeda.",
  },
  {
    type: "p",
    text: "Masalah lainnya, penawaran hanya menggambarkan biaya dari sisi vendor. Biaya yang ditanggung perusahaan Anda sendiri — waktu karyawan, gangguan operasional, dan layanan pihak ketiga — hampir tidak pernah muncul di dokumen penawaran. Padahal biaya-biaya itulah yang sering menentukan apakah project terasa sepadan atau justru membebani.",
  },
  { type: "h2", text: "Biaya yang terlihat" },
  { type: "h3", text: "Biaya pengembangan" },
  {
    type: "p",
    text: "Ini adalah angka utama di penawaran: biaya merancang, membangun, dan menguji sistem sesuai ruang lingkup yang disepakati. Yang perlu diperiksa bukan hanya besarnya, tetapi apa saja yang tercakup. Apakah desain antarmuka termasuk? Apakah pengujian menyeluruh termasuk? Apakah deployment ke server termasuk? Setiap “tidak termasuk” adalah biaya yang akan muncul kemudian.",
  },
  { type: "h3", text: "Biaya pemeliharaan" },
  {
    type: "p",
    text: "Sistem yang sudah berjalan tetap membutuhkan perawatan: perbaikan bug, pembaruan keamanan, penyesuaian ketika ada perubahan kecil, dan pemantauan server. Biaya ini biasanya bulanan atau tahunan. Pastikan cakupannya jelas — apa yang termasuk perbaikan, dan apa yang dianggap pengembangan baru dengan biaya terpisah.",
  },
  { type: "h3", text: "Layanan pihak ketiga" },
  {
    type: "p",
    text: "Hampir setiap sistem modern bergantung pada layanan pihak lain. Server atau hosting, domain, sertifikat keamanan, payment gateway, layanan pengiriman email atau pesan, penyimpanan file, hingga layanan peta atau AI. Biaya-biaya ini sering berbasis pemakaian, sehingga bisa bertambah seiring bisnis tumbuh.",
  },
  { type: "h2", text: "Biaya yang sering terlewat" },
  { type: "h3", text: "Waktu tim internal" },
  {
    type: "p",
    text: "Project software menuntut keterlibatan orang yang paling memahami proses bisnis — dan orang itu biasanya juga orang yang paling sibuk. Mereka harus menghadiri sesi pemetaan kebutuhan, meninjau rancangan, menguji sistem, dan memvalidasi data. Waktu itu diambil dari pekerjaan rutin mereka. Jika tidak direncanakan, project tertunda karena orang kuncinya tidak pernah punya waktu, atau pekerjaan rutin terbengkalai karena mereka sibuk dengan project.",
  },
  { type: "h3", text: "Pembersihan dan migrasi data" },
  {
    type: "p",
    text: "Data lama hampir tidak pernah rapi. Ada duplikat, format berbeda, kolom kosong, dan data yang sudah tidak berlaku. Merapikannya butuh waktu, dan sering kali hanya tim Anda sendiri yang tahu data mana yang benar. Pekerjaan ini kerap diremehkan di awal lalu menjadi penyebab utama keterlambatan peluncuran.",
  },
  { type: "h3", text: "Penurunan produktivitas saat transisi" },
  {
    type: "p",
    text: "Selama beberapa minggu pertama, tim bekerja lebih lambat karena masih menyesuaikan diri dengan sistem baru. Transaksi yang dulu selesai dalam hitungan detik mungkin butuh waktu lebih lama. Ini normal dan sementara, tetapi dampaknya nyata — terutama jika peralihan dilakukan di musim paling sibuk.",
  },
  { type: "h3", text: "Perubahan ruang lingkup" },
  {
    type: "p",
    text: "Hampir setiap project menemukan kebutuhan yang belum terpikir di awal. Sebagian kecil bisa diakomodasi, sebagian lagi menambah pekerjaan. Menyiapkan cadangan anggaran untuk perubahan jauh lebih sehat daripada memaksakan ruang lingkup awal yang ternyata kurang tepat, atau terkejut ketika tagihan tambahan datang.",
  },
  { type: "h3", text: "Pelatihan dan dokumentasi" },
  {
    type: "p",
    text: "Sistem yang tidak dipahami pengguna tidak akan dipakai dengan benar. Pelatihan untuk berbagai jenis pengguna, panduan tertulis, dan pendampingan di minggu-minggu awal membutuhkan waktu dan kadang biaya. Jika tidak termasuk dalam penawaran, pastikan Anda tahu siapa yang akan menyediakannya.",
  },
  { type: "h3", text: "Biaya keluar" },
  {
    type: "p",
    text: "Biaya ini jarang dipikirkan: berapa biaya dan usaha yang dibutuhkan jika suatu hari Anda ingin berganti vendor atau berpindah sistem? Apakah source code dan dokumentasi diserahkan? Apakah data bisa diekspor utuh? Sistem yang sulit ditinggalkan memberi vendor posisi tawar yang kuat terhadap Anda.",
  },
  {
    type: "callout",
    title: "Pertanyaan yang layak diajukan ke setiap vendor",
    text: "Apa yang termasuk dan tidak termasuk dalam angka ini? Bagaimana perubahan kebutuhan dihitung? Berapa biaya menjalankan sistem ini setiap bulan setelah rilis? Jawaban yang jelas untuk ketiganya jauh lebih bernilai daripada penawaran yang sekadar murah.",
  },
  { type: "h2", text: "Menyusun total biaya kepemilikan tiga tahun" },
  {
    type: "p",
    text: "Cara paling adil membandingkan penawaran adalah menghitung total biaya kepemilikan dalam rentang waktu yang sama, misalnya tiga tahun. Angka ini tidak harus sempurna; tujuannya membuat semua komponen terlihat berdampingan sehingga perbedaan antar pilihan menjadi jelas.",
  },
  {
    type: "ol",
    items: [
      "Tuliskan biaya pengembangan sesuai penawaran, termasuk yang ditagih terpisah",
      "Tambahkan biaya pemeliharaan selama tiga tahun",
      "Perkirakan biaya layanan pihak ketiga, dengan memperhitungkan pertumbuhan pemakaian",
      "Perkirakan waktu tim internal yang dibutuhkan dan nilai waktunya",
      "Tambahkan cadangan untuk perubahan ruang lingkup",
      "Perkirakan pengembangan lanjutan yang kemungkinan dibutuhkan",
      "Bandingkan totalnya, bukan hanya baris pertama",
    ],
  },
  {
    type: "p",
    text: "Setelah dihitung dengan cara ini, penawaran termurah di awal cukup sering berakhir sebagai pilihan yang paling mahal. Sebaliknya, penawaran yang terlihat mahal kadang sudah mencakup banyak hal yang akan ditagih terpisah oleh vendor lain.",
  },
  { type: "h2", text: "Membandingkan penawaran secara berdampingan" },
  {
    type: "p",
    text: "Setelah beberapa penawaran masuk, susun perbandingan dalam satu tabel sederhana. Baris tabel berisi komponen biaya dan cakupan pekerjaan; kolomnya berisi masing-masing vendor. Setiap sel diisi dengan salah satu dari tiga kemungkinan: termasuk, tidak termasuk, atau tidak disebutkan. Kolom “tidak disebutkan” adalah yang paling penting, karena di situlah biaya tersembunyi biasanya bersembunyi.",
  },
  {
    type: "ul",
    items: [
      "Desain antarmuka dan jumlah revisi yang tercakup",
      "Pengujian dan perbaikan bug sebelum rilis",
      "Migrasi data dari sistem lama",
      "Integrasi dengan aplikasi yang sudah dipakai",
      "Pelatihan pengguna dan dokumentasi",
      "Masa perbaikan setelah rilis",
      "Biaya pemeliharaan bulanan",
      "Kepemilikan source code",
    ],
  },
  {
    type: "p",
    text: "Kirimkan daftar sel yang masih “tidak disebutkan” kepada setiap vendor dan minta jawaban tertulis. Setelah semua terisi, perbandingan harga baru benar-benar bermakna, karena Anda membandingkan ruang lingkup yang setara.",
  },
  { type: "h2", text: "Ilustrasi: dua penawaran yang tidak setara" },
  {
    type: "p",
    text: "Bayangkan dua penawaran untuk sistem pemesanan internal. Penawaran pertama jauh lebih murah, dengan ruang lingkup berupa daftar fitur singkat. Penawaran kedua lebih mahal, tetapi menjelaskan pemetaan proses, migrasi data pelanggan, pelatihan untuk tiga divisi, dan tiga bulan dukungan setelah rilis. Setelah tabel perbandingan diisi, ternyata penawaran pertama tidak mencakup migrasi, pelatihan, maupun dukungan — yang semuanya tetap dibutuhkan dan akan ditagih terpisah. Selisih harga yang tadinya terlihat besar menyempit drastis, dan keputusan menjadi soal kualitas serta kecocokan, bukan lagi soal harga.",
  },
  { type: "h2", text: "Negosiasi yang sehat dengan vendor" },
  {
    type: "p",
    text: "Menekan harga habis-habisan jarang menghasilkan project yang baik. Vendor yang terpaksa menerima harga terlalu rendah cenderung memotong di bagian yang tidak terlihat: pengujian, dokumentasi, atau kualitas kode. Negosiasi yang lebih sehat berfokus pada ruang lingkup. Kurangi fitur yang tidak mendesak ke tahap berikutnya, sepakati termin pembayaran yang terkait dengan hasil yang bisa dicoba, dan minta kejelasan tentang biaya perubahan. Dengan cara ini, anggaran tetap terkendali tanpa mengorbankan hal yang menentukan keberhasilan project.",
  },
  { type: "h2", text: "Tanda penawaran terlalu murah" },
  {
    type: "ul",
    items: [
      "Ruang lingkup ditulis sangat singkat dan umum",
      "Tidak ada penjelasan tentang pengujian, pelatihan, atau dukungan setelah rilis",
      "Vendor tidak mengajukan pertanyaan tentang proses bisnis Anda sebelum memberi harga",
      "Jadwal jauh lebih cepat daripada vendor lain tanpa penjelasan",
      "Tidak ada ketentuan tentang perubahan kebutuhan dan biayanya",
    ],
  },
  {
    type: "p",
    text: "Harga murah tidak selalu buruk. Vendor bisa saja lebih efisien, memakai komponen yang sudah jadi, atau memang sedang membangun portofolio. Tetapi perbedaan harga yang besar selalu layak ditanyakan secara langsung: apa yang membuat angka ini berbeda?",
  },
  { type: "h2", text: "Cara menekan biaya tanpa mengorbankan hasil" },
  {
    type: "ul",
    items: [
      "Mulai dari ruang lingkup inti yang benar-benar dibutuhkan, lalu kembangkan bertahap",
      "Rapikan data dan kebijakan internal sebelum project dimulai",
      "Siapkan satu penanggung jawab dari sisi bisnis yang punya waktu dan wewenang",
      "Pakai produk siap pakai untuk fungsi yang standar",
      "Putuskan kebutuhan dengan cepat agar vendor tidak menunggu",
    ],
  },
  {
    type: "p",
    text: "Poin terakhir sering diremehkan. Keterlambatan keputusan dari sisi klien adalah salah satu penyebab terbesar project molor, dan project yang molor hampir selalu lebih mahal bagi kedua pihak.",
  },
  { type: "h2", text: "Jangan lupakan tahun kedua dan ketiga" },
  {
    type: "p",
    text: "Anggaran project software sering disusun seolah-olah pekerjaan berakhir di hari peluncuran. Kenyataannya, tahun pertama setelah rilis biasanya justru memunculkan banyak permintaan baru. Pengguna yang mulai terbiasa menemukan cara kerja yang bisa dipercepat, manajemen meminta laporan tambahan, dan bisnis yang tumbuh membutuhkan kapasitas lebih besar.",
  },
  {
    type: "p",
    text: "Sediakan pos anggaran untuk pengembangan lanjutan di tahun kedua dan ketiga, terpisah dari biaya pemeliharaan. Dengan begitu, permintaan perbaikan yang wajar tidak harus menunggu siklus anggaran berikutnya, dan sistem terus mengikuti perkembangan bisnis alih-alih tertinggal lalu ditinggalkan. Sistem yang tidak pernah dikembangkan setelah rilis hampir selalu kembali dilengkapi spreadsheet tambahan — dan biaya-biaya lama pun pelan-pelan kembali.",
  },
  { type: "h2", text: "Kesalahan umum dalam menganggarkan project" },
  {
    type: "ul",
    items: [
      "Menganggarkan pembangunan, tetapi lupa menganggarkan pemeliharaan",
      "Menganggap waktu karyawan gratis",
      "Tidak menyisakan anggaran untuk perubahan",
      "Menetapkan anggaran sebelum kebutuhan dipetakan",
      "Memilih vendor hanya berdasarkan harga terendah",
    ],
  },
  { type: "h2", text: "Transparansi harga di AG·SORA" },
  {
    type: "p",
    text: "AG·SORA mempublikasikan harga mulai dari untuk setiap layanan dan produk di halaman Pricing, agar Anda punya gambaran sejak awal. Harga final menyesuaikan fitur, jumlah pengguna, integrasi, kompleksitas alur kerja, timeline, dan kebutuhan dukungan, dan biaya pihak ketiga dijelaskan terpisah. Semua itu dituangkan dalam proposal tertulis sebelum pengerjaan dimulai.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Biaya project software yang sebenarnya jarang sama dengan angka di halaman penawaran. Dengan melihat seluruh komponen — yang terlihat maupun yang tersembunyi — dan membandingkannya dalam rentang beberapa tahun, Anda bisa memilih bukan yang paling murah hari ini, tetapi yang paling masuk akal untuk bisnis Anda ke depan.",
  },
  {
    type: "cta",
    title: "Ingin gambaran biaya yang jujur sejak awal?",
    text: "Lihat harga mulai dari untuk setiap layanan AG·SORA, atau minta proposal lengkap dengan rincian yang termasuk dan tidak termasuk.",
    href: "/pricing",
    label: "Lihat Harga",
  },
];
