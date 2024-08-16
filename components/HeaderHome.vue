<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div ref="waveContainer" class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${svgWidth} ${svgHeight}`" preserveAspectRatio="none">
        <path :d="pathData" :fill="waveColor" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';

// Reactive values
const waveContainer = ref(null);
const waveColor = ref('var(--bs-primary)');
const pathData = ref('');
const { width: windowWidth, height: windowHeight } = useWindowSize();

// Computed values
const svgWidth = computed(() => Math.max(1440, windowWidth.value));
const svgHeight = computed(() => Math.min(320, windowHeight.value * 0.3));

// Animation constants
const RIPPLE_CHANCE = 0.02;
const MAX_RIPPLES = 3;
const RIPPLE_AMPLITUDE_RANGE = { min: 10, max: 30 };
const RIPPLE_FREQUENCY_RANGE = { min: 5, max: 15 };
const RIPPLE_SPEED_RANGE = { min: 2, max: 7 };

// Ripple state
let ripples = [];
let animationFrame;

// Utility functions
const randomBetween = (min, max) => Math.random() * (max - min) + min;

const createRipple = (xOffset, amplitude, frequency, width) => {
  const points = [];
  const step = width / 100;

  for (let x = 0; x <= width; x += step) {
    const distanceFromCenter = Math.abs(x - xOffset);
    const y = svgHeight.value / 2 + amplitude * Math.sin((distanceFromCenter / width) * frequency) * Math.exp(-distanceFromCenter / (width / 4));
    points.push(`${x},${y}`);
  }

  return points.join(' ');
};

const updatePathData = () => {
  if (ripples.length === 0) {
    pathData.value = `M0 ${svgHeight.value / 2} L${svgWidth.value} ${svgHeight.value / 2}`;
  } else {
    const points = Array(svgWidth.value + 1).fill(svgHeight.value / 2);
    ripples.forEach(ripple => {
      const ripplePoints = createRipple(ripple.xOffset, ripple.amplitude, ripple.frequency, svgWidth.value).split(' ');
      ripplePoints.forEach(point => {
        const [x, y] = point.split(',').map(Number);
        points[x] += y - svgHeight.value / 2;
      });
    });
    pathData.value = `M0 ${svgHeight.value} L0 ${points[0]} ${points.map((y, x) => `${x},${y}`).join(' ')} L${svgWidth.value} ${svgHeight.value} Z`;
  }
};

const animateWave = () => {
  if (Math.random() < RIPPLE_CHANCE && ripples.length < MAX_RIPPLES) {
    ripples.push({
      xOffset: 0,
      amplitude: randomBetween(RIPPLE_AMPLITUDE_RANGE.min, RIPPLE_AMPLITUDE_RANGE.max),
      frequency: randomBetween(RIPPLE_FREQUENCY_RANGE.min, RIPPLE_FREQUENCY_RANGE.max),
      speed: randomBetween(RIPPLE_SPEED_RANGE.min, RIPPLE_SPEED_RANGE.max)
    });
  }

  ripples = ripples.filter(ripple => {
    ripple.xOffset += ripple.speed;
    return ripple.xOffset < svgWidth.value;
  });

  updatePathData();

  animationFrame = requestAnimationFrame(animateWave);
};

// Lifecycle hooks
onMounted(() => {
  updatePathData();
  animateWave();

  // GSAP animation for smooth color transitions
  gsap.to(waveContainer.value, {
    '--wave-color': 'var(--bs-primary)',
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
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
  min-height: calc(100vh - 30vh);
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
  height: 30vh;
  overflow: hidden;
  background-color: var(--wave-color, var(--bs-primary));
  transition: background-color 0.5s ease;
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
    height: 20vh;
  }
}
</style>