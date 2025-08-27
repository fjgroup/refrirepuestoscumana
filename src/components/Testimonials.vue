<script setup lang="ts">
import { computed } from 'vue'
import { t } from '@/i18n'
const items = [
  { name: 'Luis A.', stars: 5, text: 'Me cambiaron el compresor del aire en el mismo día. El equipo enfría mejor y el consumo bajó. Muy profesionales y puntuales.' },
  { name: 'María G.', stars: 5, text: 'Otro técnico dijo que debía cambiar el compresor. Ellos lo repararon y mi aire volvió a enfriar sin gastar de más. Profesionales y honestos.' },
  { name: 'Carlos R.', stars: 4.5, text: 'Diagnóstico rápido de falla eléctrica en nevera. Reemplazaron piezas a buen precio y sin rodeos. Todo quedó funcionando estable.' },
  { name: 'Sofía P.', stars: 5, text: 'Mantenimiento profundo del aire central. Explicaron todo en palabras simples y dejaron el sistema como nuevo.' },
  { name: 'Andrés V.', stars: 5, text: 'Atención excelente. Cambiaron ventilador y limpiaron serpentines; ahora enfría más rápido y con menos ruido.' },
  { name: 'Natalia C.', stars: 4.5, text: 'Solucionaron el goteo de la unidad y ajustaron la carga. La habitación vuelve a estar fresca sin malos olores.' },
  { name: 'Jorge E.', stars: 5, text: 'Revisión completa de aire industrial. Trabajo limpio, ordenado y con garantía. Los recomiendo.' },
  { name: 'Valentina M.', stars: 5, text: 'Arreglaron mi nevera en una visita. Fueron sinceros con el presupuesto y cumplieron el tiempo.' },
  { name: 'Ricardo F.', stars: 4.5, text: 'Cambio de tarjeta de control y sensores. Quedó perfecto y pagué lo acordado. Buena comunicación.' },
  { name: 'Paola T.', stars: 5, text: 'Servicio de emergencia en fin de semana. Llegaron rápido y el aire volvió a enfriar enseguida.' },
  { name: 'Miguel D.', stars: 5, text: 'Instalaron un aire nuevo con garantía. Explicaron el uso y cuidados. Muy atentos.' },
  { name: 'Camila S.', stars: 5, text: 'Mi aire no arrancaba. Por fin alguien que lo soluciona sin excusas. Precio justo.' },
]
const fourRandom = computed(() => items
  .map(v => ({ v, r: Math.random() }))
  .sort((a, b) => a.r - b.r)
  .slice(0, 4)
  .map(x => x.v))
</script>

<template>
  <section class="testimonials container">
    <h2><i-tabler-quote style="vertical-align:-2px; margin-right:6px" /> {{ t('footer.testimonials') || 'Testimonios' }}
    </h2>
    <div class="grid">
      <article v-for="t in fourRandom" :key="t.name" class="card">
        <p class="text">“{{ t.text }}”</p>
        <div class="name">— {{ t.name }} <span class="stars">{{ '★'.repeat(Math.floor(t.stars)) }}<span
              v-if="t.stars % 1">½</span></span></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 32px)
}

.testimonials {
  padding-block: 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px
}

.card {
  background: #ffffff;
  border: 1px solid #d7dfe6;
  border-radius: 10px;
  padding: 12px
}

.text {
  font-size: .98rem;
  line-height: 1.5
}

.name {
  margin-top: 8px;
  font-weight: 600;
  color: #0e2946
}

.stars {
  margin-left: 6px;
  color: #f0a500
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr)
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr)
  }
}

@media (max-width: 520px) {
  .grid {
    grid-template-columns: 1fr
  }
}
</style>
