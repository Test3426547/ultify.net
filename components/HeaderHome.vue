<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path :d="pathData" :fill="waveColor" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const waveColor = ref('var(--bs-primary)');
const pathData = ref('M0 160 Q 720 200 1440 160 T 2880 160'); // Initial gentle wave
let animationFrame;

const createWave = (xOffset, amplitude, frequency) => {
  const width = 1440; // Canvas width
  const points = [];
  const step = width / 20; // Controls smoothness of the curve

  for (let x = 0; x <= width; x += step) {
    const y = 160 + amplitude * Math.sin((x / width) * frequency + xOffset);
    points.push(`${x},${y}`);
  }

  // Close the path to create a wave that fills the area below it
  return `M0,320 L0,${points[0].split(',')[1]} ${points.join(' ')} L1440,320 Z`;
};

const animateWave = () => {
  let xOffset = 0;
  const amplitude = 40; // Max height of the wave
  const frequency = 2 * Math.PI; // Complete sine wave cycle
  
  const animate = () => {
    xOffset += 0.05; // Speed of the wave animation
    pathData.value = createWave(xOffset, amplitude, frequency);

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
  position: relative;
}

.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bs-light);
}

.content {
  max-width: 800px;
  text-align: center;
}

.wave-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px; /* Adjusted height for wave */
  overflow: hidden;
  background-color: var(--bs-primary); /* Adjusted color for bottom section */
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .top-section {
    padding: 3rem 1rem;
  }
  
  .wave-container {
    height: 200px;
  }
}
</style>
