<template>
    <section class="digital-world">
      <div class="container">
        <h2 class="title">Impacting the digital world since 2019</h2>
        <div class="image-wrapper">
          <img src="/curved2.jpg" alt="Office Environment" class="responsive-image">
        </div>
        <div class="button-group">
          <button class="pill-button">ABOUT US</button>
          <button class="pill-button">CONTACT US</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .digital-world {
    background-color: var(--bs-white);
    padding: 40px 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 2em;
    font-weight: bold;
    color: var(--bs-dark);
    margin-bottom: 20px;
  }
  
  .image-wrapper {
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;
  }
  
  .responsive-image {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  
  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .pill-button {
    background-color: var(--bs-primary);
    color: var(--bs-white);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em;
  }
  
  .pill-button:hover {
    background-color: darken(var(--bs-primary), 10%);
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
    
    .title {
      font-size: 1.5em;
    }
  }
  </style>