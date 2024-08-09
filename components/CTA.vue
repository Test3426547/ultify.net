<template>
  <section class="cta-section bg-primary text-white py-5">
    <div class="container">
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <!-- Text Section -->
        <div class="text-center text-lg-left mb-4 mb-lg-0">
          <h2 class="cta-title fw-bold">
            Ready to get started with your own digital journey?
          </h2>
        </div>
        <!-- Call to Action Button -->
        <div>
          <NuxtLink to="/contact-us" class="cta-button btn btn-white text-primary fw-bold rounded-pill">
            Talk to an Expert Today
          </NuxtLink>
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
.cta-section {
  background-color: var(--bs-primary);
  color: var(--bs-white);
}

.cta-title {
  font-size: 2em;
}

.cta-button {
  padding: 10px 30px;
  font-size: 1em;
  border: none;
}

.btn-white {
  background-color: var(--bs-white);
  color: var(--bs-primary);
}

.btn-white:hover {
  background-color: var(--bs-light);
}

/* Responsive styling */
@media (max-width: 768px) {
  .cta-title {
    font-size: 1.5em;
  }
}
</style>