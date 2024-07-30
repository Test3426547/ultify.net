<template>
    <nav class="fixed w-full top-2 left-1/2 transform -translate-x-1/2 p-3 bg-white bg-opacity-50 backdrop-blur-lg shadow-md rounded-full z-50 md:w-9/12">
      <div class="flex items-center justify-between max-w-screen-lg mx-auto">
        <!-- Header logo -->
        <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
          Ultify Solutions
        </NuxtLink>
  
        <!-- Mobile toggle (Hamburger icon) -->
        <div class="md:hidden ml-auto">
          <button @click="toggleDrawer" aria-label="Toggle navigation">
            <svg
              class="h-8 w-8 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
  
        <!-- Navbar for larger screens -->
        <div class="hidden md:flex space-x-8 text-sm font-sans items-center">
          <!-- Removed Home link for Desktop -->
          <NuxtLink to="/about-us" class="nav-item">About Us</NuxtLink>
          <div class="relative group" @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false">
            <button class="nav-item" @click="toggleServicesDropdown">
              Services
            </button>
            <transition name="fade">
              <div v-if="servicesDropdownOpen" class="absolute left-0 mt-2 bg-white bg-opacity-50 shadow-lg rounded-lg p-2 z-50" @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false">
                <NuxtLink to="/website" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Website</NuxtLink>
                <NuxtLink to="/social-media" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Social Media</NuxtLink>
                <NuxtLink to="/seo" class="block px-4 py-2 text-gray-800 hover:text-blue-500">SEO</NuxtLink>
                <NuxtLink to="/paid-media" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Paid Media</NuxtLink>
                <NuxtLink to="/content-creation" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Content Creation</NuxtLink>
                <NuxtLink to="/print-advertising" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Print Advertising</NuxtLink>
              </div>
            </transition>
          </div>
          <NuxtLink to="/consultation" class="nav-item">Consultation</NuxtLink>
          <NuxtLink to="/contact-us" class="nav-item">Contact Us</NuxtLink>
        </div>
      </div>
  
      <!-- Dark Background Transition for overlay -->
      <transition
        enter-active-class="ease-out duration-300"
        leave-active-class="ease-out duration-300"
      >
        <div v-show="isOpen" class="fixed inset-0 z-50 flex items-center justify-center" @click="handleOutsideClick">
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          <aside ref="drawer" class="w-full max-w-md p-6 bg-white bg-opacity-50 rounded-lg shadow-lg transform transition-transform duration-300 z-50" @click.stop :class="{ 'translate-open': isOpen, 'translate-closed': !isOpen }">
            <div class="flex justify-end">
              <button @click="toggleDrawer" aria-label="Close menu">
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav class="mt-6">
              <ul class="space-y-6">
                <li><NuxtLink to="/about-us" @click="toggleDrawer" class="text-lg font-medium text-gray-900">About Us</NuxtLink></li>
                <li>
                  <button @click="toggleServicesDropdown" class="text-lg font-medium text-gray-900 w-full text-left">
                    Services
                  </button>
                  <transition name="fade">
                    <ul v-if="servicesDropdownOpen" class="mt-2 pl-4 space-y-2">
                      <li><NuxtLink to="/website" @click="toggleDrawer" class="block">Website</NuxtLink></li>
                      <li><NuxtLink to="/social-media" @click="toggleDrawer" class="block">Social Media</NuxtLink></li>
                      <li><NuxtLink to="/seo" @click="toggleDrawer" class="block">SEO</NuxtLink></li>
                      <li><NuxtLink to="/paid-media" @click="toggleDrawer" class="block">Paid Media</NuxtLink></li>
                      <li><NuxtLink to="/content-creation" @click="toggleDrawer" class="block">Content Creation</NuxtLink></li>
                      <li><NuxtLink to="/print-advertising" @click="toggleDrawer" class="block">Print Advertising</NuxtLink></li>
                    </ul>
                  </transition>
                </li>
                <li><NuxtLink to="/consultation" @click="toggleDrawer" class="text-lg font-medium text-gray-900">Consultation</NuxtLink></li>
                <li><NuxtLink to="/contact-us" @click="toggleDrawer" class="text-lg font-medium text-gray-900">Contact Us</NuxtLink></li>
              </ul>
            </nav>
          </aside>
        </div>
      </transition>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        servicesDropdownOpen: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isOpen = !this.isOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
      },
      handleOutsideClick(e) {
        if (!this.$refs.drawer.contains(e.target)) {
          this.isOpen = false;
        }
      },
    },
    watch: {
      isOpen(isOpen) {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      },
    },
    mounted() {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.isOpen = false;
        }
      });
    },
  };
  </script>
  
  <style scoped>
  /* Adjusting the navbar styling */
  nav {
    padding: 0.75rem;
  }
  
  /* Pill shape and further reduced width */
  .md\:rounded-lg {
    border-radius: 9999px;
  }
  
  .md\:w-9\/12 {
    width: 75%;
  }
  
  /* Nav items */
  .nav-item {
    font-size: 0.875rem; /* Tailwind text-sm */
    font-weight: 600; /* Tailwind font-semibold */
    color: #1f2937; /* Tailwind text-gray-800 */
    padding-bottom: 0.25rem; /* Tailwind pb-1 */
    border-bottom-width: 2px; /* Tailwind border-b-2 */
    border-color: transparent; /* Tailwind border-transparent */
    transition: color 0.3s, border-color 0.3s;
  }
  
  .nav-item:hover {
    color: #3b82f6; /* Tailwind hover:text-blue-500 */
    border-color: #3b82f6; /* Tailwind hover:border-blue-500 */
  }
  
  /* Transition styles for fade effect */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  /* Adjustments for mobile menu positioning */
  .translate-open {
    transform: translateY(50%);
  }
  .translate-closed {
    transform: translateY(-100%);
  }
  </style>  