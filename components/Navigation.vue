<template>
    <nav class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand font-weight-bolder ms-sm-3" to="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">Ultify Solutions</NuxtLink>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
            <li class="nav-item mx-2">
              <NuxtLink class="nav-link ps-2 d-flex justify-content-between align-items-center" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item dropdown dropdown-hover mx-2">
              <NuxtLink class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" to="/services">Services</NuxtLink>
              <ul class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuServices">
                <li><NuxtLink class="dropdown-item border-radius-md" to="/services/website">Website</NuxtLink></li>
                <li><NuxtLink class="dropdown-item border-radius-md" to="/services/social-media">Social Media</NuxtLink></li>
                <li><NuxtLink class="dropdown-item border-radius-md" to="/services/seo">SEO</NuxtLink></li>
                <li><NuxtLink class="dropdown-item border-radius-md" to="/services/paid-media">Paid Media</NuxtLink></li>
                <li><NuxtLink class="dropdown-item border-radius-md" to="/services/content-creation">Content Creation</NuxtLink></li>
                <li><NuxtLink class="dropdown-item border-radius-md" to="/services/print-advertising">Print Advertising</NuxtLink></li>
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
            <li class="nav-item ms-lg-auto my-auto ms-3 ms-lg-0">
              <NuxtLink class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0" to="/free-consultation">Free Consultation</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { NuxtLink } from 'nuxt/app'
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>  