<template>
  <section class="py-5 mt-1 bg-light">
    <div class="container-fluid px-0">
      <div class="row justify-content-center text-center">
        <div class="col-12 position-relative">
          <div class="row align-items-center">
            <!-- Text Section -->
            <div class="col-xl-8 text-center mx-auto">
              <h2 class="display-5 fw-bold mb-3 text-primary">
                Ready to get started with your own digital journey?
              </h2>
              <p class="mb-4 text-muted">
                Our team is here to help you every step of the way. Contact us today to begin your transformation.
              </p>
              <NuxtLink to="/contact-us" class="btn btn-outline-primary btn-lg rounded-pill">
                Talk to an Expert Today
              </NuxtLink>
            </div>
            <!-- Image Section -->
            <div class="col-xl-4 position-relative p-0 d-flex justify-content-end">
              <img
                class="img-fluid rounded-end"
                src="/curved13.jpg"
                alt="Digital Journey Image"
                style="max-height: 400px;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTA',
};
</script>

<style scoped>
/* Ensure text-primary uses the correct primary color */
.text-primary {
  color: var(--bs-primary) !important;
}

/* Styling for the outline primary button */
.btn-outline-primary {
  border-color: var(--bs-primary);
  color: var(--bs-primary);
}

.btn-outline-primary:hover {
  background-color: var(--bs-primary);
  color: #fff;
}

/* Image styling to ensure it fits well and has rounded edges */
.img-fluid {
  max-width: 100%;
  height: auto;
}

.rounded-end {
  border-radius: 0 0.5rem 0.5rem 0;
}

/* Ensure consistent background color */
.bg-light {
  background-color: var(--bs-light, #f8f9fa) !important;
}
</style>