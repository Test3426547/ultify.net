<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="row w-100">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="card bg-dark rounded-4 shadow-lg h-100"></div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card bg-dark rounded-4 shadow-lg h-100"></div>
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
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.02);
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
}
</style>