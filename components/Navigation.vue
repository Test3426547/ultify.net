<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3 fixed-top">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/" rel="tooltip" title="Ultify Solutions" data-placement="bottom">
        Ultify Solutions
      </NuxtLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover mx-auto">
          <li class="nav-item mx-2">
            <NuxtLink class="nav-link ps-2 d-flex justify-content-between align-items-center" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item dropdown mx-2">
            <a
              class="nav-link ps-2 d-flex justify-content-between align-items-center dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NuxtLink class="dropdown-item" to="/services/website">Website</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/services/social-media">Social Media</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/services/seo">SEO</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/services/paid-media">Paid Media</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/services/content-creation">Content Creation</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/services/print-advertising">Print Advertising</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <NuxtLink class="nav-link ps-2 d-flex justify-content-between align-items-center" to="/about-us">About Us</NuxtLink>
          </li>
          <li class="nav-item mx-2">
            <NuxtLink class="nav-link ps-2 d-flex justify-content-between align-items-center" to="/consultation">Consultation</NuxtLink>
          </li>
          <li class="nav-item mx-2">
            <NuxtLink class="nav-link ps-2 d-flex justify-content-between align-items-center" to="/contact-us">Contact Us</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { NuxtLink } from '#components'
</script>

<style scoped>
.navbar {
  background-color: white;
}

.navbar-nav-hover .nav-link:hover,
.navbar-nav-hover .dropdown-toggle:hover {
  color: #5e72e4;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
}

.dropdown-menu {
  z-index: 2000;
}
</style>