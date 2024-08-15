<template>
  <div class="homepage">
    <div class="gradient-background">
      <div class="aura" :style="auraStyle"></div>
    </div>
    <div class="content">
      <!-- Your content goes here -->
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#wave" x="48" y="0" fill="#4169E1B3" />
          <use xlink:href="#wave" x="48" y="3" fill="#4169E180" />
          <use xlink:href="#wave" x="48" y="5" fill="#4169E14D" />
          <use xlink:href="#wave" x="48" y="7" fill="#4169E1" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Customizable aura colors
const auraColors = ref({
  color1: '#FF69B4',
  color2: '#4169E1',
  color3: '#8A2BE2',
});

// Compute the aura style
const auraStyle = computed(() => ({
  background: `
    radial-gradient(
      circle at 70% 20%,
      ${auraColors.value.color1}33 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 20% 80%,
      ${auraColors.value.color2}33 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      ${auraColors.value.color3}33 0%,
      transparent 50%
    )
  `
}));
</script>

<style scoped>
.homepage {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F0F0F0;
}

.gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.aura {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  animation: rotate 60s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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