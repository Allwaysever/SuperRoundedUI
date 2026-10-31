# SuperRoundedUI (SRUI) — Design System Specification

**Version:** 3.0 — Iconography Update  
**Owner:** Allwaysever Creative Team  
**© 2025–2026 Allwaysever Project: SRUI**  
**Tagline:** *Flat never felt this round.*

---

## 1. Identity

SuperRoundedUI (SRUI) is a **pure-CSS design system** that combines warmth, friendliness, and efficiency — with **no JavaScript in its core**. It is **exclusively optimized for dark environments**, delivering an immersive, comfortable visual experience.

SRUI is not a light/dark theme pair. It is a single, uncompromising dark language built on rounded forms, flat shadows, and clear typography.

| Attribute | Value |
| --- | --- |
| Core technology | Pure CSS (no JS dependency) |
| Theme | Dark-only |
| Signature | Super rounded corners (12px–25px) |
| Surface treatment | GlassLayer blur + soft transparency |
| Interaction | Micro-bounce scale press/hover |
| Icons | Material Symbols Rounded (UI) + Font Awesome Brands (logos only) |
| Accessibility | AAA contrast target, 44×44px touch targets |
| Customization | CSS custom properties (limited, dark-safe) |

---

## 2. Design Philosophy — The SuperRounded Way

Rounded corners are only the surface. SRUI humanizes digital interfaces through four pillars:

| Pillar | Meaning | Key Implementation |
| --- | --- | --- |
| **Fluent in Form** | Inspired by Fluent UI: logical navigation, smooth and efficient flows. | Clean layouts, clear layering, smooth transitions. |
| **Material in Soul** | Respects hierarchy, usability, and responsiveness like Material Design. | Minimal shadows without excessive physical depth. |
| **iOS in Flatness** | Minimalist, content-first, clear typography, dark whitespace. | Removal of unnecessary ornamentation. |
| **Super Rounded Touch** | The core SRUI principle: every interactive element has a bold, consistent rounded corner. | `border-radius: 15px`–`25px`. |

**What SRUI is:** warm, friendly, efficient, rounded, flat, dark, accessible.  
**What SRUI is not:** light-themed, skeuomorphic, JavaScript-dependent, sharp-cornered, shadow-heavy.

---

## 3. Core Design Principles

| Principle | Implementation |
| --- | --- |
| **Fluent in Form** | Clean layouts, logical navigation, smooth transitions |
| **Material in Soul** | Minimal shadows, usability-focused, responsive |
| **iOS in Flatness** | Content-first, clean typography, dark whitespace |
| **Super Rounded Touch** | Consistently rounded interactive elements |

---

## 4. Design Tokens

All values are exposed as CSS custom properties on `:root`. Use tokens instead of hardcoded values.

### 4.1 Color

#### Primary colors

| Token | Value | Role |
| --- | --- | --- |
| `--srui-accent` | `#ffce00` | CTA, highlights, progress |
| `--srui-background` | `#1B1C1E` | Main application canvas |
| `--srui-card` | `#0f0f0f` | Cards, chat bubbles |
| `--srui-text` | `#ffffff` | Primary text |
| `--srui-accent-text` | `#000000` | Text on accent surfaces |

#### Neutral colors

| Token | Value | Role |
| --- | --- | --- |
| `--srui-border` | `#4B4F50` | Input borders, dividers |
| `--srui-text-secondary` | `#999999` | Placeholders, descriptions |
| `--srui-text-tertiary` | `#666666` | Passive icons, notes |

#### Semantic colors

| Token | Value | Role |
| --- | --- | --- |
| `--srui-success` | `#4CAF50` | Success |
| `--srui-warning` | `#ffce00` | Warning (same as accent) |
| `--srui-error` | `#F44336` | Error |
| `--srui-info` | `#2196F3` | Informational |

**Color rules:**

- No light-theme variables exist. Do not introduce them.
- `--srui-background`, `--srui-text`, and `--srui-card` must not be changed to light colors.
- All text on dark surfaces must meet **AAA (7:1)** contrast.
- `--srui-text-secondary` (`#999999`) is only for non-essential elements at large sizes.

### 4.2 Typography

