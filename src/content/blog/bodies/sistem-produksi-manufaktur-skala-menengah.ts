import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Kepala produksi ditanya berapa biaya sebenarnya untuk memproduksi satu batch produk andalan mereka. Ia menjawab dengan angka perkiraan yang sudah dipakai bertahun-tahun, tanpa benar-benar tahu apakah bahan yang terbuang, waktu mesin yang menganggur, atau produk cacat sudah diperhitungkan di dalamnya. Ternyata setelah dihitung ulang secara detail, margin produk andalan itu jauh lebih tipis dari yang selama ini diyakini semua orang.",
  },
  {
    type: "p",
    text: "Pabrik skala menengah biasanya sudah melewati tahap ketika semua bisa diatur lewat catatan manual dan ingatan kepala produksi, tetapi belum membutuhkan sistem sebesar yang dipakai perusahaan multinasional dengan ribuan karyawan. Di titik pertumbuhan ini, pilihan sistem produksi yang tepat sangat menentukan kelancaran operasional dan akurasi perhitungan biaya ke depannya.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Daftar bahan (bill of materials) yang akurat adalah fondasi seluruh sistem produksi",
      "Perencanaan kebutuhan bahan mencegah produksi berhenti karena bahan habis mendadak",
      "Catat sisa bahan dan produk cacat untuk mengetahui biaya produksi yang sebenarnya",
      "Kontrol kualitas di titik pemeriksaan tertentu membantu menemukan masalah lebih awal",
      "Mulai dari data master yang rapi sebelum membangun modul yang lebih kompleks",
    ],
  },
  { type: "h2", text: "Tantangan khas pabrik skala menengah" },
  {
    type: "p",
    text: "Berbeda dengan pabrik kecil yang segalanya masih bisa diawasi langsung oleh pemiliknya, pabrik skala menengah sudah memiliki cukup banyak karyawan dan volume produksi sehingga pengawasan langsung tidak lagi memungkinkan. Namun mereka juga belum memiliki sumber daya untuk sistem enterprise yang sangat kompleks dan mahal seperti perusahaan besar. Kebutuhan mereka adalah sistem yang cukup kuat untuk menangani kompleksitas produksi, tapi tetap bisa diterapkan dan dikelola dengan sumber daya yang terbatas.",
  },
  { type: "h2", text: "Daftar bahan (bill of materials)" },
  {
    type: "p",
    text: "Fondasi paling mendasar dari sistem produksi adalah daftar bahan: komponen dan bahan baku apa saja, dan berapa jumlah masing-masing, yang dibutuhkan untuk menghasilkan satu unit produk jadi. Tanpa daftar bahan yang akurat dan selalu diperbarui, perhitungan kebutuhan bahan untuk produksi mendatang, biaya produksi aktual, dan level stok yang diperlukan akan selalu meleset dari kenyataan.",
  },
  { type: "h2", text: "Perencanaan kebutuhan bahan" },
  {
    type: "p",
    text: "Berdasarkan pesanan yang masuk dan rencana produksi ke depan, sistem yang baik dapat menghitung secara otomatis bahan apa saja yang dibutuhkan, membandingkannya dengan stok yang tersedia saat ini, dan menunjukkan dengan jelas apa yang perlu dibeli serta kapan waktu yang tepat untuk memesannya. Ini mencegah produksi berhenti mendadak karena bahan tertentu habis tanpa peringatan, sekaligus mengurangi risiko stok bahan yang menumpuk berlebihan dan mengikat modal kerja secara tidak perlu.",
  },
  { type: "h2", text: "Perintah kerja dan pelacakan produksi" },
  {
    type: "ul",
    items: [
      "Perintah kerja yang jelas menjelaskan produk apa, berapa jumlahnya, dan target waktu penyelesaian",
      "Pengambilan bahan baku dari gudang yang tercatat secara spesifik per perintah kerja",
      "Status produksi yang terlihat jelas di setiap tahapan prosesnya",
      "Hasil produksi, termasuk jumlah produk cacat dan sisa bahan yang tidak terpakai",
    ],
  },
  {
    type: "callout",
    title: "Catat sisa bahan dan produk cacat dengan teliti",
    text: "Produk cacat dan bahan yang terbuang selama proses produksi sering kali tidak tercatat dengan baik karena dianggap terlalu kecil untuk diperhatikan secara khusus. Padahal tanpa catatan yang akurat ini, biaya produksi yang sebenarnya tidak akan pernah benar-benar terlihat, dan masalah kualitas yang berulang-ulang akan sangat sulit ditemukan akar penyebabnya.",
  },
  { type: "h2", text: "Biaya produksi yang realistis" },
  {
    type: "p",
    text: "Dengan data pemakaian bahan, waktu kerja karyawan, dan biaya tidak langsung yang tercatat secara konsisten, perusahaan bisa menghitung biaya produksi per unit dengan jauh lebih akurat dibanding sekadar estimasi kasar yang diwariskan turun-temurun. Informasi ini sangat penting untuk menetapkan harga jual yang tepat dan menilai produk mana yang sebenarnya paling menguntungkan bagi bisnis — yang kadang berbeda jauh dari asumsi yang selama ini dipegang.",
  },
  { type: "h2", text: "Kontrol kualitas di titik yang tepat" },
  {
    type: "p",
    text: "Menetapkan titik pemeriksaan kualitas pada tahapan tertentu selama proses produksi, dengan hasil pemeriksaan yang tercatat secara sistematis, membantu menemukan masalah kualitas lebih awal — sebelum produk cacat tersebut sampai ke tangan pelanggan dan merusak reputasi bisnis. Riwayat pemeriksaan kualitas ini juga sangat membantu menelusuri penyebab akar masalah ketika keluhan pelanggan mulai muncul di kemudian hari.",
  },
  { type: "h2", text: "Ilustrasi: menemukan margin yang sebenarnya" },
  {
    type: "p",
    text: "Bayangkan sebuah pabrik pengolahan makanan yang memproduksi beberapa varian produk. Selama bertahun-tahun, mereka menetapkan harga jual berdasarkan perkiraan biaya bahan baku saja, tanpa memperhitungkan bahan yang terbuang selama proses atau produk yang gagal memenuhi standar kualitas. Setelah menerapkan sistem yang mencatat pemakaian bahan aktual dan produk cacat secara detail, mereka menemukan bahwa satu varian produk yang selama ini dianggap paling menguntungkan ternyata memiliki tingkat pemborosan bahan yang jauh lebih tinggi dari varian lainnya.",
  },
  {
    type: "p",
    text: "Temuan ini mendorong mereka untuk meninjau ulang proses produksi varian tersebut, menemukan bahwa mesin tertentu perlu dikalibrasi ulang, dan setelah diperbaiki, tingkat pemborosan bahan turun signifikan — langsung berdampak pada margin keuntungan produk tersebut tanpa perlu menaikkan harga jual sama sekali.",
  },
  { type: "h2", text: "Mulai dari data master yang rapi" },
  {
    type: "p",
    text: "Seperti halnya implementasi sistem bisnis lainnya, keberhasilan sistem produksi sangat bergantung pada data master yang rapi dan konsisten: kode bahan yang seragam, daftar bahan yang akurat untuk setiap produk, dan satuan pengukuran yang konsisten di seluruh sistem. Menyiapkan data ini sering memakan waktu jauh lebih lama dari perkiraan awal, jadi mulailah pekerjaan ini sejak dini, jauh sebelum sistem baru benar-benar diluncurkan.",
  },
  { type: "h2", text: "Mengelola kapasitas mesin dan tenaga kerja" },
  {
    type: "p",
    text: "Selain bahan baku, kapasitas mesin dan ketersediaan tenaga kerja juga menjadi faktor pembatas dalam perencanaan produksi. Sistem yang bisa menunjukkan kapasitas yang tersedia dibandingkan dengan rencana produksi membantu menghindari penjadwalan yang tidak realistis, yang pada akhirnya hanya akan menyebabkan keterlambatan pengiriman kepada pelanggan.",
  },
  { type: "h2", text: "Langkah menerapkan sistem produksi" },
  {
    type: "ol",
    items: [
      "Susun dan verifikasi daftar bahan untuk setiap produk yang diproduksi",
      "Rapikan data master bahan baku dengan kode dan satuan yang konsisten",
      "Terapkan pencatatan perintah kerja dan pengambilan bahan per produksi",
      "Tetapkan titik pemeriksaan kualitas di tahapan produksi yang kritis",
      "Bangun kemampuan menghitung biaya produksi aktual per unit",
      "Gunakan data untuk meninjau ulang harga jual dan efisiensi produksi",
    ],
  },
  { type: "h2", text: "Kesalahan umum dalam penerapan" },
  {
    type: "ul",
    items: [
      "Tidak mencatat produk cacat dan bahan terbuang secara konsisten",
      "Daftar bahan yang tidak diperbarui saat resep produk berubah",
      "Mengabaikan kapasitas mesin dan tenaga kerja dalam perencanaan",
      "Tidak melakukan pemeriksaan kualitas di tahapan produksi yang kritis",
      "Data master yang belum rapi sebelum sistem diterapkan",
    ],
  },
  { type: "h2", text: "Melacak asal bahan dan jejak produksi (traceability)" },
  {
    type: "p",
    text: "Ketika ada keluhan pelanggan tentang kualitas produk, atau ketika satu batch bahan baku ternyata bermasalah, kemampuan menelusuri batch produksi mana saja yang memakai bahan tersebut menjadi sangat berharga. Tanpa pelacakan ini, perusahaan terpaksa menarik seluruh stok produk yang beredar karena tidak bisa mempersempit ke batch spesifik yang benar-benar terdampak — jauh lebih mahal dan merepotkan dibanding jika penelusuran bisa dilakukan dengan presisi.",
  },
  {
    type: "p",
    text: "Mencatat nomor batch bahan baku saat diterima, dan menghubungkannya dengan perintah kerja yang memakainya, memungkinkan penelusuran dua arah: dari bahan baku ke produk jadi mana saja yang memakainya, atau sebaliknya dari keluhan produk jadi kembali ke batch bahan baku asalnya. Untuk industri makanan, farmasi, atau kosmetik, kemampuan ini sering menjadi bagian dari ketentuan yang harus dipenuhi, bukan sekadar nilai tambah opsional.",
  },
  { type: "h2", text: "Perawatan mesin dan downtime tak terduga" },
  {
    type: "p",
    text: "Mesin yang tiba-tiba rusak di tengah jadwal produksi yang padat bisa mengacaukan seluruh rencana pengiriman ke pelanggan. Mencatat riwayat perawatan setiap mesin — kapan terakhir diservis, komponen apa yang pernah diganti, dan pola kerusakan yang berulang — membantu tim teknik beralih dari perawatan reaktif yang hanya bertindak setelah mesin rusak, menjadi perawatan terjadwal yang mengurangi risiko kerusakan mendadak di tengah proses produksi.",
  },
  {
    type: "p",
    text: "Sistem yang menampilkan jadwal perawatan berdampingan dengan jadwal produksi memudahkan perencana produksi menghindari benturan — misalnya menjadwalkan perawatan rutin di waktu permintaan produksi sedang rendah, bukan memaksakan mesin terus berjalan tanpa jeda sampai akhirnya rusak di saat yang paling tidak tepat.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Berapa lama biasanya implementasi sistem produksi berlangsung?" },
  {
    type: "p",
    text: "Bergantung pada kompleksitas produk dan kerapian data yang sudah ada. Perusahaan dengan daftar bahan yang sudah terdokumentasi dengan baik bisa bergerak lebih cepat dibanding yang masih mengandalkan pengetahuan tidak tertulis dari karyawan senior.",
  },
  { type: "h3", text: "Apakah perlu mengubah seluruh proses produksi untuk menerapkan sistem baru?" },
  {
    type: "p",
    text: "Tidak harus. Sistem yang baik dirancang untuk mencatat dan mendukung proses yang sudah berjalan, bukan memaksa perusahaan mengubah total cara kerjanya. Namun beberapa penyesuaian kecil pada alur pencatatan biasanya tetap diperlukan agar data yang dihasilkan akurat.",
  },
  { type: "h2", text: "Menghubungkan produksi dengan penjualan dan pembelian" },
  {
    type: "p",
    text: "Sistem produksi yang berdiri terpisah dari data penjualan dan pembelian sering membuat perencanaan produksi didasarkan pada perkiraan kasar, bukan permintaan yang sebenarnya. Tim produksi memproduksi berdasarkan kebiasaan atau instruksi lisan, sementara tim penjualan tidak tahu persis kapan barang pesanan pelanggan akan selesai, dan tim pembelian memesan bahan baku tanpa gambaran jelas tentang rencana produksi ke depan.",
  },
  {
    type: "p",
    text: "Ketika data pesanan penjualan, rencana produksi, dan kebutuhan pembelian bahan baku saling terhubung dalam satu sistem, perencanaan produksi bisa lebih selaras dengan permintaan yang sebenarnya masuk, bukan sekadar mengikuti jadwal produksi rutin yang sudah berjalan bertahun-tahun tanpa evaluasi. Tim penjualan juga bisa memberi estimasi waktu pengiriman yang lebih realistis kepada pelanggan karena tahu persis posisi antrean produksi saat ini, alih-alih memberi janji yang sering meleset karena tidak mengetahui kondisi lantai produksi yang sebenarnya.",
  },
  { type: "h2", text: "Perencanaan produksi untuk permintaan musiman" },
  {
    type: "p",
    text: "Banyak pabrik menghadapi pola permintaan yang naik turun mengikuti musim tertentu, hari besar, atau siklus bisnis pelanggan utama mereka. Tanpa data historis produksi dan penjualan yang tersimpan rapi, perencanaan untuk periode puncak sering kali hanya mengandalkan perkiraan kasar dari pengalaman, yang berisiko meleset cukup jauh — baik kekurangan kapasitas saat permintaan tinggi, maupun kelebihan stok yang mengendap saat permintaan kembali normal.",
  },
  {
    type: "p",
    text: "Sistem yang menyimpan riwayat produksi dan penjualan dari periode-periode sebelumnya memberi dasar yang lebih konkret untuk merencanakan kapasitas dan pembelian bahan baku menjelang periode puncak berikutnya, mengurangi ketergantungan pada ingatan atau firasat semata dalam mengambil keputusan yang berdampak besar pada arus kas dan kepuasan pelanggan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Sistem produksi yang tepat untuk pabrik skala menengah memberi visibilitas yang selama ini hilang: berapa sebenarnya biaya produksi setiap produk, di mana pemborosan terjadi, dan kapan bahan perlu dipesan ulang. Dengan fondasi data master yang rapi dan pencatatan yang konsisten, keputusan bisnis bisa diambil berdasarkan angka nyata, bukan lagi perkiraan yang diwariskan turun-temurun.",
  },
  {
    type: "cta",
    title: "Tahu berapa biaya produksi sebenarnya dari setiap produk Anda?",
    text: "Diskusikan kebutuhan sistem produksi untuk pabrik Anda bersama tim AG·SORA.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
