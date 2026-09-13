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