| Token | Value |
| --- | --- |
| `--srui-font-primary` | `'Outfit', 'Arial', sans-serif` |
| `--srui-font-mono` | `'Courier New', monospace` |
| `--srui-font-weight-regular` | `400` |
| `--srui-font-weight-medium` | `500` |
| `--srui-font-weight-bold` | `700` |

**Outfit** is the primary typeface: geometric, clean, modern, and friendly. Weights **400 / 500 / 700** must be available. Fonts load automatically from the SRUI CDN with `font-display: swap`; do not hardcode font URLs in source.

| Usage | Size |
| --- | --- |
| Body text | `1rem` |
| Secondary text | `0.875rem` |
| Tertiary text | `0.75rem` |
| Chip label | `0.875rem` |

Base root size is 16px. Use `rem` for scalable typography.

### 4.3 Radius

| Token | Value | Use |
| --- | --- | --- |
| `--srui-radius-sm` | `12px` | Minimum radius for interactive elements |
| `--srui-radius-md` | `15px` | Standard radius (cards, default) |
| `--srui-radius-lg` | `25px` | Large surfaces, GlassLayer |
| `--srui-radius-pill` | `9999px` | Chips, pills, fully rounded controls |

Interactive elements must never use a radius smaller than `--srui-radius-sm`.

### 4.4 Spacing (4px scale)

| Token | Value |
| --- | --- |
| `--srui-space-1` | `0.25rem` (4px) |
| `--srui-space-2` | `0.5rem` (8px) |
| `--srui-space-3` | `0.75rem` (12px) |
| `--srui-space-4` | `1rem` (16px) |
| `--srui-space-6` | `1.5rem` (24px) |
| `--srui-space-8` | `2rem` (32px) |
| `--srui-space-12` | `3rem` (48px) |

Use flexible units (`rem`, `%`, `vh`, `vw`) for layout.

### 4.5 Elevation / Shadow

| Token | Value | Use |
| --- | --- | --- |
| `--srui-shadow-card` | `0 2px 8px rgba(0,0,0,0.4)` | Cards, resting surfaces |
| `--srui-shadow-raised` | `0 4px 12px rgba(0,0,0,0.5)` | GlassLayer, raised surfaces |

Shadows are **minimal and flat**. Shadows must remain **static during press effects** — do not move the shadow on `:active`.

### 4.6 Motion

| Token | Value |
| --- | --- |
| `--srui-duration-fast` | `0.1s` |
| `--srui-duration-normal` | `0.3s` |
| `--srui-easing-press` | `ease-out` |
| `--srui-easing-smooth` | `ease-in-out` |

### 4.7 Layering (z-index)

| Token | Value |
| --- | --- |
| `--srui-z-dropdown` | `100` |
| `--srui-z-sticky` | `200` |
| `--srui-z-modal` | `300` |
| `--srui-z-toast` | `400` |

### 4.8 Interaction Scale

| Token | Value |
| --- | --- |
| `--srui-hover-scale` | `0.96` |
| `--srui-active-scale` | `0.92` |

---

## 5. Components & Utility Classes

All utilities are pure CSS. They encode the design principles so teams can build without writing extra CSS.

### 5.1 Card — `.srui-card`

```css
.srui-card {
  background-color: var(--srui-card);
  border-radius: var(--srui-radius-md);
  padding: var(--srui-space-4);
  box-shadow: var(--srui-shadow-card);
}
```

Use for content surfaces, panels, and grouped information.

### 5.2 GlassLayer — `.srui-glass`

```css
.srui-glass {
  background-color: rgba(27, 28, 30, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: var(--srui-radius-lg);
  box-shadow: var(--srui-shadow-raised);
}
```

Use for floating panels, overlays, and hero cards where soft transparency is desired.

### 5.3 Chip — `.srui-chip` / `.srui-chip--accent`

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

Chips are pill-shaped and may act as buttons or links. Pair with `.srui-pressed` for interaction.

### 5.4 Text Utilities

| Class | Spec |
| --- | --- |
| `.srui-text-body` | `color: var(--srui-text); font-size: 1rem` |
| `.srui-text-secondary` | `color: var(--srui-text-secondary); font-size: 0.875rem` |
| `.srui-text-tertiary` | `color: var(--srui-text-tertiary); font-size: 0.75rem` |

### 5.5 Icon Utilities

