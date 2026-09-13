import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Pesanan dari marketplace masuk untuk sepatu ukuran 42, warna hitam. Admin buru-buru mengecek — ternyata stok terakhir baru saja terjual di toko fisik lima menit yang lalu, tapi sistem marketplace belum sempat diperbarui. Pesanan terpaksa dibatalkan, rating toko turun karena pembatalan sepihak, dan pelanggan yang kecewa menulis ulasan negatif yang terlihat oleh calon pembeli lain.",
  },
  {
    type: "p",
    text: "Banyak bisnis retail kini berjualan di beberapa tempat sekaligus: toko fisik, satu atau beberapa marketplace, dan kadang toko online milik sendiri. Setiap saluran tambahan membuka peluang penjualan baru. Tetapi ketika stok dicatat secara terpisah di setiap saluran tanpa saling terhubung, risiko menjual barang yang sebenarnya sudah habis — lalu terpaksa membatalkan pesanan — meningkat tajam dan berdampak langsung pada reputasi bisnis.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Satu sumber stok yang menjadi acuan semua saluran mencegah penjualan barang yang sudah habis",
      "Integrasi API menghubungkan sistem utama dengan marketplace untuk sinkronisasi otomatis",
      "Sisakan stok penyangga untuk produk yang jumlahnya sudah menipis",
      "Kode produk yang konsisten di semua saluran mencegah kesalahan pengurangan stok",
      "Pantau kegagalan sinkronisasi agar bisa ditangani sebelum menyebabkan masalah",
    ],
  },
  { type: "h2", text: "Masalah yang muncul tanpa stok terpusat" },
  {
    type: "ul",
    items: [
      "Pesanan online masuk untuk barang yang baru saja terjual habis di toko fisik",
      "Pembatalan pesanan yang merusak reputasi dan rating toko di marketplace",
      "Stok yang harus diperbarui manual satu per satu di setiap saluran, memakan waktu dan rawan salah",
      "Tidak ada gambaran penjualan gabungan yang jelas untuk setiap produk di semua saluran",
    ],
  },
  {
    type: "p",
    text: "Pembatalan pesanan di marketplace bukan sekadar merepotkan — banyak platform marketplace menjatuhkan sanksi berupa penurunan performa toko jika tingkat pembatalan terlalu tinggi, yang pada akhirnya bisa mengurangi visibilitas produk Anda di hasil pencarian platform tersebut.",
  },
  { type: "h2", text: "Satu sumber stok sebagai prinsip utama" },
  {
    type: "p",
    text: "Prinsip utamanya adalah memiliki satu sumber stok yang menjadi acuan resmi bagi semua saluran penjualan. Setiap penjualan yang terjadi di saluran mana pun — toko fisik, marketplace tertentu, atau toko online sendiri — akan mengurangi stok di sumber resmi tersebut, lalu jumlah stok terbaru dikirimkan secara otomatis ke semua saluran lainnya.",
  },
  { type: "h2", text: "Cara menghubungkan sistem" },
  {
    type: "p",
    text: "Integrasi biasanya dilakukan melalui API yang disediakan oleh masing-masing marketplace, atau melalui layanan penghubung pihak ketiga yang sudah dirancang khusus untuk menyambungkan berbagai platform e-commerce. Pesanan yang masuk dari marketplace akan otomatis tercatat di sistem utama, dan setiap pembaruan stok dari sistem utama akan otomatis dikirim kembali ke marketplace terkait.",
  },
  {
    type: "callout",
    title: "Sisakan stok penyangga untuk produk yang menipis",
    text: "Sinkronisasi antar sistem tidak selalu terjadi dalam hitungan detik — bisa ada jeda beberapa menit tergantung platform. Untuk produk yang sisa stoknya sudah sedikit, menampilkan jumlah yang sedikit lebih rendah dari angka sebenarnya di marketplace membantu mengurangi risiko terjual melebihi stok yang benar-benar tersedia saat jeda sinkronisasi terjadi.",
  },
  { type: "h2", text: "Samakan data produk di semua saluran" },
  {
    type: "p",
    text: "Integrasi yang efektif membutuhkan pencocokan produk yang akurat antara sistem utama dan setiap marketplace tempat Anda berjualan, termasuk untuk setiap varian ukuran atau warna yang berbeda. Kode produk yang konsisten di semua saluran mencegah stok berkurang pada produk yang salah akibat kesalahan pencocokan data antar sistem.",
  },
  { type: "h2", text: "Harga yang berbeda per saluran" },
  {
    type: "p",
    text: "Biaya operasional di setiap marketplace bisa berbeda-beda — komisi platform, biaya iklan, atau biaya layanan lainnya — sehingga harga jual yang ditetapkan per saluran mungkin perlu disesuaikan agar margin tetap terjaga. Sistem yang baik sebaiknya mendukung pengaturan harga berbeda per saluran sambil tetap memakai satu sumber stok yang sama untuk semuanya.",
  },
  { type: "h2", text: "Ilustrasi: dari kekacauan menjadi terkendali" },
  {
    type: "p",
    text: "Bayangkan sebuah toko sepatu yang berjualan di dua marketplace besar sekaligus toko fisik, dengan stok yang dicatat terpisah di tiga tempat berbeda. Setiap minggu, rata-rata ada beberapa pesanan yang terpaksa dibatalkan karena stok yang tercatat di marketplace ternyata sudah tidak sesuai dengan kondisi fisik yang sebenarnya, menyebabkan rating performa toko di kedua marketplace terus menurun.",
  },
  {
    type: "p",
    text: "Setelah menerapkan sistem stok terpusat yang terintegrasi dengan API kedua marketplace tersebut, setiap penjualan di saluran mana pun langsung mengurangi stok pusat dan memperbarui ketersediaan di semua saluran lainnya secara otomatis. Dalam beberapa bulan, tingkat pembatalan pesanan turun drastis mendekati nol, dan performa toko di kedua marketplace membaik signifikan.",
  },
  { type: "h2", text: "Pantau kegagalan sinkronisasi" },
  {
    type: "p",
    text: "Koneksi dengan marketplace bisa terputus sewaktu-waktu atau mengalami gangguan teknis di luar kendali Anda. Pastikan ada mekanisme pemberitahuan otomatis ketika proses sinkronisasi gagal, agar stok yang tidak terbarui bisa segera ditangani secara manual sebelum menimbulkan pesanan baru yang tidak bisa dipenuhi.",
  },
  { type: "h2", text: "Mengelola pesanan dari berbagai saluran dalam satu tempat" },
  {
    type: "p",
    text: "Selain sinkronisasi stok, pertimbangkan juga menyatukan pengelolaan pesanan dari semua saluran ke dalam satu tampilan terpusat. Ini memudahkan tim gudang memproses dan mengirim pesanan tanpa harus membuka beberapa aplikasi atau platform yang berbeda-beda setiap kali ada pesanan baru masuk.",
  },
  { type: "h2", text: "Langkah menyatukan stok lintas saluran" },
  {
    type: "ol",
    items: [
      "Tentukan sistem yang akan menjadi sumber stok resmi utama",
      "Periksa ketersediaan API di setiap marketplace yang dipakai",
      "Samakan kode produk dan varian di semua saluran penjualan",
      "Terapkan stok penyangga untuk produk dengan sisa stok menipis",
      "Aktifkan pemantauan untuk mendeteksi kegagalan sinkronisasi",
      "Pertimbangkan menyatukan pengelolaan pesanan dari semua saluran",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah integrasi ini mahal untuk bisnis kecil dengan sedikit produk?" },
  {
    type: "p",
    text: "Biayanya bervariasi tergantung jumlah marketplace dan kompleksitas produk. Untuk bisnis dengan katalog produk yang tidak terlalu besar, banyak solusi terjangkau yang tersedia. Bandingkan biaya integrasi dengan kerugian dari pembatalan pesanan dan penurunan performa toko yang terus terjadi tanpa integrasi.",
  },
  { type: "h3", text: "Bagaimana jika satu marketplace tidak menyediakan API untuk integrasi?" },
  {
    type: "p",
    text: "Sebagian marketplace memang memiliki keterbatasan dalam hal ini. Untuk kasus seperti ini, pertimbangkan pembaruan stok manual terjadwal dengan frekuensi yang cukup sering, sambil tetap mengutamakan integrasi otomatis untuk saluran-saluran yang mendukungnya.",
  },
  { type: "h2", text: "Retur dan tukar barang lintas saluran" },
  {
    type: "p",
    text: "Barang yang dibeli lewat marketplace kadang diretur langsung ke toko fisik terdekat karena pelanggan merasa lebih praktis, sementara barang yang dibeli di toko fisik kadang ingin ditukar ukurannya lewat customer service online. Jika proses retur ini tidak tercatat kembali ke sumber stok yang sama, barang yang sebenarnya sudah kembali ke gudang bisa terlihat seolah masih di tangan pelanggan, atau sebaliknya, stok bertambah dua kali karena tercatat di dua sistem berbeda.",
  },
  {
    type: "p",
    text: "Tetapkan alur retur yang jelas: siapa yang berwenang menerima barang retur dari saluran mana pun, ke mana barang tersebut harus diperiksa kondisinya, dan kapan stok resmi diperbarui setelah retur disetujui. Barang retur yang kondisinya masih layak jual sebaiknya segera masuk kembali ke stok yang bisa dijual, bukan tertahan berhari-hari di sudut gudang tanpa status yang jelas di sistem.",
  },
  { type: "h2", text: "Integrasi langsung vs platform penghubung pihak ketiga" },
  {
    type: "p",
    text: "Integrasi langsung ke API setiap marketplace memberi kendali penuh atas bagaimana data dipertukarkan, tetapi berarti tim Anda perlu membangun dan memelihara koneksi terpisah untuk setiap platform, termasuk menyesuaikan diri setiap kali marketplace mengubah spesifikasi API mereka. Untuk bisnis yang hanya berjualan di satu atau dua marketplace, pendekatan ini sering kali cukup terkendali.",
  },
  {
    type: "p",
    text: "Platform penghubung pihak ketiga, di sisi lain, sudah menyediakan koneksi siap pakai ke banyak marketplace sekaligus dan biasanya menangani sendiri perubahan spesifikasi API dari masing-masing platform. Trade-off-nya adalah biaya langganan bulanan dan ketergantungan pada penyedia layanan tersebut. Untuk bisnis yang berjualan di banyak marketplace sekaligus, biaya langganan ini sering kali masih lebih murah dibanding biaya membangun dan memelihara integrasi sendiri untuk setiap platform.",
  },
  { type: "h2", text: "Produk bundel butuh perhitungan stok yang berbeda" },
  {
    type: "p",
    text: "Paket atau bundel — misalnya satu set berisi tiga produk berbeda yang dijual sebagai satu unit — tidak bisa diperlakukan sebagai satu item stok yang berdiri sendiri. Ketika satu bundel terjual, stok dari setiap komponen penyusunnya perlu berkurang sesuai jumlah masing-masing, bukan hanya stok bundelnya saja yang berkurang. Jika sistem tidak menangani logika ini dengan benar, komponen yang sebenarnya sudah menipis bisa terus terjual lewat bundel tanpa terdeteksi sampai akhirnya benar-benar habis mendadak.",
  },
  {
    type: "p",
    text: "Pastikan sistem stok Anda mendukung konsep produk komposit seperti ini, di mana ketersediaan bundel dihitung otomatis berdasarkan stok komponen yang paling sedikit tersisa. Dengan begitu, bundel yang salah satu komponennya sudah habis akan otomatis ditandai tidak tersedia di semua saluran, alih-alih terus ditampilkan sebagai bisa dibeli padahal tidak bisa dipenuhi.",
  },
  { type: "h3", text: "Apakah produk yang hanya dijual di satu saluran tertentu tetap perlu masuk sistem stok terpusat?" },
  {
    type: "p",
    text: "Sebaiknya tetap dimasukkan, meski hanya dijual di satu saluran. Mencatat semua produk dalam satu sumber stok, termasuk yang eksklusif untuk saluran tertentu, memudahkan pelaporan gabungan dan mencegah kebingungan di kemudian hari jika suatu saat produk tersebut mulai dijual di saluran lain juga.",
  },
  { type: "h2", text: "Opname stok fisik tetap wajib meski sudah terintegrasi" },
  {
    type: "p",
    text: "Sistem yang terintegrasi dengan baik sering membuat pemilik bisnis merasa angka stok di layar pasti sudah akurat, sampai suatu saat opname fisik menemukan selisih yang tidak bisa dijelaskan. Integrasi antar saluran menjaga agar angka stok konsisten di semua sistem, tapi tidak bisa mendeteksi barang yang hilang karena kesalahan pencatatan penerimaan, kerusakan yang belum dilaporkan, atau kekeliruan saat mengambil barang dari rak yang salah. Semua sistem hanya akan seakurat data yang dimasukkan ke dalamnya — kalau ada kesalahan di titik pencatatan manapun, kesalahan itu ikut tersinkronkan ke semua saluran dengan rapi.",
  },
  {
    type: "p",
    text: "Jadwalkan opname stok fisik secara rutin, baik penuh maupun bertahap per kategori produk, dan bandingkan hasilnya dengan angka yang tercatat di sistem. Selisih yang ditemukan perlu ditelusuri penyebabnya, bukan sekadar disesuaikan begitu saja di sistem tanpa investigasi lebih lanjut, karena pola selisih yang berulang di produk atau lokasi tertentu biasanya menandakan ada masalah proses yang lebih mendasar — entah di penerimaan barang, penataan gudang, atau kedisiplinan pencatatan tim yang menangani stok sehari-hari.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Menyatukan stok toko fisik dan marketplace bukan sekadar kenyamanan teknis, melainkan perlindungan terhadap reputasi bisnis Anda di berbagai platform sekaligus. Dengan satu sumber stok yang akurat dan sinkronisasi yang andal, Anda bisa memperluas saluran penjualan tanpa harus mengorbankan kepercayaan pelanggan akibat pesanan yang dibatalkan.",
  },
  {
    type: "cta",
    title: "Masih sering membatalkan pesanan marketplace karena stok tidak sinkron?",
    text: "AG·SORA Inventory membantu menyatukan stok toko fisik dan marketplace dalam satu sumber yang akurat.",
    href: "/products#inventory",
    label: "Lihat AG·SORA Inventory",
  },
];
