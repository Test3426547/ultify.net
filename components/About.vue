<template>
  <section class="about-us">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="text-container">
          <h2>Embrace the <span class="highlight">Digital Wave</span>;<br>Ride the tide or get left behind!</h2>
          <div class="image-container">
            <img src="/home-04.webp" alt="Cyclist on a wave">
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
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.about-us {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bs-white);
  padding: 80px 0;
  overflow: hidden;
}

.container-fluid {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.text-container {
  flex: 0 0 70%;
  position: relative;
}

.text-container h2 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  transform: translateX(-25px);
}

.highlight {
  color: var(--bs-primary);
}

.image-container {
  position: relative;
  width: calc(100% + 100px);
  margin-left: -100px;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: visible;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-container {
  flex: 0 0 30%;
  padding-left: 90px;
  margin-top: -50px;
}

.description-container h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.description-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 1400px) {
  .text-container {
    flex: 0 0 65%;
  }
  
  .description-container {
    flex: 0 0 35%;
    padding-left: 60px;
  }
}

@media (max-width: 1200px) {
  .text-container h2 {
    font-size: 3rem;
  }
  
  .description-container h3 {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }

  .text-container, .description-container {
    flex: 0 0 100%;
  }

  .description-container {
    margin-top: 40px;
    padding-left: 0;
  }

  .text-container h2 {
    font-size: 2.5rem;
    transform: translateX(0);
  }

  .image-container {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .about-us {
    padding: 60px 0;
  }

  .text-container h2 {
    font-size: 2rem;
  }

  .description-container h3 {
    font-size: 1.75rem;
  }
}
</style>