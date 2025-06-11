<template>
  <!-- Carousel Section -->
  <section class="relative bg-[#161616] pt-[4rem] pb-[4rem] border-t border-b border-[#636363]">
    <!-- Left Transparent Overlay -->
    <div class="absolute top-0 left-0 w-70 h-full bg-gradient-to-r from-[#161616] to-transparent pointer-events-none z-10 fade-left"></div>
    <!-- Right Transparent Overlay -->
    <div class="absolute top-0 right-0 w-70 h-full bg-gradient-to-l from-[#161616] to-transparent pointer-events-none z-10"></div>
    <div class="swiper pictures-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/figma.png" alt="Placeholder 1" /></div>
        <div class="swiper-slide"><img src="/assets/infosys.png" alt="Placeholder 2" /></div>
        <div class="swiper-slide"><img src="/assets/mercedes.png" alt="Placeholder 3" /></div>
        <div class="swiper-slide"><img src="/assets/sap.png" alt="Placeholder 4" /></div>
        <div class="swiper-slide"><img src="/assets/societe-generale.png" alt="Placeholder 5" /></div>
        <div class="swiper-slide"><img src="/assets/spotify.png" alt="Placeholder 6" /></div>
        <div class="swiper-slide"><img src="/assets/sap.png" alt="Placeholder 7" /></div>
        <div class="swiper-slide"><img src="/assets/societe-generale.png" alt="Placeholder 8" /></div>
        <div class="swiper-slide"><img src="/assets/spotify.png" alt="Placeholder 8" /></div>
        <div class="swiper-slide"><img src="/assets/mercedes.png" alt="Placeholder 8" /></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.Swiper) {
    new window.Swiper('.pictures-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 6, spaceBetween: 30 },
      },
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
})
</script>