```css
.srui-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.srui-icon-sm { font-size: 16px; }  /* inline */
.srui-icon-md { font-size: 20px; }  /* inside buttons */
.srui-icon-lg { font-size: 24px; }  /* large decorative */

.srui-icon-touch {
  padding: 10px; /* 10px + 24px icon = 44px touch target */
}
```

### 5.6 Accessibility Helper — `.sr-only`

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

Use for screen-reader-only labels on standalone icons and controls.

---

## 6. Interaction & Motion

### 6.1 Micro-Bounce Press (2D)

SRUI uses **shrink** on hover/press instead of grow. The shadow remains static to preserve the flat feel.

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

Apply `.srui-pressed` to buttons, interactive cards, and important links.

### 6.2 Disabled & Loading States

```css
.srui-pressed:disabled,
.srui-pressed[aria-disabled="true"] {
  opacity: 0.5;
  pointer-events: none;
  transform: none;
}
```

Loading indicators should use a separate pure-CSS class that rotates an icon.

### 6.3 Focus Visible

```css
:focus-visible {
  outline: 2px solid var(--srui-accent);
  outline-offset: 2px;
  transition: outline-offset 0.1s ease-out;
}
```

### 6.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Iconography

SRUI officially adopts **Material Symbols Rounded** as its system icon set, with Rounded variant axes (opsz, wght, FILL, GRAD) to match the rounded aesthetic. **Font Awesome Brands only** is permitted for brand logos.

| Icon Type | Source | Rules |
| --- | --- | --- |
| UI icons | Material Symbols Rounded | Required for system icons |
| Brand logos | Font Awesome Brands (`brands.min.css`) | Logos only; do not load the full Font Awesome library |
| Inline icons | Either | 16px |
| Icons in buttons | Either | 20px |
| Large decorative icons | Either | 24px |
| Touch targets | — | Minimum 44×44px; ensure sufficient padding |

**Accessibility rules:**

- Decorative icons: add `aria-hidden="true"`.
- Standalone icons: provide an accessible label via `.sr-only` or `aria-label`.
- Icons inherit the color of their parent text.

**Approved CDN URLs:**

```html
<!-- UI icons: Material Symbols Rounded (required) -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

<!-- Brand logos: Font Awesome Brands ONLY -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css" />
```

**Examples:**

```html
<!-- UI icon inside a button -->
<button class="srui-pressed srui-chip srui-chip--accent">
  <span class="material-symbols-rounded srui-icon-md" aria-hidden="true">arrow_forward</span>
  Continue
</button>

<!-- Brand logo link -->
<a href="#" aria-label="Visit our GitHub">
  <i class="fab fa-github srui-icon-lg" aria-hidden="true"></i>
</a>
```

---

## 8. Accessibility

SRUI targets **AAA contrast** and treats accessibility as a first-class design requirement.

| Requirement | Rule |
| --- | --- |
| Contrast | Minimum **7:1** for all text on dark backgrounds |
| Secondary text | `#999999` only for non-essential content at large sizes |
| Focus | Visible `:focus-visible` outline using `--srui-accent`, 2px, 2px offset |
| Touch targets | Minimum 44×44px for interactive elements |
| Decorative icons | `aria-hidden="true"` |
| Standalone icons | Accessible label via `.sr-only` or `aria-label` |
| Motion | Respect `prefers-reduced-motion` |
| Tap highlight | Disabled via `-webkit-tap-highlight-color: transparent` |

---

## 9. Customization

Customization is permitted **only within the dark corridor**. The accent color and primary font may be changed; the dark environment must remain intact.

### 9.1 Change Accent Color

```css
:root {
  --srui-accent: #ff5722;
  --srui-accent-text: #000000;
}
```

Use HSL when selecting a new accent to preserve relative brightness and saturation. Keep `--srui-accent-text` black for contrast.

### 9.2 Change Primary Font

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');

