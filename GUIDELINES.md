# SuperRoundedUI (SRUI) Design Guidelines

**Versi 3.0 – Iconography Update**  
**Oleh:** Tim Kreatif Allwaysever  
**© 2025-2026 Allwaysever Project: SRUI**

---

## 1. Pendahuluan: Memperkenalkan SuperRoundedUI

Selamat datang di panduan resmi **SuperRoundedUI (SRUI)**, sistem bahasa desain web *pure-CSS* dari Allwaysever. SRUI adalah evolusi desain yang menggabungkan kehangatan, keramahan, dan efisiensi—tanpa satu baris JavaScript pun dalam intinya.

Kami menciptakan SRUI untuk memberikan pengalaman antarmuka yang terasa **akrab, menyenangkan, dan intuitif**, mematahkan kekakuan desain datar tradisional. SRUI dirancang secara eksklusif untuk memberikan pengalaman visual yang mendalam dan nyaman di mata melalui **lingkungan tema gelap (Dark Environment)** yang konsisten. Tidak ada tema terang, tidak ada kompromi.

**Tagline Resmi:**

*"**Flat never felt this round.**"*

---

## 2. Filosofi Desain: The SuperRounded Way

Hanya sudut membulat? Tidak. Ini tentang humanisasi desain digital. Empat pilar utama:

| **Pilar Filosofi** | **Penjelasan** | **Implementasi Kunci** |
| --- | --- | --- |
| **Fluent in Form** | Inspirasi dari Fluent UI (Microsoft) – navigasi logis, mulus, efisien. | Tata letak bersih, layering jelas, transisi halus. |
| **Material in Soul** | Menghargai hierarki, fokus pada usability, responsivitas ala Material Design. | Bayangan minimalis tanpa kedalaman fisik berlebihan. |
| **iOS in Flatness** | Minimalis, fokus konten, tipografi jelas, *whitespace* gelap. | Penghapusan ornamen tidak perlu. |
| **Super Rounded Touch** | Prinsip inti SRUI: setiap elemen interaktif memiliki sudut membulat mencolok & konsisten. | `border-radius: 15px` hingga `25px`. |

---

## 3. Fondasi CSS: Variabel & Reset

SRUI di-distribute sebagai satu bundle CSS (`dist/srui.css` / `dist/srui.min.css`) yang tidak bergantung pada framework apa pun. Source modular tetap tersedia di `src/` untuk maintenance. Semua gaya wajib berada di file `.css`, bukan *inline style*.

### 3.1. Reset & Base Gelap

Bundle SRUI sudah mencakup reset minimal yang membangun lingkungan gelap. Bagian ini ekuivalen dengan **`src/srui-base.css`**:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

* {
  -webkit-tap-highlight-color: transparent;
}

html {
  font-size: 100%; /* 16px dasar, gunakan rem */
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  background-color: var(--srui-background);
  color: var(--srui-text);
  font-family: var(--srui-font-primary);
  line-height: 1.5;
  min-height: 100vh;
}

img, svg {
  display: block;
  max-width: 100%;
}

