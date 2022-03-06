<template>
  <div class="height w-screen overflow-clip">
    <div class="height parallax-container base">
      <div class="height layer background"></div>
      <div class="height layer stars"></div>
      <div class="height layer sun"></div>
      <div class="height layer last-crane"></div>
      <div class="height layer infront-last-crane"></div>
      <div class="height layer second-crane"></div>
      <div class="height layer first-crane"></div>
      <div class="height layer behind-bridge"></div>
      <div class="height layer bridge-foreground"></div>
      <div
        class="height layer first-foreground flex justify-center items-center"
      >
        <div>
          <h1>Hello, I'm Luke.</h1>
          <h2>Developer experience, live coding, random stuff.</h2>
        </div>
      </div>
      <BrandFace class="absolute bottom-4 right-4 w-12 lg:w-24" />
      <InteractivePet class="bottom-0" />
    </div>
  </div>
</template>

<style scoped>
.height {
  @apply h-[calc(100vh-5em)];
}

.base {
  /* transform-origin: 0 100px; */
  perspective: 100px;
  perspective-origin: bottom;
  /* overflow: hidden; */
}

.parallax-container {
  @apply w-[calc(100vw)];
}

.layer {
  perspective: inherit;
  @apply absolute w-[calc(100vw)] overflow-clip;
  /* overflow-y: hidden; */
  /* overflow-x: visible; */
}

.background {
  background-image: url("assets/images/scene/background.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
}

.stars {
  background-image: url("assets/images/scene/stars.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(2px);
}

.sun {
  background-image: url("assets/images/scene/sun.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(3px);
}

.last-crane {
  background-image: url("assets/images/scene/last-crane.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(4px);
}

.infront-last-crane {
  background-image: url("assets/images/scene/infront-last-crane.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(5px);
}

.second-crane {
  background-image: url("assets/images/scene/second-crane.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(6px);
}

.first-crane {
  background-image: url("assets/images/scene/first-crane.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(7px);
}

.behind-bridge {
  background-image: url("assets/images/scene/behind-bridge.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(8px);
}

.bridge-foreground {
  background-image: url("assets/images/scene/bridge-foreground.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(9px);
}

.first-foreground {
  background-image: url("assets/images/scene/first-foreground.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  transform: translateZ(9px);
}
</style>
