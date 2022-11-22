// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css'
  ],
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    public: {
      datocms: {
        token: process.env.NUXT_ENV_DATOCMS_API_TOKEN,
      }
    }
  },
})
