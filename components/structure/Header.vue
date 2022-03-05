<template>
  <header
    class="fixed w-full bg-gradient-to-b from-white dark:from-gray-900 to-white/50 dark:to-gray-900/80"
  >
    <div class="flex py-3 h-12">
      <NavColourMode />
      <NavMain class="lg:block" />
      <NavTwitch class="lg:block" />
      <NavDraw class="block lg:hidden" />
    </div>
  </header>
</template>
