**Tokoplay - Dokumentasi**

Tokoplay adalah proyek sederhana yang menggunakan stack MERN (MongoDB, Express.js, React.js, dan Node.js) untuk memenuhi tugas final project.

### The hosted URL of your project. (Backend and Frontend)
- Front-end: [https://fullstack-track-final-project-gigih-3-0.vercel.app/](https://fullstack-track-final-project-gigih-3-0.vercel.app/)
- Back-end: [https://backend-imrz.onrender.com/](https://backend-imrz.onrender.com/) (The main is not set to any endpoints, you can check it here [https://backend-imrz.onrender.com/api/videos](https://backend-imrz.onrender.com/api/videos)) - Please wait around 1-3 minutes first.

### Fitur
- Terdapat dua halaman: Beranda dan Detail Video
- Pengguna dapat melihat daftar video dengan thumbnail dari YouTube yang telah disimpan di halaman beranda
- Pengguna dapat mengklik setiap video dan masuk ke halaman detail video
- Pengguna dapat melihat daftar proyek, video YouTube yang tersemat, daftar komentar, dan formulir untuk mengirim komentar di halaman detail video
- Pengguna hanya perlu memasukkan username/nama dan komentar untuk melakukan komentar, dan dapat langsung melihat komentar setelah berhasil di-submit.

### Cara Instalasi & Menjalankan

#### Bagian Backend
Untuk instruksi lengkap mengenai backend, lihat di sini: [Panduan Backend](https://github.com/zikrikn/fullstack-track-final-project-gigih-3.0/blob/main/back-end/readme.md)

#### Bagian Frontend
Untuk instruksi lengkap mengenai frontend, lihat di sini: [Panduan Frontend](https://github.com/zikrikn/fullstack-track-final-project-gigih-3.0/blob/main/front-end/tokoplay/README.md)

### Skema Database

#### Koleksi Videos
```json
{
  "_id": {
    "$oid": "64d78a48c54473832bb96074"
  },
  "videoId": "jOTfBlKSQYY",
  "thumbnailUrl": "https://img.youtube.com/vi/jOTfBlKSQYY/maxresdefault.jpg",
  "title": "NewJeans (뉴진스) 'ETA' Official MV",
  "description": "Music video by the South Korean hip-hop group NewJeans. It features a catchy beat and stylish visuals.",
  "live": true,
  "viewers": 23310687
}
```

#### Koleksi Products
```json
{
  "_id": {
    "$oid": "64d78a65c54473832bb9607b"
  },
  "productId": "product1",
  "videoId": "jOTfBlKSQYY",
  "link": "https://www.tokopedia.com/logitech/logitech-h340-headset-stereo-usb-mikrofon-noise-cancelling?source=homepage.left_carousel.0.266926",
  "title": "Logitech H340 Headset Stereo USB Mikrofon Noise-Cancelling",
  "price": 321000
}
```

#### Koleksi Comments
```json
{
  "_id": {
    "$oid": "64d7a9ef6e1db717df451822"
  },
  "videoId": "jOTfBlKSQYY",
  "username": "JohnDoe",
  "comment": "This is a new comment.",
  "timestamp": {
    "$date": "2023-08-12T15:49:03.850Z"
  },
  "__v": 0
}
```

### Hubungan Relasi
- One-to-Many: Video to Comments
- One-to-Many: Video to Products