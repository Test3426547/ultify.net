<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top blur blur-rounded shadow">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/" title="Ultify Solutions">
        <img src="/chatbot-icon.png" alt="Ultify Solutions Logo" class="brand-logo">
        Ultify Solutions
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about-us">About Us</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
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
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact-us">Contact Us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/consultation">Consultation</NuxtLink>
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

.nav-link {
  text-decoration: none; /* Removes underline */
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