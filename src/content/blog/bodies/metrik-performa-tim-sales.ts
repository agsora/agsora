import type { Block } from "@/config/blog";

export const body: Block[] = [
  {
    type: "p",
    text: "Target bulan ini tidak tercapai. Manajer memanggil sales dengan pencapaian terendah, bertanya kenapa. Jawabannya samar — “lagi sepi aja, Pak”. Tidak ada data yang bisa menjelaskan lebih jauh: apakah prospeknya memang sedikit, apakah konversinya yang rendah, atau apakah follow-up-nya yang kurang konsisten. Rapat evaluasi berakhir tanpa solusi konkret, hanya dorongan semangat yang tidak menyelesaikan akar masalahnya.",
  },
  {
    type: "p",
    text: "Menilai tim sales hanya dari total penjualan di akhir bulan seperti melihat skor akhir sebuah pertandingan tanpa tahu jalannya permainan sama sekali. Anda tahu hasilnya menang atau kalah, tapi tidak tahu apa yang sebenarnya perlu diperbaiki untuk pertandingan berikutnya. Artikel ini membahas metrik yang lebih dalam dari sekadar angka penjualan akhir.",
  },
  { type: "h2", text: "Ringkasan" },
  {
    type: "ul",
    items: [
      "Metrik hasil menunjukkan apa yang terjadi, metrik proses menjelaskan kenapa itu terjadi",
      "Kombinasi keduanya membantu menemukan tahap mana yang bermasalah dalam corong penjualan",
      "Hati-hati dengan metrik aktivitas yang bisa dinaikkan tanpa menghasilkan apa pun",
      "Semua metrik ini bergantung pada data CRM yang diperbarui dengan disiplin",
      "Sesuaikan target dan metrik dengan konteks wilayah dan pengalaman masing-masing sales",
    ],
  },
  { type: "h2", text: "Kenapa angka penjualan saja tidak cukup" },
  {
    type: "p",
    text: "Angka penjualan akhir adalah hasil dari serangkaian proses yang panjang: mencari prospek, menjalin komunikasi, memahami kebutuhan, mengirim penawaran, bernegosiasi, hingga akhirnya menutup transaksi. Ketika hanya angka akhir yang dipantau, Anda kehilangan visibilitas terhadap seluruh proses ini — dan tanpa visibilitas itu, sulit menentukan intervensi yang tepat ketika hasilnya tidak sesuai harapan.",
  },
  { type: "h2", text: "Metrik hasil" },
  {
    type: "ul",
    items: [
      "Nilai penjualan yang tercapai dibandingkan dengan target yang ditetapkan",
      "Jumlah transaksi yang berhasil dimenangkan dalam periode tertentu",
      "Rata-rata nilai per transaksi yang berhasil ditutup",
      "Margin dari penjualan yang dihasilkan, bukan hanya angka omzet kotor",
    ],
  },
  { type: "h2", text: "Metrik proses" },
  {
    type: "p",
    text: "Metrik proses adalah yang menjelaskan mengapa hasil akhir terjadi seperti itu. Ketika penjualan turun, metrik-metrik ini membantu menemukan dengan tepat di titik mana masalahnya berada, alih-alih hanya menebak-nebak berdasarkan perasaan.",
  },
  {
    type: "ul",
    items: [
      "Jumlah peluang penjualan baru yang masuk ke dalam pipeline setiap periode",
      "Tingkat konversi dari satu tahap pipeline ke tahap berikutnya",
      "Rata-rata lama waktu dari kontak pertama hingga keputusan akhir diambil",
      "Nilai total pipeline yang masih aktif dibandingkan target periode berikutnya",
    ],
  },
  { type: "h2", text: "Membaca metrik secara bersamaan, bukan terpisah" },
  {
    type: "p",
    text: "Satu metrik saja jarang cukup untuk memberi gambaran yang berguna. Penjualan rendah yang disertai jumlah peluang baru yang juga sedikit menunjukkan masalah ada di tahap mencari prospek. Penjualan rendah tetapi jumlah peluang banyak dengan tingkat konversi yang kecil menunjukkan masalah justru ada di tahap penawaran atau negosiasi. Tindakan perbaikan untuk kedua situasi ini sangat berbeda, dan tanpa membaca metrik secara bersamaan, Anda bisa salah mendiagnosis masalahnya.",
  },
  {
    type: "callout",
    title: "Hati-hati dengan metrik aktivitas",
    text: "Jumlah telepon yang dilakukan atau jumlah kunjungan ke pelanggan mudah diukur, tapi juga mudah dinaikkan tanpa menghasilkan apa pun yang berarti — sekadar menelepon banyak orang tanpa persiapan yang matang. Gunakan metrik aktivitas sebagai petunjuk pendukung, bukan sebagai tujuan utama, agar sales tidak terjebak mengejar angka kunjungan yang sebenarnya tidak menghasilkan nilai bagi bisnis.",
  },
  { type: "h2", text: "Data harus bisa dipercaya lebih dulu" },
  {
    type: "p",
    text: "Semua metrik ini sepenuhnya bergantung pada data CRM yang diperbarui dengan disiplin oleh tim sales. Jika sales jarang memperbarui status peluang mereka, laporan yang dihasilkan akan terlihat rapi secara visual tetapi sebenarnya menyesatkan karena tidak mencerminkan kondisi nyata. Tahapan pipeline yang jelas dan kebiasaan memperbarui data secara rutin harus menjadi fondasi yang kokoh lebih dulu sebelum metrik apa pun bisa diandalkan untuk pengambilan keputusan.",
  },
  { type: "h2", text: "Ilustrasi: menemukan akar masalah lewat metrik" },
  {
    type: "p",
    text: "Bayangkan sebuah tim sales dengan enam orang, di mana angka penjualan bulan ini turun signifikan dibanding bulan sebelumnya. Dengan hanya melihat angka akhir, manajer hanya bisa menduga-duga. Setelah membedah data lebih dalam, ternyata jumlah peluang baru yang masuk sebenarnya normal, tetapi tingkat konversi dari tahap “proposal terkirim” ke “negosiasi” turun drastis dibanding bulan-bulan sebelumnya.",
  },
  {
    type: "p",
    text: "Dengan temuan spesifik ini, manajer bisa menindaklanjuti dengan tepat sasaran — meninjau kembali isi dan struktur proposal yang dikirim tim, alih-alih sekadar mendorong sales untuk “bekerja lebih keras” tanpa arah yang jelas. Masalah yang ditemukan lewat metrik proses jauh lebih mudah diperbaiki dibanding masalah yang hanya terlihat sebagai angka penjualan rendah tanpa penjelasan.",
  },
  { type: "h2", text: "Sesuaikan dengan konteks masing-masing sales" },
  {
    type: "p",
    text: "Target dan metrik yang sama persis belum tentu adil diterapkan untuk semua sales. Wilayah yang berbeda memiliki potensi pasar yang berbeda, jenis pelanggan yang berbeda punya siklus penjualan yang berbeda pula, dan pengalaman masing-masing sales juga bervariasi. Bandingkan kinerja dengan mempertimbangkan konteks-konteks ini, dan gunakan metrik untuk membantu sales berkembang secara individual — bukan semata-mata untuk memeringkat mereka satu sama lain secara kaku.",
  },
  { type: "h2", text: "Tinjau secara rutin, bukan hanya di akhir periode" },
  {
    type: "p",
    text: "Tinjauan mingguan yang singkat terhadap pipeline dan tingkat konversi jauh lebih berguna dibanding evaluasi besar yang hanya dilakukan di akhir kuartal. Masalah yang terlihat lebih awal masih bisa diperbaiki dalam periode yang sedang berjalan, sementara masalah yang baru diketahui di akhir kuartal sudah terlambat untuk memengaruhi hasil periode tersebut.",
  },
  { type: "h2", text: "Menggunakan metrik untuk coaching, bukan hanya evaluasi" },
  {
    type: "p",
    text: "Metrik proses paling bernilai ketika dipakai sebagai dasar percakapan pengembangan antara manajer dan sales, bukan hanya sebagai angka untuk menghakimi kinerja. Sales dengan tingkat konversi rendah di tahap tertentu bisa dibantu dengan pelatihan spesifik untuk tahap itu, sementara sales dengan jumlah prospek baru yang sedikit mungkin butuh bantuan strategi mencari peluang baru.",
  },
  { type: "h2", text: "Langkah menerapkan metrik yang lebih dalam" },
  {
    type: "ol",
    items: [
      "Pastikan tahapan pipeline dan disiplin pembaruan data sudah berjalan baik",
      "Tentukan metrik proses yang relevan dengan siklus penjualan bisnis Anda",
      "Bangun laporan yang menampilkan metrik hasil dan proses secara bersamaan",
      "Jadwalkan tinjauan mingguan, bukan hanya evaluasi bulanan atau kuartalan",
      "Gunakan temuan metrik untuk coaching individual, bukan hanya penilaian",
      "Sesuaikan target dengan konteks wilayah dan pengalaman masing-masing sales",
    ],
  },
  { type: "h2", text: "Pertanyaan yang sering muncul" },
  { type: "h3", text: "Metrik apa yang paling penting untuk dipantau pertama kali?" },
  {
    type: "p",
    text: "Jika baru memulai, tingkat konversi antar tahap pipeline biasanya memberi wawasan paling langsung tentang di mana proses penjualan Anda tersendat, dan relatif mudah dipahami oleh seluruh tim.",
  },
  { type: "h3", text: "Bagaimana jika sales merasa terlalu diawasi dengan metrik ini?" },
  {
    type: "p",
    text: "Framing sangat menentukan penerimaan tim. Sampaikan metrik ini sebagai alat untuk membantu mereka mencapai target lebih mudah dan mengidentifikasi di mana bantuan dibutuhkan, bukan sebagai alat pengawasan semata. Libatkan sales dalam mendiskusikan metrik apa yang menurut mereka relevan.",
  },
  { type: "h2", text: "Metrik untuk kualitas prospek, bukan hanya jumlahnya" },
  {
    type: "p",
    text: "Jumlah peluang baru yang banyak tidak selalu berarti baik jika sebagian besar berasal dari prospek yang sebenarnya tidak sesuai profil pelanggan ideal. Perhatikan juga tingkat konversi dari peluang baru menuju transaksi yang benar-benar ditutup — jika angka ini rendah meski jumlah peluang tinggi, kemungkinan sumber prospek yang dipakai tim perlu ditinjau ulang, bukan sekadar mendorong tim untuk mencari lebih banyak lagi peluang dari sumber yang sama.",
  },
  {
    type: "p",
    text: "Sebagian tim juga memantau dari mana asal peluang yang paling sering berujung pada transaksi — apakah dari referensi pelanggan lama, dari pameran, atau dari pencarian aktif sales sendiri. Informasi ini membantu mengarahkan waktu dan sumber daya tim ke saluran yang selama ini paling efektif, alih-alih membagi rata usaha ke semua saluran tanpa mempertimbangkan mana yang sebenarnya menghasilkan.",
  },
  { type: "h2", text: "Alasan kalah yang tercatat dengan jujur" },
  {
    type: "p",
    text: "Ketika sebuah peluang gagal ditutup, mencatat alasannya secara spesifik — kalah harga, kalah fitur, prospek menunda keputusan, atau prospek memilih tidak melakukan apa pun — memberi wawasan yang jauh lebih berguna dibanding sekadar menandai peluang tersebut sebagai “hilang” tanpa penjelasan. Pola alasan kalah yang berulang bisa menunjukkan masalah yang lebih besar, misalnya penawaran yang secara konsisten kalah bersaing di segmen harga tertentu.",
  },
  {
    type: "p",
    text: "Data alasan kalah ini paling berguna ketika dicatat sesegera mungkin setelah keputusan diketahui, saat detailnya masih segar di ingatan sales. Mencatatnya belakangan, apalagi di akhir bulan sekaligus untuk semua peluang yang hilang, cenderung menghasilkan alasan yang digeneralisasi dan kurang akurat.",
  },
  { type: "h2", text: "Menghindari metrik yang saling bertentangan" },
  {
    type: "p",
    text: "Kadang metrik yang ditetapkan tanpa dipikirkan matang justru saling bertentangan satu sama lain. Mengejar jumlah transaksi sebanyak-banyaknya bisa mendorong sales menerima diskon berlebihan yang akhirnya menggerus margin, sementara mengejar margin setinggi mungkin bisa membuat sales terlalu kaku bernegosiasi hingga kehilangan transaksi yang sebenarnya masih menguntungkan. Tinjau apakah kombinasi metrik yang dipakai justru menciptakan insentif yang saling berlawanan sebelum menerapkannya secara luas ke seluruh tim.",
  },
  { type: "h3", text: "Berapa banyak metrik yang idealnya dipantau sekaligus?" },
  {
    type: "p",
    text: "Terlalu banyak metrik sekaligus justru membuat tim bingung mana yang harus diprioritaskan. Sebagian besar tim sudah cukup terbantu dengan memantau sekitar empat sampai enam metrik inti yang benar-benar relevan dengan siklus penjualan mereka, dibanding mencoba melacak puluhan angka yang sebagian besar tidak pernah benar-benar ditindaklanjuti.",
  },
  { type: "h2", text: "Penutup" },
  {
    type: "p",
    text: "Metrik performa sales yang baik memberi gambaran lebih dari sekadar angka akhir — ia menunjukkan di mana dalam proses penjualan masalah sebenarnya terjadi, sehingga perbaikan bisa dilakukan dengan tepat sasaran. Dengan kombinasi metrik hasil dan proses yang dibaca bersamaan, evaluasi tim sales berubah dari sekadar menghakimi hasil menjadi alat nyata untuk pengembangan berkelanjutan.",
  },
  {
    type: "cta",
    title: "Masih menilai tim sales hanya dari angka penjualan akhir bulan?",
    text: "AG·SORA CRM menyediakan metrik proses dan hasil untuk membantu Anda memahami kinerja tim secara lebih dalam.",
    href: "/products#crm",
    label: "Lihat AG·SORA CRM",
  },
];
