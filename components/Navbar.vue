<template>
  <header>
    <nav class="navbar fixed-top" aria-label="Main navigation">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">
          <img src="/ultify.svg" alt="Ultify Logo" height="75" width="auto">
        </NuxtLink>
        <button 
          class="navbar-toggler" 
          type="button" 
          @click="toggleMenu" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="visually-hidden">Menu</span>
          <div class="hamburger-circle">
            <div class="hamburger">
              <span></span>
              <span></span>
            </div>
          </div>
        </button>
      </div>
    </nav>

    <div 
      class="offcanvas" 
      :class="{ 'show': isMenuOpen }" 
      ref="offcanvas"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <button 
        class="navbar-toggler offcanvas-toggler" 
        type="button" 
        @click="toggleMenu" 
        aria-label="Close navigation"
      >
        <span class="visually-hidden">Close</span>
        <div class="hamburger-circle">
          <div class="close-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
      <div class="offcanvas-body">
        <ul class="nav-list">
          <li><NuxtLink to="/" @click="toggleMenu">Home</NuxtLink></li>
          <li class="services-dropdown">
            <button @click="toggleServices" aria-expanded="false">
              Services <span class="arrow" :class="{ 'up': showServices }">&#9662;</span>
            </button>
            <ul v-if="showServices" class="services-submenu">
              <li><NuxtLink to="/website" @click="toggleMenu">Website</NuxtLink></li>
              <li><NuxtLink to="/social-media" @click="toggleMenu">Social Media</NuxtLink></li>
              <li><NuxtLink to="/seo" @click="toggleMenu">SEO</NuxtLink></li>
              <li><NuxtLink to="/paid-media" @click="toggleMenu">Paid Media</NuxtLink></li>
              <li><NuxtLink to="/content-creation" @click="toggleMenu">Content Creation</NuxtLink></li>
              <li><NuxtLink to="/print-advertising" @click="toggleMenu">Print Advertising</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/about-us" @click="toggleMenu">About Us</NuxtLink></li>
          <li><NuxtLink to="/consultation" @click="toggleMenu">Consultation</NuxtLink></li>
          <li><NuxtLink to="/contact-us" @click="toggleMenu">Contact Us</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const isMenuOpen = ref(false)
const showServices = ref(false)
const router = useRouter()
const offcanvas = ref<HTMLElement | null>(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    showServices.value = false
  }
}

const toggleServices = () => {
  showServices.value = !showServices.value
}

const animateMenuItems = () => {
  if (!offcanvas.value) return

  const menuItems = offcanvas.value.querySelectorAll('.nav-list a, .nav-list button')
  menuItems.forEach((item, index) => {
    gsap.fromTo(item, 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, delay: index * 0.1, ease: 'power2.out' }
    )
  })
}

onMounted(() => {
  router.afterEach(() => {
    isMenuOpen.value = false
    showServices.value = false
  })

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false
    showServices.value = false
  }
}

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    nextTick(() => {
      animateMenuItems()
    })
  }
})
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
  background-color: transparent !important;
  box-shadow: none !important;
}

.navbar-brand img {
  max-height: 75px;
  width: auto;
}

.navbar-toggler {
  border: none;
  padding: 0;
  background: transparent;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
/* Your existing styles here */
/* Add these new styles for accessibility and responsiveness */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 769px) {
  .navbar-toggler {
    display: none;
  }

  .offcanvas {
    position: static;
    transform: none;
    width: auto;
    background-color: transparent;
    padding-top: 0;
  }

  .nav-list {
    flex-direction: row;
  }

  .nav-list li {
    margin-bottom: 0;
    margin-right: 1rem;
  }

  .nav-list a,
  .nav-list button {
    font-size: 1rem;
  }

  .services-submenu {
    position: absolute;
    background-color: var(--bs-primary);
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>