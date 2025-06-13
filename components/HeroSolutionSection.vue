<template>
  <section ref="cardGroup" class="relative bg-[#161616] text-white group overflow-hidden">
    <!-- Glow overlay (on entire section) -->
    <div
      class="glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      :style="{ '--pos': glowPos }"
    ></div>

    <div class="relative max-w-6xl mx-auto px-6 pt-[16rem] pb-[12rem]">
      <!-- Hero -->
      <div class="text-center px-6">
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-10">
          Build products that feel as good as they function.
        </h1>
        <p class="text-base sm:text-lg font-medium mb-8">
          Your brand - is your language.<br>
          We embed your brand’s voice, values, and character into your digital product from day one.
          We make sure every interaction feels intentional — not just usable, but unmistakably you.
        </p>
        <a href="#" class="inline-block mt-8 px-4 py-2 text-black bg-white font-semibold">
          <span>Do you know why?</span>
        </a>
      </div>

      <!-- Cards Grid -->
      <div class="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border border-[#636363] bg-[#ffffff14] p-6 py-12 flex flex-col justify-between cursor-pointer">
          <h3 class="text-xl font-semibold text-center pt-6 pb-8">🧭 Understand the Brand</h3>
          <p class="text-center text-[#999999] mt-2">
            We begin by distilling your brand’s essence — tone, values, and purpose — into clear, strategic inputs.
          </p>
          <div class="text-center mt-4">
            <a href="#" class="text-[#8CB0FF] font-semibold hover:text-[#A620FF] transition-colors duration-1000">Read more →</a>
          </div>
        </div>

        <div class="border border-[#636363] bg-[#ffffff14] p-6 py-12 flex flex-col justify-between cursor-pointer">
          <h3 class="text-xl font-semibold text-center pt-6 pb-8">🎨 Translate into Product Experience</h3>
          <p class="text-center text-[#999999] mt-2">
            We map your brand into UX flows, content, and behaviors — ensuring consistency across interactions.
          </p>
          <div class="text-center mt-4">
            <a href="#" class="text-[#8CB0FF] font-semibold hover:text-[#A620FF] transition-colors duration-1000">Read more →</a>
          </div>
        </div>

        <div class="border border-[#636363] bg-[#ffffff14] p-6 py-12 flex flex-col justify-between cursor-pointer">
          <h3 class="text-xl font-semibold text-center pt-6 pb-8">🤝 Align Across Teams</h3>
          <p class="text-center text-[#999999] mt-2">
            We work across product, design, and marketing — no silos, just shared clarity.
          </p>
          <div class="text-center mt-4">
            <a href="#" class="text-[#8CB0FF] font-semibold hover:text-[#A620FF] transition-colors duration-1000">Read more →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const cardGroup = ref(null)
const glowPos = ref('50% 50%')

const handlePointerMove = (e) => {
    const rect = cardGroup.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100
    glowPos.value = `${xPercent}% ${yPercent}%`
}

onMounted(() => {
    if (cardGroup.value) {
        cardGroup.value.addEventListener('pointermove', handlePointerMove)
    }
})

onBeforeUnmount(() => {
    if (cardGroup.value) {
        cardGroup.value.removeEventListener('pointermove', handlePointerMove)
    }
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
    z-index: 0;
}
</style>
