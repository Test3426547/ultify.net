<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top" class="blur blur-rounded shadow">
    <b-container>
      <b-navbar-brand to="/" rel="tooltip" title="Ultify Solutions">
        <img src="/chatbot-icon.png" alt="Ultify Solutions Logo" class="brand-logo">
        Ultify Solutions
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item to="/about-us">About Us</b-nav-item>
          <b-nav-item-dropdown text="Services" right>
            <b-dropdown-item to="/website">Website</b-dropdown-item>
            <b-dropdown-item to="/social-media">Social Media</b-dropdown-item>
            <b-dropdown-item to="/seo">SEO</b-dropdown-item>
            <b-dropdown-item to="/paid-media">Paid Media</b-dropdown-item>
            <b-dropdown-item to="/content-creation">Content Creation</b-dropdown-item>
            <b-dropdown-item to="/print-advertising">Print Advertising</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/contact-us">Contact Us</b-nav-item>
          <b-nav-item to="/consultation">Consultation</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script setup>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavItemDropdown, BDropdownItem, BContainer } from 'bootstrap-vue-3';
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

.navbar-nav-hover .nav-link {
  text-decoration: none; /* Removes underline on hover */
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