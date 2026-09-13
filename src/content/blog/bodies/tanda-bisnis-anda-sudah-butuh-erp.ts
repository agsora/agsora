import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Tanggal lima. Laporan bulan lalu belum juga selesai. Tim keuangan sudah dua malam lembur, tiga file rekap masih tidak cocok satu sama lain, dan Anda harus memutuskan pembelian stok minggu ini — tanpa tahu pasti berapa barang yang sebenarnya tersisa di gudang.",
  },
  {
    type: "p",
    text: "Kalau adegan itu terasa akrab, masalahnya hampir pasti bukan pada tim Anda. Masalahnya ada pada cara data bisnis Anda disimpan: terpisah-pisah, disalin berulang kali, dan disatukan dengan tangan. Banyak pemilik bisnis menunda ERP karena menganggapnya hanya untuk perusahaan besar. Padahal yang menentukan kapan bisnis butuh ERP bukan jumlah karyawan atau omzet, melainkan seberapa mahal kekacauan datanya.",
  },
  {
    type: "p",
    text: "Biaya itu jarang muncul sebagai satu tagihan yang jelas. Ia bersembunyi dalam jam lembur di akhir bulan, selisih stok yang tidak pernah terjelaskan, keputusan yang diambil dari data basi, dan ketergantungan pada satu orang yang tahu cara merapikan semuanya. Di artikel ini, Anda akan mengenali tujuh tanda paling umum, cara menilai seberapa serius kondisinya, dan apa yang perlu disiapkan sebelum melangkah.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "ERP menyatukan keuangan, inventori, pembelian, dan penjualan dalam satu sumber data",
      "Kebutuhannya ditentukan oleh biaya data yang terpisah, bukan ukuran perusahaan",
      "Tujuh gejala di bawah ini adalah sinyal yang paling sering muncul lebih dulu",
      "Satu atau dua gejala belum tentu berarti harus ERP; beberapa gejala sekaligus biasanya iya",
      "Penerapan tidak harus menyeluruh — bisa dimulai dari modul yang paling mendesak",
    ],
  },
  { type: "h2", text: "ERP sebenarnya menyelesaikan masalah apa?" },
  {
    type: "p",
    text: "ERP (Enterprise Resource Planning) pada dasarnya adalah cara menyimpan data operasional bisnis dalam satu sistem yang saling terhubung. Ketika sebuah penjualan terjadi, stok berkurang, piutang tercatat, dan laporan keuangan ikut bergerak — tanpa ada orang yang mengetik ulang transaksi yang sama di tiga tempat berbeda. Nilai utamanya bukan pada banyaknya fitur, melainkan pada hilangnya pekerjaan menyalin dan mencocokkan data antar divisi.",
  },
  {
    type: "p",
    text: "Bisnis kecil biasanya tidak merasakan masalah ini, karena volumenya masih bisa ditangani dengan spreadsheet dan ingatan pemilik. Masalah mulai terasa ketika transaksi bertambah, divisi terpisah, cabang dibuka, atau pemilik tidak lagi bisa mengawasi semuanya secara langsung. Pada titik itu, cara kerja yang dulu efisien berubah menjadi sumber keterlambatan dan kesalahan.",
  },
  { type: "h2", text: "1. Laporan bulanan selalu terlambat" },
  {
    type: "p",
    text: "Jika tutup buku selalu molor karena harus menunggu rekap dari beberapa divisi, masalahnya jarang terletak pada kedisiplinan tim. Itu gejala bahwa data tidak mengalir otomatis, sehingga setiap laporan harus dirakit ulang setiap bulan. Tim keuangan menghabiskan hari-hari pertama bulan baru untuk mengumpulkan file, menyamakan format, dan menanyakan angka yang tidak cocok.",
  },
  {
    type: "p",
    text: "Dampaknya lebih dari sekadar lembur. Laporan yang baru selesai di pertengahan bulan berikutnya berarti manajemen melihat kondisi bisnis dengan jeda beberapa minggu. Masalah margin, biaya yang membengkak, atau cabang yang merugi baru diketahui ketika sudah terlambat untuk dikoreksi dalam periode yang sama.",
  },
  { type: "h2", text: "2. Angka stok di sistem berbeda dengan stok fisik" },
  {
    type: "p",
    text: "Selisih stok yang terus berulang biasanya bukan kesalahan satu orang, melainkan tanda bahwa pergerakan barang dicatat di lebih dari satu tempat: nota manual di gudang, spreadsheet admin, dan aplikasi kasir yang tidak saling terhubung. Setiap perpindahan data antar tempat itu membuka peluang salah ketik, lupa catat, atau pencatatan ganda.",
  },
  {
    type: "p",
    text: "Selisih stok juga berdampak langsung pada penjualan. Barang yang tercatat ada ternyata habis, sehingga pesanan pelanggan tertunda. Sebaliknya, barang yang tercatat habis ternyata masih menumpuk di gudang dan tidak terjual. Keduanya adalah uang yang tertahan atau hilang.",
  },
  { type: "h2", text: "3. Satu transaksi diinput berkali-kali" },
  {
    type: "p",
    text: "Coba telusuri perjalanan satu transaksi penjualan di bisnis Anda. Berapa kali transaksi itu diketik ulang? Di kasir atau nota penjualan, di rekap penjualan harian, di kartu stok, lalu di pembukuan. Setiap pengetikan ulang adalah waktu kerja yang tidak menambah nilai, sekaligus peluang kesalahan yang baru ketahuan saat angka tidak cocok.",
  },
  {
    type: "callout",
    title: "Latihan sederhana",
    text: "Ambil satu transaksi dari bulan lalu dan catat semua tempat transaksi itu tercatat, siapa yang mencatatnya, dan berapa lama jeda antar pencatatan. Latihan ini sering lebih meyakinkan daripada presentasi apa pun tentang manfaat ERP.",
  },
  { type: "h2", text: "4. Keputusan diambil dari data minggu lalu" },
  {
    type: "p",
    text: "Ketika kondisi bisnis baru bisa dilihat setelah rekap selesai, keputusan selalu tertinggal dari keadaan sebenarnya. Untuk bisnis dengan perputaran barang yang cepat, jeda beberapa hari saja sudah cukup untuk salah menentukan pembelian, harga, atau promosi. Pemilik akhirnya mengandalkan firasat karena data yang akurat tidak tersedia pada saat dibutuhkan.",
  },
  {
    type: "p",
    text: "Gejala ini sering terlihat dari pertanyaan sederhana yang sulit dijawab dengan cepat: produk mana yang paling menguntungkan bulan ini, cabang mana yang biaya operasionalnya paling tinggi, atau berapa sebenarnya total piutang yang jatuh tempo minggu depan. Jika setiap pertanyaan seperti ini membutuhkan waktu berhari-hari untuk dijawab, data Anda belum bekerja untuk Anda.",
  },
  { type: "h2", text: "5. Menambah cabang terasa jauh lebih berat" },
  {
    type: "p",
    text: "Kalau membuka cabang kedua membuat beban administrasi naik lebih dari dua kali lipat, sistem Anda tidak dirancang untuk bertumbuh. Setiap cabang membawa laporan sendiri, stok sendiri, dan cara pencatatan yang sedikit berbeda, sehingga menggabungkannya menjadi pekerjaan tersendiri. Sistem yang sehat seharusnya membuat cabang berikutnya lebih mudah dikelola, bukan lebih sulit.",
  },
  { type: "h2", text: "6. Terlalu bergantung pada satu orang" },
  {
    type: "p",
    text: "Jika hanya satu orang yang paham cara merapikan laporan atau memperbaiki data yang kacau, bisnis Anda menanggung risiko yang tidak perlu. Ketika orang tersebut cuti, sakit, atau keluar, operasional ikut tersendat. Pengetahuan operasional seharusnya tersimpan dalam proses dan sistem, bukan hanya di kepala seseorang.",
  },
  {
    type: "p",
    text: "Ketergantungan seperti ini juga menyulitkan pengawasan. Ketika hanya satu orang yang memahami alur data, sulit bagi orang lain untuk memeriksa apakah angka yang disajikan benar. Bukan karena orang tersebut tidak jujur, tetapi karena prosesnya tidak cukup transparan untuk diperiksa.",
  },
  { type: "h2", text: "7. Spreadsheet mulai saling menyalin" },
  {
    type: "p",
    text: "Tanda paling jelas adalah ketika ada file rekap yang isinya menyalin dari file lain, lalu dipakai oleh file berikutnya. Rantai seperti ini sangat rapuh. Satu perubahan di hulu tidak terbawa ke hilir, rumus yang rusak tidak disadari, dan pada akhirnya tidak ada yang yakin versi mana yang benar. Spreadsheet adalah alat yang hebat, tetapi tidak dirancang untuk menjadi sistem operasional bersama bagi banyak orang.",
  },
  { type: "h2", text: "Tanda bahwa Anda mungkin belum perlu ERP" },
  {
    type: "p",
    text: "Tidak semua masalah data harus diselesaikan dengan ERP. Jika bisnis Anda masih memiliki satu lokasi, transaksi yang relatif sedikit, dan satu atau dua orang yang mengelola seluruh administrasi dengan lancar, sistem yang lebih sederhana mungkin sudah cukup. Sistem kasir yang baik ditambah pembukuan yang rapi sering menyelesaikan sebagian besar masalah bisnis kecil tanpa kerumitan ERP.",
  },
  {
    type: "ul",
    items: [
      "Laporan bisa disusun dalam satu atau dua hari tanpa lembur",
      "Selisih stok jarang terjadi dan mudah ditelusuri",
      "Belum ada rencana membuka cabang atau saluran penjualan baru dalam waktu dekat",
      "Pemilik masih bisa mengawasi operasional secara langsung setiap hari",
    ],
  },
  { type: "h2", text: "Cara menilai apakah sudah waktunya" },
  {
    type: "p",
    text: "Satu atau dua gejala di atas belum tentu berarti Anda harus segera menerapkan ERP. Tetapi jika tiga atau lebih gejala muncul bersamaan, terutama laporan yang terlambat, selisih stok, dan input berulang, biaya dari kondisi saat ini kemungkinan sudah melebihi biaya perbaikannya. Untuk menilainya lebih objektif, coba perkirakan beberapa hal berikut.",
  },
  {
    type: "ol",
    items: [
      "Berapa jam kerja per bulan yang habis untuk menyalin, merekap, dan mencocokkan data",
      "Berapa nilai selisih stok yang ditemukan dalam beberapa periode terakhir",
      "Berapa lama jeda antara akhir bulan dan laporan keuangan yang siap dibaca",
      "Keputusan penting apa saja yang tertunda karena data belum tersedia",
      "Seberapa besar risiko jika orang kunci di administrasi tidak ada",
    ],
  },
  {
    type: "p",
    text: "Perkiraan ini tidak perlu sempurna. Tujuannya adalah mengubah rasa “sepertinya kacau” menjadi gambaran yang cukup konkret untuk dibandingkan dengan biaya dan usaha penerapan sistem baru.",
  },
  {
    type: "callout",
    title: "Tidak harus langsung menyeluruh",
    text: "ERP tidak wajib diterapkan sekaligus. Banyak bisnis memulai dari modul yang paling menyakitkan — biasanya inventori atau keuangan — lalu memperluas setelah tim terbiasa dan datanya terbukti bisa dipercaya.",
  },
  { type: "h2", text: "Yang perlu disiapkan sebelum memulai" },
  {
    type: "p",
    text: "Sebelum membicarakan software, petakan dulu alur kerja yang berjalan hari ini, termasuk kebiasaan yang tidak pernah tertulis. Implementasi ERP paling sering bermasalah bukan karena aplikasinya kurang canggih, tetapi karena sistem dibangun di atas asumsi proses yang ternyata berbeda dengan praktik di lapangan.",
  },
  {
    type: "ul",
    items: [
      "Daftar alur kerja utama: pembelian, penerimaan barang, penjualan, penagihan, pembayaran",
      "Siapa melakukan apa di setiap alur, dan siapa yang menyetujui",
      "Laporan yang benar-benar dipakai untuk mengambil keputusan",
      "Kondisi data master: daftar produk, pelanggan, pemasok, dan akun keuangan",
      "Orang yang akan menjadi penanggung jawab project dari sisi bisnis",
    ],
  },
  {
    type: "p",
    text: "Data master sering menjadi pekerjaan paling lama. Kode produk yang tidak seragam, pelanggan yang tercatat ganda, dan satuan yang berbeda-beda harus dirapikan sebelum bisa dipindahkan ke sistem baru. Memulai perapian ini lebih awal, bahkan sebelum memilih sistem, hampir selalu mempercepat penerapan.",
  },
  { type: "h2", text: "Kesalahan umum saat memutuskan pindah ke ERP" },
  {
    type: "ul",
    items: [
      "Memilih sistem berdasarkan daftar fitur terpanjang, bukan kecocokan dengan proses",
      "Menyerahkan project sepenuhnya ke tim IT tanpa keterlibatan pemilik proses",
      "Memindahkan semua data historis tanpa dibersihkan lebih dulu",
      "Menerapkan semua modul sekaligus di semua cabang",
      "Menganggap project selesai saat sistem dipasang, bukan saat tim benar-benar memakainya",
    ],
  },
  {
    type: "p",
    text: "Sebagian besar kesalahan ini berakar pada hal yang sama: memperlakukan ERP sebagai pembelian software, padahal sebenarnya ia adalah perubahan cara kerja. Software hanya alat; yang menentukan hasilnya adalah seberapa baik proses dirancang dan seberapa konsisten tim menjalankannya.",
  },
  { type: "h2", text: "ERP siap pakai atau dibangun khusus?" },
  {
    type: "p",
    text: "Setelah yakin membutuhkan ERP, pertanyaan berikutnya adalah bentuknya. ERP siap pakai dengan biaya berlangganan cocok untuk bisnis dengan proses yang relatif umum dan ingin segera berjalan tanpa investasi awal yang besar. Di AG·SORA, pilihan ini tersedia sebagai AG·SORA ERP, yang dirancang untuk bisnis yang bertumbuh dari satu lokasi hingga beberapa cabang.",
  },
  {
    type: "p",
    text: "Sebaliknya, jika alur kerja Anda memiliki banyak aturan khusus, integrasi dengan sistem yang sudah berjalan, atau kebutuhan yang tidak diakomodasi produk umum, ERP yang dibangun sesuai proses bisnis Anda bisa menjadi pilihan yang lebih tepat dalam jangka panjang. Dalam praktiknya, keputusan ini paling baik diambil setelah alur kerja dipetakan, bukan sebelumnya — karena hasil pemetaan itulah yang menunjukkan seberapa jauh proses Anda berbeda dari yang umum.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "ERP bukan penanda status perusahaan besar, melainkan jawaban atas masalah yang sangat spesifik: data operasional yang terpisah-pisah dan mahal untuk disatukan. Jika beberapa tanda di artikel ini terasa akrab, langkah pertama yang paling berguna bukan langsung memilih software, tetapi memetakan di mana data Anda tercecer dan berapa biaya yang ditimbulkannya. Dari situ, keputusan tentang kapan dan bagaimana menerapkan ERP bisa diambil dengan jauh lebih yakin.",
  },
  {
    type: "cta",
    title: "Tiga dari tujuh tanda terasa akrab?",
    text: "Ceritakan kondisi operasional Anda. Tim AG·SORA akan membantu memetakan di mana data Anda tercecer dan langkah pertama yang paling masuk akal — konsultasinya gratis, tanpa komitmen.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
