<template>
  <nav aria-label="Primary navigation">
    <ul class="flex flex-row-reverse space-x-3 space-x-reverse mt-2">
      <li>
        <NuxtLink to="/garden" class="px-2 py-1" tabindex="3">
          Digital Garden
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/working-with-me" class="px-2 py-1" tabindex="2">
          Working with me
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/live" class="px-2 py-1" tabindex="1"> Live </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
