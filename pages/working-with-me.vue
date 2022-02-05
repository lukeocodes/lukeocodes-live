<template>
  <section>
    <header>
      <nav>
        <ul class="flex space-x-3">
          <li><NuxtLink to="/working-with-me">Generally</NuxtLink></li>
          <li>
            <NuxtLink to="/working-with-me/manager">As my manager</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/working-with-me/colleague">As my colleague</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/working-with-me/report">As my report</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtNestedPage />
  </section>
</template>
