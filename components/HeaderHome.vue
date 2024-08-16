<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <NuxtLink to="/consultation" class="get-started-btn">Get Started</NuxtLink>
      </div>
    </div>
    <div class="wave-container" ref="waveContainer">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path class="wave1" :d="wavePath1" :fill="waveColors[0]"></path>
        <path class="wave2" :d="wavePath2" :fill="waveColors[1]"></path>
        <path class="wave3" :d="wavePath3" :fill="waveColors[2]"></path>
      </svg>
      <div class="digital-particles"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const primaryColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim());

const waveColors = computed(() => [
  `${primaryColor.value}B3`, // 70% opacity
  `${primaryColor.value}80`, // 50% opacity
  `${primaryColor.value}4D`, // 30% opacity
]);

const waveContainer = ref(null);
const wavePath1 = ref('');
const wavePath2 = ref('');
const wavePath3 = ref('');

let animationFrame;

const updateWavePaths = () => {
  const width = waveContainer.value.offsetWidth;
  const height = waveContainer.value.offsetHeight;
  const time = Date.now() / 1000;

  wavePath1.value = generateWavePath(width, height, time, 0.02, 20);
  wavePath2.value = generateWavePath(width, height, time, 0.03, 15);
  wavePath3.value = generateWavePath(width, height, time, 0.04, 10);

  animationFrame = requestAnimationFrame(updateWavePaths);
};

const generateWavePath = (width, height, time, frequency, amplitude) => {
  let path = `M0 ${height} `;
  for (let x = 0; x <= width; x += 10) {
    const y = Math.sin((x * frequency) + time) * amplitude + (height / 2);
    path += `L${x} ${y} `;
  }
  path += `L${width} ${height} Z`;
  return path;
};

onMounted(() => {
  updateWavePaths();
  createDigitalParticles();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});

const createDigitalParticles = () => {
  const particlesContainer = waveContainer.value.querySelector('.digital-particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    particlesContainer.appendChild(particle);
  }
};
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
  min-height: calc(100vh - 250px); /* Adjusted to account for taller wave container */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Content wrapper for centering and max-width */
.content {
  max-width: 800px;
  text-align: center;
}

/* Welcome badge styling */
.welcome {
  background-color: var(--bs-primary);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  display: inline-block;
  margin-bottom: 1.5rem;
}

/* Main heading styles */
h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin: 1rem 0 1.5rem;
}

/* Paragraph styles */
p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Get Started button styles */
.get-started-btn {
  background-color: var(--bs-primary);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-started-btn:hover {
  background-color: darken(var(--bs-primary), 10%);
}

/* Wave container styles */
.wave-container {
  position: relative;
  height: 250px;
  overflow: hidden;
  background-color: var(--bs-light);
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.digital-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float-up 3s infinite ease-out;
}

@keyframes float-up {
  0% {
    transform: translateY(100%) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100%) scale(1);
    opacity: 0;
  }
}
</style>