# MBGTrack System Requirements & Image Assets

## ✅ System Status

### HTML ✓ SELESAI
- Semua struktur halaman lengkap
- 9 halaman utama: Landing, Dashboard, Region, Tracker, Feed, Nutrition, Feedback, Tracking, Admin
- Navigation navbar yang responsive
- Role switcher (Publik / Admin / Sekolah)

### JavaScript ✓ SELESAI
- `showPage(id)` - Page navigation
- `switchRole(role)` - Role switcher
- `submitFeedback()` - Form submission
- `trackReport()` - Tracking system
- `searchRegion()` - Search functionality
- `loadRegionDetail(region)` - Region details loader
- `initDashChart()` - Dashboard chart
- `initNutriChart()` - Nutrition chart
- `initIndonesiaMap()` - Leaflet interactive map
- Scroll reveal animations
- Hero background rotator

### CSS ✓ SELESAI (99%)
- ✓ Complete design system (colors, typography, shadows)
- ✓ Responsive navbar & pages
- ✓ Landing page sections (hero, snapshot, distribution, collaboration)
- ✓ KPI cards dengan animations
- ✓ Dashboard layout
- ✓ Cards & components
- ⚠ Mobile responsive perlu ditambah di @media queries

---

## 📁 GAMBAR YANG DIPERLUKAN

### 1. **Hero Background Images** (Folder: `/images/heroImages/`)
Digunakan untuk rotasi background di hero section setiap 6 detik:

```javascript
const heroImages = [
  'MBG-Antara.webp',           // Rekomendasi: Distribusi makanan / sekolah
  'MBG.2-765x510.webp',        // Rekomendasi: Anak-anak makan bergizi
  'Untitled-6-1238651552.webp',// Rekomendasi: Nutrisi / gizi seimbang
  'large_lt695f860704c39.jpg',  // Rekomendasi: Kegiatan MBG nasional
  '45172.jpg',                 // Rekomendasi: Sekolah / siswa
  'download.jpg',              // Rekomendasi: Tim MBG / kolaborasi
  '01K2MG2WV40XF4AK4EKQ9VM6XV.png' // Rekomendasi: Peta Indonesia / coverage
];
```

**Spesifikasi:**
- Format: WebP (untuk performa) atau JPG fallback
- Ukuran: Min 1920x1080px (untuk desktop)
- Optimasi: Max 500KB per gambar
- **Tema:** Distribusi makanan gratis, anak sekolah makan, nutrisi, sekolah, kegiatan program

### 2. **Report Images** (Untuk Laporan Lapangan Section)
Di dashboard & feed page - 4 gambar untuk laporan terbaru:

**Lokasi dalam HTML:** Lines 942-986 (report photo cards)
```html
<div class="report-photo" style="background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80');"></div>
```

**Rekomendasi (Bisa external URLs atau lokal):**
1. Gambar distribusi makanan di NTT
2. Gambar kualitas makanan / nutrisi
3. Gambar verifikasi lapangan
4. Gambar stok bahan pokok

**Spesifikasi:**
- Ukuran: 900x600px - 1200x800px
- Format: JPG or WebP
- Maksimal: 300KB per gambar

### 3. **Ministry Partner Logos** (Kolaborasi Section)
Saat ini menggunakan generated SVG text. Bisa diganti dengan logo asli:

**Rekomendasi Buat:**
- Logo Kemdikbud
- Logo Kemenkes
- Logo Kemendagri
- Logo Bappenas
- Logo BPOM
- Logo Pemda
- Logo Sekolah
- Logo Mitra

**Spesifikasi:**
- Ukuran: 180x64px (standar kolaborasi marquee)
- Format: PNG (transparent bg) atau SVG
- Style: Official government logos

### 4. **Icons & Illustrations** (Optional)
Saat ini menggunakan emoji, bisa upgrade ke icons:
- 🏫 School icon
- 🍱 Food/meal icon
- 🗺 Map icon
- 🔔 Alert icon
- ✓ Checkmark
- ⚡ Alert/warning

---

## 📋 FILE STRUKTUR YANG HARUS DISIAPKAN

