<script setup lang="ts">
import { icons } from '@/shared/icons'
const photo = (slug: string) => new URL(`/products/${slug}/main.webp`, import.meta.url).href
</script>

<template>
  <section class="container pad">
    <h1>{{ $t('products.title') }}</h1>
    <div class="categories">
      <div class="cat">
        <img loading="lazy" :src="photo('compressor-hermetic')" alt="compressor" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.compressors }}</span> {{ $t('products.cats.compressors') }}
      </div>
      <div class="cat">
        <img loading="lazy" :src="photo('controller-digital')" alt="electrical" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.electrical }}</span> {{ $t('products.cats.electrical') }}
      </div>
      <div class="cat">
        <img loading="lazy" :src="photo('refrigerant-cylinder-orange')" alt="refrigerants" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.refrigerants }}</span> {{ $t('products.cats.refrigerants') }}
      </div>
      <div class="cat">
        <img loading="lazy" :src="photo('txv-valve')" alt="valves" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.valves }}</span> {{ $t('products.cats.valves') }}
      </div>
      <div class="cat">
        <img loading="lazy" :src="photo('fan-motor')" alt="motors" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.motors }}</span> {{ $t('products.cats.motors') }}
      </div>
      <div class="cat">
        <img loading="lazy" :src="photo('filter-drier')" alt="driers" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.driers }}</span> {{ $t('products.cats.driers') }}
      </div>
      <div class="cat">
        <img loading="lazy" :src="photo('manifold-gauges')" alt="tools" width="28" height="28"
          @error="($event.target as HTMLImageElement).style.display = 'none'" />
        <span class="ico">{{ icons.tools }}</span> {{ $t('products.cats.tools') }}
      </div>
    </div>
    <p class="note">{{ $t('products.catalogNote') }}</p>
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
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 1px 0 rgba(10, 28, 48, .03);
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease
}

.cat:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(10, 28, 48, .12)
}

.ico {
  font-size: 1.2rem
}

.note {
  opacity: .8;
  margin-top: 10px
}
</style>
