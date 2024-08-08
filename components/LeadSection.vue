<template>
    <div class="lead-section position-relative">
      <div class="container position-relative text-center">
        <div class="content-wrapper">
          <h1 class="fw-bold mb-5">
            Gain a <span class="text-primary">Lead,</span> Without The <span class="text-primary">Sweat</span>
          </h1>
          <p class="lead">
            We understand that the digital marketing aspect of things is rather complicated, especially while running a business. Our SEO, SEM, and PPC strategies have been proven to work and are constantly aligned with current algorithms. We are so confident, that if we don’t deliver, we’ll refund you. Whether you need leads, a website, content or a professional to help, we are ready and remove the hard work from your path.
          </p>
        </div>
        <img src="/home-02.png" alt="Lead Image" class="lead-image">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const leadImage = ref('/home-02.png')
  </script>
  
  <style scoped>
  .lead-section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    background-color: var(--bs-primary);
    padding-bottom: 100px; /* Add 100px of bs-primary color to the bottom */
  }
  
  .container {
    position: relative;
    z-index: 2;
    padding: 0 20px;
  }
  
  .content-wrapper {
    width: 100%;
    max-width: 800px;
    margin-top: 50px; /* Adjust the top margin as needed */
  }
  
  .lead-image {
    position: absolute;
    top: 50px; /* Shift the image down by 50px */
    left: 0;
    width: 100%;
    height: calc(100% - 150px); /* Adjust height to account for the padding */
    object-fit: cover;
    z-index: 1;
  }
  
  .text-primary {
    color: var(--bs-primary) !important;
  }
  
  .lead {
    color: var(--bs-black) !important;
    max-width: 800px;
    margin: 100px auto 0;
  }
  </style>  