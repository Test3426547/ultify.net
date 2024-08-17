<template>
  <div class="homepage bg-light" ref="homepage">
    <div class="container">
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-12 col-md-10 col-lg-8 text-center position-relative">
          <div class="logo position-absolute top-0 start-0 m-3">US</div>
          <div class="menu-icon position-absolute top-0 end-0 m-3">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <h1 class="display-4 text-primary mb-4">Start capitalising on digital resources to elelvatе your brand.</h1>
          <h2 class="h3 text-primary mb-4">Start now and maximise your digital reach.</h2>
          <p class="lead mb-5">Your Solutions Start With Ultify.</p>
          <NuxtLink to="/consultation" class="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill" ref="getStartedBtn">Get Started</NuxtLink>
        </div>
      </div>
    </div>
    <div class="interactive-background" ref="interactiveBackground"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const homepage = ref(null);
const getStartedBtn = ref(null);
const interactiveBackground = ref(null);

onMounted(() => {
  const ctx = gsap.context(() => {
    // Button hover animation
    getStartedBtn.value.addEventListener('mouseenter', () => {
      gsap.to(getStartedBtn.value, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out"
      });
    });

    getStartedBtn.value.addEventListener('mouseleave', () => {
      gsap.to(getStartedBtn.value, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    });

    // Interactive background
    const particles = [];
    const particleCount = 50;

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
  position: relative;
  overflow: hidden;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu-icon {
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--bs-primary);
  margin: 5px 0;
}

.interactive-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(var(--bs-primary-rgb), 0.5);
  border-radius: 50%;
}

@media (max-width: 768px) {
  h1.display-4 {
    font-size: calc(1.475rem + 2.7vw);
  }

  h2.h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
}
</style>