<template>
  <section class="hero-section position-relative bg-primary overflow-hidden">
    <div class="container h-100 d-flex flex-column justify-content-between">
      <h1 class="text-white text-center hero-title" ref="heroTitle">GET A WEBSITE EXACTLY THE WAY YOU NEED!</h1>
      <div class="carousel-container d-flex justify-content-center align-items-center">
        <div class="carousel-wrapper left-carousel" ref="leftCarousel">
          <img v-for="(img, index) in leftImages" :key="'left'+index" :src="img" :alt="'Website Example Left ' + (index + 1)" class="carousel-image" :class="{ active: index === leftCurrentIndex }">
        </div>
        <div class="carousel-wrapper right-carousel" ref="rightCarousel">
          <img v-for="(img, index) in rightImages" :key="'right'+index" :src="img" :alt="'Website Example Right ' + (index + 1)" class="carousel-image" :class="{ active: index === rightCurrentIndex }">
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const leftImages = ['/7.png', '/8.png', '/9.png', '/10.png', '/11.png']
const rightImages = ['/13.png', '/14.png', '/15.png', '/16.png', '/17.png']

const leftCurrentIndex = ref(0)
const rightCurrentIndex = ref(0)

const heroTitle = ref(null)
const leftCarousel = ref(null)
const rightCarousel = ref(null)
const caseStudiesBtn = ref(null)

let interval

const changeImages = () => {
  gsap.to('.carousel-image.active', {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    onComplete: () => {
      leftCurrentIndex.value = (leftCurrentIndex.value + 1) % leftImages.length
      rightCurrentIndex.value = (rightCurrentIndex.value + 1) % rightImages.length
      
      gsap.to('.carousel-image.active', {
        opacity: 1,
        scale: 1,
        duration: 0.5
      })
    }
  })
}

onMounted(() => {
  interval = setInterval(changeImages, 5000)

  gsap.from(heroTitle.value, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from(leftCarousel.value, {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  })

  gsap.from(rightCarousel.value, {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  })

  gsap.from(caseStudiesBtn.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
  })

  caseStudiesBtn.value.addEventListener('mouseenter', () => {
    gsap.to(caseStudiesBtn.value, {
      y: -5,
      duration: 0.2,
      repeat: 5,
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

  // Parallax effect
  gsap.to('.left-carousel', {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      scrub: true
    }, 
  })

  gsap.to('.right-carousel', {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      scrub: true
    }, 
  })
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-section {
  height: 100vh;
  padding: 2rem 0;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin: 2rem 0;
}

.carousel-container {
  flex: 1;
  margin: 2rem 0;
}

.carousel-wrapper {
  position: relative;
  width: 45%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.left-carousel {
  transform: translateX(-10%) rotate(-5deg);
}

.right-carousel {
  transform: translateX(10%) rotate(5deg);
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.carousel-image.active {
  opacity: 1;
}

.case-studies-btn {
  color: var(--bs-primary);
  font-weight: bold;
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.case-studies-btn:hover {
  background-color: var(--bs-white);
  color: var(--bs-primary);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-section {
    height: auto;
    min-height: 100vh;
  }

  .carousel-container {
    flex-direction: column;
    align-items: center;
  }

  .carousel-wrapper {
    width: 80%;
    margin-bottom: 2rem;
  }

  .left-carousel, .right-carousel {
    transform: none;
  }

  .case-studies-btn {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
}
</style>