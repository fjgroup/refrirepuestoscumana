import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

// Inputs
const INPUT_PATH = path.resolve('src/logo_white.png')
const OUT_DIR = path.resolve('public')
const OUT_PNG = path.join(OUT_DIR, 'logo.png')
const OUT_WEBP = path.join(OUT_DIR, 'logo.webp')

// Utils
async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true })
}

// Create an alpha mask by treating pixels near white as background.
// We compute luminance and create alpha = 0 for very-bright pixels, with a soft ramp.
function backgroundRemovalPipeline(img) {
  // Work in linear RGB to avoid haloing; then create alpha from luminance
  return img
    .removeAlpha()
    .linear(1, 0)
    .toColourspace('srgb')
}

async function createTransparentVersions() {
  const base = sharp(INPUT_PATH)
  const { width, height } = await base.metadata()
  if (!width || !height) throw new Error('No se pudo leer el logo base')

  // Read raw RGBA
  const rgba = await base.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const buf = rgba.data

  // Build alpha channel from brightness (near-white background -> alpha 0)
  const out = Buffer.alloc(buf.length)
  for (let i = 0; i < buf.length; i += 4) {
    const r = buf[i], g = buf[i + 1], b = buf[i + 2]
    // Rec. 709 luma approximation
    const y = 0.2126 * r + 0.7152 * g + 0.0722 * b
    // Thresholds tuned: >= 244 very white => fully transparent; <= 235 opaque
    const t0 = 235, t1 = 244
    let a
    if (y >= t1) a = 0
    else if (y <= t0) a = 255
    else a = Math.round(255 * (1 - (y - t0) / (t1 - t0)))
    out[i] = r; out[i + 1] = g; out[i + 2] = b; out[i + 3] = a
  }

  const composed = sharp(out, { raw: { width, height, channels: 4 } })

  await ensureDir(OUT_DIR)

  // PNG
  await composed.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(OUT_PNG)

  // WebP with alpha
  await composed.webp({ quality: 90, alphaQuality: 100 }).toFile(OUT_WEBP)

  return { OUT_PNG, OUT_WEBP }
}

createTransparentVersions()
  .then(({ OUT_PNG, OUT_WEBP }) => {
    console.log('OK:', OUT_PNG, OUT_WEBP)
  })
  .catch((err) => {
    console.error('Error procesando logo:', err)
    process.exit(1)
  })

