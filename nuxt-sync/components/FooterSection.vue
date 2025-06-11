<template>
  <footer class="bg-[#161616] border-t border-[#636363] py-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left: Logo, tagline, socials -->
      <div class="flex flex-col items-start justify-between md:col-span-1">
        <div class="mb-6">
          <a href="/"><img src="/assets/synt-logo.svg" alt="Logo" class="h-10"></a>
          <p class="text-[#A3A3A3] text-base mt-[2rem] mb-[3rem]">No silos. Just synthesis.</p>
          <div class="flex space-x-6">
            <!-- LinkedIn -->
            <a href="#" aria-label="LinkedIn" class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition duration-1000">
              <i class="fab fa-linkedin text-xl text-white"></i>
            </a>
            <!-- Instagram -->
            <a href="#" aria-label="Instagram" class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#E4405F] hover:bg-[#E4405F] hover:text-white transition duration-1000 text-white">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <!-- YouTube -->
            <a href="#" aria-label="YouTube" class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FF0000] hover:bg-[#FF0000] hover:text-white transition duration-1000 text-white">
              <i class="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- Right: Menus -->
      <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <!-- Solutions -->
        <div>
          <h4 class="text-[#636363] font-normal mb-6">Solutions</h4>
          <ul class="space-y-2">
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">Brand-Driven Product Strategy</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">UX & Design Systems</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">Development Support</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">AI-Powered Workflows</a></li>
          </ul>
        </div>
        <!-- Company -->
        <div>
          <h4 class="text-[#636363] font-normal mb-6">Company</h4>
          <ul class="space-y-2">
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">About us</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">Careers</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">The SyteSynth blog</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">AI-Powered Workflows</a></li>
          </ul>
        </div>
        <!-- Contact Us -->
        <div>
          <h4 class="text-[#636363] font-normal mb-6">Contact us</h4>
          <ul class="space-y-2">
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="tel:+32 498 47 77 04">+32 498 47 77 04</a></li>
            <li class="text-white font-light transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="mailto:info@sitesynth.com">Info@sitesynth.com</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Bottom Footer Bar -->
    <div class="max-w-6xl mx-auto pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="text-white font-light text-left transition-colors duration-1000 hover:text-[#8CB0FF]"><a href="#">Privacy & Terms of Use</a></div>
      <div class="text-white font-light text-left md:text-right">© 2025 SyteSynth | All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed for static footer
</script>
