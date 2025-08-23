<script setup lang="ts">
import { ref, computed } from 'vue'
import { articles } from '@/shared/encyclopedia'
import { currentLocale, t } from '@/i18n'

const query = ref('')
const active = ref<string | null>(null)

const categories = computed(() => Array.from(new Set(articles.map(a => a.category))))

const localize = (textEn: string, textEs: string) => currentLocale.value === 'es' ? textEs : textEn

const filtered = computed(() => {
  const q = query.value.toLowerCase().trim()
  return articles.map(a => ({
    ...a,
    title: localize(a.title, a.titleEs),
    summary: localize(a.summary, a.summaryEs),
  })).filter(a =>
    (!active.value || a.category === active.value) &&
    (!q || a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q))
  )
})
</script>

<template>
  <section class="container pad">
    <h1>{{ $t('encyclopedia.title') }}</h1>
    <div class="controls">
      <input class="search" :placeholder="$t('encyclopedia.search')" v-model="query" />
      <div class="cats">
        <button :class="{ on: active === null }" @click="active = null">{{ $t('encyclopedia.categories') }}</button>
        <button v-for="c in categories" :key="c" :class="{ on: active === c }" @click="active = c">{{
          t(`encyclopedia.cat.${c}`) || c }}</button>
      </div>
    </div>
    <ul class="list">
      <li v-for="a in filtered" :key="a.slug" class="item">
        <RouterLink :to="`/encyclopedia/${a.slug}`" class="link">
          <h3>{{ a.title }}</h3>
          <p>{{ a.summary }}</p>
        </RouterLink>
      </li>
    </ul>
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

.controls {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px
}

.search {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #c3d9ee
}

.cats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px
}

.cats button {
  background: #eaf6ff;
  color: #0a1c30;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #c3d9ee;
  cursor: pointer
}

.cats button.on {
  background: #76c7ff;
  color: #0a1c30;
  border-color: #76c7ff
}

.list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px
}

.item {
  background: #f7fbff;
  border: 1px solid #c3d9ee;
  border-radius: 10px;
  padding: 12px
}
</style>
