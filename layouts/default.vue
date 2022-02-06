<script setup>
import { useDarkMode } from "~/stores/darkMode";
const darkMode = useDarkMode();
</script>

<template>
  <div
    class="flex flex-col h-screen bg-light-600 dark:bg-dark-600 dark:text-light-600 text-dark-600"
  >
    <Html>
      <Body :class="darkMode.isDark ? 'dark' : ''" />
    </Html>

    <StructureHeader />

    <main role="main" class="flex-grow">
      <div class="max-w-screen-xl mx-auto text-xs">
        <NavBreadcrumbs class="max-w-screen-xl" />
      </div>
      <div class="max-w-screen-xl mx-auto">
        <slot />
      </div>
    </main>

    <StructureFooter />
  </div>
</template>

<style>
* {
  outline: red 1px solid;
}
</style>
