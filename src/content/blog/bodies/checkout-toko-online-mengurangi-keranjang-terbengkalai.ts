import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Bagi toko online, ada momen yang menyakitkan namun sangat umum: pelanggan sudah memilih barang, memasukkannya ke keranjang, bahkan mungkin sudah mengisi sebagian data, lalu pergi tanpa menyelesaikan pembayaran. Anda sudah membayar iklan, merancang halaman, dan meyakinkan mereka sampai hampir di garis akhir, tetapi penjualan tidak terjadi. Fenomena ini dikenal sebagai keranjang terbengkalai, dan hampir semua toko online mengalaminya.",
  },
  {
    type: "p",
    text: "Kabar baiknya, sebagian penyebabnya dapat diperbaiki lewat desain dan alur checkout yang lebih baik. Kabar yang lebih jujur: tidak semua keranjang terbengkalai adalah kehilangan yang bisa dicegah. Sebagian orang memang hanya membandingkan harga, menyimpan barang untuk nanti, atau terganggu hal lain. Tugas Anda bukan menghilangkan fenomena itu, melainkan menyingkirkan hambatan yang sebenarnya bisa dihindari.",
  },
  {
    type: "p",
    text: "Artikel ini membahas alasan umum orang meninggalkan checkout dan perbaikan praktis untuk tiap alasan, mulai dari biaya tak terduga, formulir yang melelahkan, pilihan pembayaran yang kurang, hingga kepercayaan dan kecepatan. Kami tidak memakai angka rekaan tentang persentase keranjang terbengkalai; yang kami tawarkan adalah cara memeriksa data toko Anda sendiri dan memperbaikinya selangkah demi selangkah.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Hambatan checkout yang paling umum: biaya tambahan yang muncul terlambat, formulir terlalu panjang, pilihan pembayaran terbatas, kurang percaya, dan halaman lambat",
      "Tampilkan total biaya, termasuk ongkos kirim, sedini mungkin agar tidak ada kejutan di akhir",
      "Kurangi isian ke yang benar-benar perlu, izinkan checkout tanpa membuat akun, dan sediakan pembayaran yang akrab bagi pelanggan Anda",
      "Bangun kepercayaan lewat kebijakan yang jelas, tanda keamanan yang nyata, dan kontak yang mudah dihubungi",
      "Ukur tiap tahap alur untuk tahu di mana pelanggan berhenti, lalu perbaiki satu hal per satu waktu",
    ],
  },
  { type: "h2", text: "Memahami di mana pelanggan berhenti" },
  {
    type: "p",
    text: "Sebelum memperbaiki apa pun, ketahui dulu di tahap mana pelanggan Anda pergi. Alur belanja online biasanya terdiri dari beberapa langkah: melihat produk, menambah ke keranjang, memulai checkout, mengisi data pengiriman, memilih pembayaran, dan menyelesaikan pesanan. Dengan melihat berapa banyak orang yang bertahan dari satu langkah ke langkah berikutnya, Anda bisa menemukan titik kebocoran terbesar.",
  },
  {
    type: "p",
    text: "Data ini bisa diperoleh dari alat analitik website atau dari sistem toko Anda. Jika banyak orang menambah ke keranjang tetapi sedikit yang memulai checkout, masalahnya mungkin ada di halaman keranjang, misalnya biaya yang mengejutkan. Jika banyak yang memulai tetapi berhenti di formulir, perbaiki formulirnya. Jika berhenti di langkah pembayaran, periksa pilihan metode bayar dan kepercayaan. Memperbaiki sesuai data jauh lebih efektif daripada menebak.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    alt: "Seseorang memegang kartu pembayaran sambil berbelanja di laptop",
    caption: "Pelanggan yang sudah memegang kartunya adalah yang paling dekat dengan membeli; jangan biarkan alur checkout membuatnya ragu.",
  },
  { type: "h2", text: "Hambatan 1: biaya tak terduga" },
  {
    type: "p",
    text: "Alasan yang paling sering membuat orang meninggalkan checkout adalah total yang ternyata lebih mahal dari bayangan. Ongkos kirim, biaya layanan, atau pajak yang baru muncul di langkah akhir terasa seperti jebakan, dan banyak orang langsung pergi. Rasa tertipu lebih berbahaya bagi hubungan dengan pelanggan daripada harga yang sedikit lebih tinggi tetapi jujur sejak awal.",
  },
  {
    type: "ul",
    items: [
      "Tampilkan perkiraan ongkos kirim sedini mungkin, misalnya di halaman produk atau keranjang",
      "Jelaskan syarat gratis ongkir dengan jelas, termasuk berapa lagi yang dibutuhkan untuk memenuhinya",
      "Rinci semua komponen biaya sebelum pelanggan mengisi data pribadi",
      "Hindari biaya tersembunyi atau tambahan yang baru muncul di tahap pembayaran",
      "Tampilkan estimasi waktu pengiriman agar pelanggan tahu kapan barang tiba",
    ],
  },
  { type: "h2", text: "Hambatan 2: formulir yang melelahkan" },
  {
    type: "p",
    text: "Setiap kolom tambahan adalah alasan tambahan untuk menyerah, terutama di layar ponsel yang kecil. Formulir yang meminta data tidak diperlukan, seperti tanggal lahir atau banyak nomor telepon, memperpanjang proses tanpa menambah nilai bagi pelanggan. Pikirkan dengan jujur: informasi mana yang benar-benar dibutuhkan untuk mengirim dan menagih pesanan ini?",
  },
  {
    type: "p",
    text: "Pertimbangkan juga memaksa pembuatan akun sebelum membeli. Bagi pembeli baru, ini hambatan besar, karena mereka belum yakin ingin berbelanja berulang. Tawarkan checkout sebagai tamu, dan ajak mereka membuat akun setelah pesanan selesai dengan manfaat yang jelas, seperti pelacakan pesanan dan pemesanan ulang cepat. Untuk pelanggan yang sudah punya akun, pastikan data alamat tersimpan dan terisi otomatis.",
  },
  {
    type: "ol",
    items: [
      "Hapus kolom yang tidak mutlak diperlukan untuk memproses dan mengirim pesanan",
      "Izinkan checkout sebagai tamu, tawarkan pembuatan akun sesudahnya",
      "Gunakan pengisian otomatis alamat dan tipe papan ketik yang sesuai di ponsel, misalnya papan angka untuk nomor telepon",
      "Validasi isian secara langsung dan jelaskan kesalahan dengan bahasa yang mudah dipahami, tepat di dekat kolomnya",
      "Tampilkan kemajuan langkah agar pelanggan tahu seberapa dekat dengan selesai",
      "Pertahankan isian yang sudah diketik bila terjadi kesalahan, jangan sampai harus mengulang dari awal",
    ],
  },
  { type: "h2", text: "Hambatan 3: pilihan pembayaran yang kurang" },
  {
    type: "p",
    text: "Pelanggan merasa paling nyaman membayar dengan cara yang akrab bagi mereka. Jika metode favorit mereka tidak tersedia, sebagian akan pergi daripada memakai cara lain yang kurang dipercaya. Pilihan yang relevan berbeda menurut pasar dan jenis pelanggan Anda, sehingga amati apa yang biasa dipakai pelanggan, baik dari data transaksi maupun dari pertanyaan yang mereka ajukan ke layanan pelanggan.",
  },
  {
    type: "p",
    text: "Di Indonesia, pilihan seperti transfer bank, dompet digital, QRIS, kartu, dan pembayaran di gerai sering menjadi bagian dari bauran yang diharapkan pelanggan. Namun jangan menambah metode sebanyak-banyaknya tanpa pertimbangan; setiap metode membawa biaya, proses rekonsiliasi, dan kerumitan pengelolaan tersendiri. Pilih yang paling relevan, lalu pastikan prosesnya mulus. Pembahasan terkait di kasir fisik dapat dibaca pada artikel kami tentang menerapkan QRIS di kasir.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    alt: "Tas belanja merah dan hitam berjajar di atas latar gelap",
    caption: "Pelanggan yang siap membeli sebaiknya tidak dibuat menunggu atau bingung di langkah terakhir.",
  },
  { type: "h2", text: "Hambatan 4: kurang percaya" },
  {
    type: "p",
    text: "Di langkah pembayaran, pelanggan menyerahkan data yang sensitif kepada toko yang mungkin baru mereka kenal. Kepercayaan menjadi penentu. Tanda-tanda sederhana sangat berpengaruh: alamat website yang aman, tampilan yang rapi dan profesional, informasi kontak dan alamat usaha yang jelas, serta kebijakan retur dan pengiriman yang mudah ditemukan dan dibaca.",
  },
  {
    type: "p",
    text: "Ulasan asli dari pembeli sebelumnya juga membantu, tetapi harus asli. Jangan mengarang ulasan atau menampilkan klaim yang tidak bisa dibuktikan, karena pelanggan semakin pandai mengenalinya dan kehilangan kepercayaan jauh lebih mahal daripada kehilangan satu penjualan. Gunakan penyedia pembayaran yang dikenal dan jelaskan dengan bahasa sederhana bahwa data kartu ditangani oleh penyedia tersebut. Untuk dasar-dasar keamanan, lihat artikel kami tentang keamanan dasar aplikasi bisnis.",
  },
  {
    type: "ul",
    items: [
      "Kebijakan retur, penukaran, dan pengiriman yang jelas dan mudah dijangkau dari halaman checkout",
      "Informasi kontak nyata dan layanan pelanggan yang responsif, misalnya lewat WhatsApp",
      "Penyedia pembayaran yang dikenal dengan penjelasan singkat tentang keamanan data",
      "Ulasan dan testimoni yang asli, tanpa rekayasa",
      "Rincian pesanan yang jelas sebelum pelanggan menekan tombol bayar",
    ],
  },
  { type: "h2", text: "Hambatan 5: halaman lambat dan checkout yang bermasalah di ponsel" },
  {
    type: "p",
    text: "Sebagian besar pembeli online berbelanja lewat ponsel, sering dengan koneksi yang tidak sempurna. Halaman checkout yang lambat dimuat, tombol yang terlalu kecil, atau formulir yang tidak nyaman diisi di layar sentuh membuat orang menyerah. Uji alur checkout Anda sendiri di ponsel sungguhan, termasuk di koneksi lambat, dan perhatikan di mana Anda sendiri merasa frustrasi.",
  },
  {
    type: "p",
    text: "Kecepatan juga menyangkut stabilitas: apa yang terjadi bila koneksi terputus di tengah pembayaran? Apakah pelanggan tahu apakah pesanannya berhasil? Konfirmasi yang jelas, baik di layar maupun lewat pesan atau email, mencegah pelanggan membayar dua kali atau menghubungi layanan pelanggan dengan cemas. Pembahasan lebih jauh tentang dampak kecepatan ada pada artikel kami tentang kecepatan website dan dampaknya.",
  },
  { type: "h2", text: "Mengajak kembali pelanggan yang pergi" },
  {
    type: "p",
    text: "Sebagian keranjang terbengkalai bisa dipulihkan lewat pengingat yang sopan. Bila pelanggan sudah memberikan email atau nomor kontaknya dan menyetujui dihubungi, Anda bisa mengirim pengingat bahwa keranjangnya masih menunggu. Pengingat terbaik membantu, bukan menekan: sampaikan bahwa barangnya masih tersedia, tawarkan bantuan bila ada pertanyaan, dan jangan membanjiri dengan pesan berulang.",
  },
  {
    type: "p",
    text: "Gunakan insentif seperti diskon dengan hati-hati. Bila setiap pelanggan belajar bahwa meninggalkan keranjang akan menghasilkan kode diskon, sebagian akan sengaja melakukannya, dan margin Anda tergerus. Mulailah dengan pengingat tanpa diskon, ukur hasilnya, dan hanya tawarkan insentif bila terbukti diperlukan serta masih menguntungkan. Hormati juga preferensi privasi dan aturan perlindungan data yang berlaku dalam menyimpan dan menghubungi pelanggan.",
  },
  { type: "h2", text: "Memperbaiki secara terukur" },
  {
    type: "p",
    text: "Setelah menemukan hambatan yang mungkin, jangan mengubah semuanya sekaligus. Ubah satu hal pada satu waktu dan bandingkan hasilnya, sehingga Anda tahu perubahan mana yang benar-benar berpengaruh. Jika lalu lintas toko cukup banyak, Anda dapat menguji dua versi sebuah halaman pada kelompok pengunjung berbeda. Jika lalu lintas kecil, bandingkan periode sebelum dan sesudah sambil memperhatikan faktor musiman dan promosi.",
  },
  {
    type: "ol",
    items: [
      "Petakan setiap langkah alur belanja dan catat berapa orang yang bertahan di tiap langkah",
      "Cari langkah dengan penurunan terbesar dan teliti penyebabnya lewat uji coba sendiri, umpan balik pelanggan, dan rekaman sesi bila ada",
      "Tentukan satu perbaikan, kerjakan, dan catat tanggal perubahannya",
      "Ukur kembali setelah cukup waktu untuk mengumpulkan data yang bermakna",
      "Pertahankan yang berhasil, batalkan yang tidak, lalu lanjut ke hambatan berikutnya",
    ],
  },
  {
    type: "callout",
    title: "Ingat tujuan sebenarnya",
    text: "Tujuan memperbaiki checkout bukan memaksa orang membeli, melainkan menghilangkan hal yang menghalangi orang yang memang ingin membeli. Alur yang jujur, jelas, dan nyaman membangun pelanggan yang kembali, bukan sekadar penjualan satu kali.",
  },
  { type: "h2", text: "Peran sistem di belakang layar" },
  {
    type: "p",
    text: "Pengalaman checkout yang mulus bergantung pada sistem di belakangnya. Stok harus akurat agar pelanggan tidak membayar barang yang sebenarnya habis. Ongkos kirim harus dihitung otomatis dengan benar. Status pembayaran harus diterima dan dicatat dengan andal, dan pesanan harus masuk ke sistem operasional tanpa input ulang. Bila toko online terhubung ke sistem kasir, inventori, dan akuntansi Anda, seluruh alur dari klik beli sampai barang tiba menjadi lebih rapi.",
  },
  {
    type: "p",
    text: "Karena itu, perbaikan checkout kadang tidak berhenti di tampilan, tetapi menyentuh integrasi dengan sistem pembayaran, ekspedisi, dan operasional. Ini saatnya mempertimbangkan toko online yang dirancang sesuai alur bisnis Anda, bukan hanya templat bawaan. Untuk perbandingan pendekatan, baca juga artikel kami tentang toko online sendiri atau marketplace.",
  },
  {
    "type": "h2",
    "text": "Daftar periksa checkout sebelum peluncuran"
  },
  {
    "type": "p",
    "text": "Sebelum meluncurkan toko online atau mengubah alur checkout, jalankan daftar periksa berikut. Cobalah sebagai pelanggan sungguhan, sebaiknya di ponsel, dan minta satu atau dua orang di luar tim untuk mencoba tanpa bantuan Anda. Hal-hal yang membuat mereka ragu adalah petunjuk paling jujur tentang apa yang perlu diperbaiki."
  },
  {
    "type": "ol",
    "items": [
      "Apakah total biaya, termasuk ongkos kirim dan biaya lain, terlihat jelas sebelum pelanggan mengisi data pribadi?",
      "Apakah pelanggan bisa membeli tanpa membuat akun, dan apakah pembuatan akun ditawarkan setelah pesanan selesai?",
      "Apakah formulir hanya meminta data yang benar-benar diperlukan, dengan tipe papan ketik yang sesuai di ponsel?",
      "Apakah pesan kesalahan menjelaskan masalahnya dan menunjukkan cara memperbaikinya tanpa menghapus isian yang sudah benar?",
      "Apakah metode pembayaran yang paling umum dipakai pelanggan Anda tersedia dan bekerja mulus?",
      "Apakah kebijakan retur, pengiriman, dan kontak layanan pelanggan mudah ditemukan dari halaman checkout?",
      "Apakah ada rincian pesanan yang jelas, lengkap dengan gambar, jumlah, harga, dan estimasi tiba, sebelum tombol bayar ditekan?",
      "Apakah halaman dimuat cepat di ponsel dengan koneksi biasa, dan tombol cukup besar untuk disentuh?",
      "Apakah pelanggan menerima konfirmasi yang jelas setelah membayar, baik di layar maupun lewat pesan atau email?",
      "Apakah stok diperiksa pada saat pesanan dibuat sehingga barang yang habis tidak terjual?",
      "Apakah pesanan yang masuk langsung tercatat di sistem operasional tanpa input ulang?",
      "Apakah ada cara mencatat dan melihat di langkah mana pelanggan berhenti?"
    ]
  },
  {
    "type": "p",
    "text": "Simpan daftar ini dan ulangi setiap kali ada perubahan besar pada toko, penambahan metode pembayaran, atau pergantian ekspedisi. Alur checkout adalah bagian toko yang paling sering rusak secara diam-diam akibat perubahan kecil di tempat lain, dan pemeriksaan rutin menangkap masalah sebelum pelanggan yang menemukannya."
  },
  {
    "type": "h2",
    "text": "Menyesuaikan dengan jenis toko Anda"
  },
  {
    "type": "p",
    "text": "Hambatan yang paling berpengaruh berbeda menurut jenis toko. Pada toko dengan barang bernilai kecil dan pembelian impulsif, kecepatan dan kemudahan, seperti checkout tamu dan pembayaran satu ketukan, biasanya paling menentukan. Pada toko dengan barang bernilai besar, pelanggan lebih berhati-hati sehingga kepercayaan, kejelasan kebijakan retur, dan akses cepat ke layanan pelanggan menjadi lebih penting dibanding sekadar kecepatan."
  },
  {
    "type": "p",
    "text": "Pada toko yang menjual barang berat atau besar, ongkos kirim sering menjadi hambatan terbesar, jadi transparansi biaya dan pilihan ekspedisi layak diprioritaskan. Pada toko yang menjual barang pesanan khusus atau makanan segar, informasi waktu pembuatan dan pengiriman harus sangat jelas agar tidak ada kekecewaan. Pada toko dengan pelanggan berulang, simpan alamat dan preferensi, serta sediakan pemesanan ulang cepat agar pembelian berikutnya hampir tanpa gesekan."
  },
  {
    "type": "p",
    "text": "Karena itu, jangan hanya meniru toko lain. Pelajari perilaku pelanggan Anda sendiri, mulai dari data tahap-tahap alur belanja, pertanyaan yang masuk ke layanan pelanggan, hingga ulasan yang mereka tulis. Perbaikan yang paling tepat sering muncul dari mendengarkan keluhan yang berulang, bukan dari daftar saran umum."
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Keranjang terbengkalai tidak akan hilang sepenuhnya, tetapi sebagian besar penyebab yang dapat dicegah ada pada alur yang Anda kendalikan: biaya yang transparan, formulir yang ringkas, pembayaran yang akrab, kepercayaan yang dibangun, dan halaman yang cepat. Pahami data Anda, perbaiki satu hambatan pada satu waktu, dan ukur hasilnya. Setiap perbaikan kecil pada checkout adalah penjualan yang sebelumnya hampir terjadi dan kini benar-benar selesai.",
  },
  {
    type: "cta",
    title: "Ingin toko online dengan checkout yang mulus?",
    text: "Tim AG·SORA membangun toko online yang cepat, terhubung dengan pembayaran dan sistem operasional Anda, dan dirancang untuk menyelesaikan penjualan. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/website",
    label: "Konsultasi Gratis",
  },
];
