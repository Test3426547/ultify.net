<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container h-100">
      <!-- Empty container to maintain full screen height -->
    </div>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.service-cards-section {
  min-height: 100vh; /* Full viewport height */
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

@media (max-width: 991.98px) {
  .service-cards-section {
    min-height: 100vh; /* Ensure full height on smaller screens */
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    min-height: 100vh; /* Maintain full height on mobile */
  }
}
</style>