<template>
  <div class="homepage">
    <div class="gradient-background" :style="gradientStyle"></div>
    <div class="content">
      <!-- Your content goes here -->
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#wave" x="48" y="0" :fill="waveColors[0]" />
          <use xlink:href="#wave" x="48" y="3" :fill="waveColors[1]" />
          <use xlink:href="#wave" x="48" y="5" :fill="waveColors[2]" />
          <use xlink:href="#wave" x="48" y="7" :fill="waveColors[3]" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Customizable gradient colors
const gradientColors = ref({
  purple: '#8A2BE2',
  blue: '#4169E1',
  pink: '#FF69B4'
});

// Customizable background color
const backgroundColor = ref('#F0F0F0');

// Compute the gradient style
const gradientStyle = computed(() => ({
  background: `radial-gradient(circle, ${backgroundColor.value} 0%, ${backgroundColor.value} 60%, ${gradientColors.value.purple} 70%, ${gradientColors.value.blue} 80%, ${gradientColors.value.pink} 90%, ${backgroundColor.value} 100%)`
}));

// Wave colors (you can customize these as well)
const waveColors = computed(() => [
  '#4169E1B3', // 70% opacity
  '#4169E180', // 50% opacity
  '#4169E14D', // 30% opacity
  '#4169E1'
]);
</script>

<style scoped>
.homepage {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
  /* Add your content styles here */
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 768px) {
  .wave-container {
    height: 150px;
  }
}
</style>