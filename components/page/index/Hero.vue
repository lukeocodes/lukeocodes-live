<template>
  <div class="w-full h-screen bg-center bg-no-repeat bg-cover background">
    <div class="h-screen w-full layer stars"></div>
    <div class="h-screen w-full layer sun"></div>
    <div class="h-screen w-full layer last-crane"></div>
    <div class="h-screen w-full layer infront-last-crane"></div>
    <div class="h-screen w-full layer second-crane"></div>
    <div class="h-screen w-full layer first-crane"></div>
    <div class="h-screen w-full layer behind-bridge"></div>
    <div class="h-screen w-full layer bridge-foreground"></div>
    <div class="h-screen w-full layer first-foreground"></div>
    .
  </div>
</template>

<style scoped>
.layer {
  @apply absolute top-0 left-0 right-0 bottom-0 w-full bg-center bg-no-repeat bg-cover;
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
}

.infront-last-crane {
  background-image: url("assets/images/scene/infront-last-crane.png");
}

.second-crane {
  background-image: url("assets/images/scene/second-crane.png");
}

.first-crane {
  background-image: url("assets/images/scene/first-crane.png");
}

.behind-bridge {
  background-image: url("assets/images/scene/behind-bridge.png");
}

.bridge-foreground {
  background-image: url("assets/images/scene/bridge-foreground.png");
}

.first-foreground {
  background-image: url("assets/images/scene/first-foreground.png");
}
</style>
