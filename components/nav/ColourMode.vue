<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/outline/index.js";
// import { useDarkMode } from "~/stores/darkMode";

// const darkMode = useDarkMode();
</script>

<template>
  <!-- <button
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
  </button> -->
  <select
    v-model="$colorMode.preference"
    class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
  >
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>
