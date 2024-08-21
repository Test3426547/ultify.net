<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="row w-100 justify-content-between"> <!-- Added justify-content-between -->
        <div class="col-12 col-md-5 mb-4 mb-md-0"> <!-- Changed col-md-6 to col-md-5 -->
          <!-- Removed ms-n5 class -->
          <div class="card custom-black custom-rounded shadow-lg h-100"></div>
        </div>
        <div class="col-12 col-md-5"> <!-- Changed col-md-6 to col-md-5 -->
          <!-- Removed me-n5 class -->
          <div class="card custom-black custom-rounded shadow-lg h-100"></div>
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
}

.custom-black {
  background-color: #2b2a2a;
}

.custom-rounded {
  border-radius: 30px;
}

/* Removed custom margin classes ms-n5 and me-n5 */

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

  .row {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>