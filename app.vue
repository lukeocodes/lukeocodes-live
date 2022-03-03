<script setup lang="ts">
// import { useDarkMode } from "~/stores/darkMode";
// const darkMode = useDarkMode();

// if (!process.server) {
//   if (darkMode.isNull) {
//     darkMode.setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
//   }
// }

const config = useRuntimeConfig();

// const { data } = await useLazyAsyncData("live-on-twitch", () =>
//   $fetch("/api/live-on-twitch")
// );
</script>

<template>
  <NuxtLayout>
    <Html lang="en-GB">
      <Head>
        <Title>@lukeocodes Live - Personal site and blog for Luke Oliff</Title>
        <Meta
          name="description"
          content="Personal site and blog for Luke Oliff. Digital garden of programming tips and tricks I've found. Nuxt and Vue component example library."
        />
        <Link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Link rel="manifest" href="/site.webmanifest" />
        <Link rel="canonical" :href="`${config.BASE_URL}${$route.fullPath}`" />
      </Head>
    </Html>
    <Body class="dark:bg-gray-800 dark:text-gray-200" />

    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.bg-dino {
  background-image: url("~/assets/images/bg/dinos_30.png");
  background-repeat: repeat;
  background-position: 50% 0;
  background-size: center;
}
</style>
