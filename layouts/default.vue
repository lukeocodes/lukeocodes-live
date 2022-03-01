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

    <main role="main">
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
