<script lang="ts" setup>
definePageMeta({
  title: "Home",
  main: { position: 0 },
  nobreadcrumb: true,
});

const { data: hello } = await useFetch("/api/hello");
</script>

<template>
  <section>{{ hello }}</section>
</template>
