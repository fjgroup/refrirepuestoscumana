<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FrostLayer from '@/components/FrostLayer.vue'
import Testimonials from '@/components/Testimonials.vue'
import { ref, onMounted } from 'vue'
import legacyPng from '@/logo_white.png'

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
onMounted(async () => {
  const candidates = ['/logo.webp', '/logo.png', '/logo_white.webp']
  for (const c of candidates) {
    try { brandLogo.value = await tryLoad(c); break } catch { }
  }
})
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
  </section>
  <section class="featured container">
    <h2>{{ $t('home.featuredTitle') }}</h2>
    <ul class="grid">
      <li>{{ $t('home.f1') }}</li>
      <li>{{ $t('home.f2') }}</li>
      <li>{{ $t('home.f3') }}</li>
      <li>{{ $t('home.f4') }}</li>
    </ul>
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
  padding: 0 16px
}

.container {
  max-width: 1100px;
  margin: 0 auto
}

.subtitle {
  opacity: .9;
  max-width: 680px
}

.cta {
  display: inline-block;
  margin-top: 16px;
  background: #76c7ff;
  color: #0a1c30;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600
}

.about,
.featured {
  padding: 32px 0
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  list-style: none;
  padding: 0
}

.grid li {
  background: #f0f7ff;
  color: #0a1c30;
  padding: 12px;
  border-radius: 8px
}

/* Brand reinforcement section */
.brand-section {
  padding: 28px 0 36px;
  text-align: center
}

.brand-logo {
  height: 96px;
  max-width: min(520px, 90%);
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
    height: 72px
  }
}
</style>
