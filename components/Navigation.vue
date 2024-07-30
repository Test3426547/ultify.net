<template>
    <nav class="fixed w-full top-2 left-1/2 transform -translate-x-1/2 p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-md rounded-full z-50">
      <div class="flex items-center justify-between max-w-screen-lg mx-auto">
        <!-- Header logo -->
        <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
          Ultify Solutions
        </NuxtLink>
  
        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer" aria-label="Toggle navigation">
            <img src="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/menu.svg" alt="Menu Icon" class="h-8 w-8 text-black" />
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
              <div v-if="servicesDropdownOpen" class="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2" @mouseenter="servicesDropdownOpen = true" @mouseleave="servicesDropdownOpen = false">
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
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div v-show="isOpen" class="z-40 fixed inset-0 transition-opacity">
            <div @click="drawer" class="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </transition>
  
        <!-- Drawer Menu -->
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button class="absolute top-0 right-0 mt-4 mr-4" @click="drawer" aria-label="Close menu">
              <img src="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/close.svg" alt="Close Icon" class="w-6 h-6" />
            </button>
          </div>
  
          <span class="flex w-full items-center p-4 border-b">
            <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
              Ultify
            </NuxtLink>
          </span>
  
          <ul class="divide-y font-sans">
            <li><NuxtLink to="/" @click="drawer" class="my-4 block">Home</NuxtLink></li>
            <li><NuxtLink to="/about-us" @click="drawer" class="my-4 block">About Us</NuxtLink></li>
            <li>
              <div @click="toggleServicesDropdown" class="cursor-pointer my-4 block">Services</div>
              <transition name="fade">
                <ul v-if="servicesDropdownOpen" class="pl-4 space-y-2">
                  <li><NuxtLink to="/website" @click="drawer" class="block">Website</NuxtLink></li>
                  <li><NuxtLink to="/social-media" @click="drawer" class="block">Social Media</NuxtLink></li>
                  <li><NuxtLink to="/seo" @click="drawer" class="block">SEO</NuxtLink></li>
                  <li><NuxtLink to="/paid-media" @click="drawer" class="block">Paid Media</NuxtLink></li>
                  <li><NuxtLink to="/content-creation" @click="drawer" class="block">Content Creation</NuxtLink></li>
                  <li><NuxtLink to="/print-advertising" @click="drawer" class="block">Print Advertising</NuxtLink></li>
                </ul>
              </transition>
            </li>
            <li><NuxtLink to="/consultation" @click="drawer" class="my-4 block">Consultation</NuxtLink></li>
            <li><NuxtLink to="/contact-us" @click="drawer" class="my-4 block">Contact Us</NuxtLink></li>
          </ul>
        </aside>
      </div>
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
      drawer() {
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