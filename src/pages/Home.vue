<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FrostLayer from '@/components/FrostLayer.vue'
import HeroLogoBadge from '@/components/HeroLogoBadge.vue'
import Testimonials from '@/components/Testimonials.vue'
</script>

<template>
  <section class="hero">
    <FrostLayer />
    <HeroLogoBadge />
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
</style>
