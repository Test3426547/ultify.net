<template>
  <header class="navbar sticky-top py-2 transparent-nav">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="/ultify.svg" width="75" alt="Ultify Logo" />
      </NuxtLink>
      <button
        class="navbar-toggler ms-3"
        type="button"
        @click="toggleOffcanvas"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <i class="bi bi-list"></i>
        </span>
      </button>
      <div :class="['offcanvas', 'full-screen-offcanvas', { show: showOffcanvas }]" tabindex="-1" id="navbarNav">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" @click="toggleOffcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="toggleOffcanvas">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link" @click="toggleOffcanvas">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/consultation" class="nav-link" @click="toggleOffcanvas">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact-us" class="nav-link" @click="toggleOffcanvas">Contact Us</NuxtLink>
            </li>
            <li class="nav-item dropdown" :class="{ show: showDropdown }">
              <a class="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="#" id="navbarDropdown" role="button" @click="toggleDropdown" aria-expanded="false">
                Services
                <i :class="showDropdown ? 'bi bi-chevron-up ms-2' : 'bi bi-chevron-down ms-2'"></i>
              </a>
              <ul class="dropdown-menu" :class="{ show: showDropdown }" aria-labelledby="navbarDropdown">
                <li><NuxtLink to="/website" class="dropdown-item" @click="toggleOffcanvas">Website</NuxtLink></li>
                <li><NuxtLink to="/social-media" class="dropdown-item" @click="toggleOffcanvas">Social Media</NuxtLink></li>
                <li><NuxtLink to="/seo" class="dropdown-item" @click="toggleOffcanvas">SEO</NuxtLink></li>
                <li><NuxtLink to="/paid-media" class="dropdown-item" @click="toggleOffcanvas">Paid Media</NuxtLink></li>
                <li><NuxtLink to="/content-creation" class="dropdown-item" @click="toggleOffcanvas">Content Creation</NuxtLink></li>
                <li><NuxtLink to="/print-advertising" class="dropdown-item" @click="toggleOffcanvas">Print Advertising</NuxtLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'

const showOffcanvas = ref(false)
const showDropdown = ref(false)

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value
  if (!showOffcanvas.value) {
    showDropdown.value = false // Close dropdown when closing offcanvas
  }
}

const toggleDropdown = (event) => {
  event.preventDefault()
  showDropdown.value = !showDropdown.value
}

// Ensure body overflow is handled
watch(showOffcanvas, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : ''
})
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  border: none;
  box-shadow: none;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}

.transparent-nav {
  background-color: transparent !important;
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  padding: 0;
}

.navbar-toggler-icon {
  background-image: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-toggler-icon i {
  font-size: 2rem;
  color: #000; /* Black icon */
}

.navbar-nav .nav-link {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.navbar-nav .nav-item {
  margin-bottom: 1rem;
}

.offcanvas {
  background-color: var(--bs-primary) !important;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1040;
}

.offcanvas.show {
  transform: translateX(0);
}

.offcanvas-header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.offcanvas-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.dropdown-menu {
  background-color: var(--bs-primary);
  border: none;
  box-shadow: none;
  position: static;
  float: none;
  transform: none;
  width: 100%;
  text-align: center;
}

.dropdown-item {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.dropdown-toggle::after {
  display: none;
}

.bi-chevron-down, .bi-chevron-up {
  font-size: 1.5rem;
  color: #fff;
}
</style>