<template>
  <div class="header-home">
    <!-- Main Header Section -->
    <header class="page-header min-vh-100 position-relative">
      <div class="wave-aura"></div>
      <div class="container h-100 d-flex align-items-center">
        <div class="row w-100">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-column">
            <div class="badge rounded-pill bg-primary mb-3 pill-large">Welcome To Ultify</div>
            <h1 class="text-primary">Capitalise on digital</h1>
            <h1 class="mb-4">resources with Ultify</h1>
            <p class="lead">
              Our agency utilises digital resources and our working strategies
              to elevate your business operations. Start now and maximise your
              digital reach.
            </p>
            <div class="buttons">
              <NuxtLink to="/contact-us" class="btn btn-primary mt-4 rounded-pill">Get Started</NuxtLink>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-center align-items-center image-column">
            <div class="placeholder-image">Future Image Here</div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  initWaveAura()
})

function initWaveAura() {
  const waveAura = document.querySelector('.wave-aura')
  waveAura.style.background = 'linear-gradient(135deg, var(--bs-primary) 25%, transparent 25%, transparent 50%, var(--bs-primary) 50%, var(--bs-primary) 75%, transparent 75%, transparent)'
  waveAura.style.backgroundSize = '56.57px 56.57px'
}
</script>

<style scoped>
.header-home {
  position: relative;
  overflow: hidden;
}

.page-header {
  background-color: transparent !important;
  padding-bottom: 0;
  min-height: calc(100vh - 150px);
}

.wave-aura {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.lead {
  color: var(--bs-body-color) !important;
}

.btn-primary {
  background-color: var(--bs-primary) !important;
  border-color: var(--bs-primary) !important;
  color: white;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.btn-primary:hover {
  background-color: var(--bs-primary-dark) !important;
  border-color: var(--bs-primary-dark) !important;
}

.placeholder-image {
  width: 100%;
  height: 300px;
  background-color: rgba(var(--bs-light-rgb), 0.8);
  border: 2px dashed var(--bs-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-secondary);
  font-size: 1.5rem;
  border-radius: 8px;
}

.badge {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  display: inline-block;
}

.pill-large {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  margin-top: -50px;
}

.text-column {
  text-align: left;
}

.image-column {
  text-align: right;
}

@media (max-width: 992px) {
  .text-column, .image-column {
    text-align: center;
  }
}
</style>