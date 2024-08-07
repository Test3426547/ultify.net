<template>
  <header class="navbar sticky-top py-2 transparent-nav">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="/ultify.svg" width="50" alt="Ultify Logo" />
      </NuxtLink>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <i class="bi bi-list" style="font-size: 1.5rem;"></i>
        </span>
      </button>
      <div class="offcanvas offcanvas-end full-screen-offcanvas" tabindex="-1" id="navbarNav">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/consultation" class="nav-link">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact-us" class="nav-link">Contact Us</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
                <i class="bi bi-chevron-down ms-2"></i>
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
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
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
  box-shadow: none;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}

.transparent-nav {
  background-color: transparent !important;
}

.navbar-toggler-icon i {
  font-size: 1.5rem;
  color: #333; /* Ensure icon is visible */
}

.navbar-nav .nav-link {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.navbar-nav .nav-item {
  margin-bottom: 1rem; /* Adjust the bottom margin as needed */
}

.offcanvas {
  background-color: rgba(255, 255, 255, 0.9) !important;
}

.full-screen-offcanvas {
  width: 100%;
  height: 100%;
}

.offcanvas-header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.offcanvas-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.dropdown-menu {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  box-shadow: none;
}

.dropdown-item {
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.dropdown-toggle::after {
  display: none;
}

.bi-chevron-down {
  font-size: 1.5rem;
}
</style>