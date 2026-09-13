import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Dua proposal, dua angka yang beda jauh — satu Rp45 juta, satu Rp95 juta. Sekilas keduanya menjanjikan “sistem manajemen inventori lengkap”. Setelah dibaca lebih teliti, yang murah ternyata tidak menyebutkan migrasi data sama sekali, sementara yang mahal sudah mencakup migrasi, pelatihan tiga sesi, dan enam bulan dukungan penuh.",
  },
  {
    type: "p",
    text: "Setelah menghubungi beberapa software house, Anda akan menerima proposal dengan format, struktur, dan harga yang beragam. Membandingkan angka totalnya saja hampir selalu menyesatkan, karena setiap proposal mungkin mencakup pekerjaan yang sangat berbeda meski judulnya terdengar sama. Artikel ini membantu Anda membaca proposal dengan lebih kritis, bagian per bagian.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Bagian terpenting proposal adalah ruang lingkup, bukan angka harga",
      "Periksa hal yang sering tidak tertulis: migrasi data, integrasi, pelatihan, biaya pihak ketiga",
      "Pahami cara perubahan kebutuhan dihitung sebelum menandatangani",
      "Harga yang jauh lebih murah dari yang lain perlu dipertanyakan alasannya",
      "Perhatikan tahapan, pembayaran, dan pertanyaan yang diajukan vendor",
    ],
  },
  { type: "h2", text: "Kenapa membandingkan angka saja menyesatkan" },
  {
    type: "p",
    text: "Setiap software house memiliki cara berbeda menyusun proposal. Sebagian mencantumkan semua biaya secara rinci dan transparan sejak awal. Sebagian lain memberi angka yang terlihat menarik, tapi sebenarnya baru mencakup sebagian kecil dari yang sebenarnya Anda butuhkan — sisanya akan ditagih terpisah begitu pengerjaan berjalan dan kebutuhan tambahan “ditemukan”.",
  },
  {
    type: "p",
    text: "Tanpa membaca detail ruang lingkup, Anda tidak benar-benar membandingkan harga untuk pekerjaan yang sama. Anda membandingkan dua hal yang berbeda hanya karena kebetulan angka totalnya muncul di kolom yang sama.",
  },
  { type: "h2", text: "Periksa ruang lingkup lebih dulu" },
  {
    type: "p",
    text: "Bagian terpenting proposal bukan harga, melainkan daftar pekerjaan yang dicakup di dalamnya. Cocokkan dengan dokumen kebutuhan Anda satu per satu: apakah semua kebutuhan wajib benar-benar tercakup secara eksplisit? Apa saja yang tidak disebutkan sama sekali? Sebagai aturan praktis, kebutuhan yang tidak tertulis di proposal sebaiknya dianggap tidak termasuk, meski secara lisan vendor mengatakan “itu pasti kami kerjakan juga kok”.",
  },
  { type: "h2", text: "Hal yang sering tidak tertulis" },
  {
    type: "ul",
    items: [
      "Migrasi data dari sistem atau spreadsheet lama ke sistem baru",
      "Integrasi dengan aplikasi lain yang sudah dipakai perusahaan",
      "Pelatihan pengguna dan penyusunan dokumentasi",
      "Biaya server, domain, dan layanan pihak ketiga lainnya",
      "Masa perbaikan bug setelah sistem diluncurkan",
      "Biaya pemeliharaan bulanan setelah masa perbaikan berakhir",
    ],
  },
  {
    type: "p",
    text: "Jika salah satu dari hal-hal ini tidak disebutkan, jangan berasumsi itu sudah termasuk. Tanyakan secara eksplisit dan minta jawaban tertulis, bukan hanya konfirmasi lisan yang mudah dilupakan atau disangkal di kemudian hari.",
  },
  { type: "h2", text: "Pahami cara perubahan dihitung" },
  {
    type: "p",
    text: "Kebutuhan hampir pasti berubah selama pengerjaan berlangsung — itu wajar dalam project software apa pun. Proposal yang baik menjelaskan bagaimana perubahan ditangani: apakah ada ruang untuk penyesuaian kecil tanpa biaya tambahan, dan bagaimana tambahan fitur yang lebih besar dihitung dan disepakati. Tanpa penjelasan ini, perubahan kecil yang terasa wajar bagi Anda bisa berujung pada tagihan tambahan yang tidak terduga.",
  },
  {
    type: "callout",
    title: "Harga yang jauh lebih murah perlu dipertanyakan",
    text: "Proposal yang harganya jauh di bawah yang lain bisa berarti vendor tersebut memang lebih efisien — atau bisa juga berarti ruang lingkupnya lebih sempit, asumsinya terlalu optimistis, atau ada pekerjaan yang akan ditagih terpisah di kemudian hari. Tanyakan langsung: apa yang membuat harga ini berbeda dari yang lain?",
  },
  { type: "h2", text: "Lihat tahapan dan skema pembayaran" },
  {
    type: "p",
    text: "Periksa bagaimana pekerjaan dibagi dalam tahapan, apa hasil konkret yang diserahkan di setiap tahap, dan bagaimana termin pembayaran dikaitkan dengan hasil tersebut. Skema yang mengaitkan pembayaran dengan hasil yang bisa dicoba dan diverifikasi — bukan sekadar persentase waktu yang berlalu — memberi Anda kendali yang lebih baik jika project ternyata tidak berjalan sesuai harapan.",
  },
  { type: "h2", text: "Perhatikan pertanyaan yang diajukan vendor" },
  {
    type: "p",
    text: "Vendor yang mengajukan banyak pertanyaan tentang proses bisnis Anda sebelum mengirim proposal biasanya memahami risiko project dengan lebih baik, dan proposalnya cenderung lebih akurat mencerminkan kebutuhan sebenarnya. Proposal yang datang sangat cepat tanpa pertanyaan apa pun — hanya berdasarkan pesan singkat awal Anda — layak dibaca dengan lebih hati-hati, karena kemungkinan besar berdasarkan asumsi yang belum diverifikasi.",
  },
  { type: "h2", text: "Membaca bagian teknis tanpa perlu jadi ahli teknis" },
  {
    type: "p",
    text: "Anda tidak perlu memahami istilah teknis mendalam untuk menilai proposal. Yang perlu diperhatikan adalah apakah penjelasan teknisnya masuk akal secara logika bisnis: apakah teknologi yang disebutkan sesuai dengan skala kebutuhan Anda, dan apakah vendor bisa menjelaskan pilihan teknisnya dalam bahasa yang Anda pahami ketika ditanya. Vendor yang baik bisa menerjemahkan keputusan teknis menjadi dampak bisnis yang jelas.",
  },
  { type: "h2", text: "Ilustrasi: membaca dua proposal berdampingan" },
  {
    type: "p",
    text: "Bayangkan Anda menerima dua proposal untuk sistem manajemen gudang. Proposal A senilai Rp60 juta dengan deskripsi singkat: “Sistem manajemen gudang lengkap dengan laporan.” Proposal B senilai Rp85 juta dengan rincian: pemetaan proses, modul penerimaan dan pengeluaran barang, migrasi data 5.000 SKU, integrasi dengan sistem akuntansi yang sudah dipakai, pelatihan tiga sesi untuk staf gudang, dan enam bulan dukungan pasca-rilis.",
  },
  {
    type: "p",
    text: "Setelah Anda menanyakan detail ke vendor A, ternyata migrasi data dan integrasi akuntansi tidak termasuk dan akan ditagih terpisah — yang jika dijumlahkan, totalnya justru melebihi proposal B. Tanpa membaca detail ruang lingkup lebih dulu, Anda hampir memilih proposal yang terlihat lebih murah padahal sebenarnya lebih mahal untuk cakupan pekerjaan yang setara.",
  },
  { type: "h2", text: "Minta klarifikasi tertulis untuk setiap keraguan" },
  {
    type: "p",
    text: "Jika ada bagian proposal yang tidak jelas, minta penjelasan tertulis melalui email atau dokumen resmi, dan pastikan jawabannya dilampirkan atau dirujuk sebagai bagian dari kontrak yang akan ditandatangani. Kesepakatan lisan yang hanya dibicarakan saat pertemuan mudah terlupakan atau ditafsirkan berbeda ketika project sudah berjalan dan masalah muncul.",
  },
  { type: "h2", text: "Checklist membaca proposal" },
  {
    type: "ol",
    items: [
      "Cocokkan ruang lingkup dengan dokumen kebutuhan Anda satu per satu",
      "Periksa apakah migrasi, integrasi, dan pelatihan disebutkan eksplisit",
      "Pahami mekanisme perubahan kebutuhan dan biayanya",
      "Perhatikan tahapan dan bagaimana pembayaran dikaitkan dengan hasil",
      "Tanyakan apa yang membuat harga berbeda jika dibandingkan penawaran lain",
      "Minta semua klarifikasi secara tertulis",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Bolehkah meminta proposal direvisi sebelum menandatangani?" },
  {
    type: "p",
    text: "Sangat boleh, dan ini bagian normal dari proses negosiasi. Vendor yang profesional akan bersedia merevisi proposal berdasarkan klarifikasi yang Anda minta, selama perubahan tersebut wajar dan tidak mengubah kesepakatan dasar secara drastis.",
  },
  { type: "h3", text: "Apakah proposal yang lebih detail selalu lebih baik?" },
  {
    type: "p",
    text: "Umumnya ya, karena detail menunjukkan pemahaman yang lebih mendalam. Tapi periksa juga apakah detailnya relevan dan bukan sekadar dokumen panjang berisi istilah teknis yang tidak menjelaskan apa pun secara konkret tentang apa yang akan Anda terima.",
  },
  { type: "h2", text: "Periksa klausul kepemilikan kode dan data" },
  {
    type: "p",
    text: "Salah satu bagian yang paling sering terlewat saat membaca proposal adalah siapa yang memiliki kode sumber dan data setelah project selesai. Sebagian software house secara default menyerahkan kepemilikan penuh kepada klien setelah pelunasan, tapi sebagian lain hanya memberikan lisensi pemakaian sementara kode tetap menjadi milik vendor. Perbedaan ini sangat menentukan: jika suatu saat Anda ingin pindah vendor untuk pemeliharaan atau pengembangan lanjutan, kepemilikan kode yang jelas membuat perpindahan itu mungkin dilakukan. Tanpa kejelasan ini, Anda bisa terjebak bergantung pada satu vendor selamanya, meski hubungan kerja sama sudah tidak lagi terasa nyaman.",
  },
  { type: "h2", text: "Pahami siapa yang akan mengerjakan project Anda" },
  {
    type: "p",
    text: "Proposal sering ditulis dan dipresentasikan oleh orang yang paling senior di perusahaan software house tersebut, tapi pengerjaan sehari-hari belum tentu dilakukan oleh orang yang sama. Tanyakan secara spesifik siapa yang akan menjadi penanggung jawab teknis project Anda, berapa lama pengalaman mereka, dan apakah mereka akan tetap berada di tim yang sama sepanjang project berjalan. Pergantian anggota tim di tengah jalan — terutama jika terjadi berkali-kali — bisa memperlambat project secara signifikan karena pengetahuan tentang kebutuhan Anda harus dibangun ulang dari awal oleh orang yang baru bergabung.",
  },
  { type: "h2", text: "Perhatikan realistis tidaknya estimasi waktu pengerjaan" },
  {
    type: "p",
    text: "Waspadai proposal yang menjanjikan waktu pengerjaan sangat singkat untuk ruang lingkup yang sebenarnya kompleks. Estimasi waktu yang terlalu optimis sering berujung pada keterlambatan yang pada akhirnya merugikan Anda juga, karena rencana bisnis yang bergantung pada tanggal peluncuran ikut mundur mengikutinya. Bandingkan estimasi waktu antar proposal untuk ruang lingkup yang setara, dan tanyakan dasar perhitungan dari estimasi tersebut — apakah berdasarkan pengalaman mengerjakan project serupa sebelumnya, atau sekadar perkiraan kasar supaya proposal terlihat lebih menarik di atas kertas.",
  },
  { type: "h2", text: "Baca ketentuan garansi dan terminasi kontrak" },
  {
    type: "p",
    text: "Proposal yang baik menjelaskan dengan jelas apa yang terjadi jika ada pihak yang ingin menghentikan kerja sama sebelum project selesai — baik karena vendor tidak mampu memenuhi tenggat, atau karena kebutuhan bisnis Anda berubah drastis di tengah jalan. Periksa juga masa garansi setelah sistem diluncurkan: berapa lama masa berlakunya, apa saja yang tercakup di dalamnya, dan apakah perbaikan bug termasuk gratis atau justru dikenakan biaya tambahan. Ketentuan yang tidak jelas di bagian ini sering menjadi sumber perselisihan paling besar ketika hubungan kerja sama ternyata tidak berjalan semulus yang dibayangkan.",
  },
  { type: "h3", text: "Apakah wajar meminta referensi dari klien sebelumnya?" },
  {
    type: "p",
    text: "Sangat wajar, dan sebaiknya selalu dilakukan untuk project bernilai besar. Vendor yang memiliki rekam jejak baik biasanya tidak keberatan menghubungkan Anda dengan klien sebelumnya yang bisa memberi gambaran nyata tentang cara kerja mereka sehari-hari. Kalau vendor enggan memberikan referensi sama sekali tanpa alasan yang masuk akal, jadikan itu sebagai salah satu pertimbangan tambahan sebelum memutuskan.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Proposal software house adalah dokumen yang perlu dibaca dengan teliti, bukan hanya dilihat angka totalnya. Dengan memeriksa ruang lingkup, hal yang sering tidak tertulis, dan cara perubahan kebutuhan ditangani, Anda bisa membandingkan penawaran secara adil dan menghindari kejutan biaya yang tidak perlu di tengah project.",
  },
  {
    type: "cta",
    title: "Butuh bantuan membandingkan proposal yang Anda terima?",
    text: "Tim AG·SORA siap membantu Anda menilai ruang lingkup dan kewajaran proposal software — bahkan jika bukan dari kami.",
    href: "/contact",
    label: "Konsultasi Gratis",
  },
];
