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

// Create a smooth wave path with gentle undulations
const createWave = (xOffset, amplitude, frequency) => {
  const points = [];
  const width = 1440;
  const step = width / 10; // control the wave smoothness

  for (let x = 0; x <= width; x += step) {
    const y = 160 + amplitude * Math.sin((x / width) * frequency + xOffset);
    points.push(`${x},${y}`);
  }

  return `M0,320 L0,${points[0].split(',')[1]} ${points.join(' ')} L1440,320 Z`;
};

// Animation logic
const animateWave = () => {
  let xOffset = 0;

  const animate = () => {
    xOffset += 0.02; // Controls the speed of the wave animation
    pathData.value = createWave(xOffset, 40, 2 * Math.PI); // Amplitude of 40px with a full sine wave cycle

    animationFrame = requestAnimationFrame(animate);
  };

  animate();
};

// Start the wave animation when the component is mounted
onMounted(() => {
  animateWave();
});

// Clean up the animation frame when the component is unmounted
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
  min-height: calc(100vh - 300px); /* Adjust to allow space for wave */
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
  height: 300px; /* Adjust to control wave height */
  overflow: hidden;
  background-color: var(--bs-primary); /* Adjust for section color */
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%); /* Center the wave vertically */
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
