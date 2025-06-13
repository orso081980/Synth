<style scoped>
.glow {
  background: radial-gradient(circle at var(--pos, 50% 50%),
      rgba(0, 102, 255, 0.4) 0%,
      rgba(0, 102, 255, 0.4) 2%,
      rgba(166, 32, 255, 0.3) 2%,
      rgba(166, 32, 255, 0.3) 25%,
      transparent 20%);
  mask-image: radial-gradient(circle at var(--pos, 50% 50%), black 0%, transparent 30%);
  -webkit-mask-image: radial-gradient(circle at var(--pos, 50% 50%), black 0%, transparent 30%);
  filter: blur(20px);
  transition: opacity 0.3s ease;
  pointer-events: none;
}
</style>

<template>
  <section class="text-center py-20 bg-[#161616]">
    <h2 class="text-4xl text-white">Use our AI-tool to</h2>
  </section>
  <section class="bg-[#161616] flex justify-center pb-16">
    <div class="w-6xl mx-auto px-6">
      <div
        class="relative overflow-hidden z-0 testimonial-card grid grid-cols-1 md:grid-cols-3 gap-8 border border-[#636363] py-24 group">

        <!-- Glowing overlay -->
        <div class="glow absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>
        <div class="flex flex-col items-center text-center">
          <a href="#"
            class="text-[#8CB0FF] font-semibold mt-4 inline-block pb-8 hover:text-[#A620FF] transition-colors duration-1000">
            <span>Discover more about our product</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let glowListener = null

onMounted(() => {
  const card = document.querySelector('.testimonial-card')
  const glow = card?.querySelector('.glow')
  if (!card || !glow) return

  const handlePointerMove = (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100
    glow.style.setProperty('--pos', `${xPercent}% ${yPercent}%`)
  }

  card.addEventListener('pointermove', handlePointerMove)
  glowListener = handlePointerMove
})

onBeforeUnmount(() => {
  const card = document.querySelector('.testimonial-card')
  if (card && glowListener) {
    card.removeEventListener('pointermove', glowListener)
  }
})

</script>
