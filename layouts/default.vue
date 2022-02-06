<script setup lang="ts">
import { useDarkMode } from "~/stores/darkMode";
const darkMode = useDarkMode();

if (!process.server) {
  if (darkMode.isNull) {
    darkMode.setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-light-600 dark:bg-dark-600 dark:text-light-600 text-dark-600"
  >
    <Html>
      <Body :class="darkMode.isDark ? 'dark' : ''" />
    </Html>

    <StructureHeader />

    <main role="main" class="flex-grow">
      <div
        class="max-w-screen-xl mx-auto text-xs"
        v-if="!$route.meta.nobreadcrumb"
      >
        <NavBreadcrumbs class="max-w-screen-xl" />
      </div>
      <div class="max-w-screen-xl mx-auto">
        <slot />
      </div>
    </main>

    <StructureFooter />
  </div>
</template>
