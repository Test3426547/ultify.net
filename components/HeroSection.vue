<template>
  <section class="hero-section position-relative">
    <div class="container">
      <h1 class="fw-bold mb-5 text-white text-center">GET A WEBSITE EXACTLY THE WAY YOU NEED!</h1>
      <div class="carousel-container">
        <div class="carousel-wrapper left-carousel">
          <transition name="fade" mode="out-in">
            <img :key="leftCurrentImage" :src="leftCurrentImage" :alt="'Website Example Left ' + (leftCurrentIndex + 1)" class="carousel-image">
          </transition>
        </div>
        <div class="carousel-wrapper right-carousel">
          <transition name="fade" mode="out-in">
            <img :key="rightCurrentImage" :src="rightCurrentImage" :alt="'Website Example Right ' + (rightCurrentIndex + 1)" class="carousel-image">
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #38bdf8;  /* Adjusted to match the blue in the image */
  padding: 2rem 0;
  overflow: hidden;
}

h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  white-space: nowrap;
  margin-bottom: 2rem;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.carousel-wrapper {
  width: 45%;  /* Adjust as needed */
  aspect-ratio: 16 / 9;  /* Maintain aspect ratio */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* This will ensure the image covers the entire container */
  object-position: center;
}

.case-studies-btn {
  background-color: white;
  color: #38bdf8;
  font-weight: bold;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.case-studies-btn:hover {
  background-color: #f0f0f0;
  color: #38bdf8;
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

  h1 {
    font-size: 1.5rem;
    white-space: normal;
  }

  .carousel-container {
    flex-direction: column;
  }

  .carousel-wrapper {
    width: 90%;
    margin-bottom: 1rem;
  }
}
</style>