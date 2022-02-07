import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],
});
