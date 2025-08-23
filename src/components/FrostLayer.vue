<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let anim: number | null = null

onMounted(() => {
  const canvas = document.getElementById('frost-canvas') as HTMLCanvasElement
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  const DPR = Math.min(2, window.devicePixelRatio || 1)

  function resize() {
    canvas.width = Math.floor(window.innerWidth * DPR)
    canvas.height = Math.floor(260 * DPR) // altura visible del hero aprox
    canvas.style.width = '100%'
    canvas.style.height = '260px'
  }
  resize()
  window.addEventListener('resize', resize)

  const flakes = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 10 + Math.random() * 8, // tamaño base de emoji
    vx: -0.2 + Math.random() * 0.4,
    vy: 0.5 + Math.random() * 0.7, // un poco más rápido para mejor fluidez
    a: Math.random() * Math.PI * 2,
  }))

  function drawCrystals() {
    ctx.font = `${14 * DPR}px system-ui, 'Apple Color Emoji', 'Segoe UI Emoji'`
    for (const f of flakes) {
      ctx.save()
      ctx.translate(f.x, f.y)
      ctx.rotate(f.a)
      ctx.fillText('❄️', 0, 0)
      ctx.restore()
    }
  }

  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // fondo con degradado frío sutil
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
    grad.addColorStop(0, 'rgba(118,199,255,0.12)')
    grad.addColorStop(1, 'rgba(10,28,48,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // animación de copos (emoji ❄️)
    for (const f of flakes) {
      f.x += f.vx * DPR
      f.y += f.vy * DPR
      f.a += 0.002
      if (f.y > canvas.height) { f.y = -10; f.x = Math.random() * canvas.width }
      if (f.x < -10) { f.x = canvas.width + 10 }
    }
    drawCrystals()
    anim = requestAnimationFrame(step)
  }
  anim = requestAnimationFrame(step)

  onBeforeUnmount(() => {
    if (anim) cancelAnimationFrame(anim)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <canvas id="frost-canvas" aria-hidden="true"></canvas>
</template>

<style scoped>
#frost-canvas {
  display: block;
  width: 100%;
  height: 260px;
  pointer-events: none
}
</style>
