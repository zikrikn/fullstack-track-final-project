**Dokumentasi GitHub: Menjalankan Aplikasi Tokoplay**

Dokumentasi untuk menjalankan front-end aplikasi tokoplay.

---

## Langkah 1: Clone Repository

1. Buka terminal atau command prompt.

2. Clone repository di GitHub ke direktori lokal:
   ```bash
   git clone <URL_REPO_ANDA>
   ```

3. Masuk ke direktori repository yang baru saja Anda clone:
   ```bash
   cd nama-repo-anda
   ```

## Langkah 2: Instalasi Dependencies

1. Instalasi dependensi proyek:
   ```bash
   pnpm install
   ```

## Langkah 3: Menjalankan Aplikasi

1. Jalankan perintah berikut untuk memulai server pengembangan:
   ```bash
   pnpm run dev
   ```

2. Aplikasi Anda akan dijalankan pada alamat `http://localhost:5173` secara default.

3. Buka browser dan akses alamat `http://localhost:5173` untuk melihat aplikasi Anda berjalan.

## Langkah 4: Mengedit Aplikasi

1. Buka direktori proyek Anda dengan editor kode Anda.

2. Modifikasi file di dalam direktori `src` sesuai kebutuhan Anda. File `App.jsx` adalah titik awal aplikasi React.

3. Simpan perubahan Anda. Vite akan mendeteksi perubahan dan secara otomatis menyegarkan tampilan aplikasi di browser.

## Langkah 5: Membangun Aplikasi untuk Produksi

1. Untuk membuat versi produksi dari aplikasi, jalankan perintah berikut:
   ```bash
   pnpm run build
   ```

2. Setelah perintah selesai, direktori `dist` akan berisi hasil build yang siap untuk diterapkan di server produksi.

## Langkah 7: Kolaborasi atau Berbagi

Anda sekarang telah berhasil menjalankan front-end aplikasi tokoplay