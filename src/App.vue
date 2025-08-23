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
  --blue-800: #0e2946;
  --blue-500: #76c7ff;
  --gray-100: #f0f7ff;
  --text: #0a1c30
}

* {
  box-sizing: border-box
}

html,
body,
#app {
  height: 100%
}

body {
  margin: 0;
  font-family: 'Outfit', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #ffffff, #f5fbff)
}

main {
  min-height: calc(100dvh - 64px - 180px)
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
</style>
