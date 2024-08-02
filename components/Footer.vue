<template>
  <footer class="footer py-5 bg-light">
    <div class="container">
      <div class="row">
        <!-- Company Information and Social Media Links -->
        <div class="col-lg-4 col-md-5 col-sm-6 col-12 mb-4 text-center">
          <h5 class="text-primary">Ultify Solutions</h5>
          <div class="mb-3">
            <i class="fas fa-phone text-primary me-2"></i>
            <span class="text-primary">1800 ULTIFY</span>
          </div>
          <div class="mb-3">
            <i class="fas fa-envelope text-primary me-2"></i>
            <span class="text-primary">admin@ultify.net</span>
          </div>
          <div class="d-flex justify-content-center">
            <a href="https://www.instagram.com" class="me-3 text-primary" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" class="me-3 text-primary" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com" class="text-primary" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <!-- Company Links -->
        <div class="col-lg-2 col-md-2 col-4">
          <h6 class="text-sm text-primary">Company</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/about-us">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/consultation">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/contact-us">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Core Services Links -->
        <div class="col-lg-3 col-md-3 col-4">
          <h6 class="text-sm text-primary">Core Services</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/website">Website</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/social-media">Social Media</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/seo">SEO</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- More Services Links -->
        <div class="col-lg-3 col-md-3 col-4">
          <h6 class="text-sm text-primary">More Services</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/paid-media">Paid Media</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/content-creation">Content Creation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-body" to="/print-advertising">Print Advertising</NuxtLink>
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
.footer {
  background-color: var(--bs-light, #f8f9fa); /* Light background consistent with the rest of the site */
}

/* Ensure hover state for links is correct */
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
</style>