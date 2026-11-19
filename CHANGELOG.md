# Changelog

All notable changes to **SuperRoundedUI (SRUI)** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

_Nothing yet._

---

## [3.1.0] - 2026-11-19

### Added
- **Self-hosted Material Symbols Rounded** — File `MaterialSymbolsRounded.woff2` ditambahkan ke folder `fonts/`.
- **Icon Utility Class** — Menambahkan kelas `.material-symbols-rounded` di `srui-utilities.css` untuk mendukung ligatur ikon via variable font.
- **`@font-face` Rule** — Menambahkan deklarasi font untuk Material Symbols di `srui-base.css` yang mengarah ke CDN sendiri.

### Changed
- **Bundle Distribution** — Bundle `srui.min.css` kini sepenuhnya mandiri (tidak lagi memerlukan link eksternal dari Google Fonts untuk ikon).
- **Dokumentasi** — Memperbarui `README.md` dan `GUIDELINES.md` untuk menghapus referensi Google Fonts dan mengarahkan pengguna ke bundle SRUI.

---

## [3.0.0] - 2026-09-19

Rilis pertama di bawah **Business Source License 1.1**. Sekaligus migrasi dari distribusi file modular ke bundle CDN.

### Added

- **Single bundle distribution** — `dist/srui.css` dan `dist/srui.min.css` via jsDelivr.
- **Iconography utility classes** — `.srui-icon`, `.srui-icon-sm`, `.srui-icon-md`, `.srui-icon-lg`, `.srui-icon-touch`.
- **Accessibility helper** — `.sr-only` untuk screen-reader-only content.
- **Design tokens** — seluruh warna, radius, spacing, shadow, motion, dan z-index sebagai CSS custom properties.
- **GlassLayer** — `.srui-glass` dengan `backdrop-filter` blur.
- **Micro-bounce interaction** — `.srui-pressed` dengan hover/active scale.
- **Outfit font** — self-hosted via jsDelivr, tiga bobot (400, 500, 700).
- **License header** — otomatis di-inject ke bundle saat build.
- **CDN versioning** — placeholder `__VERSION__` dan `__CDN_BASE__` untuk pin versi di bundle.

### Changed

- **Lisensi:** dari *Allwaysever Custom License Exclusive Projects Edition (ACLEPs Edition)* menjadi *Business Source License 1.1* (BSL 1.1).
- **Change License:** Apache 2.0 (efektif 10 tahun setelah publish).
- **Distribusi:** dari tiga file modular terpisah menjadi single bundle, dengan source modular tetap di `src/` untuk maintenance.
- **Guidelines:** section ikonografi, distribusi, dan lisensi diperbarui.

### Removed

- Referensi ACLEPs di seluruh dokumen.
- Full-library Font Awesome (hanya `brands.min.css`).

---

[Unreleased]: https://github.com/Allwaysever/SuperRoundedUI/compare/v3.1.0...HEAD
[3.1.0]: https://github.com/Allwaysever/SuperRoundedUI/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/Allwaysever/SuperRoundedUI/releases/tag/v3.0.0