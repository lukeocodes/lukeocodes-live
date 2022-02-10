<script lang="ts" setup>
import usePet from "@/composables/pet";

const { walkTo, randPosition } = usePet();
</script>

<template>
  <img
    src="~/assets/images/avatar/avatar@300px.png"
    @click="walkTo(randPosition())"
  />
</template>

<style scoped>
img {
  transform: scale(1);
  cursor: pointer;
}
img:hover {
  animation: shake 10s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: rotate(3deg) scale(1.05);
  }

  1% {
    transform: rotate(0deg) scale(1.05);
  }

  2% {
    transform: rotate(-3deg) scale(1.05);
  }

  3% {
    transform: rotate(0deg) scale(1.05);
  }

  4% {
    transform: rotate(3deg) scale(1.05);
  }

  5% {
    transform: rotate(0deg) scale(1.05);
  }

  6% {
    transform: rotate(-3deg) scale(1.05);
  }

  7% {
    transform: rotate(0deg) scale(1.05);
  }

  100% {
    transform: rotate(0deg) scale(1.05);
  }
}
</style>
