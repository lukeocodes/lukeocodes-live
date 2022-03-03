<template>
  <!-- <NavAnnouncement /> -->
  <StructureHeader class="z-10" />

  <main role="main" class="relative">
    <div v-if="!$route.meta.nobreadcrumb">
      <NavBreadcrumbs class="max-w-screen-xl" />
    </div>
    <div>
      <slot />
    </div>
  </main>

  <StructureFooter class="z-10" />
</template>
