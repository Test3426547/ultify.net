<template>
  <div>
    <!-- Top Primary Section -->
    <div class="top-section bg-primary"></div>

    <!-- Main Header Section -->
    <header :class="headerClass" class="page-header min-vh-100 position-relative bg-white" :aria-expanded="isExpanded.toString()">
      <div class="container h-100 d-flex align-items-center">
        <div class="row w-100">
          <div class="col-lg-5 d-flex flex-column justify-content-center text-column">
            <div class="badge rounded-pill bg-primary mb-3 pill-large">Welcome To Ultify</div>
            <h1 class="text-primary">Capitalise on digital</h1>
            <h1 class="mb-4">resources with Ultify</h1>
            <p class="lead">
              Our agency utilises digital resources and our working strategies
              to elevate your business operations. Start now and maximise your
              digital reach.
            </p>
            <div class="buttons">
              <NuxtLink to="/contact-us" class="btn btn-primary mt-4 rounded-pill">Get Started</NuxtLink>
            </div>
          </div>
          <div class="col-lg-2 d-flex"></div>
          <div class="col-lg-5 d-flex justify-content-center align-items-center image-column">
            <div class="placeholder-image">Future Image Here</div>
          </div>
        </div>
      </div>
    </header>

    <!-- Bottom Diagonal Section -->
    <div class="diagonal-section diagonal-bottom bg-primary"></div>
    <div class="bottom-section bg-primary"></div>
  </div>
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
  background-color: var(--bs-white) !important;
  padding-bottom: 0;
  min-height: calc(100vh - 150px);
}

/* Top section styling */
.top-section {
  height: 100px;
  width: 100%;
}

/* Diagonal sections */
.diagonal-section {
  height: 150px;
  width: 100%;
  position: relative;
  bottom: 0;
  transform: skewY(-3deg);
  transform-origin: bottom left;
  margin-top: -100px;
}

.bottom-section {
  height: 50px;
  width: 100%;
  position: relative;
  bottom: 0;
  margin-top: -100px;
}

/* Primary text color */
.text-primary {
  color: var(--bs-primary) !important;
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

.btn-primary.rounded-pill {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Placeholder image styling */
.placeholder-image {
  width: 100%;
  height: 300px;
  background-color: var(--bs-light);
  border: 2px dashed var(--bs-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-secondary);
  font-size: 1.5rem;
  border-radius: 8px;
}

/* Badge styling */
.badge {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  display: inline-block;
}

.pill-small {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
}

.pill-large {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  margin-top: -50px;
}

/* Column styling */
.text-column {
  text-align: left;
}

.image-column {
  text-align: right;
}
</style>