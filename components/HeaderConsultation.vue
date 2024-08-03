<template>
  <header>
    <div class="page-header min-vh-80 bg-light dark-mode-bg">
      <div
        class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block bg-image"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex justify-content-center flex-column">
            <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
              <h1 class="text-gradient text-primary dark-mode-text-gradient">
                Our Impactful Consultation System
              </h1>
              <p class="lead pe-5 me-5 dark-mode-text-muted">
                We heard you are ready to begin your digital journey! Get talking
                to a suited expert for free, now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderConsultation',
};
</script>

<style scoped>
/* Define custom styles for HeaderConsultation component */

/* General page header styling */
.page-header {
  position: relative;
  background-color: var(--bs-light, #f8f9fa); /* Light mode background */
  min-height: 80vh;
}

/* Dark mode background for page header */
.dark-mode .page-header {
  background-color: var(--bs-dark-bg, #343a40);
}

/* Card body styling for light and dark modes */
.card-body {
  background-color: var(--bs-light, #fff); /* Light mode background */
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.dark-mode .card-body {
  background-color: var(--bs-dark-bg, #343a40); /* Dark mode background */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
}

/* Gradient text styling for light and dark modes */
.text-gradient {
  background: -webkit-linear-gradient(left, #007bff, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark-mode .text-gradient {
  background: -webkit-linear-gradient(left, #0d6efd, #6610f2);
}

/* Primary text color for light and dark modes */
.text-primary {
  color: var(--bs-primary);
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd);
}

/* Background image settings */
.bg-image {
  background-image: url('curved2.jpg');
  background-size: cover;
  background-position: center;
}

/* Dim image for dark mode for better contrast */
.dark-mode .bg-image {
  filter: brightness(0.7);
}

/* Text color adjustments for dark mode */
.lead {
  color: var(--bs-body-color, #212529);
}

.dark-mode .lead {
  color: var(--bs-body-color-dark, #adb5bd);
}
</style>