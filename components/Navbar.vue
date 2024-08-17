<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <img src="/ultify.svg" alt="Ultify Logo" height="75" width="auto">
      </NuxtLink>
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-label="Toggle navigation">
        <div class="hamburger-circle">
          <div class="hamburger" ref="hamburger">
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
    </div>
  </nav>

  <div class="offcanvas" :class="{ 'show': isMenuOpen }" ref="offcanvas">
    <button class="close-btn" @click="toggleMenu" aria-label="Close menu">
      <div class="hamburger-circle">
        <div class="hamburger" ref="closeHamburger">
          <span></span>
          <span></span>
        </div>
      </div>
    </button>
    <div class="offcanvas-body">
      <ul class="nav-list">
        <li><NuxtLink to="/" @click="toggleMenu" ref="menuItem">Home</NuxtLink></li>
        <li class="services-dropdown">
          <a href="#" @click.prevent="toggleServices" ref="menuItem">Services <span class="arrow" :class="{ 'up': showServices }">&#9662;</span></a>
          <ul v-if="showServices" class="services-submenu">
            <li><NuxtLink to="/website" @click="toggleMenu" ref="menuItem">Website</NuxtLink></li>
            <li><NuxtLink to="/social-media" @click="toggleMenu" ref="menuItem">Social Media</NuxtLink></li>
            <li><NuxtLink to="/seo" @click="toggleMenu" ref="menuItem">SEO</NuxtLink></li>
            <li><NuxtLink to="/paid-media" @click="toggleMenu" ref="menuItem">Paid Media</NuxtLink></li>
            <li><NuxtLink to="/content-creation" @click="toggleMenu" ref="menuItem">Content Creation</NuxtLink></li>
            <li><NuxtLink to="/print-advertising" @click="toggleMenu" ref="menuItem">Print Advertising</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/about-us" @click="toggleMenu" ref="menuItem">About Us</NuxtLink></li>
        <li><NuxtLink to="/consultation" @click="toggleMenu" ref="menuItem">Consultation</NuxtLink></li>
        <li><NuxtLink to="/contact-us" @click="toggleMenu" ref="menuItem">Contact Us</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const isMenuOpen = ref(false)
const showServices = ref(false)
const router = useRouter()
const hamburger = ref(null)
const closeHamburger = ref(null)
const offcanvas = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  animateHamburger()
  if (!isMenuOpen.value) {
    showServices.value = false
  }
}

const toggleServices = () => {
  showServices.value = !showServices.value
}

const animateHamburger = () => {
  const spans = (hamburger.value as HTMLElement | null)?.querySelectorAll('span') || []
  const closeSpans = (closeHamburger.value as HTMLElement | null)?.querySelectorAll('span') || []
  
  if (isMenuOpen.value) {
    gsap.to(spans[0], { rotation: 45, y: 4, duration: 0.3 })
    gsap.to(spans[1], { rotation: -45, y: -4, duration: 0.3 })
    gsap.to(closeSpans[0], { rotation: 45, y: 4, duration: 0.3 })
    gsap.to(closeSpans[1], { rotation: -45, y: -4, duration: 0.3 })
  } else {
    gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 })
    gsap.to(spans[1], { rotation: 0, y: 0, duration: 0.3 })
    gsap.to(closeSpans[0], { rotation: 0, y: 0, duration: 0.3 })
    gsap.to(closeSpans[1], { rotation: 0, y: 0, duration: 0.3 })
  }
}

onMounted(() => {
  const menuItems = (offcanvas.value as HTMLElement | null)?.querySelectorAll('[ref="menuItem"]')
  if (menuItems) {
    menuItems.forEach((item: Element) => {
      const menuItem = item as HTMLElement;
      gsap.to(menuItem, {
        y: 10,
        opacity: 0,
        duration: 0.2,
        paused: true,
        ease: 'power2.inOut',
      });
      menuItem.animation = gsap.to(menuItem, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        paused: true,
        ease: 'power2.out',
      });
      
      menuItem.addEventListener('mouseenter', () => menuItem.animation.play());
      menuItem.addEventListener('mouseleave', () => menuItem.animation.reverse());
    });
  }
});

router.afterEach(() => {
  isMenuOpen.value = false
  showServices.value = false
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
}

.navbar-toggler:focus {
  box-shadow: none;
}

.hamburger-circle {
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hamburger {
  width: 20px;
  height: 10px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #000;
  left: 0;
  transition: transform 0.3s ease;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { bottom: 0; }

.offcanvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bs-primary);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
  display: flex;
  flex-direction: column;
}

.offcanvas.show {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 1060;
}

.offcanvas-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav-list li {
  margin-bottom: 2rem;
}

.nav-list a {
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-list a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.services-dropdown {
  position: relative;
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.arrow.up {
  transform: rotate(180deg);
}

.services-submenu {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
}

.services-submenu li {
  margin-bottom: 1rem;
}

.services-submenu a {
  font-size: 2rem;
}

@media (min-width: 768px) {
  .nav-list a {
    font-size: 4rem;
  }
  
  .services-submenu a {
    font-size: 2.5rem;
  }
}
</style>