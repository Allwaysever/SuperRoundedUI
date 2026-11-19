# SuperRoundedUI (SRUI)
## Flat never felt this round.

SuperRoundedUI is a pure-CSS design system created by Allwaysever that combines warmth, friendliness, and efficiency—without a single line of JavaScript in its core. It is exclusively optimized for Dark Environment, delivering a visually immersive and comfortable experience.

---

### ✨ Features

- **Pure CSS** — No JavaScript dependencies
- **Dark-only theme** — Exclusively designed for dark environments
- **Super rounded corners** — Consistent border-radius from 12px to 25px
- **GlassLayer effects** — Soft transparency with backdrop blur
- **Micro-bounce interactions** — Scale-based press & hover effects
- **Iconography ready** — Self-hosted Material Symbols Rounded (WOFF2) + Font Awesome Brands
- **Accessibility first** — AAA contrast ratio compliance
- **Fully customizable** — Via CSS custom properties

---

### 🚀 Quick Start

#### CDN (Recommended)

```html
<!-- SRUI Bundle (Includes Outfit & Material Symbols Rounded) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.1.1/dist/srui.min.css"
/>

<!-- Brand Logos: Font Awesome Brands (optional) -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
/>
```

> ⚠️ **Production:** Selalu pin ke versi exact (`@3.1.1`). Jangan pakai `@latest` di produksi.

#### Basic Usage

```html
<div class="srui-glass" style="max-width: 400px; margin: 2rem auto; padding: var(--srui-space-6);">
  <h2 style="font-weight: var(--srui-font-weight-bold);">Welcome</h2>
  <p class="srui-text-secondary">This is a GlassLayer card with content.</p>

  <button class="srui-pressed srui-chip srui-chip--accent" style="margin-top: 1rem;">
    <span class="material-symbols-rounded srui-icon-md" aria-hidden="true">arrow_forward</span>
    Get Started
  </button>
</div>
```

---

### 📦 CDN Usage

SRUI di-distribute sebagai **single bundle** via jsDelivr.

| Environment | URL |
| --- | --- |
| **Production** (pinned) | `https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.1.1/dist/srui.min.css` |
| **Development** (latest) | `https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@latest/dist/srui.min.css` |
| **Debug** (unminified) | `https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@3.1.1/dist/srui.css` |

Font Outfit dan Material Symbols Rounded otomatis di-load dari bundle. Tidak perlu setup tambahan.

**Aturan versioning:**

- **Produksi:** selalu `@X.Y.Z` (exact tag)
- **Demo / dokumentasi:** boleh `@latest` atau `@X`
- **Jangan pakai `@main`** — nanti breaking tanpa peringatan

#### Local Development

```bash
git clone https://github.com/Allwaysever/SuperRoundedUI.git
cd SuperRoundedUI
npm install
npm run build
```

Hasil build ada di `dist/`. Load `dist/srui.css` (unminified) untuk debugging.

---

### 🎨 Core Design Principles

| Principle | Implementation |
| --- | --- |
| **Fluent in Form** | Clean layouts, logical navigation, smooth transitions |
| **Material in Soul** | Minimal shadows, usability-focused, responsive |
| **iOS in Flatness** | Content-first, clean typography, dark whitespace |
| **Super Rounded Touch** | Consistently rounded interactive elements |

---

### 🎯 Utility Classes

| Class | Purpose |
| --- | --- |
| `.srui-card` | Card surfaces with rounded corners & shadow |
| `.srui-glass` | GlassLayer with blur effect |
| `.srui-chip` | Pill-shaped chips |
| `.srui-chip--accent` | Accent-colored chip |
| `.srui-pressed` | Interactive elements with scale effect |
| `.srui-text-body` | Primary text styling |
| `.srui-text-secondary` | Secondary text |
| `.srui-text-tertiary` | Tertiary text |
| `.srui-icon-sm` / `-md` / `-lg` | Icon sizing utilities |
| `.srui-icon-touch` | 44×44px minimum touch target |
| `.sr-only` | Screen-reader-only content |
| `.material-symbols-rounded` | Icon rendering (ligatures) |

---

### 🎯 Iconography

- **UI Icons:** Material Symbols Rounded (Self-hosted via SRUI CDN)
- **Brand Logos:** Font Awesome Brands ONLY (`brands.min.css`)
- **Sizes:** 16px (inline), 20px (buttons), 24px (decorative)
- **Touch target:** Minimum 44×44px
- **Decorative icons:** add `aria-hidden="true"`
- **Standalone icons:** add `.sr-only` label

---

### 🎨 Theming & Customization

#### Change Accent Color

```css
:root {
  --srui-accent: #ff5722;
  --srui-accent-text: #000000;
}
```

#### Change Primary Font

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');

:root {
  --srui-font-primary: 'Nunito', 'Arial', sans-serif;
}
```

Pastikan bobot 400, 500, 700 tersedia dan `font-display: swap` digunakan.

---

### 📦 Design Tokens

#### Colors

| Variable | Value | Role |
| --- | --- | --- |
| `--srui-accent` | `#ffce00` | CTA, highlights |
| `--srui-background` | `#1B1C1E` | Main canvas |
| `--srui-card` | `#0f0f0f` | Cards, chat bubbles |
| `--srui-text` | `#ffffff` | Primary text |
| `--srui-text-secondary` | `#999999` | Secondary text |
| `--srui-border` | `#4B4F50` | Inputs, dividers |

#### Radius

| Variable | Value |
| --- | --- |
| `--srui-radius-sm` | `12px` |
| `--srui-radius-md` | `15px` |
| `--srui-radius-lg` | `25px` |
| `--srui-radius-pill` | `9999px` |

#### Spacing (4px scale)

`--srui-space-1` (4px) through `--srui-space-12` (48px)

---

### ⚠️ Prohibited Changes

- ❌ Light theme or light color variables
- ❌ Full Font Awesome library (use `brands.min.css` only)
- ❌ Changing `--srui-background`, `--srui-text`, or `--srui-card` to light colors
- ❌ Removing shadow or using radius less than `--srui-radius-sm` on interactive elements
- ❌ Moving shadow on press effects

---

### 📄 License

Licensed under the **Business Source License 1.1** (BSL 1.1).

- **Additional Use Grant:** Production & commercial use permitted, provided you do not offer the Licensed Work (or a derivative) as a hosted or embedded design system / UI kit / component library to third parties.
- **Change Date:** Ten years from the date the Licensed Work is published.
- **Change License:** Apache 2.0.

See [LICENSE](LICENSE) for full terms.

---

### 🤝 Contributing

Contributions of additional pure-CSS components are welcome, as long as they don't conflict with core principles (dark, rounded, flat shadow).

See [GUIDELINES.md](GUIDELINES.md) for full design principles and rules.

---

### 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed updates.

---

*Flat never felt this round.* | **Allwaysever Projects**