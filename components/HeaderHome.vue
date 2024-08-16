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
          <use xlink:href="#gentle-wave" x="48" y="0" />
          <use xlink:href="#gentle-wave" x="48" y="3" />
          <use xlink:href="#gentle-wave" x="48" y="5" />
          <use xlink:href="#gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </div>
    <div class="primary-section">
      <!-- Content for the primary section -->
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
}

.content-section {
  flex: 1;
  padding: 2rem;
  background-color: var(--bs-light);
  /* Add your content styles here */
}

.wave-container {
  position: relative;
  width: 100%;
  height: 150px; /* Increased height for more prominent waves */
  overflow: hidden;
}

.waves {
  position: absolute;
  top: 0; /* Changed from bottom to top */
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(180deg); /* Flip the waves upside down */
}

.parallax > use {
  fill: var(--bs-primary); /* Ensure all waves use the primary color */
}

.primary-section {
  background-color: var(--bs-primary);
  min-height: 40vh; /* Adjust as needed */
  /* Add styles for your primary section content */
}

@media (max-width: 768px) {
  .wave-container {
    height: 100px;
  }
}
</style>