<template>
    <nav class="fixed top-2 w-full max-w-screen-lg mx-auto bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-full py-2 px-4 flex items-center justify-between z-50">
      <div class="flex items-center">
        <!-- Header logo -->
        <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
          Ultify Solutions
        </NuxtLink>
      </div>
  
      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="toggleDrawer" aria-label="Toggle navigation">
          <svg
            class="h-8 w-8 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
  
      <!-- Navbar for larger screens -->
      <div class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-sm font-semibold text-gray-800 hover:text-blue-500">Home</NuxtLink>
        <NuxtLink to="/about-us" class="text-sm font-semibold text-gray-800 hover:text-blue-500">About Us</NuxtLink>
        <div @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false" class="relative">
          <button class="text-sm font-semibold text-gray-800 hover:text-blue-500 focus:outline-none">
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
        <NuxtLink to="/consultation" class="text-sm font-semibold text-gray-800 hover:text-blue-500">Consultation</NuxtLink>
        <NuxtLink to="/contact-us" class="text-sm font-semibold text-gray-800 hover:text-blue-500">Contact Us</NuxtLink>
      </div>
  
      <!-- Dark Background Transition for overlay -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="z-40 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </transition>
  
      <!-- Drawer Menu for mobile -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click="isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
  
        <span class="flex w-full items-center p-4 border-b">
          <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
            Ultify Solutions
          </NuxtLink>
        </span>
  
        <ul class="divide-y font-sans">
          <li><NuxtLink to="/" @click="isOpen = false" class="my-4 block">Home</NuxtLink></li>
          <li><NuxtLink to="/about-us" @click="isOpen = false" class="my-4 block">About Us</NuxtLink></li>
          <li>
            <div @click="toggleServicesDropdown" class="cursor-pointer my-4 block">Services</div>
            <transition name="fade">
              <ul v-if="servicesDropdownOpen" class="pl-4 space-y-2">
                <li><NuxtLink to="/website" @click="isOpen = false" class="block">Website</NuxtLink></li>
                <li><NuxtLink to="/social-media" @click="isOpen = false" class="block">Social Media</NuxtLink></li>
                <li><NuxtLink to="/seo" @click="isOpen = false" class="block">SEO</NuxtLink></li>
                <li><NuxtLink to="/paid-media" @click="isOpen = false" class="block">Paid Media</NuxtLink></li>
                <li><NuxtLink to="/content-creation" @click="isOpen = false" class="block">Content Creation</NuxtLink></li>
                <li><NuxtLink to="/print-advertising" @click="isOpen = false" class="block">Print Advertising</NuxtLink></li>
              </ul>
            </transition>
          </li>
          <li><NuxtLink to="/consultation" @click="isOpen = false" class="my-4 block">Consultation</NuxtLink></li>
          <li><NuxtLink to="/contact-us" @click="isOpen = false" class="my-4 block">Contact Us</NuxtLink></li>
        </ul>
      </aside>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        servicesDropdownOpen: false
      };
    },
    methods: {
      toggleDrawer() {
        this.isOpen = !this.isOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
      }
    },
    watch: {
      isOpen(isOpen) {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
      });
    }
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