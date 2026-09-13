import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Jam makan siang. Meja tiga menambah dua es teh. Meja lima minta tagihannya dipisah per orang. Dapur bertanya apakah pesanan nasi goreng tadi pedas atau tidak. Kasir menghapus satu transaksi, membuat ulang yang baru, dan antrian di depan kasir semakin panjang.",
  },
  {
    type: "p",
    text: "Restoran, kafe, dan warung makan punya ritme yang sangat berbeda dari toko retail. Di toko, barang dipindai lalu dibayar. Di bisnis F&B, pesanan bisa berubah di tengah jalan, dibayar belakangan, dimasak di dapur, dan setiap menu mengurangi beberapa bahan baku sekaligus. Sistem kasir yang dirancang untuk toko retail sering kewalahan menghadapi ritme ini.",
  },
  {
    type: "p",
    text: "Artikel ini membahas fitur yang benar-benar dibutuhkan sistem kasir untuk bisnis F&B, alasan di balik setiap fitur, dan cara mengujinya sebelum Anda memilih. Tujuannya sederhana: sistem yang mempercepat pelayanan di jam sibuk, bukan memperlambatnya.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "F&B membutuhkan pesanan yang bisa diubah, dipisah, dan digabung tanpa menghapus transaksi",
      "Pesanan harus terhubung langsung ke dapur",
      "Resep dan stok bahan baku menunjukkan kebocoran yang selama ini tidak terlihat",
      "Varian dan tambahan menu harus diatur rapi agar laporan tetap terbaca",
      "Uji sistem di jam sibuk, bukan hanya saat demo",
    ],
  },
  { type: "h2", text: "Kenapa sistem kasir retail tidak cukup" },
  {
    type: "p",
    text: "Sistem kasir retail dirancang untuk transaksi yang selesai dalam satu kali proses: barang dipilih, dipindai, dibayar, selesai. Bisnis F&B hampir tidak pernah bekerja seperti itu. Pesanan dibuka ketika pelanggan duduk, bertambah selama mereka makan, dan baru ditutup ketika mereka membayar — kadang satu jam kemudian.",
  },
  {
    type: "p",
    text: "Ketika sistem tidak mendukung pesanan yang terbuka, kasir terpaksa mencatat di kertas lalu memasukkan semuanya di akhir, atau menghapus dan membuat ulang transaksi setiap ada perubahan. Keduanya memperlambat pelayanan dan membuka celah kesalahan, bahkan kecurangan.",
  },
  { type: "h2", text: "Pesanan yang bisa diubah, dipisah, dan digabung" },
  {
    type: "p",
    text: "Pelanggan menambah pesanan di tengah makan, meminta tagihan dipisah per orang, atau menggabungkan dua meja karena teman datang terlambat. Sistem harus menangani semua itu tanpa kasir perlu menghapus transaksi. Setiap penghapusan manual adalah celah untuk kesalahan dan penyalahgunaan, karena transaksi yang dihapus sering tidak meninggalkan jejak.",
  },
  {
    type: "p",
    text: "Perhatikan juga bagaimana sistem menangani pembatalan menu yang sudah dipesan. Pembatalan sebelum dimasak berbeda dengan pembatalan setelah makanan dibuat, karena yang kedua berarti bahan baku sudah terpakai. Sistem yang baik mencatat alasan dan siapa yang menyetujui pembatalan.",
  },
  { type: "h2", text: "Terhubung langsung ke dapur" },
  {
    type: "p",
    text: "Pesanan yang diteruskan otomatis ke printer atau layar dapur mengurangi salah dengar dan salah catat. Catatan khusus seperti tanpa bawang atau level pedas ikut terbawa dengan jelas. Dapur tidak perlu menebak tulisan tangan pelayan, dan pelayan tidak perlu bolak-balik bertanya.",
  },
  {
    type: "p",
    text: "Status pesanan juga membantu koordinasi. Ketika dapur menandai pesanan sudah siap, pelayan tahu kapan harus mengantar. Untuk bisnis dengan beberapa stasiun dapur — misalnya minuman dan makanan — pesanan bisa langsung diarahkan ke stasiun yang tepat.",
  },
  { type: "h2", text: "Resep dan stok bahan baku" },
  {
    type: "p",
    text: "Ini fitur yang paling sering diremehkan, padahal dampaknya paling besar terhadap margin. Satu porsi nasi goreng memakai beras, telur, minyak, bawang, dan bumbu. Dengan resep yang tercatat di sistem, setiap penjualan otomatis mengurangi bahan baku sesuai takarannya.",
  },
  {
    type: "p",
    text: "Hasilnya, Anda bisa membandingkan pemakaian bahan secara teoretis dengan stok fisik. Jika penjualan menunjukkan seharusnya terpakai sekian kilogram beras, tetapi stok berkurang jauh lebih banyak, selisih itulah yang perlu ditelusuri: porsi yang tidak seragam, bahan terbuang, pencatatan penerimaan yang salah, atau kehilangan.",
  },
  {
    type: "callout",
    title: "Selisih bahan baku adalah informasi",
    text: "Tanpa resep di sistem, selisih antara penjualan dan pemakaian bahan tidak pernah terlihat. Anda hanya merasakan margin yang terus menipis tanpa tahu penyebabnya.",
  },
  { type: "h2", text: "Menu dengan varian dan tambahan" },
  {
    type: "p",
    text: "Level pedas, ukuran minuman, pilihan susu, tambahan topping — semua ini perlu diatur sebagai varian atau tambahan dengan harga masing-masing, bukan sebagai menu terpisah. Menu yang dipecah menjadi puluhan item terpisah membuat kasir sulit mencari, dan laporan penjualan per menu menjadi sulit dibaca.",
  },
  {
    type: "p",
    text: "Tambahan yang memengaruhi bahan baku, seperti ekstra keju atau ekstra shot kopi, sebaiknya juga terhubung ke resep. Dengan begitu, stok bahan tetap akurat meski pelanggan memesan dengan banyak variasi.",
  },
  { type: "h2", text: "Pembayaran yang fleksibel dan tercatat" },
  {
    type: "p",
    text: "Pelanggan membayar dengan berbagai cara: tunai, kartu, QRIS, atau kombinasi. Kadang satu meja membayar dengan dua metode sekaligus. Sistem harus mencatat setiap metode dengan benar agar uang di laci dan dana yang masuk ke rekening bisa dicocokkan di akhir hari.",
  },
  { type: "h2", text: "Pesanan dari layanan pesan antar" },
  {
    type: "p",
    text: "Banyak bisnis F&B menerima pesanan dari beberapa aplikasi pesan antar. Jika pesanan ini dicatat terpisah, laporan penjualan tidak pernah utuh dan stok bahan baku tidak berkurang sesuai kenyataan. Idealnya, pesanan dari saluran mana pun masuk ke sistem yang sama, dengan harga dan biaya platform yang tercatat terpisah agar margin per saluran bisa dihitung.",
  },
  { type: "h2", text: "Laporan per shift dan per kasir" },
  {
    type: "p",
    text: "Di akhir shift, sistem sebaiknya menunjukkan berapa uang yang seharusnya ada di laci berdasarkan transaksi tunai. Kasir menghitung uang fisik, dan selisihnya tercatat — bukan disesuaikan diam-diam. Laporan pembatalan, diskon, dan retur per kasir membantu menemukan pola yang tidak wajar sebelum menjadi masalah besar.",
  },
  { type: "h2", text: "Tetap melayani saat internet terputus" },
  {
    type: "p",
    text: "Gangguan internet di jam makan siang bisa berarti kasir berhenti melayani. Sistem kasir untuk F&B sebaiknya tetap bisa menerima pesanan dan pembayaran tunai saat offline, lalu menyinkronkan data begitu koneksi kembali. Tanyakan secara spesifik apa yang tetap berjalan dan apa yang tidak ketika koneksi terputus.",
  },
  { type: "h2", text: "Hak akses yang jelas" },
  {
    type: "p",
    text: "Diskon, pembatalan menu, dan pembukaan laci kas sebaiknya hanya bisa dilakukan oleh supervisor atau dengan persetujuan. Setiap kasir dan pelayan memakai akun sendiri. Kontrol ini bukan soal tidak percaya, melainkan soal memastikan setiap tindakan bisa ditelusuri ketika ada selisih.",
  },
  { type: "h2", text: "Laporan yang layak dipantau pemilik F&B" },
  {
    type: "p",
    text: "Sistem kasir F&B yang baik tidak hanya mencatat transaksi, tetapi juga membantu Anda memahami menu dan operasional. Beberapa laporan ini layak dijadikan kebiasaan untuk dibaca setiap minggu.",
  },
  {
    type: "ul",
    items: [
      "Menu terlaris dan menu yang jarang dipesan",
      "Margin per menu berdasarkan biaya bahan dari resep",
      "Selisih pemakaian bahan baku dibanding penjualan",
      "Penjualan per jam untuk mengatur jadwal karyawan",
      "Penjualan per saluran: makan di tempat, bawa pulang, dan pesan antar",
      "Pembatalan menu beserta alasannya",
    ],
  },
  {
    type: "p",
    text: "Laporan penjualan per jam sering memberi manfaat yang tidak terduga. Dengan melihat kapan pesanan benar-benar memuncak, Anda bisa mengatur jumlah karyawan per shift dengan lebih tepat, sehingga tidak kekurangan orang di jam sibuk dan tidak kelebihan orang di jam sepi.",
  },
  { type: "h2", text: "Ilustrasi: sebelum dan sesudah" },
  {
    type: "p",
    text: "Bayangkan sebuah kafe yang mencatat pesanan di kertas, lalu memasukkannya ke aplikasi kasir sederhana saat pelanggan membayar. Pesanan yang lupa diinput tidak pernah tertagih, dapur sering salah membaca catatan, dan pemilik hanya tahu stok kopi hampir habis ketika barista mengeluh. Setiap bulan, margin terasa lebih tipis dari seharusnya, tetapi tidak ada yang tahu kenapa.",
  },
  {
    type: "p",
    text: "Dengan sistem yang mendukung alur F&B, pesanan dibuka di meja dan langsung terkirim ke dapur. Setiap tambahan tercatat. Resep mengurangi stok bahan otomatis, sehingga pemilik bisa melihat selisih pemakaian bahan setiap minggu dan menelusuri penyebabnya. Waktu yang dulu habis untuk mencocokkan catatan kini bisa dipakai untuk mengevaluasi menu.",
  },
  { type: "h2", text: "Cara menguji sistem sebelum memilih" },
  {
    type: "ol",
    items: [
      "Buka pesanan meja, tambahkan item, lalu pisahkan tagihan per orang",
      "Gabungkan dua meja yang sudah memiliki pesanan",
      "Batalkan satu menu setelah dikirim ke dapur",
      "Buat pesanan dengan beberapa varian dan tambahan",
      "Lakukan pembayaran dengan dua metode sekaligus",
      "Putuskan koneksi internet dan coba lanjutkan transaksi",
      "Tutup shift dan periksa laporan selisih kas",
    ],
  },
  {
    type: "p",
    text: "Jika memungkinkan, jalankan uji coba di jam sibuk yang sebenarnya. Demo di jam sepi hampir selalu terlihat lancar; jam makan siang yang padat menunjukkan apakah alur sistem benar-benar membantu kasir bekerja cepat.",
  },
  { type: "h2", text: "Kesalahan umum saat memilih sistem kasir F&B" },
  {
    type: "ul",
    items: [
      "Memilih sistem retail yang tidak mendukung pesanan terbuka",
      "Tidak memasukkan resep sehingga stok bahan baku tidak pernah akurat",
      "Membuat setiap varian sebagai menu terpisah",
      "Tidak melatih semua pelayan dan kasir, hanya kepala shift",
      "Beralih sistem menjelang periode ramai seperti bulan puasa atau liburan",
    ],
  },
  {
    type: "p",
    text: "Memasukkan resep memang membutuhkan waktu di awal, terutama untuk menu yang banyak. Tetapi pekerjaan satu kali ini membuka informasi yang sangat berharga tentang biaya bahan dan margin setiap menu — informasi yang hampir mustahil didapat dari pencatatan manual.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah warung kecil juga butuh sistem kasir seperti ini?" },
  {
    type: "p",
    text: "Tidak semua fitur dibutuhkan sejak awal. Warung dengan menu sedikit dan tanpa layanan meja mungkin cukup dengan pencatatan transaksi dan stok sederhana. Tetapi begitu ada layanan meja, pesanan dari aplikasi pesan antar, atau lebih dari satu karyawan di kasir, fitur seperti pesanan terbuka dan laporan per kasir mulai terasa manfaatnya.",
  },
  { type: "h3", text: "Seberapa detail resep harus dicatat?" },
  {
    type: "p",
    text: "Mulailah dari bahan yang paling mahal dan paling sering dipakai, seperti daging, kopi, atau susu. Anda tidak harus mencatat sejumput garam di tahap awal. Setelah kebiasaan mencatat berjalan, detail resep bisa ditambah bertahap.",
  },
  { type: "h3", text: "Bagaimana dengan menu yang harganya sering berubah?" },
  {
    type: "p",
    text: "Pilih sistem yang memudahkan perubahan harga tanpa harus membuat menu baru, dan mencatat riwayat perubahan harga. Dengan begitu, laporan penjualan periode lalu tetap akurat meski harga sudah berubah.",
  },
  { type: "h3", text: "Perlu layar dapur atau cukup printer pesanan?" },
  {
    type: "p",
    text: "Printer pesanan sudah cukup untuk banyak dapur kecil dan menengah. Layar dapur mulai terasa manfaatnya ketika volume pesanan tinggi, ada beberapa stasiun masak, atau Anda ingin memantau berapa lama setiap pesanan disiapkan. Pilih sesuai ritme dapur Anda, bukan sesuai tren.",
  },
  { type: "h2", text: "Pilihan di AG·SORA" },
  {
    type: "p",
    text: "Untuk bisnis retail dan F&B yang ingin segera berjalan, AG·SORA POS tersedia sebagai sistem kasir siap pakai. Jika operasional dapur dan layanan Anda memiliki alur yang sangat spesifik, sistem kasir juga bisa dibangun mengikuti cara kerja Anda. Detail fitur dan paketnya bisa dilihat pada kartu produk di bawah artikel ini.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Sistem kasir yang tepat untuk bisnis F&B bukan yang paling banyak fiturnya, tetapi yang mengikuti ritme dapur dan meja Anda. Pesanan yang fleksibel, dapur yang terhubung, dan resep yang tercatat mengubah kasir dari sekadar alat hitung menjadi sumber informasi tentang margin dan kebocoran. Uji di jam sibuk, dan pilih yang membuat antrian lebih pendek.",
  },
  {
    type: "cta",
    title: "Antrian kasir masih panjang di jam makan siang?",
    text: "Lihat bagaimana AG·SORA POS membantu bisnis kuliner melayani lebih cepat dan memantau penjualan dengan lebih jelas.",
    href: "/products#pos",
    label: "Lihat AG·SORA POS",
  },
];
