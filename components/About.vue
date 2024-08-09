<template>
    <section class="about-us">
      <div class="container">
        <div class="text-container">
          <h2>Embrace the <span class="highlight">Digital Wave</span>; Ride the tide or get left behind!</h2>
          <div class="image-container">
            <img src="/curved2.jpg" alt="Cyclist on a wave">
          </div>
        </div>
        <div class="description-container">
          <h3>ABOUT US</h3>
          <p>
            Capitalise from the technological shift of the business world. 
            ULTIFY Solutions & Marketing is a team of professionals that 
            are dedicated and have rigorously understood the algorithms 
            of social media and online marketing.
          </p>
          <p>
            Get your Digital Marketing work done by a real team of qualified 
            professionals in Australia now.
          </p>
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
  
  .about-us {
    display: flex;
    flex-wrap: wrap;
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
  
  .text-container {
    flex: 1;
    padding: 20px;
  }
  
  .text-container h2 {
    font-size: 2em;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .text-container .highlight {
    color: #0096c7;
  }
  
  .image-container {
    text-align: center;
  }
  
  .image-container img {
    max-width: 100%;
    height: auto;
  }
  
  .description-container {
    flex: 1;
    padding: 20px;
  }
  
  .description-container h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .description-container p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  
  /* Responsive styling */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  
    .text-container, .description-container {
      width: 100%;
    }
  
    .text-container h2 {
      text-align: center;
    }
  
    .description-container h3 {
      text-align: center;
    }
  }
  </style>