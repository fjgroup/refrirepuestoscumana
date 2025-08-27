<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FrostLayer from '@/components/FrostLayer.vue'
import Testimonials from '@/components/Testimonials.vue'
import { ref, onMounted, watch } from 'vue'
import legacyPng from '@/logo_white.png'
import { articles } from '@/shared/encyclopedia'
import { currentLocale } from '@/i18n'

// Logo detection (WebP -> PNG -> legacy)
const brandLogo = ref<string>(legacyPng)
function tryLoad(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

// Enciclopedia: tip aleatorio en portada
interface Tip { slug: string; title: string; summary: string }
const tip = ref<Tip | null>(null)
const tipSlug = ref<string>('')
function setTipFromSlug(slug: string) {
  const a = articles.find(x => x.slug === slug)
  if (!a) return
  const title = currentLocale.value === 'es' ? a.titleEs : a.title
  const summary = currentLocale.value === 'es' ? a.summaryEs : a.summary
  tip.value = { slug: a.slug, title, summary }
}
function pickRandomTip() {
  const idx = Math.floor(Math.random() * articles.length)
  tipSlug.value = articles[idx].slug
  setTipFromSlug(tipSlug.value)
}

onMounted(async () => {
  const candidates = ['/logo_sin_hielo.webp', '/logo_sin_hielo.png', '/logo.webp', '/logo.png', '/logo_white.webp']
  for (const c of candidates) {
    try { brandLogo.value = await tryLoad(c); break } catch { }
  }
  pickRandomTip()
})

watch(currentLocale, () => { if (tipSlug.value) setTipFromSlug(tipSlug.value) })
</script>

<template>
  <section class="hero">
    <FrostLayer />
    <div class="container hero-inner">
      <h1>{{ $t('hero.title') }}</h1>
      <p class="subtitle">{{ $t('hero.subtitle') }}</p>
      <RouterLink to="/products" class="cta">{{ $t('hero.cta') }}</RouterLink>
    </div>
  </section>
  <section class="about container">
    <h2>{{ $t('about.title') }}</h2>
    <p>{{ $t('about.blurb') }}</p>
    <RouterLink to="/about" class="about-read-more">{{ $t('about.readMore') }}</RouterLink>
  </section>
  <!-- Reemplazo: Tip aleatorio de la enciclopedia -->
  <section class="ency-tip container" v-if="tip">
    <h2>{{ $t('home.featuredTitle') }}</h2>
    <RouterLink :to="`/encyclopedia/${tip.slug}`" class="tip-card" :aria-label="$t('home.tipReadMore')">
      <div class="tip-title">{{ tip.title }}</div>
      <div class="tip-summary">{{ tip.summary }}</div>
      <div class="tip-cta">{{ $t('home.tipReadMore') }}</div>
    </RouterLink>
  </section>
  <Testimonials />

  <!-- Brand reinforcement section -->
  <section class="brand-section">
    <div class="container">
      <img :src="brandLogo" alt="REFRIREPUESTOSCUMANÁ" class="brand-logo" />
      <div class="slogan">Somos su solución en frío</div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: linear-gradient(180deg, #0a1c30, #0e2946 40%, #0a1c30);
  color: #eaf6ff;
  padding: 0 0 24px
}

.hero-inner {
  margin-top: -220px;
  padding: 0 clamp(24px, 5vw, 32px)
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 32px)
}

.subtitle {
  opacity: .9;
  max-width: 680px
}

.cta {
  display: inline-block;
  margin-top: 16px;
  background: var(--blue-500);
  color: #0a1c30;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: filter .25s ease, box-shadow .25s ease, transform .08s ease
}

.cta:hover {
  filter: brightness(1.05);
  box-shadow: 0 6px 18px rgba(76, 183, 255, .35)
}

.cta:active {
  transform: translateY(1px)
}

.about,
.ency-tip {
  padding-block: 32px;
}

.about-read-more {
  display: inline-block;
  margin-top: 10px;
  color: var(--blue-800);
  font-weight: 600;
  text-decoration: none;
}

.about-read-more:hover {
  text-decoration: underline;
  text-underline-offset: 3px
}

/* Tarjeta del tip enciclopedia */
.ency-tip .tip-card {
  display: block;
  background: #f7fbff;
  border: 1px solid #dbe8f5;
  border-radius: 12px;
  padding: 14px 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 16px rgba(10, 28, 48, .06);
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease
}

.ency-tip .tip-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(10, 28, 48, .12)
}

.ency-tip .tip-title {
  font-weight: 700;
  margin-bottom: 6px
}

.ency-tip .tip-summary {
  opacity: .92
}

.ency-tip .tip-cta {
  margin-top: 10px;
  color: var(--blue-800);
  font-weight: 600
}

/* Brand reinforcement section */
.brand-section {
  padding: 28px 0 36px;
  text-align: center
}

.brand-logo {
  height: 150px;
  max-width: min(680px, 95%);
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, .03))
}

.slogan {
  margin-top: 10px;
  font-weight: 700;
  color: var(--blue-800);
  letter-spacing: .3px;
  font-size: clamp(1.1rem, 1.8vw, 1.4rem)
}

@media (max-width: 520px) {
  .brand-logo {
    height: 112px
  }
}
</style>
