<script setup lang="ts">
const mainRoutes = useRouter()
  .getRoutes()
  .filter((r) => "main" in r.meta)
  .sort((a, b) => a.meta.main.position - b.meta.main.position);

const ariaCurrent = (index) =>
  index === mainRoutes.length - 1 ? "page" : "false";
</script>

<template>
  <nav aria-label="Primary navigation">
    <ul class="flex justify-end space-x-3">
      <li v-for="(route, index) in mainRoutes" :key="index">
        <NuxtLink
          :to="route.path"
          class="px-2 py-1"
          :aria-current="ariaCurrent(index)"
        >
          {{ route.meta.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
