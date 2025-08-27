<script setup lang="ts">
import { currentLocale, setLocale } from '@/i18n'
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const closeMenu = () => { isOpen.value = false }

const toggleLocale = () => {
  setLocale(currentLocale.value === 'en' ? 'es' : 'en')
}

// Resolución progresiva del logo: /logo_sin_hielo.webp → /logo_sin_hielo.png → /logo.webp → /logo.png → /logo_white.webp
const logoSrc = ref<string>('/logo_sin_hielo.webp')

function tryLoad(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

onMounted(async () => {
  const candidates = ['/logo_sin_hielo.webp', '/logo_sin_hielo.png', '/logo.webp', '/logo.png', '/logo_white.webp']
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
        <button class="burger" aria-label="Menu" :aria-expanded="isOpen ? 'true' : 'false'" @click="isOpen = !isOpen">
          <i-tabler-menu-2 />
        </button>
        <div v-if="isOpen" class="backdrop" @click="closeMenu"></div>
        <ul class="links" :class="{ open: isOpen }" @click.self="closeMenu">
          <li @click="closeMenu"><router-link to="/"><i-tabler-home style="vertical-align:-2px; margin-right:6px" /> {{
            $t('nav.home') }}</router-link></li>
          <li @click="closeMenu"><router-link to="/about"><i-tabler-users
                style="vertical-align:-2px; margin-right:6px" /> {{ $t('nav.about') }}</router-link></li>
          <li @click="closeMenu"><router-link to="/products"><i-tabler-building-store
                style="vertical-align:-2px; margin-right:6px" /> {{ $t('nav.products') }}</router-link></li>
          <li @click="closeMenu"><router-link to="/encyclopedia"><i-tabler-book-2
                style="vertical-align:-2px; margin-right:6px" /> {{ $t('nav.encyclopedia') }}</router-link></li>
          <li @click="closeMenu"><router-link to="/contact"><i-tabler-phone
                style="vertical-align:-2px; margin-right:6px" /> {{ $t('nav.contact') }}</router-link></li>
          <li class="lang-mobile" @click="closeMenu">
            <button class="lang-btn" @click.stop="toggleLocale"
              :aria-label="currentLocale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'">
              <img v-if="currentLocale === 'en'" src="https://flagcdn.com/es.svg" alt="ES" />
              <img v-else src="https://flagcdn.com/gb.svg" alt="EN" />
            </button>
          </li>
        </ul>
        <button class="lang-btn desktop-only" @click="toggleLocale"
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
  grid-template-columns: auto 1fr auto;
  /* logo | flex | acciones */
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
  padding: 0 clamp(24px, 5vw, 32px);
  position: relative;
}

.burger {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  color: #0a1c30
}

.burger :deep(svg) {
  width: 28px;
  height: 28px
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 28, 48, .25);
  backdrop-filter: blur(1px);
  z-index: 999
}


/* Mobile menu */
@media (max-width: 768px) {
  .nav {
    grid-column: 3;
    display: flex;
    justify-content: flex-end;
    padding-right: clamp(24px, 5vw, 32px)
  }

  .burger {
    display: block
  }

  .links {
    position: fixed;
    left: 0;
    right: 0;
    top: var(--header-h, 100px);
    background: #ffffff;
    border-bottom: 1px solid #d7dfe6;
    padding: 10px clamp(24px, 5vw, 32px);
    box-shadow: 0 10px 24px rgba(10, 28, 48, .12);
    display: flex;
    flex-direction: column;
    gap: 8px;
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity .2s ease, transform .2s ease;
    z-index: 1000;
  }

  .links.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0)
  }

  .desktop-only {
    display: none
  }

  .lang-mobile {
    display: none
  }

  .lang-mobile {
    display: block
  }
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 32px);
  display: contents;
  /* dejemos que el grid gestione la barra */
}

.brand {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #0a1c30;
  font-weight: 700;
  letter-spacing: .4px;
  padding-left: clamp(24px, 5vw, 32px);
  height: var(--header-h, 100px)
    /* el grid la coloca a la izquierda */
}

.brand img {
  height: calc(var(--header-h, 100px) - 8px);
  width: auto;
  /* mantener proporción */
  max-height: none;
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
  text-decoration: none;
  transition: color .2s ease, opacity .2s ease, text-underline-offset .2s ease
}

.links a:hover {
  color: var(--blue-800);
  text-decoration: underline;
  text-underline-offset: 3px
}

.links a.router-link-active {
  color: var(--blue-800);
  font-weight: 600
}

.lang-btn {
  margin-left: 16px;
  border: none;
  background: transparent;
  cursor: pointer
}

/* Desktop enforcement */
@media (min-width: 769px) {
  .lang-mobile {
    display: none !important
  }

  .backdrop {
    display: none !important
  }
}


.lang-btn img {
  width: 26px;
  height: 18px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .2)
}
</style>
