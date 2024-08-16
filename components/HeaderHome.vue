<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 50" preserveAspectRatio="none">
        <path :d="pathData" :fill="waveColor" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const waveColor = ref('var(--bs-primary)');
const pathData = ref('M0 25 L1000 25'); // Initial straight line
let animationFrame;

// Create a wave path using a sine wave function
const createWave = (x, amplitude, wavelength) => {
  const points = [];
  for (let i = 0; i <= 1000; i++) {
    const y = amplitude * Math.sin((i - x) / wavelength * 2 * Math.PI);
    points.push(`${i} ${25 + y}`);
  }
  return `M${points.join(' L')}`;
};

// Animation logic
const animateWave = () => {
  let time = 0;
  let waves = [];
  
  const animate = () => {
    time += 0.02;
    
    // Randomly create new waves
    if (Math.random() < 0.02 && waves.length < 5) {
      waves.push({
        x: 0,
        amplitude: Math.random() * 10 + 5,
        wavelength: Math.random() * 100 + 50,
        speed: Math.random() * 2 + 1
      });
    }
    
    // Move existing waves
    waves = waves.filter(wave => {
      wave.x += wave.speed;
      return wave.x < 1000;
    });
    
    // Create path data
    if (waves.length === 0) {
      pathData.value = 'M0 25 L1000 25'; // Flat line when no waves
    } else {
      const points = Array(1001).fill(25);
      waves.forEach(wave => {
        for (let i = 0; i <= 1000; i++) {
          const y = wave.amplitude * Math.sin((i - wave.x) / wave.wavelength * 2 * Math.PI);
          points[i] += y;
        }
      });
      pathData.value = `M${points.map((y, x) => `${x} ${y}`).join(' L')}`;
    }
    
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
}

.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 50px);
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
  height: 50px;
  overflow: hidden;
  background-color: var(--bs-light);
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: fill 0.5s ease;
}

@media (max-width: 768px) {
  .top-section {
    padding: 3rem 1rem;
  }
  
  .wave-container {
    height: 30px;
  }
}
</style>
