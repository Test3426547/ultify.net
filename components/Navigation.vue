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
              <svg 
                class="w-6 h-6"
                fill="none" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
  
          <span @click="drawer" class="flex w-full items-center p-4 border-b">
            <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
              Ultify
            </NuxtLink>
          </span>
  
          <ul class="divide-y font-sans">
            <li><NuxtLink to="/" @click="drawer" class="my-4 inline-block">Home</NuxtLink></li>
            <li><NuxtLink to="/about-us" @click="drawer" class="my-4 inline-block">About Us</NuxtLink></li>
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
  
          <div class="follow">
            <p class="italic font-sans text-sm">follow us:</p>
            <div class="social flex space-x-5 mt-4 ">
              <a href="#">
                <svg 
                  aria-hidden="true" focusable="false" 
                  data-prefix="fab" data-icon="twitter" 
                  class="h-5 w-5 fill-current text-gray-600" role="img" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a href="#">
                <svg 
                  aria-hidden="true" focusable="false" 
                  data-prefix="fab" data-icon="facebook-f" 
                  class="h-5 w-5 fill-current text-gray-600" role="img" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a href="#">
                <svg 
                  aria-hidden="true" focusable="false" 
                  data-prefix="fab" data-icon="instagram" 
                  class="h-5 w-5 fill-current text-gray-600" role="img" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a href="#">
                <svg 
                  aria-hidden="true" focusable="false" 
                  data-prefix="fab" data-icon="youtube" 
                  class="h-5 w-5 fill-current text-gray-600" role="img" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </div>
          </div>
  
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
        if (process.client) {
          if (isOpen) document.body.style.overflow = 'hidden';
          else document.body.style.overflow = '';
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
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