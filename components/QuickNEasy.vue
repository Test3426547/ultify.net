<template>
    <section class="quick-n-easy bg-bs-primary text-bs-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left column with text content -->
          <div class="col-lg-6">
            <h2 class="mb-4">Get started, Quick 'n' Easy</h2>
            
            <!-- Numbered list -->
            <div class="numbered-list">
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
            <nuxt-link to="/consultation" class="btn bg-bs-white text-bs-primary rounded-pill px-4 py-2 mt-3">
              Consult Now
            </nuxt-link>
          </div>
          
          <!-- Right column with image -->
          <div class="col-lg-6 mt-4 mt-lg-0">
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
    /* The background color is now set using the bg-bs-primary class in the template */
  }
  
  .number {
    width: 30px;
    height: 30px;
    border: 2px solid var(--bs-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .list-item p {
    margin-bottom: 0;
  }
  
  /* Ensure responsiveness */
  @media (max-width: 991.98px) {
    .quick-n-easy h2 {
      font-size: 1.75rem;
    }
    
    .list-item {
      font-size: 0.9rem;
    }
  }
  </style>