<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { currentLocale, t } from '@/i18n'
import { watch, onMounted } from 'vue'

function applySEO(routeName?: string) {
  const map: Record<string, string> = {
    home: t('seo.home'), about: t('seo.about'), products: t('seo.products'), encyclopedia: t('seo.encyclopedia'), contact: t('seo.contact')
  }
  const title = map[routeName || 'home'] || 'REFRIREPUESTOSCUMANÁ'
  document.title = title
  document.documentElement.lang = currentLocale.value
}

onMounted(() => applySEO())
watch(currentLocale, () => applySEO())
</script>

<template>
  <div class="app">
    <SiteHeader />
    <main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" @vue:mounted="() => applySEO(route.name as string)" />
      </router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<style>
:root {
  --blue-900: #0a1c30;
  --blue-800: #0c2f57;
  --blue-500: #4db7ff;
  --gray-100: #f0f7ff;
  --text: #0a1c30;
  --header-h: 150px;
  /* altura de header usada por SiteHeader y layout (aumentada 50%) */
}

* {
  box-sizing: border-box
}

html,
body,
#app {
  height: 100%
}

/* Aumentamos base +2px y mejoramos legibilidad tipo Wikipedia */
html {
  font-size: 18px
}

@media (max-width: 520px) {
  html {
    font-size: 17px
  }
}

body {
  margin: 0;
  font-family: 'Outfit', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #ffffff, #f5fbff);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

main {
  min-height: calc(100dvh - var(--header-h, 100px) - 180px);
  /* Fondo uniforme para todas las páginas */
  background: var(--gray-100);
}

/* Tipografía global inspirada en Wikipedia */
p {
  margin: 0 0 0.9em
}

ul,
ol {
  margin: 0.2em 0 1em 1.25em;
  padding: 0
}

li {
  margin: 0.25em 0
}

h1,
h2,
h3 {
  line-height: 1.3;
  margin: 0.8em 0 0.4em;
  letter-spacing: .2px
}

h1 {
  font-size: 1.9rem
}

h2 {
  font-size: 1.35rem;
  border-bottom: 1px solid #e6eef6;
  padding-bottom: 4px
}

h3 {
  font-size: 1.15rem
}

.lead {
  font-size: 1.05rem;
  opacity: .96
}

a {
  color: var(--blue-800);
  text-decoration: none
}

a:hover {
  text-decoration: underline;
  text-underline-offset: 3px
}

::selection {
  background: rgba(77, 183, 255, .25)
}

/* Subtle interactive frost effect */
.frost {
  position: relative;
  overflow: hidden
}

.frost::after {
  content: '';
  position: absolute;
  inset: -20%;
  background: radial-gradient(400px 200px at var(--mx, 50%) var(--my, 0%), rgba(255, 255, 255, .22), transparent 60%),
    radial-gradient(900px 500px at 120% -20%, rgba(118, 199, 255, .18), transparent 60%);
  pointer-events: none;
  filter: blur(10px)
}

/* Ajuste de altura del header por viewport */
@media (max-width: 768px) {
  :root {
    --header-h: 126px
  }
}

@media (max-width: 520px) {
  :root {
    --header-h: 114px
  }
}
</style>
