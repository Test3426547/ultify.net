<template>
    <section class="seo-section">
      <div class="container">
        <div class="buttons-container">
          <button class="seo-button">SEO</button>
          <button class="seo-button">FREE REPORT</button>
          <button class="seo-button">LIVE CHAT</button>
        </div>
        <div class="consultation-container">
          <h2>So you want to ride the wave?!</h2>
          <p>
            View our many resources prior to your consultation.
            If you are ready, consult now!
          </p>
          <hr>
          <button class="consultation-button">FREE CONSULTATION</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Basic reset and styling */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .seo-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #fff;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .seo-button {
    background-color: var(--bs-primary);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em;
    text-align: center;
  }
  
  .seo-button:hover {
    background-color: darken(var(--bs-primary), 10%);
  }
  
  .consultation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .consultation-container h2 {
    color: var(--bs-primary);
    margin-bottom: 20px;
    text-align: center;
  }
  
  .consultation-container p {
    font-size: 1em;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .consultation-container hr {
    width: 80%;
    border: 0;
    border-top: 1px solid var(--bs-primary);
    margin-bottom: 20px;
  }
  
  .consultation-button {
    background-color: var(--bs-primary);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1em;
    text-align: center;
  }
  
  .consultation-button:hover {
    background-color: darken(var(--bs-primary), 10%);
  }
  
  /* Responsive styling */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  
    .buttons-container {
      width: 100%;
      align-items: center;
    }
  
    .consultation-container {
      width: 100%;
      margin-top: 20px;
    }
  
    .seo-button, .consultation-button {
      width: 80%;
    }
  }
  </style>