<template>
    <header>
      <div class="page-header min-vh-100 bg-light" :style="{ backgroundImage: 'url(/curved1.jpg)' }">
        <span class="mask bg-gradient-dark opacity-4"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-sm-9 text-center mx-auto">
              <h1 class="text-primary mb-4">Rise to Digital Excellence with Your Own <span class="fw-bold">Website</span></h1>
              <p class="lead text-dark mb-sm-6 mb-4">
                We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game, make the most of it!
              </p>
              <p class="text-primary h6 text-uppercase mb-4">Connect with us on:</p>
  
              <div class="d-flex justify-content-center">
                <a href="https://www.facebook.com" aria-label="Facebook"><i class="fab fa-facebook fa-2x text-primary me-5"></i></a>
                <a href="https://www.instagram.com" aria-label="Instagram"><i class="fab fa-instagram fa-2x text-primary me-5"></i></a>
                <a href="https://www.linkedin.com" aria-label="LinkedIn"><i class="fab fa-linkedin fa-2x text-primary"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative" style="height: 36px; overflow: hidden; margin-top: -36px; z-index:2;">
        <div class="w-full absolute bottom-0 start-0 end-0" style="transform: scale(2); transform-origin: top center; color: #fbfbfb;">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderWebsite',
  };
  </script>
  
  <style scoped>
  .page-header {
    background-color: var(--bs-light, #f8f9fa) !important;
  }
  
  .text-primary {
    color: #007bff !important; /* Adjust this to match your brand's primary color */
  }
  
  .lead {
    font-size: 1.25rem;
  }
  
  .relative {
    position: relative;
  }
  </style>  