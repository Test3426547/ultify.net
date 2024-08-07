<template>
  <header class="page-header min-vh-80 position-relative bg-light">
    <div class="position-absolute top-0 end-0 w-50 h-100 z-index-0 d-none d-md-block bg-image"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex justify-content-center flex-column">
          <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
            <h1 class="text-primary">{{ mainTitle }}</h1>
            <h1 class="mb-4">{{ subTitle }}</h1>
            <p class="lead pe-5 me-5">
              Our agency utilises digital resources and our working strategies
              to elevate your business operations. Start now and maximise your
              digital reach.
            </p>
            <div class="buttons">
              <NuxtLink to="/contact-us" class="btn btn-primary mt-4">Get Started</NuxtLink>
              <button @click="changeTitle" class="btn btn-secondary mt-4">Change Title</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mainTitle = ref('Capitalise on digital')
const subTitle = ref('resources with Ultify')

function changeTitle() {
  mainTitle.value = 'Harness the power of digital'
  subTitle.value = 'solutions with Ultify'
}
</script>

<style scoped>
/* General page header styling */
.page-header {
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

/* Secondary button styling */
.btn-secondary {
  background-color: var(--bs-secondary) !important;
  border-color: var(--bs-secondary) !important;
  color: white;
}

.btn-secondary:hover {
  background-color: darken(var(--bs-secondary), 10%) !important;
  border-color: darken(var(--bs-secondary), 10%) !important;
}

/* Background image styling */
.bg-image {
  background-image: url('@/assets/images/curved7.jpg');
  background-size: cover;
  background-position: center;
}
</style>