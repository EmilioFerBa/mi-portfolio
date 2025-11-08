// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,        // opcional: si quieres prerenderizado
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/content'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    port: 3000
  },
  app: {
    baseURL: '/mi-portfolio/' // importante si GitHub Pages usa repo como subcarpeta
  },
  nitro: {
    preset: 'github_pages', // 👈 esto hace que genere correctamente /dist/
  }
})