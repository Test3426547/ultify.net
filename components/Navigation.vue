<template>
  <nav class="navbar navbar-expand-lg blur blur-rounded fixed-top shadow">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/" rel="tooltip" title="Ultify Solutions" data-placement="bottom">
        <img src="/chatbot-icon.png" alt="Ultify Solutions Logo" class="brand-logo">
        Ultify Solutions
      </NuxtLink>

      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover mx-auto">
          <li class="nav-item dropdown mx-2">
            <a class="nav-link dropdown-toggle ps-2 d-flex justify-content-between align-items-center" role="button" id="servicesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              <img src="/path/to/icon.png" alt="down-arrow" class="arrow ms-1">
            </a>
            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><NuxtLink class="dropdown-item" to="/website">Website</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/social-media">Social Media</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/seo">SEO</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/paid-media">Paid Media</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/content-creation">Content Creation</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/print-advertising">Print Advertising</NuxtLink></li>
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
  background-color: #fff;
  z-index: 1030;
  height: 60px; /* Ensures navbar height consistency */
}

.navbar-brand {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.brand-logo {
  max-height: 40px; /* Limits the logo height */
  margin-right: 10px; /* Adds some space between logo and text */
}

.navbar-nav-hover .nav-link:hover,
.navbar-nav-hover .nav-link:focus {
  text-decoration: underline;
}

.dropdown-menu {
  background-color: #fff;
  border-radius: 0.375rem;
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: left;
  }

  .navbar-collapse {
    justify-content: space-between;
  }
}
</style>