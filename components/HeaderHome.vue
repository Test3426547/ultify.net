<template>
  <div class="homepage">
    <canvas ref="canvas" class="gradient-background"></canvas>
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <NuxtLink to="/consultation" class="get-started-btn">Get Started</NuxtLink>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
const primaryColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim());

const waveColors = computed(() => [
  `${primaryColor.value}B3`, // 70% opacity
  `${primaryColor.value}80`, // 50% opacity
  `${primaryColor.value}4D`, // 30% opacity
  primaryColor.value
]);

let ctx, width, height, particles;
let animationFrameId;
let mouse = { x: 0, y: 0 };

onMounted(() => {
  initCanvas();
  createParticles();
  animate();
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('mousemove', onMouseMove);
});

function initCanvas() {
  const canvasElement = canvas.value;
  ctx = canvasElement.getContext('2d');
  width = canvasElement.width = window.innerWidth;
  height = canvasElement.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const particlesCount = 100;
  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1
    });
  }
}

function drawGradient() {
  const gradient = ctx.createRadialGradient(
    mouse.x, mouse.y, 0,
    mouse.x, mouse.y, width
  );
  gradient.addColorStop(0, 'rgba(173, 216, 230, 0.8)');  // Light blue
  gradient.addColorStop(0.5, 'rgba(135, 206, 235, 0.6)'); // Sky blue
  gradient.addColorStop(1, 'rgba(240, 248, 255, 0.4)');  // Alice blue
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawParticles() {
  particles.forEach(particle => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  drawGradient();
  drawParticles();
  animationFrameId = requestAnimationFrame(animate);
}

function onResize() {
  width = canvas.value.width = window.innerWidth;
  height = canvas.value.height = window.innerHeight;
}

function onMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}
</script>

<style scoped>
/* Overall container for the homepage */
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: var(--bs-light);
  position: relative;
  overflow: hidden;
}

/* Gradient background canvas */
.gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* Top section containing the main content */
.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 250px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
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
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5);
}

/* Paragraph styles */
p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
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
  background-color: transparent;
  z-index: 1;
}

/* Pseudo-element for additional padding below waves */
.wave-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: var(--bs-primary);
}

/* Wave SVG styles */
.waves {
  position: absolute;
  bottom: 100px;
  width: 100%;
  height: 150px;
  min-height: 100px;
  max-height: 150px;
}

/* Wave animation styles */
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

/* Keyframes for wave animation */
@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}

/* Mobile responsive styles */
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