<template>
  <header class="navbar navbar-expand-lg sticky-top py-2 transparent-nav">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="/ultify.svg" width="30" alt="Ultify Solutions">
        <span class="ms-2">Ultify Solutions</span>
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <i class="bi bi-list" style="font-size: 1.5rem;"></i>
        </span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarNav">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NuxtLink to="/website" class="dropdown-item">Website</NuxtLink></li>
                <li><NuxtLink to="/social-media" class="dropdown-item">Social Media</NuxtLink></li>
                <li><NuxtLink to="/seo" class="dropdown-item">SEO</NuxtLink></li>
                <li><NuxtLink to="/paid-media" class="dropdown-item">Paid Media</NuxtLink></li>
                <li><NuxtLink to="/content-creation" class="dropdown-item">Content Creation</NuxtLink></li>
                <li><NuxtLink to="/print-advertising" class="dropdown-item">Print Advertising</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/consultation" class="nav-link">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink>
            </li>
          </ul>
          <div class="mt-3 d-flex align-items-center">
            <label class="form-check-label" for="darkModeSwitch">
              <input type="checkbox" class="form-check-input" id="darkModeSwitch" @change="toggleDarkMode">
              <i :class="isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'" class="ms-2"></i>
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode');
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
.transparent-nav {
  background-color: rgba(255, 255, 255, 0.5);
}
.navbar-toggler-icon i {
  font-size: 1.5rem;
}
.navbar-nav .nav-link {
  color: #333;
}
.offcanvas {
  background-color: rgba(255, 255, 255, 0.9);
}
.dark-mode .transparent-nav,
.dark-mode .offcanvas {
  background-color: rgba(0, 0, 0, 0.5);
}
.dark-mode .navbar-nav .nav-link {
  color: #fff;
}
</style>