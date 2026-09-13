import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Keputusan sudah diambil: bisnis Anda akan beralih ke ERP. Brosur vendor menampilkan belasan modul — keuangan, inventori, pembelian, penjualan, produksi, aset, proyek, SDM. Semua terlihat penting. Semua terlihat mendesak. Godaannya adalah menyalakan semuanya sekaligus di hari yang sama.",
  },
  {
    type: "p",
    text: "Pendekatan “sekaligus” memang terdengar efisien: integrasi langsung terasa, dan tidak perlu mengulang proses peralihan berkali-kali. Tetapi dalam praktik, cara ini justru menjadi salah satu penyebab paling umum penerapan ERP yang tersendat. Terlalu banyak yang berubah dalam waktu yang sama, dan ketika ada masalah, sulit mengetahui dari mana asalnya.",
  },
  {
    type: "p",
    text: "Artikel ini membahas cara menentukan modul ERP mana yang sebaiknya diterapkan lebih dulu, pola urutan yang umumnya masuk akal untuk berbagai jenis bisnis, dan kriteria kapan sebuah modul benar-benar siap dilanjutkan ke tahap berikutnya.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Penerapan bertahap menurunkan risiko dan mempercepat manfaat yang terasa",
      "Pilih titik awal berdasarkan masalah paling mahal, ketergantungan antar modul, dan kesiapan data",
      "Data master adalah fondasi yang harus rapi sebelum modul apa pun berjalan",
      "Bisnis multi-cabang sebaiknya memulai dari satu cabang percontohan",
      "Tetapkan kriteria “siap lanjut” sebelum masuk ke modul berikutnya",
    ],
  },
  { type: "h2", text: "Kenapa tidak menerapkan semua modul sekaligus" },
  {
    type: "p",
    text: "Setiap modul ERP membutuhkan tiga hal: data yang bersih, aturan yang jelas, dan pengguna yang terlatih. Ketika semua modul dimulai bersamaan, ketiga kebutuhan itu harus dipenuhi untuk seluruh perusahaan dalam waktu yang sama. Tim keuangan belajar modul akuntansi sambil tim gudang belajar modul inventori, sementara tim pembelian mencoba memahami alur persetujuan baru.",
  },
  {
    type: "p",
    text: "Masalah di satu modul juga cepat menjalar. Kesalahan pencatatan penerimaan barang di modul inventori memengaruhi utang di modul keuangan dan laporan biaya di modul pembelian. Ketika semuanya baru, sulit menentukan apakah masalahnya ada di konfigurasi, di data, atau di cara pengguna memakai sistem. Hasilnya, kepercayaan terhadap sistem baru turun sejak minggu pertama.",
  },
  { type: "h2", text: "Pertimbangan 1: di mana masalahnya paling mahal" },
  {
    type: "p",
    text: "Modul yang menjawab masalah paling mahal hari ini akan paling cepat dirasakan manfaatnya. Jika selisih stok setiap bulan menggerus margin, modul inventori memberi dampak yang langsung terlihat. Jika tutup buku selalu terlambat berminggu-minggu, modul keuangan menjadi prioritas.",
  },
  {
    type: "p",
    text: "Manfaat yang cepat terasa juga penting secara psikologis. Ketika tim melihat bahwa sistem baru benar-benar mengurangi pekerjaan mereka, dukungan terhadap tahap berikutnya tumbuh dengan sendirinya. Sebaliknya, jika tahap pertama hanya menambah pekerjaan tanpa manfaat yang jelas, tahap berikutnya akan disambut dengan skeptis.",
  },
  { type: "h2", text: "Pertimbangan 2: ketergantungan antar modul" },
  {
    type: "p",
    text: "Beberapa modul menjadi fondasi bagi yang lain. Data master produk, pelanggan, pemasok, dan daftar akun keuangan dipakai hampir di semua modul. Modul penjualan membutuhkan data produk dan pelanggan; modul pembelian membutuhkan data pemasok; semuanya pada akhirnya mengalir ke keuangan.",
  },
  {
    type: "p",
    text: "Memulai dari fondasi membuat modul berikutnya lebih mudah dipasang. Sebaliknya, memulai dari modul yang bergantung pada data yang belum siap berarti membangun di atas tanah yang belum rata.",
  },
  { type: "h2", text: "Pertimbangan 3: kesiapan data" },
  {
    type: "p",
    text: "Modul dengan data yang relatif rapi bisa berjalan lebih cepat. Modul yang datanya berantakan membutuhkan waktu pembersihan yang lebih lama. Jangan biarkan satu modul dengan data terburuk menentukan jadwal seluruh project. Kadang lebih bijak memulai dari modul yang datanya siap sambil membersihkan data modul lain secara paralel.",
  },
  {
    type: "callout",
    title: "Data master dulu, modul kemudian",
    text: "Apa pun modul yang dipilih sebagai titik awal, rapikan data master lebih dulu: kode produk yang seragam, pelanggan dan pemasok tanpa duplikat, satuan yang konsisten, dan struktur akun yang disepakati. Pekerjaan ini hampir selalu lebih lama dari perkiraan.",
  },
  { type: "h2", text: "Pola urutan untuk berbagai jenis bisnis" },
  { type: "h3", text: "Perdagangan dan distribusi" },
  {
    type: "p",
    text: "Untuk bisnis yang membeli dan menjual barang, inventori dan pembelian biasanya menjadi titik awal yang kuat. Stok yang akurat dan penerimaan barang yang tercatat menjadi fondasi bagi penjualan dan penagihan. Setelah itu, modul penjualan dan keuangan menyusul, sehingga alur dari pembelian hingga pembayaran pelanggan tersambung utuh.",
  },
  { type: "h3", text: "Bisnis dengan pencatatan keuangan yang berat" },
  {
    type: "p",
    text: "Jika masalah terbesar ada pada pembukuan manual, rekonsiliasi yang lambat, dan laporan keuangan yang terlambat, modul keuangan dan akuntansi bisa menjadi titik awal. Transaksi dari sistem lain untuk sementara bisa dimasukkan secara ringkas sampai modul operasional menyusul.",
  },
  { type: "h3", text: "Manufaktur" },
  {
    type: "p",
    text: "Manufaktur membutuhkan data master bahan dan daftar bahan per produk yang akurat sebelum modul produksi bisa berjalan. Urutan yang umum adalah data master, lalu inventori bahan baku dan barang jadi, baru kemudian perencanaan dan pencatatan produksi. Memulai dari modul produksi tanpa inventori yang akurat hampir selalu menghasilkan angka biaya produksi yang tidak bisa dipercaya.",
  },
  { type: "h3", text: "Bisnis multi-cabang" },
  {
    type: "p",
    text: "Untuk bisnis dengan beberapa cabang, urutan tidak hanya soal modul, tetapi juga soal lokasi. Terapkan modul pertama di satu cabang sebagai percontohan, perbaiki alur kerja berdasarkan pengalaman nyata, lalu perluas ke cabang lain. Masalah yang ditemukan di satu cabang jauh lebih murah diperbaiki daripada masalah yang terulang di semua cabang sekaligus.",
  },
  { type: "h2", text: "Menentukan kriteria “siap lanjut”" },
  {
    type: "p",
    text: "Sebelum masuk ke modul berikutnya, sepakati tanda bahwa modul sebelumnya benar-benar sudah berjalan. Tanpa kriteria ini, tahap berikutnya sering dimulai hanya karena jadwal mengatakan begitu, bukan karena fondasinya sudah kokoh.",
  },
  {
    type: "ul",
    items: [
      "Tim memakai modul setiap hari tanpa kembali ke cara lama",
      "Tidak ada lagi pencatatan paralel di spreadsheet",
      "Laporan dari modul tersebut dipercaya dan dipakai untuk keputusan",
      "Masalah yang ditemukan di awal sudah diperbaiki",
      "Pengguna kunci bisa membantu rekan kerja tanpa selalu bertanya ke vendor",
    ],
  },
  { type: "h2", text: "Siapa yang harus terlibat di tahap pertama" },
  {
    type: "p",
    text: "Tahap pertama menentukan kesan seluruh perusahaan terhadap ERP. Karena itu, orang yang terlibat di tahap ini perlu dipilih dengan cermat. Selain penanggung jawab project dari sisi bisnis, libatkan pengguna kunci dari divisi yang modulnya diterapkan — orang yang paham detail proses dan dihormati rekan kerjanya.",
  },
  {
    type: "p",
    text: "Pengguna kunci ini akan menjadi tempat bertanya bagi rekan-rekannya, penguji pertama sistem, dan sumber masukan paling jujur tentang apa yang berjalan dan apa yang tidak. Pastikan mereka diberi waktu yang cukup untuk terlibat, bukan sekadar ditambahkan ke daftar tugas yang sudah penuh.",
  },
  { type: "h2", text: "Mengukur keberhasilan setiap tahap" },
  {
    type: "ul",
    items: [
      "Waktu yang dibutuhkan untuk menyelesaikan proses utama dibanding sebelumnya",
      "Akurasi data, misalnya selisih stok dibanding hitung fisik",
      "Jumlah pekerjaan manual atau input ganda yang hilang",
      "Jumlah pertanyaan dan keluhan pengguna dari minggu ke minggu",
      "Laporan yang kini tersedia tanpa rekap manual",
    ],
  },
  {
    type: "p",
    text: "Catat kondisi sebelum tahap dimulai agar ada pembanding. Hasil pengukuran tahap pertama juga menjadi bahan yang kuat untuk meyakinkan divisi lain bahwa tahap berikutnya layak didukung.",
  },
  { type: "h2", text: "Mengelola masa transisi antar modul" },
  {
    type: "p",
    text: "Selama sebagian modul sudah berjalan dan sebagian belum, akan ada masa ketika data harus berpindah antara sistem baru dan cara lama. Rencanakan masa ini dengan jelas: data apa yang dimasukkan ke ERP, data apa yang masih dicatat di tempat lama, dan bagaimana keduanya dicocokkan. Masa transisi yang tidak direncanakan sering menciptakan pekerjaan ganda yang membuat tim frustrasi.",
  },
  { type: "h2", text: "Ilustrasi: dua jalur penerapan" },
  {
    type: "p",
    text: "Bayangkan dua distributor dengan tiga cabang. Distributor pertama menyalakan modul inventori, pembelian, penjualan, dan keuangan di ketiga cabang dalam satu minggu. Tim kewalahan, stok awal ternyata tidak akurat, dan tim keuangan tidak bisa menutup buku karena transaksi dari gudang penuh kesalahan. Beberapa bulan kemudian, sebagian cabang kembali mencatat manual.",
  },
  {
    type: "p",
    text: "Distributor kedua merapikan data master lebih dulu, lalu menerapkan inventori dan pembelian di satu cabang. Setelah stok di cabang itu terbukti akurat, modul yang sama diperluas ke dua cabang lain, disusul penjualan dan keuangan. Jalur ini terlihat lebih lambat di atas kertas, tetapi setiap tahap berdiri di atas fondasi yang sudah teruji — dan sistemnya benar-benar dipakai.",
  },
  { type: "h2", text: "Kesalahan umum dalam menentukan urutan" },
  {
    type: "ul",
    items: [
      "Memulai dari modul yang paling menarik secara visual, bukan yang paling bernilai",
      "Mengabaikan data master karena dianggap pekerjaan administratif",
      "Menerapkan di semua cabang sekaligus tanpa percontohan",
      "Melanjutkan ke modul berikutnya sebelum modul pertama benar-benar dipakai",
      "Tidak merencanakan masa transisi antar modul",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa lama jarak ideal antar modul?" },
  {
    type: "p",
    text: "Tidak ada angka yang berlaku untuk semua bisnis. Jaraknya sebaiknya ditentukan oleh kriteria siap lanjut, bukan kalender. Beberapa modul bisa stabil dalam beberapa minggu, sementara modul lain dengan data yang rumit membutuhkan waktu lebih panjang.",
  },
  { type: "h3", text: "Apakah penerapan bertahap membuat biaya lebih mahal?" },
  {
    type: "p",
    text: "Tidak selalu. Memang ada biaya koordinasi untuk beberapa tahap, tetapi penerapan bertahap mengurangi risiko kegagalan besar yang biayanya jauh lebih mahal. Tahap awal yang berhasil juga memberi pelajaran yang membuat tahap berikutnya lebih efisien.",
  },
  { type: "h3", text: "Bagaimana jika semua modul terasa sama mendesaknya?" },
  {
    type: "p",
    text: "Kembali ke pertanyaan dasar: jika hanya satu masalah yang bisa diselesaikan dalam tiga bulan ke depan, masalah mana yang paling mengubah kondisi bisnis? Jawaban itulah titik awalnya. Rasa “semua mendesak” biasanya berkurang ketika dampak setiap masalah dihitung dengan lebih konkret.",
  },
  { type: "h3", text: "Apakah modul keuangan harus selalu terakhir?" },
  {
    type: "p",
    text: "Tidak. Keuangan sering menyusul karena menerima data dari modul operasional, tetapi untuk bisnis yang masalah utamanya ada di pembukuan, modul keuangan justru bisa menjadi titik awal. Yang penting, jika keuangan diterapkan lebih dulu, siapkan cara yang rapi untuk memasukkan ringkasan transaksi dari operasional sampai modul terkait menyusul.",
  },
  { type: "h3", text: "Bagaimana jika vendor menyarankan semua modul sekaligus?" },
  {
    type: "p",
    text: "Tanyakan alasannya secara spesifik. Ada kondisi tertentu ketika penerapan serentak masuk akal, misalnya bisnis yang sangat kecil dengan alur sederhana. Tetapi jika alasannya hanya efisiensi jadwal atau paket harga, minta vendor menjelaskan bagaimana risiko data, pelatihan, dan dukungan akan dikelola ketika semua modul berjalan bersamaan.",
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "AG·SORA ERP tersedia sebagai platform siap pakai untuk bisnis yang bertumbuh dari satu lokasi hingga beberapa cabang, dan bisa diterapkan bertahap mulai dari modul yang paling mendesak. Untuk alur kerja yang sangat spesifik, ERP juga bisa dirancang mengikuti proses bisnis Anda, dengan urutan penerapan yang disusun bersama sejak awal.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "ERP yang berhasil jarang diterapkan dengan menyalakan semua modul sekaligus. Ia dibangun bertahap: fondasi data yang rapi, modul pertama yang menjawab masalah paling mahal, satu lokasi percontohan, dan kriteria yang jelas sebelum melangkah. Pelan di awal, tetapi jauh lebih pasti di akhir.",
  },
  {
    type: "cta",
    title: "Bingung modul mana yang harus dimulai lebih dulu?",
    text: "Tim AG·SORA bisa membantu memetakan proses Anda dan menyusun urutan penerapan ERP yang paling masuk akal untuk kondisi bisnis Anda.",
    href: "/services/erp",
    label: "Pelajari Layanan ERP",
  },
];
