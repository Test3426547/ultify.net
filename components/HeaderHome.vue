<template>
  <div class="header-home">
    <!-- Top Wave Section -->
    <div class="wave-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="var(--bs-primary)" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>

    <!-- Main Header Section -->
    <header class="page-header min-vh-100 position-relative">
      <div class="animated-background"></div>
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

    <!-- Bottom Wave Section -->
    <div class="wave-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="var(--bs-primary)" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as THREE from 'three'

onMounted(() => {
  initAnimatedBackground()
})

function initAnimatedBackground() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true })

  renderer.setSize(window.innerWidth, window.innerHeight)
  document.querySelector('.animated-background').appendChild(renderer.domElement)

  const geometry = new THREE.PlaneGeometry(20, 20, 50, 50)
  const material = new THREE.MeshBasicMaterial({
    color: 0x0096c7,
    wireframe: true
  })
  const plane = new THREE.Mesh(geometry, material)
  scene.add(plane)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)
    plane.rotation.x += 0.005
    plane.rotation.y += 0.005
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
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

.wave-top, .wave-bottom {
  position: absolute;
  width: 100%;
  height: 150px;
  z-index: 10;
}

.wave-top {
  top: 0;
}

.wave-bottom {
  bottom: 0;
  transform: rotate(180deg);
}

.wave-top svg, .wave-bottom svg {
  width: 100%;
  height: 100%;
}

.animated-background {
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