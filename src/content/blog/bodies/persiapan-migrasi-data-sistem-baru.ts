import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Aplikasinya sudah siap. Pelatihan sudah dijadwalkan. Tanggal peluncuran sudah diumumkan ke seluruh tim. Lalu seseorang membuka file data pelanggan lama — dan menemukan nama yang sama tercatat tujuh kali dengan ejaan berbeda, nomor telepon di kolom alamat, dan ratusan pelanggan yang sudah bertahun-tahun tidak aktif.",
  },
  {
    type: "p",
    text: "Dalam banyak project, pengembangan sistem selesai tepat waktu, tetapi peluncuran tertunda karena data lama belum siap dipindahkan. Migrasi data adalah pekerjaan yang paling sering diremehkan: terlihat seperti sekadar memindahkan file, padahal sebenarnya melibatkan keputusan bisnis tentang data mana yang benar, data mana yang dibawa, dan bagaimana memastikan tidak ada yang hilang di perjalanan. Artikel ini adalah panduan menyiapkan migrasi agar sistem baru dimulai dengan data yang bisa dipercaya.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Mulai persiapan data sejak awal project, bukan menjelang peluncuran",
      "Tidak semua data lama perlu dibawa; bedakan data master, transaksi, dan arsip",
      "Bersihkan data sebelum dipindahkan, bukan sesudahnya",
      "Lakukan migrasi percobaan dengan data sungguhan dan validasi hasilnya",
      "Siapkan saldo awal, batas waktu peralihan, dan rencana mundur",
    ],
  },
  { type: "h2", text: "Kenapa migrasi data sering meleset dari jadwal" },
  {
    type: "p",
    text: "Penyebab utamanya adalah waktu. Tim pengembang bisa membangun sistem sesuai jadwal, tetapi pembersihan data membutuhkan keputusan dari orang-orang bisnis yang memahami data tersebut. Keputusan seperti “pelanggan mana yang merupakan duplikat” atau “kode produk mana yang masih berlaku” tidak bisa diambil oleh vendor. Jika orang yang berwenang sibuk, pekerjaan ini tertunda sampai menjelang peluncuran — dan pada saat itu, waktunya sudah tidak cukup.",
  },
  {
    type: "p",
    text: "Penyebab kedua adalah kejutan. Kondisi data lama jarang diketahui dengan pasti sampai seseorang benar-benar memeriksanya. Kolom yang diharapkan terisi ternyata kosong, format tanggal berbeda antar tahun, atau ada data penting yang ternyata tersimpan di file pribadi seseorang, bukan di sistem utama.",
  },
  { type: "h2", text: "Langkah 1: Inventaris data" },
  {
    type: "p",
    text: "Sebelum membersihkan apa pun, ketahui dulu apa yang Anda miliki. Buat daftar semua sumber data yang akan dipindahkan ke sistem baru.",
  },
  {
    type: "ol",
    items: [
      "Di mana data disimpan: sistem lama, spreadsheet, dokumen, atau aplikasi lain",
      "Siapa pemilik atau penanggung jawab setiap sumber data",
      "Format data dan bagaimana cara mengekspornya",
      "Perkiraan jumlah data dan rentang tahunnya",
      "Seberapa sering data tersebut berubah",
    ],
  },
  {
    type: "p",
    text: "Langkah ini sering mengungkap sumber data yang tidak diketahui sebelumnya. Lebih baik menemukannya sekarang daripada setelah sistem baru berjalan dan seseorang bertanya ke mana data tertentu pergi.",
  },
  { type: "h2", text: "Langkah 2: Tentukan data yang benar-benar dibawa" },
  {
    type: "p",
    text: "Tidak semua data lama perlu dipindahkan. Semakin sedikit data yang dibawa, semakin sedikit yang harus dibersihkan, diuji, dan diperbaiki. Kelompokkan data menjadi tiga jenis dan perlakukan masing-masing dengan berbeda.",
  },
  { type: "h3", text: "Data master" },
  {
    type: "p",
    text: "Produk, pelanggan, pemasok, karyawan, dan daftar akun keuangan. Data ini hampir selalu wajib dibawa karena menjadi fondasi semua transaksi di sistem baru. Kualitas data master sangat menentukan kualitas seluruh sistem.",
  },
  { type: "h3", text: "Data transaksi" },
  {
    type: "p",
    text: "Penjualan, pembelian, dan pergerakan stok. Untuk sebagian besar bisnis, tidak perlu memindahkan seluruh riwayat transaksi. Yang dibutuhkan biasanya saldo awal dan transaksi yang masih terbuka, seperti pesanan yang belum terkirim atau tagihan yang belum dibayar.",
  },
  { type: "h3", text: "Data arsip" },
  {
    type: "p",
    text: "Riwayat transaksi bertahun-tahun yang dibutuhkan untuk referensi atau kewajiban penyimpanan. Data ini sering cukup disimpan sebagai arsip terpisah yang bisa diakses saat diperlukan, tanpa dimasukkan ke sistem baru.",
  },
  { type: "h2", text: "Langkah 3: Bersihkan sebelum dipindahkan" },
  {
    type: "ul",
    items: [
      "Hapus duplikat — pelanggan, pemasok, atau produk yang tercatat lebih dari sekali",
      "Seragamkan format tanggal, nomor telepon, satuan, dan penulisan nama",
      "Lengkapi kolom yang akan menjadi wajib di sistem baru",
      "Tandai data yang tidak aktif agar tidak ikut terbawa",
      "Perbaiki data yang jelas salah, seperti harga nol atau stok negatif",
    ],
  },
  {
    type: "p",
    text: "Membersihkan data di sistem lama sebelum migrasi hampir selalu lebih mudah daripada memperbaikinya di sistem baru. Di sistem baru, data yang salah sudah terhubung dengan transaksi, sehingga perbaikannya lebih rumit dan berisiko.",
  },
  {
    type: "callout",
    title: "Migrasi bukan momen untuk memperbaiki segalanya",
    text: "Godaan terbesar saat migrasi adalah sekalian merapikan seluruh data historis. Batasi pada data yang memengaruhi jalannya sistem baru. Sisanya bisa dirapikan setelah sistem berjalan, tanpa menunda peluncuran.",
  },
  { type: "h2", text: "Langkah 4: Tetapkan pemilik keputusan data" },
  {
    type: "p",
    text: "Setiap jenis data membutuhkan satu orang yang berwenang memutuskan: data mana yang benar ketika ada dua versi, data mana yang dianggap tidak aktif, dan aturan apa yang dipakai untuk menyeragamkan format. Tanpa pemilik yang jelas, keputusan kecil seperti ini bisa tertunda berhari-hari karena setiap orang menunggu orang lain memutuskan.",
  },
  { type: "h2", text: "Langkah 5: Petakan kolom lama ke kolom baru" },
  {
    type: "p",
    text: "Struktur data di sistem lama jarang sama persis dengan sistem baru. Satu kolom “alamat” di sistem lama mungkin harus dipecah menjadi jalan, kota, dan kode pos di sistem baru. Kategori produk lama mungkin tidak sama dengan kategori di sistem baru. Pemetaan ini perlu disusun tertulis dan disetujui sebelum migrasi dijalankan, agar tidak ada data yang hilang karena tidak memiliki tempat di sistem baru.",
  },
  { type: "h2", text: "Langkah 6: Migrasi percobaan dengan data sungguhan" },
  {
    type: "p",
    text: "Jangan menunggu hari peluncuran untuk memindahkan data pertama kali. Lakukan migrasi percobaan menggunakan salinan data asli ke lingkungan uji, lalu minta orang yang paling paham operasional memeriksa hasilnya. Mereka akan langsung menyadari kejanggalan yang tidak akan terlihat oleh siapa pun yang tidak menjalankan proses itu setiap hari.",
  },
  {
    type: "ul",
    items: [
      "Bandingkan jumlah data di sistem lama dan sistem baru",
      "Cocokkan saldo penting: stok, piutang, utang, dan saldo akun",
      "Periksa sampel acak secara detail, termasuk data yang tidak biasa",
      "Uji transaksi baru menggunakan data hasil migrasi",
      "Catat semua masalah dan perbaiki sebelum migrasi berikutnya",
    ],
  },
  {
    type: "p",
    text: "Untuk sistem yang kompleks, migrasi percobaan sebaiknya dilakukan lebih dari sekali. Setiap putaran biasanya menemukan masalah yang lebih kecil dari putaran sebelumnya, sampai hasilnya cukup bersih untuk peluncuran.",
  },
  { type: "h2", text: "Langkah 7: Siapkan saldo awal dan batas peralihan" },
  {
    type: "p",
    text: "Untuk stok dan keuangan, tetapkan tanggal batas yang jelas. Transaksi sebelum tanggal itu tercatat di sistem lama; transaksi sesudahnya di sistem baru. Saldo pada tanggal batas menjadi saldo awal sistem baru. Idealnya, lakukan hitung fisik stok sedekat mungkin dengan tanggal batas agar saldo awal benar-benar mencerminkan kondisi nyata.",
  },
  { type: "h2", text: "Langkah 8: Siapkan rencana mundur" },
  {
    type: "p",
    text: "Sebelum peralihan, pastikan ada cadangan lengkap data lama dan kesepakatan tertulis tentang apa yang dilakukan jika terjadi masalah besar di hari-hari pertama. Siapa yang memutuskan untuk kembali ke sistem lama? Dalam kondisi apa? Rencana ini jarang benar-benar dipakai, tetapi ketiadaannya membuat keputusan di saat genting jauh lebih sulit dan lebih lambat.",
  },
  { type: "h2", text: "Tantangan khusus migrasi dari spreadsheet" },
  {
    type: "p",
    text: "Migrasi dari sistem lama yang terstruktur relatif lebih mudah, karena datanya setidaknya mengikuti aturan tertentu. Migrasi dari spreadsheet jauh lebih menantang. Spreadsheet memberi kebebasan penuh kepada setiap orang yang mengisinya, sehingga satu kolom bisa berisi angka, teks, catatan, dan warna sel yang punya arti khusus hanya bagi pembuatnya.",
  },
  {
    type: "ul",
    items: [
      "Informasi yang disimpan lewat warna sel atau komentar, bukan kolom",
      "Beberapa file dengan struktur yang sedikit berbeda untuk data yang sama",
      "Rumus yang merujuk ke file lain yang mungkin sudah tidak ada",
      "Baris ringkasan dan subtotal yang bercampur dengan data asli",
      "Satu sel berisi beberapa informasi sekaligus",
    ],
  },
  {
    type: "p",
    text: "Untuk sumber seperti ini, sediakan waktu ekstra dan libatkan orang yang terbiasa mengisi file tersebut. Mereka tahu arti warna, singkatan, dan kebiasaan pencatatan yang tidak tertulis di mana pun. Tanpa mereka, data yang terlihat lengkap bisa kehilangan makna penting ketika dipindahkan.",
  },
  { type: "h2", text: "Checklist hari peralihan" },
  {
    type: "ol",
    items: [
      "Hentikan input di sistem lama sesuai tanggal batas yang disepakati",
      "Ambil cadangan lengkap data lama",
      "Lakukan hitung fisik stok jika relevan",
      "Jalankan migrasi final dengan skrip yang sudah diuji",
      "Validasi jumlah data dan saldo kunci bersama pemilik data",
      "Buka akses sistem baru untuk pengguna",
      "Siagakan tim pendamping untuk menjawab pertanyaan di hari pertama",
    ],
  },
  { type: "h2", text: "Komunikasikan jadwalnya ke seluruh tim" },
  {
    type: "p",
    text: "Migrasi berdampak pada semua orang yang memakai sistem. Umumkan jauh hari kapan input di sistem lama berhenti, apa yang harus dilakukan dengan transaksi yang terjadi di antara peralihan, dan ke mana melapor jika data terlihat salah. Tim yang tahu apa yang akan terjadi jauh lebih sabar menghadapi kendala kecil di minggu pertama dibanding tim yang tiba-tiba mendapati sistemnya berganti.",
  },
  { type: "h2", text: "Setelah peluncuran: pantau dengan ketat" },
  {
    type: "p",
    text: "Minggu-minggu pertama setelah peluncuran adalah masa paling kritis. Pantau laporan kunci setiap hari, cocokkan stok dengan hitung fisik secara berkala, dan sediakan saluran bagi pengguna untuk melaporkan data yang terlihat janggal. Masalah yang ditemukan cepat masih mudah diperbaiki; masalah yang dibiarkan berminggu-minggu akan menjalar ke banyak transaksi.",
  },
  { type: "h2", text: "Uji laporannya, bukan hanya datanya" },
  {
    type: "p",
    text: "Data yang berhasil dipindahkan belum tentu menghasilkan laporan yang benar. Kategori produk yang dipetakan sedikit berbeda bisa membuat laporan penjualan per kategori bergeser. Pelanggan yang digabung karena duplikat bisa membuat laporan piutang per pelanggan berubah. Karena itu, selain mencocokkan data, bandingkan juga beberapa laporan penting dari sistem lama dan sistem baru untuk periode yang sama. Perbedaan yang muncul harus bisa dijelaskan sebelum laporan dari sistem baru dipakai untuk mengambil keputusan.",
  },
  { type: "h2", text: "Berapa lama sistem lama perlu disimpan?" },
  {
    type: "p",
    text: "Jangan terburu-buru mematikan sistem lama. Simpan akses baca-saja untuk periode tertentu agar tim bisa merujuk data lama ketika ada pertanyaan, audit, atau keluhan pelanggan terkait transaksi sebelum peralihan. Tentukan juga bagaimana data arsip disimpan untuk jangka panjang, sesuai kebutuhan bisnis dan kewajiban penyimpanan dokumen yang berlaku bagi perusahaan Anda.",
  },
  { type: "h2", text: "Kesalahan umum dalam migrasi data" },
  {
    type: "ul",
    items: [
      "Memulai persiapan data menjelang peluncuran",
      "Memindahkan semua riwayat transaksi tanpa pertimbangan",
      "Tidak melakukan migrasi percobaan",
      "Validasi hanya dilakukan oleh tim teknis, tanpa pengguna bisnis",
      "Tidak menetapkan tanggal batas dan saldo awal yang jelas",
      "Tidak menyimpan cadangan data lama sebelum peralihan",
    ],
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Sistem baru hanya sebaik data yang dimasukkan ke dalamnya. Dengan memulai persiapan lebih awal, membawa hanya data yang diperlukan, membersihkannya sebelum dipindahkan, dan menguji hasilnya dengan data sungguhan, Anda memberi sistem baru awal yang bersih — dan memberi tim alasan untuk mempercayainya sejak hari pertama.",
  },
  {
    type: "cta",
    title: "Berencana pindah sistem dalam waktu dekat?",
    text: "Diskusikan kondisi data Anda bersama tim AG·SORA sebelum project dimulai. Masalah data yang ditemukan lebih awal jauh lebih murah diselesaikan.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
