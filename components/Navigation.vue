<template>
    <nav class="fixed w-full top-0 p-2 bg-white bg-opacity-80 backdrop-blur-lg shadow-md z-50 rounded-full md:rounded-lg lg:w-10/12 left-1/2 transform -translate-x-1/2">
      <div class="flex items-center justify-between max-w-screen-lg mx-auto">
        <!-- Header logo -->
        <div class="flex items-center">
          <img src="/chatbot-icon.png" alt="Ultify Logo" class="h-10 w-10 mr-2" /> <!-- Replace with your logo path -->
          <NuxtLink to="/" class="text-lg font-bold text-gray-800">Ultify Solutions</NuxtLink>
        </div>
  
        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer" aria-label="Toggle navigation">
            <svg
              class="h-8 w-8 fill-current text-black"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
  
        <!-- Navbar for larger screens -->
        <div class="hidden md:flex space-x-8 text-sm font-sans items-center">
          <NuxtLink to="/about-us" class="nav-item">About Us</NuxtLink>
          <div class="relative group" @mouseenter="servicesDropdownOpen = true" @mouseleave="handleMouseLeave">
            <button class="nav-item">
              Services
            </button>
            <transition name="fade">
              <div v-if="servicesDropdownOpen" class="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-50">
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
        <div v-show="isOpen" class="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40" @click="drawer">
          <aside class="fixed inset-y-0 left-0 w-full md:w-64 bg-white p-6 transition-transform duration-300 z-50" :class="{'translate-x-0': isOpen, '-translate-x-full': !isOpen}" @click.stop>
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img src="/chatbot-icon" alt="Ultify Logo" class="h-10 w-10 mr-2" /> <!-- Replace with your logo path -->
                <NuxtLink to="/" class="text-lg font-bold text-gray-800">Ultify Solutions</NuxtLink>
              </div>
              <button @click="drawer" aria-label="Close menu">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav class="mt-6">
              <ul class="space-y-6">
                <li><NuxtLink to="/" @click="drawer" class="text-lg font-medium text-gray-900">Home</NuxtLink></li>
                <li><NuxtLink to="/about-us" @click="drawer" class="text-lg font-medium text-gray-900">About Us</NuxtLink></li>
                <li>
                  <button @click="toggleServicesDropdown" class="text-lg font-medium text-gray-900 w-full text-left">
                    Services
                  </button>
                  <transition name="fade">
                    <ul v-if="servicesDropdownOpen" class="mt-2 pl-4 space-y-2">
                      <li><NuxtLink to="/website" @click="drawer" class="block">Website</NuxtLink></li>
                      <li><NuxtLink to="/social-media" @click="drawer" class="block">Social Media</NuxtLink></li>
                      <li><NuxtLink to="/seo" @click="drawer" class="block">SEO</NuxtLink></li>
                      <li><NuxtLink to="/paid-media" @click="drawer" class="block">Paid Media</NuxtLink></li>
                      <li><NuxtLink to="/content-creation" @click="drawer" class="block">Content Creation</NuxtLink></li>
                      <li><NuxtLink to="/print-advertising" @click="drawer" class="block">Print Advertising</NuxtLink></li>
                    </ul>
                  </transition>
                </li>
                <li><NuxtLink to="/consultation" @click="drawer" class="text-lg font-medium text-gray-900">Consultation</NuxtLink></li>
                <li><NuxtLink to="/contact-us" @click="drawer" class="text-lg font-medium text-gray-900">Contact Us</NuxtLink></li>
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
        dropdownTimeout: null,
      };
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
      },
      handleMouseLeave() {
        this.dropdownTimeout = setTimeout(() => {
          this.servicesDropdownOpen = false;
        }, 200); // Small delay before closing
      },
    },
    watch: {
      isOpen(val) {
        if (val) {
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
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  aside {
    transition: transform 0.3s ease;
  }
  
  button:focus {
    outline: none;
  }
  
  nav {
    border-radius: 9999px; /* Tailwind rounded-full */
    overflow: hidden; /* Ensure contents are contained */
  }
  </style>  