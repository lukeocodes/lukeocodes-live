<script lang="ts" setup>
definePageMeta({
  title: "Home",
  main: { position: 0 },
  nobreadcrumb: true,
});

const { data: hello } = useFetch("/api/hello");
</script>

<template>
  <PageIndexHero />
  <!-- <section>{{ hello }}</section>
  <InteractivePet />
  <BrandFace /> -->
</template>
