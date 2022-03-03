<script setup lang="ts">
const isLive = true;

// const { status } = await this.$axios.$get("/api/live-on-twitch");
// this.open = status === "online";
</script>

<template>
  <nav aria-label="Primary navigation">
    <NuxtLink v-show="isLive" to="/live" class="px-2 py-1 live-on-twitch ml-3">
      <div class="light blink"></div>
      Live Now
    </NuxtLink>
    <NuxtLink v-show="!isLive" to="/live" class="px-2 py-1">
      Twitch Stream
    </NuxtLink>
  </nav>
</template>

<style scoped>
.live-on-twitch {
  @apply border border-black dark:border-white;
}
.light.blink {
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background: red;
  margin: 0px 2px -1px 0;
  display: inline-block;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes blink {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

.blink {
  -webkit-animation: blink 0.7s alternate infinite;
  -moz-animation: blink 0.7s alternate infinite;
  -ms-animation: blink 0.7s alternate infinite;
}
</style>
