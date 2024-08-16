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
          <use xlink:href="#wave1" x="48" y="0" :fill="waveColor" />
          <use xlink:href="#wave2" x="48" y="0" :fill="waveColor" opacity="0.6"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const waveColor = ref('var(--bs-primary)');
let animationFrame;

const animateWave = () => {
  const waves = document.querySelectorAll('.parallax > use');
  
  gsap.set(waves, { x: -90 });
  gsap.to(waves, {
    x: 90,
    duration: 10,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(value => parseFloat(value) % 180 - 90)
    }
  });
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