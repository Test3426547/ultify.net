<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-md rounded-pill py-3">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand font-weight-bold text-primary d-flex align-items-center">
        <img src="/ultify.svg" alt="Ultify Logo" class="me-2 logo-img" />
        <span>Ultify Solutions</span>
      </NuxtLink>
      <a href="/contact-us" class="btn btn-sm bg-gradient-primary btn-round mb-0 ms-auto d-lg-none d-block">Contact Us</a>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2"></span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
          </li>
          <li class="nav-item mx-2 dropdown">
            <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              <img src="/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1">
            </a>
            <ul class="dropdown-menu">
              <li><NuxtLink to="/website" class="dropdown-item">Website</NuxtLink></li>
              <li><NuxtLink to="/social-media" class="dropdown-item">Social Media</NuxtLink></li>
              <li><NuxtLink to="/seo" class="dropdown-item">SEO</NuxtLink></li>
              <li><NuxtLink to="/paid-media" class="dropdown-item">Paid Media</NuxtLink></li>
              <li><NuxtLink to="/content-creation" class="dropdown-item">Content Creation</NuxtLink></li>
              <li><NuxtLink to="/print-advertising" class="dropdown-item">Print Advertising</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <NuxtLink to="/consultation" class="nav-link">Consultation</NuxtLink>
          </li>
          <li class="nav-item mx-2">
            <NuxtLink to="/contact-us" class="nav-link d-none d-lg-block">Contact Us</NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a href="/contact-us" class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1" role="button">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  z-index: 1050;
  max-width: 90%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
}

.logo-img {
  height: 30px;
}

.navbar-brand {
  font-weight: bold;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' linecap='round' linejoin='round' d='M4 7h22M4 15h22M4 23h22'/></svg>");
}

.navbar-nav {
  display: flex;
  align-items: center;
}

.nav-link {
  color: var(--bs-primary) !important;
  font-weight: 600;
  transition: color 0.3s, border-color 0.3s;
}

.nav-link:hover {
  color: #3b82f6;
}

.dropdown-menu {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 0.5rem;
}

@media (min-width: 992px) {
  .navbar-nav {
    margin-left: auto;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-none {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .navbar-nav {
    display: none;
  }
  .collapse.show .navbar-nav {
    display: block;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    left: 0;
    right: 0;
    top: 60px;
    border-radius: 0 0 20px 20px;
  }
  .d-lg-block {
    display: none !important;
  }
}
</style>