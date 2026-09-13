import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "“Kami mau aplikasi mobile untuk semuanya, biar keren dan modern.” Enam bulan dan anggaran yang cukup besar kemudian, aplikasi mobile itu jadi, tapi tim admin di kantor yang seharusnya jadi pengguna utama justru mengeluh — mereka kerja di depan komputer seharian, dan mengetik laporan panjang lewat layar ponsel kecil ternyata jauh lebih merepotkan dibanding versi web yang sederhana.",
  },
  {
    type: "p",
    text: "Ketika merencanakan sistem baru, banyak bisnis langsung membayangkan aplikasi yang diunduh dari Play Store atau App Store sebagai standar modern yang wajib dimiliki. Padahal, untuk banyak kebutuhan bisnis, aplikasi web yang cukup dibuka lewat browser sudah lebih dari cukup — bahkan lebih cepat dibangun dan jauh lebih mudah dirawat dalam jangka panjang.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Aplikasi web unggul untuk pekerjaan administratif yang dilakukan di depan komputer",
      "Aplikasi mobile unggul untuk kebutuhan lapangan yang butuh kamera, lokasi, dan notifikasi",
      "Pertimbangkan siapa pengguna utama dan di mana mereka bekerja sehari-hari",
      "Banyak sistem bisnis akhirnya membutuhkan kombinasi keduanya, bukan salah satu saja",
      "Mulai dari bentuk yang melayani kebutuhan paling mendesak lebih dulu",
    ],
  },
  { type: "h2", text: "Aplikasi web" },
  {
    type: "ul",
    items: [
      "Diakses langsung lewat browser, baik di komputer maupun ponsel",
      "Tidak perlu diunduh atau diperbarui secara manual oleh pengguna",
      "Satu versi berlaku untuk semua jenis perangkat, membuat pengembangan lebih efisien",
      "Sangat cocok untuk dashboard, sistem administrasi, dan pekerjaan yang dilakukan di depan komputer",
      "Akses ke fitur khusus perangkat lebih terbatas dibanding aplikasi mobile native",
    ],
  },
  { type: "h2", text: "Aplikasi mobile" },
  {
    type: "ul",
    items: [
      "Dipasang langsung di ponsel dan bisa dibuka dengan cepat dari layar utama",
      "Akses yang jauh lebih luas ke kamera, lokasi GPS, dan notifikasi push",
      "Bisa dirancang untuk tetap berfungsi bahkan saat sedang offline",
      "Harus melewati proses pengajuan dan persetujuan di toko aplikasi setiap kali dirilis atau diperbarui",
      "Biaya pengembangan lebih besar jika harus dibuat untuk Android dan iOS sekaligus",
    ],
  },
  { type: "h2", text: "Pertanyaan yang membantu memutuskan" },
  {
    type: "ol",
    items: [
      "Siapa pengguna utamanya, dan di lingkungan seperti apa mereka bekerja sehari-hari?",
      "Seberapa sering sistem akan dibuka — sesekali dalam sehari, atau berkali-kali setiap jam?",
      "Apakah dibutuhkan akses ke kamera, lokasi, atau notifikasi push secara langsung?",
      "Apakah pengguna sering berada di lokasi dengan koneksi internet yang tidak stabil?",
      "Apakah aplikasi ini untuk digunakan pelanggan umum, atau khusus untuk karyawan internal?",
    ],
  },
  {
    type: "callout",
    title: "Sering kali jawabannya adalah keduanya",
    text: "Banyak sistem bisnis pada akhirnya terdiri dari aplikasi web untuk kebutuhan administrasi di kantor, dan aplikasi mobile untuk kebutuhan tim yang bekerja di lapangan. Keduanya bisa memakai data yang sama persis, tetapi masing-masing dirancang khusus sesuai cara kerja penggunanya yang berbeda.",
  },
  { type: "h2", text: "Aplikasi web yang tetap nyaman di ponsel" },
  {
    type: "p",
    text: "Aplikasi web bisa dirancang secara responsif sehingga tetap terasa nyaman diakses dari ponsel, bahkan bisa ditambahkan ke layar utama ponsel layaknya aplikasi biasa untuk akses yang lebih cepat. Untuk pengguna yang hanya membuka sistem sesekali dan tidak membutuhkan fitur khusus perangkat, pendekatan responsif seperti ini sering kali sudah memadai tanpa perlu membangun aplikasi mobile native yang lebih mahal.",
  },
  { type: "h2", text: "Ilustrasi: dua kebutuhan, dua solusi berbeda" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan konstruksi yang membutuhkan dua hal sekaligus: sistem administrasi proyek untuk staf kantor yang bekerja di depan komputer sepanjang hari, dan aplikasi untuk mandor lapangan yang perlu melaporkan progres proyek lengkap dengan foto lokasi secara real-time.",
  },
  {
    type: "p",
    text: "Untuk staf kantor, aplikasi web yang bisa diakses dari laptop dengan tampilan yang kaya fitur dan mudah dinavigasi jauh lebih cocok. Untuk mandor lapangan, aplikasi mobile yang bisa mengakses kamera secara langsung dan tetap berfungsi meski sinyal di lokasi proyek terbatas jauh lebih praktis. Membangun keduanya, dengan data yang saling terhubung, memberi hasil terbaik dibanding memaksakan satu bentuk untuk semua kebutuhan yang sebenarnya berbeda.",
  },
  { type: "h2", text: "Mulai dari kebutuhan yang paling mendesak" },
  {
    type: "p",
    text: "Jika anggaran terbatas dan tidak memungkinkan membangun keduanya sekaligus, mulailah dari bentuk yang melayani kebutuhan pengguna paling penting dan paling mendesak bagi operasional bisnis. Aplikasi mobile bisa ditambahkan kemudian sebagai pengembangan lanjutan, selama sistem sejak awal dirancang dengan API yang memungkinkan berbagai jenis aplikasi mengakses data yang sama tanpa harus membangun ulang dari nol.",
  },
  { type: "h2", text: "Mempertimbangkan biaya pemeliharaan jangka panjang" },
  {
    type: "p",
    text: "Aplikasi mobile membutuhkan pemeliharaan berkelanjutan yang berbeda dari aplikasi web — pembaruan sistem operasi ponsel yang terus berubah, persyaratan toko aplikasi yang bisa berubah sewaktu-waktu, dan pengujian di berbagai jenis perangkat. Pertimbangkan biaya pemeliharaan jangka panjang ini, bukan hanya biaya pembangunan awal, saat memutuskan antara aplikasi web atau mobile.",
  },
  { type: "h2", text: "Langkah memutuskan bentuk aplikasi yang tepat" },
  {
    type: "ol",
    items: [
      "Identifikasi semua kelompok pengguna dan lingkungan kerja mereka masing-masing",
      "Tentukan fitur perangkat spesifik yang benar-benar dibutuhkan, seperti kamera atau GPS",
      "Evaluasi kondisi koneksi internet di lokasi kerja pengguna",
      "Pertimbangkan anggaran untuk pembangunan dan pemeliharaan jangka panjang",
      "Mulai dari bentuk yang paling mendesak, kembangkan bertahap sesuai kebutuhan",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah aplikasi web dianggap kurang profesional dibanding aplikasi mobile?" },
  {
    type: "p",
    text: "Tidak sama sekali. Banyak sistem bisnis besar dan terpercaya berjalan sebagai aplikasi web, terutama untuk kebutuhan administratif. Yang menentukan profesionalitas adalah seberapa baik sistem tersebut menyelesaikan masalah penggunanya, bukan bentuk platformnya.",
  },
  { type: "h3", text: "Bisakah aplikasi web nantinya diubah menjadi aplikasi mobile?" },
  {
    type: "p",
    text: "Bisa, terutama jika sistem sejak awal dibangun dengan API yang terstruktur baik. Bagian data dan logika bisnis yang sudah ada bisa dipakai kembali, sehingga pengembangan aplikasi mobile di kemudian hari tidak perlu dimulai sepenuhnya dari nol.",
  },
  { type: "h2", text: "Progressive Web App: jalan tengah yang sering terlewat" },
  {
    type: "p",
    text: "Di antara aplikasi web biasa dan aplikasi mobile native, ada pendekatan yang disebut progressive web app — aplikasi web yang dibangun dengan teknik khusus sehingga bisa dipasang ke layar utama ponsel, berjalan dalam tampilan layar penuh tanpa bilah alamat browser, dan tetap menyimpan sebagian data untuk diakses meski koneksi sedang terputus sebentar. Pendekatan ini sering luput dari pertimbangan karena kurang dikenal, padahal untuk banyak kasus penggunaan bisa memberi pengalaman yang terasa seperti aplikasi native dengan biaya pengembangan yang jauh lebih dekat ke aplikasi web.",
  },
  {
    type: "p",
    text: "Batasannya tetap ada: akses ke fitur perangkat seperti notifikasi push dan sensor tertentu masih lebih terbatas dibanding aplikasi native, dan sebagian pengguna iPhone mengalami pengalaman yang sedikit berbeda dibanding pengguna Android karena dukungan teknologi ini tidak selalu identik di kedua platform. Namun untuk bisnis dengan anggaran terbatas yang tetap ingin pengalaman mirip aplikasi tanpa proses pengajuan ke toko aplikasi, opsi ini layak didiskusikan dengan tim pengembang sebelum memutuskan membangun aplikasi native penuh.",
  },
  { type: "h2", text: "Dampak proses toko aplikasi terhadap kecepatan rilis" },
  {
    type: "p",
    text: "Salah satu perbedaan yang sering diremehkan antara aplikasi web dan mobile adalah kecepatan merilis perbaikan. Ketika ditemukan kesalahan kecil pada aplikasi web, perbaikan bisa langsung diterapkan ke server dan semua pengguna otomatis mendapat versi terbaru saat membuka browser mereka berikutnya. Aplikasi mobile native harus melewati proses peninjauan di toko aplikasi setiap kali ada pembaruan, yang bisa memakan waktu beberapa hari, dan pengguna masih harus mengunduh pembaruan itu secara manual — sebagian bahkan menunda memperbarui aplikasi mereka selama berbulan-bulan.",
  },
  {
    type: "p",
    text: "Bagi bisnis yang operasionalnya membutuhkan perbaikan cepat — misalnya menyesuaikan harga atau memperbaiki kesalahan penghitungan yang baru ditemukan — pertimbangan kecepatan rilis ini sama pentingnya dengan pertimbangan fitur saat memilih bentuk aplikasi yang tepat.",
  },
  { type: "h2", text: "Menyatukan data di balik dua bentuk aplikasi yang berbeda" },
  {
    type: "p",
    text: "Ketika sebuah bisnis akhirnya membangun aplikasi web dan mobile sekaligus, tantangan terbesar bukan pada tampilan masing-masing, melainkan memastikan keduanya benar-benar mengambil data dari sumber yang sama. Jika aplikasi web dan mobile dibangun terpisah dengan basis data masing-masing, data bisa menjadi tidak sinkron — stok yang terlihat di aplikasi mobile mandor lapangan berbeda dengan yang tercatat di dashboard kantor, misalnya.",
  },
  {
    type: "p",
    text: "Merancang satu sistem inti dengan API yang melayani baik aplikasi web maupun mobile sejak awal mencegah masalah ini. Pendekatan ini juga membuat penambahan bentuk aplikasi baru di masa depan — misalnya aplikasi mobile tambahan untuk mitra eksternal — menjadi jauh lebih murah, karena logika bisnis inti dan datanya sudah tersedia dan tinggal dihubungkan.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah progressive web app bisa menggantikan aplikasi mobile native sepenuhnya?" },
  {
    type: "p",
    text: "Untuk sebagian besar kebutuhan bisnis internal, bisa. Namun jika aplikasi Anda ditujukan untuk pelanggan umum dan kehadiran di Play Store atau App Store penting untuk kepercayaan dan penemuan pengguna baru, aplikasi native tetap punya nilai tersendiri yang tidak sepenuhnya tergantikan.",
  },
  { type: "h3", text: "Apakah membangun aplikasi mobile untuk Android saja sudah cukup di Indonesia?" },
  {
    type: "p",
    text: "Untuk aplikasi internal dengan pengguna yang perangkatnya bisa dipastikan atau bahkan disediakan perusahaan, membangun untuk Android saja bisa menjadi pilihan yang masuk akal untuk menghemat biaya. Untuk aplikasi yang ditujukan ke pelanggan umum, pertimbangkan proporsi pengguna iPhone di segmen pasar Anda sebelum memutuskan hanya membangun satu platform.",
  },
  { type: "h2", text: "Menguji pengalaman di berbagai perangkat" },
  {
    type: "p",
    text: "Baik aplikasi web maupun mobile perlu diuji di lebih dari satu jenis perangkat sebelum dianggap siap dipakai secara luas. Untuk aplikasi web, ini berarti memastikan tampilan tetap rapi dan fungsional di berbagai ukuran layar — dari laptop kantor beresolusi besar hingga ponsel dengan layar kecil — karena pengguna yang sama mungkin membuka sistem yang sama dari perangkat yang berbeda tergantung situasi. Tombol yang terlalu kecil untuk disentuh di layar ponsel, atau tabel data yang terpotong dan tidak bisa digulir dengan nyaman, adalah masalah yang sering baru terlihat saat pengujian nyata di perangkat sungguhan, bukan hanya di layar simulasi milik pengembang.",
  },
  {
    type: "p",
    text: "Untuk aplikasi mobile, pengujian di berbagai merek dan usia perangkat sama pentingnya, karena tidak semua pengguna memakai ponsel keluaran terbaru dengan spesifikasi tinggi. Aplikasi yang terasa mulus di ponsel flagship milik pengembang bisa terasa lambat atau bahkan gagal berjalan sama sekali di ponsel dengan kapasitas memori lebih terbatas yang justru dipakai sebagian besar karyawan lapangan. Sisihkan waktu pengujian khusus dengan perangkat yang benar-benar mewakili kondisi pengguna akhir, bukan hanya perangkat terbaik yang kebetulan tersedia di tim pengembang, sebelum aplikasi dirilis secara luas kepada seluruh tim.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Memilih antara aplikasi web, mobile, atau keduanya bukan soal mana yang terlihat lebih modern, melainkan soal mana yang benar-benar sesuai dengan cara kerja pengguna Anda sehari-hari. Pahami kebutuhan setiap kelompok pengguna dengan jujur, dan bentuk aplikasi yang tepat akan terlihat dengan sendirinya tanpa perlu mengikuti tren semata.",
  },
  {
    type: "cta",
    title: "Bingung menentukan aplikasi web atau mobile untuk bisnis Anda?",
    text: "Tim AG·SORA membantu menganalisis kebutuhan pengguna Anda untuk menentukan solusi yang paling tepat.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
