import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Setiap pagi, seseorang di kantor Anda membuka email, menyalin data pesanan ke spreadsheet, lalu memindahkannya lagi ke sistem. Di siang hari, admin customer service menjawab pertanyaan yang sama untuk kesekian puluh kalinya: jam buka, cara pembayaran, status pengiriman. Di sore hari, laporan harian disusun ulang dari data yang itu-itu juga.",
  },
  {
    type: "p",
    text: "Tidak ada yang salah dengan orang-orang ini. Mereka mengerjakan tugasnya dengan baik. Masalahnya, sebagian besar waktu mereka habis untuk pekerjaan yang berulang, berpola, dan tidak membutuhkan pertimbangan manusia. Di sinilah otomatisasi berbasis AI mulai masuk akal — bukan untuk menggantikan orang, tetapi untuk memindahkan pekerjaan membosankan dari tangan mereka.",
  },
  {
    type: "p",
    text: "Tetapi AI juga mudah disalahgunakan: diterapkan karena sedang ramai dibicarakan, pada proses yang salah, tanpa batas yang jelas. Hasilnya bisa lebih banyak masalah daripada manfaat. Artikel ini membahas cara memulai AI automation dengan kepala dingin: memilih proses yang tepat, menetapkan batas, mengukur hasilnya, dan menghindari jebakan yang paling umum.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "AI automation paling berhasil pada pekerjaan berulang dengan pola yang jelas",
      "Mulai dari satu proses kecil, ukur, lalu perluas",
      "Tetapkan sejak awal mana yang boleh diputuskan otomatis dan mana yang harus melewati manusia",
      "Selalu sediakan jalur agar pekerjaan bisa diambil alih manusia",
      "Ukur waktu sebelum dan sesudah agar manfaatnya terbukti, bukan hanya terasa",
    ],
  },
  { type: "h2", text: "Otomatisasi dan AI: apa bedanya?" },
  {
    type: "p",
    text: "Otomatisasi sudah ada jauh sebelum AI populer. Aturan seperti “jika stok di bawah batas minimum, kirim notifikasi ke bagian pembelian” adalah otomatisasi berbasis aturan. Ia bekerja sangat baik untuk proses yang bisa dijelaskan dengan logika jika-maka yang pasti.",
  },
  {
    type: "p",
    text: "AI memperluas cakupan otomatisasi ke pekerjaan yang sulit dijelaskan dengan aturan pasti: membaca email yang ditulis dengan gaya bebas, memahami maksud pertanyaan pelanggan, merangkum dokumen panjang, atau mengambil informasi dari faktur dengan format yang berbeda-beda. Kekuatan ini datang dengan konsekuensi: hasil AI tidak selalu pasti benar, sehingga cara menerapkannya harus berbeda dari otomatisasi berbasis aturan.",
  },
  {
    type: "p",
    text: "Dalam praktik, solusi yang baik sering menggabungkan keduanya. AI dipakai untuk memahami masukan yang tidak terstruktur, sementara aturan yang pasti dipakai untuk keputusan yang berisiko. Misalnya, AI membaca email pesanan dan mengambil detailnya, lalu aturan memeriksa apakah stok cukup dan harga sesuai sebelum pesanan diproses.",
  },
  { type: "h2", text: "Menemukan kandidat pertama" },
  {
    type: "p",
    text: "Cara paling sederhana menemukan proses yang layak diotomatiskan adalah bertanya langsung kepada tim. Minta setiap orang mencatat pekerjaan yang mereka lakukan lebih dari beberapa kali seminggu dengan langkah yang hampir sama persis. Daftar itu biasanya sudah cukup untuk menentukan prioritas.",
  },
  { type: "h3", text: "Ciri proses yang cocok" },
  {
    type: "ul",
    items: [
      "Dilakukan berulang kali setiap hari atau minggu",
      "Langkah-langkahnya relatif konsisten",
      "Masukannya tersedia dalam bentuk digital: email, dokumen, formulir, atau data sistem",
      "Kesalahan sesekali bisa dideteksi dan diperbaiki sebelum berdampak besar",
      "Menghabiskan waktu orang yang seharusnya bisa mengerjakan hal lain",
    ],
  },
  { type: "h3", text: "Ciri proses yang sebaiknya tidak dimulai" },
  {
    type: "ul",
    items: [
      "Keputusan yang menyangkut uang dalam jumlah besar tanpa pemeriksaan",
      "Keputusan tentang orang, seperti rekrutmen atau penilaian kinerja",
      "Proses yang jarang terjadi dan setiap kasusnya berbeda",
      "Komunikasi sensitif, seperti menangani keluhan serius atau negosiasi",
      "Proses yang aturannya sendiri belum jelas di internal",
    ],
  },
  { type: "h2", text: "Contoh penerapan yang umum ditemui" },
  { type: "h3", text: "Menjawab pertanyaan pelanggan yang berulang" },
  {
    type: "p",
    text: "Pertanyaan tentang jam operasional, lokasi, cara pemesanan, atau kebijakan pengembalian bisa dijawab otomatis dengan informasi yang Anda kendalikan. Pertanyaan yang tidak bisa dijawab dengan yakin diteruskan ke petugas, lengkap dengan riwayat percakapannya.",
  },
  { type: "h3", text: "Mengambil data dari dokumen" },
  {
    type: "p",
    text: "Faktur pemasok, formulir pendaftaran, dan surat jalan bisa dibaca untuk mengambil informasi penting, lalu dimasukkan ke sistem. Data dengan tingkat keyakinan rendah ditandai untuk diperiksa manusia sebelum diproses.",
  },
  { type: "h3", text: "Merangkum dan mengelompokkan masukan" },
  {
    type: "p",
    text: "Ulasan pelanggan, keluhan, atau hasil survei dalam jumlah besar bisa dirangkum dan dikelompokkan berdasarkan tema. Tim tidak perlu membaca satu per satu untuk menemukan masalah yang paling sering muncul.",
  },
  { type: "h3", text: "Menyusun draf laporan dan dokumen" },
  {
    type: "p",
    text: "Draf laporan rutin, ringkasan rapat, atau balasan email standar bisa disiapkan otomatis dari data yang sudah ada. Manusia tetap memeriksa dan menyempurnakan sebelum dikirim, tetapi tidak lagi memulai dari halaman kosong.",
  },
  { type: "h2", text: "Tetapkan batas sejak awal" },
  {
    type: "p",
    text: "Sebelum menerapkan otomatisasi apa pun, tentukan dengan jelas mana yang boleh diputuskan sistem sendiri dan mana yang harus melewati persetujuan manusia. Untuk hal yang menyangkut uang, komitmen kepada pelanggan, atau data pribadi, sebaiknya selalu ada pemeriksaan manusia sebelum tindakan dijalankan.",
  },
  {
    type: "p",
    text: "Batas ini juga melindungi tim. Ketika semua orang tahu bahwa sistem hanya menyiapkan dan manusia yang memutuskan, kekhawatiran tentang AI yang “mengambil alih” pekerjaan berkurang, dan tanggung jawab atas setiap keputusan tetap jelas.",
  },
  {
    type: "callout",
    title: "AI bisa salah dengan sangat meyakinkan",
    text: "Model AI generatif dapat menghasilkan jawaban yang terdengar tepat tetapi keliru, termasuk angka atau fakta yang tidak ada. Batasi AI pada sumber informasi yang Anda kendalikan, dan jangan izinkan sistem membuat janji — harga, jadwal, atau kompensasi — tanpa konfirmasi manusia.",
  },
  { type: "h2", text: "Ukur sebelum dan sesudah" },
  {
    type: "p",
    text: "Catat berapa lama pekerjaan itu dikerjakan sebelum otomatisasi diterapkan, berapa sering terjadi kesalahan, dan berapa banyak volume yang ditangani. Tanpa angka pembanding, sulit menilai apakah otomatisasi benar-benar membantu atau hanya memindahkan pekerjaan ke tempat lain — misalnya dari mengetik data menjadi memeriksa hasil AI yang sering salah.",
  },
  {
    type: "ul",
    items: [
      "Waktu rata-rata untuk menyelesaikan satu tugas",
      "Jumlah tugas yang ditangani per hari",
      "Tingkat kesalahan yang ditemukan",
      "Persentase tugas yang masih harus diambil alih manusia",
      "Waktu tunggu pelanggan, jika prosesnya berhadapan dengan pelanggan",
    ],
  },
  { type: "h2", text: "Langkah menerapkan otomatisasi pertama" },
  {
    type: "ol",
    items: [
      "Pilih satu proses berulang dengan dampak yang terasa",
      "Dokumentasikan langkah-langkahnya seperti yang dikerjakan saat ini",
      "Catat angka pembanding: waktu, volume, dan kesalahan",
      "Tentukan batas keputusan otomatis dan titik pemeriksaan manusia",
      "Jalankan uji coba dalam skala kecil selama beberapa minggu",
      "Tinjau hasil, termasuk kasus yang gagal ditangani",
      "Perbaiki, lalu putuskan apakah layak diperluas",
    ],
  },
  {
    type: "p",
    text: "Mulai dari satu proses membuat evaluasi jauh lebih mudah. Otomatisasi yang diterapkan serentak ke banyak proses sekaligus sulit dinilai ketika ada yang tidak berjalan sesuai harapan, karena sulit mengetahui bagian mana yang menjadi sumber masalah.",
  },
  { type: "h2", text: "Mengantisipasi kasus yang tidak biasa" },
  {
    type: "p",
    text: "Sistem otomatis hampir pasti akan menemui kasus yang tidak terduga: email dengan format aneh, pertanyaan yang ambigu, atau dokumen yang buram. Rancang jalur yang jelas agar kasus seperti ini diteruskan ke manusia, bukan dipaksakan diproses. Simpan juga catatan yang memungkinkan Anda menelusuri mengapa sistem mengambil tindakan tertentu, sehingga kesalahan bisa dipelajari dan dicegah terulang.",
  },
  { type: "h2", text: "Perhatikan data dan kerahasiaan" },
  {
    type: "p",
    text: "Banyak layanan AI berjalan di server pihak ketiga. Memasukkan data pelanggan, data karyawan, atau dokumen internal ke layanan tersebut berarti data dikirim ke luar perusahaan. Pahami bagaimana penyedia menyimpan dan menggunakan data, pilih layanan yang ketentuannya sesuai kebijakan perusahaan, dan pastikan pengelolaan data pribadi mengikuti ketentuan pelindungan data yang berlaku di Indonesia.",
  },
  { type: "h2", text: "Kesalahan umum saat memulai" },
  {
    type: "ul",
    items: [
      "Memulai dari proses paling rumit karena ingin hasil yang terlihat spektakuler",
      "Tidak mengukur kondisi awal sehingga manfaat tidak bisa dibuktikan",
      "Membiarkan AI berkomunikasi langsung dengan pelanggan tanpa batas",
      "Tidak menyediakan jalur pengambilalihan oleh manusia",
      "Tidak melibatkan tim yang selama ini mengerjakan prosesnya",
      "Menganggap otomatisasi selesai setelah dipasang, tanpa dirawat",
    ],
  },
  {
    type: "p",
    text: "Poin terakhir sering terlupakan. Kebijakan, produk, dan pertanyaan pelanggan terus berubah. Otomatisasi yang tidak ditinjau secara berkala akan pelan-pelan tertinggal dari kenyataan dan mulai menghasilkan jawaban yang keliru.",
  },
  { type: "h2", text: "Libatkan tim, jangan hanya menginformasikan" },
  {
    type: "p",
    text: "Orang yang selama ini mengerjakan proses tersebut adalah sumber pengetahuan terbaik: mereka tahu pengecualian, jebakan, dan kasus yang sering membuat bingung. Libatkan mereka dalam merancang dan menguji otomatisasi. Selain menghasilkan sistem yang lebih baik, keterlibatan ini mengubah otomatisasi dari ancaman menjadi alat yang membantu pekerjaan mereka sendiri.",
  },
  { type: "h2", text: "Rencana 30 hari pertama" },
  {
    type: "ol",
    items: [
      "Minggu 1: kumpulkan daftar pekerjaan berulang dari tim dan pilih satu kandidat",
      "Minggu 1: catat kondisi awal — waktu, volume, dan kesalahan",
      "Minggu 2: rancang alur otomatisasi beserta titik pemeriksaan manusia",
      "Minggu 3: uji coba dalam skala kecil dengan data sungguhan",
      "Minggu 4: tinjau hasil, catat kasus yang gagal, dan putuskan langkah berikutnya",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah AI akan menggantikan karyawan?" },
  {
    type: "p",
    text: "Dalam penerapan yang sehat, AI mengambil alih bagian pekerjaan yang berulang, bukan seluruh peran seseorang. Admin yang tidak lagi mengetik ulang data bisa fokus memeriksa pengecualian, melayani pelanggan yang membutuhkan perhatian khusus, atau memperbaiki proses. Bagaimana waktu yang dihemat itu dipakai adalah keputusan manajemen, dan sebaiknya dikomunikasikan dengan terbuka kepada tim sejak awal.",
  },
  { type: "h3", text: "Apakah perlu tim IT sendiri?" },
  {
    type: "p",
    text: "Tidak selalu. Banyak otomatisasi bisa dirancang dan dijalankan bersama mitra teknologi. Yang tetap dibutuhkan dari internal adalah orang yang memahami prosesnya, bisa memvalidasi hasil, dan bertanggung jawab atas keputusan yang diambil berdasarkan keluaran sistem.",
  },
  { type: "h3", text: "Bagaimana menghitung apakah otomatisasi sepadan?" },
  {
    type: "p",
    text: "Bandingkan waktu dan kesalahan sebelum dan sesudah penerapan, lalu hitung nilai waktu yang dihemat terhadap biaya pembangunan, layanan AI, dan pemeliharaannya. Jangan lupa memasukkan waktu yang dibutuhkan untuk memeriksa hasil. Otomatisasi yang menghemat banyak waktu mengetik tetapi membutuhkan pemeriksaan ulang yang lama mungkin tidak sepadan seperti kelihatannya.",
  },
  { type: "h3", text: "Data apa yang sebaiknya tidak diproses dengan AI pihak ketiga?" },
  {
    type: "p",
    text: "Berhati-hatilah dengan data pribadi pelanggan dan karyawan, informasi keuangan yang belum dipublikasikan, kontrak, rahasia dagang, dan data kesehatan. Sebelum memasukkan data seperti ini ke layanan AI, pahami ketentuan penyedia tentang penyimpanan dan penggunaan data, dan pastikan sesuai dengan kebijakan perusahaan serta ketentuan pelindungan data yang berlaku. Jika ragu, mulailah dari data yang tidak sensitif atau data yang sudah dianonimkan.",
  },
  {
    type: "p",
    text: "Membuat daftar sederhana berisi jenis data yang boleh dan tidak boleh diproses membantu seluruh tim mengambil keputusan yang konsisten, tanpa harus bertanya setiap kali ingin memakai alat AI untuk pekerjaan sehari-hari.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "AI automation bukan tentang terlihat modern. Ini tentang mengembalikan waktu tim Anda dari pekerjaan yang membosankan ke pekerjaan yang benar-benar membutuhkan manusia. Mulailah dari satu proses kecil, tetapkan batas yang jelas, ukur hasilnya dengan jujur — dan biarkan hasil itu yang menentukan langkah berikutnya.",
  },
  {
    type: "cta",
    title: "Punya pekerjaan berulang yang menghabiskan waktu tim?",
    text: "Kami bantu memilih proses yang paling layak diotomatiskan lebih dulu, lengkap dengan batas keputusan dan cara mengukur hasilnya.",
    href: "/services/ai-automation",
    label: "Pelajari AI Automation",
  },
];
