<template>
  <section class="about-us">
    <div class="container">
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
  padding: 40px 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.text-container {
  flex: 0 0 60%;
  padding-right: 40px;
}

.text-container h2 {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;
}

.highlight {
  color: var(--bs-primary);
}

.image-container {
  margin-top: 30px;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.description-container {
  flex: 0 0 35%;
}

.description-container h3 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.description-container p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }

  .text-container, .description-container {
    flex: 0 0 100%;
    padding-right: 0;
  }

  .description-container {
    margin-top: 40px;
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