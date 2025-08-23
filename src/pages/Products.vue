<script setup lang="ts">
import { icons } from '@/shared/icons'
</script>

<template>
  <section class="container pad">
    <h1>{{ $t('products.title') }}</h1>
    <div class="categories">
      <div class="cat"><span class="ico">{{ icons.compressors }}</span> {{ $t('products.cats.compressors') }}</div>
      <div class="cat"><span class="ico">{{ icons.electrical }}</span> {{ $t('products.cats.electrical') }}</div>
      <div class="cat"><span class="ico">{{ icons.refrigerants }}</span> {{ $t('products.cats.refrigerants') }}</div>
      <div class="cat"><span class="ico">{{ icons.valves }}</span> {{ $t('products.cats.valves') }}</div>
      <div class="cat"><span class="ico">{{ icons.motors }}</span> {{ $t('products.cats.motors') }}</div>
      <div class="cat"><span class="ico">{{ icons.driers }}</span> {{ $t('products.cats.driers') }}</div>
      <div class="cat"><span class="ico">{{ icons.tools }}</span> {{ $t('products.cats.tools') }}</div>
    </div>
    <p class="note">{{ $t('products.catalogNote') }}</p>
    <p class="note">💡 Sin fotos todavía: usamos íconos para mostrar categorías. Contáctanos para ver modelos y marcas
      disponibles.</p>
  </section>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px
}

.pad {
  padding: 32px 0
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px
}

.cat {
  background: #f0f7ff;
  color: #0a1c30;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px
}

.ico {
  font-size: 1.2rem
}

.note {
  opacity: .8;
  margin-top: 10px
}
</style>
