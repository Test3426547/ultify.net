<template>
    <header>
      <div class="page-header min-vh-80 bg-light">
        <div class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block" :style="{ backgroundImage: 'url(curved5.jpg)', backgroundSize: 'cover' }"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 d-flex justify-content-center flex-column">
              <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
                <h1 class="text-gradient text-primary">Reach Out and <span class="text-primary">Contact Us Today</span></h1>
                <p class="lead pe-5 me-5">Need to get in contact with us? Our email and phone number are at your disposal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderContact',
  };
  </script>
  
  <style scoped>
  .page-header {
    min-height: 80vh;
  }
  
  .card-body {
    background-color: #fff; /* No blur, just solid color */
  }
  
  .text-gradient {
    background: -webkit-linear-gradient(left, #007bff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .text-primary {
    color: var(--bs-primary);
  }
  
  .bg-light {
    background-color: var(--bs-light, #f8f9fa) !important;
  }
  </style>  