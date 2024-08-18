<template>
    <section class="hero-consultation">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div v-parallax="0.2" class="hero-image">
              <!-- Replace with your image -->
              <img src="/print-media-02.jpg" alt="Consultation Hero Image" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="info-container bg-primary text-white rounded-lg p-5">
              <div v-parallax="0.1" class="info-section">
                <h3>We protect your intellectual property.</h3>
                <p>Our agency will provide NDA's to protect your intellectual property and confidential information.</p>
              </div>
              <div v-parallax="0.15" class="info-section">
                <h3>No maximum time</h3>
                <p>We provide in-depth consultations with no maximum time to ensure you get the information you need.</p>
              </div>
              <div v-parallax="0.2" class="info-section">
                <h3>Certified Consultants</h3>
                <p>Our consultations are managed by real business consultants who have passed our extensive certification checklist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import VueParallaxJs from 'vue-parallax-js'
  import { onMounted } from 'vue'
  
  onMounted(() => {
    VueParallaxJs.install(window)
  })
  </script>
  
  <style scoped>
  .hero-consultation {
    padding: 100px 0;
    overflow: hidden;
  }
  
  .hero-image {
    height: 100vh;
    position: sticky;
    top: 0;
  }
  
  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .info-container {
    height: 300vh; /* Adjust based on your content */
  }
  
  .info-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  </style>