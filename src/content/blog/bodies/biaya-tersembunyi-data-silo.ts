import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Rapat Senin pagi. Tim sales membawa angka penjualan bulan lalu. Tim keuangan membawa angka yang berbeda. Kepala gudang punya versi ketiga. Tiga puluh menit pertama rapat habis untuk berdebat soal angka mana yang benar — dan keputusan yang seharusnya diambil hari itu ditunda sampai minggu depan.",
  },
  {
    type: "p",
    text: "Tidak ada yang berbohong di ruangan itu. Setiap divisi membawa data yang benar menurut catatannya sendiri. Masalahnya, catatan itu terpisah-pisah. Inilah yang disebut data silo: informasi yang sama disimpan oleh divisi berbeda, dengan cara berbeda, tanpa satu sumber yang disepakati. Biayanya tidak pernah muncul sebagai tagihan, tetapi dibayar setiap minggu dalam bentuk waktu, keputusan yang tertunda, dan kepercayaan yang terkikis. Artikel ini membongkar dari mana silo berasal, berapa biayanya, dan bagaimana mengatasinya tanpa harus mengganti semua sistem sekaligus.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Data silo terbentuk dari niat baik: setiap divisi membuat catatan untuk kebutuhannya sendiri",
      "Biayanya muncul sebagai waktu rekonsiliasi, keputusan tertunda, dan risiko audit",
      "Gejala paling jelas: rapat yang dimulai dengan perdebatan soal angka",
      "Solusinya dimulai dari menetapkan satu sumber resmi untuk data yang paling sering diperdebatkan",
      "Integrasi bertahap sering lebih realistis daripada mengganti semua sistem",
    ],
  },
  { type: "h2", text: "Bagaimana data silo terbentuk" },
  {
    type: "p",
    text: "Hampir tidak ada perusahaan yang sengaja membangun silo. Silo tumbuh pelan-pelan dari keputusan yang masing-masing masuk akal. Satu tim membutuhkan laporan yang tidak disediakan sistem, lalu membuat spreadsheet sendiri. Tim lain melakukan hal serupa untuk kebutuhan berbeda. Beberapa bulan kemudian, ada empat versi angka penjualan, dan tidak ada yang sepenuhnya salah.",
  },
  { type: "h3", text: "Aplikasi dipilih per divisi" },
  {
    type: "p",
    text: "Tim sales memilih aplikasi CRM, gudang memakai aplikasi stok, keuangan memakai software akuntansi. Masing-masing aplikasi bagus untuk fungsinya, tetapi tidak saling terhubung. Data pelanggan di CRM tidak sama dengan data pelanggan di akuntansi, dan tidak ada yang tahu mana yang terbaru.",
  },
  { type: "h3", text: "Pertumbuhan cabang dan saluran baru" },
  {
    type: "p",
    text: "Setiap cabang atau saluran penjualan baru — toko online, marketplace, sales lapangan — sering dimulai dengan pencatatannya sendiri agar cepat berjalan. Tanpa rencana penyatuan, setiap saluran menjadi pulau data yang terpisah.",
  },
  { type: "h3", text: "Solusi sementara yang menjadi permanen" },
  {
    type: "p",
    text: "Spreadsheet yang dibuat “untuk sementara” sambil menunggu sistem yang lebih baik sering bertahan bertahun-tahun. Lama-kelamaan, file itu menjadi tempat data penting tersimpan, dengan rumus yang hanya dipahami pembuatnya.",
  },
  { type: "h2", text: "Gejala yang mudah dikenali" },
  {
    type: "ul",
    items: [
      "Rapat dimulai dengan menyepakati angka mana yang benar",
      "Pertanyaan sederhana butuh berhari-hari untuk dijawab",
      "Data pelanggan atau produk tercatat berbeda di sistem yang berbeda",
      "Ada orang yang pekerjaan utamanya menyalin data dari satu tempat ke tempat lain",
      "Laporan gabungan hanya bisa dibuat oleh satu orang tertentu",
      "Divisi saling menyalahkan ketika angka tidak cocok",
    ],
  },
  { type: "h2", text: "Biaya pertama: waktu yang terbuang" },
  {
    type: "p",
    text: "Setiap kali data dari dua sumber harus dicocokkan, seseorang menghabiskan waktu untuk itu. Menyalin pesanan dari satu aplikasi ke aplikasi lain, merekonsiliasi stok antara gudang dan kasir, atau menyamakan daftar pelanggan antara sales dan keuangan. Pekerjaan ini tidak menambah nilai apa pun bagi pelanggan; ia hanya ada karena data tidak berada di satu tempat.",
  },
  {
    type: "p",
    text: "Karena tersebar di banyak orang dan banyak hari, waktu ini jarang dihitung. Tetapi jika dijumlahkan dalam sebulan, hasilnya sering mengejutkan — setara dengan beberapa hari kerja, bahkan beberapa minggu kerja, yang dihabiskan untuk memindahkan dan mencocokkan data.",
  },
  { type: "h2", text: "Biaya kedua: keputusan yang meleset" },
  {
    type: "p",
    text: "Keputusan yang diambil dari data yang tidak lengkap atau tidak terbaru berisiko keliru. Pembelian stok berdasarkan angka gudang yang belum memperhitungkan pesanan online, target sales berdasarkan data yang belum memasukkan retur, atau harga yang ditetapkan tanpa melihat biaya terbaru. Setiap keputusan yang meleset punya harga, dan harga itu sering jauh lebih besar daripada waktu yang terbuang.",
  },
  { type: "h2", text: "Biaya ketiga: rapat yang tidak memutuskan" },
  {
    type: "p",
    text: "Rapat seharusnya menjadi tempat mengambil keputusan. Dalam organisasi dengan data silo, rapat berubah menjadi tempat menyepakati fakta. Waktu para pengambil keputusan — yang biasanya paling mahal — habis untuk hal yang seharusnya sudah jelas sebelum rapat dimulai.",
  },
  {
    type: "callout",
    title: "Gejala paling mudah dikenali",
    text: "Jika rapat rutin Anda sering dimulai dengan perdebatan tentang angka mana yang benar, Anda sedang membayar biaya data silo setiap minggu — hanya saja tagihannya tidak pernah datang dalam bentuk invoice.",
  },
  { type: "h2", text: "Biaya keempat: kepercayaan dan audit" },
  {
    type: "p",
    text: "Ketika angka sering berbeda, orang berhenti mempercayai laporan. Manajemen mulai meminta konfirmasi berulang, divisi saling curiga, dan setiap laporan harus diperiksa ulang. Dari sisi audit, data yang tersebar tanpa jejak perubahan yang jelas menyulitkan penelusuran, sehingga proses pemeriksaan menjadi lebih lama dan lebih mahal.",
  },
  { type: "h2", text: "Biaya kelima: pengalaman pelanggan" },
  {
    type: "p",
    text: "Pelanggan juga merasakan akibatnya. Mereka ditawari barang yang ternyata habis, ditagih untuk pesanan yang sudah dibatalkan, atau harus menjelaskan ulang masalahnya kepada setiap orang yang mereka hubungi karena riwayat interaksi tidak tersimpan di satu tempat. Pengalaman seperti ini jarang terlihat di laporan, tetapi sangat terasa pada loyalitas pelanggan.",
  },
  { type: "h2", text: "Latihan: memperkirakan biaya silo di bisnis Anda" },
  {
    type: "ol",
    items: [
      "Daftar data yang paling sering diperdebatkan: penjualan, stok, pelanggan, atau biaya",
      "Untuk setiap data, catat berapa tempat data itu disimpan",
      "Perkirakan jam per minggu yang habis untuk menyalin dan mencocokkannya",
      "Catat keputusan dalam beberapa bulan terakhir yang tertunda atau meleset karena data",
      "Tanyakan kepada tim yang berhadapan dengan pelanggan: keluhan apa yang berakar pada data tidak sinkron?",
    ],
  },
  {
    type: "p",
    text: "Hasil latihan ini tidak perlu presisi. Tujuannya memberi gambaran yang cukup untuk memprioritaskan data mana yang paling mendesak untuk disatukan.",
  },
  { type: "h2", text: "Apa arti “satu sumber data”" },
  {
    type: "p",
    text: "Satu sumber data tidak berarti semua divisi harus memakai satu aplikasi. Artinya, untuk setiap jenis data, ada satu tempat yang disepakati sebagai sumber resmi. Sistem lain boleh tetap ada dan menampilkan data itu, tetapi mereka mengambilnya dari sumber resmi, bukan menyimpan versinya sendiri.",
  },
  {
    type: "p",
    text: "Misalnya, data stok resmi berada di sistem inventori. Aplikasi kasir, toko online, dan laporan manajemen semuanya membaca dari sana. Ketika ada penjualan di saluran mana pun, stok di sumber resmi berkurang, dan semua saluran melihat angka yang sama.",
  },
  { type: "h2", text: "Silo yang paling sering terlupakan: definisi" },
  {
    type: "p",
    text: "Tidak semua silo berbentuk sistem yang terpisah. Silo yang paling licin justru berbentuk definisi yang berbeda. Tim sales menghitung “penjualan” saat pesanan disepakati. Tim keuangan menghitungnya saat faktur diterbitkan. Gudang menghitungnya saat barang dikirim. Ketiganya bisa memakai sistem yang sama dan tetap menghasilkan angka berbeda, karena yang dihitung memang berbeda.",
  },
  {
    type: "p",
    text: "Hal yang sama terjadi pada istilah seperti “pelanggan aktif”, “stok tersedia”, atau “biaya operasional”. Tanpa definisi yang disepakati dan tertulis, menyatukan sistem tidak akan menyelesaikan perdebatan. Karena itu, langkah pertama membongkar silo sering kali bukan urusan teknologi, melainkan menyusun kamus data sederhana yang disepakati semua divisi.",
  },
  {
    type: "ul",
    items: [
      "Nama istilah dan definisinya dalam satu kalimat yang jelas",
      "Kapan sebuah transaksi dihitung, misalnya saat pesanan, faktur, atau pengiriman",
      "Sistem yang menjadi sumber resmi angka tersebut",
      "Orang yang bertanggung jawab atas kebenarannya",
    ],
  },
  { type: "h2", text: "Setiap data butuh pemilik" },
  {
    type: "p",
    text: "Satu sumber data hanya bertahan jika ada orang yang bertanggung jawab menjaganya. Pemilik data bukan orang yang mengetik data, melainkan orang yang berwenang memutuskan aturan dan kebenarannya. Kepala gudang untuk data stok, manajer penjualan untuk data pelanggan, kepala keuangan untuk data biaya. Ketika muncul perbedaan, semua pihak tahu kepada siapa harus bertanya — dan perdebatan tidak lagi berputar tanpa ujung.",
  },
  { type: "h2", text: "Membongkar silo secara bertahap" },
  {
    type: "ol",
    items: [
      "Pilih satu jenis data yang paling sering diperdebatkan sebagai titik awal",
      "Sepakati sumber resminya dan definisinya, termasuk cara menghitungnya",
      "Hubungkan sistem lain agar membaca dari sumber resmi",
      "Hentikan penyimpanan versi paralel di spreadsheet",
      "Setelah berjalan dan dipercaya, lanjutkan ke jenis data berikutnya",
    ],
  },
  { type: "h3", text: "Integrasi atau penyatuan sistem?" },
  {
    type: "p",
    text: "Ada dua pendekatan utama. Integrasi menghubungkan sistem yang sudah ada lewat API sehingga data mengalir otomatis. Penyatuan mengganti beberapa sistem terpisah dengan satu sistem terintegrasi seperti ERP. Integrasi cocok ketika sistem yang ada sudah bekerja baik dan hanya perlu terhubung. Penyatuan lebih masuk akal ketika sistem yang ada sudah tidak memadai atau terlalu banyak untuk dihubungkan satu per satu.",
  },
  { type: "h2", text: "Kesalahan saat membongkar silo" },
  {
    type: "ul",
    items: [
      "Mencoba menyatukan semua data sekaligus",
      "Menetapkan sumber resmi tanpa menyepakati definisi datanya",
      "Menghubungkan sistem, tetapi tetap membiarkan spreadsheet paralel berjalan",
      "Tidak menunjuk pemilik data yang bertanggung jawab atas kebenarannya",
    ],
  },
  { type: "h2", text: "Lima pertanyaan untuk dimulai minggu ini" },
  {
    type: "p",
    text: "Membongkar silo tidak harus menunggu project besar. Beberapa pertanyaan sederhana bisa diajukan dalam rapat berikutnya, dan jawabannya sering sudah cukup untuk menunjukkan titik awal yang paling bernilai.",
  },
  {
    type: "ol",
    items: [
      "Angka apa yang paling sering diperdebatkan dalam rapat sebulan terakhir?",
      "Di berapa tempat angka itu dicatat, dan siapa yang mencatat masing-masing?",
      "Apakah semua pihak mendefinisikan angka itu dengan cara yang sama?",
      "Siapa yang seharusnya berwenang memutuskan angka mana yang benar?",
      "Apa yang terjadi jika hanya satu sumber yang dipakai mulai bulan depan?",
    ],
  },
  {
    type: "p",
    text: "Pertanyaan terakhir biasanya memunculkan keberatan yang paling jujur: laporan tertentu tidak tersedia di sumber resmi, atau ada kebutuhan divisi yang belum terakomodasi. Keberatan itulah daftar pekerjaan nyata yang perlu diselesaikan agar silo benar-benar hilang, bukan sekadar berpindah tempat.",
  },
  { type: "h2", text: "Tanda silo mulai terbongkar" },
  {
    type: "ul",
    items: [
      "Rapat langsung membahas keputusan, bukan menyepakati angka",
      "Pertanyaan tentang penjualan atau stok bisa dijawab dalam hitungan menit",
      "Tidak ada lagi file rekap yang disalin dari file lain",
      "Divisi berbeda merujuk laporan yang sama",
      "Pelanggan tidak perlu menjelaskan ulang masalahnya ke setiap orang",
    ],
  },
  {
    type: "p",
    text: "Perubahan ini biasanya terasa lebih dulu di ritme kerja sehari-hari daripada di laporan. Rapat menjadi lebih pendek, pertanyaan lebih cepat terjawab, dan tim berhenti menghabiskan energi untuk membuktikan bahwa angka mereka yang benar.",
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "Untuk bisnis yang ingin menyatukan keuangan, inventori, dan pembelian dalam satu sistem, AG·SORA ERP tersedia sebagai platform siap pakai. Jika sistem yang Anda miliki sudah bekerja baik dan hanya perlu saling terhubung, layanan integrasi API bisa menjadi langkah yang lebih ringan dan lebih cepat.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Data silo adalah biaya yang tidak pernah muncul di laporan keuangan, tetapi dibayar setiap hari. Anda tidak perlu mengganti semua sistem untuk mulai menguranginya. Mulailah dari satu jenis data yang paling sering diperdebatkan, tetapkan satu sumber resmi, dan rasakan bedanya di rapat berikutnya.",
  },
  {
    type: "cta",
    title: "Lelah berdebat soal angka mana yang benar?",
    text: "Kami bantu memetakan di mana data Anda terpisah dan cara paling ringan untuk menyatukannya — lewat integrasi atau sistem terpadu.",
    href: "/services/api-integration",
    label: "Pelajari Integrasi Sistem",
  },
];
