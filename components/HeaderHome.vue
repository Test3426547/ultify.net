<template>
  <div class="homepage position-relative overflow-hidden" ref="homepage">
    <div class="background-top"></div>
    <div class="background-bottom"></div>
    <div class="container position-relative z-1">
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-12 col-md-10 col-lg-8 text-center">
          <div class="logo position-absolute top-0 start-0 m-3">US</div>
          <div class="menu-icon position-absolute top-0 end-0 m-3">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <h1 class="display-4 text-primary mb-4">Start capitalising on digital resources to elelvatе your brand.</h1>
          <h2 class="h3 text-primary mb-4">Start now and maximise your digital reach.</h2>
          <p class="lead mb-5 text-light">Your Solutions Start With Ultify.</p>
          <NuxtLink to="/consultation" class="btn btn-light text-primary btn-lg px-5 py-3 rounded-pill" ref="getStartedBtn">Get Started</NuxtLink>
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

    // Interactive background animation (if needed)
    // ...
  }, homepage.value);

  return () => ctx.revert();
});
</script>

<style scoped>
.homepage {
  min-height: 100vh;
}

.background-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30%;
  background-color: var(--bs-light);
}

.background-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background-color: var(--bs-primary);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: var(--bs-primary);
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

@media (max-width: 768px) {
  h1.display-4 {
    font-size: calc(1.475rem + 2.7vw);
  }

  h2.h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
}
</style>