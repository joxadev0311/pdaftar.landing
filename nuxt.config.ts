// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true, // Server-side rendering yoqilgan
  app: {
    head: {
      title:
        process.env.NODE_ENV === "development"
          ? "Pdaftar - Test"
          : "Pdaftar Pro",
      titleTemplate: "%s | Qarzlarni oson boshqaring",
    },
  },
  css: ["@/assets/scss/main.scss"], // Global CSS fayllar
  modules: ["nuxt-swiper"], // Nuxt Swiper moduli
  devtools: { enabled: true }, // Ishlab chiqish vositalari yoqilgan
});
