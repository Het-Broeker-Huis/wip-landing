// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap",
        },
      ],
      bodyAttrs: {
        class: "text-swamp-green-900 antialiased",
      },
    },
  },
  colorMode: {
    preference: "light",
  },
  routeRules: {
    "/": { prerender: true },
  },
  compatibilityDate: "2024-09-18",
});
