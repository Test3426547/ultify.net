<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container">
      <!-- Empty container to maintain space -->
    </div>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.service-cards-section {
  padding: 115px 0 50px;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

@media (max-width: 991.98px) {
  .service-cards-section {
    padding: 80px 0 30px;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    padding: 60px 0 20px;
  }
}
</style>