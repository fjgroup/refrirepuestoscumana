<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '@/shared/encyclopedia'
import { currentLocale } from '@/i18n'

const route = useRoute()
const slug = computed(()=> route.params.slug as string)

const article = computed(()=>{
  const a = articles.find(x => x.slug === slug.value)
  if (!a) return null
  const title = currentLocale.value === 'es' ? a.titleEs : a.title
  const summary = currentLocale.value === 'es' ? a.summaryEs : a.summary
  return { ...a, title, summary }
})
</script>

<template>
  <section class="container pad" v-if="article">
    <h1>{{ article.title }}</h1>
    <p class="lead">{{ article.summary }}</p>
    <div class="content">
      <p>
        Nota: Contenido extendido de referencia técnica. Este artículo describe principios, componentes, cálculos
        básicos y prácticas recomendadas para el tema seleccionado. Para soporte específico de equipos y marcas,
        consulta manuales del fabricante y normativa local.
      </p>
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
    </div>
  </section>
  <section v-else class="container pad">
    <h1>Article not found</h1>
  </section>
</template>

<style scoped>
.container{ max-width: 900px; margin: 0 auto; padding: 0 16px }
.pad{ padding: 32px 0 }
.lead{ opacity:.95 }
.content h2{ margin-top:20px }
</style>

