<template>
  <section class="about-us">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="text-container">
          <h2>Embrace the <span class="highlight">Digital Wave</span><span class="semicolon">;</span><br>Ride the tide or get left behind!</h2>
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
  flex-wrap: wrap;
}

.text-container {
  flex: 0 0 60%; /* Keep more space for the text and image */
  position: relative;
}

.text-container h2 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  transform: translateX(-10px); /* Slight adjustment for better alignment */
}

.highlight {
  color: var(--bs-primary);
}

.semicolon {
  color: inherit; /* Matches the surrounding text */
}

.image-container {
  position: relative;
  width: 100%;
  padding-top: 70%; /* Increase aspect ratio to make the image larger */
  overflow: hidden;
  margin-top: -30px; /* Bring the image closer to the heading */
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure full visibility of the image without cropping */
}

.description-container {
  flex: 0 0 35%;
  padding-left: 40px;
  margin-top: -130px; /* Shift body paragraph 100px up */
  align-self: flex-end; /* Ensure it aligns with the bottom of the image */
}

.description-container h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  align-self: flex-start; /* Position the "ABOUT US" heading independently */
}

.description-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
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

  .text-container,
  .description-container {
    flex: 0 0 100%;
  }

  .description-container {
    margin-top: 40px;
    padding-left: 0;
    align-self: center; /* Center on smaller screens */
  }

  .text-container h2 {
    font-size: 2.5rem;
    transform: translateX(0);
  }

  .image-container {
    width: 100%;
    margin-left: 0;
    padding-top: 56.25%; /* Restore the aspect ratio for smaller screens */
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