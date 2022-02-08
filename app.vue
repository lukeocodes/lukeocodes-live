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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
