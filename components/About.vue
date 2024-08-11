<template>
  <section class="about-us">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="text-container">
          <h2>
            Embrace the <span class="highlight">Digital Wave</span>;<br />
            Ride the tide or get left behind!
          </h2>
        </div>
        <div class="image-container">
          <img src="/home-04.webp" alt="Cyclist on a wave" />
        </div>
        <div class="description-container">
          <h3>ABOUT US</h3>
          <p>
            Capitalise from the technological shift of the business world.
            ULTIFY Solutions & Marketing is a team of professionals that are dedicated
            and have rigorously understood the algorithms of social media and online
            marketing.
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bs-white);
  padding: 30px 0; /* Adjusted to allow for space above the image */
  overflow: hidden;
}

.container-fluid {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  position: relative;
  width: 100%;
}

.text-container {
  position: absolute;
  top: 50px; /* Adjust to place the text on top of the image */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
}

.text-container h2 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  color: white;
  margin: 0;
}

.highlight {
  color: var(--bs-primary);
}

.image-container {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  margin-bottom: -100px; /* Overlap the SEO section */
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.description-container {
  background-color: white;
  padding: 30px;
  z-index: 3;
  text-align: left;
  margin-top: 50px;
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

@media (max-width: 1200px) {
  .text-container h2 {
    font-size: 3rem;
  }

  .description-container h3 {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {
  .text-container h2 {
    font-size: 2.5rem;
  }

  .image-container img {
    object-fit: contain; /* Make sure the image is fully visible */
  }

  .description-container {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .text-container h2 {
    font-size: 2rem;
  }

  .description-container h3 {
    font-size: 1.75rem;
  }
}
</style>