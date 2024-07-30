<template>
    <div>
      <nav class="bg-white shadow-md rounded-full py-2 px-4 md:px-8 mx-4 my-3 flex items-center justify-between z-50 relative">
        <NuxtLink to="/" class="text-lg font-bold text-gray-800" aria-label="Home">
          Ultify Solutions
        </NuxtLink>
  
        <button
          class="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          @click="toggleSidebar"
          aria-label="Toggle navigation"
        >
          <span class="block w-8 h-1 bg-gray-700 mb-1"></span>
          <span class="block w-8 h-1 bg-gray-700 mb-1"></span>
          <span class="block w-8 h-1 bg-gray-700"></span>
        </button>
      </nav>
  
      <div
        :class="['fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform z-40', sidebarOpen ? 'translate-x-0' : 'translate-x-full']"
        style="width: 300px;"
      >
        <div class="flex items-center justify-between p-4 border-b">
          <h2 class="text-xl font-semibold">Menu</h2>
          <button @click="toggleSidebar" aria-label="Close menu" class="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav class="p-4">
          <NuxtLink to="/about-us" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">About Us</NuxtLink>
  
          <div>
            <button
              @click="toggleServicesDropdown"
              class="block w-full text-left py-2 text-gray-800 hover:text-blue-500 focus:outline-none"
              aria-haspopup="true"
              :aria-expanded="servicesDropdownOpen"
            >
              Services
            </button>
            <transition name="fade">
              <div v-if="servicesDropdownOpen" class="ml-4">
                <NuxtLink to="/website" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Website</NuxtLink>
                <NuxtLink to="/social-media" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Social Media</NuxtLink>
                <NuxtLink to="/seo" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">SEO</NuxtLink>
                <NuxtLink to="/paid-media" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Paid Media</NuxtLink>
                <NuxtLink to="/content-creation" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Content Creation</NuxtLink>
                <NuxtLink to="/print-advertising" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Print Advertising</NuxtLink>
              </div>
            </transition>
          </div>
  
          <NuxtLink to="/consultation" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Consultation</NuxtLink>
          <NuxtLink to="/contact-us" class="block py-2 text-gray-800 hover:text-blue-500" @click="toggleSidebar">Contact Us</NuxtLink>
        </nav>
      </div>
  
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-30"
        @click="toggleSidebar"
      ></div>
  
      <Chatbot class="fixed bottom-0 right-0 z-50" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Chatbot from '~/components/Chatbot.vue'; // Assuming you have a Chatbot component
  
  const sidebarOpen = ref(false);
  const servicesDropdownOpen = ref(false);
  
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
  };
  
  const toggleServicesDropdown = () => {
    servicesDropdownOpen.value = !servicesDropdownOpen.value;
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