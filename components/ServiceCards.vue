<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container-fluid h-100 d-flex align-items-center justify-content-center"> <!-- Changed to container-fluid for more width -->
      <div class="row w-100 justify-content-between">
        <div class="col-12 col-lg-5 mb-4 mb-lg-0"> <!-- Changed breakpoint to lg -->
          <div class="card custom-black custom-rounded shadow-lg custom-size"></div> <!-- Added custom-size class -->
        </div>
        <div class="col-12 col-lg-5"> <!-- Changed breakpoint to lg -->
          <div class="card custom-black custom-rounded shadow-lg custom-size"></div> <!-- Added custom-size class -->
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

.container-fluid {
  max-width: 1400px; /* Increased max-width to accommodate larger cards */
  margin: 0 auto;
  padding: 0 15px;
}

.custom-black {
  background-color: #2B2A2A;
}

.custom-rounded {
  border-radius: 30px;
}

/* New class for custom size */
.custom-size {
  width: calc(100% + 100px); /* 100px wider */
  height: 0;
  padding-bottom: calc(56.25% + 200px); /* 16:9 aspect ratio + 200px taller */
  margin-left: -50px; /* Offset half of the extra width */
  margin-right: -50px; /* Offset half of the extra width */
}

@media (max-width: 991.98px) {
  .service-cards-section {
    min-height: 100vh;
  }
  
  .custom-size {
    width: 100%; /* Full width on smaller screens */
    padding-bottom: 100%; /* Square aspect ratio on smaller screens */
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    min-height: 100vh;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>