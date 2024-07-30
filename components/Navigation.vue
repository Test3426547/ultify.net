<template>
    <nav class="bg-white bg-opacity-50 backdrop-blur-md border-b shadow-md py-3 px-4 rounded-full sticky top-2 mx-auto max-w-screen-lg z-50">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img src="/chatbot-icon.png" alt="Logo" class="h-10 max-h-10 mr-2" />
          <NuxtLink to="/" class="text-lg font-bold text-gray-800">Ultify Solutions</NuxtLink>
        </div>
        <button class="lg:hidden block" @click="toggleMobileMenu">
          <span class="material-icons">menu</span>
        </button>
        <div :class="['lg:flex items-center', mobileMenuOpen ? 'block' : 'hidden']">
          <ul class="lg:flex items-center space-x-4 text-gray-700 mt-4 lg:mt-0">
            <li><NuxtLink to="/about-us" class="hover:text-pink-500">About Us</NuxtLink></li>
            <li class="relative" @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false">
              <button @click="toggleServicesDropdown" class="flex items-center hover:text-pink-500">
                Services
                <span class="material-icons">expand_more</span>
              </button>
              <transition name="fade">
                <div v-if="servicesDropdownOpen" class="absolute bg-white shadow-lg rounded-lg p-2 mt-2 z-10">
                  <NuxtLink to="/website" class="block px-4 py-2 hover:bg-gray-100">Website</NuxtLink>
                  <NuxtLink to="/social-media" class="block px-4 py-2 hover:bg-gray-100">Social Media</NuxtLink>
                  <NuxtLink to="/seo" class="block px-4 py-2 hover:bg-gray-100">SEO</NuxtLink>
                  <NuxtLink to="/paid-media" class="block px-4 py-2 hover:bg-gray-100">Paid Media</NuxtLink>
                  <NuxtLink to="/content-creation" class="block px-4 py-2 hover:bg-gray-100">Content Creation</NuxtLink>
                  <NuxtLink to="/print-advertising" class="block px-4 py-2 hover:bg-gray-100">Print Advertising</NuxtLink>
                </div>
              </transition>
            </li>
            <li><NuxtLink to="/consultation" class="hover:text-pink-500">Consultation</NuxtLink></li>
            <li><NuxtLink to="/contact-us" class="hover:text-pink-500">Contact Us</NuxtLink></li>
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
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  nav {
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>  