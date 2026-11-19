#!/usr/bin/env node
/**
 * build.js — SuperRoundedUI bundle builder
 *
 * Gabungin src/*.css jadi dist/srui.css dan dist/srui.min.css.
 * Ganti placeholder __VERSION__ dan __CDN_BASE__.
 *
 * Minifier dicari berurutan: lightningcss → csso → clean-css → fallback regex.
 * (lightningcss tidak jalan di Android ARM, jadi wajib ada fallback.)
 */

const fs = require('fs');
const path = require('path');

// ===== Konfigurasi =====
const ROOT = __dirname;
const SRC_DIR = path.join(ROOT, 'src');
const DIST_DIR = path.join(ROOT, 'dist');
const FONTS_DIR = path.join(ROOT, 'fonts');

const SRC_FILES = [
  'srui-base.css',
  'srui-variables.css',
  'srui-utilities.css',
];

const PKG = require(path.join(ROOT, 'package.json'));
const VERSION = PKG.version;
const REPO = 'Allwaysever/SuperRoundedUI';
const CDN_BASE = `https://cdn.jsdelivr.net/gh/${REPO}@${VERSION}`;

const HEADER = `/*!
 * SuperRoundedUI (SRUI) v${VERSION}
 * (c) 2025-2026 Allwaysever Projects
 * Licensed under Business Source License 1.1
 * https://github.com/${REPO}/blob/main/LICENSE
 * Change License: Apache 2.0 (effective 10 years from publish)
 */
`;

// ===== Pilih minifier yang tersedia =====
function pickMinifier() {
  // 1. lightningcss (paling bagus, tapi tidak semua platform)
  try {
    const lcss = require('lightningcss');
    return {
      name: 'lightningcss',
      minify(css) {
        const result = lcss.transform({
          filename: 'srui.css',
          code: Buffer.from(css),
          minify: true,
        });
        return result.code.toString('utf-8');
      },
    };
  } catch (_) { /* lanjut */ }

  // 2. csso (pure JS)
  try {
    const csso = require('csso');
    return {
      name: 'csso',
      minify(css) {
        return csso.minify(css).css;
      },
    };
  } catch (_) { /* lanjut */ }

  // 3. clean-css (pure JS)
  try {
    const CleanCSS = require('clean-css');
    return {
      name: 'clean-css',
      minify(css) {
        const out = new CleanCSS({ level: 2 }).minify(css);
        if (out.errors && out.errors.length) {
          throw new Error(out.errors.join('; '));
        }
        return out.styles;
      },
    };
  } catch (_) { /* lanjut */ }

  // 4. Fallback regex sederhana — jalan di mana saja
  return {
    name: 'builtin-regex',
    minify(css) {
      return css
        // hapus komentar (kecuali yang diawali /*! )
        .replace(/\/\*(?!\!)[\s\S]*?\*\//g, '')
        // collapse whitespace
        .replace(/\s+/g, ' ')
        // hapus spasi di sekitar simbol
        .replace(/\s*([{}:;,>~+])\s*/g, '$1')
        // hapus ; sebelum }
        .replace(/;}/g, '}')
        .trim();
    },
  };
}

// ===== Validasi =====
function validate() {
  const errors = [];

  if (!PKG.version) {
    errors.push('package.json tidak punya field "version"');
  }
  if (!/^\d+\.\d+\.\d+/.test(VERSION)) {
    errors.push(`Versi tidak valid (harus semver): "${VERSION}"`);
  }

  for (const file of SRC_FILES) {
    const p = path.join(SRC_DIR, file);
    if (!fs.existsSync(p)) {
      errors.push(`File sumber tidak ada: src/${file}`);
    }
  }

  // Ganti bagian ini di dalam function validate()
  if (!fs.existsSync(FONTS_DIR)) {
    errors.push('Folder fonts/ tidak ada');
  } else {
    // Ubah filter agar menerima .ttf dan .woff2
    const fontFiles = fs.readdirSync(FONTS_DIR).filter(f => f.endsWith('.ttf') || f.endsWith('.woff2'));
    if (fontFiles.length === 0) {
      errors.push('Folder fonts/ kosong (tidak ada .ttf atau .woff2)');
    }
  }

  if (!fs.existsSync(path.join(ROOT, 'LICENSE'))) {
    errors.push('File LICENSE tidak ada');
  }

  if (errors.length) {
    console.error('❌ Validasi gagal:');
    errors.forEach(e => console.error('   - ' + e));
    process.exit(1);
  }
}

// ===== Baca & gabungin source =====
function readSources() {
  return SRC_FILES.map(file => {
    const content = fs.readFileSync(path.join(SRC_DIR, file), 'utf-8');
    return `/* ===== ${file} ===== */\n${content}`;
  }).join('\n\n');
}

// ===== Replace placeholder =====
function replacePlaceholders(css) {
  return css
    .replace(/__VERSION__/g, VERSION)
    .replace(/__CDN_BASE__/g, CDN_BASE);
}

// ===== Tulis file dengan aman (via .tmp) =====
function writeFileSafe(filePath, content) {
  const tmp = filePath + '.tmp';
  fs.writeFileSync(tmp, content, 'utf-8');
  fs.renameSync(tmp, filePath);
}

// ===== Format ukuran =====
function kb(str) {
  return (Buffer.byteLength(str, 'utf-8') / 1024).toFixed(1) + ' KB';
}

// ===== Main build =====
async function build() {
  validate();

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const minifier = pickMinifier();
  console.log(`🔧 Minifier: ${minifier.name}`);

  const combined = replacePlaceholders(readSources());

  // 1. Unminified
  const unminified = HEADER + '\n' + combined;
  const unminifiedPath = path.join(DIST_DIR, 'srui.css');
  writeFileSafe(unminifiedPath, unminified);
  console.log(`✅ dist/srui.css        ${kb(unminified)}`);

  // 2. Minified
  let minifiedBody;
  try {
    minifiedBody = minifier.minify(combined);
  } catch (err) {
    console.error(`❌ Minifikasi gagal (${minifier.name}):`, err.message);
    console.error('   dist/srui.min.css tidak ditimpa.');
    process.exit(1);
  }

  const minified = HEADER + '\n' + minifiedBody;
  const minifiedPath = path.join(DIST_DIR, 'srui.min.css');
  writeFileSafe(minifiedPath, minified);
  console.log(`✅ dist/srui.min.css    ${kb(minified)}`);

// Dan ganti bagian bawah (Info rilis) biar keren:
  // 3. Info rilis
  console.log('');
  console.log(`🚀 Build v${VERSION} selesai.`);
  console.log(`   CDN : ${CDN_BASE}/dist/srui.min.css`);
  console.log(`   Font Text: ${CDN_BASE}/fonts/Outfit-Regular.ttf`);
  console.log(`   Font Icon: ${CDN_BASE}/fonts/MaterialSymbolsRounded.woff2`);
}

build().catch(err => {
  console.error('❌ Build gagal:', err.message);
  process.exit(1);
});