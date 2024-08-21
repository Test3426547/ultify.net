<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div class="row w-100 justify-content-between">
        <div class="col-12 col-lg-5 mb-4 mb-lg-0 position-relative">
          <div class="card custom-black custom-rounded shadow-lg custom-size"></div>
          <div class="image-wrapper custom-size custom-rounded">
            <img src="/about-us-01.webp" alt="About Us 1" class="custom-image" />
          </div>
        </div>
        <div class="col-12 col-lg-5 position-relative">
          <div class="card custom-black custom-rounded shadow-lg custom-size"></div>
          <div class="image-wrapper custom-size custom-rounded">
            <img src="/about-us-02.webp" alt="About Us 2" class="custom-image" />
          </div>
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.custom-black {
  background-color: #2B2A2A;
}

.custom-rounded {
  border-radius: 30px;
  overflow: hidden;
}

.custom-size {
  width: calc(100% + 100px);
  height: 0;
  padding-bottom: calc(56.25% + 100px); /* 16:9 aspect ratio + 100px extra height */
  margin-left: -50px;
  margin-right: -50px;
}

.image-wrapper {
  position: absolute;
  top: -10px; /* Changed from -20px to -10px to move up by 10px */
  left: -30px; /* Changed from -70px to -30px to move right by 20px */
}

.custom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 991.98px) {
  .service-cards-section {
    min-height: 100vh;
  }
  
  .custom-size,
  .image-wrapper {
    width: 100%;
    padding-bottom: 100%; /* Square aspect ratio on smaller screens */
    margin-left: 0;
    margin-right: 0;
  }

  .image-wrapper {
    left: 0; /* Reset left position on smaller screens */
    top: -10px; /* Maintain 10px upward shift on smaller screens */
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