<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <button class="get-started-btn">Get Started</button>
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#wave" x="48" y="0" :fill="waveColors[0]" />
          <use xlink:href="#wave" x="48" y="3" :fill="waveColors[1]" />
          <use xlink:href="#wave" x="48" y="5" :fill="waveColors[2]" />
          <use xlink:href="#wave" x="48" y="7" :fill="waveColors[3]" />
        </g>
      </svg>
    </div>
    <div class="bottom-section">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const primaryColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim());

const waveColors = computed(() => [
  `${primaryColor.value}B3`, // 70% opacity
  `${primaryColor.value}80`, // 50% opacity
  `${primaryColor.value}4D`, // 30% opacity
  primaryColor.value
]);
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.top-section {
  background-color: #ffffff;
  color: #000000;
  padding: 2rem;
  min-height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.welcome {
  background-color: var(--bs-primary);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin: 1rem 0;
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.get-started-btn {
  background-color: var(--bs-primary);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
}

.wave-container {
  position: relative;
  height: 150px;
  overflow: hidden;
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}

.bottom-section {
  background: linear-gradient(-45deg, var(--bs-primary), var(--bs-primary), #4682B4);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: #ffffff;
  padding: 2rem;
  min-height: calc(50vh - 150px);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>