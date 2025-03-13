import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  srcDir: "src/",
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    dir: "assets/images",
    domains: ['i.annihil.us'],
    provider: "ipx"
  },

  runtimeConfig: {
    marvelPrivateKey: process.env.MARVEL_PRIVATE_KEY,
    public: {
      baseUrl: process.env.BASE_URL,
      marvelPublicKey: process.env.MARVEL_PUBLIC_KEY,
    },
  },
});
