<template>
  <HeaderSection />
  <HeroSection />
  <CarouselSection :images="[
    { src: '/Synth/assets/figma.png', alt: 'Figma Logo', link: 'https://www.figma.com/' },
    { src: '/Synth/assets/infosys.png', alt: 'Infosys Logo', link: 'https://www.infosys.com/' },
    { src: '/Synth/assets/mercedes.png', alt: 'Mercedes Logo', link: 'https://www.mercedes-benz.com/' },
    { src: '/Synth/assets/sap.png', alt: 'SAP Logo', link: 'https://www.sap.com/' },
    { src: '/Synth/assets/societe-generale.png', alt: 'Societe Generale Logo', link: 'https://www.societegenerale.com/' },
    { src: '/Synth/assets/spotify.png', alt: 'Spotify Logo', link: 'https://www.spotify.com/' },
    { src: '/Synth/assets/sap.png', alt: 'SAP Logo', link: 'https://www.sap.com/' },
    { src: '/Synth/assets/societe-generale.png', alt: 'Societe Generale Logo', link: 'https://www.societegenerale.com/' },
    { src: '/Synth/assets/spotify.png', alt: 'Spotify Logo', link: 'https://www.spotify.com/' }
  ]" />
  <WhatWeOfferSection />
  <ProcessSection />
  <AiToolSection />
  <ConsultancySection />
  <StoriesSection />
  <TestimonialSection imageSrc="assets/stephan.png" personName="Stephan Ryckeboer" personTitle="Head of Growth"
    quoteTitle="Simplicity takes effort"
    quoteText="It takes real effort to cut through the noise and get to what matters. But that’s where momentum begins. At SiteSynth, we believe clarity is a competitive advantage. That’s why we work to make the complex simple — and the simple successful."
    ctaText="Get in touch" ctaLink="#" class="pb-[8rem]" />
  <FooterSection />
</template>

<script setup>
// All logic will be in components
</script>
