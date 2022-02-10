<script setup lang="ts">
import { useDarkMode } from "~/stores/darkMode";
const darkMode = useDarkMode();

if (!process.server) {
  if (darkMode.isNull) {
    darkMode.setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
}

// const { data } = await useLazyAsyncData("live-on-twitch", () =>
//   $fetch("/api/live-on-twitch")
// );
</script>

<template>
  <NuxtLayout
    class="bg-light-900 dark:bg-dark-600 dark:text-light-900 text-dark-600 bg-dino"
  >
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.bg-dino {
  background-image: url("~/assets/images/bg/dinos_30.png");
  background-repeat: repeat;
  background-position: 50% 0;
  background-size: center;
}
</style>
