<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <img src="/ultify.svg" alt="Ultify Logo" height="30">
      </NuxtLink>
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-label="Toggle navigation">
        <div class="hamburger" :class="{ 'is-active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>

  <div class="offcanvas-menu" :class="{ 'is-open': isMenuOpen }">
    <div class="offcanvas-menu-inner">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
          <NuxtLink :to="item.path" class="nav-link" @click="closeMenu">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const isMenuOpen = ref(false)
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Consultation', path: '/consultation' },
  { name: 'Contact Us', path: '/contact-us' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  animateMenu()
}

const closeMenu = () => {
  isMenuOpen.value = false
  animateMenu()
}

const animateMenu = () => {
  const tl = gsap.timeline()
  if (isMenuOpen.value) {
    tl.to('.offcanvas-menu', { x: '0%', duration: 0.5, ease: 'power2.out' })
    tl.to('.nav-link', { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 }, '-=0.3')
  } else {
    tl.to('.nav-link', { opacity: 0, y: 20, stagger: 0.05, duration: 0.2 })
    tl.to('.offcanvas-menu', { x: '100%', duration: 0.5, ease: 'power2.in' }, '-=0.1')
  }
}

onMounted(() => {
  gsap.set('.offcanvas-menu', { x: '100%' })
  gsap.set('.nav-link', { opacity: 0, y: 20 })
})
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}

.navbar-brand img {
  max-height: 75px;
  width: auto;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--bs-primary);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger span:nth-child(1) { top: 0px; }
.hamburger span:nth-child(2) { top: 9px; }
.hamburger span:nth-child(3) { top: 18px; }

.hamburger.is-active span:nth-child(1) {
  top: 9px;
  transform: rotate(135deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.is-active span:nth-child(3) {
  top: 9px;
  transform: rotate(-135deg);
}

.offcanvas-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--bs-primary);
  z-index: 1050;
  overflow-y: auto;
}

.offcanvas-menu-inner {
  padding: 5rem 2rem;
}

.nav-link {
  color: var(--bs-white);
  font-size: 1.5rem;
  padding: 1rem 0;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 991.98px) {
  .offcanvas-menu {
    width: 100%;
    max-width: none;
  }
}
</style>