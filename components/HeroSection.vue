<template>
  <section class="hero-section position-relative">
    <div class="container h-100 d-flex flex-column">
      <div class="heading-wrapper">
        <h1 class="hero-title text-center" ref="heroTitle">GET A WEBSITE EXACTLY THE WAY YOU NEED!</h1>
      </div>
      <div class="content-wrapper">
        <div class="carousel-container d-flex justify-content-center align-items-center">
          <div class="carousel-wrapper" ref="carousel">
            <transition name="fade" mode="out-in">
              <img v-if="imagesLoaded" :key="currentImage" :src="currentImage" :alt="'Website Example'" class="carousel-image">
            </transition>
          </div>
        </div>
        <div class="text-center">
          <NuxtLink to="/website" class="btn rounded-pill case-studies-btn" ref="caseStudiesBtn">View Website Page</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const images = ['/home-17.png', '/home-18.png', '/home-19.png', '/home-20.png']

const currentIndex = ref(0)
const currentImage = ref(images[0])

const heroTitle = ref(null)
const carousel = ref(null)
const caseStudiesBtn = ref(null)

const imagesLoaded = ref(false)

let interval

const changeImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  currentImage.value = images[currentIndex.value]
}

const preloadImages = (imageArray) => {
  return Promise.all(imageArray.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = reject
      img.src = src
    })
  }))
}

onMounted(async () => {
  try {
    await preloadImages(images)
    imagesLoaded.value = true
    interval = setInterval(changeImage, 5000)
  } catch (error) {
    console.error('Error preloading images:', error)
  }

  caseStudiesBtn.value.addEventListener('mouseenter', () => {
    gsap.to(caseStudiesBtn.value, {
      y: -5,
      duration: 0.2,
      repeat: 3,
      yoyo: true,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(caseStudiesBtn.value, {
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        })
      }
    })
  })
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  padding: 0; /* Removed all padding, we'll control it in child elements */
  background-color: var(--bs-primary);
}

.container {
  height: 100vh;
  padding-bottom: 0; /* Remove default container bottom padding if any */
}

.heading-wrapper {
  flex: 0 0 auto;
  padding-top: 35px; /* Kept as is */
}

.content-wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0; /* Removed bottom padding */
}

.hero-title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
  color: var(--bs-white);
}

.carousel-container {
  width: 100%;
  margin-bottom: 3vh; /* Reduced from 5vh */
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-studies-btn {
  font-weight: bold;
  padding: 0.75rem 2rem;
  font-size: clamp(1rem, 2vw, 1.25rem);
  transition: all 0.3s ease;
  background-color: var(--bs-light);
  color: var(--bs-primary);
  margin-top: -50px; /* This will move the button up */
}

.case-studies-btn:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile styles */
@media (max-width: 768px) {
  .heading-wrapper {
    padding-top: 20px; /* Kept as is */
  }

  .carousel-wrapper {
    width: 90%;
  }

  .case-studies-btn {
    margin-top: -30px; /* Kept as is */
  }
}
</style>