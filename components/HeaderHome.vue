<template>
  <div class="homepage" ref="homepage">
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <NuxtLink to="/consultation" class="get-started-btn" ref="getStartedBtn">Get Started</NuxtLink>
      </div>
    </div>
    <div class="interactive-background" ref="interactiveBackground"></div>
    <div class="wave-container" ref="waveContainer">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path class="wave1" ref="wave1"></path>
        <path class="wave2" ref="wave2"></path>
        <path class="wave3" ref="wave3"></path>
      </svg>
    </div>
    <div class="blue-background"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const homepage = ref(null);
const getStartedBtn = ref(null);
const interactiveBackground = ref(null);
const waveContainer = ref(null);
const wave1 = ref(null);
const wave2 = ref(null);
const wave3 = ref(null);

const primaryColor = ref(getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim());

onMounted(() => {
  const ctx = gsap.context(() => {
    // Button bounce animation
    getStartedBtn.value.addEventListener('mouseenter', () => {
      gsap.to(getStartedBtn.value, {
        keyframes: [
          { y: -20, duration: 0.1 },
          { y: -10, duration: 0.1 },
          { y: -5, duration: 0.1 },
          { y: -2, duration: 0.1 },
          { y: 0, duration: 0.1 }
        ],
        ease: "power1.inOut"
      });
    });

    // Wave animation
    gsap.to(wave1.value, {
      attr: { d: "M0,160 C320,300,420,300,740,160 C1060,20,1180,20,1500,160 V300 H0 Z" },
      repeat: -1,
      yoyo: true,
      duration: 5,
      ease: "power1.inOut"
    });

    gsap.to(wave2.value, {
      attr: { d: "M0,160 C320,220,420,220,740,160 C1060,100,1180,100,1500,160 V300 H0 Z" },
      repeat: -1,
      yoyo: true,
      duration: 7,
      ease: "power1.inOut"
    });

    gsap.to(wave3.value, {
      attr: { d: "M0,160 C320,180,420,180,740,160 C1060,140,1180,140,1500,160 V300 H0 Z" },
      repeat: -1,
      yoyo: true,
      duration: 9,
      ease: "power1.inOut"
    });

    // Interactive background
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      interactiveBackground.value.appendChild(particle);
      particles.push(particle);

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5
      });

      animateParticle(particle);
    }

    function animateParticle(particle) {
      gsap.to(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 10 + 5,
        ease: "power1.inOut",
        onComplete: () => animateParticle(particle)
      });
    }

    homepage.value.addEventListener('mousemove', (e) => {
      particles.forEach(particle => {
        const dx = e.clientX - particle._gsap.x;
        const dy = e.clientY - particle._gsap.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          gsap.to(particle, {
            x: particle._gsap.x - dx * 0.1,
            y: particle._gsap.y - dy * 0.1,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    });
  }, homepage.value);

  return () => ctx.revert();
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
  text-decoration: none;
}

.get-started-btn:hover {
  background-color: darken(var(--bs-primary), 10%);
}

.interactive-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  overflow: hidden;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(0, 123, 255, 0.5);
  border-radius: 50%;
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

.wave1, .wave2, .wave3 {
  fill: none;
  stroke: var(--bs-primary);
  stroke-width: 2;
  stroke-linecap: round;
}

.wave1 { stroke-opacity: 0.7; }
.wave2 { stroke-opacity: 0.5; }
.wave3 { stroke-opacity: 0.3; }

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