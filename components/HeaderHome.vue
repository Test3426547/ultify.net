<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
      </div>
    </div>
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#wave" x="48" y="0" fill="var(--bs-primary)" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
// No need for computed wave colors anymore
</script>

<style scoped>
/* Overall container for the homepage */
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: var(--bs-light);
}

/* Top section containing the main content */
.top-section {
  color: #000000;
  padding: 4rem 2rem;
  min-height: calc(100vh - 150px); /* Adjusted for smaller wave container */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Content wrapper for centering and max-width */
.content {
  max-width: 800px;
  text-align: center;
}

/* Wave container styles */
.wave-container {
  position: relative;
  height: 150px;
  overflow: hidden;
  background-color: var(--bs-light);
}

/* Wave SVG styles */
.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 100px;
  max-height: 150px;
}

/* Wave animation styles */
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
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
  
  .wave-container {
    height: 100px;
  }
}
</style>