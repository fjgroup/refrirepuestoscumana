<script setup lang="ts"></script>

<template>
  <section class="container pad">
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.blurb') }}</p>
    <h2>{{ $t('about.missionTitle') }}, {{ $t('about.visionTitle') }}, {{ $t('about.valuesTitle') }}</h2>
    <ul>
      <li><strong>{{ $t('about.missionTitle') }}:</strong> {{ $t('about.mission') }}</li>
      <li><strong>{{ $t('about.visionTitle') }}:</strong> {{ $t('about.vision') }}</li>
      <li><strong>{{ $t('about.valuesTitle') }}:</strong> {{ $t('about.values') }}</li>
    </ul>
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
</style>
