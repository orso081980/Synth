<template>
  <section class="bg-[#161616] flex justify-center">
    <div class="max-w-6xl mx-auto px-6">
      <div ref="card" class="grid grid-cols-1 md:grid-cols-3 gap-8 relative border border-[#636363] py-14 group overflow-hidden">
        <!-- Glowing overlay -->
        <div class="glow absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          :style="{ '--pos': glowPos }"></div>
        <!-- Left Column (1/3) -->
        <div class="flex flex-col items-center text-center">
          <img :src="imageSrc" :alt="personName" class="mb-4 w-auto max-w-[150px]" />
          <h4 class="text-xl font-semibold text-white">{{ personName }}</h4>
          <p class="text-gray-300 mt-2">{{ personTitle }}</p>
        </div>
        <!-- Right Column (2/3) -->
        <div class="md:col-span-2 flex flex-col justify-center px-6">
          <i class="text-6xl text-[#A620FF] fa-solid fa-quote-left"></i>
          <h3 class="text-2xl font-bold text-white mt-4 mb-6">{{ quoteTitle }}</h3>
          <p class="text-gray-300">
            "{{ quoteText }}"
          </p>
          <a :href="ctaLink" class="mt-6 w-auto max-w-max px-4 py-2 button btn-2 text-white font-semibold">
            <span>{{ ctaText }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  imageSrc: String,
  personName: String,
  personTitle: String,
  quoteTitle: String,
  quoteText: String,
  ctaText: String,
  ctaLink: String
})

const card = ref(null)
const glowPos = ref('50% 50%')

function onPointerMove(e) {
  const rect = card.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const xPercent = (x / rect.width) * 100
  const yPercent = (y / rect.height) * 100
  glowPos.value = `${xPercent}% ${yPercent}%`
}

onMounted(() => {
  card.value.addEventListener('pointermove', onPointerMove)
})

onBeforeUnmount(() => {
  if (card.value) card.value.removeEventListener('pointermove', onPointerMove)
})
</script>

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
