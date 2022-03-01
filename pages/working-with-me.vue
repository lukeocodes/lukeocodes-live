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

<style scoped></style>
