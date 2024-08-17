<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <img src="/ultify.svg" alt="Ultify Logo" height="75" width="auto">
      </NuxtLink>
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-label="Toggle navigation">
        <div class="hamburger-circle">
          <div class="hamburger">
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
    </div>
  </nav>

  <div class="offcanvas" :class="{ 'show': isMenuOpen }">
    <div class="offcanvas-header">
      <button type="button" class="close-btn" @click="toggleMenu" aria-label="Close">
        <span>&times;</span>
      </button>
    </div>
    <div class="offcanvas-body">
      <ul class="nav-list">
        <li><NuxtLink to="/" @click="toggleMenu">Home</NuxtLink></li>
        <li class="services-dropdown">
          <a href="#" @click.prevent="toggleServices">Services <span class="arrow" :class="{ 'up': showServices }">&#9662;</span></a>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)
const showServices = ref(false)
const router = useRouter()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    showServices.value = false
  }
}

const toggleServices = () => {
  showServices.value = !showServices.value
}

router.afterEach(() => {
  isMenuOpen.value = false
  showServices.value = false
})
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
  background-color: transparent !important;
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
  height: 14px;
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
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { bottom: 0; }

.offcanvas {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--bs-primary);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
}

.offcanvas.show {
  transform: translateX(0);
}

.offcanvas-header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}

.offcanvas-body {
  padding: 2rem;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 1rem;
}

.nav-list a {
  color: #fff;
  font-size: 2rem;
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
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.services-submenu li {
  margin-bottom: 0.5rem;
}

.services-submenu a {
  font-size: 1.5rem;
}

@media (max-width: 991.98px) {
  .offcanvas {
    max-width: none;
  }
}
</style>