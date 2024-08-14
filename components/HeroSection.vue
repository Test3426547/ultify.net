<template>
  <section class="hero-section position-relative bg-primary">
    <div class="container h-100 d-flex flex-column justify-content-between">
      <h1 class="text-white text-center hero-title" ref="heroTitle">GET A WEBSITE EXACTLY THE WAY YOU NEED!</h1>
      <div class="carousel-container d-flex justify-content-center align-items-center">
        <div class="carousel-wrapper left-carousel" ref="leftCarousel">
          <transition name="fade" mode="out-in">
            <img :key="leftCurrentImage" :src="leftCurrentImage" :alt="'Website Example Left'" class="carousel-image">
          </transition>
        </div>
        <div class="carousel-wrapper right-carousel" ref="rightCarousel">
          <transition name="fade" mode="out-in">
            <img :key="rightCurrentImage" :src="rightCurrentImage" :alt="'Website Example Right'" class="carousel-image">
          </transition>
        </div>
      </div>
      <div class="text-center">
        <NuxtLink to="/case-studies" class="btn btn-light rounded-pill case-studies-btn" ref="caseStudiesBtn">Case Studies</NuxtLink>
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

const heroTitle = ref(null)
const leftCarousel = ref(null)
const rightCarousel = ref(null)
const caseStudiesBtn = ref(null)

let interval

const changeImages = () => {
  leftCurrentIndex.value = (leftCurrentIndex.value + 1) % leftImages.length
  rightCurrentIndex.value = (rightCurrentIndex.value + 1) % rightImages.length
  leftCurrentImage.value = leftImages[leftCurrentIndex.value]
  rightCurrentImage.value = rightImages[rightCurrentIndex.value]
}

onMounted(() => {
  interval = setInterval(changeImages, 5000)

  gsap.from(heroTitle.value, {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from(leftCarousel.value, {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })

  gsap.from(rightCarousel.value, {
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })

  gsap.from(caseStudiesBtn.value, {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: 'power3.out'
  })

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
  padding: 5vh 0;
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 5vh;
}

.carousel-container {
  margin-bottom: 5vh;
}

.carousel-wrapper {
  position: relative;
  width: 45%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.left-carousel {
  transform: perspective(1000px) rotateY(10deg);
}

.right-carousel {
  transform: perspective(1000px) rotateY(-10deg);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.case-studies-btn {
  color: var(--bs-primary);
  font-weight: bold;
  padding: 0.75rem 2rem;
  font-size: clamp(1rem, 2vw, 1.25rem);
  transition: all 0.3s ease;
}

.case-studies-btn:hover {
  background-color: var(--bs-white);
  color: var(--bs-primary);
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

@media (max-width: 768px) {
  .hero-section {
    padding: 3vh 0;
  }

  .carousel-container {
    flex-direction: column;
    align-items: center;
  }

  .carousel-wrapper {
    width: 90%;
    margin-bottom: 3vh;
  }

  .left-carousel,
  .right-carousel {
    transform: none;
  }
}
</style>