<script setup lang="ts">
import { useDarkMode } from "~/stores/darkMode";
const darkMode = useDarkMode();
</script>

<template>
  <div class="flex flex-col min-h-screen">
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

<style scoped>
.bg-dino::before {
  /* z-index: -2; */
  content: " ";
  display: block;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-image: url("~/assets/images/bg/dinos.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
</style>
