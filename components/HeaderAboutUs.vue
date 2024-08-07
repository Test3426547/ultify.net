<template>
  <header>
    <div class="page-header min-vh-80 bg-light">
      <div class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block bg-image"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex justify-content-center flex-column">
            <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
              <h1 class="text-gradient text-primary">Learn More <span class="text-primary">About Us</span></h1>
              <p class="lead pe-5 me-5">Need to get in contact with us? Our email and phone number are at your disposal.</p>
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
  background-color: var(--bs-light) !important;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.text-gradient {
  background: -webkit-linear-gradient(left, var(--bs-blue), var(--bs-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* Add the standard property */
}

.text-primary {
  color: var(--bs-primary) !important;
}

.bg-light {
  background-color: var(--bs-light) !important;
}

.bg-image {
  background-size: cover;
  background-position: center;
}

.lead {
  color: var(--bs-body-color) !important;
}
</style>