<script setup lang="ts"></script>

<template>
  <section class="container pad">
    <h1>{{ $t('contact.title') }}</h1>
    <div class="card">
      <div><i-tabler-map-pin style="vertical-align:-2px; margin-right:6px" /> <strong>{{ $t('contact.address')
      }}:</strong> 5532 Fishermans Drive, Bradenton, Florida</div>
      <div><i-tabler-phone style="vertical-align:-2px; margin-right:6px" /> <strong>{{ $t('contact.phone') }}:</strong>
        <a href="tel:9412424040">941 242 4040</a>
      </div>
      <div><i-tabler-clock style="vertical-align:-2px; margin-right:6px" /> <strong>{{ $t('contact.hours') }}:</strong>
        {{ $t('contact.hoursValue') }}</div>
    </div>
    <div class="map-wrap">
      <iframe class="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=5532%20Fishermans%20Drive%2C%20Bradenton%2C%20Florida&output=embed"></iframe>
    </div>
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

.card {
  background: #f0f7ff;
  color: #0a1c30;
  padding: 16px;
  border-radius: 8px
}

.map-wrap {
  margin-top: 12px;
  border: 1px solid #c3d9ee;
  border-radius: 8px;
  overflow: hidden
}

.map {
  width: 100%;
  height: 360px;
  border: 0
}
</style>
