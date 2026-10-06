import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Banyak pemilik bisnis mengenal pola ini: setiap akhir bulan, seseorang di tim menghabiskan beberapa hari menyalin angka dari berbagai file, aplikasi, dan catatan ke satu lembar kerja, lalu mengirimkannya sebagai laporan. Saat laporan itu sampai di meja pemilik, kejadian yang dibahas sudah berlalu dua atau tiga minggu. Keputusan yang seharusnya bisa diambil lebih awal, seperti menambah stok barang laris atau menghentikan promo yang merugikan, sudah terlambat.",
  },
  {
    type: "p",
    text: "Dashboard bisnis hadir untuk mengubah pola itu. Alih-alih menunggu laporan bulanan, pemilik dan manajer bisa melihat kondisi bisnis kapan saja dari satu layar: penjualan hari ini, posisi kas, stok yang menipis, pesanan yang tertunda, atau performa tim. Namun dashboard yang baik bukan sekadar kumpulan grafik berwarna. Banyak dashboard dibuat dengan penuh semangat lalu ditinggalkan dalam sebulan karena tidak menjawab pertanyaan yang benar-benar penting.",
  },
  {
    type: "p",
    text: "Artikel ini membahas apa yang membuat dashboard berguna, bagaimana memilih metrik yang tepat, dari mana data seharusnya berasal, bagaimana merancang tampilan yang mudah dipahami, dan mengapa kualitas data lebih menentukan daripada tampilan. Cocok bagi pemilik bisnis yang sedang mempertimbangkan membangun dashboard sendiri atau bekerja sama dengan pengembang.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Dashboard yang berguna dimulai dari pertanyaan keputusan, bukan dari data yang kebetulan tersedia",
      "Sedikit metrik yang jelas lebih berharga daripada puluhan grafik yang membingungkan",
      "Setiap angka perlu definisi yang disepakati bersama, misalnya apa yang dihitung sebagai penjualan",
      "Dashboard hanya sebaik data di belakangnya; rapikan sumber data sebelum mempercantik tampilan",
      "Rancang untuk peran yang berbeda: pemilik, manajer, dan staf membutuhkan tampilan yang berbeda",
      "Mulai dari satu dashboard kecil yang benar-benar dipakai, lalu kembangkan",
    ],
  },
  { type: "h2", text: "Apa itu dashboard bisnis, dan apa yang bukan" },
  {
    type: "p",
    text: "Dashboard bisnis adalah tampilan ringkas yang mengumpulkan indikator terpenting dari berbagai sumber data dalam satu tempat, diperbarui secara otomatis, dan dirancang agar pembacanya bisa memahami keadaan dalam hitungan detik. Intinya ada tiga: ringkas, terkini, dan relevan untuk keputusan.",
  },
  {
    type: "p",
    text: "Dashboard bukan pengganti laporan terperinci. Laporan menjawab pertanyaan mendalam seperti mengapa margin produk tertentu turun; dashboard menunjukkan bahwa margin turun dan mengarahkan Anda ke tempat untuk menggali. Dashboard juga bukan galeri grafik. Setiap elemen di layar harus punya alasan: bila angka itu berubah, tindakan apa yang akan Anda ambil? Jika jawabannya tidak ada, elemen itu kemungkinan hanya dekorasi.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    alt: "Layar menampilkan grafik klik dan tayangan dengan garis biru berfluktuasi",
    caption: "Dashboard yang baik menjawab pertanyaan keputusan dalam hitungan detik, bukan menampilkan sebanyak mungkin data.",
  },
  { type: "h2", text: "Mulai dari keputusan, bukan dari data" },
  {
    type: "p",
    text: "Kesalahan paling umum adalah memulai dengan melihat data apa yang tersedia, lalu membuat grafik dari semuanya. Pendekatan yang lebih sehat adalah membalik urutannya: mulai dari keputusan yang sering Anda ambil, lalu tanyakan informasi apa yang diperlukan untuk mengambilnya dengan percaya diri.",
  },
  {
    type: "p",
    text: "Contohnya, seorang pemilik toko ingin tahu kapan harus memesan ulang barang. Informasi yang dibutuhkan adalah stok saat ini, kecepatan penjualan, dan waktu pengiriman pemasok. Seorang manajer penjualan ingin tahu prospek mana yang perlu dihubungi minggu ini; ia membutuhkan daftar prospek berdasarkan tahap dan lama tidak disentuh. Seorang direktur keuangan ingin tahu apakah kas cukup untuk tiga bulan ke depan; ia membutuhkan posisi kas, piutang jatuh tempo, dan utang yang akan dibayar.",
  },
  {
    type: "ol",
    items: [
      "Daftarkan 5 sampai 10 keputusan berulang yang paling berdampak bagi bisnis, beserta siapa yang mengambilnya",
      "Untuk tiap keputusan, tulis pertanyaan yang ingin dijawab dan seberapa sering perlu dilihat: setiap jam, harian, mingguan, atau bulanan",
      "Tentukan indikator yang menjawab pertanyaan itu, lalu cek apakah datanya benar-benar tersedia dan bisa dipercaya",
      "Prioritaskan keputusan yang paling sering terjadi atau paling mahal bila salah",
    ],
  },
  { type: "h2", text: "Memilih metrik yang tepat" },
  {
    type: "p",
    text: "Metrik yang baik punya beberapa ciri. Ia bisa ditindaklanjuti, artinya perubahan angkanya mengarah pada tindakan tertentu. Ia mudah dipahami tanpa penjelasan panjang. Ia dibandingkan dengan sesuatu, seperti target, periode sebelumnya, atau batas wajar, karena angka tanpa pembanding sulit dimaknai. Dan ia didefinisikan jelas, sehingga semua orang membacanya dengan arti yang sama.",
  },
  {
    type: "h3",
    text: "Contoh metrik menurut area bisnis",
  },
  {
    type: "ul",
    items: [
      "Penjualan: penjualan per hari dan per cabang, produk terlaris, rata-rata nilai transaksi, dan perbandingan dengan periode sebelumnya",
      "Keuangan: posisi kas, piutang yang jatuh tempo, utang yang akan dibayar, dan arus kas masuk serta keluar yang diperkirakan",
      "Persediaan: stok yang mendekati batas minimum, barang yang bergerak lambat, dan nilai persediaan",
      "Operasional: pesanan yang tertunda, waktu pemrosesan rata-rata, dan tingkat pengembalian atau komplain",
      "Pelanggan dan prospek: prospek baru, prospek menurut tahap, dan pelanggan yang lama tidak membeli",
      "Tim: kehadiran, pencapaian target, dan beban kerja, dengan tetap menghormati privasi karyawan",
    ],
  },
  {
    type: "callout",
    title: "Hati-hati dengan metrik pemanis",
    text: "Angka seperti jumlah kunjungan atau jumlah pengikut mudah naik, tetapi belum tentu berkaitan dengan hasil bisnis. Utamakan metrik yang dekat dengan uang, pelanggan, dan kualitas layanan, lalu gunakan metrik lain sebagai pendukung.",
  },
  { type: "h2", text: "Dari mana datangnya data" },
  {
    type: "p",
    text: "Dashboard hanya menampilkan apa yang masuk ke dalamnya. Pada kebanyakan bisnis, data tersebar di beberapa tempat: sistem kasir atau penjualan, aplikasi akuntansi, ERP, CRM, lembar kerja, dan kadang catatan manual. Tantangan terbesarnya bukan membuat grafik, melainkan menyatukan data dari sumber-sumber ini dengan benar.",
  },
  {
    type: "h3",
    text: "Sumber tunggal yang dipercaya",
  },
  {
    type: "p",
    text: "Idealnya, setiap angka punya satu sumber utama yang dianggap benar. Jika penjualan tercatat di sistem kasir dan juga di lembar kerja manual dengan angka berbeda, dashboard akan menampilkan perdebatan, bukan jawaban. Sebelum membangun dashboard, putuskan sistem mana yang menjadi acuan untuk setiap jenis data, dan hentikan pencatatan ganda yang tidak perlu.",
  },
  {
    type: "h3",
    text: "Integrasi dan pembaruan otomatis",
  },
  {
    type: "p",
    text: "Dashboard yang datanya harus diperbarui manual cepat kehilangan kepercayaan. Hubungkan dashboard ke sumber data melalui integrasi otomatis, baik lewat API, ekspor terjadwal, maupun koneksi langsung ke basis data. Tentukan seberapa segar data yang dibutuhkan: untuk stok dan penjualan harian mungkin pembaruan tiap jam cukup, sementara laporan keuangan mungkin cukup harian. Menjadikan semuanya real-time bukan selalu perlu dan bisa menambah biaya tanpa manfaat sepadan.",
  },
  {
    type: "h3",
    text: "Kualitas data",
  },
  {
    type: "p",
    text: "Dashboard memperlihatkan kualitas data dengan jujur, termasuk kekurangannya. Produk tanpa kategori, transaksi tanpa pelanggan, atau stok yang negatif akan terlihat sebagai angka janggal. Anggap ini manfaat tambahan: dashboard menjadi alat untuk menemukan dan memperbaiki masalah pencatatan. Bersiaplah untuk fase pembersihan data di awal, karena itu hampir selalu dibutuhkan.",
  },
  { type: "h2", text: "Merancang tampilan yang mudah dibaca" },
  {
    type: "p",
    text: "Setelah metrik dan data jelas, tampilan menentukan apakah dashboard akan dipakai. Beberapa prinsip sederhana sangat membantu.",
  },
  {
    type: "ul",
    items: [
      "Letakkan angka terpenting di bagian atas, besar, dan disertai perbandingan seperti naik atau turun dari periode sebelumnya",
      "Gunakan jenis grafik yang sesuai: garis untuk tren waktu, batang untuk perbandingan kategori, dan tabel untuk detail yang perlu dibaca persis",
      "Batasi jumlah elemen per layar; jika terlalu padat, pecah menjadi beberapa tampilan berdasarkan topik atau peran",
      "Gunakan warna dengan makna konsisten, misalnya merah hanya untuk hal yang perlu perhatian segera",
      "Sediakan penyaring yang mudah, seperti rentang tanggal, cabang, atau kategori, dan ingat pilihan terakhir pengguna",
      "Pastikan tampilan nyaman di ponsel, karena pemilik sering memeriksa dashboard saat tidak di kantor",
      "Tampilkan kapan data terakhir diperbarui agar pembaca tahu seberapa segar informasinya",
    ],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055",
    alt: "Layar komputer menampilkan dasbor analitik dengan tabel retensi pengguna",
    caption: "Rancangan yang sederhana dan konsisten membuat orang berani mengambil keputusan dari apa yang mereka lihat.",
  },
  { type: "h2", text: "Satu dashboard tidak cocok untuk semua orang" },
  {
    type: "p",
    text: "Pemilik bisnis, manajer operasional, kepala keuangan, dan staf lapangan punya pertanyaan yang berbeda. Dashboard yang mencoba melayani semuanya cenderung terlalu padat bagi pemilik dan terlalu dangkal bagi staf. Pertimbangkan beberapa tampilan berdasarkan peran.",
  },
  {
    type: "ul",
    items: [
      "Tampilan pemilik: gambaran besar seperti penjualan, kas, laba kasar, dan peringatan hal-hal yang menyimpang dari target",
      "Tampilan manajer: perincian per cabang, tim, atau produk, lengkap dengan kemampuan menelusuri sampai ke transaksi",
      "Tampilan operasional: daftar tindakan harian seperti pesanan tertunda, stok menipis, atau jadwal pengiriman",
      "Tampilan tim sales: prospek menurut tahap, tugas tindak lanjut, dan capaian target pribadi",
    ],
  },
  {
    type: "p",
    text: "Pengaturan hak akses juga penting. Tidak semua orang perlu melihat data keuangan atau gaji. Batasi apa yang dapat dilihat setiap peran, dan catat siapa yang mengakses data sensitif.",
  },
  { type: "h2", text: "Membangun sendiri, memakai alat siap pakai, atau pesan khusus" },
  {
    type: "p",
    text: "Ada beberapa jalur untuk mendapatkan dashboard. Alat dashboard siap pakai cocok untuk kebutuhan standar dan data yang sudah terstruktur: biayanya relatif rendah dan hasilnya cepat, tetapi ada keterbatasan dalam kustomisasi, integrasi dengan sistem khusus, dan hak akses yang rumit. Dashboard yang dibangun khusus lebih fleksibel, bisa menyatu dengan aplikasi yang sudah Anda pakai, dan mengikuti cara kerja bisnis, tetapi memerlukan investasi awal yang lebih besar dan pemeliharaan berkelanjutan.",
  },
  {
    type: "p",
    text: "Banyak bisnis memulai dengan alat siap pakai untuk satu atau dua dashboard penting, lalu beralih ke solusi khusus ketika kebutuhan melampaui kemampuannya. Keputusan ini sebaiknya didasarkan pada kerumitan sumber data, kebutuhan integrasi, jumlah pengguna, dan seberapa strategis dashboard tersebut bagi bisnis.",
  },
  { type: "h2", text: "Langkah memulai tanpa kewalahan" },
  {
    type: "ol",
    items: [
      "Pilih satu area dengan nilai terbesar, misalnya penjualan dan stok, bukan seluruh perusahaan",
      "Tuliskan definisi setiap metrik dan sumber datanya, lalu sepakati bersama tim terkait",
      "Rapikan data sumber seperlunya sebelum menghubungkannya",
      "Bangun versi pertama dengan 5 sampai 8 metrik utama dan uji bersama pengguna yang sesungguhnya",
      "Kumpulkan umpan balik: apa yang dipakai, apa yang diabaikan, dan pertanyaan apa yang masih belum terjawab",
      "Tambahkan tampilan atau metrik baru hanya bila ada kebutuhan keputusan yang jelas",
      "Tinjau dashboard secara berkala dan hapus yang sudah tidak dipakai agar tetap ramping",
    ],
  },
  { type: "h2", text: "Kesalahan yang sering terjadi" },
  {
    type: "ul",
    items: [
      "Membuat terlalu banyak grafik sehingga tidak ada yang tahu mana yang penting",
      "Tidak mendefinisikan metrik, sehingga dua orang membaca angka yang sama dengan arti berbeda",
      "Menghubungkan data yang belum rapi lalu menyalahkan dashboard saat angkanya janggal",
      "Merancang tanpa melibatkan pengguna sehari-hari",
      "Tidak ada pemilik yang bertanggung jawab atas pemeliharaan dan kebenaran data",
      "Menganggap dashboard selesai setelah diluncurkan, padahal bisnis dan pertanyaannya terus berubah",
      "Mengejar tampilan yang mengesankan, bukan keputusan yang lebih baik",
    ],
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Dashboard terbaik adalah yang dibuka setiap pagi tanpa perlu disuruh, karena menjawab pertanyaan yang memang sedang dipikirkan pemiliknya. Untuk sampai di sana, mulailah dari keputusan, pilih sedikit metrik yang bermakna, pastikan datanya dapat dipercaya, dan rancang tampilan sesuai orang yang memakainya. Dengan pendekatan bertahap, dashboard bukan proyek besar yang menakutkan, melainkan alat yang tumbuh bersama bisnis Anda.",
  },
  {
    type: "cta",
    title: "Ingin melihat kondisi bisnis Anda dalam satu layar?",
    text: "Tim AG·SORA membangun dashboard bisnis yang terhubung ke sistem kasir, ERP, atau data yang sudah Anda miliki, dengan hak akses sesuai peran. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/dashboard",
    label: "Konsultasi Gratis",
  },
];
