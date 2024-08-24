<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-start">
      <!-- Left column - Menu options -->
      <div class="menu-column">
        <NuxtLink to="/" class="navbar-brand mb-4">
          <img src="/ultify.svg" alt="Ultify Logo" height="75" width="auto">
        </NuxtLink>
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

      <!-- Right column - Contact form -->
      <div class="contact-form-column">
        <h2 class="text-white mb-4">Get in touch now.</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <input type="text" v-model="form.name" placeholder="Name" class="form-input">
          <input type="email" v-model="form.email" placeholder="Email" class="form-input">
          <input type="text" v-model="form.website" placeholder="Enter your company website" class="form-input">
          <textarea v-model="form.message" placeholder="Message (optional)" rows="4" class="form-input"></textarea>
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Mobile menu toggle button -->
  <button class="navbar-toggler" type="button" @click="toggleMenu" aria-label="Toggle navigation">
    <div class="hamburger-circle">
      <div class="hamburger" :class="{ 'is-active': isMenuOpen }">
        <span></span>
        <span></span>
      </div>
    </div>
  </button>

  <!-- Mobile off-canvas menu -->
  <div class="offcanvas" :class="{ 'show': isMenuOpen }" ref="offcanvas">
    <button class="navbar-toggler offcanvas-toggler" type="button" @click="toggleMenu" aria-label="Close navigation">
      <div class="hamburger-circle">
        <div class="close-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </button>
    <div class="offcanvas-body">
      <!-- Duplicate of the main menu for mobile -->
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
const offcanvas = ref(null)

const form = ref({
  name: '',
  email: '',
  website: '',
  message: ''
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    showServices.value = false
  }
}

const toggleServices = () => {
  showServices.value = !showServices.value
}

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = {
    name: '',
    email: '',
    website: '',
    message: ''
  }
}

onMounted(() => {
  const menuItems = document.querySelectorAll('[ref="menuItem"]')
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
  padding: 2rem;
  background-color: var(--bs-primary) !important;
  height: 100vh;
  overflow-y: auto;
}

.container-fluid {
  height: 100%;
}

.menu-column {
  width: calc(50% - 150px);
}

.contact-form-column {
  width: calc(50% - 150px);
}

.navbar-brand img {
  max-height: 75px;
  width: auto;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 1.5rem;
}

.nav-list a {
  color: #fff;
  font-size: 2rem;
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
  padding-left: 1rem;
  margin-top: 1rem;
}

.services-submenu li {
  margin-bottom: 0.5rem;
}

.services-submenu a {
  font-size: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

textarea.form-input {
  border-radius: 1.5rem;
}

.submit-button {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 2px solid #fff;
  background-color: #fff;
  color: var(--bs-primary);
  font-weight: bold;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: transparent;
  color: #fff;
}

.navbar-toggler {
  display: none;
  border: none;
  padding: 0;
  background: transparent;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1060;
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

.hamburger, .close-icon {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.hamburger span, .close-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #000;
  left: 0;
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) { top: 25%; }
.hamburger span:nth-child(2) { bottom: 25%; }

.hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg);
  top: 50%;
}

.hamburger.is-active span:nth-child(2) {
  transform: rotate(-45deg);
  bottom: 40%;
}

.close-icon span:nth-child(1) { transform: rotate(45deg); }
.close-icon span:nth-child(2) { transform: rotate(-45deg); }

.offcanvas {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bs-primary);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
}

.offcanvas.show {
  transform: translateX(0);
}

.offcanvas-toggler {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.offcanvas-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    display: none;
  }

  .navbar-toggler {
    display: block;
  }

  .offcanvas {
    display: block;
  }

  .menu-column,
  .contact-form-column {
    width: 100%;
    margin-bottom: 2rem;
  }

  .nav-list a {
    font-size: 1.5rem;
  }

  .services-submenu a {
    font-size: 1.2rem;
  }
}
</style>