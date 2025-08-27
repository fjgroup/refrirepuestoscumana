<script setup lang="ts"></script>

<template>
  <section class="container pad">
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.blurb') }}</p>
    <h2>{{ $t('about.missionTitle') }}</h2>
    <p>{{ $t('about.mission') }}</p>

    <h2>{{ $t('about.visionTitle') }}</h2>
    <p>{{ $t('about.vision') }}</p>

    <h2>{{ $t('about.valuesTitle') }}</h2>
    <p>{{ $t('about.values') }}</p>
  </section>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 32px)
}

.pad {
  padding: 32px 0
}

/* Mejor legibilidad en párrafos largos: justificado suave con guiones automáticos */
p {
  text-align: justify;
  text-wrap: pretty;
  hyphens: auto
}

/* Encabezados con balance para evitar saltos feos en móviles */
h1,
h2 {
  text-wrap: balance
}
</style>
