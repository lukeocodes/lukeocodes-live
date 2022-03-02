<script setup lang="ts">
import { useDarkMode } from "~/stores/darkMode";
const darkMode = useDarkMode();
</script>

<template>
  <div>
    <Html>
      <Body :class="darkMode.isDark ? 'dark' : ''" />
    </Html>

    <StructureHeader />

    <main role="main" class="relative">
      <div v-if="!$route.meta.nobreadcrumb">
        <NavBreadcrumbs class="max-w-screen-xl" />
      </div>
      <div>
        <slot />
      </div>
    </main>

    <StructureFooter />
  </div>
</template>
