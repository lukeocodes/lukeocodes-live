<script setup>
import { useDarkMode } from "~/stores/darkMode";
const store = useDarkMode();
</script>

<template>
  <div
    :class="store.isDark ? 'dark' : ''"
    class="flex flex-col h-screen bg-light-600 dark:bg-dark-600"
  >
    <StructureHeader />

    <main role="main" class="flex-grow">
      <div class="max-w-screen-xl mx-auto">
        <NavBreadcrumbs />
        <slot />
      </div>
    </main>

    <StructureFooter />
  </div>
</template>
