import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Laptop staf HR hilang di transportasi umum sepulang kerja. Di dalamnya ada spreadsheet berisi data lengkap seluruh karyawan — nomor identitas, rekening bank, riwayat gaji, bahkan catatan kesehatan dari klaim asuransi. Tidak ada enkripsi, tidak ada kata sandi pada file itu sendiri. Perusahaan baru sadar betapa rentannya data ratusan karyawan mereka setelah kejadian ini.",
  },
  {
    type: "p",
    text: "Tim HR mengelola salah satu kumpulan data paling sensitif di seluruh perusahaan: nomor identitas, alamat rumah, rekening bank, gaji, riwayat kesehatan, hingga hasil penilaian kinerja setiap karyawan. Data sepenting ini sering kali tersebar di berbagai spreadsheet, lampiran email, dan folder bersama yang aksesnya tidak benar-benar terkendali dengan baik.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Pengelolaan data pribadi karyawan tunduk pada ketentuan hukum yang berlaku di Indonesia",
      "Kumpulkan data secukupnya sesuai kebutuhan, jangan berlebihan tanpa alasan jelas",
      "Batasi akses data sensitif sesuai peran masing-masing pengguna sistem",
      "Lindungi data secara teknis dengan enkripsi dan autentikasi yang kuat",
      "Siapkan prosedur yang jelas untuk menangani insiden kebocoran data",
    ],
  },
  { type: "h2", text: "Kenapa data HR sangat berisiko tinggi" },
  {
    type: "p",
    text: "Data yang dikelola tim HR bukan sekadar informasi bisnis biasa, melainkan data pribadi yang menyangkut kehidupan nyata setiap karyawan. Kebocoran data ini bisa berdampak serius bagi karyawan yang bersangkutan — mulai dari risiko penipuan finansial hingga masalah privasi yang lebih luas — sekaligus menimbulkan konsekuensi hukum dan reputasi yang berat bagi perusahaan yang gagal melindunginya dengan baik.",
  },
  { type: "h2", text: "Kewajiban hukum yang perlu dipahami" },
  {
    type: "p",
    text: "Di Indonesia, pengelolaan data pribadi diatur dalam Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi. Perusahaan yang memproses data pribadi karyawan memiliki kewajiban terkait dasar pemrosesan data, keamanan penyimpanan, dan hak-hak pemilik data seperti hak untuk mengakses dan meminta koreksi datanya sendiri. Karena peraturan pelaksana dari undang-undang ini dapat terus berkembang, pastikan kebijakan perusahaan Anda mengikuti ketentuan terbaru dan sebaiknya dikonsultasikan dengan pihak yang memahami regulasi ini secara mendalam.",
  },
  { type: "h2", text: "Kumpulkan data secukupnya" },
  {
    type: "p",
    text: "Data yang tidak dikumpulkan sejak awal tidak akan pernah bisa bocor. Tinjau kembali seluruh formulir dan proses HR yang berjalan saat ini: apakah semua data yang diminta benar-benar dibutuhkan untuk keperluan operasional yang jelas? Kebiasaan meminta salinan dokumen yang sebenarnya tidak diperlukan hanya menambah risiko penyimpanan data tanpa memberikan manfaat yang sepadan.",
  },
  { type: "h2", text: "Batasi akses sesuai kebutuhan" },
  {
    type: "ul",
    items: [
      "Data gaji hanya dapat diakses oleh pihak yang benar-benar mengurus proses penggajian",
      "Atasan hanya bisa melihat data anggota timnya sendiri, bukan seluruh karyawan perusahaan",
      "Data kesehatan dipisahkan dengan tingkat akses yang lebih ketat dari data lainnya",
      "Proses ekspor data dalam jumlah besar dibatasi ketat dan setiap aktivitasnya tercatat",
    ],
  },
  {
    type: "callout",
    title: "Hentikan kebiasaan mengirim data lewat spreadsheet",
    text: "Data karyawan yang dikirim sebagai lampiran email atau pesan singkat sangat mudah tersebar tanpa kendali — diteruskan ke pihak lain, diunduh, dan tersimpan di banyak perangkat berbeda tanpa jejak yang jelas. Akses melalui sistem terpusat dengan hak akses yang jelas jauh lebih aman dibanding kebiasaan berbagi file secara bebas seperti ini.",
  },
  { type: "h2", text: "Lindungi secara teknis" },
  {
    type: "p",
    text: "Data sensitif sebaiknya dienkripsi baik saat disimpan maupun saat sedang dikirim antar sistem, akses ke sistem dilindungi dengan verifikasi dua langkah untuk lapisan keamanan tambahan, dan setiap aktivitas akses ke data tersebut dicatat secara otomatis. Cadangan data HR juga perlu dilindungi dengan standar keamanan yang setara dengan data utamanya, karena cadangan yang tidak terlindungi bisa menjadi titik kebocoran yang sama berbahayanya.",
  },
  { type: "h2", text: "Ilustrasi: dampak dari kelalaian sederhana" },
  {
    type: "p",
    text: "Bayangkan sebuah perusahaan menengah yang terbiasa mengirim file spreadsheet berisi data gaji seluruh karyawan ke beberapa manajer setiap bulan lewat email, sebagai bagian dari proses persetujuan penggajian rutin. Suatu hari, salah satu manajer tanpa sengaja meneruskan email tersebut ke grup yang salah, dan data gaji seluruh karyawan perusahaan tersebar ke pihak yang tidak seharusnya melihatnya.",
  },
  {
    type: "p",
    text: "Setelah insiden ini, perusahaan beralih ke sistem HR terpusat di mana setiap manajer hanya bisa mengakses data gaji tim mereka sendiri langsung dari sistem dengan akun masing-masing yang terautentikasi, tanpa perlu mengirim file mentah sama sekali. Risiko kebocoran akibat kesalahan manusia seperti salah kirim email menjadi jauh berkurang secara signifikan.",
  },
  { type: "h2", text: "Tetapkan masa simpan data" },
  {
    type: "p",
    text: "Data mantan karyawan dan pelamar yang tidak diterima tidak perlu disimpan selamanya tanpa batas waktu. Tetapkan berapa lama data tersebut perlu disimpan sesuai kebutuhan operasional dan kewajiban hukum yang berlaku, lalu hapus atau anonimkan data tersebut setelah periode itu berakhir, alih-alih membiarkan data menumpuk tanpa kendali selama bertahun-tahun.",
  },
  { type: "h2", text: "Siapkan prosedur saat terjadi insiden" },
  {
    type: "p",
    text: "Tentukan sejak awal apa yang harus dilakukan jika suatu saat terjadi kebocoran data: siapa yang bertanggung jawab menangani situasi tersebut, bagaimana dampaknya akan dinilai secara cepat, dan bagaimana pihak yang terdampak akan diberi tahu sesuai ketentuan yang berlaku. Prosedur yang sudah disiapkan sebelumnya membuat respons terhadap insiden jauh lebih cepat dan lebih terarah dibanding harus memutuskan segalanya secara panik saat insiden benar-benar terjadi.",
  },
  { type: "h2", text: "Melatih karyawan tentang kesadaran keamanan data" },
  {
    type: "p",
    text: "Teknologi keamanan yang canggih tidak banyak berguna jika karyawan yang mengoperasikannya tidak memahami praktik dasar keamanan data. Berikan pelatihan rutin tentang cara mengenali email phishing, pentingnya tidak berbagi kata sandi, dan prosedur yang benar dalam menangani data sensitif sehari-hari.",
  },
  { type: "h2", text: "Langkah menjaga keamanan data karyawan" },
  {
    type: "ol",
    items: [
      "Pahami dan patuhi ketentuan hukum pelindungan data pribadi yang berlaku",
      "Kumpulkan hanya data yang benar-benar dibutuhkan untuk operasional",
      "Terapkan hak akses yang ketat sesuai peran masing-masing pengguna",
      "Lindungi data secara teknis dengan enkripsi dan verifikasi dua langkah",
      "Tetapkan masa simpan data dan hapus setelah tidak lagi diperlukan",
      "Siapkan prosedur penanganan insiden kebocoran data",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah perusahaan kecil juga wajib mematuhi ketentuan pelindungan data pribadi?" },
  {
    type: "p",
    text: "Ya, kewajiban ini pada dasarnya berlaku bagi semua pihak yang memproses data pribadi, tidak terbatas pada perusahaan besar. Skala penerapannya bisa disesuaikan dengan ukuran bisnis, tapi prinsip dasar perlindungan data tetap perlu diterapkan.",
  },
  { type: "h3", text: "Bagaimana menangani data karyawan yang sudah lama resign?" },
  {
    type: "p",
    text: "Tetapkan kebijakan retensi data yang jelas sesuai kebutuhan hukum, seperti kewajiban penyimpanan dokumen ketenagakerjaan tertentu untuk periode waktu tertentu. Setelah periode itu berakhir, pertimbangkan menghapus atau mengarsipkan data tersebut secara aman sesuai kebijakan yang sudah ditetapkan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Menjaga keamanan data pribadi karyawan bukan sekadar formalitas kepatuhan hukum, melainkan tanggung jawab nyata terhadap orang-orang yang mempercayakan informasi pribadi mereka kepada perusahaan. Dengan pengumpulan data yang secukupnya, hak akses yang ketat, dan perlindungan teknis yang memadai, risiko kebocoran yang bisa merugikan karyawan dan perusahaan sekaligus bisa dikendalikan dengan jauh lebih baik.",
  },
  {
    type: "cta",
    title: "Seberapa aman data karyawan Anda tersimpan saat ini?",
    text: "AG·SORA HR dirancang dengan hak akses berjenjang dan keamanan data yang ketat untuk melindungi informasi karyawan Anda.",
    href: "/products#hr",
    label: "Lihat AG·SORA HR",
  },
];
