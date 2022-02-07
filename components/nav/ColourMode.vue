<script setup>
import { SunIcon } from "@heroicons/vue/outline";
import { MoonIcon } from "@heroicons/vue/outline";
import { useDarkMode } from "~/stores/darkMode";

const darkMode = useDarkMode();
</script>

<template>
  <button @click="darkMode.toggle()">
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
