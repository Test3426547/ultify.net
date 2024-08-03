<template>
  <header class="navbar navbar-expand-lg shadow-sm sticky-top py-2 pill-navbar">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="/ultify.svg" width="30" alt="Ultify Solutions" class="me-2">
        <span class="company-name">Ultify Solutions</span>
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarNav">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav mx-auto">
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
          <div class="d-flex align-items-center mt-3 mt-lg-0">
            <label class="form-check-label" for="darkModeSwitch">
              <input type="checkbox" class="form-check-input me-2" id="darkModeSwitch" @change="toggleDarkMode">
              <i class="fas fa-moon"></i>
              <span class="ms-2">Dark Mode</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }
  }
};
</script>

<style scoped>
.pill-navbar {
  border-radius: 30px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.5);
  margin: 0 15px;
  width: calc(100% - 30px);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

.navbar-brand img {
  border-radius: 50%;
}

.company-name {
  font-weight: 600;
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/></svg>");
}

.offcanvas {
  background: transparent;
}

.offcanvas-header {
  border-bottom: none;
}

.offcanvas-body {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem 2rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.form-check-input {
  accent-color: #007bff;
}

.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

@media (min-width: 992px) {
  .navbar-nav {
    justify-content: center;
  }

  .navbar-brand,
  .navbar-nav,
  .form-check-label {
    flex-grow: 1;
  }

  .navbar-brand {
    order: -1;
  }

  .form-check-label {
    justify-content: flex-end;
  }
}
</style>