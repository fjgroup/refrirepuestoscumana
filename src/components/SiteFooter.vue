<script setup lang="ts"></script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="brand">REFRIREPUESTOSCUMANÁ</div>
      <div class="contact">
        <div><i-tabler-map-pin style="vertical-align:-2px; margin-right:6px" />5532 Fishermans Drive, Bradenton, Florida
        </div>
        <div><i-tabler-phone style="vertical-align:-2px; margin-right:6px" />Tel: <a href="tel:9412424040">941 242
            4040</a></div>
      </div>
      <div class="social">
        <span>{{ $t('footer.follow') }}:</span>
        <a href="https://www.instagram.com/refrirepuestoscumana" target="_blank"
          rel="noopener"><i-tabler-brand-instagram style="vertical-align:-2px; margin-right:6px" />Instagram</a>
        <a href="https://www.facebook.com/p/Refri-Repuestos-Cumana-C-A-100063886250531/" target="_blank"
          rel="noopener"><i-tabler-brand-facebook style="vertical-align:-2px; margin-right:6px" />Facebook</a>
        <a href="https://api.whatsapp.com/send?phone=5804148408202" target="_blank"
          rel="noopener"><i-tabler-brand-whatsapp style="vertical-align:-2px; margin-right:6px" />WhatsApp</a>
      </div>
      <div class="copy">© {{ new Date().getFullYear() }} REFRIREPUESTOSCUMANÁ — {{ $t('footer.rights') }}</div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #0a1c30;
  color: #cfe9ff;
  padding: 24px 16px;
  border-top: 1px solid rgba(255, 255, 255, .08)
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.brand {
  font-weight: 700;
  letter-spacing: .4px;
  margin-bottom: 8px
}

.contact a {
  color: #cfe9ff
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 10px 0
}

.social a {
  color: #76c7ff;
  text-decoration: none
}

.copy {
  opacity: .7;
  font-size: .9rem;
  margin-top: 8px
}
</style>
