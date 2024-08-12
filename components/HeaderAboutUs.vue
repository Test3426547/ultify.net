<template>
  <section class="relative h-[90vh] w-full overflow-hidden">
    <div class="absolute inset-0 bg-white"></div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#wave" x="48" y="0" fill="rgba(55,181,255,0.7)" />
          <use xlink:href="#wave" x="48" y="3" fill="rgba(55,181,255,0.5)" />
          <use xlink:href="#wave" x="48" y="5" fill="rgba(55,181,255,0.3)" />
          <use xlink:href="#wave" x="48" y="7" fill="#37B5FF" />
        </g>
      </svg>
    </div>
    <div class="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 ref="heading" class="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-black">Learn More About Us</h1>
      <p ref="body" class="mt-6 text-lg font-medium sm:text-xl lg:text-2xl text-black">Need to get in contact with us? Our email and phone number are at your disposal.</p>
      <div class="mt-10">
        <a
          ref="button"
          class="inline-flex h-12 items-center justify-center rounded-full bg-[#37B5FF] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#37B5FF]/90 focus:outline-none focus:ring-2 focus:ring-[#37B5FF] focus:ring-offset-2"
          href="#"
          @mouseenter="startButtonAnimation"
          @mouseleave="stopButtonAnimation"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const heading = ref(null);
const body = ref(null);
const button = ref(null);

let buttonAnimation;

onMounted(() => {
  gsap.from(heading.value, {
    duration: 1,
    opacity: 0,
    scale: 1.2,
    ease: "elastic.out(1, 0.5)"
  });

  gsap.from(body.value, {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out"
  });
});

const startButtonAnimation = () => {
  buttonAnimation = gsap.to(button.value, {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    ease: "power1.inOut"
  });
};

const stopButtonAnimation = () => {
  if (buttonAnimation) {
    buttonAnimation.kill();
    gsap.to(button.value, {
      y: 0,
      duration: 0.2,
      ease: "power1.out"
    });
  }
};
</script>

<style scoped>
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33.33%;
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
</style>