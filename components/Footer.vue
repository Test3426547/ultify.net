<template>
  <footer class="footer bg-primary text-white py-5">
    <div class="container">
      <div class="row">
        <!-- Company Information and Social Media Links -->
        <div class="col-lg-4 mb-4">
          <h5 class="fw-bold mb-3">ULTIFY SOLUTIONS</h5>
          <p>If you need results, you need Ultify.</p>
          <address>
            <p>Level 25, 50 Clarent St</p>
            <p>Wynyard, Sydney, NSW, 2000</p>
            <p>Australia</p>
          </address>
          <div class="mb-3">
            <i class="fas fa-phone me-2"></i>
            1800 ULTIFY
          </div>
          <div class="mb-3">
            <i class="fas fa-envelope me-2"></i>
            admin@ultify.net
          </div>
          <div class="d-flex">
            <a href="https://www.instagram.com" class="me-3 text-white" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" class="me-3 text-white" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com" class="text-white" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <!-- Company Links -->
        <div class="col-lg-2 col-6 mb-4">
          <h6 class="fw-bold mb-3">Company</h6>
          <ul class="nav flex-column">
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/about-us">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/consultation">Consultation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/contact-us">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Core Services Links -->
        <div class="col-lg-3 col-6 mb-4">
          <h6 class="fw-bold mb-3">Core Services</h6>
          <ul class="nav flex-column">
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/website">Website</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/social-media">Social Media</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/seo">SEO</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/sem">SEM</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- More Services Links -->
        <div class="col-lg-3 col-6 mb-4">
          <h6 class="fw-bold mb-3">More Services</h6>
          <ul class="nav flex-column">
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/paid-media">Paid Media</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/content-creation">Content Creation</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link text-white-50" to="/print-advertising">Print Advertising</NuxtLink>
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
  background-color: var(--bs-primary) !important;
  color: var(--bs-white) !important;
  padding-top: 40px;
  padding-bottom: 40px;
}

.fw-bold {
  font-weight: bold;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-white-50:hover {
  color: var(--bs-white) !important;
}

.nav-link {
  padding: 0;
  margin-bottom: 0.5rem;
}

.nav-link:hover {
  color: var(--bs-white) !important;
}

i.fa-instagram,
i.fa-facebook,
i.fa-linkedin {
  font-size: 1.5rem;
}

address {
  font-style: normal;
  line-height: 1.6;
}
</style>