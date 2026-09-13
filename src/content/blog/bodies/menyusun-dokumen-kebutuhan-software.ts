import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "“Kami butuh aplikasi seperti punya kompetitor, tapi lebih bagus.” Itu satu-satunya penjelasan yang diterima tiga vendor yang dihubungi. Tiga bulan kemudian, tiga penawaran datang dengan harga yang jauh berbeda, ruang lingkup yang tidak bisa dibandingkan, dan tidak ada yang benar-benar memahami apa yang sebenarnya dibutuhkan.",
  },
  {
    type: "p",
    text: "Menghubungi software house dengan penjelasan yang samar hampir selalu menghasilkan penawaran yang sulit dibandingkan. Setiap vendor menafsirkan kebutuhan dengan caranya sendiri, dan perbedaan tafsir itu baru terasa ketika pengerjaan sudah berjalan — saat itu, memperbaikinya jauh lebih mahal daripada meluruskannya di awal.",
  },
  {
    type: "p",
    text: "Kabar baiknya, menyusun dokumen kebutuhan tidak membutuhkan keahlian teknis. Artikel ini adalah panduan praktis menyusun dokumen kebutuhan sederhana yang bisa dipakai siapa pun sebelum menghubungi vendor mana pun.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Dokumen kebutuhan ditulis dari sudut pandang bisnis, bukan teknis",
      "Isinya mencakup latar belakang, pengguna, alur kerja saat ini, dan batasan",
      "Pisahkan kebutuhan wajib dari kebutuhan tambahan",
      "Kirim dokumen yang sama ke semua vendor agar penawaran bisa dibandingkan",
      "Dokumen akan berubah seiring diskusi, dan itu wajar",
    ],
  },
  { type: "h2", text: "Kenapa dokumen kebutuhan penting" },
  {
    type: "p",
    text: "Tanpa dokumen kebutuhan, setiap vendor menyusun asumsi sendiri tentang apa yang Anda maksud. Vendor A mungkin mengasumsikan Anda butuh aplikasi mobile lengkap dengan notifikasi push. Vendor B mungkin mengasumsikan cukup aplikasi web sederhana. Kedua asumsi itu valid tanpa penjelasan lebih lanjut, tetapi menghasilkan harga dan ruang lingkup yang sangat berbeda — dan Anda tidak akan tahu perbedaan itu sampai membandingkan detail penawaran.",
  },
  {
    type: "p",
    text: "Dokumen kebutuhan menyamakan titik awal semua vendor. Ini bukan tentang menulis spesifikasi teknis yang rumit, melainkan menjelaskan masalah bisnis Anda dengan cukup detail sehingga vendor bisa memberikan solusi yang relevan.",
  },
  { type: "h2", text: "Anda tidak perlu menulis spesifikasi teknis" },
  {
    type: "p",
    text: "Ini kesalahpahaman yang umum. Banyak pemilik bisnis merasa harus memahami istilah teknis atau menentukan teknologi yang dipakai sebelum bisa menghubungi vendor. Padahal, bagian teknis adalah pekerjaan vendor. Yang dibutuhkan dari Anda adalah pemahaman yang jelas tentang masalah, pengguna, dan hasil yang diinginkan.",
  },
  { type: "h2", text: "Isi yang sebaiknya ada" },
  { type: "h3", text: "1. Latar belakang" },
  {
    type: "p",
    text: "Jelaskan masalah apa yang ingin diselesaikan dan kenapa sekarang menjadi waktu yang tepat. Apakah karena bisnis bertumbuh, karena cara lama sudah tidak sanggup menangani volume, atau karena ada masalah spesifik yang berulang? Konteks ini membantu vendor memahami urgensi dan prioritas Anda.",
  },
  { type: "h3", text: "2. Pengguna" },
  {
    type: "p",
    text: "Siapa saja yang akan memakai sistem, dan apa peran masing-masing? Sebutkan jumlah pengguna per peran, lokasi kerja mereka, dan tingkat kenyamanan mereka dengan teknologi. Informasi ini memengaruhi keputusan desain yang penting, seperti seberapa sederhana antarmuka harus dibuat.",
  },
  { type: "h3", text: "3. Alur kerja saat ini" },
  {
    type: "p",
    text: "Jelaskan bagaimana pekerjaan dilakukan hari ini, langkah demi langkah, termasuk kendala yang dihadapi. Ini bagian paling berharga dari dokumen kebutuhan, karena menunjukkan kepada vendor bukan hanya apa yang Anda inginkan, tetapi juga apa yang selama ini tidak berjalan baik.",
  },
  { type: "h3", text: "4. Kebutuhan utama" },
  {
    type: "p",
    text: "Daftar hal yang wajib ada agar sistem dianggap berguna. Fokus pada hasil yang diinginkan, bukan fitur teknis spesifik. Misalnya, tulis “bisa melihat stok real-time per outlet” daripada “gunakan database yang mendukung replikasi”.",
  },
  { type: "h3", text: "5. Kebutuhan tambahan" },
  {
    type: "p",
    text: "Daftar hal yang bagus jika ada, tapi bisa menyusul di tahap berikutnya. Bagian ini sering dilewatkan, padahal sangat berguna: dengan memisahkan wajib dan tambahan, vendor bisa memberi penawaran bertahap, dan Anda punya ruang negosiasi ketika anggaran terbatas.",
  },
  { type: "h3", text: "6. Sistem yang sudah dipakai" },
  {
    type: "p",
    text: "Sebutkan aplikasi lain yang sedang dipakai dan yang mungkin perlu dihubungkan dengan sistem baru: software akuntansi, payment gateway, marketplace, atau sistem HR. Ini membantu vendor menilai kompleksitas integrasi sejak awal.",
  },
  { type: "h3", text: "7. Batasan" },
  {
    type: "p",
    text: "Sebutkan kisaran anggaran, target waktu peluncuran, atau aturan internal maupun regulasi yang harus diikuti. Batasan yang jelas membantu vendor menyesuaikan proposal agar realistis, alih-alih mengajukan solusi ideal yang jauh melampaui anggaran Anda.",
  },
  {
    type: "callout",
    title: "Ceritakan contoh kasus nyata",
    text: "Satu contoh kejadian nyata — misalnya bagaimana sebuah pesanan diproses dari awal sampai selesai, lengkap dengan pengecualian yang sering terjadi — sering jauh lebih jelas daripada daftar fitur yang panjang. Contoh seperti ini membantu vendor memahami detail yang sulit dijelaskan secara abstrak.",
  },
  { type: "h2", text: "Contoh kerangka dokumen sederhana" },
  {
    type: "ol",
    items: [
      "Latar belakang dan tujuan (dua sampai tiga paragraf)",
      "Daftar pengguna dan perannya",
      "Alur kerja saat ini, termasuk pengecualian",
      "Kebutuhan utama, ditulis sebagai daftar",
      "Kebutuhan tambahan, ditulis sebagai daftar terpisah",
      "Sistem yang perlu dihubungkan",
      "Anggaran, target waktu, dan batasan lain",
    ],
  },
  {
    type: "p",
    text: "Dokumen seperti ini bisa selesai dalam beberapa halaman. Tidak perlu sempurna — tujuannya memberi titik awal yang cukup jelas, bukan menjadi kontrak yang mengikat.",
  },
  { type: "h2", text: "Kirim dokumen yang sama ke semua vendor" },
  {
    type: "p",
    text: "Dengan dokumen yang sama, perbedaan penawaran menjadi lebih bermakna. Anda bisa melihat siapa yang benar-benar memahami kebutuhan, siapa yang melewatkan hal penting, dan siapa yang mengajukan pertanyaan lanjutan yang tepat. Vendor yang tidak mengajukan pertanyaan sama sekali setelah membaca dokumen kebutuhan patut dipertanyakan keseriusannya.",
  },
  { type: "h2", text: "Dokumen akan berubah, dan itu wajar" },
  {
    type: "p",
    text: "Diskusi dengan vendor hampir pasti memunculkan hal yang belum terpikir sebelumnya — pengecualian yang terlupakan, kebutuhan integrasi yang baru disadari, atau batasan teknis yang perlu dipertimbangkan. Perbarui dokumen seiring diskusi berlangsung, dan pastikan versi akhirnya menjadi acuan ruang lingkup dalam kontrak yang ditandatangani.",
  },
  { type: "h2", text: "Siapa yang sebaiknya menyusun dokumen ini" },
  {
    type: "p",
    text: "Idealnya, dokumen disusun oleh orang yang memahami proses bisnis dengan baik — bisa pemilik usaha, manajer operasional, atau kepala divisi terkait — bukan diserahkan sepenuhnya ke staf administrasi yang kurang memahami konteksnya. Jika memungkinkan, libatkan juga perwakilan pengguna yang akan memakai sistem sehari-hari untuk memastikan alur kerja yang dijelaskan akurat.",
  },
  { type: "h2", text: "Menyertakan tolok ukur keberhasilan" },
  {
    type: "p",
    text: "Tambahkan satu bagian singkat tentang bagaimana Anda akan menilai bahwa project ini berhasil. Misalnya, waktu tutup buku berkurang dari lima hari menjadi satu hari, atau selisih stok berkurang signifikan dalam tiga bulan pertama. Tolok ukur ini membantu vendor memahami prioritas sebenarnya, dan menjadi acuan bersama saat mengevaluasi hasil project di kemudian hari.",
  },
  { type: "h2", text: "Menyertakan tenggat waktu yang realistis" },
  {
    type: "p",
    text: "Jika ada alasan bisnis di balik tenggat waktu tertentu — misalnya harus siap sebelum musim ramai atau sebelum kontrak lama berakhir — sebutkan dengan jelas beserta alasannya. Tenggat waktu yang disertai konteks membantu vendor menilai apakah jadwal itu realistis, dan jika tidak, mereka bisa menjelaskan trade-off yang perlu dipertimbangkan lebih awal daripada di tengah pengerjaan.",
  },
  { type: "h2", text: "Ilustrasi: dua permintaan, dua hasil" },
  {
    type: "p",
    text: "Bayangkan sebuah toko bangunan yang menghubungi vendor dengan pesan singkat: “Kami butuh sistem kasir dan stok.” Vendor memberi harga berdasarkan sistem kasir standar. Setelah pengerjaan dimulai, baru diketahui bahwa toko ini butuh pencatatan stok per gudang, harga grosir untuk pelanggan tertentu, dan pembayaran termin — semua di luar asumsi awal vendor. Biaya tambahan dan jadwal molor menjadi tidak terhindarkan.",
  },
  {
    type: "p",
    text: "Bandingkan dengan toko bangunan lain yang menyusun dokumen kebutuhan sederhana: menjelaskan bahwa mereka punya dua gudang, sebagian pelanggan mendapat harga grosir dengan termin pembayaran, dan butuh laporan stok gabungan. Vendor bisa memberi penawaran yang akurat sejak awal, dan tidak ada kejutan besar di tengah jalan.",
  },
  { type: "h2", text: "Menggunakan dokumen ini sebagai alat internal juga" },
  {
    type: "p",
    text: "Manfaat dokumen kebutuhan tidak berhenti pada komunikasi dengan vendor. Proses menyusunnya sering mengungkap perbedaan pemahaman di internal perusahaan sendiri — divisi yang satu mengira prosesnya berjalan satu arah, padahal kenyataannya sudah berubah tanpa mereka sadari. Menyusun dokumen ini bersama beberapa perwakilan divisi bisa menjadi kesempatan menyelaraskan pemahaman internal sebelum bicara dengan pihak luar.",
  },
  { type: "h2", text: "Kesalahan umum saat menyusun dokumen kebutuhan" },
  {
    type: "ul",
    items: [
      "Menulis daftar fitur teknis tanpa menjelaskan masalah bisnisnya",
      "Tidak menyebutkan pengecualian dan kasus tidak normal",
      "Menyamakan semua kebutuhan sebagai wajib, tanpa prioritas",
      "Tidak menyebutkan sistem lain yang perlu terhubung",
      "Menyembunyikan batasan anggaran karena khawatir ditawar rendah",
    ],
  },
  {
    type: "p",
    text: "Menyembunyikan anggaran justru sering merugikan. Vendor yang tidak tahu batasan anggaran bisa mengajukan solusi yang jauh melampaui kemampuan Anda, membuang waktu kedua belah pihak untuk negosiasi yang seharusnya bisa dihindari sejak awal.",
  },
  { type: "h2", text: "Menyimpan dokumen sebagai acuan bersama" },
  {
    type: "p",
    text: "Setelah vendor dipilih, dokumen kebutuhan yang sudah diperbarui sebaiknya dilampirkan atau dirujuk dalam kontrak sebagai acuan ruang lingkup. Ini memberi kedua pihak pegangan yang jelas ketika terjadi perbedaan pemahaman di tengah project — Anda tinggal merujuk kembali ke dokumen yang sudah disepakati bersama, alih-alih mengandalkan ingatan tentang apa yang dibicarakan di rapat mana.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa panjang dokumen kebutuhan yang ideal?" },
  {
    type: "p",
    text: "Tidak ada patokan baku. Untuk project sederhana, dua hingga tiga halaman biasanya cukup. Untuk project yang lebih kompleks dengan banyak pengguna dan integrasi, dokumen bisa lebih panjang. Yang penting bukan panjangnya, tetapi kejelasannya.",
  },
  { type: "h3", text: "Apakah perlu melibatkan konsultan untuk menyusunnya?" },
  {
    type: "p",
    text: "Untuk kebanyakan bisnis, tidak perlu. Dokumen ini ditulis dari pemahaman bisnis Anda sendiri, yang paling dipahami oleh Anda dan tim internal. Konsultan bisa membantu untuk project yang sangat besar atau kompleks, tetapi bukan keharusan untuk memulai.",
  },
  { type: "h3", text: "Bagaimana jika kami tidak yakin apa yang dibutuhkan?" },
  {
    type: "p",
    text: "Tuliskan saja masalah yang dirasakan sejelas mungkin, meski solusinya belum jelas. Vendor yang baik akan membantu menerjemahkan masalah menjadi kebutuhan konkret lewat sesi diskusi, bahkan jika dokumen awal Anda masih kasar.",
  },
  { type: "h2", text: "Contoh singkat: dari masalah ke dokumen" },
  {
    type: "p",
    text: "Misalkan masalah Anda adalah “laporan penjualan gabungan dari tiga cabang selalu terlambat karena harus digabung manual dari tiga file Excel”. Dari kalimat ini saja, Anda sudah punya bahan untuk latar belakang, sekaligus petunjuk kebutuhan utama: laporan penjualan yang otomatis tergabung lintas cabang. Kembangkan dari titik ini — siapa yang menyusun laporan sekarang, seberapa sering dibutuhkan, dan format seperti apa yang paling mudah dibaca manajemen — dan dokumen kebutuhan yang solid akan terbentuk secara alami.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Dokumen kebutuhan yang baik adalah investasi kecil yang menghemat banyak waktu, biaya, dan kesalahpahaman di kemudian hari. Ia tidak membutuhkan keahlian teknis, hanya kejelasan tentang masalah dan tujuan Anda. Luangkan waktu menyusunnya sebelum menghubungi vendor mana pun, dan bandingkan penawaran yang Anda terima dengan jauh lebih percaya diri.",
  },
  {
    type: "cta",
    title: "Butuh bantuan menyusun kebutuhan project Anda?",
    text: "Tim AG·SORA bisa membantu memetakan kebutuhan Anda dalam sesi konsultasi gratis, sebelum Anda memutuskan apa pun.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
