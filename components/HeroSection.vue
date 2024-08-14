<template>
  <section class="hero-section position-relative bg-primary">
    <div class="container d-flex flex-column justify-content-between h-100">
      <h1 class="fw-bold text-white text-center mb-0 hero-title">GET A WEBSITE EXACTLY THE WAY YOU NEED!</h1>
      <div class="carousel-container row justify-content-center align-items-center">
        <div class="carousel-wrapper col-md-6 left-carousel">
          <transition name="fade" mode="out-in">
            <img :key="leftCurrentImage" :src="leftCurrentImage" :alt="'Website Example Left ' + (leftCurrentIndex + 1)" class="carousel-image">
          </transition>
        </div>
        <div class="carousel-wrapper col-md-6 right-carousel">
          <transition name="fade" mode="out-in">
            <img :key="rightCurrentImage" :src="rightCurrentImage" :alt="'Website Example Right ' + (rightCurrentIndex + 1)" class="carousel-image">
          </transition>
        </div>
      </div>
      <div class="text-center">
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
        y: -10,
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
  min-height: 100vh;
  padding: 2rem 0;
  overflow: hidden;
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.2;
  white-space: nowrap;
  margin-top: -200px;
}

.carousel-container {
  height: 60vh;
}

.carousel-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.left-carousel {
  transform: translateX(-200px);
}

.carousel-image {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.case-studies-btn {
  font-weight: bold;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  margin-bottom: -200px;
}

.case-studies-btn:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .hero-title {
    font-size: 1.5rem;
    white-space: normal;
    margin-top: 0;
  }

  .carousel-container {
    height: auto;
  }

  .carousel-wrapper {
    height: 40vh;
    margin-bottom: 1rem;
  }

  .left-carousel {
    transform: none;
  }

  .case-studies-btn {
    margin-bottom: 0;
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
  }
}
</style>