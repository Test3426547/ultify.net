<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="row w-100">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <!-- Added custom class for black background and extreme rounding -->
          <!-- Moved 50px to the left using negative margin -->
          <div class="card custom-black custom-rounded shadow-lg h-100 ms-n5"></div>
        </div>
        <div class="col-12 col-md-6">
          <!-- Added custom class for black background and extreme rounding -->
          <!-- Moved 50px to the right using positive margin -->
          <div class="card custom-black custom-rounded shadow-lg h-100 me-n5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.service-cards-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.card {
  aspect-ratio: 16 / 9;
  /* Removed hover animation */
}

/* Custom class for black background */
.custom-black {
  background-color: #000000;
}

/* Custom class for extreme rounded corners */
.custom-rounded {
  border-radius: 30px;
}

/* Custom margin classes for spacing */
.ms-n5 {
  margin-left: -50px;
}

.me-n5 {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .service-cards-section {
    min-height: 100vh;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    min-height: 100vh;
  }
  
  .card {
    aspect-ratio: 1 / 1;
  }

  /* Reset margins on mobile to prevent overflow */
  .ms-n5, .me-n5 {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>