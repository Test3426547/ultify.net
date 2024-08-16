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
const pathData = ref('M0 160 L1440 160'); // Initial flat line
let animationFrame;

const createRipple = (xOffset, amplitude, frequency, width) => {
  const points = [];
  const step = width / 100; // Controls smoothness of the curve

  for (let x = 0; x <= width; x += step) {
    const distanceFromCenter = Math.abs(x - xOffset);
    const y = 160 + amplitude * Math.sin((distanceFromCenter / width) * frequency) * Math.exp(-distanceFromCenter / (width / 4));
    points.push(`${x},${y}`);
  }

  return points.join(' ');
};

const animateWave = () => {
  let ripples = [];
  const width = 1440; // SVG width
  
  const animate = () => {
    // Randomly create new ripples
    if (Math.random() < 0.02 && ripples.length < 3) {
      ripples.push({
        xOffset: 0,
        amplitude: Math.random() * 20 + 10, // Random amplitude between 10 and 30
        frequency: Math.random() * 10 + 5, // Random frequency
        speed: Math.random() * 5 + 2 // Random speed
      });
    }
    
    // Move existing ripples
    ripples = ripples.filter(ripple => {
      ripple.xOffset += ripple.speed;
      return ripple.xOffset < width;
    });
    
    // Create path data
    if (ripples.length === 0) {
      pathData.value = `M0 160 L${width} 160`;
    } else {
      const points = Array(width + 1).fill(160);
      ripples.forEach(ripple => {
        const ripplePoints = createRipple(ripple.xOffset, ripple.amplitude, ripple.frequency, width).split(' ');
        ripplePoints.forEach((point, index) => {
          const [x, y] = point.split(',').map(Number);
          points[x] += y - 160;
        });
      });
      pathData.value = `M0 320 L0 ${points[0]} ${points.map((y, x) => `${x},${y}`).join(' ')} L${width} 320 Z`;
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
  height: 300px;
  overflow: hidden;
  background-color: var(--bs-primary);
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