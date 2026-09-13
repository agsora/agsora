import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Satu pendapat di rapat: “Semua sudah pakai cloud, kita juga harus pindah.” Pendapat lain: “Data kita terlalu penting untuk disimpan di server orang lain.” Keduanya disampaikan dengan yakin. Tidak ada yang sepenuhnya salah — dan tidak ada yang sepenuhnya benar.",
  },
  {
    type: "p",
    text: "Saat membangun atau membeli sistem bisnis, salah satu keputusan teknis yang cukup menentukan adalah di mana sistem itu dijalankan: di layanan cloud, atau di server milik perusahaan sendiri yang biasa disebut on-premise. Keputusan ini memengaruhi biaya, keamanan, kecepatan akses, kemampuan bertumbuh, dan beban kerja tim Anda selama bertahun-tahun.",
  },
  {
    type: "p",
    text: "Artikel ini membantu Anda melihat pilihan ini tanpa terjebak tren atau ketakutan. Kita akan membahas kelebihan dan keterbatasan masing-masing, biaya yang sering tidak dihitung, pertanyaan untuk memutuskan, dan pilihan campuran yang sering menjadi jalan tengah paling masuk akal.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Cloud unggul dalam kemudahan, fleksibilitas kapasitas, dan akses dari mana saja",
      "On-premise unggul dalam kendali penuh dan kemandirian dari koneksi internet luar",
      "Biaya on-premise tidak berhenti di harga server; ada perawatan, listrik, dan orang",
      "Keamanan lebih ditentukan oleh cara pengelolaan daripada lokasi server",
      "Kombinasi keduanya sering menjadi pilihan paling realistis",
    ],
  },
  { type: "h2", text: "Memahami kedua pilihan" },
  {
    type: "p",
    text: "Dengan cloud, sistem berjalan di infrastruktur milik penyedia layanan dan diakses melalui internet. Anda tidak membeli atau merawat perangkat fisik; Anda membayar kapasitas yang dipakai. Penyedia bertanggung jawab atas perangkat keras, listrik, pendingin, dan sebagian aspek keamanan fisik.",
  },
  {
    type: "p",
    text: "Dengan on-premise, sistem berjalan di server yang berada di lokasi perusahaan, misalnya di ruang server kantor atau gudang. Perusahaan membeli perangkat, menyediakan tempat yang layak, dan bertanggung jawab penuh atas perawatan, pembaruan, keamanan, dan cadangan data.",
  },
  { type: "h2", text: "Kelebihan cloud" },
  {
    type: "ul",
    items: [
      "Tidak perlu investasi perangkat server di awal",
      "Kapasitas mudah ditambah ketika pengguna atau data bertambah",
      "Bisa diakses dari kantor, cabang, rumah, maupun lapangan",
      "Perangkat keras dan infrastruktur dirawat oleh penyedia",
      "Umumnya tersedia pilihan cadangan data dan pemulihan",
    ],
  },
  {
    type: "p",
    text: "Bagi bisnis yang bertumbuh cepat atau memiliki banyak lokasi, kemampuan menambah kapasitas tanpa membeli server baru adalah keuntungan besar. Anda juga tidak perlu menyiapkan ruang server dan orang yang merawatnya.",
  },
  { type: "h2", text: "Keterbatasan cloud" },
  {
    type: "ul",
    items: [
      "Bergantung pada koneksi internet untuk mengakses sistem",
      "Biaya bulanan yang bisa bertambah seiring pemakaian",
      "Data berada di infrastruktur pihak lain",
      "Pilihan konfigurasi tertentu bisa dibatasi penyedia",
    ],
  },
  { type: "h2", text: "Kelebihan on-premise" },
  {
    type: "ul",
    items: [
      "Kendali penuh atas perangkat, konfigurasi, dan data",
      "Tetap bisa berjalan di jaringan lokal meski internet luar terputus",
      "Cocok untuk kebutuhan yang mengharuskan data berada di lokasi tertentu",
      "Tidak ada biaya pemakaian yang naik turun setiap bulan",
    ],
  },
  { type: "h2", text: "Keterbatasan on-premise" },
  {
    type: "ul",
    items: [
      "Investasi perangkat di awal dan penggantian setelah beberapa tahun",
      "Membutuhkan orang yang merawat server, pembaruan keamanan, dan cadangan",
      "Menambah kapasitas berarti membeli dan memasang perangkat baru",
      "Akses dari luar lokasi membutuhkan pengaturan tambahan yang aman",
      "Risiko fisik seperti listrik padam, banjir, atau kerusakan perangkat",
    ],
  },
  {
    type: "callout",
    title: "Biaya yang sering tidak dihitung",
    text: "Server sendiri tidak berhenti di harga perangkat. Ada listrik, pendingin ruangan, perangkat cadangan, lisensi, dan yang paling sering terlupakan: waktu orang yang merawatnya. Bandingkan total biaya dalam beberapa tahun, bukan hanya pengeluaran awal.",
  },
  { type: "h2", text: "Soal keamanan: bukan soal lokasi" },
  {
    type: "p",
    text: "Salah satu anggapan yang paling umum adalah bahwa server sendiri pasti lebih aman karena data berada “di tangan kita”. Kenyataannya, keamanan lebih ditentukan oleh cara sistem dikelola: pembaruan keamanan yang rutin, hak akses yang terkendali, kata sandi yang kuat, enkripsi, cadangan data, dan pemantauan.",
  },
  {
    type: "p",
    text: "Server di ruang kantor yang jarang diperbarui dan cadangannya tidak pernah diuji bisa jauh lebih rentan dibanding sistem cloud yang dikelola dengan disiplin. Sebaliknya, sistem cloud dengan pengaturan akses yang sembarangan juga berisiko. Pertanyaan yang tepat bukan “di mana servernya”, tetapi “siapa yang mengelola keamanannya, dan seberapa baik”.",
  },
  { type: "h2", text: "Pertanyaan yang membantu memutuskan" },
  {
    type: "ol",
    items: [
      "Apakah ada regulasi atau kebijakan internal yang mengatur di mana data harus disimpan?",
      "Apakah tim punya kemampuan merawat server secara berkelanjutan?",
      "Seberapa stabil koneksi internet di lokasi-lokasi operasional?",
      "Apakah sistem perlu diakses dari banyak cabang atau oleh tim lapangan?",
      "Bagaimana rencana pertumbuhan pengguna dan data dalam beberapa tahun ke depan?",
      "Seberapa lama bisnis bisa bertahan jika sistem tidak bisa diakses?",
    ],
  },
  {
    type: "p",
    text: "Pertanyaan pertama sering menentukan. Beberapa jenis data atau industri memiliki ketentuan tentang lokasi penyimpanan. Periksa ketentuan yang berlaku bagi bisnis Anda sebelum memutuskan, karena hal ini bisa langsung mempersempit pilihan.",
  },
  { type: "h2", text: "Pilihan campuran" },
  {
    type: "p",
    text: "Tidak harus satu pilihan untuk semua. Beberapa bisnis menjalankan sistem utama di cloud agar mudah diakses semua cabang, tetapi tetap memakai aplikasi yang bisa bekerja offline di lokasi dengan koneksi tidak stabil, lalu menyinkronkan data saat koneksi kembali. Ada juga yang menyimpan data tertentu di server lokal karena ketentuan internal, sementara sistem lain berjalan di cloud.",
  },
  {
    type: "p",
    text: "Pendekatan campuran membutuhkan perencanaan integrasi dan sinkronisasi yang baik. Tetapi bagi banyak bisnis, ini adalah cara menggabungkan kelebihan kedua pilihan sambil mengurangi keterbatasannya.",
  },
  { type: "h2", text: "Merencanakan perpindahan" },
  {
    type: "p",
    text: "Jika Anda memutuskan memindahkan sistem dari on-premise ke cloud atau sebaliknya, perlakukan perpindahan ini sebagai project tersendiri. Inventarisasi sistem dan data yang ada, pastikan cadangan lengkap, uji perpindahan di lingkungan terpisah, dan rencanakan waktu peralihan di luar periode sibuk. Perpindahan infrastruktur yang terburu-buru bisa menyebabkan gangguan yang jauh lebih mahal daripada manfaatnya.",
  },
  { type: "h2", text: "Menghitung total biaya lima tahun" },
  {
    type: "p",
    text: "Untuk perbandingan yang adil, susun perkiraan biaya dalam rentang lima tahun untuk kedua pilihan. Untuk on-premise, masukkan harga perangkat, perkiraan penggantian di tahun ketiga atau keempat, listrik, pendingin ruangan, lisensi sistem operasi jika ada, dan gaji atau porsi waktu orang yang merawatnya. Untuk cloud, masukkan biaya langganan bulanan dengan asumsi kenaikan pemakaian seiring pertumbuhan bisnis, ditambah biaya koneksi internet yang memadai.",
  },
  {
    type: "p",
    text: "Banyak yang terkejut menemukan bahwa on-premise, setelah semua komponen dihitung, tidak selalu lebih murah seperti anggapan awal — terutama ketika biaya waktu orang yang merawat server dihitung dengan wajar, bukan dianggap gratis karena “sudah jadi tugas tambahan” staf IT yang ada.",
  },
  { type: "h2", text: "Ilustrasi: dua bisnis, dua pilihan" },
  {
    type: "p",
    text: "Bayangkan jaringan toko dengan belasan cabang yang tersebar di beberapa kota. Setiap cabang perlu mengakses stok dan harga terbaru, dan manajemen ingin melihat laporan gabungan kapan saja. Tim IT mereka hanya dua orang. Untuk bisnis seperti ini, cloud hampir pasti lebih masuk akal, dengan aplikasi kasir yang tetap bisa bekerja offline saat koneksi cabang terganggu.",
  },
  {
    type: "p",
    text: "Sekarang bayangkan sebuah pabrik di kawasan industri dengan koneksi internet yang sering bermasalah, mesin produksi yang terhubung ke sistem lokal, dan tim IT internal yang cukup kuat. Untuk pabrik ini, menjalankan sistem produksi di server lokal bisa lebih tepat, sementara laporan manajemen dikirim ke cloud secara berkala. Keduanya mengambil keputusan berbeda — dan keduanya benar untuk kondisinya.",
  },
  { type: "h2", text: "Kesalahan umum" },
  {
    type: "ul",
    items: [
      "Memilih cloud hanya karena tren, tanpa memeriksa kondisi koneksi di lapangan",
      "Memilih on-premise karena merasa lebih aman, tanpa rencana perawatan keamanan",
      "Membandingkan biaya hanya dari pengeluaran tahun pertama",
      "Tidak menyiapkan rencana ketika sistem tidak bisa diakses",
      "Tidak memeriksa ketentuan lokasi penyimpanan data yang berlaku",
    ],
  },
  { type: "h2", text: "Menyiapkan rencana pemulihan bencana" },
  {
    type: "p",
    text: "Apa pun pilihannya, siapkan rencana untuk skenario terburuk: kebakaran, banjir, atau kegagalan perangkat keras yang parah. Untuk on-premise, ini berarti cadangan data di lokasi terpisah dan idealnya perangkat pengganti yang bisa segera dipasang. Untuk cloud, ini berarti memahami jaminan pemulihan dari penyedia dan menyimpan cadangan tambahan yang independen dari penyedia utama. Rencana yang hanya ada di kepala satu orang bukan rencana — tuliskan langkahnya dan uji secara berkala.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah cloud selalu lebih murah?" },
  {
    type: "p",
    text: "Tidak selalu. Cloud biasanya lebih murah di awal karena tidak ada investasi perangkat. Tetapi untuk pemakaian yang sangat besar dan stabil dalam jangka panjang, biaya berlangganan bisa melampaui biaya memiliki server sendiri. Hitung keduanya dalam rentang beberapa tahun dengan asumsi pertumbuhan yang realistis.",
  },
  { type: "h3", text: "Bagaimana jika internet mati?" },
  {
    type: "p",
    text: "Untuk sistem di cloud, siapkan koneksi cadangan di lokasi yang kritis, dan pilih aplikasi yang bisa bekerja offline untuk fungsi yang tidak boleh berhenti, seperti kasir. Untuk sistem on-premise, internet luar tidak memengaruhi akses di jaringan lokal, tetapi akses dari cabang lain tetap bergantung pada koneksi.",
  },
  { type: "h3", text: "Siapa yang bertanggung jawab atas backup di cloud?" },
  {
    type: "p",
    text: "Jangan berasumsi penyedia otomatis menanggung semuanya. Pahami apa yang dijamin penyedia dan apa yang tetap menjadi tanggung jawab Anda. Banyak bisnis tetap menyimpan cadangan tambahan di lokasi atau layanan terpisah sebagai lapisan perlindungan.",
  },
  { type: "h3", text: "Apakah bisnis kecil perlu memikirkan hal ini?" },
  {
    type: "p",
    text: "Ya, meski jawabannya biasanya sederhana. Untuk sebagian besar bisnis kecil, memakai layanan cloud dari penyedia software yang terpercaya jauh lebih praktis daripada merawat server sendiri. Yang tetap perlu diperhatikan adalah cadangan data, akses akun, dan kemampuan mengekspor data.",
  },
  { type: "h3", text: "Bisakah berpindah di kemudian hari?" },
  {
    type: "p",
    text: "Bisa, tetapi perpindahan membutuhkan usaha. Pilih sistem yang datanya bisa diekspor dengan lengkap dan dibangun dengan cara yang tidak terlalu terikat pada satu penyedia, agar pilihan Anda tetap terbuka di masa depan.",
  },
  { type: "h2", text: "Menilai penyedia cloud sebelum memilih" },
  {
    type: "p",
    text: "Jika memilih cloud, penyedia yang Anda pilih menjadi mitra jangka panjang. Periksa di mana lokasi pusat data mereka, bagaimana kebijakan cadangan dan pemulihan bencana, seberapa transparan mereka soal insiden gangguan sebelumnya, dan bagaimana proses mengekspor data jika Anda ingin berpindah kelak. Penyedia yang enggan menjelaskan hal-hal ini secara konkret layak dipertimbangkan ulang.",
  },
  { type: "h2", text: "Melibatkan tim IT sejak awal keputusan" },
  {
    type: "p",
    text: "Keputusan infrastruktur sering dibuat oleh manajemen tanpa melibatkan orang yang akan merawatnya sehari-hari. Libatkan tim IT internal atau konsultan teknis sejak diskusi awal, bukan setelah keputusan diambil. Mereka bisa menilai realistis tidaknya rencana perawatan on-premise, atau memeriksa reputasi teknis penyedia cloud yang dipertimbangkan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Cloud atau on-premise bukan pertanyaan tentang mana yang lebih modern atau lebih aman secara umum. Ini pertanyaan tentang kondisi bisnis Anda: di mana tim bekerja, seberapa stabil koneksinya, siapa yang merawat sistem, ketentuan apa yang berlaku, dan bagaimana bisnis akan tumbuh. Jawab pertanyaan-pertanyaan itu dengan jujur, dan pilihan yang tepat biasanya menjadi jelas.",
  },
  {
    type: "cta",
    title: "Masih menimbang tempat terbaik untuk sistem Anda?",
    text: "Diskusikan kondisi operasional, lokasi tim, dan kebutuhan data Anda bersama tim AG·SORA sebelum memutuskan infrastruktur.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
