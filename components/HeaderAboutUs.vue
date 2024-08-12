<template>
  <section class="relative h-screen w-full overflow-hidden flex items-center">
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
    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center">
      <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-8">Learn More About Us</h1>
      <p class="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-12">
        Need to get in contact with us?<br>Our email and phone number are at your disposal.
      </p>
      <div>
        <a
          class="inline-flex h-14 items-center justify-center rounded-full bg-[#37B5FF] px-8 py-4 text-lg font-medium text-white shadow-sm transition-colors hover:bg-[#37B5FF]/90 focus:outline-none focus:ring-2 focus:ring-[#37B5FF] focus:ring-offset-2"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No need for any script setup now that animations are removed
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