```
e:\Web Design\html-mbg\
├── index.html ✓
├── css/
│   └── styles.css ✓
├── images/  ← FOLDER BARU
│   ├── heroImages/
│   │   ├── MBG-Antara.webp (heroImages[0])
│   │   ├── MBG.2-765x510.webp (heroImages[1])
│   │   ├── Untitled-6-1238651552.webp (heroImages[2])
│   │   ├── large_lt695f860704c39.jpg (heroImages[3])
│   │   ├── 45172.jpg (heroImages[4])
│   │   ├── download.jpg (heroImages[5])
│   │   └── 01K2MG2WV40XF4AK4EKQ9VM6XV.png (heroImages[6])
│   ├── reports/
│   │   ├── report-1.jpg (NTT distribution)
│   │   ├── report-2.jpg (Food quality)
│   │   ├── report-3.jpg (Verification complete)
│   │   └── report-4.jpg (Stock depletion)
│   └── logos/
│       ├── kemdikbud.png
│       ├── kemenkes.png
│       ├── kemendagri.png
│       ├── bappenas.png
│       ├── bpom.png
│       ├── pemda.png
│       ├── sekolah.png
│       └── mitra.png
└── README.md ✓
```

---

## 🎨 REKOMENDASI SUMBER GAMBAR

### Free Image Sources:
1. **Unsplash** (unsplash.com) - Gratis, high quality
   - Cari: "School children eating", "Nutrition food distribution", "Government program"
2. **Pexels** (pexels.com) - Gratis, Indonesia-friendly
3. **Pixabay** (pixabay.com) - Gratis, berbagai tema
4. **Shutterstock** (shutterstock.com) - Berbayar, premium quality

### Untuk Logo Pemerintah:
- Ambil dari website resmi kementerian
- Bisa dari: kemendikbud.go.id, kemenkes.go.id, dll

---

## 🔧 CARA IMPLEMENTASI GAMBAR

### 1. Hero Images (Auto-rotate)
Letakkan di `images/heroImages/` dan sistem otomatis akan rotate setiap 6 detik.

### 2. Report Images  
Update URL di HTML (line 942-986):
```html
<!-- Dari: -->
<div class="report-photo" style="background-image: url('https://images.unsplash.com/...');"></div>

<!-- Ke: -->
<div class="report-photo" style="background-image: url('images/reports/report-1.jpg');"></div>
```

### 3. Ministry Logos
Update kolaborasi section atau ganti SVG dengan `<img>` tags:
```html
<!-- Dari SVG: -->
<img class="collab-logo" alt="Kemdikbud" src="data:image/svg+xml;...">

<!-- Ke: -->
<img class="collab-logo" alt="Kemdikbud" src="images/logos/kemdikbud.png">
```

---

## 📱 RESPONSIVE IMPROVEMENTS TODO

CSV Breakpoints yang ada:
- ✓ Desktop (1140px+)
- ⚠ Tablet (768px-1023px)
- ⚠ Mobile (320px-767px)

Sudah cukup di CSS tapi bisa ditingkatkan dengan:
```css
/* Mobile-first improvements */
@media (max-width: 768px) {
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }  /* 2 columns */
  .dash-grid { grid-template-columns: 1fr; }  /* Stack vertically */
  .navbar .nav-links { flex-wrap: wrap; }
}

@media (max-width: 480px) {
  .kpi-grid { grid-template-columns: 1fr; }  /* 1 column */
}
```

---

## ✅ CHECKLIST IMPLEMENTASI

- [x] HTML Structure
- [x] CSS Styling
- [x] JavaScript Functionality
- [x] NavBar & Navigation
- [x] Role Switcher
- [x] Form Handlers
- [x] Maps (Leaflet)
- [x] Charts (Chart.js)
- [ ] **Image Assets** ← ANDA DISINI
- [ ] Mobile Testing
- [ ] Performance Optimization
- [ ] Browser Testing

---

## 🚀 NEXT STEPS

1. **Siapkan gambar** sesuai spesifikasi di atas
2. **Buat folder** `images/` dengan subfolder
3. **Upload gambar** ke folder yang sesuai
4. **Update HTML** untuk reference gambar lokal (atau gunakan external URLs)
5. **Test** seluruh sistem

---

## 📞 TECHNICAL NOTES

- Hero rotation: Setiap image harus accessible dari path `heroImages/` atau external URL
- Map: Menggunakan Leaflet library (https://leafletjs.com) - sudah linked di HTML
- Charts: Menggunakan Chart.js - sudah linked di HTML
- No database required - semua data hardcoded untuk demo

**Status: 95% SELESAI - Tinggal asset gambar!** 🎉
