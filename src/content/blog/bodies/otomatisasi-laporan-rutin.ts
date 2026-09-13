import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Setiap Senin jam tujuh pagi, seorang staf sudah duduk di depan komputer, mengunduh data dari tiga sistem berbeda, menyalin ke spreadsheet, merapikan format kolom yang selalu berantakan, membuat grafik, lalu mengirimkannya ke grup manajemen sebelum rapat jam sembilan. Prosesnya persis sama setiap minggu, sudah dilakukan begitu selama tiga tahun terakhir.",
  },
  {
    type: "p",
    text: "Pekerjaan seperti ini — disusun dengan langkah yang sama persis setiap periode, dari sumber data yang sudah tersedia di sistem — adalah kandidat otomatisasi yang paling jelas dan paling mudah dikerjakan. Waktunya bisa dipakai untuk membaca dan menganalisis laporan, bukan menghabiskan waktu berjam-jam menyusunnya secara manual setiap minggu.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Laporan dengan langkah berulang dan sumber data yang jelas adalah kandidat otomatisasi terbaik",
      "Sepakati definisi setiap angka lebih dulu sebelum mengotomatiskan prosesnya",
      "Gunakan momen otomatisasi untuk meninjau ulang isi laporan, bukan sekadar memindahkannya",
      "Pilih antara dashboard yang bisa diakses kapan saja atau laporan terjadwal sesuai kebutuhan",
      "Pantau kegagalan proses otomatis agar tidak diam-diam berhenti tanpa disadari",
    ],
  },
  { type: "h2", text: "Kenali laporan yang layak diotomatiskan" },
  {
    type: "ul",
    items: [
      "Disusun dengan langkah kerja yang persis sama setiap periode",
      "Sumber datanya sudah tersedia secara digital di dalam sistem",
      "Formatnya relatif tetap dari waktu ke waktu",
      "Penerimanya jelas dan rutin menerimanya secara berkala",
    ],
  },
  {
    type: "p",
    text: "Laporan yang formatnya sering berubah-ubah sesuai permintaan mendadak, atau yang membutuhkan analisis dan interpretasi khusus setiap kalinya, kurang cocok untuk diotomatiskan sepenuhnya — meski sebagian prosesnya, seperti pengumpulan data mentah, tetap bisa dipercepat.",
  },
  { type: "h2", text: "Tahapan otomatisasi laporan" },
  {
    type: "ol",
    items: [
      "Tentukan metrik yang benar-benar dipakai untuk mengambil keputusan bisnis",
      "Sepakati definisi setiap angka, misalnya apa yang dihitung sebagai penjualan bersih",
      "Hubungkan laporan langsung ke sumber data tanpa perlu ekspor manual",
      "Jadwalkan pembuatan dan pengiriman laporan secara otomatis",
      "Tambahkan pemeriksaan agar laporan tidak terkirim jika datanya ternyata tidak lengkap",
    ],
  },
  { type: "h2", text: "Sepakati definisi lebih dulu" },
  {
    type: "p",
    text: "Laporan otomatis yang tercipta dengan cepat tetapi angkanya masih diperdebatkan tidak banyak membantu, bahkan bisa memperburuk kepercayaan terhadap sistem yang baru. Sebelum mengotomatiskan apa pun, pastikan semua pihak terkait sudah sepakat tentang cara menghitung setiap angka penting. Proses menyepakati ini sering kali mengungkap bahwa divisi yang berbeda selama ini menghitung metrik yang sama dengan cara yang ternyata berbeda tanpa ada yang menyadarinya.",
  },
  {
    type: "callout",
    title: "Kurangi, jangan hanya memindahkan",
    text: "Otomatisasi adalah kesempatan yang baik untuk meninjau ulang isi laporan secara keseluruhan. Metrik yang ternyata tidak pernah dibaca siapa pun atau tidak pernah benar-benar memengaruhi keputusan sebaiknya dihapus saja dari laporan, bukan ikut diotomatiskan begitu saja hanya karena sudah ada di format lama.",
  },
  { type: "h2", text: "Dashboard atau laporan terkirim" },
  {
    type: "p",
    text: "Dashboard yang bisa dibuka kapan saja cocok untuk kebutuhan pemantauan harian yang sifatnya lebih fleksibel. Laporan yang dikirim terjadwal lebih cocok untuk ringkasan yang perlu dibaca oleh semua penerima pada waktu yang bersamaan, misalnya sebelum rapat mingguan. Banyak organisasi pada akhirnya memakai kombinasi keduanya untuk kebutuhan yang berbeda-beda sesuai konteksnya.",
  },
  { type: "h2", text: "Tetap sediakan ruang untuk catatan" },
  {
    type: "p",
    text: "Angka tanpa penjelasan konteks mudah disalahartikan oleh pembacanya. Untuk laporan yang ditujukan bagi manajemen, sediakan tempat bagi penanggung jawab untuk menambahkan catatan singkat tentang kejadian-kejadian yang memengaruhi angka pada periode tersebut — misalnya penurunan penjualan karena ada gangguan operasional tertentu yang sudah diketahui.",
  },
  { type: "h2", text: "Ilustrasi: dari dua jam menjadi otomatis sepenuhnya" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan retail yang setiap Senin pagi menghabiskan sekitar dua jam untuk menyusun laporan penjualan mingguan gabungan dari lima toko, mengunduh data satu per satu dari masing-masing sistem kasir, lalu menggabungkannya secara manual di spreadsheet sebelum dikirim ke manajemen.",
  },
  {
    type: "p",
    text: "Setelah metrik dan definisi setiap angka disepakati bersama, dan sistem dihubungkan langsung untuk menghasilkan laporan secara otomatis setiap Senin pagi sebelum jam kerja dimulai, staf yang sebelumnya mengerjakan tugas ini kini punya waktu dua jam lebih untuk menganalisis tren yang terlihat dari data, bukan sekadar menyusunnya dari nol setiap minggu.",
  },
  { type: "h2", text: "Pantau kegagalan proses otomatis" },
  {
    type: "p",
    text: "Laporan otomatis yang diam-diam berhenti terkirim karena ada masalah teknis, atau terkirim dengan data yang kosong atau tidak lengkap, bisa lama tidak disadari siapa pun jika tidak ada mekanisme pemantauan. Pastikan ada sistem pemberitahuan otomatis ketika proses pembuatan laporan gagal atau datanya ternyata tidak lengkap, agar masalah bisa segera ditangani sebelum berdampak pada pengambilan keputusan.",
  },
  { type: "h2", text: "Menangani perubahan kebutuhan laporan di masa depan" },
  {
    type: "p",
    text: "Kebutuhan bisnis akan terus berubah, dan laporan yang sudah diotomatiskan perlu tetap fleksibel untuk disesuaikan ketika ada metrik baru yang dibutuhkan atau metrik lama yang sudah tidak relevan lagi. Rancang sistem otomatisasi dengan mempertimbangkan kemudahan penyesuaian di masa depan, bukan sistem yang kaku dan sulit diubah begitu sudah berjalan.",
  },
  { type: "h2", text: "Akses dan kerahasiaan laporan otomatis" },
  {
    type: "p",
    text: "Laporan yang tadinya disusun manual biasanya melewati satu orang yang secara alami menjadi penyaring — ia tahu laporan ini hanya untuk manajemen, bukan untuk disebar ke grup yang lebih luas. Ketika proses dibuat otomatis dan terjadwal, penyaring manual ini hilang, sehingga daftar penerima dan hak akses terhadap laporan perlu ditetapkan secara eksplisit di dalam sistem, bukan mengandalkan kehati-hatian seseorang seperti sebelumnya.",
  },
  {
    type: "p",
    text: "Tinjau juga siapa saja yang berwenang mengubah pengaturan otomatisasi itu sendiri — daftar penerima, jadwal pengiriman, atau metrik yang ditampilkan. Tanpa batasan yang jelas, perubahan kecil yang dilakukan sembarangan bisa membuat laporan sensitif tanpa sengaja terkirim ke pihak yang seharusnya tidak menerimanya.",
  },
  { type: "h2", text: "Melatih tim membaca laporan otomatis" },
  {
    type: "p",
    text: "Otomatisasi laporan kadang mengubah format tampilan dari yang biasa dilihat tim secara manual di spreadsheet. Luangkan waktu untuk menjelaskan kepada penerima laporan bagaimana membaca format baru ini, terutama jika ada perubahan pada cara metrik dikelompokkan atau ditampilkan dibanding format lama yang sudah mereka kenal bertahun-tahun.",
  },
  {
    type: "p",
    text: "Tanpa penjelasan ini, sebagian penerima mungkin salah menafsirkan angka pada laporan baru, atau justru mengabaikannya sama sekali karena terasa asing dibanding kebiasaan lama, meski isinya sebenarnya lebih akurat dan lebih cepat tersedia dibanding proses manual sebelumnya.",
  },
  { type: "h3", text: "Apakah laporan otomatis bisa disesuaikan tampilannya untuk penerima yang berbeda?" },
  {
    type: "p",
    text: "Bisa, tergantung kemampuan sistem yang dipakai. Manajemen puncak mungkin hanya perlu ringkasan tingkat tinggi, sementara kepala toko membutuhkan rincian lebih detail untuk tokonya sendiri. Merancang beberapa versi tampilan dari satu sumber data yang sama lebih efisien dibanding membuat laporan terpisah sepenuhnya untuk setiap kelompok penerima.",
  },
  { type: "h2", text: "Langkah memulai otomatisasi laporan" },
  {
    type: "ol",
    items: [
      "Identifikasi laporan rutin yang paling memakan waktu untuk disusun manual",
      "Sepakati definisi setiap metrik yang akan ditampilkan",
      "Tinjau dan sederhanakan isi laporan sebelum diotomatiskan",
      "Hubungkan laporan langsung ke sumber data yang relevan",
      "Tentukan format: dashboard real-time atau laporan terjadwal",
      "Aktifkan pemantauan untuk mendeteksi kegagalan proses otomatis",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah semua laporan bisa diotomatiskan sepenuhnya?" },
  {
    type: "p",
    text: "Tidak semua. Laporan yang membutuhkan analisis kualitatif atau konteks yang berubah-ubah setiap periode tetap membutuhkan sentuhan manusia. Fokuskan otomatisasi pada bagian pengumpulan dan penyajian data, biarkan interpretasinya tetap dilakukan manusia.",
  },
  { type: "h3", text: "Bagaimana jika sumber data untuk laporan tersebar di banyak sistem berbeda?" },
  {
    type: "p",
    text: "Ini bisa ditangani dengan menghubungkan setiap sumber lewat integrasi yang sesuai, atau mempertimbangkan menyatukan sistem-sistem tersebut jika jumlahnya sudah terlalu banyak untuk dihubungkan satu per satu secara efisien.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Mengotomatiskan laporan rutin adalah salah satu perbaikan dengan usaha relatif kecil tapi dampaknya terasa langsung — mengembalikan waktu tim untuk benar-benar menganalisis data, bukan sekadar menyusunnya berulang kali dengan cara yang sama setiap periode. Mulai dari laporan yang paling memakan waktu, sepakati definisinya, dan biarkan sistem yang mengerjakan bagian yang berulang.",
  },
  {
    type: "cta",
    title: "Berapa jam tim Anda habiskan menyusun laporan setiap minggu?",
    text: "Kami bantu merancang otomatisasi laporan yang terhubung langsung dengan sistem bisnis Anda.",
    href: "/services/ai-automation",
    label: "Pelajari AI Automation",
  },
];
