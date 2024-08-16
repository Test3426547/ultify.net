<template>
  <div class="homepage" @mousemove="handleMouseMove">
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <NuxtLink to="/consultation" class="get-started-btn">Get Started</NuxtLink>
      </div>
    </div>
    <div class="interactive-background" ref="interactiveBackground"></div>
    <div class="wave-container" ref="waveContainer">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path class="wave1" :d="wavePath1" :fill="waveColors[0]"></path>
        <path class="wave2" :d="wavePath2" :fill="waveColors[1]"></path>
        <path class="wave3" :d="wavePath3" :fill="waveColors[2]"></path>
      </svg>
    </div>
    <div class="blue-background"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const primaryColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim());
const lightColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-light').trim());

const waveColors = computed(() => [
  `${primaryColor.value}B3`, // 70% opacity
  `${primaryColor.value}80`, // 50% opacity
  `${primaryColor.value}4D`, // 30% opacity
]);

const waveContainer = ref(null);
const interactiveBackground = ref(null);
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

const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  const { left, top, width, height } = interactiveBackground.value.getBoundingClientRect();
  const x = (clientX - left) / width;
  const y = (clientY - top) / height;
  
  interactiveBackground.value.style.setProperty('--mouse-x', x);
  interactiveBackground.value.style.setProperty('--mouse-y', y);
};

onMounted(() => {
  updateWavePaths();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 350px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.content {
  max-width: 800px;
  text-align: center;
}

.welcome {
  background-color: var(--bs-primary);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  display: inline-block;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin: 1rem 0 1.5rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.get-started-btn {
  background-color: var(--bs-primary);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: inline-block;
}

.get-started-btn:hover {
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-10px); }
  50% { transform: translateY(-5px); }
  75% { transform: translateY(-2px); }
}

.interactive-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  background-color: var(--bs-light);
  z-index: 1;
}

.interactive-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.interactive-background:hover::after {
  opacity: 1;
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  overflow: hidden;
  z-index: 2;
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blue-background {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: var(--bs-primary);
  z-index: 1;
}

@media (max-width: 768px) {
  .top-section {
    padding: 3rem 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  .welcome {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }

  .get-started-btn {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
}
</style>