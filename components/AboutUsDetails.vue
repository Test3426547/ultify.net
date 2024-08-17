<template>
    <section class="about-us-details">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 content-col">
            <div class="content-wrapper">
              <div class="number">01/</div>
              <div class="pill-wrapper">
                <div class="pill">Two minds is better than one</div>
              </div>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="col-lg-6 image-col">
            <div class="image-wrapper">
              <img src="/about-us-01.png" alt="About Us" class="img-fluid rounded-image">
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script needed for now
  </script>
  
  <style scoped>
  .about-us-details {
    padding: 5rem 0;
    background-color: var(--bs-light);
  }
  
  .container {
    max-width: 1200px;
  }
  
  .content-wrapper {
    max-width: 80%;
  }
  
  .number {
    font-size: 1.2rem;
    color: var(--bs-gray-600);
    margin-bottom: 1rem;
  }
  
  .pill-wrapper {
    margin-bottom: 2rem;
  }
  
  .pill {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: var(--bs-primary);
    color: white;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--bs-gray-700);
  }
  
  .image-wrapper {
    padding-left: 2rem;
  }
  
  .rounded-image {
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 991.98px) {
    .about-us-details {
      padding: 3rem 0;
    }
  
    .content-wrapper {
      max-width: 100%;
      margin-bottom: 2rem;
    }
  
    .image-wrapper {
      padding-left: 0;
    }
  }
  
  @media (max-width: 767.98px) {
    .pill {
      font-size: 1.2rem;
    }
  
    .description {
      font-size: 1rem;
    }
  }
  </style>