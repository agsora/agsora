import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Laporan laba rugi bulan lalu menunjukkan angka yang sehat. Penjualan naik, margin terjaga, dan secara di atas kertas bisnis sedang tumbuh. Tapi di minggu yang sama, bagian keuangan harus menunda pembayaran ke pemasok karena saldo rekening tidak cukup. Pemilik bisnis bingung: bagaimana perusahaan yang untung bisa kekurangan uang tunai?",
  },
  {
    type: "p",
    text: "Jawabannya hampir selalu ada pada jarak antara keuntungan dan arus kas. Penjualan yang tercatat belum tentu sudah dibayar. Stok yang menumpuk di gudang adalah uang yang tertahan. Tagihan pemasok jatuh tempo pada tanggal yang tidak selalu sejalan dengan tanggal pelanggan membayar. Ketika informasi tentang semua hal ini tersebar di sistem yang berbeda — aplikasi kasir, spreadsheet piutang, catatan gudang, dan rekening bank — tidak ada yang bisa melihat gambaran lengkapnya sampai masalah sudah terjadi.",
  },
  {
    type: "p",
    text: "Artikel ini membahas bagaimana sistem ERP membantu bisnis melihat arus kas dengan lebih jelas dan lebih awal, modul dan data apa yang paling berperan, serta hal-hal yang perlu dipersiapkan agar manfaat itu benar-benar terasa, bukan hanya menjadi janji dalam presentasi vendor.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Bisnis yang untung tetap bisa kesulitan kas jika piutang, stok, dan utang tidak dipantau bersama",
      "ERP menghubungkan penjualan, pembelian, persediaan, dan keuangan sehingga dampak setiap transaksi terhadap kas bisa dilihat",
      "Visibilitas arus kas bergantung pada disiplin input data, bukan hanya pada kecanggihan sistem",
      "Laporan umur piutang, jadwal jatuh tempo utang, dan perputaran stok adalah tiga pandangan terpenting",
      "Mulailah dari pertanyaan kas yang paling sering diajukan manajemen, lalu pastikan sistem bisa menjawabnya",
    ],
  },
  { type: "h2", text: "Kenapa untung tidak sama dengan punya uang" },
  {
    type: "p",
    text: "Laporan laba rugi mencatat pendapatan ketika penjualan terjadi, bukan ketika uangnya masuk. Jika sebagian besar pelanggan membayar dengan tempo, maka penjualan bulan ini baru menjadi uang tunai beberapa minggu kemudian. Di sisi lain, pembelian bahan baku atau barang dagangan sering harus dibayar lebih cepat. Selisih waktu inilah yang membuat perusahaan terlihat untung tapi terasa kekurangan uang.",
  },
  {
    type: "p",
    text: "Persediaan menambah lapisan kerumitan. Barang yang dibeli tapi belum terjual tidak muncul sebagai biaya di laporan laba rugi, tapi uangnya sudah keluar dari rekening. Bisnis yang terus menambah stok untuk mengejar pertumbuhan bisa terlihat sangat sehat di laporan, sementara kasnya semakin menipis. Tanpa sistem yang menghubungkan pembelian, penjualan, dan persediaan, pola ini sering baru disadari ketika sudah menjadi krisis.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1733727584002-e64f62fc1095",
    alt: "Dompet di atas meja yang penuh uang tunai",
    caption: "Dasbor arus kas hanya seakurat data transaksi yang masuk ke sistem setiap hari.",
  },
  { type: "h2", text: "Masalah saat data keuangan tersebar" },
  {
    type: "p",
    text: "Di banyak bisnis yang sedang berkembang, setiap bagian punya alatnya sendiri. Tim penjualan mencatat pesanan di aplikasi kasir atau spreadsheet. Gudang punya catatan stok terpisah. Bagian keuangan mencocokkan transaksi bank secara manual di akhir bulan. Masing-masing alat mungkin bekerja cukup baik untuk tugasnya sendiri, tapi tidak ada yang menunjukkan bagaimana semua itu memengaruhi kas perusahaan secara keseluruhan.",
  },
  {
    type: "ul",
    items: [
      "Posisi piutang baru diketahui setelah rekonsiliasi manual, sering terlambat beberapa minggu",
      "Tagihan pemasok yang jatuh tempo tidak terlihat bersama dengan jadwal penerimaan dari pelanggan",
      "Nilai stok di gudang tidak diketahui secara akurat sampai dilakukan stock opname",
      "Angka di laporan penjualan, gudang, dan keuangan sering berbeda dan butuh waktu untuk dicocokkan",
      "Keputusan pembelian besar diambil tanpa melihat proyeksi kas beberapa minggu ke depan",
    ],
  },
  {
    type: "p",
    text: "Akibatnya, manajemen mengambil keputusan berdasarkan angka yang sudah basi. Ketika laporan akhir bulan selesai disusun, situasinya sudah berubah. Masalah kas yang seharusnya bisa diantisipasi beberapa minggu sebelumnya baru terlihat ketika sudah harus diselesaikan hari itu juga.",
  },
  { type: "h2", text: "Bagaimana ERP menghubungkan titik-titiknya" },
  {
    type: "p",
    text: "Nilai utama ERP bukan pada banyaknya modul, melainkan pada fakta bahwa semua modul berbagi data yang sama. Ketika pesanan penjualan dibuat, sistem tahu barang apa yang keluar dari stok, berapa piutang yang bertambah, dan kapan pembayarannya diharapkan. Ketika pesanan pembelian disetujui, sistem tahu berapa utang yang akan muncul dan kapan jatuh temponya. Setiap transaksi operasional otomatis punya jejak di keuangan.",
  },
  { type: "h3", text: "Piutang yang terpantau sejak faktur diterbitkan" },
  {
    type: "p",
    text: "Dengan ERP, setiap faktur penjualan langsung tercatat sebagai piutang dengan tanggal jatuh tempo. Laporan umur piutang menunjukkan berapa yang belum jatuh tempo, berapa yang terlambat sedikit, dan berapa yang sudah lama tertunggak. Tim keuangan bisa menagih lebih awal, dan tim penjualan bisa melihat status pembayaran pelanggan sebelum menerima pesanan baru dengan tempo.",
  },
  { type: "h3", text: "Utang yang terjadwal, bukan mendadak" },
  {
    type: "p",
    text: "Tagihan pemasok yang tercatat di sistem sejak pesanan pembelian dibuat memungkinkan keuangan menyusun jadwal pembayaran. Tidak ada lagi tagihan yang tiba-tiba muncul di meja pada hari jatuh tempo. Bisnis bisa merencanakan kapan membayar siapa, menegosiasikan tempo dengan pemasok tertentu, atau memanfaatkan potongan pembayaran lebih awal ketika kas memungkinkan.",
  },
  { type: "h3", text: "Persediaan sebagai uang yang tertahan" },
  {
    type: "p",
    text: "ERP yang terhubung dengan persediaan menunjukkan nilai stok secara berjalan, bukan hanya setelah stock opname. Laporan perputaran stok memperlihatkan barang mana yang cepat laku dan mana yang menumpuk berbulan-bulan. Informasi ini membantu pembelian menjadi lebih tepat: memperbanyak barang yang berputar cepat dan menahan pembelian barang yang lambat, sehingga lebih sedikit uang yang tertahan di gudang.",
  },
  {
    type: "callout",
    title: "Tiga pertanyaan kas yang seharusnya bisa dijawab dalam hitungan menit",
    text: "Berapa uang yang akan masuk dari pelanggan dalam dua minggu ke depan? Berapa yang harus dibayar ke pemasok dalam periode yang sama? Berapa nilai stok yang belum bergerak lebih dari tiga bulan? Jika menjawabnya butuh berhari-hari, visibilitas arus kas Anda masih rendah.",
  },
  { type: "h2", text: "Dari laporan historis ke proyeksi" },
  {
    type: "p",
    text: "Laporan arus kas tradisional menceritakan apa yang sudah terjadi. Itu penting untuk evaluasi, tapi kurang membantu untuk keputusan hari ini. Karena ERP menyimpan piutang dengan tanggal jatuh tempo, utang dengan jadwal pembayaran, dan pesanan yang sedang berjalan, data yang sama bisa dipakai untuk memproyeksikan posisi kas beberapa minggu ke depan.",
  },
  {
    type: "p",
    text: "Proyeksi ini tidak akan pernah sempurna. Pelanggan bisa terlambat membayar, pesanan bisa batal, dan pengeluaran mendadak selalu mungkin terjadi. Tapi proyeksi yang dibangun dari data transaksi nyata jauh lebih berguna daripada perkiraan berdasarkan ingatan. Manajemen bisa melihat minggu mana yang berpotensi ketat, lalu mengambil langkah lebih awal: mempercepat penagihan, menunda pembelian yang tidak mendesak, atau mengatur fasilitas pembiayaan sebelum benar-benar dibutuhkan.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1745270917233-65e776a47547",
    alt: "Grafik saham menunjukkan tren naik dan potensi laba",
    caption: "Visibilitas arus kas membuat diskusi antara keuangan dan operasional berbasis angka yang sama.",
  },
  { type: "h2", text: "Dasbor dan peringatan dini" },
  {
    type: "p",
    text: "Data yang lengkap di dalam sistem baru berguna jika orang yang tepat melihatnya pada waktu yang tepat. Karena itu, sebagian besar manfaat visibilitas arus kas justru datang dari cara informasi disajikan. Pemilik bisnis tidak perlu membuka puluhan laporan setiap pagi; yang dibutuhkan adalah satu tampilan ringkas yang menunjukkan posisi kas hari ini, penerimaan dan pembayaran yang dijadwalkan dalam beberapa minggu ke depan, serta daftar pendek hal-hal yang perlu perhatian.",
  },
  {
    type: "p",
    text: "Peringatan otomatis melengkapi dasbor. Sistem dapat memberi tahu ketika piutang pelanggan tertentu melewati batas hari yang ditetapkan, ketika pelanggan dengan tunggakan mengajukan pesanan baru, atau ketika proyeksi kas di minggu tertentu turun di bawah batas aman. Dengan cara ini, perhatian manajemen diarahkan ke pengecualian yang benar-benar penting, bukan dihabiskan untuk memeriksa angka yang sebenarnya baik-baik saja.",
  },
  {
    type: "ul",
    items: [
      "Posisi saldo kas dan bank per hari, dibandingkan dengan proyeksi minggu sebelumnya",
      "Daftar pelanggan dengan piutang yang melewati jatuh tempo, diurutkan berdasarkan nilai",
      "Jadwal pembayaran pemasok untuk beberapa minggu ke depan",
      "Barang dengan perputaran paling lambat dan nilai stok yang tertahan di dalamnya",
    ],
  },
  { type: "h2", text: "Syarat agar ERP benar-benar memberi visibilitas" },
  {
    type: "p",
    text: "Sistem ERP bukan jaminan otomatis. Banyak perusahaan yang sudah memakai ERP tetap kesulitan melihat arus kas karena data di dalamnya tidak lengkap atau tidak tepat waktu. Beberapa syarat berikut menentukan apakah ERP benar-benar memberi gambaran yang bisa dipercaya.",
  },
  {
    type: "ol",
    items: [
      "Transaksi dicatat saat terjadi, bukan dikumpulkan dan diinput di akhir minggu atau akhir bulan",
      "Tanggal jatuh tempo dan syarat pembayaran diisi dengan benar untuk setiap pelanggan dan pemasok",
      "Penerimaan dan pengeluaran bank direkonsiliasi secara rutin, idealnya harian atau mingguan",
      "Pergerakan stok — penerimaan, pengeluaran, retur, dan penyesuaian — tercatat lengkap di sistem",
      "Ada pemilik proses yang jelas untuk setiap jenis data, sehingga kesalahan cepat diketahui dan diperbaiki",
    ],
  },
  {
    type: "p",
    text: "Syarat-syarat ini lebih banyak menyangkut kebiasaan kerja daripada teknologi. Karena itu, implementasi ERP yang berhasil selalu disertai perubahan proses dan pelatihan tim, bukan hanya pemasangan perangkat lunak. Sistem yang canggih dengan data yang terlambat hanya akan menghasilkan laporan yang terlambat dengan tampilan yang lebih bagus.",
  },
  { type: "h2", text: "Memulai dari kebutuhan kas yang paling mendesak" },
  {
    type: "p",
    text: "Tidak semua bisnis perlu menerapkan seluruh modul ERP sekaligus untuk mendapatkan visibilitas arus kas. Pendekatan yang lebih realistis adalah memulai dari pertanyaan kas yang paling sering membuat manajemen kesulitan, lalu memastikan data yang dibutuhkan untuk menjawabnya tersedia dan terhubung.",
  },
  {
    type: "p",
    text: "Jika masalah terbesar adalah piutang yang lambat tertagih, prioritasnya adalah modul penjualan dan piutang yang terhubung dengan pencatatan pembayaran. Jika masalahnya adalah stok yang menumpuk, prioritasnya adalah persediaan dan pembelian. Setelah fondasi ini berjalan dengan disiplin, modul lain bisa ditambahkan secara bertahap, dan setiap tambahan membuat gambaran arus kas semakin lengkap.",
  },
  {
    type: "p",
    text: "Bagi bisnis dengan proses yang sangat spesifik, ERP yang dibangun atau dikustomisasi sesuai alur kerja bisa menjadi pilihan yang lebih tepat daripada memaksakan proses mengikuti sistem standar. Yang terpenting adalah hasil akhirnya: satu sumber data yang dipercaya semua bagian, dan pertanyaan kas yang bisa dijawab kapan pun dibutuhkan.",
  },
  {
    type: "p",
    text: "Libatkan bagian keuangan sejak awal perancangan. Merekalah yang paling memahami pertanyaan apa yang sering diajukan pemilik bisnis, laporan apa yang saat ini disusun secara manual, dan di bagian mana angka dari berbagai sumber paling sering tidak cocok. Masukan mereka membantu memastikan sistem yang dibangun benar-benar menjawab kebutuhan kas sehari-hari, bukan sekadar menghasilkan laporan standar yang jarang dibuka.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Kesulitan kas jarang datang tiba-tiba. Tanda-tandanya biasanya sudah ada di data — piutang yang mulai menua, stok yang tidak bergerak, jadwal pembayaran yang menumpuk di minggu yang sama. Masalahnya, data itu tersebar di tempat yang berbeda dan baru disatukan ketika sudah terlambat. ERP yang diterapkan dengan disiplin membuat tanda-tanda itu terlihat lebih awal, sehingga keputusan bisa diambil ketika pilihannya masih banyak, bukan ketika hanya tersisa langkah darurat.",
  },
  {
    type: "cta",
    title: "Sering kaget dengan posisi kas di akhir bulan?",
    text: "Tim AG·SORA dapat membantu memetakan alur data penjualan, pembelian, persediaan, dan keuangan Anda, lalu merancang sistem ERP yang membuat posisi kas terlihat setiap hari. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/erp",
    label: "Konsultasi Gratis",
  },
];
