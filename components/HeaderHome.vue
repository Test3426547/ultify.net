<template>
  <header :class="headerClass" class="page-header min-vh-80 position-relative bg-light" :aria-expanded="isExpanded.toString()">
    <div class="position-absolute top-0 end-0 w-50 h-100 z-index-0 d-none d-md-block bg-image"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex justify-content-center flex-column">
          <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
            <h1 class="text-primary">Capitalise on digital</h1>
            <h1 class="mb-4">resources with Ultify</h1>
            <p class="lead pe-5 me-5">
              Our agency utilises digital resources and our working strategies
              to elevate your business operations. Start now and maximise your
              digital reach.
            </p>
            <div class="buttons">
              <NuxtLink to="/contact-us" class="btn btn-primary mt-4">Get Started</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Example 1: Reactive class toggle
const headerClass = ref('default-class')

// Example 2: Conditional attribute
const isExpanded = ref(false)
</script>

<style scoped>
/* General page header styling */
.page-header.default-class {
  position: relative;
  background-color: var(--bs-light) !important;
}

/* Card styling */
.card {
  background-color: rgba(255, 255, 255, 0.95); /* Slight transparency */
  border-radius: 8px;
}

/* Primary text color */
.text-primary {
  color: var(--bs-primary) !important; /* Bootstrap variable for primary color */
}

/* General text color */
.lead {
  color: var(--bs-body-color) !important;
}

/* Button primary color styling */
.btn-primary {
  background-color: var(--bs-primary) !important;
  border-color: var(--bs-primary) !important;
  color: white;
}

.btn-primary:hover {
  background-color: darken(var(--bs-primary), 10%) !important;
  border-color: darken(var(--bs-primary), 10%) !important;
}

/* Background image styling */
.bg-image {
  background-image: url('@/assets/images/curved7.jpg');
  background-size: cover;
  background-position: center;
}
</style>