# SuperRoundedUI (SRUI) Design Guidelines

**Versi 2.1 – Dark-Only Precision Edition**  
**Oleh:** Tim Kreatif Allwaysever  
**© 2025-2026 Allwaysever Project: SRUI**

## 1. Pendahuluan: Memperkenalkan SuperRoundedUI

Selamat datang di panduan resmi **SuperRoundedUI (SRUI)**, sistem bahasa desain web *pure-CSS* dari Allwaysever. SRUI adalah evolusi desain yang menggabungkan kehangatan, keramahan, dan efisiensi—tanpa satu baris JavaScript pun dalam intinya.

Kami menciptakan SRUI untuk memberikan pengalaman antarmuka yang terasa **akrab, menyenangkan, dan intuitif**, mematahkan kekakuan desain datar tradisional. SRUI dirancang secara eksklusif untuk memberikan pengalaman visual yang mendalam dan nyaman di mata melalui **lingkungan tema gelap (Dark Environment)** yang konsisten. Tidak ada tema terang, tidak ada kompromi.

**Tagline Resmi:**  
> *"Flat never felt this round."*

## 2. Filosofi Desain: The SuperRounded Way

Hanya sudut membulat? Tidak. Ini tentang humanisasi desain digital. Empat pilar utama:

| Pilar Filosofi | Penjelasan | Implementasi Kunci |
|---------------|------------|-------------------|
| **Fluent in Form** | Inspirasi dari Fluent UI (Microsoft) – navigasi logis, mulus, efisien. | Tata letak bersih, layering jelas, transisi halus. |
| **Material in Soul** | Menghargai hierarki, fokus pada usability, responsivitas ala Material Design. | Bayangan minimalis tanpa kedalaman fisik berlebihan. |
| **iOS in Flatness** | Minimalis, fokus konten, tipografi jelas, *whitespace* gelap. | Penghapusan ornamen tidak perlu. |
| **Super Rounded Touch** | Prinsip inti SRUI: setiap elemen interaktif memiliki sudut membulat mencolok & konsisten. | `border-radius: 15px` hingga `25px`. |

## 3. Fondasi CSS: Variabel & Reset

SRUI hadir sebagai satu file CSS utama atau beberapa file terpisah (reset, variabel, utilitas) yang tidak bergantung pada framework apa pun. Semua gaya wajib berada di file `.css`, bukan *inline style*.

### 3.1. Reset & Base Gelap

Setiap proyek SRUI harus memulai dengan *reset* minimal yang membangun lingkungan gelap. Kami merekomendasikan **`srui-base.css`** terpisah:

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

## 4. Tipografi: Outfit + Fallback

Font utama **Outfit** memberikan karakter geometris yang bersih, modern, dan ramah. File font di-host mandiri via JSDelivr.

```css
@font-face {
  font-family: 'Outfit';
  src: url('https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI/fonts/outfit-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Outfit';
  src: url('https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI/fonts/outfit-Medium.ttf') format('truetype');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Outfit';
  src: url('https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI/fonts/outfit-Bold.ttf') format('truetype');
  font-weight: 700;
  font-display: swap;
}
```

**Kontras wajib:** Semua teks di atas latar gelap harus mencapai minimal rasio **AAA** (7:1). Gunakan `--srui-text` (#ffffff) untuk badan dan `--srui-text-secondary` (#999999) hanya untuk elemen non-esensial dengan ukuran besar.

## 5. Palet Warna Eksklusif Gelap

Tidak ada variabel terang. Semua warna dioptimalkan untuk latar `#1B1C1E`.

| Nama | Kode Hex | Peran |
|------|----------|-------|
| **SRUI Accent** | `#ffce00` | CTA, sorotan, progres |
| **SRUI Background** | `#1B1C1E` | Kanvas utama aplikasi |
| **SRUI Card** | `#0f0f0f` | Kartu, bubble chat |
| **SRUI Text** | `#ffffff` | Teks utama |
| **Accent Text** | `#000000` | Teks di atas aksen |
| **Border** | `#4B4F50` | Garis input, pemisah |
| **Text Sekunder** | `#999999` | Placeholder, deskripsi |
| **Text Tersier** | `#666666` | Ikon pasif, catatan |

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
  padding: var(--srui-space-1) var(--srui-space-3);
  border-radius: var(--srui-radius-pill);
  background-color: var(--srui-card);
  color: var(--srui-text-secondary);
  font-weight: var(--srui-font-weight-medium);
  font-size: 0.875rem;
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

## 8. Ikonografi: Font Awesome 6.0.0-BETA3 (Solid/Regular)

Wajib menggunakan Font Awesome. Ikon akan mewarisi warna teks induk.

**Panduan ukuran & sentuhan:**
- Ikon inline: `16px`
- Di dalam tombol: `20px`
- Dekoratif besar: `24px`
- Target sentuh minimal: `44x44px` (pastikan padding memadai)

Ikon dekoratif harus diberi `aria-hidden="true"`. Ikon yang berdiri sendiri harus memiliki teks bantuan yang dapat diakses (`.sr-only`).

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

## 10. Larangan & Perizinan Tegas

**Larangan:**
- Tema terang atau variabel warna terang.
- *Inline style* di HTML.
- Library ikon selain Font Awesome 6.0.0-BETA3.
- Mengubah nilai dasar `--srui-background`, `--srui-text`, `--srui-card` menjadi warna terang.
- Mengganti shadow atau radius menjadi kurang dari `var(--srui-radius-sm)` pada elemen interaktif.
- Mengubah posisi shadow saat efek *pressed*.

**Perizinan / Anjuran:**
- Selalu gunakan variabel CSS yang telah disediakan.
- Gunakan unit fleksibel (`rem`, `%`, `vh`, `vw`).
- Tambahkan utilitas sendiri asal tidak bertentangan dengan prinsip dasar (gelap, rounded, flat shadow).
- Kontribusi komponen *pure-CSS* tambahan sangat diterima.

## 11. Contoh Halaman Penuh dengan Murni SRUI

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <link rel="stylesheet" href="srui-base.css">
  <link rel="stylesheet" href="srui-variables.css">
  <link rel="stylesheet" href="srui-utilities.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/...fontawesome.css">
</head>
<body class="srui-text-body">

  <div class="srui-glass" style="max-width: 400px; margin: 2rem auto; padding: var(--srui-space-6);">
    <h2 style="font-weight: var(--srui-font-weight-bold); margin-bottom: var(--srui-space-2);">
      Selamat Datang
    </h2>
    <p class="srui-text-secondary">Ini adalah kartu GlassLayer dengan konten.</p>
    <button class="srui-pressed srui-chip srui-chip--accent" style="margin-top: 1rem;">
      Mulai <i class="fa-solid fa-arrow-right" style="margin-left: 0.5rem;"></i>
    </button>
  </div>

</body>
</html>
```

## 12. Lisensi & Identitas

- **Lisensi:** *Allwaysever Custom License Exclusive Projects Edition (ACLEPs Edition)* – hanya untuk proyek yang menghormati pakta eksklusivitas gelap.
- **Branding kunci:**
  - *Colorin'full* – aksen cerah `#ffce00` di atas kegelapan.
  - *The Mono* – tata letak bersih, minimalis, palet gelap tak tergoyahkan.

**Dokumen ini dapat diperbarui sewaktu-waktu.**  
*Flat never felt this round.* | **Allwaysever Projects**