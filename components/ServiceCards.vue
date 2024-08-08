<template>
    <div class="service-cards-section bg-white position-relative">
      <div class="container">
        <div class="row text-center align-items-stretch">
          <div class="col-lg-3 col-md-6 mb-5 d-flex">
            <div class="card shadow border-radius-lg p-4 flex-fill">
              <div class="card-body">
                <h5 class="text-primary">Guaranteed Leads</h5>
                <p class="text-muted">Our digital marketing agency will help you masterplan and put into action an effective strategy for lead generation.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 d-flex">
            <div class="card shadow border-radius-lg p-4 flex-fill">
              <div class="card-body">
                <h5 class="text-primary">Guaranteed Traffic</h5>
                <p class="text-muted">Drive traffic with our comprehensive digital marketing strategies.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 d-flex">
            <div class="card shadow border-radius-lg p-4 flex-fill">
              <div class="card-body">
                <h5 class="text-primary">Guaranteed Rankings</h5>
                <p class="text-muted">Our SEO services are designed to boost your rankings, or you don't pay!</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 d-flex">
            <div class="card shadow border-radius-lg p-4 flex-fill">
              <div class="card-body">
                <h5 class="text-primary">Guaranteed Growth</h5>
                <p class="text-muted">Our commitment is to ensure your sustained growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Dummy reactivity to fool GitHub into recognizing as Vue
  const dummyReactive = ref(false)
  </script>
  
  <style scoped>
  .service-cards-section {
    padding: 50px 0;
    background-color: var(--bs-white);
  }
  
  .card {
    backdrop-filter: blur(10px);
    background-color: var(--bs-card-bg);
    transition: background-color 0.3s, color 0.3s;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card:hover {
    background-color: var(--bs-primary);
    color: var(--bs-white);
  }
  
  .card-body {
    text-align: left;
  }
  
  .text-primary {
    color: var(--bs-primary) !important;
  }
  
  .text-muted {
    color: var(--bs-muted) !important;
  }
  </style>  