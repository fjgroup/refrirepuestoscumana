#!/usr/bin/env node
/* Generate sitemap.xml from encyclopedia slugs and static routes (no TS runtime deps) */
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const distDir = path.join(root, 'dist')
const srcShared = path.join(root, 'src', 'shared', 'encyclopedia.ts')

const file = fs.readFileSync(srcShared, 'utf8')
// naive but effective: capture slug: '...'
const slugs = Array.from(file.matchAll(/slug:\s*'([^']+)'/g)).map(m => m[1])

const BASE_URL = process.env.SITE_URL || 'https://refrirepuestoscumana.com'
const now = new Date().toISOString().slice(0, 10)

const staticRoutes = ['/', '/about', '/products', '/encyclopedia', '/contact']
const urls = [...staticRoutes, ...slugs.map(s => `/encyclopedia/${s}`)]

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${BASE_URL}${u}</loc><lastmod>${now}</lastmod><priority>${u === '/' ? '1.0' : u.startsWith('/encyclopedia/') ? '0.7' : '0.8'}</priority></url>`).join('\n') +
  `\n</urlset>\n`

// Write to public (source) and dist (built) if exists
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml)
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
}
console.log(`Sitemap generated with ${urls.length} URLs`)
