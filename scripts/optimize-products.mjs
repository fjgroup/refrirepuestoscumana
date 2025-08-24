import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

// Source root for raw images dropped by the user
const SRC_DIR = path.resolve('public/products_raw')
// Destination root used by the site
const OUT_DIR = path.resolve('public/products')

const CATEGORIES = [
  'compressor-hermetic',
  'compressor-scroll',
  'filter-drier',
  'sight-glass',
  'thermostat-wall',
  'controller-digital',
  'refrigerant-cylinder-orange',
  'refrigerant-cylinder-green',
  'manifold-gauges',
  'txv-valve',
  'axial-fan',
  'fan-motor',
]

async function ensureDir(p){ await fs.promises.mkdir(p,{recursive:true}) }

function isImage(file){ return /\.(png|jpg|jpeg|webp)$/i.test(file) }

async function whitenBackground(img){
  // Convert to raw and push near-white to pure white softly
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const buf = Buffer.from(data)
  for(let i=0;i<buf.length;i+=4){
    const r=buf[i], g=buf[i+1], b=buf[i+2]
    const y = 0.2126*r + 0.7152*g + 0.0722*b
    if (y>245){ buf[i]=255; buf[i+1]=255; buf[i+2]=255 }
  }
  return sharp(buf,{ raw:{ width:info.width, height:info.height, channels:4 } })
}

async function processFile(srcPath, outBase){
  let img = sharp(srcPath)
  const meta = await img.metadata()
  if(!meta.width || !meta.height) throw new Error('Invalid image: '+srcPath)

  // Resize to max 1200 in either dimension
  img = img.resize({ width: meta.width>meta.height?1200:undefined, height: meta.height>=meta.width?1200:undefined, fit:'inside', withoutEnlargement:true })

  // Normalize near-white backgrounds
  img = await whitenBackground(img)

  await ensureDir(path.dirname(outBase))
  await img.webp({ quality:85 }).toFile(outBase + '.webp')
  await img.jpeg({ quality:86, mozjpeg:true }).toFile(outBase + '.jpg')
}

async function main(){
  await ensureDir(SRC_DIR)
  await ensureDir(OUT_DIR)
  for(const cat of CATEGORIES){
    await ensureDir(path.join(SRC_DIR, cat))
    await ensureDir(path.join(OUT_DIR, cat))
  }

  const entries = await fs.promises.readdir(SRC_DIR, { withFileTypes:true })
  for(const ent of entries){
    if(!ent.isDirectory()) continue
    const cat = ent.name
    const srcCat = path.join(SRC_DIR, cat)
    const outCat = path.join(OUT_DIR, cat)
    const files = await fs.promises.readdir(srcCat)
    for(const f of files){
      if(!isImage(f)) continue
      const name = path.parse(f).name.replace(/\s+/g,'-').toLowerCase()
      const outBase = path.join(outCat, name)
      console.log('Processing', path.join(srcCat,f))
      await processFile(path.join(srcCat, f), outBase)
    }
  }
  console.log('Done. Check', OUT_DIR)
}

main().catch(e=>{ console.error(e); process.exit(1) })

