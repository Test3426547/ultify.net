<template>
    <nav class="navbar fixed-top navbar-expand-lg bg-white bg-opacity-75 backdrop-blur-2xl border-bottom shadow-md py-3 z-index-3 rounded-lg mx-4">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center" aria-label="Home">
          <span class="font-bold text-lg">Ultify Solutions</span>
        </router-link>
        
        <button class="navbar-toggler shadow-none" type="button" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        
        <div class="collapse navbar-collapse" :class="{ show: mobileMenuOpen }">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/about-us" class="nav-link text-blue-gray-700">
                About Us
              </router-link>
            </li>
            <li class="nav-item position-relative">
              <div class="nav-link text-blue-gray-700 font-semibold cursor-pointer" @click="toggleServicesDropdown">
                Services
              </div>
              <transition name="fade">
                <div v-if="servicesDropdownOpen" class="dropdown-menu position-absolute bg-white shadow rounded p-2 mt-2">
                  <router-link to="/website" class="dropdown-item">Website</router-link>
                  <router-link to="/social-media" class="dropdown-item">Social Media</router-link>
                  <router-link to="/seo" class="dropdown-item">SEO</router-link>
                  <router-link to="/paid-media" class="dropdown-item">Paid Media</router-link>
                  <router-link to="/content-creation" class="dropdown-item">Content Creation</router-link>
                  <router-link to="/print-advertising" class="dropdown-item">Print Advertising</router-link>
                </div>
              </transition>
            </li>
            <li class="nav-item">
              <router-link to="/consultation" class="nav-link text-blue-gray-700">
                Consultation
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link text-blue-gray-700">
                Contact Us
              </router-link>
            </li>
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
  /* Updated styles */
  .navbar {
    backdrop-filter: blur(2xl);
    border-radius: 0.75rem; /* rounded-lg */
    background-color: rgba(255, 255, 255, 0.75); /* bg-opacity-75 */
  }
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .text-blue-gray-700 {
    color: #374151;
  }
  .font-semibold {
    font-weight: 600;
  }
  .dropdown-menu {
    position: absolute;
    background: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    left: 0;
  }
  .dropdown-item {
    padding: 0.25rem 1.5rem;
    color: #212529;
    text-decoration: none;
  }
  </style>  