:root {
  --srui-font-primary: 'Nunito', 'Arial', sans-serif;
}
```

The replacement font must provide weights **400, 500, 700** and use `font-display: swap`.

### 9.3 What May Be Extended

- Additional pure-CSS components that do not conflict with core principles.
- Custom utilities that remain dark, rounded, and flat-shadowed.
- Flexible units (`rem`, `%`, `vh`, `vw`).

---

## 10. Guardrails — Prohibited Changes

The following are **not allowed** and will break SRUI’s design integrity:

- ❌ Light theme or light color variables.
- ❌ Full Font Awesome library (use `brands.min.css` only).
- ❌ Changing `--srui-background`, `--srui-text`, or `--srui-card` to light colors.
- ❌ Removing shadows or using a radius smaller than `--srui-radius-sm` on interactive elements.
- ❌ Moving the shadow during press effects.
- ❌ Using a host other than the provided CDN (for example, you must use the SRUI CDN even if the same font exists on Google Fonts API).
- ❌ Inline styles where a CSS class/token is available.
- ❌ JavaScript-dependent core components.

**Encouraged:**

- ✅ Always use the provided CSS variables.
- ✅ Use flexible units.
- ✅ Add your own utilities as long as they respect the dark, rounded, flat-shadow principles.
- ✅ Contribute additional pure-CSS components.

---

## 11. Design Review Checklist

Use this checklist before shipping any SRUI-based interface:

- [ ] Background is `--srui-background` (`#1B1C1E`); no light theme introduced.
- [ ] Text contrast is AAA (≥ 7:1) on dark surfaces.
- [ ] All interactive elements use radius ≥ `--srui-radius-sm` (12px).
- [ ] Shadows are present, minimal, and **do not move** on press.
- [ ] Interactive elements use `.srui-pressed` with `0.96` hover / `0.92` active scale.
- [ ] Touch targets are at least 44×44px.
- [ ] Focus states are visible with the accent outline.
- [ ] UI icons use Material Symbols Rounded; brand logos use FA Brands only.
- [ ] Decorative icons have `aria-hidden="true"`; standalone icons have accessible labels.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Spacing uses the 4px scale tokens.
- [ ] Typography uses Outfit (or an approved replacement with 400/500/700 + `swap`).
- [ ] Disabled states use 0.5 opacity, no pointer events, no transform.
- [ ] No inline styles where tokens/classes exist.

---

## 12. Distribution & Versioning

SRUI is distributed as a **single CSS bundle** via jsDelivr from GitHub tags.

| Context | URL Format |
| --- | --- |
| Production | `@X.Y.Z` (exact tag) |
| Demo / documentation | `@latest` or `@X` |
| Commit preview | `@<commit-hash>` |
| Local development | Local file |

**Versioning rules:**

- **Production:** always pin to an exact `@X.Y.Z` tag.
- **Demo / docs:** `@latest` or `@X` is acceptable.
- **Never use `@main`** — it can break without warning.

**Development flow:** `local file → raw.githack → jsDelivr @commit → jsDelivr @tag`

**Release flow:**

1. Bump `version` in `package.json` (semver).
2. Update `CHANGELOG.md`.
3. Run `npm run build`.
4. Commit `src/`, `dist/`, `CHANGELOG.md`, and `package.json`.
5. Tag `vX.Y.Z`.
6. Push the tag.
7. Verify the jsDelivr URL: `https://cdn.jsdelivr.net/gh/Allwaysever/SuperRoundedUI@X.Y.Z/dist/srui.min.css`.

**Repository structure:**

```
SuperRoundedUI/
├── fonts/              → Outfit TTF (via jsDelivr)
├── src/                → Modular source (maintenance)
│   ├── srui-base.css
│   ├── srui-variables.css
│   └── srui-utilities.css
├── dist/               → Bundle output (committed for CDN)
│   ├── srui.css        → Unminified
│   └── srui.min.css    → Minified
├── LICENSE             → BSL 1.1
├── README.md
├── GUIDELINES.md
├── CHANGELOG.md
├── package.json
└── build.js            → Bundle generator
```

---

## 13. License & Branding

**License:** Business Source License 1.1 (BSL 1.1).

- **Additional Use Grant:** Production and commercial use are permitted, provided you do not offer the Licensed Work (or a derivative) as a hosted or embedded design system / UI kit / component library to third parties.
- **Change Date:** Ten years from the date the Licensed Work is published.
- **Change License:** Apache 2.0.

See [LICENSE](LICENSE) for full terms.

**Brand identity:**

- **Colorin’full** — bright `#ffce00` accent against darkness.
- **The Mono** — clean, minimalist layouts with an unwavering dark palette.

---

*Flat never felt this round.* | **Allwaysever Projects**