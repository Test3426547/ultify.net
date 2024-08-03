<template>
  <footer class="footer py-5 bg-light dark-mode-bg">
    <div class="container">
      <div class="row">
        <!-- Company Information and Social Media Links -->
        <div class="col-lg-4 col-md-5 col-sm-6 col-12 mb-4 text-center">
          <h5 class="text-primary dark-mode-text-primary">Ultify Solutions</h5>
          <div class="mb-3">
            <i class="fas fa-phone text-primary dark-mode-text-primary me-2"></i>
            <span class="text-primary dark-mode-text-primary">1800 ULTIFY</span>
          </div>
          <div class="mb-3">
            <i class="fas fa-envelope text-primary dark-mode-text-primary me-2"></i>
            <span class="text-primary dark-mode-text-primary">admin@ultify.net</span>
          </div>
          <div class="d-flex justify-content-center">
            <a href="https://www.instagram.com" class="me-3 text-primary dark-mode-text-primary" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" class="me-3 text-primary dark-mode-text-primary" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com" class="text-primary dark-mode-text-primary" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <!-- Company Links -->
        <div class="col-lg-2 col-md-2 col-4">
          <h6 class="text-sm text-primary dark-mode-text-primary">Company</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/about-us">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/consultation">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/contact-us">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Core Services Links -->
        <div class="col-lg-3 col-md-3 col-4">
          <h6 class="text-sm text-primary dark-mode-text-primary">Core Services</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/website">Website</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/social-media">Social Media</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/seo">SEO</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- More Services Links -->
        <div class="col-lg-3 col-md-3 col-4">
          <h6 class="text-sm text-primary dark-mode-text-primary">More Services</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/paid-media">Paid Media</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/content-creation">Content Creation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body dark-mode-text-body" to="/print-advertising">Print Advertising</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Light and Dark mode compatible background */
.bg-light {
  background-color: var(--bs-light, #f8f9fa) !important;
}
.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

/* Primary text color for light mode and dark mode */
.text-primary {
  color: var(--bs-primary) !important;
}
.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd) !important;
}

/* Text body color for links in light and dark modes */
.text-body {
  color: var(--bs-body-color) !important;
}
.dark-mode .text-body {
  color: var(--bs-body-color-dark, #adb5bd) !important;
}

/* Hover effect for nav links */
.nav-link:hover {
  color: var(--bs-primary) !important;
}

/* Icon styling */
i {
  font-size: 1.25rem;
}

i.fa-instagram,
i.fa-facebook,
i.fa-linkedin {
  font-size: 1.5rem;
}

/* Dark mode adjustments */
.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd) !important;
}
.dark-mode .nav-link {
  color: var(--bs-body-color-dark, #adb5bd) !important;
}
</style>