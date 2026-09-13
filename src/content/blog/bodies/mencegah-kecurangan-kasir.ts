import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Uang di laci kurang Rp150.000 lagi. Kasir bilang mungkin ada yang salah kembalian. Minggu depan, kurang lagi. Pemilik mulai curiga, tapi tidak tahu harus mulai dari mana — apakah dari kasir yang sedang bertugas, dari sistem kasirnya, atau dari sesuatu yang selama ini tidak terlihat.",
  },
  {
    type: "p",
    text: "Selisih uang di laci kasir, stok yang berkurang tanpa penjualan tercatat, atau diskon yang tidak pernah disetujui pemilik — masalah seperti ini sering baru ketahuan setelah berulang kali terjadi, dan seringnya baru disadari setelah kerugian sudah cukup besar. Tujuan kontrol sistem bukan untuk mencurigai semua karyawan, melainkan membuat kesalahan dan penyalahgunaan sulit terjadi, sekaligus mudah ditelusuri ketika memang terjadi.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Celah paling umum: transaksi yang bisa dihapus tanpa jejak",
      "Akun per kasir dan persetujuan berjenjang mengurangi risiko signifikan",
      "Jejak perubahan mencatat siapa, kapan, dan alasan setiap tindakan berisiko",
      "Pola lebih penting daripada satu kejadian tunggal",
      "Kontrol sistem melengkapi, bukan menggantikan, pengawasan fisik",
    ],
  },
  { type: "h2", text: "Kenapa kecurangan kasir sering tidak disadari" },
  {
    type: "p",
    text: "Kecurangan kasir jarang berupa pencurian besar yang mencolok. Yang lebih umum adalah kebocoran kecil yang berulang: sedikit di sini, sedikit di sana, tersembunyi di antara ratusan transaksi normal setiap hari. Karena nilainya kecil per kejadian, pemilik sering menganggapnya sebagai kesalahan wajar sampai jumlahnya terakumulasi menjadi kerugian yang signifikan.",
  },
  {
    type: "p",
    text: "Masalah lainnya, banyak sistem kasir dirancang untuk kemudahan transaksi, bukan untuk mencegah penyalahgunaan. Pembatalan yang mudah dilakukan tanpa jejak, diskon yang bisa diberikan tanpa batas, dan akun kasir yang dipakai bersama menjadi celah yang bisa dimanfaatkan siapa pun yang tahu caranya.",
  },
  { type: "h2", text: "Celah yang paling sering dimanfaatkan" },
  {
    type: "ul",
    items: [
      "Transaksi dibatalkan setelah pembayaran tunai diterima, uang tidak dikembalikan ke laci",
      "Diskon manual diberikan tanpa persetujuan atau melebihi batas wajar",
      "Barang dijual tanpa dipindai atau dicatat di sistem",
      "Retur fiktif dibuat untuk mengeluarkan uang dari laci tanpa barang benar-benar dikembalikan",
      "Satu akun kasir dipakai bersama oleh beberapa orang sehingga sulit melacak siapa bertanggung jawab",
      "Harga produk diubah sementara saat transaksi lalu dikembalikan setelahnya",
    ],
  },
  { type: "h2", text: "Kontrol yang bisa diterapkan di sistem" },
  { type: "h3", text: "Akun per orang, bukan per shift" },
  {
    type: "p",
    text: "Setiap kasir masuk dengan akunnya sendiri, bukan akun bersama yang dipakai bergiliran. Tanpa ini, tidak ada cara mengetahui siapa yang melakukan transaksi tertentu, dan tanggung jawab menjadi kabur ketika ada selisih. Akun bersama juga membuat karyawan yang jujur ikut dicurigai ketika ada masalah yang sebenarnya dilakukan orang lain.",
  },
  { type: "h3", text: "Persetujuan untuk tindakan berisiko" },
  {
    type: "p",
    text: "Pembatalan transaksi, diskon di atas batas tertentu, dan retur sebaiknya membutuhkan persetujuan supervisor — dengan PIN terpisah atau login akun berbeda — dan tercatat siapa yang menyetujui beserta waktunya. Ini menciptakan jeda yang membuat tindakan impulsif atau tidak jujur lebih sulit dilakukan tanpa terdeteksi.",
  },
  { type: "h3", text: "Jejak perubahan yang lengkap" },
  {
    type: "p",
    text: "Setiap pembatalan dan perubahan harga harus meninggalkan catatan: kapan terjadi, oleh siapa, dan apa alasannya. Transaksi yang bisa dihapus sepenuhnya tanpa jejak adalah celah terbesar dalam sistem kasir mana pun, karena berarti tidak ada cara menelusuri apa yang sebenarnya terjadi.",
  },
  { type: "h3", text: "Pencocokan kas per shift" },
  {
    type: "p",
    text: "Di akhir shift, sistem menunjukkan berapa uang yang seharusnya ada di laci berdasarkan seluruh transaksi tunai. Kasir menghitung uang fisik, dan selisihnya tercatat sebagai data — bukan disesuaikan diam-diam atau dibiarkan tanpa penjelasan.",
  },
  {
    type: "callout",
    title: "Pola lebih penting dari satu kejadian",
    text: "Satu pembatalan transaksi bukan masalah — itu bagian normal dari operasional. Yang patut diperhatikan adalah pola: kasir tertentu yang pembatalannya jauh lebih sering dari yang lain, atau pembatalan yang selalu menumpuk di jam tertentu ketika supervisor sedang tidak mengawasi. Laporan pengecualian membantu menemukan pola ini tanpa harus memeriksa setiap transaksi satu per satu.",
  },
  { type: "h2", text: "Laporan pengecualian yang layak dipantau" },
  {
    type: "ul",
    items: [
      "Jumlah pembatalan per kasir dibandingkan rata-rata tim",
      "Diskon manual yang diberikan tanpa kode promo resmi",
      "Retur yang terjadi tanpa barang fisik dikembalikan",
      "Transaksi yang diproses di luar jam operasional normal",
      "Selisih kas yang berulang dari kasir yang sama",
    ],
  },
  {
    type: "p",
    text: "Laporan ini sebaiknya ditinjau secara rutin, bukan hanya ketika sudah ada kecurigaan. Meninjau secara proaktif memungkinkan Anda menemukan masalah kecil sebelum berkembang menjadi kerugian besar, dan juga menjadi bentuk pencegahan karena karyawan tahu bahwa datanya diperhatikan.",
  },
  { type: "h2", text: "Kontrol di luar sistem tetap diperlukan" },
  {
    type: "p",
    text: "Sistem tidak menggantikan pengawasan manusia sepenuhnya. Kamera di area kasir memberikan bukti visual untuk kasus yang mencurigakan. Stock opname rutin menangkap kehilangan barang yang mungkin tidak terlihat dari data transaksi saja. Rotasi tugas antar kasir mengurangi peluang kolusi jangka panjang di satu posisi tertentu.",
  },
  {
    type: "p",
    text: "Kombinasi kontrol sistem dan kontrol fisik jauh lebih efektif daripada mengandalkan salah satunya saja. Sistem memberi data untuk dianalisis; pengawasan fisik memberi konteks yang tidak selalu tertangkap oleh data.",
  },
  { type: "h2", text: "Menyeimbangkan kontrol dengan kelancaran operasional" },
  {
    type: "p",
    text: "Terlalu banyak persetujuan membuat antrian panjang dan supervisor terus-menerus dipanggil untuk hal sepele, yang pada akhirnya membuat aturan itu diakali atau diabaikan. Tetapkan batas yang masuk akal: diskon kecil di bawah persentase tertentu bisa langsung diberikan kasir, diskon besar membutuhkan persetujuan. Tinjau batas ini setelah beberapa minggu berjalan dan sesuaikan jika ternyata terlalu longgar atau terlalu ketat.",
  },
  { type: "h2", text: "Ilustrasi: menemukan pola dari laporan" },
  {
    type: "p",
    text: "Bayangkan sebuah minimarket dengan empat kasir bergantian shift. Setelah menerapkan laporan pengecualian mingguan, pemilik memperhatikan satu kasir memiliki jumlah pembatalan transaksi tiga kali lipat dibanding rekan-rekannya, selalu terjadi menjelang pergantian shift. Setelah ditelusuri, ternyata kasir tersebut membatalkan transaksi kecil dan mengambil selisihnya sebelum shift berakhir — pola yang tidak akan terlihat tanpa laporan yang membandingkan data antar kasir.",
  },
  { type: "h2", text: "Menerapkan budaya transparansi, bukan kecurigaan" },
  {
    type: "p",
    text: "Komunikasikan kontrol ini sebagai perlindungan bagi semua pihak, termasuk karyawan yang jujur. Akun terpisah dan jejak yang jelas justru melindungi kasir dari tuduhan yang tidak berdasar ketika ada selisih yang sebenarnya disebabkan orang lain. Kerangka ini lebih mudah diterima tim ketika disampaikan sebagai sistem yang adil, bukan sebagai tanda ketidakpercayaan pemilik terhadap karyawan.",
  },
  { type: "h2", text: "Langkah menerapkan kontrol kasir" },
  {
    type: "ol",
    items: [
      "Pastikan setiap kasir memiliki akun sendiri dengan kata sandi pribadi",
      "Tetapkan batas nilai untuk diskon dan pembatalan yang butuh persetujuan",
      "Aktifkan jejak audit untuk setiap tindakan berisiko di sistem",
      "Buat jadwal rutin meninjau laporan pengecualian",
      "Lakukan pencocokan kas di setiap akhir shift",
      "Kombinasikan dengan kamera dan stock opname berkala",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah kontrol ini berarti tidak percaya pada karyawan?" },
  {
    type: "p",
    text: "Tidak. Kontrol yang baik melindungi karyawan yang jujur sama seperti melindungi bisnis. Tanpa jejak yang jelas, karyawan yang tidak bersalah bisa dicurigai atas selisih yang sebenarnya disebabkan orang lain atau kesalahan sistem. Kejelasan data justru menguntungkan semua pihak.",
  },
  { type: "h3", text: "Berapa nilai diskon yang wajar tanpa perlu persetujuan?" },
  {
    type: "p",
    text: "Tidak ada angka yang berlaku universal. Tinjau margin produk Anda dan tetapkan batas yang tidak mengancam profitabilitas jika diberikan tanpa persetujuan, misalnya diskon kecil untuk kompensasi ketidaknyamanan pelanggan. Sesuaikan setelah melihat pola pemakaian selama beberapa minggu.",
  },
  { type: "h2", text: "Tanda peringatan di luar data transaksi" },
  {
    type: "p",
    text: "Tidak semua indikasi kecurangan muncul dari angka di laporan. Perubahan gaya hidup yang mencolok dan tidak sesuai dengan penghasilan, keengganan mengambil cuti atau libur dalam waktu lama, atau justru terlalu bersemangat menangani shift tertentu sendirian tanpa mau digantikan, semuanya layak diperhatikan sebagai konteks tambahan. Tanda-tanda ini bukan bukti, dan tidak boleh langsung dijadikan tuduhan — tapi jika muncul bersamaan dengan pola mencurigakan di laporan pengecualian, kombinasi keduanya jauh lebih layak ditelusuri lebih dalam dibanding masing-masing dilihat secara terpisah.",
  },
  { type: "h2", text: "Menyusun prosedur eskalasi saat kecurigaan muncul" },
  {
    type: "p",
    text: "Menemukan pola yang mencurigakan hanya bermanfaat jika ada langkah yang jelas setelahnya. Tetapkan sejak awal siapa yang berwenang menindaklanjuti temuan dari laporan pengecualian, bagaimana proses verifikasi dilakukan sebelum menuduh siapa pun secara langsung, dan bagaimana percakapan dengan karyawan yang bersangkutan seharusnya berlangsung. Menuduh secara terburu-buru berdasarkan data yang belum sepenuhnya diverifikasi bisa merusak kepercayaan tim dan berisiko menimbulkan masalah baru, sementara membiarkan temuan begitu saja tanpa tindak lanjut membuat seluruh sistem pelaporan menjadi sia-sia.",
  },
  { type: "h2", text: "Melibatkan supplier dan proses penerimaan barang" },
  {
    type: "p",
    text: "Kecurangan tidak selalu terjadi di meja kasir. Selisih stok juga bisa berasal dari proses penerimaan barang dari supplier — jumlah yang diterima tidak dicocokkan dengan jumlah yang tertulis di nota pengiriman, atau barang yang diterima dalam kondisi kurang baik tetap dicatat sebagai stok penuh tanpa catatan pengecualian. Terapkan prosedur penerimaan barang yang mengharuskan penghitungan ulang secara fisik dan pencatatan selisih di sistem, bukan sekadar mempercayai angka yang tertulis di dokumen pengiriman dari pihak luar.",
  },
  { type: "h3", text: "Apa yang sebaiknya dilakukan jika kecurangan sudah terlanjur ditemukan?" },
  {
    type: "p",
    text: "Kumpulkan bukti dari sistem terlebih dahulu — jejak audit, laporan pengecualian, dan rekaman kamera jika tersedia — sebelum melakukan konfrontasi langsung dengan karyawan yang bersangkutan. Tangani situasi ini secara konsisten mengikuti kebijakan internal yang sudah ditetapkan, dan pastikan prosesnya adil serta terdokumentasi dengan baik, sehingga keputusan yang diambil bisa dipertanggungjawabkan jika dipertanyakan di kemudian hari.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Mencegah kecurangan kasir bukan soal memasang lebih banyak kamera atau menghukum lebih keras, melainkan merancang sistem yang membuat kesalahan dan penyalahgunaan sulit terjadi tanpa jejak. Dengan akun per orang, persetujuan berjenjang, dan laporan pengecualian yang ditinjau rutin, selisih yang dulu misterius berubah menjadi data yang bisa ditelusuri dan diperbaiki.",
  },
  {
    type: "cta",
    title: "Selisih kas masih jadi misteri setiap bulan?",
    text: "Lihat bagaimana AG·SORA POS membantu mengendalikan transaksi kasir dengan akun terpisah dan jejak audit yang lengkap.",
    href: "/products#pos",
    label: "Lihat AG·SORA POS",
  },
];
