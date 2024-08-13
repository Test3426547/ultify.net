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
  display: flex;
  flex-direction: column;
}

.top-section {
  background-color: #ffffff;
  color: #000000;
  padding: 4rem 2rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: background-color 0.3s ease;
}

.get-started-btn:hover {
  background-color: darken(var(--bs-primary), 10%);
}

.wave-container {
  position: relative;
  height: 200px; /* Increased from 150px to 200px */
  overflow: hidden;
  margin-top: -50px; /* Added to shift the wave up */
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-height: 200px; /* Increased from 150px to 200px */
}

/* Rest of the styles remain unchanged */

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

  .wave-container {
    height: 150px; /* Adjust for mobile if needed */
    margin-top: -25px; /* Adjust for mobile if needed */
  }

  .waves {
    max-height: 150px; /* Adjust for mobile if needed */
  }
}
</style>