import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Tim customer service bangga menunjukkan chatbot AI baru mereka yang bisa menjawab pertanyaan pelanggan dengan sangat lancar dan meyakinkan. Sampai suatu hari, seorang pelanggan menunjukkan tangkapan layar percakapan di mana chatbot itu dengan percaya diri menjanjikan diskon 50% yang sebenarnya tidak pernah ada dalam kebijakan resmi perusahaan mana pun. Chatbot itu tidak berbohong secara sengaja — ia hanya menyusun jawaban yang terdengar masuk akal berdasarkan pola bahasa, tanpa benar-benar tahu kebijakan yang sebenarnya berlaku.",
  },
  {
    type: "p",
    text: "Banyak bisnis mulai memakai AI untuk merangkum dokumen panjang, menjawab pertanyaan pelanggan secara otomatis, menyusun draf komunikasi, atau membantu analisis data. Manfaatnya memang nyata dan terasa langsung. Tetapi AI bekerja dengan cara yang cukup berbeda dari software konvensional pada umumnya, sehingga risikonya juga perlu dipahami dengan pendekatan yang berbeda pula, bukan disamakan begitu saja dengan risiko software biasa.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "AI generatif bisa menghasilkan jawaban yang terdengar meyakinkan namun sebenarnya keliru",
      "Memasukkan data sensitif ke layanan AI pihak ketiga berarti mengirim data tersebut keluar perusahaan",
      "Keputusan yang berdampak pada orang lain sebaiknya tetap berada di tangan manusia",
      "Buat aturan pemakaian AI sebelum penggunaannya menyebar tanpa kendali di seluruh tim",
      "Terapkan secara bertahap dimulai dari pekerjaan berisiko rendah terlebih dahulu",
    ],
  },
  { type: "h2", text: "Kenapa risiko AI berbeda dari software biasa" },
  {
    type: "p",
    text: "Software konvensional bekerja dengan logika yang pasti dan bisa diprediksi — jika kondisi tertentu terpenuhi, hasilnya akan selalu sama. AI generatif bekerja dengan cara yang fundamental berbeda: ia menyusun jawaban berdasarkan pola statistik dari data yang pernah dipelajarinya, yang berarti hasilnya bisa bervariasi dan, yang lebih penting, bisa terdengar sangat meyakinkan meski sebenarnya keliru sama sekali.",
  },
  { type: "h2", text: "Jawaban yang meyakinkan tapi keliru" },
  {
    type: "p",
    text: "Model AI generatif bisa menghasilkan jawaban yang terdengar sangat tepat dan profesional, tetapi sebenarnya salah — termasuk angka yang tidak akurat, kutipan yang sebenarnya tidak pernah ada, atau fakta yang sepenuhnya dikarang tanpa disadari. Ini bukan kerusakan yang terjadi sesekali secara kebetulan, melainkan memang bagian dari cara kerja dasar teknologi ini. Karena itu, keluaran AI untuk hal-hal yang penting perlu diperiksa secara cermat oleh manusia sebelum benar-benar dipakai atau disebarkan lebih lanjut.",
  },
  { type: "h2", text: "Kebocoran data yang tidak disadari" },
  {
    type: "p",
    text: "Memasukkan dokumen internal, data pelanggan, atau data karyawan ke dalam layanan AI pihak ketiga berarti data tersebut dikirim keluar dari lingkungan perusahaan Anda. Pahami dengan jelas bagaimana penyedia layanan menyimpan dan menggunakan data yang Anda masukkan, pilih layanan yang ketentuannya sesuai dengan kebijakan keamanan internal perusahaan, dan tetapkan dengan tegas data jenis apa saja yang sama sekali tidak boleh dimasukkan ke layanan semacam ini.",
  },
  {
    type: "callout",
    title: "Buat aturan pemakaian sebelum AI menyebar tanpa kendali",
    text: "Karyawan sering kali sudah mulai memakai berbagai alat AI secara mandiri jauh sebelum ada kebijakan resmi dari perusahaan. Aturan sederhana yang jelas — alat mana saja yang boleh dipakai dan data seperti apa yang tidak boleh dimasukkan — jauh lebih efektif diterapkan dibanding larangan total yang pada praktiknya sering diabaikan begitu saja oleh karyawan.",
  },
  { type: "h2", text: "Keputusan yang sulit dijelaskan alasannya" },
  {
    type: "p",
    text: "Ketika AI membantu mengambil keputusan yang berdampak langsung pada kehidupan orang — misalnya menyaring lamaran kerja calon karyawan atau menilai kelayakan kredit pelanggan — sangat sulit menjelaskan secara pasti mengapa sebuah keputusan tertentu diambil oleh sistem. Keputusan-keputusan semacam ini sebaiknya tetap berada di tangan manusia sepenuhnya, dengan AI hanya berperan sebagai alat bantu yang mempercepat proses, bukan sebagai pengambil keputusan akhir yang otonom.",
  },
  { type: "h2", text: "Ketergantungan pada penyedia layanan" },
  {
    type: "p",
    text: "Layanan AI bisa berubah harga sewaktu-waktu, mengubah perilaku sistemnya setelah pembaruan model tanpa pemberitahuan yang jelas, atau bahkan mengalami gangguan operasional yang berkepanjangan. Proses bisnis yang sepenuhnya bergantung pada satu layanan AI tertentu perlu memiliki rencana cadangan agar operasional tidak sepenuhnya terhenti jika terjadi masalah dengan penyedia layanan tersebut.",
  },
  { type: "h2", text: "Ilustrasi: pelajaran dari kesalahan chatbot" },
  {
    type: "p",
    text: "Bayangkan sebuah toko online yang memasang chatbot berbasis AI generatif untuk menjawab pertanyaan pelanggan tanpa batasan yang jelas tentang apa yang boleh dan tidak boleh dijanjikan. Suatu hari, chatbot tersebut menjanjikan pengembalian dana penuh kepada seorang pelanggan yang sebenarnya sudah melewati batas waktu kebijakan retur yang berlaku, hanya karena chatbot “menyusun” jawaban yang terdengar membantu berdasarkan konteks percakapan, bukan berdasarkan kebijakan resmi yang sebenarnya berlaku.",
  },
  {
    type: "p",
    text: "Setelah insiden ini, tim menyadari perlunya membatasi chatbot agar hanya menjawab berdasarkan sumber informasi resmi yang sudah diverifikasi, dan menetapkan bahwa segala bentuk kompensasi atau pengecualian kebijakan harus melalui persetujuan petugas manusia terlebih dahulu sebelum dijanjikan kepada pelanggan mana pun.",
  },
  { type: "h2", text: "Cara menerapkan AI dengan lebih aman" },
  {
    type: "ol",
    items: [
      "Mulai dari pekerjaan berisiko rendah, seperti penyusunan draf internal dan ringkasan dokumen",
      "Sediakan pemeriksaan manusia untuk setiap keluaran AI yang akan dipakai ke pihak luar",
      "Batasi jenis data yang boleh diproses, terutama data pribadi dan informasi rahasia",
      "Catat setiap penggunaan AI dalam proses penting agar bisa ditelusuri jika diperlukan",
      "Evaluasi hasilnya secara berkala, bukan hanya sekali di awal penerapan",
    ],
  },
  {
    type: "p",
    text: "Dengan batasan yang jelas dan pendekatan yang bertahap seperti ini, AI bisa memberi manfaat nyata bagi operasional bisnis tanpa menciptakan risiko yang tidak disadari dan berpotensi merugikan di kemudian hari.",
  },
  { type: "h2", text: "Melatih tim untuk memahami keterbatasan AI" },
  {
    type: "p",
    text: "Selain menetapkan aturan pemakaian, penting juga melatih tim untuk memahami bahwa AI bukan sumber kebenaran mutlak. Ajarkan kebiasaan memverifikasi informasi penting dari sumber lain sebelum benar-benar mengandalkannya, terutama untuk keputusan yang memiliki konsekuensi finansial atau hukum bagi bisnis.",
  },
  { type: "h2", text: "Menangani insiden ketika terjadi kesalahan" },
  {
    type: "p",
    text: "Siapkan prosedur yang jelas untuk menangani situasi ketika AI ternyata memberikan informasi yang keliru atau membuat janji yang tidak seharusnya kepada pelanggan. Tentukan siapa yang berwenang membatalkan atau mengoreksi kesalahan tersebut, dan bagaimana cara mengomunikasikannya kepada pihak yang terdampak secara transparan.",
  },
  { type: "h2", text: "Bias yang terwarisi dari data pelatihan" },
  {
    type: "p",
    text: "Model AI belajar dari data yang sangat besar jumlahnya, dan data tersebut membawa pola-pola yang ada di dalamnya — termasuk bias yang mungkin tidak disadari oleh siapa pun yang menyusun data tersebut. Ketika AI dipakai untuk pekerjaan seperti menyaring kandidat kerja atau menilai kelayakan calon mitra bisnis, bias semacam ini bisa berakibat pada keputusan yang secara sistematis kurang adil bagi kelompok tertentu, tanpa ada yang secara sengaja merancangnya demikian.",
  },
  {
    type: "p",
    text: "Karena sulit mengetahui persis bias apa yang mungkin terbawa dalam sebuah model, pendekatan paling aman adalah tetap memperlakukan keluaran AI sebagai masukan awal yang perlu ditinjau manusia, bukan sebagai keputusan final yang langsung dieksekusi. Untuk proses yang berdampak pada peluang seseorang — pekerjaan, kredit, atau layanan penting lainnya — audit berkala terhadap pola keputusan yang dihasilkan AI membantu mengenali kejanggalan sebelum berkembang menjadi masalah yang lebih besar dan sulit diperbaiki.",
  },
  { type: "h2", text: "Menyusun kebijakan pemakaian AI yang realistis" },
  {
    type: "p",
    text: "Kebijakan pemakaian AI yang efektif tidak perlu berupa dokumen hukum yang panjang dan rumit. Yang lebih penting adalah kejelasan tentang tiga hal: alat AI apa saja yang boleh dipakai karyawan, jenis data apa yang sama sekali tidak boleh dimasukkan ke dalamnya, dan pekerjaan seperti apa yang tetap membutuhkan tinjauan manusia sebelum hasilnya dipakai. Kebijakan yang terlalu ketat dan sulit dipatuhi justru berisiko diabaikan diam-diam oleh karyawan, sementara kebijakan yang terlalu longgar tidak memberikan perlindungan yang berarti.",
  },
  {
    type: "p",
    text: "Libatkan perwakilan dari berbagai tim saat menyusun kebijakan ini, karena kebutuhan dan risiko pemakaian AI bisa sangat berbeda antara tim customer service, tim keuangan, dan tim pemasaran. Kebijakan yang disusun sepihak oleh satu tim saja sering kali tidak realistis diterapkan di tim lain yang memiliki konteks kerja berbeda, dan akhirnya hanya menjadi dokumen formalitas yang tidak benar-benar diikuti sehari-hari.",
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Apakah AI generatif aman dipakai untuk komunikasi resmi dengan pelanggan?" },
  {
    type: "p",
    text: "Bisa dipakai, tapi dengan batasan yang jelas dan pemeriksaan manusia sebelum dikirim, terutama untuk komunikasi yang menyangkut komitmen, harga, atau kebijakan resmi perusahaan. Jangan biarkan AI berkomunikasi sepenuhnya tanpa pengawasan untuk hal-hal yang berdampak langsung pada pelanggan.",
  },
  { type: "h3", text: "Bagaimana memulai jika belum pernah menggunakan AI sama sekali di bisnis?" },
  {
    type: "p",
    text: "Mulailah dari kasus penggunaan yang paling sederhana dan berisiko rendah, seperti membantu menyusun draf email internal atau merangkum dokumen panjang untuk keperluan sendiri. Bangun pemahaman dan kepercayaan secara bertahap sebelum memperluas penggunaannya ke proses yang lebih penting dan berisiko lebih tinggi.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "AI membawa manfaat nyata bagi operasional bisnis, tetapi juga membawa jenis risiko yang berbeda dari software konvensional yang selama ini kita kenal. Dengan memahami keterbatasannya, menetapkan batasan yang jelas, dan menerapkannya secara bertahap dimulai dari yang berisiko rendah, bisnis bisa memanfaatkan teknologi ini secara bertanggung jawab tanpa menciptakan masalah baru yang justru merugikan di kemudian hari.",
  },
  {
    type: "cta",
    title: "Ingin menerapkan AI di bisnis Anda dengan aman dan terukur?",
    text: "Tim AG·SORA membantu merancang penerapan AI automation dengan batasan risiko yang jelas sejak awal.",
    href: "/services/ai-automation",
    label: "Pelajari AI Automation",
  },
];
