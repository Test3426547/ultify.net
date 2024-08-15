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
          <use xlink:href="#wave" x="48" y="0" fill="var(--bs-primary)" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

let animationInterval;

const animateWave = () => {
  const wave = document.querySelector('.parallax > use');
  let position = -90;
  let isPaused = false;
  let pauseDuration = 0;

  const animate = () => {
    if (!isPaused) {
      position += 0.5; // Increased speed
      if (position > 85) position = -90;
      wave.setAttribute('transform', `translate(${position},0)`);

      // Randomly decide to pause
      if (Math.random() < 0.005) { // Adjust this value to change pause frequency
        isPaused = true;
        pauseDuration = Math.random() * 2000 + 500; // Random pause between 0.5 and 2.5 seconds
        setTimeout(() => {
          isPaused = false;
        }, pauseDuration);
      }
    }
    animationInterval = requestAnimationFrame(animate);
  };

  animate();
};

onMounted(() => {
  animateWave();
});

onUnmounted(() => {
  if (animationInterval) {
    cancelAnimationFrame(animationInterval);
  }
});
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
  min-height: calc(100vh - 150px);
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
  height: 150px;
  overflow: hidden;
  background-color: var(--bs-light);
}

/* Wave SVG styles */
.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-height: 150px;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .top-section {
    padding: 3rem 1rem;
  }
  
  .wave-container {
    height: 100px;
  }
}
</style>