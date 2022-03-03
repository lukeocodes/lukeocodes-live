<script setup>
const open = ref(false);
</script>

<template>
  <header class="sticky flex">
    <NavColourMode />
    <NavMain class="lg:block" :class="{ block: open, hidden: !open }" />
    <NavTwitch class="lg:block" :class="{ block: open, hidden: !open }" />
    <NavDraw class="block lg:hidden" @click="open = !open" />
  </header>
</template>
