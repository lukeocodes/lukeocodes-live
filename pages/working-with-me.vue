<template>
  <section>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/working-with-me">Generally</NuxtLink></li>
          <li>
            <NuxtLink to="/working-with-me/manager">As my Manager</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/working-with-me/colleague">As a Colleague</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/working-with-me/report">As my Report</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtNestedPage />
  </section>
</template>

<style scoped>
nav > ul {
  @apply flex justify-center space-x-1;
}

nav > ul > li {
  @apply text-gray-600 dark:text-gray-300;
}

nav > ul > li:not(:first-child)::before {
  content: "•";
  @apply mr-1;
}

nav > ul > li > a {
  @apply text-dark-600 dark:text-light-600 pr-1 py-1;
}

nav > ul > li:not(:first-child) > a {
  @apply pl-1;
}
</style>
