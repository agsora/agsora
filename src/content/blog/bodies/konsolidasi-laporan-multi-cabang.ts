import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Tanggal lima setiap bulan, tim keuangan pusat menerima lima file Excel dari lima cabang, masing-masing dengan format kolom yang sedikit berbeda. Satu cabang menulis “Ongkos Kirim”, cabang lain menulis “Biaya Pengiriman” untuk hal yang sama. Menggabungkan semuanya menjadi satu laporan yang koheren memakan waktu hampir seminggu penuh — dan itu pun sering masih ada yang salah hitung.",
  },
  {
    type: "p",
    text: "Bisnis dengan beberapa cabang biasanya menerima laporan dari setiap lokasi dalam format yang sedikit berbeda-beda, lalu menggabungkannya secara manual di spreadsheet. Proses ini sangat memakan waktu, dan angka gabungan sering baru tersedia jauh setelah periode berakhir — pada saat itu, sudah terlalu terlambat untuk mengambil tindakan korektif yang berarti.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Kesulitan konsolidasi biasanya berasal dari struktur data yang tidak seragam, bukan dari proses menjumlahkan itu sendiri",
      "Seragamkan daftar akun, kategori, dan aturan pencatatan di semua cabang lebih dulu",
      "Transaksi antar cabang perlu ditandai khusus agar tidak terhitung ganda",
      "Disiplin menutup periode tepat waktu di semua cabang menentukan keandalan laporan gabungan",
      "Satu sistem untuk semua cabang jauh mempermudah konsolidasi dibanding sistem yang berbeda-beda",
    ],
  },
  { type: "h2", text: "Masalahnya biasanya bukan di penggabungan angka" },
  {
    type: "p",
    text: "Kesulitan konsolidasi jarang disebabkan oleh proses menjumlahkan angka itu sendiri — komputer bisa menjumlahkan ribuan angka dalam sekejap. Penyebab utamanya adalah setiap cabang mencatat dengan cara yang sedikit berbeda: nama akun yang tidak seragam, kategori biaya yang berbeda penafsirannya, atau waktu pencatatan transaksi yang tidak konsisten antar lokasi.",
  },
  {
    type: "p",
    text: "Ketika struktur dasarnya berbeda, penggabungan menjadi pekerjaan menerjemahkan dan menyesuaikan data satu per satu sebelum bisa dijumlahkan dengan benar — pekerjaan yang jauh lebih memakan waktu dan rawan kesalahan dibanding sekadar menjumlahkan angka yang sudah seragam formatnya.",
  },
  { type: "h2", text: "Seragamkan struktur lebih dulu" },
  {
    type: "ul",
    items: [
      "Daftar akun keuangan yang sama persis untuk digunakan semua cabang",
      "Kategori pendapatan dan biaya dengan definisi yang sudah disepakati bersama",
      "Aturan yang jelas tentang kapan sebuah transaksi dicatat",
      "Kode identifikasi cabang yang tertera pada setiap transaksi",
    ],
  },
  {
    type: "p",
    text: "Dengan struktur yang benar-benar seragam di semua cabang, laporan dari setiap lokasi bisa digabungkan secara otomatis oleh sistem, dan tetap bisa dirinci kembali per cabang kapan saja dibutuhkan untuk analisis lebih mendalam.",
  },
  { type: "h2", text: "Transaksi antar cabang perlu perlakuan khusus" },
  {
    type: "p",
    text: "Transfer barang atau dana antar cabang perlu dicatat dengan cara khusus yang berbeda dari transaksi biasa. Jika tidak ditandai secara khusus, transaksi internal semacam ini bisa terhitung sebagai pendapatan atau biaya ganda dalam laporan gabungan — cabang pengirim mencatatnya sebagai pengeluaran, cabang penerima mencatatnya sebagai pemasukan, dan jika keduanya ikut dijumlahkan begitu saja, hasilnya akan menggelembungkan angka yang sebenarnya.",
  },
  {
    type: "p",
    text: "Sistem sebaiknya secara otomatis menandai transaksi antar cabang ini agar bisa dieliminasi secara tepat saat proses konsolidasi berlangsung, sehingga angka gabungan mencerminkan kondisi bisnis yang sebenarnya, bukan transaksi internal yang berputar-putar di dalam perusahaan sendiri.",
  },
  {
    type: "callout",
    title: "Tutup periode dengan disiplin",
    text: "Laporan gabungan hanya bisa dipercaya sepenuhnya jika semua cabang menyelesaikan pencatatan untuk periode yang sama pada waktu yang sama. Tetapkan batas waktu penutupan periode yang jelas dan berlaku untuk semua cabang, lalu kunci transaksi periode yang sudah ditutup agar tidak bisa diubah diam-diam setelahnya tanpa jejak yang jelas.",
  },
  { type: "h2", text: "Satu sistem atau banyak sistem" },
  {
    type: "p",
    text: "Konsolidasi paling mudah dan paling akurat ketika semua cabang memakai sistem pencatatan yang sama persis. Jika cabang tertentu terpaksa memakai sistem yang berbeda — misalnya karena hasil akuisisi bisnis lain yang sudah punya sistemnya sendiri — pemetaan antara struktur akun kedua sistem menjadi pekerjaan tambahan yang perlu direncanakan dan dikelola dengan cermat agar tidak menimbulkan kesalahan konsolidasi.",
  },
  { type: "h2", text: "Ilustrasi: dari seminggu menjadi sehari" },
  {
    type: "p",
    text: "Bayangkan sebuah jaringan restoran dengan enam cabang, masing-masing mengirim laporan penjualan dan biaya operasional dalam format Excel yang berbeda-beda setiap akhir bulan. Tim keuangan pusat membutuhkan hampir seminggu untuk menyamakan format, mencocokkan kategori yang berbeda-beda penamaannya, dan menghilangkan transaksi transfer stok antar cabang yang sempat terhitung ganda.",
  },
  {
    type: "p",
    text: "Setelah menyeragamkan daftar akun dan kategori di seluruh cabang, serta menandai transaksi antar cabang secara otomatis di sistem, laporan gabungan yang dulu butuh seminggu kini bisa dihasilkan dalam waktu kurang dari sehari setelah periode ditutup — bahkan bisa dilihat secara real-time kapan saja sepanjang bulan berjalan.",
  },
  { type: "h2", text: "Laporan yang layak dipantau" },
  {
    type: "ul",
    items: [
      "Laba rugi per cabang sekaligus gabungan seluruh perusahaan",
      "Perbandingan performa antar cabang pada periode waktu yang sama",
      "Biaya operasional per cabang dibandingkan dengan pendapatannya",
      "Arus kas gabungan seluruh perusahaan",
    ],
  },
  {
    type: "p",
    text: "Ketika laporan gabungan tersedia dengan cepat dan bisa dirinci kembali per cabang, manajemen dapat segera melihat cabang mana yang membutuhkan perhatian sebelum masalahnya membesar dan sulit diperbaiki.",
  },
  { type: "h2", text: "Melibatkan kepala cabang dalam prosesnya" },
  {
    type: "p",
    text: "Konsolidasi yang lancar membutuhkan kerja sama dari setiap kepala cabang dalam menutup periode tepat waktu dan memastikan pencatatan mereka sudah sesuai standar yang disepakati bersama. Jelaskan kepada mereka bagaimana laporan gabungan yang akurat dan cepat juga bermanfaat bagi cabang mereka sendiri — misalnya untuk perbandingan performa yang adil antar cabang.",
  },
  { type: "h2", text: "Langkah menyusun konsolidasi yang rapi" },
  {
    type: "ol",
    items: [
      "Seragamkan daftar akun dan kategori di seluruh cabang",
      "Tetapkan kode identifikasi untuk setiap cabang di setiap transaksi",
      "Buat aturan khusus untuk mencatat transaksi antar cabang",
      "Tetapkan batas waktu penutupan periode yang berlaku untuk semua cabang",
      "Kunci transaksi periode yang sudah ditutup",
      "Bangun laporan yang bisa digabung otomatis sekaligus dirinci per cabang",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa lama proses menyeragamkan struktur akun biasanya memakan waktu?" },
  {
    type: "p",
    text: "Bergantung pada jumlah cabang dan seberapa jauh perbedaan struktur yang sudah berjalan selama ini. Untuk bisnis dengan beberapa cabang yang sudah berjalan bertahun-tahun dengan cara berbeda-beda, proses ini bisa memakan waktu beberapa minggu hingga sebulan, tapi investasinya sepadan untuk manfaat jangka panjang.",
  },
  { type: "h3", text: "Apakah semua cabang harus memakai sistem yang identik?" },
  {
    type: "p",
    text: "Idealnya ya, karena ini paling menyederhanakan proses konsolidasi. Jika tidak memungkinkan karena alasan tertentu, pastikan setidaknya struktur data dan format ekspornya bisa dipetakan dengan konsisten ke sistem pusat.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Konsolidasi laporan multi-cabang yang lancar dimulai jauh sebelum proses penggabungan itu sendiri — dimulai dari keseragaman struktur data di setiap cabang. Dengan fondasi yang tepat, laporan gabungan yang dulu memakan waktu berhari-hari bisa tersedia dalam hitungan jam, memberi manajemen gambaran bisnis yang jauh lebih cepat dan lebih bisa diandalkan.",
  },
  {
    type: "cta",
    title: "Konsolidasi laporan cabang Anda masih makan waktu seminggu?",
    text: "AG·SORA ERP mendukung konsolidasi laporan otomatis lintas cabang dengan struktur data yang seragam.",
    href: "/products#erp",
    label: "Lihat AG·SORA ERP",
  },
];
