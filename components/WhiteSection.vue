<template>
    <section class="bg-[#161616] flex justify-center pb-16">
        <div class="relative overflow-hidden z-0 testimonial-card max-w-6xl mx-auto text-center px-6 group">
            <div class="bg-[#DDDDDD] border border-[#636363] py-20 px-20 relative overflow-hidden">
                <!-- Glowing overlay -->
                <div class="glow absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>

                <!-- Text Content -->
                <div class="flex flex-col items-center relative z-10">
                    <h2 class="text-4xl font-bold text-black">{{ title }}</h2>
                    <p class="text-gray-700 my-6">{{ description }}</p>

                    <!-- Call-to-Action Buttons -->
                    <div class="flex justify-center gap-4 mt-6">
                        <a :href="primaryLink"
                            class="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-500">
                            {{ primaryText }}
                        </a>
                        <a :href="secondaryLink"
                            class="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-500">
                            {{ secondaryText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

defineProps({
    title: String,
    description: String,
    primaryText: String,
    primaryLink: String,
    secondaryText: String,
    secondaryLink: String
});

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
