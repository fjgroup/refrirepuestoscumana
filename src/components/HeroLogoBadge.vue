<script setup lang="ts">
import logo from '@/logo_white.png'
</script>

<template>
  <div class="hero-badge" aria-hidden="true">
    <img :src="logo" alt="REFRIREPUESTOSCUMANÁ" />
  </div>
</template>

<style scoped>
.hero-badge{
  position:absolute; left:50%; transform:translateX(-50%);
  top:110px; width:180px; height:180px; border-radius:50%;
  /* círculo blanco con borde degradado hacia el azul del hero */
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.0) 78%);
  box-shadow: 0 6px 24px rgba(10,28,48,0.35);
  display:flex; align-items:center; justify-content:center;
  overflow:hidden;
}
.hero-badge img{ width:74%; height:auto; object-fit:contain; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2)) }
@media (max-width: 768px){ .hero-badge{ top:96px; width:150px; height:150px } }
</style>

