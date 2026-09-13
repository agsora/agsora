import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Enam bulan pengerjaan. Anggaran terpakai habis. Sistemnya akhirnya jadi, lengkap dengan semua fitur yang diminta. Tiga bulan setelah peluncuran, sebagian besar tim diam-diam kembali ke spreadsheet lama. Tidak ada yang secara resmi menyebutnya gagal — tetapi semua orang tahu.",
  },
  {
    type: "p",
    text: "Ketika project software tidak berhasil, penjelasan yang muncul biasanya bersifat teknis: aplikasinya lambat, fiturnya kurang, vendornya kurang cakap. Kadang itu benar. Tetapi jika ditelusuri lebih dalam, akar masalahnya hampir selalu sudah ada jauh sebelum baris kode pertama ditulis: tujuan yang kabur, pengguna yang tidak dilibatkan, ruang lingkup yang terlalu besar, dan adopsi yang tidak pernah direncanakan.",
  },
  {
    type: "p",
    text: "Kabar baiknya, penyebab-penyebab ini bisa dikenali dan dicegah. Artikel ini membahas sembilan penyebab paling umum project software gagal, tanda peringatan dininya, dan apa yang bisa dilakukan untuk menyelamatkan project yang mulai goyah.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Kegagalan project jarang disebabkan oleh pilihan teknologi",
      "Masalah yang tidak didefinisikan dengan terukur membuat keberhasilan mustahil dinilai",
      "Pengguna sehari-hari harus terlibat sejak perancangan, bukan hanya saat pelatihan",
      "Ruang lingkup besar sekaligus menumpuk risiko di satu titik",
      "Adopsi adalah bagian dari project, bukan urusan setelahnya",
    ],
  },
  { type: "h2", text: "Kegagalan jarang soal teknologi" },
  {
    type: "p",
    text: "Teknologi untuk membangun sistem bisnis saat ini sudah sangat matang. Hampir semua kebutuhan umum — transaksi, laporan, integrasi, aplikasi mobile — bisa dibangun dengan andal. Karena itu, ketika project gagal, pertanyaan yang lebih berguna bukan “teknologi apa yang salah”, melainkan “keputusan apa yang salah, dan kapan keputusan itu diambil”.",
  },
  {
    type: "p",
    text: "Sebagian besar keputusan yang menentukan diambil di minggu-minggu awal: masalah apa yang ingin diselesaikan, siapa yang dilibatkan, seberapa besar ruang lingkupnya, dan bagaimana keberhasilan akan diukur. Kesalahan di tahap ini sangat murah untuk diperbaiki saat masih di atas kertas, dan sangat mahal ketika sudah menjadi sistem yang berjalan.",
  },
  { type: "h2", text: "Penyebab 1: Masalah yang dipecahkan tidak jelas" },
  {
    type: "p",
    text: "Project yang dimulai dari kalimat “kami butuh sistem baru” tanpa mendefinisikan masalah spesifik akan sulit dinilai keberhasilannya. Setiap orang punya bayangan berbeda tentang apa yang dianggap selesai. Manajemen membayangkan laporan real-time, tim operasional membayangkan input yang lebih cepat, keuangan membayangkan rekonsiliasi otomatis. Sistem yang dibangun akhirnya mencoba memuaskan semua bayangan itu dan tidak benar-benar menyelesaikan satu pun.",
  },
  {
    type: "p",
    text: "Rumuskan tujuan dalam kalimat yang bisa diukur. Sistem yang dibangun untuk menjawab masalah yang jelas jauh lebih mudah dirancang, diuji, dan dievaluasi.",
  },
  {
    type: "ul",
    items: [
      "Mempercepat tutup buku bulanan",
      "Menghilangkan input ganda antara penjualan dan gudang",
      "Mengurangi selisih stok antara sistem dan fisik",
      "Membuat status pesanan bisa dilihat pelanggan tanpa bertanya",
    ],
  },
  { type: "h2", text: "Penyebab 2: Pengguna sehari-hari tidak dilibatkan" },
  {
    type: "p",
    text: "Keputusan tentang sistem sering diambil di tingkat manajemen, sementara yang menjalankan sistem setiap hari adalah staf operasional: kasir, admin gudang, tim sales, staf keuangan. Ketika mereka baru dilibatkan saat pelatihan, biasanya muncul banyak hal yang ternyata tidak sesuai kenyataan lapangan — urutan kerja yang berbeda, pengecualian yang sering terjadi, atau langkah yang terlalu lambat untuk jam sibuk.",
  },
  {
    type: "p",
    text: "Pada titik itu, perbaikannya sudah mahal. Lebih buruk lagi, pengguna yang merasa sistem dipaksakan kepada mereka cenderung mencari cara untuk tidak memakainya. Libatkan beberapa perwakilan pengguna sejak tahap perancangan, dan minta mereka mencoba rancangan sedini mungkin.",
  },
  { type: "h2", text: "Penyebab 3: Ruang lingkup terlalu besar untuk sekali jalan" },
  {
    type: "p",
    text: "Project yang mencoba mengganti seluruh sistem sekaligus menanggung risiko yang menumpuk di satu titik. Semakin panjang jarak antara awal pengerjaan dan hasil yang bisa dicoba, semakin besar kemungkinan asumsi awal sudah tidak relevan saat sistem akhirnya jadi. Bisnis berubah, orang berganti, dan prioritas bergeser selama berbulan-bulan pengerjaan.",
  },
  {
    type: "callout",
    title: "Prinsip yang menyelamatkan banyak project",
    text: "Lebih baik satu modul yang benar-benar dipakai tim daripada sepuluh modul yang selesai tetapi tidak ada yang menggunakannya. Pecah project menjadi tahap yang masing-masing menghasilkan sesuatu yang bisa dipakai.",
  },
  {
    type: "p",
    text: "Pendekatan bertahap juga memberi keuntungan lain: pelajaran dari tahap pertama membuat tahap berikutnya lebih tepat sasaran, dan tim merasakan manfaat lebih cepat sehingga dukungan terhadap project tumbuh alih-alih memudar.",
  },
  { type: "h2", text: "Penyebab 4: Perubahan kebutuhan tidak dikelola" },
  {
    type: "p",
    text: "Kebutuhan berubah — itu wajar dan hampir tidak bisa dihindari. Yang bermasalah adalah ketika perubahan diterima terus-menerus tanpa perhitungan ulang timeline dan biaya. Setiap perubahan kecil terasa masuk akal, tetapi jika dijumlahkan, project melar jauh dari rencana. Anggaran habis, jadwal molor, dan bagian inti yang paling penting justru belum selesai.",
  },
  {
    type: "p",
    text: "Sepakati mekanisme perubahan sejak awal: setiap permintaan dicatat, dampaknya terhadap waktu dan biaya dihitung, lalu diputuskan secara sadar apakah dikerjakan sekarang, ditunda ke tahap berikutnya, atau dibatalkan.",
  },
  { type: "h2", text: "Penyebab 5: Tidak ada pemilik project dari sisi bisnis" },
  {
    type: "p",
    text: "Project software yang sepenuhnya diserahkan ke tim IT atau vendor kehilangan kompas bisnisnya. Keputusan tentang prioritas, aturan bisnis, dan kompromi harus diambil oleh orang yang memahami bisnis dan punya wewenang. Tanpa pemilik seperti ini, keputusan penting menggantung, atau diambil oleh orang yang tidak memahami dampaknya.",
  },
  {
    type: "p",
    text: "Pemilik project tidak harus memahami teknologi. Yang dibutuhkan adalah waktu yang cukup, pemahaman proses, dan wewenang untuk memutuskan. Jika orang yang tepat terlalu sibuk untuk terlibat, itu sinyal bahwa project belum benar-benar menjadi prioritas.",
  },
  { type: "h2", text: "Penyebab 6: Keputusan yang lambat" },
  {
    type: "p",
    text: "Vendor sering menunggu: menunggu persetujuan rancangan, menunggu data contoh, menunggu keputusan tentang aturan tertentu. Setiap penantian kecil terlihat tidak berbahaya, tetapi dijumlahkan bisa menambah berminggu-minggu pada jadwal. Tetapkan batas waktu untuk keputusan dan pastikan ada orang yang bertanggung jawab memberikannya.",
  },
  { type: "h2", text: "Penyebab 7: Data diremehkan" },
  {
    type: "p",
    text: "Sistem baru membutuhkan data yang bersih: produk, pelanggan, saldo awal, dan data master lain. Pekerjaan membersihkan dan memindahkan data sering dianggap urusan kecil di akhir project, padahal bisa memakan waktu sangat lama. Banyak peluncuran tertunda bukan karena aplikasinya belum siap, tetapi karena datanya belum siap.",
  },
  { type: "h2", text: "Penyebab 8: Adopsi tidak direncanakan" },
  {
    type: "p",
    text: "Sistem dianggap selesai ketika diserahkan, padahal keberhasilannya baru terbukti ketika tim benar-benar memakainya. Pelatihan satu kali, tanpa pendampingan, tanpa kesediaan memperbaiki hal kecil yang mengganggu, hampir pasti membuat sebagian pengguna kembali ke cara lama.",
  },
  {
    type: "p",
    text: "Rencanakan adopsi sebagai bagian dari project: pelatihan untuk setiap jenis pengguna, pendampingan di minggu-minggu awal, saluran untuk melaporkan kendala, dan tanggal yang jelas kapan cara lama tidak lagi dipakai.",
  },
  { type: "h2", text: "Penyebab 9: Komunikasi yang macet" },
  {
    type: "p",
    text: "Project yang bermasalah hampir selalu didahului periode hening yang panjang. Tidak ada kabar dari vendor, dan tidak ada yang bertanya dari sisi klien. Ketika akhirnya ada pertemuan, masalah sudah menumpuk. Pembaruan rutin yang singkat — bahkan ketika tidak ada kemajuan besar — jauh lebih sehat daripada laporan besar yang jarang.",
  },
  { type: "h2", text: "Tanda peringatan dini" },
  {
    type: "ul",
    items: [
      "Belum ada hasil yang bisa dicoba setelah berminggu-minggu pengerjaan",
      "Daftar perubahan terus bertambah tanpa ada yang dicoret",
      "Pertemuan rutin sering dibatalkan atau ditunda",
      "Pengguna sehari-hari belum pernah melihat rancangan sistem",
      "Jawaban atas pertanyaan sederhana semakin lama datangnya",
      "Data untuk migrasi belum mulai disiapkan",
    ],
  },
  {
    type: "p",
    text: "Satu tanda saja belum tentu berarti project akan gagal. Tetapi jika beberapa tanda muncul bersamaan, itu saat yang tepat untuk berhenti sejenak dan mengevaluasi arah, bukan terus melaju sambil berharap semuanya akan membaik sendiri.",
  },
  { type: "h2", text: "Menyelamatkan project yang mulai goyah" },
  {
    type: "ol",
    items: [
      "Hentikan penambahan fitur baru untuk sementara",
      "Kembali ke tujuan awal dan tentukan apa yang benar-benar inti",
      "Pangkas ruang lingkup ke bagian yang bisa segera dipakai",
      "Libatkan pengguna untuk mencoba apa yang sudah ada",
      "Sepakati ulang jadwal dan mekanisme komunikasi secara tertulis",
    ],
  },
  {
    type: "p",
    text: "Memangkas ruang lingkup sering terasa seperti kekalahan, padahal justru langkah paling realistis untuk menyelamatkan investasi yang sudah berjalan. Sistem kecil yang dipakai jauh lebih bernilai daripada sistem besar yang tidak pernah selesai.",
  },
  { type: "h2", text: "Ilustrasi: dua cara memulai project yang sama" },
  {
    type: "p",
    text: "Bayangkan dua perusahaan distribusi yang sama-sama ingin mengganti pencatatan manual dengan sistem pesanan dan stok. Perusahaan pertama langsung meminta vendor membangun sistem lengkap: pesanan, stok, pengiriman, penagihan, dan laporan, untuk semua cabang sekaligus. Pengguna baru dilibatkan saat pelatihan menjelang peluncuran. Setelah berbulan-bulan, sistem diluncurkan dan langsung dibanjiri keluhan karena alur pesanan tidak sesuai kebiasaan sales lapangan.",
  },
  {
    type: "p",
    text: "Perusahaan kedua memulai dengan satu tujuan terukur: menghilangkan input ganda pesanan antara sales dan gudang. Dua sales dan satu admin gudang dilibatkan sejak rancangan pertama. Modul pesanan dan stok diluncurkan lebih dulu di satu cabang, diperbaiki berdasarkan masukan, lalu diperluas. Penagihan dan laporan menyusul di tahap berikutnya. Perusahaan kedua mungkin terlihat lebih lambat di awal, tetapi sistemnya benar-benar dipakai — dan setiap tahap berikutnya dibangun di atas pelajaran nyata.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Siapa yang biasanya disalahkan ketika project gagal?" },
  {
    type: "p",
    text: "Biasanya vendor atau teknologi, karena itulah yang paling terlihat. Tetapi menyalahkan satu pihak jarang membantu. Sebagian besar kegagalan adalah hasil keputusan bersama: tujuan yang tidak dirumuskan, keterlibatan yang kurang, dan perubahan yang tidak dikelola. Evaluasi yang jujur melihat peran kedua pihak agar kesalahan yang sama tidak terulang di project berikutnya.",
  },
  { type: "h3", text: "Kapan sebaiknya menghentikan project?" },
  {
    type: "p",
    text: "Pertimbangkan menghentikan atau merombak project ketika tujuan bisnisnya sudah tidak relevan, ketika biaya untuk menyelesaikan jauh melampaui manfaat yang realistis, atau ketika tidak ada lagi dukungan dari pihak yang akan memakainya. Menghentikan project memang berat, tetapi melanjutkan project yang tidak akan dipakai hanya menambah kerugian.",
  },
  { type: "h2", text: "Checklist sebelum project dimulai" },
  {
    type: "ol",
    items: [
      "Masalah didefinisikan dengan tujuan yang terukur",
      "Pemilik project dari sisi bisnis sudah ditunjuk",
      "Perwakilan pengguna sehari-hari siap dilibatkan",
      "Ruang lingkup dipecah menjadi tahap yang bisa dipakai",
      "Mekanisme perubahan disepakati tertulis",
      "Persiapan data sudah direncanakan",
      "Rencana adopsi dan pelatihan sudah disusun",
    ],
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Project software yang berhasil jarang terjadi karena keberuntungan atau teknologi yang paling canggih. Ia terjadi karena masalahnya jelas, penggunanya dilibatkan, ruang lingkupnya realistis, perubahannya dikelola, dan adopsinya direncanakan. Kelima hal itu tidak membutuhkan anggaran besar — hanya disiplin untuk memikirkannya sebelum pengerjaan dimulai.",
  },
  {
    type: "cta",
    title: "Akan memulai project sistem baru?",
    text: "Diskusikan rencana Anda bersama tim AG·SORA sebelum pengerjaan dimulai. Kami bantu merumuskan tujuan yang terukur dan tahapan yang realistis.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
