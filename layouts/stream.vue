<script setup lang="ts">
import { useDarkMode } from "~/stores/darkMode";
const darkMode = useDarkMode();
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-light-600 dark:bg-dark-600 dark:text-light-600 text-dark-600"
  >
    <Html>
      <Body :class="darkMode.isDark ? 'dark' : ''" />
    </Html>

    <div class="flex-grow"></div>
    <StructureFooter />
  </div>
</template>
