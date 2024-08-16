<template>
  <div class="homepage">
    <div class="content-section">
      <!-- Your content here -->
    </div>
    <div class="primary-section">
      <div class="wave-container">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" />
            <use xlink:href="#gentle-wave" x="48" y="3" />
            <use xlink:href="#gentle-wave" x="48" y="5" />
            <use xlink:href="#gentle-wave" x="48" y="7" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

let tl;

onMounted(() => {
  const waves = document.querySelectorAll('.parallax > use');
  
  tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  
  waves.forEach((wave, index) => {
    tl.to(wave, {
      duration: 10 + index * 2,
      attr: { x: 48 + 240 },
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    }, 0);
  });
});

onUnmounted(() => {
  if (tl) tl.kill();
});
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-section {
  flex: 0 0 60%;
  background-color: var(--bs-light);
  /* Add your content styles here */
}

.primary-section {
  flex: 0 0 40%;
  background-color: var(--bs-primary);
  position: relative;
  overflow: hidden;
}

.wave-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%; /* 10% of the total height (25% of 40%) */
}

.waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.parallax > use {
  fill: var(--bs-primary);
}

.parallax > use:nth-child(1) {
  opacity: 0.7;
}

.parallax > use:nth-child(2) {
  opacity: 0.5;
}

.parallax > use:nth-child(3) {
  opacity: 0.3;
}

.parallax > use:nth-child(4) {
  opacity: 0.2;
}

@media (max-width: 768px) {
  .wave-container {
    height: 50px;
  }
}
</style>