// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // title:
      //   process.env.NODE_ENV === "development"
      //     ? "Pdaftar - Test"
      //     : "Pdaftar Pro",
      title: "Pdaftar",
      titleTemplate: "%s | Qarzlarni oson boshqaring",
    },
  },
  $development: {
    app: {
      head: {
        title: "Pdaftar - Dev",
      },
    },
  },
  $production: {
    app: {
      head: {
        title: "Pdaftar - Pro",
      },
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
