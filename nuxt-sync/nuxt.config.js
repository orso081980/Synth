// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'static', // 💡 this is key!
  },
  app: {
    baseURL: '/Synth/', // 💡 repo name here!
  }
})
