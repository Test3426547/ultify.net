<template>
    <nav class="navbar navbar-expand-lg bg-white bg-opacity-50 backdrop-blur-2xl border-bottom shadow-md my-3 py-3 position-fixed start-0 end-0 mx-4 z-index-3 rounded-pill">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center" aria-label="Home">
          <span :class="['font-bold', { 'text-lg': !isMobileView, 'text-sm': isMobileView }]">Ultify Solutions</span>
        </router-link>
        
        <button class="navbar-toggler shadow-none" type="button" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        
        <div class="collapse navbar-collapse" :class="{ show: mobileMenuOpen }">
          <ul class="navbar-nav mx-auto d-none d-lg-flex">
            <li class="nav-item mx-2">
              <router-link to="/about-us" class="nav-link d-flex align-items-center text-blue-gray-700">
                About Us
              </router-link>
            </li>
            <li class="nav-item mx-2 position-relative">
              <button class="nav-link d-flex justify-content-between cursor-pointer align-items-center text-blue-gray-700 font-bold" @click="toggleServicesDropdown">
                Services
              </button>
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
            <li class="nav-item mx-2">
              <router-link to="/consultation" class="nav-link d-flex align-items-center text-blue-gray-700">
                Consultation
              </router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link to="/contact-us" class="nav-link d-flex align-items-center text-blue-gray-700">
                Contact Us
              </router-link>
            </li>
          </ul>
          
          <!-- Mobile Menu -->
          <ul v-if="mobileMenuOpen" class="navbar-nav d-lg-none d-block mt-3">
            <li class="nav-item">
              <router-link to="/about-us" class="nav-link text-blue-gray-700">
                About Us
              </router-link>
            </li>
            <li class="nav-item">
              <button class="nav-link text-blue-gray-700 font-bold" @click="toggleMobileServicesDropdown">
                Services
              </button>
              <transition name="fade">
                <div v-if="mobileServicesDropdownOpen" class="mt-2">
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
        mobileServicesDropdownOpen: false,
        isMobileView: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      toggleServicesDropdown() {
        this.servicesDropdownOpen = !this.servicesDropdownOpen;
      },
      toggleMobileServicesDropdown() {
        this.mobileServicesDropdownOpen = !this.mobileServicesDropdownOpen;
      },
      checkMobileView() {
        this.isMobileView = window.innerWidth <= 768;
      }
    },
    mounted() {
      this.checkMobileView();
      window.addEventListener('resize', this.checkMobileView);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkMobileView);
    }
  };
  </script>
  
  <style scoped>
  /* Styling for the Navbar */
  .navbar {
    border-radius: 1.5rem; /* Rounded corners for the navbar */
  }
  
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
  }
  .navbar-toggler-bar {
    display: block;
    width: 100%;
    height: 0.2em;
    margin-top: 0.3em;
    background-color: #333;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
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