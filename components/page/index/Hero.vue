<template>
  <div class="height w-full base background">
    <div class="height layer stars"></div>
    <div class="height layer sun"></div>
    <div class="height layer last-crane"></div>
    <div class="height layer infront-last-crane"></div>
    <div class="height layer second-crane"></div>
    <div class="height layer first-crane"></div>
    <div class="height layer behind-bridge"></div>
    <div class="height layer bridge-foreground"></div>
    <div class="height layer first-foreground"></div>
  </div>
</template>

<style scoped>
.height {
  @apply h-[calc(100vh-5em)];
}

.base {
  @apply bg-bottom bg-fixed bg-repeat-x;
  /* transform-origin: 0 100px; */
  perspective: 40px;
  overflow: hidden;
}

.layer {
  @apply absolute w-screen bg-bottom bg-fixed bg-repeat-x;
}

.background {
  background-image: url("assets/images/scene/background.png");
}

.stars {
  background-image: url("assets/images/scene/stars.png");
}

.sun {
  background-image: url("assets/images/scene/sun.png");
}

.last-crane {
  background-image: url("assets/images/scene/last-crane.png");
  transform: translateZ(-1px);
}

.infront-last-crane {
  background-image: url("assets/images/scene/infront-last-crane.png");
  transform: translateZ(-2px);
}

.second-crane {
  background-image: url("assets/images/scene/second-crane.png");
  transform: translateZ(-2px);
}

.first-crane {
  background-image: url("assets/images/scene/first-crane.png");
  transform: translateZ(-3px);
}

.behind-bridge {
  background-image: url("assets/images/scene/behind-bridge.png");
  transform: translateZ(-3px);
}

.bridge-foreground {
  background-image: url("assets/images/scene/bridge-foreground.png");
  transform: translateZ(-4px);
}

.first-foreground {
  background-image: url("assets/images/scene/first-foreground.png");
  transform: translateZ(-4px);
}
</style>
