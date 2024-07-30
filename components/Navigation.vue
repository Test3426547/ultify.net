<template>
    <nav class="bg-white bg-opacity-80 backdrop-blur-lg border-b shadow-md py-3 sticky top-2 rounded-lg z-10 mx-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center" aria-label="Home">
          <span :class="['font-bold', isMobileView ? 'text-sm' : 'text-lg']">Ultify Solutions</span>
        </NuxtLink>
        
        <button class="lg:hidden p-2 focus:outline-none" @click="toggleMobileMenu" aria-label="Toggle navigation">
          <span class="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span class="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span class="block w-6 h-0.5 bg-gray-700"></span>
        </button>
        
        <div :class="['lg:flex items-center', mobileMenuOpen ? 'block' : 'hidden']">
          <ul class="lg:flex lg:space-x-6 space-y-4 lg:space-y-0 text-blue-gray-700">
            <li>
              <NuxtLink to="/about-us" class="hover:text-blue-900">About Us</NuxtLink>
            </li>
            <li class="relative">
              <button @click="toggleServicesDropdown" class="hover:text-blue-900 focus:outline-none" aria-haspopup="true" aria-expanded="servicesDropdownOpen">
                Services
              </button>
              <transition name="fade">
                <div v-if="servicesDropdownOpen" class="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-40 z-20">
                  <NuxtLink to="/website" class="block px-4 py-2 hover:bg-gray-100">Website</NuxtLink>
                  <NuxtLink to="/social-media" class="block px-4 py-2 hover:bg-gray-100">Social Media</NuxtLink>
                  <NuxtLink to="/seo" class="block px-4 py-2 hover:bg-gray-100">SEO</NuxtLink>
                  <NuxtLink to="/paid-media" class="block px-4 py-2 hover:bg-gray-100">Paid Media</NuxtLink>
                  <NuxtLink to="/content-creation" class="block px-4 py-2 hover:bg-gray-100">Content Creation</NuxtLink>
                  <NuxtLink to="/print-advertising" class="block px-4 py-2 hover:bg-gray-100">Print Advertising</NuxtLink>
                </div>
              </transition>
            </li>
            <li>
              <NuxtLink to="/consultation" class="hover:text-blue-900">Consultation</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us" class="hover:text-blue-900">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const mobileMenuOpen = ref(false);
  const servicesDropdownOpen = ref(false);
  const isMobileView = ref(false);
  
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
  
  const toggleServicesDropdown = () => {
    servicesDropdownOpen.value = !servicesDropdownOpen.value;
  };
  
  const checkMobileView = () => {
    isMobileView.value = window.innerWidth <= 768;
  };
  
  onMounted(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobileView);
  });
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>  