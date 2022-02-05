<script setup lang="ts">
const route = useRoute();
const router = useRouter();
</script>

<script lang="ts">
export default {
  methods: {
    getBreadcrumbs() {
      const fullPath = this.route.path;
      const requestPath = fullPath.startsWith("/")
        ? fullPath.substring(1)
        : fullPath;
      const crumbs = requestPath.split("/");
      const breadcrumbs = [];

      let path = "";

      crumbs.forEach((crumb, index) => {
        if (crumb) {
          path = `${path}/${crumb}`;
          const breadcrumb = this.router
            .getRoutes()
            .find((route) => route.path === path);

          if (breadcrumb) {
            breadcrumbs.push(breadcrumb);
          }
        }
      });

      return breadcrumbs;
    },
  },
};
</script>

<template>
  <nav>
    <ul class="flex space-x-2">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-for="(breadcrumb, index) in getBreadcrumbs()" :key="index">
        <NuxtLink :to="breadcrumb.path">{{ breadcrumb.meta.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
