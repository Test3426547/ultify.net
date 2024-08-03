<template>
  <header class="page-header min-vh-80 position-relative bg-light dark-mode-bg">
    <div
      class="position-absolute top-0 end-0 w-50 h-100 z-index-0 d-none d-md-block bg-image"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex justify-content-center flex-column">
          <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
            <h1 class="text-primary dark-mode-text">Capitalise on digital</h1>
            <h1 class="mb-4 dark-mode-text">resources with Ultify</h1>
            <p class="lead pe-5 me-5 dark-mode-text-muted">
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

<script>
export default {
  name: 'HeaderHome',
};
</script>

<style scoped>
/* General page header styling */
.page-header {
  position: relative;
  background-color: var(--bs-light, #f8f9fa) !important;
}

/* Background for dark mode */
.dark-mode .page-header {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

/* Card styling */
.card {
  background-color: rgba(255, 255, 255, 0.95); /* Slight transparency */
  border-radius: 8px;
}

/* Card background for dark mode */
.dark-mode .card {
  background-color: rgba(34, 34, 34, 0.95); /* Dark background with slight transparency */
}

/* Primary text color */
.text-primary {
  color: var(--bs-primary); /* Bootstrap variable for primary color */
}

/* Adjust primary text color for dark mode */
.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd);
}

/* General text color adjustment for dark mode */
.dark-mode .dark-mode-text {
  color: #f8f9fa;
}

.dark-mode .dark-mode-text-muted {
  color: #adb5bd;
}

/* Button primary color styling */
.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: white;
}

.btn-primary:hover {
  background-color: darken(var(--bs-primary), 10%);
  border-color: darken(var(--bs-primary), 10%);
}

/* Background image styling */
.bg-image {
  background-image: url('/curved7.jpg');
  background-size: cover;
  background-position: center;
}

/* Dark mode adjustments for background image */
.dark-mode .bg-image {
  filter: brightness(0.7);
}
</style>