:focus-visible {
  outline: 2px solid var(--srui-accent);
  outline-offset: 2px;
  transition: outline-offset 0.1s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3.2. Variabel CSS Lengkap (Design Tokens)

Semua nilai SRUI disimpan sebagai *custom properties* di `:root`. Ini memungkinkan konsistensi sekaligus kemudahan kustomisasi terbatas.

```css
:root {
  /* ===== WARNA UTAMA ===== */
  --srui-accent: #ffce00;
  --srui-background: #1B1C1E;
  --srui-card: #0f0f0f;
  --srui-text: #ffffff;
  --srui-accent-text: #000000;

  /* ===== WARNA NETRAL ===== */
  --srui-border: #4B4F50;
  --srui-text-secondary: #999999;
  --srui-text-tertiary: #666666;

  /* ===== WARNA SEMANTIK ===== */
  --srui-success: #4CAF50;
  --srui-warning: #ffce00;   /* sama dengan accent */
  --srui-error: #F44336;
  --srui-info: #2196F3;

  /* ===== TIPOGRAFI ===== */
  --srui-font-primary: 'Outfit', 'Arial', sans-serif;
  --srui-font-mono: 'Courier New', monospace;
  --srui-font-weight-regular: 400;
  --srui-font-weight-medium: 500;
  --srui-font-weight-bold: 700;

  /* ===== RADIUS ===== */
  --srui-radius-sm: 12px;
  --srui-radius-md: 15px;     /* radius standar */
  --srui-radius-lg: 25px;
  --srui-radius-pill: 9999px;

  /* ===== SPACING (skala 4px) ===== */
  --srui-space-1: 0.25rem;    /* 4px */
  --srui-space-2: 0.5rem;     /* 8px */
  --srui-space-3: 0.75rem;    /* 12px */
  --srui-space-4: 1rem;       /* 16px */
  --srui-space-6: 1.5rem;     /* 24px */
  --srui-space-8: 2rem;       /* 32px */
  --srui-space-12: 3rem;      /* 48px */

  /* ===== SHADOW ===== */
  --srui-shadow-card: 0 2px 8px rgba(0,0,0,0.4);
  --srui-shadow-raised: 0 4px 12px rgba(0,0,0,0.5);

  /* ===== MOTION ===== */
  --srui-duration-fast: 0.1s;
  --srui-duration-normal: 0.3s;
  --srui-easing-press: ease-out;
  --srui-easing-smooth: ease-in-out;

  /* ===== Z-INDEX LAYER ===== */
  --srui-z-dropdown: 100;
  --srui-z-sticky: 200;
  --srui-z-modal: 300;
  --srui-z-toast: 400;

  /* ===== INTERAKSI SCALE ===== */
  --srui-hover-scale: 0.96;
  --srui-active-scale: 0.92;
}
```

---

## 4. Tipografi: Outfit + Fallback

Font utama **Outfit** memberikan karakter geometris yang bersih, modern, dan ramah. File font di-host mandiri via jsDelivr, dan **otomatis di-load** oleh bundle SRUI.

`@font-face` di bawah ini **auto-generated** saat build. Placeholder `__CDN_BASE__` di `src/srui-base.css` akan diganti dengan URL CDN sesuai versi di `package.json`. Jangan hardcode manual di source.

```css
@font-face {
  font-family: 'Outfit';
  src: url('https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.0.0/fonts/Outfit-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Outfit';
  src: url('https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.0.0/fonts/Outfit-Medium.ttf') format('truetype');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Outfit';
  src: url('https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.0.0/fonts/Outfit-Bold.ttf') format('truetype');
  font-weight: 700;
  font-display: swap;
}
```

**Kontras wajib:** Semua teks di atas latar gelap harus mencapai minimal rasio **AAA** (7:1). Gunakan `--srui-text` (`#ffffff`) untuk badan dan `--srui-text-secondary` (`#999999`) hanya untuk elemen non-esensial dengan ukuran besar.

---

## 5. Palet Warna Eksklusif Gelap

Tidak ada variabel terang. Semua warna dioptimalkan untuk latar `#1B1C1E`.

| **Nama** | **Kode Hex** | **Peran** |
| --- | --- | --- |
| **SRUI Accent** | `#ffce00` | CTA, sorotan, progres |
| **SRUI Background** | `#1B1C1E` | Kanvas utama aplikasi |
| **SRUI Card** | `#0f0f0f` | Kartu, bubble chat |
| **SRUI Text** | `#ffffff` | Teks utama |
| **Accent Text** | `#000000` | Teks di atas aksen |
| **Border** | `#4B4F50` | Garis input, pemisah |
| **Text Sekunder** | `#999999` | Placeholder, deskripsi |
| **Text Tersier** | `#666666` | Ikon pasif, catatan |

---

## 6. Kelas Utilitas Dasar (Pure CSS)

SRUI menyediakan kelas siap pakai agar prinsip desain dapat langsung diterapkan tanpa menulis CSS tambahan. Semua adalah CSS murni, tanpa JavaScript.

### 6.1. Kartu & Permukaan

```css
.srui-card {
  background-color: var(--srui-card);
  border-radius: var(--srui-radius-md);
  padding: var(--srui-space-4);
  box-shadow: var(--srui-shadow-card);
}
```

### 6.2. GlassLayer (Transparansi Lembut)

```css
.srui-glass {
  background-color: rgba(27, 28, 30, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: var(--srui-radius-lg);
  box-shadow: var(--srui-shadow-raised);
}
```

### 6.3. Chip Pil

```css
.srui-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--srui-space-1);
  padding: var(--srui-space-1) var(--srui-space-3);
  border: none;
  border-radius: var(--srui-radius-pill);
  background-color: var(--srui-card);
  color: var(--srui-text-secondary);
  font-family: inherit;
  font-weight: var(--srui-font-weight-medium);
  font-size: 0.875rem;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
}

.srui-chip--accent {
  background-color: var(--srui-accent);
  color: var(--srui-accent-text);
}
```

### 6.4. Tipografi Instan

```css
.srui-text-body {
  color: var(--srui-text);
  font-size: 1rem;
}
.srui-text-secondary {
  color: var(--srui-text-secondary);
  font-size: 0.875rem;
}
.srui-text-tertiary {
  color: var(--srui-text-tertiary);
  font-size: 0.75rem;
}
```

### 6.5. Utility Class Ukuran Ikon

```css
/* ===== IKON (Material Symbols & FA Brands) ===== */
.srui-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

/* Ukuran standar SRUI */
.srui-icon-sm { font-size: 16px; }
.srui-icon-md { font-size: 20px; }   /* untuk tombol */
.srui-icon-lg { font-size: 24px; }   /* dekoratif besar */

/* Target sentuh minimal 44x44px (pastikan padding mencukupi) */
.srui-icon-touch {
  padding: 10px; /* 10px + 24px ikon = 44px */
}
```

### 6.6. Accessibility Helper

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 7. Aspek Interaksi & Gerakan

### 7.1. Pressed Hover (Micro-Bounce 2D)

Efek mengecil menggantikan efek membesar. Shadow **tetap statis** untuk menjaga nuansa datar.

```css
.srui-pressed {
  transition: transform var(--srui-duration-fast) var(--srui-easing-press);
  will-change: transform;
}
.srui-pressed:hover {
  transform: scale(var(--srui-hover-scale));
}
.srui-pressed:active {
  transform: scale(var(--srui-active-scale));
}
```

Gunakan kelas `.srui-pressed` pada tombol, kartu interaktif, atau tautan penting.

### 7.2. State Disabled & Loading

```css
.srui-pressed:disabled,
.srui-pressed[aria-disabled="true"] {
  opacity: 0.5;
  pointer-events: none;
  transform: none;
}
```

Untuk indikator loading gunakan kelas terpisah yang memutar ikon – tetap murni CSS.

---

## 8. Ikonografi: Material Symbols Rounded + Font Awesome Brands

SRUI secara resmi mengadopsi Material Symbols dari Google sebagai ikon sistem utama, dengan varian Rounded (opsz, wght, FILL, GRAD) untuk selaras dengan estetika sudut membulat. Ikon sistem wajib menggunakan Material Symbols.

Untuk logo merek (brand) seperti GitHub, Twitter/X, atau Instagram, gunakan Font Awesome Brands terpisah. Hindari memuat full Font Awesome. Ikon akan mewarisi warna teks induk.

**Panduan ukuran & sentuhan:**

- Ikon inline: 16px
- Di dalam tombol: 20px
- Dekoratif besar: 24px
- Target sentuh minimal: 44x44px (pastikan padding memadai)

Ikon dekoratif harus diberi `aria-hidden="true"`. Ikon yang berdiri sendiri harus memiliki teks bantuan yang dapat diakses (`.sr-only`).

**Kode URL CDN yang digunakan:**

```html
<!-- Ikon UI: Material Symbols Rounded (wajib) -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

<!-- Logo Brand: Font Awesome Brands ONLY (ringan, ~200KB) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css" />
```

**Contoh implementasi kode:**

```html
<!-- Ikon UI -->
<button class="srui-pressed srui-chip srui-chip--accent">
  <span class="material-symbols-rounded srui-icon-md" aria-hidden="true">arrow_forward</span>
  Lanjutkan
</button>

<!-- Logo Brand -->
<a href="#" aria-label="Kunjungi GitHub kami">
  <i class="fab fa-github srui-icon-lg" aria-hidden="true"></i>
</a>
```

---

## 9. Kustomisasi Terbatas (Tetap Dalam Koridor Gelap)

Anda boleh mengganti **accent color** dan **font primer** tanpa merusak harmoni.

### 9.1. Mengubah Accent Color

Gunakan ruang warna HSL untuk menjaga kecerahan dan saturasi relatif.

```css
:root {
  --srui-accent: #ff5722;              /* oranye misalnya */
  --srui-accent-text: #000000;        /* tetap hitam untuk kontras */
}
```

Jangan mengubah kecerahan `--srui-background` atau `--srui-card` agar lingkungan gelap tidak rusak.

### 9.2. Mengganti Font

Impor font baru dan timpa variabel:

```css
:root {
  --srui-font-primary: 'Nunito', 'Arial', sans-serif;
}
```

Pastikan bobot 400, 500, 700 tersedia dan `font-display: swap` digunakan.

---

## 10. Larangan & Perizinan Tegas

**Larangan:**

- Tema terang atau variabel warna terang.
- Memuat Font Awesome secara utuh (full library). Gunakan hanya CDN `brands.min.css`.
- Mengubah nilai dasar `--srui-background`, `--srui-text`, `--srui-card` menjadi warna terang.
- Mengganti shadow atau radius menjadi kurang dari `var(--srui-radius-sm)` pada elemen interaktif.
- Mengubah posisi shadow saat efek *pressed*.
- Menggunakan file host selain yang sudah disediakan. Contoh: harus menggunakan CDN sendiri walaupun ada di Google Fonts API.

**Perizinan / Anjuran:**

- Selalu gunakan variabel CSS yang telah disediakan.
- Gunakan unit fleksibel (`rem`, `%`, `vh`, `vw`).
- Tambahkan utilitas sendiri asal tidak bertentangan dengan prinsip dasar (gelap, rounded, flat shadow).
- Kontribusi komponen *pure-CSS* tambahan sangat diterima.

---

## 11. Contoh Halaman Penuh dengan Murni SRUI

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SRUI Demo</title>

  <!-- SRUI Bundle via CDN (production: pin versi exact) -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.0.0/dist/srui.min.css"
  />

  <!-- Ikon UI: Material Symbols Rounded -->
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    rel="stylesheet"
  />

  <!-- Logo Brand: Font Awesome Brands ONLY -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
  />
</head>
<body class="srui-text-body">
  <div class="srui-glass" style="max-width: 400px; margin: 2rem auto; padding: var(--srui-space-6);">
    <h2 style="font-weight: var(--srui-font-weight-bold); margin-bottom: var(--srui-space-2);">
      Selamat Datang
    </h2>
    <p class="srui-text-secondary">Ini adalah kartu GlassLayer dengan konten.</p>

    <!-- Tombol dengan ikon Material Symbols -->
    <button class="srui-pressed srui-chip srui-chip--accent" style="margin-top: 1rem;">
      <span class="material-symbols-rounded srui-icon-md" aria-hidden="true">arrow_forward</span>
      Mulai
    </button>

    <!-- Social media links dengan FA Brands -->
    <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
      <a href="#" aria-label="Kunjungi GitHub kami">
        <i class="fab fa-github srui-icon-lg" aria-hidden="true"></i>
      </a>
      <a href="#" aria-label="Ikuti Twitter">
        <i class="fab fa-twitter srui-icon-lg" aria-hidden="true"></i>
      </a>
      <a href="#" aria-label="Instagram">
        <i class="fab fa-instagram srui-icon-lg" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</body>
</html>
```

---

## 12. Distribusi & Rilis

SRUI di-distribute sebagai bundle CSS via **jsDelivr** dari GitHub tag.

### 12.1. Struktur Repositori

```
SuperRoundedUI/
├── fonts/              → Outfit TTF (via jsDelivr)
├── src/                → Source modular (maintenance)
│   ├── srui-base.css
│   ├── srui-variables.css
│   └── srui-utilities.css
├── dist/               → Bundle output (di-commit untuk CDN)
│   ├── srui.css        → Unminified
│   └── srui.min.css    → Minified
├── LICENSE             → BSL 1.1
├── README.md
├── GUIDELINES.md
├── CHANGELOG.md
├── package.json
└── build.js            → Bundle generator
```

### 12.2. Alur Rilis

1. Naikkan `version` di `package.json` (semver).
2. Update `CHANGELOG.md`.
3. Jalankan `npm run build`.
4. Commit `src/`, `dist/`, `CHANGELOG.md`, `package.json`.
5. Tag `vX.Y.Z`.
6. Push tag.
7. Verifikasi URL jsDelivr: `https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@X.Y.Z/dist/srui.min.css`.

### 12.3. Aturan URL CDN

| Konteks | Format |
| --- | --- |
| Produksi | `@X.Y.Z` (exact tag) |
| Demo / dokumentasi | `@latest` atau `@X` |
| Preview commit | `@<commit-hash>` |
| Local dev | File lokal |

**Jangan gunakan `@main`** di produksi.

### 12.4. Alur Development

```
local file → raw.githack → jsDelivr @commit → jsDelivr @tag
```

- **Development harian:** file lokal.
- **Preview:** raw.githack (fresh) atau jsDelivr `@<commit-hash>`.
- **Produksi:** jsDelivr `@vX.Y.Z`.

---

## 13. Lisensi & Identitas

- **Lisensi:** Business Source License 1.1 (lihat [LICENSE](LICENSE))
  - **Additional Use Grant:** production & komersial diizinkan, asal tidak menjual ulang sebagai design system / UI kit / component library.
  - **Change Date:** 10 tahun dari publish.
  - **Change License:** Apache 2.0.
- **Branding kunci:**
  - *Colorin'full* – aksen cerah `#ffce00` di atas kegelapan.
  - *The Mono* – tata letak bersih, minimalis, palet gelap tak tergoyahkan.

---

**Dokumen ini dapat diperbarui sewaktu-waktu.**  
*Flat never felt this round.* | **Allwaysever Projects**