#!/usr/bin/env node
/*
  Procesa el logo original public/logo_sin_hielo_original.(png|jpg)
  - Recorta el espacio en blanco de los bordes (trim)
  - Exporta versiones optimizadas WebP y PNG a:
      public/logo_sin_hielo.webp
      public/logo_sin_hielo.png
*/
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const PUBLIC_DIR = path.join(__dirname, '..', 'public')
const INPUT_CANDIDATES = [
  path.join(PUBLIC_DIR, 'logo_sin_hielo_original.png'),
  path.join(PUBLIC_DIR, 'logo_sin_hielo_original.jpg'),
  path.join(PUBLIC_DIR, 'logo_sin_hielo_original.jpeg'),
]

async function main() {
  const input = INPUT_CANDIDATES.find(p => fs.existsSync(p))
  if (!input) {
    console.error('No se encontró public/logo_sin_hielo_original.(png|jpg)')
    process.exit(1)
  }
  const outWebp = path.join(PUBLIC_DIR, 'logo_sin_hielo.webp')
  const outPng = path.join(PUBLIC_DIR, 'logo_sin_hielo.png')

  // Recorte de bordes con umbral 10 (API moderna)
  // En sharp >=0.33, trim() ya no acepta número suelto; debe ser objeto o sin argumentos
  const base = sharp(input).trim({ threshold: 10 })

  // WebP con buena relación calidad/tamaño
  await base.clone().webp({ quality: 82 }).toFile(outWebp)
  // PNG lossless
  await base.clone().png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(outPng)

  console.log('OK: Generados \n -', path.relative(process.cwd(), outWebp), '\n -', path.relative(process.cwd(), outPng))
}

main().catch(err => { console.error(err); process.exit(1) })

