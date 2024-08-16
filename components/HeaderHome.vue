<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path :fill="waveColor" fill-opacity="1" d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,138.7C560,128,640,128,720,138.7C800,149,880,171,960,181.3C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,138.7C560,128,640,128,720,138.7C800,149,880,171,960,181.3C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z;
              M0,64L40,85.3C80,107,160,149,240,176C320,203,400,213,480,202.7C560,192,640,160,720,138.7C800,117,880,107,960,128C1040,149,1120,203,1200,213.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z;
              M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,138.7C560,128,640,128,720,138.7C800,149,880,171,960,181.3C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const waveColor = ref('var(--bs-primary)');
let animationFrame;

const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const animateWave = () => {
  const wave = document.querySelector('.waves path');
  let time = 0;
  let currentSpeed = 1;
  let targetSpeed = 1;
  let lastSpeedChangeTime = Date.now();
  let speedChangeDuration = Math.random() * 5000 + 3000; // 3-8 seconds

  const animate = () => {
    const now = Date.now();
    const timeSinceLastChange = now - lastSpeedChangeTime;

    // Change speed if it's time
    if (timeSinceLastChange >= speedChangeDuration) {
      targetSpeed = Math.random() * 1.5 + 0.5; // New speed between 0.5 and 2
      speedChangeDuration = Math.random() * 5000 + 3000; // New duration 3-8 seconds
      lastSpeedChangeTime = now;
    }

    // Smoothly adjust current speed towards target speed
    currentSpeed += (targetSpeed - currentSpeed) * 0.05;

    time += 0.005 * currentSpeed;
    if (time > 1) time -= 1;

    const progress = easeInOutQuad(time);
    wave.setAttribute('transform', `translate(${-1440 * progress},0)`);

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