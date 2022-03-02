<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/outline/index.js";
import { useDarkMode } from "~/stores/darkMode";

const darkMode = useDarkMode();
</script>

<template>
  <button
    @click="darkMode.toggle()"
    aria-label="Dark mode enabled"
    role="switch"
    :aria-checked="darkMode.isDark ? 'true' : 'false'"
  >
    <SunIcon
      v-show="!darkMode.isDark"
      class="svg-icon stroke text-yellow-500"
      aria-hidden="true"
    />
    <MoonIcon
      v-show="darkMode.isDark"
      class="svg-icon stroke text-light-600"
      aria-hidden="true"
    />
  </button>
</template>
