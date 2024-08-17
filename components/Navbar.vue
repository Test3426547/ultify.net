<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <img src="/ultify.svg" alt="Ultify Logo" height="75" width="auto">
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><NuxtLink to="/website" class="dropdown-item">Website</NuxtLink></li>
                <li><NuxtLink to="/social-media" class="dropdown-item">Social Media</NuxtLink></li>
                <li><NuxtLink to="/seo" class="dropdown-item">SEO</NuxtLink></li>
                <li><NuxtLink to="/paid-media" class="dropdown-item">Paid Media</NuxtLink></li>
                <li><NuxtLink to="/content-creation" class="dropdown-item">Content Creation</NuxtLink></li>
                <li><NuxtLink to="/print-advertising" class="dropdown-item">Print Advertising</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/consultation" class="nav-link">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const offcanvas = document.getElementById('offcanvasNavbar')
  offcanvas?.addEventListener('show.bs.offcanvas', () => {
    gsap.fromTo('.nav-link', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.3, delay: 0.2 }
    )
  })
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

.offcanvas {
  background-color: var(--bs-primary);
}

.offcanvas-header .btn-close {
  color: var(--bs-white);
}

.nav-link {
  color: var(--bs-white);
  font-size: 1.5rem;
  padding: 1rem 0;
  transition: color 0.3s ease;
}

.nav-link:hover, .nav-link:focus {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu {
  background-color: var(--bs-primary);
  border: none;
}

.dropdown-item {
  color: var(--bs-white);
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
}

.dropdown-item:hover, .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--bs-white);
}

@media (max-width: 991.98px) {
  .offcanvas {
    width: 100%;
  }
}
</style>