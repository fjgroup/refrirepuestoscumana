<script setup lang="ts">
import { currentLocale, setLocale } from '@/i18n'
import logo from '@/logo_white.png'

const toggleLocale = () => {
  setLocale(currentLocale.value === 'en' ? 'es' : 'en')
}
</script>

<template>
  <header class="site-header">
    <div class="header-split">
      <router-link to="/" class="brand" aria-label="Inicio">
        <img :src="logo" alt="REFRIREPUESTOSCUMANÁ" />
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
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-split {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  height: 64px;
  background: linear-gradient(90deg, #ffffff 0%, #ffffff 48%, rgba(255, 255, 255, 0.6) 50%, #e9eef3 52%, #e9eef3 100%);
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
  padding-left: 16px
}

.brand img {
  height: 60px;
  /* máximo posible dentro de 64px de alto del header */
  width: auto;
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
