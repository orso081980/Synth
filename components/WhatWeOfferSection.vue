<style scoped>
.glow {
  background: radial-gradient(
    circle at var(--pos, 50% 50%),
    rgba(0, 102, 255, 0.25),
    rgba(166, 32, 255, 0.25),
    transparent 60%
  );
  mask-image: radial-gradient(circle at var(--pos, 50% 50%), black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(circle at var(--pos, 50% 50%), black 0%, transparent 70%);
  filter: blur(40px);
  transition: opacity 0.3s ease;
  pointer-events: none;
}
</style>
<template>
  <section class="text-center py-20 bg-[#161616]">
    <h2 class="text-4xl text-white">What We Offer</h2>
  </section>
  <section class="border-t border-b border-[#636363] bg-[#161616]">
    <div class="max-w-6xl mx-auto px-6">
      <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="column-box group relative overflow-hidden z-0 border border-[#636363] p-6 py-12 cursor-pointer bg-[#161616] hover:bg-white/10 transition-colors duration-300">
          <!-- Glow overlay -->
          <div class="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 glow">
          </div>
          <!-- Content -->
          <img src="/assets/frame-1.svg" alt="Placeholder" class="mb-4 w-auto max-w-full" />
          <h3 class="text-xl font-semibold text-white pt-6 pb-8">Brand-Led Product Thinking</h3>
          <p class="text-[#999999] mt-2">
            We help you build digital products that are strategically aligned with your brand voice and vision.
          </p>
        </div>
        <div class="column-box group relative overflow-hidden z-0 border border-[#636363] p-6 py-12 cursor-pointer bg-[#161616] hover:bg-white/10 transition-colors duration-300">
          <!-- Glow overlay -->
          <div class="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 glow">
          </div>
          <!-- Content -->
          <img src="/assets/frame-2.svg" alt="Placeholder" class="mb-4 w-auto max-w-full" />
          <h3 class="text-xl font-semibold text-white pt-6 pb-8">Design Systems & UX Architecture</h3>
          <p class="text-[#999999] mt-2">
            We craft scalable design systems and UX flows that bridge user needs and developer logic.
          </p>
        </div>
        <div class="column-box group relative overflow-hidden z-0 border border-[#636363] p-6 py-12 cursor-pointer bg-[#161616] hover:bg-white/10 transition-colors duration-300">
          <!-- Glow overlay -->
          <div class="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 glow">
          </div>
          <!-- Content -->
          <img src="/assets/frame-3.svg" alt="Placeholder" class="mb-4 w-auto max-w-full" />
          <h3 class="text-xl font-semibold text-white pt-6 pb-8">Full-Stack Implementation Support</h3>
          <p class="text-[#999999] mt-2">
            From prototypes to production, we collaborate closely with your dev team — or bring our own.
          </p>
        </div>
        <div class="column-box group relative overflow-hidden z-0 border border-[#636363] p-6 py-12 cursor-pointer bg-[#161616] hover:bg-white/10 transition-colors duration-300">
          <!-- Glow overlay -->
          <div class="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 glow">
          </div>
          <!-- Content -->
          <img src="/assets/frame-4.svg" alt="Placeholder" class="mb-4 w-auto max-w-full" />
          <h3 class="text-xl font-semibold text-white pt-6 pb-8">AI-Infused Innovation & R&D</h3>
          <p class="text-[#999999] mt-2">
            We bring forward-thinking, AI-powered tooling into the design and development process.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const boxes = document.querySelectorAll('.column-box')

  const handlePointerMove = (e, box, glow) => {
    const rect = box.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100
    glow.style.setProperty('--pos', `${xPercent}% ${yPercent}%`)
  }

  boxes.forEach(box => {
    const glow = box.querySelector('.glow')
    if (!glow) return

    const listener = (e) => handlePointerMove(e, box, glow)
    box.addEventListener('pointermove', listener)
    box._glowListener = listener
  })
})

onBeforeUnmount(() => {
  const boxes = document.querySelectorAll('.column-box')
  boxes.forEach(box => {
    if (box._glowListener) {
      box.removeEventListener('pointermove', box._glowListener)
    }
  })
})

</script>
