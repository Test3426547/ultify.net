<template>
    <nav class="navbar navbar-expand-lg bg-white bg-opacity-80 backdrop-blur-2xl border-bottom shadow-md my-3 py-3 position-absolute start-0 end-0 mx-4 z-index-3 rounded-full sticky top-2">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center" aria-label="Home">
          <span :class="['font-bold', { 'text-lg': !isMobileView, 'text-sm': isMobileView }]">Ultify Solutions</span>
        </NuxtLink>
        
        <button class="navbar-toggler shadow-none" type="button" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        
        <div class="collapse navbar-collapse" :class="{ show: mobileMenuOpen }">
          <ul class="navbar-nav mx-auto d-none d-lg-flex">
            <li class="nav-item mx-2">
              <NuxtLink to="/about-us" class="nav-link d-flex align-items-center text-blue-gray-700 hover:text-pink-500">
                About Us
              </NuxtLink>
            </li>
            <li class="nav-item mx-2 relative" @mouseleave="servicesDropdownOpen = false">
              <button @click="toggleServicesDropdown" class="nav-link d-flex align-items-center text-blue-gray-700 hover:text-pink-500 bg-transparent border-0 focus:outline-none">
                Services
              </button>
              <transition name="fade">
                <div v-if="servicesDropdownOpen" class="dropdown-menu absolute bg-white shadow-lg rounded-lg p-2 mt-2 z-10">
                  <NuxtLink to="/website" class="block px-4 py-2 hover:bg-gray-100">Website</NuxtLink>
                  <NuxtLink to="/social-media" class="block px-4 py-2 hover:bg-gray-100">Social Media</NuxtLink>
                  <NuxtLink to="/seo" class="block px-4 py-2 hover:bg-gray-100">SEO</NuxtLink>
                  <NuxtLink to="/paid-media" class="block px-4 py-2 hover:bg-gray-100">Paid Media</NuxtLink>
                  <NuxtLink to="/content-creation" class="block px-4 py-2 hover:bg-gray-100">Content Creation</NuxtLink>
                  <NuxtLink to="/print-advertising" class="block px-4 py-2 hover:bg-gray-100">Print Advertising</NuxtLink>
                </div>
              </transition>
            </li>
            <li class="nav-item mx-2">
              <NuxtLink to="/consultation" class="nav-link d-flex align-items-center text-blue-gray-700 hover:text-pink-500">
                Consultation
              </NuxtLink>
            </li>
            <li class="nav-item mx-2">
              <NuxtLink to="/contact-us" class="nav-link d-flex align-items-center text-blue-gray-700 hover:text-pink-500">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
          
          <ul class="navbar-nav d-lg-none d-block mt-3">
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link text-blue-gray-700 hover:text-pink-500">
                About Us
              </NuxtLink>
            </li>
            <li class="nav-item">
              <div class="nav-link text-blue-gray-700 hover:text-pink-500 font-bold" @click="toggleMobileServicesDropdown">
                Services
              </div>
              <transition name="fade">
                <div v-if="mobileServicesDropdownOpen" class="mt-2 rounded-lg bg-white shadow-md">
                  <NuxtLink to="/website" class="dropdown-item">Website</NuxtLink>
                  <NuxtLink to="/social-media" class="dropdown-item">Social Media</NuxtLink>
                  <NuxtLink to="/seo" class="dropdown-item">SEO</NuxtLink>
                  <NuxtLink to="/paid-media" class="dropdown-item">Paid Media</NuxtLink>
                  <NuxtLink to="/content-creation" class="dropdown-item">Content Creation</NuxtLink>
                  <NuxtLink to="/print-advertising" class="dropdown-item">Print Advertising</NuxtLink>
                </div>
              </transition>
            </li>
            <li class="nav-item">
              <NuxtLink to="/consultation" class="nav-link text-blue-gray-700 hover:text-pink-500">
                Consultation
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact-us" class="nav-link text-blue-gray-700 hover:text-pink-500">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mobileMenuOpen: false,
        servicesDropdownOpen: false,
        mobileServicesDropdownOpen: false,
        isMobileView: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
      },
      toggleMobileServicesDropdown() {
        this.mobileServicesDropdownOpen = !this.mobileServicesDropdownOpen;
      },
      checkMobileView() {
        this.isMobileView = window.innerWidth <= 768;
      }
    },
    mounted() {
      this.checkMobileView();
      window.addEventListener('resize', this.checkMobileView);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkMobileView);
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind and Bootstrap integration */
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
  }
  .navbar-toggler-bar {
    display: block;
    width: 100%;
    height: 0.2em;
    margin-top: 0.3em;
    background-color: #333;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .dropdown-menu {
    position: absolute;
    background: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    left: 0;
  }
  .dropdown-item {
    padding: 0.25rem 1.5rem;
    color: #212529;
    text-decoration: none;
  }
  .mt-2.rounded-lg {
    border-radius: 0.5rem;
  }
  .bg-white.bg-opacity-80 {
    backdrop-filter: blur(2xl);
    border-radius: 9999px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>  