// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'static',
  },
  app: {
    buildAssetsDir: 'assets',
    baseURL: '/Synth/',
  }
})
