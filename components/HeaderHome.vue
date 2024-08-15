<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
      </div>
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

const primaryColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim());

const waveColors = computed(() => [
  `${primaryColor.value}B3`, // 70% opacity
  `${primaryColor.value}80`, // 50% opacity
  `${primaryColor.value}4D`, // 30% opacity
  primaryColor.value
]);
</script>

<style scoped>
/* Overall container for the homepage */
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: var(--bs-light);
}

/* Top section containing the main content */
.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 250px); /* Adjusted to account for taller wave container */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Content wrapper for centering and max-width */
.content {
  max-width: 800px;
  text-align: center;
}

/* Wave container styles */
.wave-container {
  position: relative;
  height: 250px; /* Increased to accommodate additional padding */
  overflow: hidden;
  background-color: var(--bs-light);
}

/* Pseudo-element for additional padding below waves */
.wave-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: var(--bs-primary);
}

/* Wave SVG styles */
.waves {
  position: absolute;
  bottom: 100px; /* Moved up to sit above the new padding */
  width: 100%;
  height: 150px;
  min-height: 100px;
  max-height: 150px;
}

/* Wave animation styles */
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
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

/* Keyframes for wave animation */
@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .top-section {
    padding: 3rem 1rem;
  }
}
</style>