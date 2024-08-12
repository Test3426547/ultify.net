<template>
  <section class="hero-section position-relative">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-left content-wrapper">
          <h1 class="fw-bold mb-4 text-white">
            GET A WEBSITE EXACTLY THE WAY YOU NEED!
          </h1>
          <p class="lead mb-5">
            You have high standards. We have the expertise to meet them.
          </p>
          <NuxtLink to="/case-studies" class="btn btn-light btn-lg rounded-pill">Case Studies</NuxtLink>
        </div>
        <div class="col-lg-6 image-wrapper">
          <transition name="fade" mode="out-in">
            <img :key="currentImage" :src="currentImage" :alt="'Website Example ' + (currentIndex + 1)" class="img-fluid rounded shadow-lg">
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/home-01.png',
  '/home-06.png',
  '/home-07.png',
  '/home-08.png'
]
const currentIndex = ref(0)
const currentImage = ref(images[0])
let interval

const changeImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  currentImage.value = images[currentIndex.value]
}

onMounted(() => {
  interval = setInterval(changeImage, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - 80px); /* Adjust based on your navbar height */
  display: flex;
  align-items: center;
  background-color: var(--bs-primary);
  padding: 4rem 0;
  overflow: hidden;
}

.content-wrapper {
  color: white;
}

.content-wrapper h1 {
  font-size: 3rem;
  line-height: 1.2;
}

.lead {
  font-size: 1.25rem;
}

.btn-light {
  color: var(--bs-primary);
  font-weight: bold;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.btn-light:hover {
  background-color: white;
  color: var(--bs-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  position: relative;
  z-index: 1;
  padding-right: 100px; /* Move images 100px to the right */
  overflow: hidden; /* Hide any overflow */
}

.image-wrapper img {
  max-width: none; /* Allow image to exceed wrapper width */
  height: 100%; /* Ensure image fills the height */
  width: auto; /* Maintain aspect ratio */
  position: absolute; /* Position the image absolutely within the wrapper */
  top: 0;
  left: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 991.98px) {
  .hero-section {
    text-align: center;
    padding: 3rem 0;
  }

  .content-wrapper {
    margin-bottom: 2rem;
  }

  .content-wrapper h1 {
    font-size: 2.5rem;
  }

  .image-wrapper {
    padding-right: 0; /* Remove right padding on mobile */
  }

  .image-wrapper img {
    position: static; /* Reset positioning on mobile */
    max-width: 100%; /* Allow image to be responsive on mobile */
    height: auto;
  }
}

@media (min-width: 1920px) {
  .hero-section {
    min-height: calc(100vh - 100px);
  }

  .content-wrapper h1 {
    font-size: 4rem;
  }

  .lead {
    font-size: 1.5rem;
  }

  .btn-light {
    font-size: 1.25rem;
    padding: 1rem 2.5rem;
  }
}
</style >