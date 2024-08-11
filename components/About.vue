<template>
  <section class="about-us">
    <div class="container-fluid">
      <header class="text-center mb-5">
        <h1>Embrace the <span class="highlight">Digital Wave</span><span class="semicolon">;</span><br>Ride the tide or get left behind!</h1>
      </header>
      <div class="content-wrapper">
        <div class="image-container">
          <img src="/home-04.webp" alt="Cyclist riding a wave, representing digital marketing momentum">
        </div>
        <aside class="description-container">
          <h2>ABOUT US</h2>
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
        </aside>
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
  background-color: var(--bs-white);
  padding: 80px 0;
}

.container-fluid {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.2;
}

.highlight {
  color: var(--bs-primary);
}

.semicolon {
  color: inherit;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.image-container {
  flex: 0 0 60%;
  position: relative;
  padding-top: 36%; /* Adjust this value to control the image height */
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.description-container {
  flex: 0 0 30%;
  margin-top: 50px; /* Shift down by 50px */
  margin-left: -50px; /* Shift left by 50px */
}

.description-container h2 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.description-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 1200px) {
  h1 {
    font-size: 2.5rem;
  }

  .description-container h2 {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }

  .image-container,
  .description-container {
    flex: 0 0 100%;
  }

  .description-container {
    margin-top: 40px;
    margin-left: 0;
  }

  .image-container {
    padding-top: 56.25%; /* 16:9 aspect ratio for smaller screens */
  }
}

@media (max-width: 768px) {
  .about-us {
    padding: 60px 0;
  }

  h1 {
    font-size: 2rem;
  }

  .description-container h2 {
    font-size: 1.75rem;
  }
}
</style>