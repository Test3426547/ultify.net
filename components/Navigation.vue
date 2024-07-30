<template>
    <nav class="fixed w-full top-2 left-1/2 transform -translate-x-1/2 p-2 bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-full z-50">
      <div class="flex items-center justify-between max-w-screen-lg mx-auto">
        <!-- Header logo -->
        <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
          Ultify Solutions
        </NuxtLink>
  
        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer" aria-label="Toggle navigation">
            <svg
              class="h-8 w-8 fill-current text-black"
              fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
  
        <!-- Navbar -->
        <div class="hidden md:flex space-x-8 text-sm font-sans items-center">
          <NuxtLink to="/" class="text-sm font-semibold text-gray-800 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1">Home</NuxtLink>
          <NuxtLink to="/about-us" class="text-sm font-semibold text-gray-800 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1">About Us</NuxtLink>
          <div class="relative">
            <button @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false" class="text-sm font-semibold text-gray-800 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500 pb-1">
              Services
            </button>
            <transition name="fade">
              <div v-if="servicesDropdownOpen" class="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2">
                <NuxtLink to="/website" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Website</NuxtLink>
                <NuxtLink to="/social-media" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Social Media</NuxtLink>
                <NuxtLink to="/seo" class="block px-4 py-2 text-gray-800 hover:text-blue-500">SEO</NuxtLink>
                <NuxtLink to="/paid-media" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Paid Media</NuxtLink>
                <NuxtLink to="/content-creation" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Content Creation</NuxtLink>
                <NuxtLink to="/print-advertising" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Print Advertising</NuxtLink>
              </div>
            </transition>
          </div>
          <NuxtLink to="/consultation" class="text-sm font-semibold text-gray-800 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1">Consultation</NuxtLink>
          <NuxtLink to="/contact-us" class="text-sm font-semibold text-gray-800 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1">Contact Us</NuxtLink>
        </div>
  
        <!-- Dark Background Transition for overlay -->
        <transition
          enter-active-class="ease-out duration-300"
          leave-active-class="ease-out duration-300"
        >
          <div v-show="isOpen" class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
            <aside class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300" :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
              <div class="flex justify-end">
                <button @click="drawer" aria-label="Close menu">
                  <svg
                    class="w-6 h-6"
                    fill="none" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12"></path>
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
      </div>
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
      drawer() {
        this.isOpen = !this.isOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
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
  .transform {
    transition: transform 0.3s ease;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>  