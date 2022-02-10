<script lang="ts" setup>
import usePet from "@/composables/pet";

const { position, character, right, status, timeToPosition } = usePet();
</script>

<template>
  <div
    id="pet"
    :class="[character, right ? 'right' : '', status]"
    :style="{
      left: `${position}px`,
      transition: `left ${timeToPosition}s linear`,
    }"
  />
</template>

<style scoped>
#pet {
  margin-top: -4.25rem;
  width: 64px;
  height: 64px;
  background-size: auto 64px;
  /* left: 0; */
  position: absolute;
  background-image: url("assets/images/dino/sheets/greg.png");
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  transform: scaleX(-1);
}

#pet.dave {
  background-image: url("assets/images/dino/sheets/dave.png");
}

#pet.blue {
  background-image: url("assets/images/dino/sheets/blue.png");
}

#pet.mort {
  background-image: url("assets/images/dino/sheets/mort.png");
}

#pet.idle {
  animation: 0.5s idle infinite steps(1);
}

#pet.walking {
  background-position-x: -8rem;
  animation: 0.5s walking infinite steps(1);
}

#pet.kick {
  animation: 0.5s kicking infinite steps(1);
}

#pet.right {
  transform: scaleX(1);
}

@keyframes idle {
  0% {
    background-position-x: 0;
  }
  25% {
    background-position-x: -100%;
  }
  50% {
    background-position-x: -200%;
  }
  75% {
    background-position-x: -300%;
  }
}

@keyframes kicking {
  0% {
    background-position-x: -1000%;
  }
  25% {
    background-position-x: -1100%;
  }
  50% {
    background-position-x: -1200%;
  }
  75% {
    background-position-x: -1300%;
  }
}

@keyframes walking {
  0% {
    background-position-x: -400%;
  }
  16.6% {
    background-position-x: -500%;
  }
  33.2% {
    background-position-x: -600%;
  }
  49.8% {
    background-position-x: -700%;
  }
  66.4% {
    background-position-x: -800%;
  }
  83% {
    background-position-x: -900%;
  }
}
</style>
