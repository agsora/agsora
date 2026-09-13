import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Pelanggan bertanya tentang status pesanannya. Chatbot menjawab dengan ramah, tapi tidak nyambung. Pelanggan bertanya lagi dengan kalimat berbeda. Chatbot memberi jawaban template yang sama. Setelah lima kali mencoba, pelanggan mengetik dengan huruf kapital semua: “SAYA MAU BICARA DENGAN MANUSIA.”",
  },
  {
    type: "p",
    text: "Chatbot semakin mudah dibuat, terutama dengan kemajuan AI generatif yang bisa memahami bahasa alami jauh lebih baik dari sebelumnya. Bagi bisnis yang menerima banyak pertanyaan serupa setiap hari, chatbot tampak seperti solusi yang jelas: hemat biaya, tersedia 24 jam, dan tidak pernah lelah. Tetapi chatbot yang dirancang tanpa batas yang jelas justru bisa merusak pengalaman pelanggan lebih parah daripada tidak punya chatbot sama sekali.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Chatbot unggul untuk pertanyaan berulang dengan jawaban yang jelas dan terbatas",
      "Chatbot berisiko gagal pada keluhan, kasus tidak biasa, dan hal yang menyangkut uang",
      "Jalur ke manusia harus selalu tersedia dan mudah ditemukan",
      "AI generatif bisa menjawab dengan meyakinkan tapi keliru — batasi sumber informasinya",
      "Tinjau percakapan secara rutin agar chatbot tidak tertinggal dari kenyataan bisnis",
    ],
  },
  { type: "h2", text: "Dua jenis chatbot yang perlu dibedakan" },
  {
    type: "p",
    text: "Chatbot berbasis aturan bekerja dengan alur menu atau kata kunci tertentu: jika pelanggan mengetik “jam buka”, chatbot menjawab dengan jawaban yang sudah ditentukan. Jenis ini terbatas tapi bisa diprediksi — jawabannya selalu sesuai dengan yang Anda tulis.",
  },
  {
    type: "p",
    text: "Chatbot berbasis AI generatif memahami bahasa alami dengan lebih fleksibel dan bisa menyusun jawaban sendiri berdasarkan informasi yang diberikan. Jenis ini terasa lebih alami, tapi juga membawa risiko baru: ia bisa menghasilkan jawaban yang terdengar meyakinkan namun sebenarnya keliru, karena sifat dasarnya adalah menyusun teks yang masuk akal, bukan mengambil dari sumber yang pasti benar.",
  },
  { type: "h2", text: "Di mana chatbot benar-benar membantu" },
  {
    type: "ul",
    items: [
      "Pertanyaan berulang: jam operasional, lokasi, cara pemesanan, syarat layanan",
      "Status pesanan yang datanya tersedia langsung di sistem",
      "Mengumpulkan informasi awal sebelum diteruskan ke petugas manusia",
      "Melayani pertanyaan sederhana di luar jam kerja",
      "Membantu pelanggan menemukan halaman atau produk yang mereka cari",
    ],
  },
  {
    type: "p",
    text: "Ciri umum kasus-kasus ini: jawabannya sudah pasti, tidak butuh pertimbangan, dan risikonya rendah jika chatbot sedikit meleset. Untuk kasus seperti ini, chatbot benar-benar menghemat waktu tim dan mempercepat respons kepada pelanggan.",
  },
  { type: "h2", text: "Di mana chatbot sering gagal" },
  {
    type: "ul",
    items: [
      "Keluhan yang membutuhkan empati dan keputusan kasus per kasus",
      "Kasus tidak biasa yang tidak tercakup dalam informasi yang disiapkan",
      "Permintaan yang menyangkut uang, pembatalan, atau pengembalian dana",
      "Pertanyaan yang jawabannya bergantung pada kebijakan yang sering berubah",
      "Situasi yang membutuhkan pertimbangan atau pengecualian dari aturan baku",
    ],
  },
  {
    type: "p",
    text: "Ciri umum kasus-kasus ini: butuh penilaian manusia, berdampak finansial, atau melibatkan emosi pelanggan yang sedang kecewa. Memaksakan chatbot menangani kasus seperti ini biasanya memperburuk situasi, bukan menyelesaikannya.",
  },
  { type: "h2", text: "Jalur ke manusia harus jelas dan mudah" },
  {
    type: "p",
    text: "Pelanggan yang terjebak dalam percakapan berulang dengan chatbot biasanya kesal pada bisnisnya, bukan pada teknologinya. Sediakan jalan yang jelas dan mudah ditemukan untuk berbicara dengan petugas manusia — bukan tersembunyi di menu yang sulit dicari.",
  },
  {
    type: "p",
    text: "Sama pentingnya, teruskan riwayat percakapan ke petugas yang mengambil alih. Pelanggan yang harus mengulang cerita dari awal setelah dipindahkan dari chatbot ke manusia akan merasa waktunya terbuang percuma.",
  },
  {
    type: "callout",
    title: "Chatbot berbasis AI bisa salah dengan sangat yakin",
    text: "Model AI generatif dapat menghasilkan jawaban yang terdengar tepat tetapi keliru, termasuk kebijakan yang tidak pernah ada atau harga yang salah. Batasi chatbot pada sumber informasi yang Anda kendalikan sepenuhnya, dan jangan izinkan chatbot membuat janji — harga khusus, jadwal, kompensasi — tanpa konfirmasi petugas manusia.",
  },
  { type: "h2", text: "Mulai dari pertanyaan yang paling sering" },
  {
    type: "p",
    text: "Kumpulkan pertanyaan pelanggan dari beberapa minggu atau bulan terakhir dan kelompokkan berdasarkan tema. Biasanya sebagian kecil jenis pertanyaan mendominasi sebagian besar volume. Mulailah chatbot dari kelompok pertanyaan itu, pastikan jawabannya akurat dan lengkap, baru perluas cakupannya secara bertahap.",
  },
  { type: "h2", text: "Menetapkan batas kewenangan chatbot" },
  {
    type: "p",
    text: "Sebelum meluncurkan chatbot, tuliskan dengan jelas apa yang boleh dan tidak boleh dilakukannya secara otomatis. Ini bukan hanya soal teknis, tapi kebijakan bisnis yang perlu disepakati manajemen.",
  },
  {
    type: "ul",
    items: [
      "Boleh: menjawab informasi umum, mengecek status pesanan, memberi panduan navigasi",
      "Perlu konfirmasi manusia: menawarkan kompensasi, mengubah pesanan, memproses pengembalian dana",
      "Tidak boleh: membuat janji yang tidak tertulis di kebijakan resmi, mengakses data pelanggan lain",
    ],
  },
  { type: "h2", text: "Tinjau percakapan secara rutin" },
  {
    type: "p",
    text: "Baca contoh percakapan setiap minggu atau bulan: pertanyaan apa yang tidak terjawab dengan baik, di titik mana pelanggan meminta petugas manusia, dan jawaban mana yang ternyata keliru atau ketinggalan zaman. Chatbot yang tidak dirawat akan tertinggal dari kebijakan dan produk yang terus berubah, dan mulai memberi informasi yang salah tanpa disadari siapa pun.",
  },
  { type: "h2", text: "Terbuka bahwa itu chatbot" },
  {
    type: "p",
    text: "Beri tahu pelanggan sejak awal bahwa mereka sedang berbicara dengan asisten otomatis, bukan manusia. Keterbukaan ini mengatur ekspektasi pelanggan dan membuat mereka lebih mudah memaklumi keterbatasannya, sekaligus lebih cepat meminta petugas manusia jika memang diperlukan.",
  },
  { type: "h2", text: "Melatih chatbot dengan data yang tepat" },
  {
    type: "p",
    text: "Chatbot berbasis AI generatif bekerja dengan sumber informasi yang Anda sediakan, bukan menebak-nebak dari internet secara umum. Susun kumpulan informasi resmi yang jelas — kebijakan pengembalian, daftar produk, prosedur layanan — dan batasi chatbot untuk menjawab hanya berdasarkan sumber tersebut. Semakin jelas dan terstruktur sumbernya, semakin akurat dan konsisten jawaban chatbot.",
  },
  {
    type: "p",
    text: "Perbarui sumber informasi ini setiap kali ada perubahan kebijakan, harga, atau produk. Chatbot yang masih menjawab berdasarkan kebijakan lama adalah sumber kekecewaan pelanggan yang sering tidak disadari sampai ada keluhan yang menumpuk.",
  },
  { type: "h2", text: "Ilustrasi: chatbot yang membantu vs yang merepotkan" },
  {
    type: "p",
    text: "Bayangkan toko online yang memasang chatbot untuk menjawab status pengiriman. Chatbot terhubung langsung ke sistem pelacakan, sehingga jawabannya selalu akurat dan real-time. Untuk pertanyaan di luar itu, chatbot langsung menawarkan opsi menghubungi tim customer service lewat WhatsApp. Pelanggan senang karena pertanyaan sederhana terjawab instan, dan pertanyaan rumit tidak terjebak di alur chatbot yang membingungkan.",
  },
  {
    type: "p",
    text: "Bandingkan dengan toko lain yang memasang chatbot AI generatif tanpa batasan jelas, mencoba menjawab segala jenis pertanyaan termasuk komplain dan permintaan refund. Chatbot kadang menjanjikan pengembalian dana yang sebenarnya tidak sesuai kebijakan, membingungkan tim yang harus membatalkan janji itu kepada pelanggan yang kecewa dua kali lipat.",
  },
  { type: "h2", text: "Mengukur efektivitas chatbot" },
  {
    type: "ul",
    items: [
      "Persentase percakapan yang selesai tanpa eskalasi ke manusia",
      "Waktu rata-rata sebelum pelanggan meminta petugas manusia",
      "Kepuasan pelanggan terhadap jawaban chatbot",
      "Jumlah jawaban yang ternyata keliru atau ketinggalan zaman",
      "Penghematan waktu tim customer service",
    ],
  },
  { type: "h2", text: "Menggabungkan chatbot dengan saluran lain" },
  {
    type: "p",
    text: "Banyak pelanggan berpindah antara website, WhatsApp, dan media sosial saat mencari bantuan. Chatbot yang terisolasi hanya di satu kanal berarti pelanggan mungkin harus mengulang pertanyaan yang sama di kanal lain. Jika memungkinkan, sinkronkan riwayat percakapan pelanggan lintas kanal sehingga tim atau chatbot bisa melanjutkan konteks yang sama, bukan memulai dari nol setiap kali pelanggan berpindah platform.",
  },
  { type: "h2", text: "Kesalahan umum saat menerapkan chatbot" },
  {
    type: "ul",
    items: [
      "Mencoba menangani semua jenis pertanyaan sejak awal",
      "Tidak menyediakan jalur cepat ke manusia",
      "Membiarkan chatbot menjanjikan sesuatu di luar kebijakan resmi",
      "Tidak meninjau dan memperbarui informasi secara rutin",
      "Tidak memberi tahu pelanggan bahwa mereka berbicara dengan bot",
    ],
  },
  { type: "h2", text: "Menjaga privasi dalam percakapan chatbot" },
  {
    type: "p",
    text: "Percakapan dengan chatbot sering berisi data pribadi pelanggan: nomor pesanan, nomor telepon, kadang alamat. Pastikan data ini disimpan dengan aman, tidak dibagikan ke pihak yang tidak berkepentingan, dan jika chatbot menggunakan layanan AI pihak ketiga, pahami bagaimana penyedia tersebut mengelola dan menyimpan data percakapan pelanggan Anda.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah chatbot bisa menggantikan tim customer service sepenuhnya?" },
  {
    type: "p",
    text: "Untuk sebagian besar bisnis, tidak realistis dan tidak disarankan. Chatbot bekerja paling baik sebagai lapisan pertama yang menyaring pertanyaan sederhana, sementara tim manusia tetap menangani kasus yang lebih kompleks dan sensitif.",
  },
  { type: "h3", text: "Berapa biaya membangun chatbot yang baik?" },
  {
    type: "p",
    text: "Bergantung pada kompleksitas dan integrasinya dengan sistem yang ada. Chatbot sederhana berbasis aturan untuk pertanyaan umum relatif terjangkau, sementara chatbot dengan AI generatif yang terhubung ke banyak sistem membutuhkan investasi lebih besar untuk pengembangan dan pemeliharaannya.",
  },
  { type: "h3", text: "Bagaimana menangani bahasa daerah atau informal?" },
  {
    type: "p",
    text: "Chatbot berbasis AI generatif umumnya lebih baik memahami variasi bahasa dibanding chatbot berbasis aturan kaku. Tetap perlu diuji dengan contoh percakapan nyata dari pelanggan Anda, karena setiap bisnis punya gaya bahasa pelanggan yang berbeda.",
  },
  { type: "h2", text: "Menentukan kapan waktunya membangun chatbot sendiri" },
  {
    type: "p",
    text: "Banyak layanan chatbot siap pakai kini tersedia dengan biaya berlangganan yang terjangkau, cocok untuk kebutuhan yang relatif umum. Chatbot yang dibangun khusus lebih masuk akal ketika Anda membutuhkan integrasi mendalam dengan sistem internal — misalnya mengecek stok real-time atau status pesanan langsung dari database Anda — yang sulit dilakukan layanan generik.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Chatbot yang baik bukan yang mencoba menjawab segalanya, melainkan yang tahu batasannya sendiri. Fokuskan pada pertanyaan berulang dengan jawaban pasti, sediakan jalur cepat ke manusia untuk sisanya, dan rawat chatbot Anda seperti karyawan baru yang terus belajar — bukan sistem yang dipasang lalu dilupakan.",
  },
  {
    type: "cta",
    title: "Ingin chatbot yang benar-benar membantu pelanggan?",
    text: "Kami bantu merancang chatbot dengan batasan yang jelas dan jalur eskalasi yang tepat ke tim Anda.",
    href: "/services/ai-automation",
    label: "Pelajari AI Automation",
  },
];
