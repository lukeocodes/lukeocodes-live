import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  publicRuntimeConfig: {
    BASE_URL: process.env.URL,
  },
  privateRuntimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENT_ENV_ID: process.env.CONTENT_ENV_ID,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
  },
  tailwindcss: {
    jit: true,
    exposeConfig: true,
  },
  colorMode: {
    classSuffix: "",
  },
});
