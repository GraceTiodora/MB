# 🍱 MBGTrack — Portal Data Program Makan Bergizi Nasional

Sistem pemantauan dan pelaporan terintegrasi untuk program distribusi makan bergizi gratis (MBG) di seluruh Indonesia dengan dashboard analitik real-time, peta interaktif, dan sistem pelaporan publik.

---

## 📋 JUDUL KARYA

**MBGTrack: Sistem Pemantauan Distribusi Program Makan Bergizi Nasional**

---

## 🏢 INSTITUSI

**Institut Teknologi Del**  
Jalan Sisingamangaraja, Laguboti, Tobasa, Sumatera Utara, Indonesia

---

## 👥 TIM PENGEMBANG

### Ketua Tim
- **Grace Tiodora** — Project Lead & Frontend Development

### Anggota Tim
1. **Boas Rayhan** — Backend Infrastructure & Database
2. **Gabriel Siregar** — UI/UX Design & Full-Stack Integration

---

## 📝 DESKRIPSI KARYA

### Latar Belakang
Program Makan Bergizi Gratis (MBG) merupakan inisiatif pemerintah Indonesia untuk meningkatkan nutrisi dan kesejahteraan pelajar di seluruh nusantara. Namun, koordinasi distribusi ke ribuan sekolah di berbagai wilayah memerlukan sistem pemantauan yang efisien, transparan, dan real-time.

### Solusi
**MBGTrack** adalah platform digital terintegrasi yang menyediakan:

1. **Dashboard Pemantauan Real-Time**
   - Visualisasi KPI operasional (total penerima, distribusi hari ini, status kritis, data terverifikasi)
   - Grafik tren distribusi mingguan dengan ApexCharts
   - Alert system untuk anomali distribusi
   - Quick access navigation ke fitur utama

2. **Peta Interaktif Distribusi Regional**
   - Interactive map berbasis Leaflet.js menampilkan 7 provinsi utama
   - Status distribusi color-coded per wilayah
   - Detail real-time pengiriman per sekolah
   - Progress tracking dengan persentase ketapaian
   - Search & filter functionality

3. **Sistem Tracking Pengiriman**
   - Timeline real-time untuk setiap shipment
   - Status tracking dengan visual indicators (pending, success, issue)
   - ID tracking untuk transparansi publik
   - Notifikasi untuk anomali/keterlambatan

4. **Portal Pelaporan Publik**
   - Galeri laporan lapangan dengan foto dokumentasi
   - Multi-status filtering (verified, reviewed, submitted)
   - Comment system untuk feedback komunitas
   - Verification workflow untuk admin

5. **Dashboard Nutrition & Gizi**
   - Daily nutrient breakdown (kkal, protein, carbs, fat, fiber)
   - Weekly trend analysis dengan visualisasi
   - Target achievement tracking
   - Nutritional adequacy assessment

6. **Sistem Feedback & Pelaporan Sekolah**
   - Form pelaporan issue distribusi
   - Kategori issue (keterlambatan, kualitas menu, distributor error)
   - Geolocation tagging
   - Status tracking real-time
   - Urgent escalation untuk kasus kritis

7. **Admin Panel Manajemen**
   - Report moderation & verification
   - User management per role
   - Alert prioritization & escalation
   - Data validation & quality control
   - Analytics dashboard

---

## 🌐 LINK WEBSITE

**Production Deployment:**  
[Segera Hadir]  

**Development/Demo:**  
- Buka: `index.html` di browser
- Repository: https://github.com/GraceTiodora/html-mbg

---

## 🛠️ Tech Stack

| Komponen | Technology |
|----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript (No Framework) |
| Charting | ApexCharts 3.45.0 |
| Maps | Leaflet.js 1.9.4 + OpenStreetMap |
| Icons | Font Awesome 6.4.0 |
| Typography | Google Fonts (Manrope) |
| State Management | SessionStorage, Role-based Access Control |
| Responsive | Mobile-First, Media Queries (1200px, 1100px, 980px, 600px) |

---

## 📊 Fitur Utama

### Landing Page
- Hero section dengan background carousel
- KPI snapshot operasional real-time
- Distribusi per wilayah preview
- Kolaborasi lintas kementerian
- Status laporan terbaru dengan galeri

