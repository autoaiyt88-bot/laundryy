# FreshWash Laundry — Website Landing Page Bisnis

Website landing page modern, profesional, dan berorientasi konversi untuk bisnis laundry lokal **FreshWash Laundry**. Dibuat dengan stack modern **React + Vite + TypeScript + Tailwind CSS + Lucide Icons**, dirancang dengan estetika bisnis lokal yang bersih, segar, dan terpercaya.

---

## 🌟 Fitur Baru: Dukungan Dua Bahasa (Bilingual: ID & EN)

Website sekarang mendukung perpindahan bahasa secara instan antara **Bahasa Indonesia** dan **English**:

- **Tombol Pengganti Bahasa di Navbar**: Pengunjung dapat menekan tombol `ID / EN` di pojok kanan atas navbar (dan menu HP) untuk mengganti bahasa secara instan tanpa reload halaman.
- **Penyimpanan Otomatis (LocalStorage)**: Pilihan bahasa tersimpan otomatis di browser pengunjung.
- **Kamus Terjemahan Terpusat**: Seluruh teks terjemahan tersusun rapi di [**`src/data/translations.ts`**](file:///c:/Users/Tirta/OneDrive/Desktop/laundry/src/data/translations.ts).

---

## 🚀 1. Cara Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal **Node.js** (versi 18 atau lebih baru).

```bash
# 1. Buka terminal di folder proyek ini:
cd laundry

# 2. Instal dependensi (jika belum diinstal):
npm install

# 3. Jalankan server lokal:
npm run dev
```

Buka URL yang ditampilkan di terminal (biasanya **`http://localhost:5173`**) di browser Anda.

Untuk membuat bundle produksi:

```bash
npm run build
```

File hasil build akan berada di dalam folder `dist/`.

---

## 📁 2. Struktur Folder & Berkas Proyek

```
laundry/
├── index.html                   # File HTML utama (Title, Meta SEO, Favicon)
├── package.json                 # Konfigurasi dependensi proyek & script
├── tailwind.config.js           # Konfigurasi tema warna & font Tailwind
├── vite.config.ts               # Konfigurasi bundler Vite
├── dist/                        # File hasil produksi siap deploy
│
├── src/
│   ├── App.tsx                  # Komponen induk dengan LanguageProvider
│   ├── main.tsx                 # Titik masuk utama React DOM
│   ├── index.css                # Style global Tailwind CSS & scrollbar
│   │
│   ├── context/
│   │   └── LanguageContext.tsx  # Context React untuk state bahasa (ID / EN)
│   │
│   ├── data/
│   │   ├── laundryData.ts       # Pusat data kontak, WhatsApp, alamat, foto
│   │   └── translations.ts      # ⭐ Kamus teks bilingual (Indonesia & English)
│   │
│   └── components/
│       ├── Navbar.tsx           # Navigasi sticky + Tombol Ganti Bahasa ID/EN + Menu mobile
│       ├── Hero.tsx             # Hero section + Headline + Badge kepercayaan
│       ├── Stats.tsx            # Statistik angka pelanggan & pesanan
│       ├── Services.tsx         # 6 Kartu layanan laundry & harga
│       ├── Pricing.tsx          # 3 Paket harga transparan (Reguler, Express, Premium)
│       ├── Gallery.tsx          # Galeri foto fasilitas & filter kategori
│       ├── Benefits.tsx         # 6 Keunggulan FreshWash + Foto pendukung
│       ├── Testimonials.tsx     # Testimoni pelanggan dengan rating bintang
│       ├── About.tsx            # Cerita usaha & pilar komitmen
│       ├── FAQ.tsx              # Accordion tanya jawab interaktif
│       ├── CTA.tsx              # Lokasi outlet, Peta Google Maps interaktif & WhatsApp
│       ├── Footer.tsx           # Footer informasi kontak, jam buka, sosmed
│       ├── WhatsAppButton.tsx   # Tombol mengambang (floating) WhatsApp
│       └── ScrollReveal.tsx     # Komponen animasi scroll halus (IntersectionObserver)
```

---

## ⚙️ Panduan Kustomisasi Teks & Harga

- **Mengubah Teks (Indonesia / English)**: Buka [**`src/data/translations.ts`**](file:///c:/Users/Tirta/OneDrive/Desktop/laundry/src/data/translations.ts).
- **Mengubah Nomor WhatsApp, Alamat & Jam Buka**: Buka [**`src/data/laundryData.ts`**](file:///c:/Users/Tirta/OneDrive/Desktop/laundry/src/data/laundryData.ts).
