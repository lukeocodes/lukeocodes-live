<template>
  <NavAnnouncement />
  <StructureHeader />

  <main role="main" class="relative">
    <div v-if="!$route.meta.nobreadcrumb">
      <NavBreadcrumbs class="max-w-screen-xl" />
    </div>
    <div>
      <slot />
    </div>
  </main>

  <StructureFooter />
</template>
