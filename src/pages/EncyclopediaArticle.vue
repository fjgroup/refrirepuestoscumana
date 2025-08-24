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

// Convierte el texto simple en HTML con <h2> y listas <ul><li>, y genera TOC
function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

const processed = computed(() => {
  const src = article.value?.body || ''
  const lines = src.split('\n')
  let html = ''
  let inList = false
  const toc: Array<{ id: string; title: string }> = []
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) { if (inList) { html += '</ul>'; inList = false } continue }
    if (line.startsWith('- ')) {
      if (!inList) { html += '<ul>'; inList = true }
      html += `<li>${line.slice(2)}</li>`
      continue
    }
    // Encabezado de sección
    if (inList) { html += '</ul>'; inList = false }
    const id = slugify(line)
    toc.push({ id, title: line })
    html += `<h2 id="${id}">${line}</h2>`
  }
  if (inList) html += '</ul>'
  return { html, toc }
})

const htmlBody = computed(() => processed.value.html)
const toc = computed(() => processed.value.toc)

// Diagramas simples en SVG para algunos temas
const diagram = computed(() => {
  switch (slug.value) {
    case 'basic-cycle':
      return `
<svg width="600" height="160" viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basic refrigeration cycle">
  <defs><style>.b{fill:#f7fbff;stroke:#0a1c30;stroke-width:1.5}</style></defs>
  <rect x="10" y="20" width="120" height="60" rx="8" class="b"/>
  <rect x="160" y="20" width="120" height="60" rx="8" class="b"/>
  <rect x="310" y="20" width="120" height="60" rx="8" class="b"/>
  <rect x="460" y="20" width="120" height="60" rx="8" class="b"/>
  <text x="70" y="55" text-anchor="middle" font-size="12">Compressor</text>
  <text x="220" y="55" text-anchor="middle" font-size="12">Condenser</text>
  <text x="370" y="55" text-anchor="middle" font-size="12">Valve</text>
  <text x="520" y="55" text-anchor="middle" font-size="12">Evaporator</text>
  <path d="M130 50h20l-6-6m6 6l-6 6" stroke="#0a1c30" fill="none"/>
  <path d="M280 50h20l-6-6m6 6l-6 6" stroke="#0a1c30" fill="none"/>
  <path d="M430 50h20l-6-6m6 6l-6 6" stroke="#0a1c30" fill="none"/>
  <path d="M580 50h10v60H40V80h20l-6-6m6 6l-6 6" stroke="#0a1c30" fill="none"/>
</svg>`
    case 'sight-glass':
      return `
<svg width="600" height="120" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sight glass">
  <defs><style>.s{stroke:#0a1c30;stroke-width:2;fill:none}</style></defs>
  <line x1="40" y1="60" x2="560" y2="60" class="s"/>
  <circle cx="300" cy="60" r="22" class="s"/>
  <circle cx="300" cy="60" r="8" fill="#7dd3ff" stroke="#0a1c30"/>
  <circle cx="120" cy="60" r="4" fill="#7dd3ff"/>
  <circle cx="150" cy="60" r="3" fill="#7dd3ff"/>
  <circle cx="180" cy="60" r="2" fill="#7dd3ff"/>
  <text x="300" y="100" text-anchor="middle" font-size="12">Sight Glass</text>
</svg>`
    case 'superheat-subcool':
      return `
<svg width="600" height="140" viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Superheat and Subcooling">
  <defs><style>.t{stroke:#0a1c30;fill:none}</style></defs>
  <rect x="60" y="20" width="200" height="30" fill="#d8f1ff" stroke="#0a1c30"/>
  <rect x="60" y="50" width="200" height="30" fill="#a7dbff" stroke="#0a1c30"/>
  <text x="160" y="43" text-anchor="middle" font-size="12">T_sat (condensing)</text>
  <text x="160" y="73" text-anchor="middle" font-size="12">Liquid line temp</text>
  <path d="M270 35H320" class="t"/><text x="335" y="39" font-size="12">Subcool = T_sat - T_liq</text>
  <rect x="60" y="90" width="200" height="30" fill="#ffd8d8" stroke="#0a1c30"/>
  <rect x="60" y="120" width="200" height="10" fill="#ffbaba" stroke="#0a1c30"/>
  <text x="160" y="103" text-anchor="middle" font-size="12">Suction line temp</text>
  <text x="160" y="135" text-anchor="middle" font-size="12">T_sat (suction)</text>
  <path d="M270 105H350" class="t"/><text x="365" y="109" font-size="12">Superheat = T_suction - T_sat</text>
</svg>`
    default:
      return ''
  }
})
</script>

<template>
  <section class="container pad" v-if="article">
    <h1>{{ article.title }}</h1>
    <p class="lead">{{ article.summary }}</p>

    <!-- Tabla de contenidos automática -->
    <nav v-if="toc.length" class="toc">
      <strong>Contenido</strong>
      <ul>
        <li v-for="s in toc" :key="s.id"><a :href="`#${s.id}`">{{ s.title }}</a></li>
      </ul>
    </nav>

    <div class="content">
      <p class="disclaimer">
        Aviso: Este contenido es educativo y de referencia general. No es una guía oficial de ninguna marca ni
        reemplaza los manuales del fabricante. Para instrucciones específicas de modelos y normativa local, consulta
        siempre la documentación oficial y las páginas web de los fabricantes.
      </p>

      <!-- Diagrama opcional según tema -->
      <div v-if="diagram" class="diagram" v-html="diagram"></div>

      <div v-if="htmlBody">
        <div v-html="htmlBody"></div>
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

.toc {
  border: 1px solid #e6eef6;
  background: #f7fbff;
  border-radius: 8px;
  padding: 10px 12px;
  margin: 10px 0 16px
}

.toc ul {
  margin: 6px 0 0 18px;
  padding: 0
}

.toc a {
  color: var(--blue-800);
  text-decoration: none
}

.toc a:hover {
  text-decoration: underline;
  text-underline-offset: 3px
}

.diagram {
  margin: 6px 0 14px;
  overflow-x: auto
}

.diagram svg {
  max-width: 100%;
  height: auto
}

.content {
  white-space: pre-line
}

.content h2 {
  margin-top: 20px
}

.disclaimer {
  background: #fff9e6;
  border: 1px solid #f0d488;
  color: #5a4200;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 14px
}
</style>
