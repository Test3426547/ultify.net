<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path :d="pathData" :fill="waveColor" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const waveColor = ref('var(--bs-primary)');
const pathData = ref('');
let animationFrame;

const createRipple = (x, amplitude, width, frequency) => {
  const points = [];
  const step = 1;
  for (let i = 0; i <= width; i += step) {
    const distanceFromCenter = Math.abs(i - x);
    const y = 50 + amplitude * Math.sin((i / width) * frequency * Math.PI * 2) * Math.exp(-distanceFromCenter / (width / 8));
    points.push(`${i},${y}`);
  }
  return points.join(' ');
};

const animateWave = () => {
  const width = 1440;
  const ripples = [];
  let lastRippleTime = Date.now();

  const animate = () => {
    const now = Date.now();
    
    // Randomly create new ripples
    if (now - lastRippleTime > 2000 && Math.random() < 0.1) {
      ripples.push({
        x: 0,
        amplitude: Math.random() * 20 + 10,
        width: Math.random() * 200 + 100,
        frequency: Math.random() * 2 + 1,
        speed: Math.random() * 3 + 1
      });
      lastRippleTime = now;
    }

    // Move and remove ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      ripples[i].x += ripples[i].speed;
      if (ripples[i].x > width) {
        ripples.splice(i, 1);
      }
    }

    // Create path data
    let points = Array(width + 1).fill(50);
    ripples.forEach(ripple => {
      const ripplePoints = createRipple(ripple.x, ripple.amplitude, ripple.width, ripple.frequency).split(' ');
      ripplePoints.forEach(point => {
        const [x, y] = point.split(',').map(Number);
        if (x >= 0 && x <= width) {
          points[x] = Math.max(0, Math.min(100, y));
        }
      });
    });

    pathData.value = `M0,50 ${points.map((y, x) => `L${x},${y}`).join(' ')} L1440,50 L1440,100 L0,100 Z`;

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
    height: 100px;
  }
}
</style>