import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Sebuah bisnis sudah menghabiskan anggaran untuk iklan, konten media sosial, dan optimasi mesin pencari. Pengunjung mulai berdatangan ke website setiap hari. Tapi formulir kontak jarang terisi, tombol WhatsApp jarang ditekan, dan tim sales tidak merasakan perubahan apa pun. Pemiliknya mulai curiga bahwa trafik yang datang bukan trafik yang tepat, atau bahwa website memang tidak banyak berguna untuk bisnis seperti miliknya.",
  },
  {
    type: "p",
    text: "Dalam banyak kasus, masalahnya bukan pada jumlah atau kualitas pengunjung, melainkan pada apa yang terjadi setelah mereka tiba. Pengunjung datang dengan satu pertanyaan di kepala, lalu harus mencari jawabannya di antara menu yang membingungkan, paragraf yang terlalu umum, dan halaman yang lambat terbuka. Sebagian besar dari mereka tidak mengeluh — mereka hanya menutup tab dan membuka website pesaing. Inilah wilayah yang disebut user experience, atau UX: seberapa mudah seseorang mencapai tujuannya di website Anda.",
  },
  {
    type: "p",
    text: "Artikel ini membahas prinsip-prinsip UX yang paling berpengaruh terhadap konversi di website bisnis, kesalahan yang paling sering membuat pengunjung pergi, dan cara memperbaikinya secara bertahap tanpa harus membangun ulang seluruh website dari nol.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "UX yang baik membuat pengunjung cepat menemukan jawaban dan langkah berikutnya, bukan sekadar membuat website terlihat menarik",
      "Setiap halaman sebaiknya punya satu tujuan utama dan satu ajakan bertindak yang jelas",
      "Kecepatan, keterbacaan di ponsel, dan struktur navigasi adalah fondasi yang harus beres lebih dulu",
      "Formulir yang panjang dan pertanyaan yang tidak perlu adalah penyebab umum calon pelanggan batal menghubungi",
      "Perbaikan UX paling efektif dilakukan bertahap: amati perilaku pengunjung, ubah satu hal, lalu ukur hasilnya",
    ],
  },
  { type: "h2", text: "UX bukan soal tampilan, tapi soal mencapai tujuan" },
  {
    type: "p",
    text: "Banyak orang menyamakan UX dengan desain visual: warna, tipografi, animasi, dan foto yang bagus. Semua itu penting, tapi hanya sebagian dari cerita. Website bisa terlihat sangat indah dan tetap gagal jika pengunjung tidak tahu harus mengklik apa, tidak menemukan harga atau cakupan layanan, atau tidak yakin apakah bisnis ini cocok untuk kebutuhan mereka. Sebaliknya, website dengan tampilan sederhana bisa menghasilkan banyak prospek jika setiap halaman menjawab pertanyaan pengunjung secara berurutan dan jelas.",
  },
  {
    type: "p",
    text: "Cara paling mudah memahami UX adalah membayangkan pengunjung sebagai orang yang sibuk dengan satu tugas. Seorang manajer pembelian ingin tahu apakah Anda bisa memenuhi volume pesanannya. Seorang pemilik toko ingin tahu apakah sistem kasir Anda mendukung beberapa cabang. Seorang calon pasien ingin tahu jam praktik dan cara membuat janji. Tugas website adalah mengantarkan masing-masing orang ini dari pertanyaan ke jawaban, lalu dari jawaban ke tindakan, dengan hambatan sesedikit mungkin.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1576153192396-180ecef2a715",
    alt: "Tangan menggambar sketsa wireframe beberapa layar aplikasi di atas kertas",
    caption: "Alur pengunjung sebaiknya dirancang di atas kertas atau wireframe sebelum masuk ke detail visual.",
  },
  { type: "h2", text: "Tanda website Anda kehilangan calon pelanggan" },
  {
    type: "p",
    text: "Sebelum memperbaiki apa pun, penting untuk mengenali gejala yang menunjukkan bahwa masalahnya memang ada di pengalaman pengguna, bukan di pemasaran atau produk. Beberapa tanda berikut sering muncul bersamaan:",
  },
  {
    type: "ul",
    items: [
      "Banyak pengunjung meninggalkan website setelah melihat satu halaman saja, terutama dari perangkat ponsel",
      "Tim sales sering menerima pertanyaan dasar yang sebenarnya sudah dijawab di website, tapi tersembunyi",
      "Formulir kontak sering dibuka tapi jarang dikirim sampai selesai",
      "Halaman layanan dikunjungi, tapi hampir tidak ada yang lanjut ke halaman kontak atau harga",
      "Calon pelanggan mengaku menemukan bisnis Anda di Google, tapi tetap menghubungi lewat media sosial karena lebih mudah",
    ],
  },
  {
    type: "p",
    text: "Tanda-tanda ini bisa dilihat dari alat analitik standar, dari rekaman sesi pengunjung, atau sesederhana bertanya kepada pelanggan baru: bagian mana dari website yang membantu mereka, dan bagian mana yang membuat mereka ragu. Jawaban jujur dari lima atau sepuluh pelanggan sering lebih berguna daripada laporan yang panjang.",
  },
  { type: "h2", text: "Satu halaman, satu tujuan" },
  {
    type: "p",
    text: "Kesalahan paling umum di website bisnis adalah mencoba mengatakan semuanya di setiap halaman. Halaman beranda berisi sejarah perusahaan, daftar semua layanan, galeri, testimoni, berita, dan empat tombol ajakan yang berbeda. Hasilnya, pengunjung tidak tahu apa yang paling penting. Prinsip yang jauh lebih efektif adalah menentukan satu tujuan utama untuk setiap halaman, lalu menyusun seluruh isi halaman untuk mendukung tujuan itu.",
  },
  {
    type: "p",
    text: "Halaman beranda bertugas mengarahkan pengunjung ke halaman yang relevan dengan kebutuhannya. Halaman layanan bertugas meyakinkan bahwa layanan itu cocok dan mengajak pengunjung menghubungi. Halaman harga bertugas menghilangkan ketidakpastian biaya. Halaman kontak bertugas membuat langkah menghubungi semudah mungkin. Ketika setiap halaman punya peran yang jelas, pengunjung merasakan alur yang wajar, seperti dipandu oleh staf yang ramah di toko fisik.",
  },
  {
    type: "callout",
    title: "Uji cepat lima detik",
    text: "Tunjukkan sebuah halaman kepada orang yang belum pernah melihatnya selama lima detik, lalu tutup. Tanyakan: halaman ini tentang apa, untuk siapa, dan apa yang bisa dilakukan selanjutnya? Jika jawabannya ragu-ragu, pesan utama halaman itu belum cukup jelas.",
  },
  { type: "h2", text: "Fondasi teknis yang tidak boleh diabaikan" },
  { type: "h3", text: "Kecepatan memuat halaman" },
  {
    type: "p",
    text: "Tidak ada desain yang bisa menyelamatkan halaman yang terlalu lama terbuka. Pengunjung dari ponsel, sering kali dengan koneksi yang tidak stabil, akan pergi sebelum sempat melihat apa pun. Penyebab lambatnya website biasanya bisa diidentifikasi: gambar berukuran besar yang tidak dikompresi, terlalu banyak skrip pihak ketiga, plugin yang menumpuk, atau hosting yang tidak sesuai dengan beban trafik. Memperbaiki hal-hal ini sering memberi dampak lebih besar daripada perubahan desain apa pun.",
  },
  { type: "h3", text: "Keterbacaan di layar kecil" },
  {
    type: "p",
    text: "Sebagian besar pengunjung website bisnis di Indonesia datang dari ponsel. Artinya, tampilan ponsel bukan versi kedua dari website Anda, melainkan versi utama. Teks harus cukup besar untuk dibaca tanpa diperbesar, tombol harus cukup lebar untuk ditekan dengan ibu jari, dan informasi penting seperti nomor kontak atau tombol WhatsApp harus mudah dijangkau tanpa menggulir terlalu jauh. Uji website Anda sendiri di beberapa ponsel yang berbeda, bukan hanya di layar laptop tim desain.",
  },
  { type: "h3", text: "Navigasi yang bisa ditebak" },
  {
    type: "p",
    text: "Menu navigasi sebaiknya menggunakan istilah yang dipakai pelanggan, bukan istilah internal perusahaan. Jika pelanggan mencari sistem kasir, jangan beri label menu dengan nama produk internal yang tidak mereka kenal. Batasi jumlah menu utama, kelompokkan layanan yang mirip, dan pastikan pengunjung selalu tahu di mana posisinya serta bagaimana kembali ke halaman sebelumnya.",
  },
  { type: "h2", text: "Konten yang menjawab, bukan yang memuji diri sendiri" },
  {
    type: "p",
    text: "Kalimat seperti solusi terbaik, berpengalaman dan terpercaya, atau mitra andal untuk bisnis Anda terdengar meyakinkan bagi penulisnya, tapi hampir tidak berarti apa-apa bagi pengunjung. Semua pesaing menulis kalimat yang sama. Yang membuat pengunjung yakin adalah informasi spesifik: apa persisnya yang Anda kerjakan, bagaimana prosesnya, berapa lama biasanya, apa yang dibutuhkan dari pihak pelanggan, dan apa yang terjadi setelah mereka menghubungi.",
  },
  {
    type: "p",
    text: "Cara praktis menyusun konten seperti ini adalah mengumpulkan pertanyaan yang paling sering diajukan calon pelanggan kepada tim sales atau customer service. Setiap pertanyaan yang berulang adalah bahan konten yang pasti relevan. Jawab pertanyaan-pertanyaan itu langsung di halaman yang tepat, dengan bahasa yang sama seperti ketika tim Anda menjelaskannya secara lisan. Selain membantu pengunjung, konten yang menjawab pertanyaan nyata juga cenderung lebih mudah ditemukan di mesin pencari.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd",
    alt: "Seseorang menulis di buku catatan di meja kerja hitam",
    caption: "Konsistensi visual membangun kepercayaan, tapi hanya setelah pesan dan alur halaman sudah jelas.",
  },
  { type: "h2", text: "Ajakan bertindak yang jelas dan tidak menakutkan" },
  {
    type: "p",
    text: "Setiap halaman yang bertujuan menghasilkan prospek membutuhkan ajakan bertindak yang terlihat jelas. Tapi jelas saja tidak cukup; ajakan itu juga harus terasa aman untuk diikuti. Tombol bertuliskan beli sekarang di halaman layanan bernilai besar sering terasa terlalu cepat bagi pengunjung yang masih membandingkan. Alternatif seperti konsultasi gratis, minta estimasi biaya, atau lihat contoh hasil kerja memberi langkah yang lebih kecil dan lebih mudah diambil.",
  },
  {
    type: "p",
    text: "Perhatikan juga apa yang dijanjikan di sekitar tombol. Kalimat singkat seperti dibalas dalam satu hari kerja atau tanpa komitmen apa pun menjawab kekhawatiran yang tidak diucapkan pengunjung. Jika Anda menyediakan beberapa saluran kontak, seperti formulir, WhatsApp, dan telepon, biarkan pengunjung memilih saluran yang paling nyaman baginya, tapi tetap tampilkan satu saluran sebagai pilihan utama agar tidak membingungkan.",
  },
  { type: "h2", text: "Formulir: tempat paling sering calon pelanggan menyerah" },
  {
    type: "p",
    text: "Formulir kontak adalah titik terakhir sebelum pengunjung menjadi prospek, dan justru di sinilah banyak dari mereka berhenti. Setiap kolom tambahan adalah alasan tambahan untuk menunda. Menanyakan ukuran perusahaan, anggaran, jabatan, alamat lengkap, dan sumber informasi di formulir pertama mungkin membantu tim sales memilah prospek, tapi juga membuat banyak orang batal mengisi.",
  },
  {
    type: "ol",
    items: [
      "Minta hanya informasi yang benar-benar dibutuhkan untuk menghubungi kembali: nama, kontak, dan satu kolom kebutuhan singkat",
      "Pindahkan pertanyaan kualifikasi ke tahap percakapan berikutnya, ketika hubungan sudah terbangun",
      "Tampilkan pesan kesalahan yang jelas dan spesifik, bukan sekadar tulisan data tidak valid",
      "Setelah formulir dikirim, tunjukkan halaman konfirmasi yang menjelaskan apa yang terjadi berikutnya",
      "Pastikan setiap kiriman formulir benar-benar sampai ke orang yang tepat dan tercatat, bukan hilang di kotak masuk yang jarang dibuka",
    ],
  },
  {
    type: "p",
    text: "Poin terakhir sering diremehkan. Formulir yang sempurna tidak ada gunanya jika kirimannya masuk ke email yang tidak dipantau. Menghubungkan formulir langsung ke CRM atau setidaknya ke notifikasi tim sales memastikan setiap prospek mendapat tanggapan cepat — dan kecepatan tanggapan sering menentukan siapa yang memenangkan calon pelanggan.",
  },
  { type: "h2", text: "Membangun kepercayaan di halaman yang tepat" },
  {
    type: "p",
    text: "Pengunjung yang belum mengenal bisnis Anda membutuhkan alasan untuk percaya. Elemen kepercayaan yang efektif adalah yang bisa diverifikasi dan relevan: contoh hasil kerja nyata, penjelasan proses kerja yang transparan, informasi legalitas perusahaan, alamat kantor, dan kebijakan yang jelas tentang garansi atau dukungan setelah proyek selesai. Letakkan elemen-elemen ini dekat dengan titik keputusan, misalnya di halaman layanan sebelum tombol konsultasi, bukan hanya di halaman tentang kami yang jarang dibuka.",
  },
  {
    type: "p",
    text: "Hindari elemen kepercayaan yang terasa dibuat-buat, seperti testimoni tanpa nama, angka pencapaian yang tidak bisa dijelaskan asalnya, atau logo klien yang tidak benar-benar pernah bekerja sama. Pengunjung semakin terbiasa mengenali hal-hal seperti ini, dan satu elemen yang terasa palsu bisa merusak kepercayaan terhadap seluruh website.",
  },
  { type: "h2", text: "Memperbaiki UX secara bertahap" },
  {
    type: "p",
    text: "Kabar baiknya, memperbaiki UX tidak selalu berarti membangun ulang website. Banyak perbaikan dengan dampak besar bisa dilakukan secara bertahap, satu per satu, sambil mengukur hasilnya. Pendekatan ini juga lebih aman karena Anda bisa melihat perubahan mana yang benar-benar berpengaruh.",
  },
  {
    type: "ol",
    items: [
      "Pasang alat analitik dan tentukan beberapa tindakan yang dianggap konversi, seperti kiriman formulir atau klik tombol WhatsApp",
      "Identifikasi halaman dengan kunjungan tinggi tapi konversi rendah — di sanalah perbaikan paling berharga",
      "Periksa kecepatan dan tampilan ponsel halaman-halaman tersebut lebih dulu",
      "Perjelas judul, pesan utama, dan ajakan bertindak di halaman prioritas",
      "Sederhanakan formulir dan pastikan kirimannya tersambung ke sistem tim sales",
      "Ukur kembali setelah beberapa minggu, lalu lanjutkan ke halaman berikutnya",
    ],
  },
  {
    type: "p",
    text: "Jika setelah beberapa putaran perbaikan website masih terasa terhambat oleh fondasinya — misalnya platform yang lambat, struktur yang sulit diubah, atau desain yang tidak responsif — barulah membangun ulang menjadi pilihan yang masuk akal. Pada titik itu, Anda juga sudah punya data dan pemahaman yang jauh lebih baik tentang apa yang dibutuhkan pengunjung, sehingga website baru bisa dirancang di atas bukti, bukan asumsi.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Website yang mengubah pengunjung menjadi pelanggan tidak dibangun dengan trik, melainkan dengan empati terhadap orang yang datang. Pahami pertanyaan mereka, jawab dengan jelas di halaman yang tepat, hilangkan hambatan teknis, dan buat langkah berikutnya terasa mudah dan aman. Setiap perbaikan kecil di sepanjang alur itu menambah peluang bahwa pengunjung yang sudah Anda bayar untuk datangkan akhirnya benar-benar menghubungi bisnis Anda.",
  },
  {
    type: "cta",
    title: "Website Anda ramai dikunjungi, tapi prospeknya sedikit?",
    text: "Tim AG·SORA dapat meninjau alur, kecepatan, dan konten website Anda, lalu menyusun daftar perbaikan yang diprioritaskan berdasarkan dampaknya. Konsultasinya gratis, tanpa komitmen.",
    href: "/services/website",
    label: "Konsultasi Gratis",
  },
];
