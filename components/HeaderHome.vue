<template>
  <div class="homepage">
    <div class="content-section">
      <!-- Your content here -->
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(var(--bs-primary-rgb), 0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(var(--bs-primary-rgb), 0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(var(--bs-primary-rgb), 0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="var(--bs-primary)" />
        </g>
      </svg>
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
      duration: 10 + index * 2, // Stagger the durations
      attr: { x: 48 + 240 }, // Move two full cycles
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    }, 0);
  });
});

onUnmounted(() => {
  if (tl) tl.kill(); // Clean up the animation when component is unmounted
});
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, var(--bs-light) 60%, var(--bs-primary) 40%);
}

.content-section {
  flex: 1;
  padding: 2rem;
  /* Add your content styles here */
}

.wave-container {
  position: relative;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
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

@media (max-width: 768px) {
  .wave-container {
    height: 10vh;
    min-height: 80px;
    max-height: 120px;
  }
}
</style>