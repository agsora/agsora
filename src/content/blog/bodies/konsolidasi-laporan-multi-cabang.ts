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
  { type: "h2", text: "Menangani penyesuaian setelah periode ditutup" },
  {
    type: "p",
    text: "Meski periode sudah ditutup dan terkunci, terkadang kesalahan pencatatan baru ditemukan setelahnya — misalnya transaksi yang salah kategori atau angka yang tertukar antar cabang. Mengizinkan perubahan bebas pada data yang sudah ditutup akan merusak keandalan laporan yang sudah dipakai untuk pengambilan keputusan, tapi melarang koreksi sama sekali juga tidak realistis karena kesalahan memang bisa terjadi.",
  },
  {
    type: "p",
    text: "Solusi yang lebih baik adalah menyediakan mekanisme jurnal penyesuaian yang tercatat terpisah dan jelas tertaut ke periode aslinya, lengkap dengan catatan alasan koreksi dan siapa yang melakukannya. Dengan cara ini, laporan periode yang sudah ditutup tetap utuh sebagai catatan historis, sementara koreksi yang diperlukan tetap bisa dilakukan secara transparan dan bisa ditelusuri kembali kapan pun dibutuhkan.",
  },
  { type: "h2", text: "Automasi dengan pengawasan tetap diperlukan" },
  {
    type: "p",
    text: "Automasi konsolidasi mengurangi banyak pekerjaan manual, tapi bukan berarti prosesnya bisa sepenuhnya dilepas tanpa pengawasan. Perubahan struktur bisnis — cabang baru yang dibuka, kategori produk baru yang diperkenalkan, atau perubahan cara pencatatan tertentu — perlu ditinjau agar aturan konsolidasi otomatis tetap relevan dan tidak diam-diam menghasilkan angka yang keliru tanpa disadari siapa pun.",
  },
  {
    type: "p",
    text: "Sisihkan waktu secara berkala, misalnya setiap triwulan, untuk meninjau ulang apakah aturan eliminasi transaksi antar cabang dan pemetaan kategori masih sesuai dengan kondisi bisnis yang sebenarnya. Bisnis yang terus berkembang dan berubah membutuhkan aturan konsolidasi yang ikut disesuaikan, bukan aturan yang ditetapkan sekali di awal lalu dibiarkan begitu saja bertahun-tahun.",
  },
  { type: "h3", text: "Bagaimana menangani cabang baru yang baru dibuka?" },
  {
    type: "p",
    text: "Terapkan struktur akun dan kategori yang sudah seragam sejak cabang tersebut mulai beroperasi, bukan menunggu sampai beberapa bulan berjalan baru menyesuaikan. Cabang baru yang sejak awal mengikuti standar pencatatan yang sama akan langsung bisa dikonsolidasikan tanpa pekerjaan tambahan menyesuaikan data historisnya di kemudian hari.",
  },
  { type: "h2", text: "Melibatkan auditor atau akuntan eksternal" },
  {
    type: "p",
    text: "Banyak bisnis dengan beberapa cabang tetap membutuhkan akuntan atau auditor eksternal untuk keperluan pajak tahunan atau tinjauan keuangan berkala. Laporan gabungan yang sudah rapi dan konsisten strukturnya jauh mempermudah pekerjaan pihak eksternal ini, dibanding harus menyerahkan tumpukan file Excel terpisah dari setiap cabang yang formatnya berbeda-beda dan harus disusun ulang dari awal oleh pihak luar.",
  },
  {
    type: "p",
    text: "Berikan akses yang sesuai kepada auditor atau akuntan eksternal untuk melihat detail transaksi di balik angka ringkasan bila diperlukan, tanpa harus melalui proses permintaan data manual yang memakan waktu setiap kali ada pertanyaan. Kemudahan ini juga mempercepat proses tinjauan tahunan yang biasanya sudah cukup menyita waktu tim keuangan internal di tengah kesibukan operasional rutin lainnya.",
  },
  { type: "h2", text: "Mata uang dan pajak berbeda antar lokasi" },
  {
    type: "p",
    text: "Bisnis yang cabangnya tersebar di beberapa kota atau bahkan lintas negara sering menghadapi lapisan kerumitan tambahan: tarif pajak daerah yang berbeda, atau bahkan mata uang transaksi yang tidak sama. Laporan gabungan yang mengabaikan perbedaan ini akan menghasilkan angka yang secara teknis terjumlah, tapi secara substansi menyesatkan — membandingkan pendapatan yang dikenakan tarif pajak berbeda seolah-olah setara begitu saja.",
  },
  {
    type: "p",
    text: "Sistem konsolidasi yang baik perlu menyimpan konteks asal setiap transaksi, bukan sekadar angka akhirnya saja. Dengan begitu, laporan gabungan tetap bisa menampilkan total yang benar, sekaligus memungkinkan analisis yang memperhitungkan perbedaan tarif pajak atau nilai tukar ketika diperlukan, tanpa harus menelusuri ulang dokumen asli dari setiap cabang satu per satu.",
  },
  { type: "h2", text: "Dashboard real-time versus laporan periode" },
  {
    type: "p",
    text: "Ada perbedaan penting antara melihat angka konsolidasi secara real-time di dashboard dan menunggu laporan resmi setelah periode ditutup. Dashboard real-time berguna untuk memantau tren dan mendeteksi anomali sedini mungkin, tapi angkanya masih bisa berubah karena transaksi hari berjalan belum sepenuhnya final dan penyesuaian masih mungkin terjadi.",
  },
  {
    type: "p",
    text: "Laporan resmi setelah periode ditutup dan dikunci adalah versi yang seharusnya dipakai untuk pengambilan keputusan formal, pelaporan ke pihak eksternal, atau perbandingan performa antar cabang yang membutuhkan angka final. Jangan mencampuradukkan kedua jenis laporan ini — jelaskan kepada semua pengguna sistem mana yang bersifat indikatif dan mana yang bersifat final, agar tidak muncul kebingungan ketika angka dashboard hari ini ternyata sedikit berbeda dari laporan resmi bulan tersebut setelah ditutup.",
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
