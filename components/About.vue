<template>
  <section class="about-us">
    <div class="container-fluid">
      <div class="content-wrapper">
        <header class="text-container">
          <h1>Embrace the <span class="highlight">Digital Wave</span><span class="semicolon">;</span><br>Ride the tide or get left behind!</h1>
          <div class="image-container">
            <img src="/home-04.webp" alt="Cyclist riding a wave, representing digital marketing momentum">
          </div>
        </header>
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
/* Root section styling */
.about-us {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bs-white);
  padding: 80px 0;
}

/* Container styling */
.container-fluid {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Wrapper for content */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
}

/* Text and image section */
.text-container {
  flex: 0 0 60%;
  position: relative;
  top: -30px;
}

.text-container h1 {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.highlight {
  color: var(--bs-primary);
}

.semicolon {
  color: inherit;
}

/* Image container */
.image-container {
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  margin-top: -30px;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Description section */
.description-container {
  position: absolute;
  top: 25%;
  right: 0;
  width: 30%;
  padding-left: 20px;
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

/* Diagonal line under "So you want to ride the wave?!" */
.diagonal-line {
  width: 100%;
  height: 5px;
  background-color: var(--bs-primary);
  transform: rotate(-5deg);
  margin-top: 10px;
  margin-bottom: 30px;
}

/* Adjust button section */
.seo-section {
  padding-top: 20px;
}

/* Responsive design */
@media (max-width: 1200px) {
  .text-container h1 {
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

  .text-container,
  .description-container {
    flex: 0 0 100%;
  }

  .description-container {
    margin-top: 40px;
    padding-left: 0;
    align-self: center;
  }

  .text-container h1 {
    font-size: 2.5rem;
  }

  .image-container {
    width: 100%;
    margin-left: 0;
    padding-top: 56.25%;
  }
}

@media (max-width: 768px) {
  .about-us {
    padding: 60px 0;
  }

  .text-container h1 {
    font-size: 2rem;
  }

  .description-container h2 {
    font-size: 1.75rem;
  }
}
</style>