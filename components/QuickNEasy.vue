<template>
    <section class="quick-n-easy bg-bs-primary text-bs-white py-5">
      <!-- Changed background to bs-primary and text to bs-white -->
      <div class="container">
        <div class="row align-items-center">
          <!-- Left column with text content -->
          <div class="col-lg-6">
            <h2 class="mb-4">Get started, Quick 'n' Easy</h2>
            
            <!-- Numbered list -->
            <div class="numbered-list">
              <!-- Updated styling for numbered items -->
              <div class="list-item d-flex mb-3">
                <div class="number me-3">1</div>
                <p>Reach out to us and utilise our free consultation system. We will collaboratively discuss with you about your project requirements, spending, goals and more!</p>
              </div>
              <div class="list-item d-flex mb-3">
                <div class="number me-3">2</div>
                <p>Our team will create a effective strategy that aligns with your discussed requirements and offer you an effective solution.</p>
              </div>
              <div class="list-item d-flex mb-3">
                <div class="number me-3">3</div>
                <p>Our team will get to work straight away, informing you of updates on a daily basis. In any service offering, we will provide test and drafts to ensure the most effective results are achieved.</p>
              </div>
            </div>
            
            <!-- Consult Now button -->
            <!-- Updated pill styling: larger size, bs-white background, bs-primary text -->
            <nuxt-link to="/consultation" class="btn bg-bs-white text-bs-primary rounded-pill px-5 py-3 mt-3 fs-5">
              Consult Now
            </nuxt-link>
          </div>
          
          <!-- Right column with image -->
          <!-- Added margin-left to move image 200px to the right -->
          <div class="col-lg-6 mt-4 mt-lg-0 image-container">
            <img src="/quickneasy.svg" alt="Quick and Easy Process" class="img-fluid">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'QuickNEasy',
  }
  </script>
  
  <style scoped>
  .quick-n-easy {
    /* Background color is now set using the bg-bs-primary class in the template */
  }
  
  .number {
    /* Increased size of number circles */
    width: 40px;
    height: 40px;
    border: 2px solid var(--bs-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1.5rem; /* Increased font size for numbers */
    font-weight: bold;
  }
  
  .list-item p {
    margin-bottom: 0;
    font-size: 1.1rem; /* Slightly increased text size for better readability */
  }
  
  /* Move image 200px to the right */
  .image-container {
    margin-left: 200px;
  }
  
  /* Ensure responsiveness */
  @media (max-width: 991.98px) {
    .quick-n-easy h2 {
      font-size: 1.75rem;
    }
    
    .list-item {
      font-size: 1rem;
    }
  
    /* Reset image position on smaller screens */
    .image-container {
      margin-left: 0;
    }
  }
  </style>