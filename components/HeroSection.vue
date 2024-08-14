<template>
  <section class="hero-section position-relative">
    <div class="container">
      <h1 class="fw-bold mb-5 text-white text-center">GET A WEBSITE EXACTLY THE WAY YOU NEED!</h1>
      <div class="row align-items-center justify-content-between">
        <div class="col-md-5 carousel-wrapper">
          <transition name="fade" mode="out-in">
            <img :key="leftCurrentImage" :src="leftCurrentImage" :alt="'Website Example Left ' + (leftCurrentIndex + 1)" class="img-fluid rounded shadow-lg">
          </transition>
        </div>
        <div class="col-md-5 carousel-wrapper">
          <transition name="fade" mode="out-in">
            <img :key="rightCurrentImage" :src="rightCurrentImage" :alt="'Website Example Right ' + (rightCurrentIndex + 1)" class="img-fluid rounded shadow-lg">
          </transition>
        </div>
      </div>
      <div class="text-center mt-5">
        <NuxtLink to="/case-studies" class="btn btn-light btn-lg rounded-pill case-studies-btn" ref="caseStudiesBtn">Case Studies</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const leftImages = ['/7.png', '/8.png', '/9.png', '/10.png', '/11.png']
const rightImages = ['/13.png', '/14.png', '/15.png', '/16.png', '/17.png']

const leftCurrentIndex = ref(0)
const rightCurrentIndex = ref(0)
const leftCurrentImage = ref(leftImages[0])
const rightCurrentImage = ref(rightImages[0])

let interval

const changeImages = () => {
  leftCurrentIndex.value = (leftCurrentIndex.value + 1) % leftImages.length
  rightCurrentIndex.value = (rightCurrentIndex.value + 1) % rightImages.length
  leftCurrentImage.value = leftImages[leftCurrentIndex.value]
  rightCurrentImage.value = rightImages[rightCurrentIndex.value]
}

onMounted(() => {
  interval = setInterval(changeImages, 5000)

  const caseStudiesBtn = ref(null)

  if (caseStudiesBtn.value) {
    caseStudiesBtn.value.addEventListener('mouseenter', () => {
      gsap.to(caseStudiesBtn.value, {
        y: -5,
        duration: 0.2,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut"
      })
    })
  }
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background-color: var(--bs-primary);
  padding: 4rem 0;
  overflow: hidden;
}

h1 {
  font-size: 2rem;
  line-height: 1.2;
  white-space: nowrap;
}

.carousel-wrapper {
  margin-bottom: 2rem;
}

.carousel-wrapper img {
  max-width: 100%;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.case-studies-btn {
  color: var(--bs-primary);
  font-weight: bold;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.case-studies-btn:hover {
  background-color: white;
  color: var(--bs-primary-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

  h1 {
    font-size: 1.5rem;
    white-space: normal;
  }
}

@media (min-width: 1920px) {
  .hero-section {
    min-height: calc(100vh - 100px);
  }

  h1 {
    font-size: 2.5rem;
  }

  .case-studies-btn {
    font-size: 1.25rem;
    padding: 1rem 2.5rem;
  }
}
</style>