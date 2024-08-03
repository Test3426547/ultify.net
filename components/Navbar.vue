<template>
  <header class="navbar navbar-expand-lg sticky-top py-2">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="/ultify.svg" width="30" alt="Ultify Solutions" />
        <span class="ms-2">Ultify Solutions</span>
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarNav">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
              <input
                type="checkbox"
                class="form-check-input"
                id="darkModeSwitch"
                @change="toggleDarkMode"
              />
              <i
                :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"
                class="ms-2"
              ></i>
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
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode');
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  border: none;
}

.navbar-toggler {
  border: none;
}

.offcanvas {
  background-color: transparent;
}

.offcanvas-header, .offcanvas-body {
  background-color: var(--bs-body-bg);
}

.btn-close {
  filter: invert(1);
}

.dark-mode .offcanvas-header,
.dark-mode .offcanvas-body {
  background-color: var(--bs-dark);
}

.dark-mode .navbar-brand,
.dark-mode .nav-link,
.dark-mode .offcanvas-title {
  color: var(--bs-light);
}

.dark-mode .btn-close {
  filter: invert(0);
}
</style>