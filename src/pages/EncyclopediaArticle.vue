<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '@/shared/encyclopedia'
import { richArticles } from '@/shared/encyclopedia-content'
import { currentLocale } from '@/i18n'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const article = computed(() => {
  const a = articles.find(x => x.slug === slug.value)
  if (!a) return null
  const title = currentLocale.value === 'es' ? a.titleEs : a.title
  const summary = currentLocale.value === 'es' ? a.summaryEs : a.summary
  const rich = richArticles.find(r => r.slug === slug.value)
  const body = rich ? (currentLocale.value === 'es' ? rich.es : rich.en) : ''
  return { ...a, title, summary, body }
})
</script>

<template>
  <section class="container pad" v-if="article">
    <h1>{{ article.title }}</h1>
    <p class="lead">{{ article.summary }}</p>
    <div class="content">
      <p class="disclaimer">
        Aviso: Este contenido es educativo y de referencia general. No es una guía oficial de ninguna marca ni
        reemplaza los manuales del fabricante. Para instrucciones específicas de modelos y normativa local, consulta
        siempre la documentación oficial y las páginas web de los fabricantes.
      </p>
      <div v-if="article.body">
        <div v-html="article.body"></div>
      </div>
      <template v-else>
        <h2>Fundamentos</h2>
        <p>
          El comportamiento termodinámico del sistema depende de presiones, temperaturas y caudales. Considera las
          relaciones de presión-enthalpía, el control de sobrecalentamiento/subenfriamiento y las pérdidas de carga.
        </p>
        <h2>Selección y compatibilidad</h2>
        <p>
          Selecciona componentes atendiendo a capacidad, compatibilidad con refrigerante y aceite, condiciones de
          operación y límites del fabricante. Revisa conexiones eléctricas, protección y puesta a tierra.
        </p>
        <h2>Mantenimiento y diagnóstico</h2>
        <ul>
          <li>Verifica vacío profundo y ausencia de humedad antes de la carga.</li>
          <li>Mide superheat y subcooling para ajustar la carga y evaluar restricciones.</li>
          <li>Inspecciona filtros, mirillas, y realiza pruebas de fugas.</li>
          <li>Registra lecturas y compara con especificaciones.</li>
        </ul>
        <h2>Seguridad</h2>
        <p>
          Usa EPP, respeta procedimientos de bloqueo/etiquetado y manipula cilindros según normas. Garantiza
          ventilación al trabajar con refrigerantes.
        </p>
      </template>
    </div>
  </section>
  <section v-else class="container pad">
    <h1>Article not found</h1>
  </section>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px
}

.pad {
  padding: 32px 0
}

.lead {
  opacity: .95
}

.content h2 {
  margin-top: 20px
}

.disclaimer {
  background: #fff9e6;
  border: 1px solid #f0d488;
  color: #5a4200;
  padding: 10px 12px;
  border-radius: 8px
}
</style>
