<script setup lang="ts">
interface Main {
  position: number;
}

const mainRoutes = useRouter()
  .getRoutes()
  .filter((r) => "main" in r.meta)
  .sort((a, b) => a.meta.main.position - b.meta.main.position);
</script>

<template>
  <nav aria-label="Primary navigation">
    <ul class="flex justify-end space-x-3">
      <li v-for="(route, index) in mainRoutes" :key="index">
        <NuxtLink :to="route.path" class="px-2 py-1" :tabindex="index + 1">
          {{ route.meta.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
