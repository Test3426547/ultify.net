<template>
  <nav class="bg-white bg-opacity-80 backdrop-blur-2xl py-4 px-4 border-b border-white/80">
    <div class="container flex items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center space-x-2">
        <!-- Company Logo -->
        <img src="/path-to-logo.png" alt="Ultify Solutions Logo" class="w-10 h-10"/>
        <!-- Company Name -->
        <p class="font-bold text-lg text-blue-gray-900">Ultify Solutions</p>
      </router-link>
      <div class="hidden lg:flex items-center space-x-6">
        <a href="/about-us" class="text-blue-gray-700">About Us</a>
        <div class="relative group">
          <span class="text-blue-gray-700 cursor-default">Services</span>
          <div class="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a href="/website" class="block px-4 py-2 hover:bg-gray-100">Website</a>
            <a href="/social-media" class="block px-4 py-2 hover:bg-gray-100">Social Media</a>
            <a href="/seo" class="block px-4 py-2 hover:bg-gray-100">SEO</a>
            <a href="/paid-media" class="block px-4 py-2 hover:bg-gray-100">Paid Media</a>
            <a href="/content-creation" class="block px-4 py-2 hover:bg-gray-100">Content Creation</a>
            <a href="/print-advertising" class="block px-4 py-2 hover:bg-gray-100">Print Advertising</a>
          </div>
        </div>
        <a href="/contact-us" class="text-blue-gray-700">Contact Us</a>
        <a href="/consultation" class="text-blue-gray-700">Consultation</a>
      </div>
      <button class="lg:hidden p-2 rounded text-gray-900" @click="toggleMobileMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
        </svg>
      </button>
    </div>
    <div v-if="mobileMenuOpen" class="lg:hidden mt-4">
      <div class="flex flex-col space-y-4">
        <a href="/about-us" class="text-blue-gray-700">About Us</a>
        <div>
          <span class="text-blue-gray-700" @click="toggleServicesDropdown">Services</span>
          <div v-if="servicesDropdownOpen" class="mt-2 ml-4">
            <a href="/website" class="block px-4 py-2">Website</a>
            <a href="/social-media" class="block px-4 py-2">Social Media</a>
            <a href="/seo" class="block px-4 py-2">SEO</a>
            <a href="/paid-media" class="block px-4 py-2">Paid Media</a>
            <a href="/content-creation" class="block px-4 py-2">Content Creation</a>
            <a href="/print-advertising" class="block px-4 py-2">Print Advertising</a>
          </div>
        </div>
        <a href="/contact-us" class="text-blue-gray-700">Contact Us</a>
        <a href="/consultation" class="text-blue-gray-700">Consultation</a>
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
/* Add custom styles if needed */
</style>