<template>
  <section class="border-b border-[#636363] bg-[#161616]">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
      <!-- Left Column -->
      <div class="border-r border-[#636363] py-12 pr-12">
        <!-- Discover Section (VISIBLE by default) -->
        <div class="toggle-section">
          <h3 :class="['flex items-center justify-between cursor-pointer', openIndex === 0 ? 'text-white text-2xl font-bold' : 'text-[#636363] text-xl font-semibold']" @click="toggle(0)">
            Discover
            <span class="text-[#8CB0FF] toggle-btn">{{ openIndex === 0 ? '−' : '+' }}</span>
          </h3>
          <div class="toggle-content transition-all duration-500 ease-in-out overflow-hidden" :class="openIndex === 0 ? 'max-h-[500px]' : 'max-h-0'">
            <p class="text-[#636363] mt-2">
              We dive into your business goals, users, and context.
            </p>
            <a href="#" class="text-[#8CB0FF] font-semibold mt-4 inline-block pb-8 hover:text-[#A620FF] transition-colors duration-1000">
              Tell us your story first -&gt;
            </a>
          </div>
        </div>
        <!-- Define Section -->
        <div class="toggle-section border-t border-[#636363] pt-4 mt-4">
          <h3 :class="['flex items-center justify-between cursor-pointer', openIndex === 1 ? 'text-white text-xl font-semibold' : 'text-[#636363] text-xl font-semibold']" @click="toggle(1)">
            Define
            <span class="text-[#8CB0FF] toggle-btn">{{ openIndex === 1 ? '−' : '+' }}</span>
          </h3>
          <div class="toggle-content transition-all duration-500 ease-in-out overflow-hidden" :class="openIndex === 1 ? 'max-h-[500px]' : 'max-h-0'">
            <p class="text-[#999999]">We clarify the challenge and craft a shared direction.</p>
            <p class="text-[#8CB0FF] font-semibold mt-4 inline-block pb-8 hover:text-[#A620FF] transition-colors duration-1000">
              <a href="#">How connect brand and product</a>
            </p>
          </div>
        </div>
        <!-- Design Section -->
        <div class="toggle-section border-t border-[#636363] pt-4 mt-4">
          <h3 :class="['flex items-center justify-between cursor-pointer', openIndex === 2 ? 'text-white text-xl font-semibold' : 'text-[#636363] text-xl font-semibold']" @click="toggle(2)">
            Design
            <span class="text-[#8CB0FF] toggle-btn">{{ openIndex === 2 ? '−' : '+' }}</span>
          </h3>
          <div class="toggle-content transition-all duration-500 ease-in-out overflow-hidden" :class="openIndex === 2 ? 'max-h-[500px]' : 'max-h-0'">
            <p class="text-[#999999]">Systems, visuals, and flows — always aligned.</p>
            <p class="text-[#8CB0FF] font-semibold mt-4 inline-block pb-8 hover:text-[#A620FF] transition-colors duration-1000">
              <a href="#">How we build design systems</a>
            </p>
          </div>
        </div>
        <!-- Deliver Section -->
        <div class="toggle-section border-t border-[#636363] border-b pt-4 mt-4 pb-4">
          <h3 :class="['flex items-center justify-between cursor-pointer', openIndex === 3 ? 'text-white text-xl font-semibold' : 'text-[#636363] text-xl font-semibold']" @click="toggle(3)">
            Deliver
            <span class="text-[#8CB0FF] toggle-btn">{{ openIndex === 3 ? '−' : '+' }}</span>
          </h3>
          <div class="toggle-content transition-all duration-500 ease-in-out overflow-hidden" :class="openIndex === 3 ? 'max-h-[500px]' : 'max-h-0'">
            <p class="text-[#999999]">Systems, visuals, and flows — always aligned.</p>
            <p class="text-[#8CB0FF] font-semibold mt-4 inline-block pb-8 hover:text-[#A620FF] transition-colors duration-1000">
              <a href="#">How we bring designs to life</a>
            </p>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="">
        <img :src="`${config.app.baseURL}/assets/gitest.png`" alt="Synth">
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
import { ref } from 'vue'

// 0: Discover, 1: Define, 2: Design, 3: Deliver
const openIndex = ref(0)

function toggle(idx) {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>
