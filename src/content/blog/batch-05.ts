import type { PostSource } from "@/config/blog";

export const posts: PostSource[] = [
  {
    slug: "penilaian-kinerja-yang-bisa-dipertanggungjawabkan",
    title: "Merancang Penilaian Kinerja yang Bisa Dipertanggungjawabkan",
    excerpt:
      "Penilaian kinerja yang hanya mengandalkan kesan atasan di akhir tahun sering terasa tidak adil. Kriteria yang jelas dan catatan sepanjang periode membuatnya lebih objektif.",
    category: "HR & Tim",
    publishedAt: "2026-07-06",
    tags: ["hris", "karyawan", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      alt: "Beberapa orang berdiskusi di meja kayu sambil mencatat",
    },
    body: [
      {
        type: "p",
        text: "Penilaian kinerja memengaruhi kenaikan gaji, promosi, dan motivasi karyawan. Karena dampaknya besar, penilaian yang terasa subjektif cepat menurunkan kepercayaan. Masalah yang paling umum: penilaian dilakukan setahun sekali berdasarkan ingatan atasan tentang beberapa minggu terakhir.",
      },
      { type: "h2", text: "Sepakati apa yang dinilai sejak awal" },
      {
        type: "p",
        text: "Karyawan sebaiknya tahu di awal periode apa yang akan dinilai dan seperti apa hasil yang dianggap baik. Target yang baru diumumkan saat penilaian bukan target, melainkan kejutan.",
      },
      { type: "h2", text: "Gabungkan hasil dan perilaku" },
      {
        type: "ul",
        items: [
          "Hasil kerja: target yang terukur sesuai peran, seperti penyelesaian project atau capaian penjualan",
          "Cara bekerja: kerja sama, tanggung jawab, dan ketepatan waktu, dengan contoh perilaku yang jelas",
        ],
      },
      {
        type: "p",
        text: "Menilai hasil saja bisa mendorong cara kerja yang merugikan tim. Menilai perilaku saja mudah menjadi subjektif. Kombinasi keduanya memberi gambaran yang lebih utuh.",
      },
      { type: "h2", text: "Catat sepanjang periode" },
      {
        type: "p",
        text: "Kebiasaan mencatat pencapaian dan masalah penting saat terjadi — oleh atasan maupun karyawan — mengurangi bias terhadap kejadian terakhir. Sistem HR yang mendukung catatan dan umpan balik berkala membantu penilaian akhir tidak bergantung pada ingatan.",
      },
      {
        type: "callout",
        title: "Umpan balik tidak menunggu akhir tahun",
        text: "Jika masalah kinerja pertama kali disampaikan saat penilaian tahunan, karyawan tidak pernah punya kesempatan memperbaikinya. Percakapan singkat yang rutin jauh lebih berguna daripada satu penilaian besar yang mengejutkan.",
      },
      { type: "h2", text: "Kurangi perbedaan standar antar atasan" },
      {
        type: "p",
        text: "Atasan yang berbeda cenderung memberi nilai dengan standar berbeda — ada yang murah hati, ada yang ketat. Sesi kalibrasi, di mana beberapa atasan membahas penilaian bersama, membantu menyamakan standar sebelum hasil diputuskan.",
      },
      { type: "h2", text: "Beri ruang bagi karyawan" },
      {
        type: "p",
        text: "Penilaian diri dan kesempatan menanggapi penilaian atasan membuat proses lebih terbuka. Karyawan sering mengetahui konteks yang tidak terlihat oleh atasan.",
      },
      { type: "h2", text: "Simpan riwayat dengan aman" },
      {
        type: "p",
        text: "Hasil penilaian adalah data sensitif. Batasi aksesnya kepada pihak yang berkepentingan, dan simpan riwayatnya dengan rapi agar keputusan terkait karier bisa dipertanggungjawabkan di kemudian hari.",
      },
    ],
  },
  {
    slug: "metrik-performa-tim-sales",
    title: "Metrik yang Layak Dipakai untuk Menilai Tim Sales",
    excerpt:
      "Angka penjualan penting, tapi tidak cukup untuk memahami kenapa sebuah tim berhasil atau tertinggal. Metrik yang tepat menunjukkan di tahap mana masalahnya.",
    category: "Penjualan & CRM",
    publishedAt: "2026-07-04",
    tags: ["crm", "sales", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      alt: "Seseorang mempresentasikan rencana di papan tulis kepada timnya",
    },
    body: [
      {
        type: "p",
        text: "Menilai tim sales hanya dari total penjualan di akhir bulan seperti melihat skor akhir pertandingan tanpa tahu jalannya permainan. Anda tahu hasilnya, tetapi tidak tahu apa yang perlu diperbaiki.",
      },
      { type: "h2", text: "Metrik hasil" },
      {
        type: "ul",
        items: [
          "Nilai penjualan terhadap target",
          "Jumlah transaksi yang dimenangkan",
          "Rata-rata nilai per transaksi",
          "Margin dari penjualan, bukan hanya omzet",
        ],
      },
      { type: "h2", text: "Metrik proses" },
      {
        type: "p",
        text: "Metrik proses menjelaskan hasil. Ketika penjualan turun, metrik ini membantu menemukan di mana masalahnya:",
      },
      {
        type: "ul",
        items: [
          "Jumlah peluang baru yang masuk",
          "Tingkat konversi antar tahap pipeline",
          "Lama rata-rata peluang dari kontak awal hingga keputusan",
          "Nilai pipeline aktif dibanding target periode berikutnya",
        ],
      },
      { type: "h2", text: "Membaca metrik bersama-sama" },
      {
        type: "p",
        text: "Satu metrik jarang cukup. Penjualan rendah dengan peluang baru yang sedikit menunjukkan masalah di pencarian prospek. Penjualan rendah dengan peluang banyak tetapi konversi kecil menunjukkan masalah di penawaran atau negosiasi. Tindakan perbaikannya sangat berbeda.",
      },
      {
        type: "callout",
        title: "Hati-hati dengan metrik aktivitas",
        text: "Jumlah telepon atau kunjungan mudah diukur, tetapi juga mudah dinaikkan tanpa hasil. Gunakan metrik aktivitas sebagai petunjuk, bukan tujuan — agar sales tidak mengejar angka kunjungan yang tidak menghasilkan apa-apa.",
      },
      { type: "h2", text: "Data harus bisa dipercaya dulu" },
      {
        type: "p",
        text: "Semua metrik ini bergantung pada data CRM yang diperbarui dengan disiplin. Jika sales jarang memperbarui status peluang, laporan akan terlihat rapi tetapi menyesatkan. Tahapan pipeline yang jelas dan kebiasaan memperbarui data harus datang lebih dulu.",
      },
      { type: "h2", text: "Sesuaikan dengan konteks" },
      {
        type: "p",
        text: "Target dan metrik yang sama belum tentu adil untuk semua sales. Wilayah, jenis pelanggan, dan pengalaman berbeda. Bandingkan kinerja dengan mempertimbangkan konteks, dan gunakan metrik untuk membantu sales berkembang — bukan hanya untuk memeringkat.",
      },
      { type: "h2", text: "Tinjau secara rutin" },
      {
        type: "p",
        text: "Tinjauan mingguan yang singkat terhadap pipeline dan konversi lebih berguna daripada evaluasi besar di akhir kuartal. Masalah yang terlihat lebih awal masih bisa diperbaiki dalam periode yang sama.",
      },
    ],
  },
  {
    slug: "merancang-hak-akses-pengguna",
    title: "Merancang Hak Akses Pengguna yang Aman",
    excerpt:
      "Memberi semua orang akses penuh memang praktis di awal. Seiring bisnis tumbuh, hak akses yang tidak dirancang menjadi salah satu risiko keamanan terbesar.",
    category: "Teknologi",
    publishedAt: "2026-07-02",
    tags: ["keamanan", "data"],
    cover: {
      src: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      alt: "Tangan mengetik di keyboard komputer di meja kerja putih",
    },
    body: [
      {
        type: "p",
        text: "Di awal penggunaan sistem, sering kali semua pengguna diberi akses yang sama agar tidak repot. Ketika jumlah pengguna bertambah, kebiasaan ini membuat data sensitif — gaji, harga modal, data pelanggan — bisa dilihat bahkan diubah oleh orang yang tidak memerlukannya.",
      },
      { type: "h2", text: "Prinsip akses secukupnya" },
      {
        type: "p",
        text: "Setiap pengguna sebaiknya hanya mendapat akses yang dibutuhkan untuk pekerjaannya. Prinsip ini membatasi dampak ketika terjadi kesalahan, penyalahgunaan, atau akun yang dibobol.",
      },
      { type: "h2", text: "Atur berdasarkan peran" },
      {
        type: "p",
        text: "Mengatur akses untuk setiap orang satu per satu cepat menjadi tidak terkendali. Pendekatan yang lebih rapi adalah membuat peran — misalnya kasir, supervisor, staf gudang, admin keuangan — dengan hak akses masing-masing, lalu menetapkan pengguna ke peran tersebut.",
      },
      { type: "h2", text: "Bedakan jenis akses" },
      {
        type: "ul",
        items: [
          "Melihat data",
          "Membuat data baru",
          "Mengubah data yang sudah ada",
          "Menghapus data",
          "Menyetujui transaksi",
          "Mengekspor data dalam jumlah besar",
        ],
      },
      {
        type: "p",
        text: "Seseorang mungkin perlu melihat laporan penjualan tanpa perlu mengubahnya. Pemisahan ini membuat akses bisa diberikan lebih tepat.",
      },
      {
        type: "callout",
        title: "Pisahkan yang membuat dan yang menyetujui",
        text: "Untuk transaksi yang menyangkut uang, orang yang membuat transaksi sebaiknya bukan orang yang menyetujuinya. Pemisahan tugas ini mengurangi risiko kesalahan maupun kecurangan yang tidak terdeteksi.",
      },
      { type: "h2", text: "Catat aktivitas penting" },
      {
        type: "p",
        text: "Sistem sebaiknya mencatat siapa melakukan apa dan kapan, terutama untuk perubahan data sensitif, penghapusan, dan persetujuan. Catatan ini penting untuk menelusuri masalah dan membantu kebutuhan audit.",
      },
      { type: "h2", text: "Tinjau secara berkala" },
      {
        type: "p",
        text: "Hak akses cenderung bertambah seiring waktu — karyawan pindah divisi tetapi akses lamanya tetap ada. Tinjau akses secara berkala, dan pastikan akses segera ditutup ketika karyawan keluar.",
      },
      { type: "h2", text: "Lindungi akun dengan kuat" },
      {
        type: "p",
        text: "Hak akses yang dirancang rapi tetap rentan jika kata sandi lemah atau dipakai bersama. Terapkan kata sandi yang kuat, verifikasi dua langkah untuk akun penting, dan jangan izinkan satu akun dipakai beberapa orang.",
      },
    ],
  },
  {
    slug: "landing-page-atau-website-lengkap",
    title: "Landing Page atau Website Lengkap?",
    excerpt:
      "Landing page lebih cepat dan murah dibuat, website lengkap lebih fleksibel. Pilihannya bergantung pada apa yang ingin Anda capai dalam waktu dekat.",
    category: "Website & Digital",
    publishedAt: "2026-06-30",
    tags: ["website", "biaya"],
    cover: {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      alt: "Tangan membuat sketsa rancangan tampilan halaman web di kertas",
    },
    body: [
      {
        type: "p",
        text: "Ketika memutuskan membuat kehadiran online, pertanyaan yang sering muncul adalah apakah cukup dengan satu landing page atau perlu website lengkap dengan banyak halaman. Keduanya melayani tujuan yang berbeda.",
      },
      { type: "h2", text: "Landing page" },
      {
        type: "p",
        text: "Landing page adalah satu halaman yang berfokus pada satu tujuan: mengumpulkan kontak, menjual satu produk, atau mengarahkan pengunjung ke satu tindakan.",
      },
      {
        type: "ul",
        items: [
          "Lebih cepat dan lebih terjangkau dibuat",
          "Pesan fokus, sehingga pengunjung tidak terdistraksi",
          "Cocok untuk kampanye iklan, peluncuran produk, atau acara",
          "Terbatas untuk menjelaskan banyak layanan",
          "Kurang ideal untuk mendatangkan pengunjung dari banyak kata kunci pencarian",
        ],
      },
      { type: "h2", text: "Website lengkap" },
      {
        type: "p",
        text: "Website lengkap terdiri dari beberapa halaman: layanan, produk, tentang perusahaan, artikel, dan kontak.",
      },
      {
        type: "ul",
        items: [
          "Bisa menjelaskan banyak layanan secara mendalam",
          "Setiap halaman bisa menargetkan pencarian yang berbeda",
          "Membangun kredibilitas perusahaan yang lebih utuh",
          "Membutuhkan waktu, biaya, dan konten lebih banyak",
          "Perlu dirawat dan diperbarui secara berkala",
        ],
      },
      {
        type: "callout",
        title: "Mulai kecil tidak berarti salah",
        text: "Bisnis yang baru memulai atau sedang menguji pasar sering lebih tepat memulai dari landing page yang jelas, lalu berkembang menjadi website lengkap ketika penawaran dan kontennya sudah matang.",
      },
      { type: "h2", text: "Pertanyaan yang membantu memutuskan" },
      {
        type: "ol",
        items: [
          "Apakah Anda punya satu penawaran utama atau banyak layanan berbeda?",
          "Apakah pengunjung akan datang terutama dari iklan atau dari pencarian organik?",
          "Apakah Anda punya konten yang cukup untuk mengisi banyak halaman?",
          "Siapa yang akan memperbarui website setelah jadi?",
        ],
      },
      { type: "h2", text: "Keduanya bisa berjalan bersama" },
      {
        type: "p",
        text: "Banyak bisnis memiliki website lengkap sebagai fondasi, lalu membuat landing page terpisah untuk kampanye tertentu. Dengan begitu, kampanye tetap fokus tanpa mengganggu struktur website utama.",
      },
      { type: "h2", text: "Rencanakan pertumbuhan" },
      {
        type: "p",
        text: "Jika memulai dari landing page, pastikan platform dan desainnya bisa dikembangkan menjadi website lengkap tanpa harus membangun ulang dari awal. Keputusan teknis kecil di awal bisa menghemat biaya besar di kemudian hari.",
      },
    ],
  },
  {
    slug: "sistem-produksi-manufaktur-skala-menengah",
    title: "Sistem Produksi untuk Manufaktur Skala Menengah",
    excerpt:
      "Manufaktur skala menengah sering terjebak di antara spreadsheet yang sudah tidak cukup dan sistem besar yang terlalu rumit. Ini kebutuhan yang biasanya paling mendesak.",
    category: "Panduan Industri",
    publishedAt: "2026-06-28",
    tags: ["industri", "inventori", "erp"],
    cover: {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
      alt: "Pekerja memotong logam dengan percikan api di area produksi",
    },
    body: [
      {
        type: "p",
        text: "Pabrik skala menengah biasanya sudah melewati tahap ketika semua bisa diatur lewat catatan manual, tetapi belum membutuhkan sistem sebesar yang dipakai perusahaan multinasional. Di titik ini, pilihan sistem yang tepat sangat menentukan kelancaran produksi.",
      },
      { type: "h2", text: "Daftar bahan (bill of materials)" },
      {
        type: "p",
        text: "Fondasi sistem produksi adalah daftar bahan: komponen dan bahan baku apa saja, berapa jumlahnya, untuk menghasilkan satu unit produk. Tanpa daftar bahan yang akurat, perhitungan kebutuhan bahan, biaya produksi, dan stok akan selalu meleset.",
      },
      { type: "h2", text: "Perencanaan kebutuhan bahan" },
      {
        type: "p",
        text: "Berdasarkan pesanan dan rencana produksi, sistem dapat menghitung bahan yang dibutuhkan, membandingkannya dengan stok, dan menunjukkan apa yang perlu dibeli dan kapan. Ini mencegah produksi berhenti karena bahan habis, sekaligus mengurangi stok bahan yang menumpuk.",
      },
      { type: "h2", text: "Perintah kerja dan pelacakan produksi" },
      {
        type: "ul",
        items: [
          "Perintah kerja yang menjelaskan produk, jumlah, dan target waktu",
          "Pengambilan bahan dari gudang yang tercatat per perintah kerja",
          "Status produksi di setiap tahapan",
          "Hasil produksi, termasuk produk cacat dan sisa bahan",
        ],
      },
      {
        type: "callout",
        title: "Catat sisa bahan dan produk cacat",
        text: "Produk cacat dan bahan yang terbuang sering tidak tercatat karena dianggap kecil. Padahal tanpa catatan ini, biaya produksi yang sebenarnya tidak pernah terlihat, dan masalah kualitas yang berulang sulit ditemukan.",
      },
      { type: "h2", text: "Biaya produksi yang realistis" },
      {
        type: "p",
        text: "Dengan data pemakaian bahan, waktu kerja, dan biaya tidak langsung yang tercatat, perusahaan bisa menghitung biaya per unit dengan lebih akurat. Informasi ini penting untuk menetapkan harga jual dan menilai produk mana yang benar-benar menguntungkan.",
      },
      { type: "h2", text: "Kontrol kualitas" },
      {
        type: "p",
        text: "Titik pemeriksaan kualitas di tahapan tertentu, dengan hasil yang tercatat, membantu menemukan masalah lebih awal — sebelum produk cacat sampai ke pelanggan. Riwayat ini juga membantu menelusuri penyebab ketika keluhan muncul.",
      },
      { type: "h2", text: "Mulai dari data master" },
      {
        type: "p",
        text: "Seperti implementasi sistem lainnya, keberhasilan sistem produksi sangat bergantung pada data master yang rapi: kode bahan, daftar bahan per produk, dan satuan yang konsisten. Menyiapkan data ini sering memakan waktu lebih lama dari perkiraan, jadi mulailah sejak awal.",
      },
    ],
  },
  {
    slug: "poin-penting-kontrak-pengembangan-software",
    title: "Poin Penting dalam Kontrak Pengembangan Software",
    excerpt:
      "Kontrak yang jelas melindungi kedua pihak ketika project tidak berjalan sesuai rencana. Ini bagian-bagian yang layak diperhatikan sebelum menandatangani.",
    category: "Panduan Memilih",
    publishedAt: "2026-06-26",
    tags: ["kontrak", "vendor", "custom-software"],
    cover: {
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      alt: "Patung Dewi Keadilan memegang timbangan",
    },
    body: [
      {
        type: "p",
        text: "Project software hampir selalu menemui perubahan, keterlambatan, atau perbedaan pemahaman. Kontrak yang disusun dengan baik tidak mencegah semua masalah, tetapi memberikan acuan yang jelas ketika masalah itu muncul. Artikel ini bukan nasihat hukum; untuk kontrak bernilai besar, libatkan penasihat hukum.",
      },
      { type: "h2", text: "Ruang lingkup yang tertulis" },
      {
        type: "p",
        text: "Kontrak sebaiknya merujuk pada dokumen ruang lingkup yang rinci: fitur, integrasi, platform, dan batasan. Hal yang tidak tertulis cenderung menjadi sumber perselisihan.",
      },
      { type: "h2", text: "Poin yang layak diperiksa" },
      {
        type: "ul",
        items: [
          "Ruang lingkup pekerjaan dan dokumen acuannya",
          "Tahapan, hasil yang diserahkan, dan kriteria penerimaan",
          "Jadwal dan konsekuensi keterlambatan dari masing-masing pihak",
          "Nilai kontrak dan termin pembayaran",
          "Mekanisme perubahan ruang lingkup",
          "Kepemilikan source code dan hak kekayaan intelektual",
          "Kerahasiaan dan pelindungan data",
          "Masa perbaikan setelah rilis",
          "Dukungan dan pemeliharaan setelah masa perbaikan",
          "Penyelesaian sengketa dan pengakhiran kontrak",
        ],
      },
      { type: "h2", text: "Kriteria penerimaan" },
      {
        type: "p",
        text: "Kapan sebuah tahap dianggap selesai? Tanpa kriteria yang jelas, satu pihak bisa menganggap pekerjaan sudah selesai sementara pihak lain belum. Tetapkan cara pengujian dan periode untuk memberikan catatan perbaikan.",
      },
      {
        type: "callout",
        title: "Kepemilikan source code harus eksplisit",
        text: "Jangan berasumsi source code otomatis menjadi milik pemesan. Kontrak sebaiknya menyatakan dengan jelas siapa pemiliknya, apakah ada komponen milik vendor yang hanya dilisensikan, dan kapan serah terima dilakukan.",
      },
      { type: "h2", text: "Kewajiban kedua pihak" },
      {
        type: "p",
        text: "Keterlambatan tidak selalu berasal dari vendor. Klien yang terlambat memberikan data, keputusan, atau umpan balik juga memengaruhi jadwal. Kontrak yang adil mencantumkan kewajiban kedua pihak.",
      },
      { type: "h2", text: "Rencana jika berhenti di tengah jalan" },
      {
        type: "p",
        text: "Pertimbangkan apa yang terjadi jika kerja sama berakhir sebelum project selesai: pekerjaan apa yang diserahkan, bagaimana pembayaran dihitung, dan bagaimana source code serta dokumentasi diberikan. Membahasnya di awal jauh lebih mudah daripada saat hubungan sudah memburuk.",
      },
      { type: "h2", text: "Baca bersama tim yang akan menjalankan" },
      {
        type: "p",
        text: "Libatkan orang yang akan mengelola project di pihak Anda saat membaca kontrak. Mereka bisa mengenali ketentuan yang sulit dijalankan dalam praktik.",
      },
    ],
  },
  {
    slug: "otomatisasi-laporan-rutin",
    title: "Mengotomatiskan Laporan Rutin Mingguan",
    excerpt:
      "Laporan yang disusun ulang setiap minggu dari data yang sama adalah kandidat otomatisasi paling mudah. Waktunya bisa dipakai untuk membaca laporan, bukan menyusunnya.",
    category: "Teknologi",
    publishedAt: "2026-06-24",
    tags: ["otomasi", "pelaporan", "data"],
    cover: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      alt: "Dua orang bekerja di depan komputer di kantor yang terang",
    },
    body: [
      {
        type: "p",
        text: "Setiap Senin pagi, seseorang mengunduh data dari beberapa sistem, menyalinnya ke spreadsheet, merapikan format, membuat grafik, lalu mengirimkannya ke manajemen. Prosesnya sama setiap minggu. Pekerjaan seperti ini adalah kandidat otomatisasi yang paling jelas.",
      },
      { type: "h2", text: "Kenali laporan yang layak diotomatiskan" },
      {
        type: "ul",
        items: [
          "Disusun dengan langkah yang sama setiap periode",
          "Sumber datanya sudah tersedia di sistem",
          "Formatnya relatif tetap",
          "Penerimanya jelas dan rutin",
        ],
      },
      { type: "h2", text: "Tahapan otomatisasi" },
      {
        type: "ol",
        items: [
          "Tentukan metrik yang benar-benar dipakai untuk mengambil keputusan",
          "Sepakati definisi setiap angka, misalnya apa yang dihitung sebagai penjualan bersih",
          "Hubungkan laporan langsung ke sumber data",
          "Jadwalkan pembuatan dan pengiriman laporan",
          "Tambahkan pemeriksaan agar laporan tidak terkirim jika datanya tidak lengkap",
        ],
      },
      { type: "h2", text: "Sepakati definisi lebih dulu" },
      {
        type: "p",
        text: "Laporan otomatis yang cepat tetapi angkanya diperdebatkan tidak banyak membantu. Sebelum mengotomatiskan, pastikan semua pihak sepakat tentang cara menghitung setiap angka. Proses ini sering mengungkap bahwa divisi berbeda selama ini menghitung dengan cara berbeda.",
      },
      {
        type: "callout",
        title: "Kurangi, jangan hanya pindahkan",
        text: "Otomatisasi adalah kesempatan meninjau isi laporan. Metrik yang tidak pernah dibaca atau tidak memengaruhi keputusan sebaiknya dihapus, bukan ikut diotomatiskan.",
      },
      { type: "h2", text: "Dashboard atau laporan terkirim" },
      {
        type: "p",
        text: "Dashboard yang bisa dibuka kapan saja cocok untuk pemantauan harian. Laporan yang dikirim terjadwal cocok untuk ringkasan yang perlu dibaca semua penerima pada waktu yang sama. Banyak organisasi memakai keduanya untuk kebutuhan yang berbeda.",
      },
      { type: "h2", text: "Tetap sediakan catatan" },
      {
        type: "p",
        text: "Angka tanpa penjelasan mudah disalahartikan. Untuk laporan manajemen, sediakan tempat bagi penanggung jawab menambahkan catatan singkat tentang kejadian yang memengaruhi angka periode tersebut.",
      },
      { type: "h2", text: "Pantau kegagalan" },
      {
        type: "p",
        text: "Laporan otomatis yang diam-diam berhenti terkirim, atau terkirim dengan data kosong, bisa lama tidak disadari. Pastikan ada pemberitahuan ketika proses gagal atau datanya tidak lengkap.",
      },
    ],
  },
  {
    slug: "menyatukan-stok-toko-fisik-dan-marketplace",
    title: "Menyatukan Stok Toko Fisik dan Marketplace",
    excerpt:
      "Menjual di toko fisik dan beberapa marketplace sekaligus membuka pasar baru — sekaligus risiko menjual barang yang sebenarnya sudah habis.",
    category: "POS & Retail",
    publishedAt: "2026-06-22",
    tags: ["pos", "ecommerce", "inventori", "integrasi"],
    cover: {
      src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
      alt: "Tumpukan paket kardus siap kirim di ruang penyimpanan",
    },
    body: [
      {
        type: "p",
        text: "Banyak bisnis retail kini berjualan di beberapa tempat sekaligus: toko fisik, marketplace, dan kadang toko online sendiri. Setiap saluran menambah peluang penjualan. Tetapi ketika stok dicatat terpisah di setiap saluran, risiko menjual barang yang sudah habis — lalu membatalkan pesanan — meningkat tajam.",
      },
      { type: "h2", text: "Masalah yang muncul tanpa stok terpusat" },
      {
        type: "ul",
        items: [
          "Pesanan online masuk untuk barang yang baru saja terjual di toko",
          "Pembatalan pesanan yang merusak reputasi toko di marketplace",
          "Stok diperbarui manual di setiap saluran, memakan waktu dan rawan salah",
          "Tidak ada gambaran penjualan gabungan per produk",
        ],
      },
      { type: "h2", text: "Satu sumber stok" },
      {
        type: "p",
        text: "Prinsip utamanya adalah memiliki satu sumber stok yang menjadi acuan semua saluran. Setiap penjualan di saluran mana pun mengurangi stok di sumber tersebut, lalu jumlah stok terbaru dikirim ke saluran lainnya.",
      },
      { type: "h2", text: "Cara menghubungkan" },
      {
        type: "p",
        text: "Integrasi biasanya dilakukan melalui API yang disediakan marketplace atau melalui layanan penghubung. Pesanan dari marketplace masuk ke sistem utama, dan pembaruan stok dari sistem utama dikirim ke marketplace.",
      },
      {
        type: "callout",
        title: "Sisakan stok penyangga",
        text: "Sinkronisasi antar sistem tidak selalu terjadi dalam hitungan detik. Untuk produk yang sisa stoknya sedikit, menampilkan jumlah yang sedikit lebih rendah di marketplace membantu mengurangi risiko terjual melebihi stok yang ada.",
      },
      { type: "h2", text: "Samakan data produk" },
      {
        type: "p",
        text: "Integrasi membutuhkan pencocokan produk yang akurat antara sistem utama dan setiap marketplace, termasuk variannya. Kode produk yang konsisten di semua saluran mencegah stok berkurang pada produk yang salah.",
      },
      { type: "h2", text: "Harga per saluran" },
      {
        type: "p",
        text: "Biaya di setiap marketplace berbeda, sehingga harga jual per saluran bisa berbeda. Sistem sebaiknya mendukung pengaturan harga per saluran sambil tetap memakai stok yang sama.",
      },
      { type: "h2", text: "Pantau kegagalan sinkronisasi" },
      {
        type: "p",
        text: "Koneksi dengan marketplace bisa terputus atau mengalami gangguan. Pastikan ada pemberitahuan ketika sinkronisasi gagal, agar stok yang tidak terbarui bisa segera ditangani sebelum menimbulkan pesanan yang tidak bisa dipenuhi.",
      },
    ],
  },
  {
    slug: "mengukur-keberhasilan-implementasi-erp",
    title: "Cara Mengukur Keberhasilan Implementasi ERP",
    excerpt:
      "Sistem yang sudah berjalan belum tentu berhasil. Ukuran keberhasilan ERP perlu ditetapkan sebelum project dimulai, bukan dicari setelahnya.",
    category: "ERP & Operasional",
    publishedAt: "2026-06-20",
    tags: ["erp", "implementasi", "pelaporan"],
    cover: {
      src: "https://images.unsplash.com/photo-1543286386-713bdd548da4",
      alt: "Kertas berisi grafik garis naik di samping penggaris dan pena di meja kayu",
    },
    body: [
      {
        type: "p",
        text: "Banyak project ERP dinyatakan selesai ketika sistem sudah dipakai. Tetapi apakah sistem itu benar-benar memperbaiki operasional? Tanpa ukuran yang ditetapkan sejak awal, pertanyaan ini sulit dijawab — dan investasi besar hanya dinilai dari kesan.",
      },
      { type: "h2", text: "Tetapkan ukuran sebelum mulai" },
      {
        type: "p",
        text: "Hubungkan ukuran keberhasilan dengan alasan project dimulai. Jika masalah utamanya laporan yang terlambat, ukurannya adalah waktu penyusunan laporan. Jika masalahnya selisih stok, ukurannya adalah tingkat akurasi stok.",
      },
      { type: "h2", text: "Catat kondisi awal" },
      {
        type: "p",
        text: "Ukuran hanya bermakna jika ada pembanding. Sebelum sistem baru berjalan, catat kondisi saat ini: berapa lama tutup buku, seberapa sering terjadi selisih stok, berapa lama pesanan diproses. Tanpa data awal, perbaikan tidak bisa dibuktikan.",
      },
      { type: "h2", text: "Contoh ukuran yang sering dipakai" },
      {
        type: "ul",
        items: [
          "Waktu yang dibutuhkan untuk menutup buku setiap periode",
          "Tingkat akurasi stok dibanding hasil hitung fisik",
          "Waktu dari pesanan masuk hingga barang terkirim",
          "Jumlah input data ganda yang berhasil dihilangkan",
          "Keterlambatan pembayaran pelanggan dan umur piutang",
        ],
      },
      { type: "h2", text: "Ukur adopsi, bukan hanya sistem" },
      {
        type: "p",
        text: "Sistem yang canggih tidak berguna jika tidak dipakai. Perhatikan apakah pengguna benar-benar memakai sistem setiap hari, atau masih menyimpan catatan paralel di spreadsheet. Pencatatan paralel adalah tanda proses belum benar-benar pindah.",
      },
      {
        type: "callout",
        title: "Beri waktu sebelum menilai",
        text: "Di minggu-minggu pertama, produktivitas biasanya menurun karena tim masih menyesuaikan diri. Menilai keberhasilan terlalu dini bisa menghasilkan kesimpulan yang keliru. Tetapkan periode evaluasi yang realistis.",
      },
      { type: "h2", text: "Evaluasi bertahap" },
      {
        type: "p",
        text: "Evaluasi setelah beberapa bulan berjalan, lalu ulangi secara berkala. Hasil evaluasi menunjukkan area yang perlu penyesuaian: alur yang masih lambat, laporan yang belum dipakai, atau pelatihan yang perlu diulang.",
      },
      { type: "h2", text: "Gunakan hasilnya untuk langkah berikutnya" },
      {
        type: "p",
        text: "Pengukuran bukan hanya untuk menilai project yang sudah berjalan. Hasilnya membantu menentukan modul atau perbaikan berikutnya yang paling bernilai — sehingga pengembangan sistem tetap didorong oleh masalah nyata.",
      },
    ],
  },
  {
    slug: "perhitungan-lembur-di-sistem-hr",
    title: "Menyiapkan Perhitungan Lembur di Sistem HR",
    excerpt:
      "Perhitungan lembur yang dilakukan manual rawan selisih dan perselisihan. Memindahkannya ke sistem butuh aturan yang jelas sebelum rumusnya dibuat.",
    category: "HR & Tim",
    publishedAt: "2026-06-18",
    tags: ["hris", "payroll", "karyawan"],
    cover: {
      src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      alt: "Cangkir kopi di atas lembar kalender bulanan",
    },
    body: [
      {
        type: "p",
        text: "Lembur adalah salah satu komponen gaji yang paling sering menimbulkan pertanyaan. Karyawan ingin memastikan jam kerjanya dihargai dengan benar, sementara perusahaan perlu memastikan perhitungannya sesuai aturan dan anggaran. Ketika dihitung manual, selisih kecil mudah terjadi dan sulit dijelaskan.",
      },
      { type: "h2", text: "Pahami aturan yang berlaku" },
      {
        type: "p",
        text: "Ketentuan waktu kerja lembur dan upahnya di Indonesia diatur dalam peraturan ketenagakerjaan, termasuk Peraturan Pemerintah Nomor 35 Tahun 2021. Aturan ini mencakup hal seperti batas jam lembur dan cara menghitung upah lembur. Karena regulasi dapat berubah dan penerapannya bisa bergantung pada kondisi perusahaan, susun aturan di sistem berdasarkan ketentuan terbaru dan konsultasikan dengan pihak yang memahami hukum ketenagakerjaan.",
      },
      { type: "h2", text: "Rapikan kebijakan internal lebih dulu" },
      {
        type: "ul",
        items: [
          "Siapa yang berhak mendapatkan upah lembur",
          "Bagaimana lembur diajukan dan disetujui",
          "Perbedaan lembur di hari kerja dan hari libur",
          "Komponen upah yang menjadi dasar perhitungan",
          "Batas lembur per hari dan per minggu",
        ],
      },
      {
        type: "p",
        text: "Kebijakan yang belum jelas di atas kertas akan menjadi rumus yang salah di sistem.",
      },
      {
        type: "callout",
        title: "Lembur disetujui sebelum dikerjakan",
        text: "Sistem yang mewajibkan pengajuan dan persetujuan lembur sebelum dikerjakan membantu mengendalikan biaya sekaligus mencegah perselisihan tentang jam lembur yang tidak pernah disetujui.",
      },
      { type: "h2", text: "Hubungkan dengan data kehadiran" },
      {
        type: "p",
        text: "Perhitungan lembur paling akurat ketika mengambil data langsung dari sistem kehadiran, bukan dari rekap manual. Sistem dapat membandingkan jam lembur yang disetujui dengan jam kerja yang benar-benar tercatat.",
      },
      { type: "h2", text: "Uji dengan data nyata" },
      {
        type: "p",
        text: "Sebelum dipakai untuk penggajian, jalankan perhitungan di sistem secara paralel dengan cara lama untuk satu atau dua periode. Periksa kasus khusus: shift malam, lembur di hari libur, dan karyawan yang berpindah jadwal. Perbedaan hasil harus bisa dijelaskan sebelum sistem dipakai sepenuhnya.",
      },
      { type: "h2", text: "Tampilkan rinciannya kepada karyawan" },
      {
        type: "p",
        text: "Slip gaji yang menampilkan rincian jam dan nilai lembur mengurangi pertanyaan dan membangun kepercayaan. Karyawan bisa memeriksa sendiri, dan jika ada kesalahan, lebih cepat ditemukan.",
      },
    ],
  },
];
