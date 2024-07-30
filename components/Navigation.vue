<template>
  <nav class="navbar navbar-expand-lg blur blur-rounded position-absolute my-3 top-0 border-bottom py-3 z-index-3 shadow my-3 py-2 start-0 end-0 mx-4">
    <div class="container">
      <router-link to="/" class="navbar-brand" aria-label="Home">
        <img src="/chatbot-icon.png" alt="Ultify Solutions Logo" class="w-8 h-8 inline-block mr-2"/>
        Ultify Solutions
      </router-link>
      
      <button class="navbar-toggler shadow-none ms-2" type="button" @click="toggleMobileMenu">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" :class="{ show: mobileMenuOpen }">
        <ul class="navbar-nav navbar-nav-hover mx-auto">
          <li class="nav-item mx-2">
            <router-link to="/about-us" class="nav-link ps-2 d-flex align-items-center">
              About Us
            </router-link>
          </li>

          <li class="nav-item mx-2">
            <div class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" @click="toggleServicesDropdown">
              Services
              <img src="/down-arrow.svg" alt="down-arrow" class="arrow ms-1"/>
            </div>
            <transition name="fade">
              <div v-if="servicesDropdownOpen" class="dropdown-menu">
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
            <router-link to="/contact-us" class="nav-link ps-2 d-flex align-items-center">
              Contact Us
            </router-link>
          </li>

          <li class="nav-item mx-2">
            <router-link to="/consultation" class="nav-link ps-2 d-flex align-items-center">
              Consultation
            </router-link>
          </li>
        </ul>
        
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a href="https://www.creative-tim.com/product/soft-ui-design-system-pro#pricingCard" class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1" role="button">
              Buy Now
            </a>
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
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
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
}
</style>