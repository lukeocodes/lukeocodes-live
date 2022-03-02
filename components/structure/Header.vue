<script setup>
const open = ref(false);
</script>

<template>
  <NavAnnouncement />
  <header class="flex justify-between lg:justify-start">
    <NavColourMode />
    <NavMain class="lg:block" :class="{ block: open, hidden: !open }" />
    <NavTwitch class="lg:block" :class="{ block: open, hidden: !open }" />
    <NavDraw class="block lg:hidden" @click="open = !open" />
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0));
}
</style>
