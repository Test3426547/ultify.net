<template>
    <div class="hero-section bg-primary">
      <div class="container h-100 d-flex flex-column justify-content-center" style="margin-top: -50px;">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="display-4 text-white fw-bold">
              Get a Website Exactly The Way You Need!
            </h1>
            <p class="lead text-white">
              You have high standards. We have the expertise to meet them.
            </p>
          </div>
          <div class="col-lg-6 mt-5 mt-lg-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/home-01.png" class="d-block w-100 rounded border-radius-lg shadow" alt="Responsive Website">
                </div>
                <div class="carousel-item">
                  <img src="/home-06.png" class="d-block w-100 rounded border-radius-lg shadow" alt="Website Development">
                </div>
                <div class="carousel-item">
                  <img src="/home-07.png" class="d-block w-100 rounded border-radius-lg shadow" alt="SEO Optimization">
                </div>
                <div class="carousel-item">
                  <img src="/home-08.png" class="d-block w-100 rounded border-radius-lg shadow" alt="Digital Marketing">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const initCarousel = () => {
    const carouselElement = document.getElementById('carouselExampleIndicators')
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 2000,
      ride: 'carousel'
    })
  }
  
  onMounted(() => {
    initCarousel()
  })
  </script>
  
  <style scoped>
  .hero-section {
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bs-primary);
    margin-top: -50px; /* Shift the content up */
  }
  
  .text-white {
    color: var(--bs-white) !important;
  }
  
  .carousel {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>  