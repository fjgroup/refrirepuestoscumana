<script setup lang="ts">
import { currentLocale, setLocale } from '@/i18n'
import { ref, onMounted } from 'vue'
import legacyPng from '@/logo_white.png' // fallback final si no existen archivos en /public

const toggleLocale = () => {
  setLocale(currentLocale.value === 'en' ? 'es' : 'en')
}

// Resolución progresiva del logo: /logo.webp → /logo.png → /logo_white.webp → import PNG
const logoSrc = ref<string>(legacyPng)

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
    try { logoSrc.value = await tryLoad(c); break } catch { }
  }
})
</script>

<template>
  <header class="site-header">
    <div class="header-bar">
      <router-link to="/" class="brand" aria-label="Inicio">
        <img :src="logoSrc" alt="REFRIREPUESTOSCUMANÁ" />
      </router-link>
      <nav class="nav">
        <ul class="links">
          <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
          <li><router-link to="/about">{{ $t('nav.about') }}</router-link></li>
          <li><router-link to="/products">{{ $t('nav.products') }}</router-link></li>
          <li><router-link to="/encyclopedia">{{ $t('nav.encyclopedia') }}</router-link></li>
          <li><router-link to="/contact">{{ $t('nav.contact') }}</router-link></li>
        </ul>
        <button class="lang-btn" @click="toggleLocale"
          :aria-label="currentLocale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'">
          <img v-if="currentLocale === 'en'" src="https://flagcdn.com/es.svg" alt="ES" />
          <img v-else src="https://flagcdn.com/gb.svg" alt="EN" />
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  /* scroll normal con el contenido */
}

.header-bar {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  height: var(--header-h, 100px);
  background: #e9eef3;
  /* fondo gris uniforme */
  border-bottom: 1px solid #d7dfe6;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 64px
}

.brand {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #0a1c30;
  font-weight: 700;
  letter-spacing: .4px;
  padding-left: 16px;
  /* asegurar que el logo quede centrado verticalmente en la fila */
  height: var(--header-h, 100px)
}

.brand img {
  height: 100px;
  width: auto;
  /* mantener proporción */
  max-height: calc(var(--header-h, 100px) - 8px);
  object-fit: contain
}

.links {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 12px;
  margin-left: auto;
  padding: 0
}

.links a {
  color: #0a1c30;
  opacity: .9;
  text-decoration: none
}

.links a.router-link-active {
  color: #0e2946;
  font-weight: 600
}

.lang-btn {
  margin-left: 16px;
  border: none;
  background: transparent;
  cursor: pointer
}

.lang-btn img {
  width: 26px;
  height: 18px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .2)
}
</style>
