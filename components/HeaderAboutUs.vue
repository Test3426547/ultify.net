<template>
  <header>
    <div class="page-header min-vh-80 bg-light dark-mode-bg">
      <div class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block bg-image"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex justify-content-center flex-column">
            <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
              <h1 class="text-gradient text-primary dark-mode-text-gradient">Learn More <span class="text-primary dark-mode-text-primary">About Us</span></h1>
              <p class="lead pe-5 me-5 dark-mode-text-muted">Need to get in contact with us? Our email and phone number are at your disposal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderAboutUs',
};
</script>

<style scoped>
.page-header {
  min-height: 80vh;
}

.card-body {
  background-color: var(--bs-light, #fff); /* Light mode background */
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.dark-mode .card-body {
  background-color: var(--bs-dark-bg, #343a40); /* Dark mode background */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
}

.text-gradient {
  background: -webkit-linear-gradient(left, #007bff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark-mode .text-gradient {
  background: -webkit-linear-gradient(left, #0d6efd, #6610f2);
}

.text-primary {
  color: var(--bs-primary);
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd);
}

.bg-light {
  background-color: var(--bs-light, #f8f9fa) !important;
}

.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

.bg-image {
  background-size: cover;
  background-position: center;
}

.dark-mode .bg-image {
  filter: brightness(0.7); /* Dim the image in dark mode for better contrast */
}

.lead {
  color: var(--bs-body-color, #212529);
}

.dark-mode .lead {
  color: var(--bs-body-color-dark, #adb5bd);
}
</style>