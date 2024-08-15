<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#wave" x="48" y="0" :fill="waveColor" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const waveColor = ref('var(--bs-primary)');
let animationFrame;

const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const animateWave = () => {
  const wave = document.querySelector('.parallax > use');
  let time = 0;
  let isPaused = false;
  let pauseDuration = 0;
  let currentSpeed = 1;
  let targetSpeed = 1;

  const animate = () => {
    if (!isPaused) {
      // Smoothly adjust the current speed towards the target speed
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;

      time += 0.005 * currentSpeed;
      if (time > 1) time = 0;

      const position = -90 + (easeInOutQuad(time) * 175);
      wave.setAttribute('transform', `translate(${position},0)`);

      // Randomly change target speed
      if (Math.random() < 0.01) {
        targetSpeed = 0.5 + Math.random() * 1.5; // Speed between 0.5 and 2
      }

      // Randomly decide to pause
      if (Math.random() < 0.002) {
        isPaused = true;
        pauseDuration = Math.random() * 2000 + 1000; // Pause between 1 and 3 seconds
        setTimeout(() => {
          isPaused = false;
        }, pauseDuration);
      }
    }

    animationFrame = requestAnimationFrame(animate);
  };

  animate();
};

onMounted(() => {
  animateWave();
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: var(--bs-light);
}

.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  max-width: 800px;
  text-align: center;
}

.wave-container {
  position: relative;
  height: 150px;
  overflow: hidden;
  background-color: var(--bs-light);
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
  .top-section {
    padding: 3rem 1rem;
  }
  
  .wave-container {
    height: 100px;
  }
}
</style>