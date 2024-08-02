<template>
    <header>
      <div class="page-header min-vh-80 bg-light">
        <div
          class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block"
          style="background-image: url('curved2.jpg'); background-size:cover;"
        ></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 d-flex justify-content-center flex-column">
              <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5">
                <h1 class="text-gradient text-primary">
                  Our Impactful Consultation System
                </h1>
                <p class="lead pe-5 me-5">
                  We heard you are ready to begin your digital journey! Get talking
                  to a suited expert for free, now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderConsultation',
  };
  </script>
  
  <style scoped>
  /* Define custom styles for HeaderConsultation component */
  
  .page-header {
    position: relative;
    background-color: var(--bs-light, #f8f9fa); /* Use Bootstrap light color */
    min-height: 80vh;
  }
  
  .card-body {
    background: none; /* Remove background color for clarity */
    border: none; /* Remove border for a cleaner look */
    box-shadow: none; /* Remove shadow for a clean look */
  }
  
  .text-gradient {
    background: -webkit-linear-gradient(left, #007bff, #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>  