<template>
    <nav class="bg-white bg-opacity-80 backdrop-blur-2xl py-4 px-4 border-b border-white/80 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="h-8 w-8" src="/chatbot-icon.png" alt="Company Logo">
              <span class="ml-2 text-xl font-bold">Ultify Solutions</span>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/about-us" class="text-blue-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">About Us</a>
              <div class="relative">
                <button @click="toggleServices" class="text-blue-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Services
                </button>
                <transition name="fade">
                  <div v-if="servicesOpen" class="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <a href="/website" class="block px-4 py-2 text-sm text-gray-700">Website</a>
                      <a href="/social-media" class="block px-4 py-2 text-sm text-gray-700">Social Media</a>
                      <a href="/seo" class="block px-4 py-2 text-sm text-gray-700">SEO</a>
                      <a href="/paid-media" class="block px-4 py-2 text-sm text-gray-700">Paid Media</a>
                      <a href="/content-creation" class="block px-4 py-2 text-sm text-gray-700">Content Creation</a>
                      <a href="/print-advertising" class="block px-4 py-2 text-sm text-gray-700">Print Advertising</a>
                    </div>
                  </div>
                </transition>
              </div>
              <a href="/consultation" class="text-blue-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Consultation</a>
              <a href="/contact-us" class="text-blue-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Contact Us</a>
            </div>
          </div>
          <div class="flex items-center md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path :class="{'hidden': mobileMenuOpen, 'inline-flex': !mobileMenuOpen}" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path :class="{'hidden': !mobileMenuOpen, 'inline-flex': mobileMenuOpen}" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/about-us" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">About Us</a>
          <div class="relative">
            <button @click="toggleMobileServices" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">
              Services
            </button>
            <transition name="fade">
              <div v-if="mobileServicesOpen" class="mt-2 space-y-1">
                <a href="/website" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Website</a>
                <a href="/social-media" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Social Media</a>
                <a href="/seo" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">SEO</a>
                <a href="/paid-media" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Paid Media</a>
                <a href="/content-creation" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Content Creation</a>
                <a href="/print-advertising" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Print Advertising</a>
              </div>
            </transition>
          </div>
          <a href="/consultation" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Consultation</a>
          <a href="/contact-us" class="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-700">Contact Us</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mobileMenuOpen: false,
        servicesOpen: false,
        mobileServicesOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      toggleServices() {
        this.servicesOpen = !this.servicesOpen;
      },
      toggleMobileServices() {
        this.mobileServicesOpen = !this.mobileServicesOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-white.bg-opacity-80 {
    backdrop-filter: blur(2xl);
  }
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .text-blue-gray-700 {
    color: #374151;
  }
  .border-b.border-white-80 {
    border-bottom-width: 1px;
    border-color: rgba(255, 255, 255, 0.8);
  }
  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1rem; /* Adjust font size for mobile view */
    }
  }
  </style>  