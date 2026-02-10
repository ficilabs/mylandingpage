import mkcert from 'vite-plugin-mkcert'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@storyblok/nuxt', '@nuxt/image'],

  /* HTTPS DEV SERVER (Vite) */
  vite: {
    plugins: [
      mkcert()
    ],
  },

  runtimeConfig: {
    public: {
      storyblokToken: process.env.STORYBLOK_DELIVERY_API_TOKEN
    }
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
    apiOptions: {
      region: 'eu'
    }
  },

  css: ['~/assets/css/main.css'],

  components: true
})