<template>
  <section class="hero" :style="{ '--primary-color': primaryColor, '--secondary-color': secondaryColor, '--tertiary-color': tertiaryColor }">
    <div class="hero-content">
      <span class="welcome">{{ welcomeText }}</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <NuxtLink :to="ctaLink" class="cta-button">{{ ctaText }}</NuxtLink>
    </div>
    <div class="wave-container">
      <div v-for="i in 3" :key="i" :class="`wave wave-${i}`" :style="{ background: waveGradients[i-1] }"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  welcomeText: { type: String, default: 'Welcome to Ultify' },
  title: { type: String, default: 'Capitalise on digital resources with ULTIFY' },
  description: { type: String, default: 'Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.' },
  ctaText: { type: String, default: 'Get Started' },
  ctaLink: { type: String, default: '/consultation' },
  primaryColor: { type: String, default: '#8A2BE2' }, // Purple
  secondaryColor: { type: String, default: '#FF69B4' }, // Pink
  tertiaryColor: { type: String, default: '#4169E1' }, // Blue
})

const waveGradients = computed(() => [
  `linear-gradient(90deg, ${props.primaryColor}, ${props.secondaryColor})`,
  `linear-gradient(90deg, ${props.secondaryColor}, ${props.tertiaryColor})`,
  `linear-gradient(90deg, ${props.tertiaryColor}, ${props.primaryColor})`
])
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  color: #fff;
  max-width: 800px;
}

.welcome {
  background-color: var(--primary-color);
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
  margin: 1rem 0 1.5rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #fff;
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.cta-button:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat-x;
  transform-origin: center bottom;
}

.wave-1 {
  animation: wave 12s linear infinite;
  z-index: 1;
  opacity: 0.5;
}

.wave-2 {
  animation: wave 8s linear infinite;
  z-index: 2;
  opacity: 0.75;
}

.wave-3 {
  animation: wave 6s linear infinite;
  z-index: 3;
  opacity: 1;
}

@keyframes wave {
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
}

@media (max-width: 768px) {
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

  .cta-button {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
}