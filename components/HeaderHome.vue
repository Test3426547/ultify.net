<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <!-- Your content here -->
      </div>
    </div>
    <div class="wave-container">
      <div class="wave-line"></div>
      <div class="ripple ripple1"></div>
      <div class="ripple ripple2"></div>
      <div class="ripple ripple3"></div>
    </div>
  </div>
</template>

<script setup>
// No JavaScript needed for the animation
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
  background-color: var(--bs-primary);
}

.wave-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
}

.ripple {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%);
  animation: ripple 15s infinite linear;
}

.ripple1 { animation-delay: 0s; }
.ripple2 { animation-delay: 5s; }
.ripple3 { animation-delay: 10s; }

@keyframes ripple {
  0% {
    left: -100%;
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    left: 100%;
    transform: translateY(0);
  }
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