### Dashboard
- KPI cards dengan animasi
- Distribusi per provinsi (Top 10)
- Alert panel dengan status priority
- Chart tren distribusi mingguan
- Quick access navigation

### Peta Wilayah (Region)
- Interactive map Leaflet.js dengan 7 provinsi
- Markers dengan status color-coded
- Detail popup saat klik marker
- Search & filter region
- Progress tracking per sekolah

### Tracker Distribusi
- Status pengiriman real-time
- Timeline tracking untuk shipment
- Search by tracking ID
- Alert untuk masalah pengiriman

### Laporan Publik
- Galeri laporan lapangan (foto dokumentasi)
- Filter by status
- Comment system
- Real-time update

### Nutrition & Feedback
- Report kesehatan & gizi
- Form laporan masalah dengan kategori
- Tracking laporan status

### Admin Panel
- Report moderation & verification
- User management
- Data validation
- Alert management
- Analytics dashboard

---

## 📦 INSTALASI & SETUP

### Persyaratan
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor untuk development (VS Code, dll)
- Git untuk version control

### Langkah-langkah

1. **Clone Repository**
   ```bash
   git clone https://github.com/GraceTiodora/html-mbg.git
   cd html-mbg
   ```

2. **Buka di Browser**
   ```bash
   # Gunakan Live Server atau buka langsung
   open index.html
   # atau
   python -m http.server 8000
   ```

3. **Login Demo**
   ```
   Admin:
   - Username: admin
   - Password: admin123
   
   Sekolah:
   - Username: sekolah
   - Password: sekolah123
   
   Publik: Akses langsung ke landing page
   ```

---

## 📁 STRUKTUR PROJECT

```
html-mbg/
├── index.html              # Entry point
├── css/
│   └── styles.css          # Master stylesheet dengan design system
├── js/
│   ├── main.js            # App initialization & bootstrap
│   ├── navigation.js      # SPA router & page loader
│   ├── auth.js            # Authentication & role management
│   ├── charts.js          # ApexCharts configurations
│   ├── maps.js            # Leaflet.js map initialization
│   ├── forms.js           # Form handling & validation
│   ├── utils.js           # Utility functions & helpers
├── pages/
│   ├── login.html         # Login form
│   ├── landing.html       # Hero page dengan KPI snapshot
│   ├── dashboard.html     # Main monitoring dashboard
│   ├── region.html        # Interactive region map
│   ├── nutrition.html     # Nutrition tracking dashboard
│   ├── tracker.html       # Shipment tracking timeline
│   ├── feed.html          # Public reports gallery
│   ├── feedback.html      # Issue reporting form (Sekolah)
│   ├── tracking.html      # Report status tracking (Sekolah)
│   └── admin.html         # Admin management panel
├── data/
│   └── regions.js         # Indonesian provinces data
└── images/
    ├── heroImages/        # Landing page carousel images
    ├── logos/             # Branding assets
    └── reports/           # Report gallery images
```

---

## 🎯 ROADMAP

### Phase 1: ✅ Completed
- Frontend UI/UX complete
- SPA routing & authentication system
- Dashboard & visualization implemented
- Map integration finished

### Phase 2: 🔄 In Progress
- Integration dengan Backend API
- Database connectivity
- Real-time data synchronization

### Phase 3: 📋 Planned
- Mobile app development
- Advanced analytics & reporting
- ML-based anomaly detection

---

## 🎓 Teknologi & Framework

- **HTML5** — Semantic markup
- **CSS3** — Modern styling dengan responsive design
- **Vanilla JavaScript** — No framework dependencies
- **Leaflet.js** — Interactive mapping
- **ApexCharts** — Data visualization
- **SessionStorage** — Client-side state management

---

## 📞 CONTACT

**Project Lead:**  
Grace Tiodora  

**Repository:**  
https://github.com/GraceTiodora/html-mbg

**Issues & Support:**  
https://github.com/GraceTiodora/html-mbg/issues

---

## 📄 LISENSI

Project ini dikembangkan untuk keperluan akademis dan implementasi program publik.  
© 2024 MBGTrack Team | Institut Teknologi Del

---

**Last Updated:** March 2026  
**Status:** Beta - Ready for Production Integration