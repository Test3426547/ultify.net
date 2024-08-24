<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <h2 class="section-heading text-primary fw-bold mb-5">Our latest work</h2>
      <div class="slider-container">
        <button @click="prevSlide" class="slider-button prev">&lt;</button>
        <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(image, index) in images" :key="index" class="slide">
            <div class="card custom-black custom-rounded shadow-lg custom-size"></div>
            <div class="image-wrapper custom-size custom-rounded">
              <img :src="image" :alt="`Work ${index + 1}`" class="custom-image" />
            </div>
          </div>
        </div>
        <button @click="nextSlide" class="slider-button next">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = [
  '/index-01.webp',
  '/index-02.webp',
  '/7.webp',
  '/8.webp',
  '/9.webp',
  '/10.webp',
  '/11.webp',
  '/about-us-01.webp'
];

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};
</script>

<style scoped>
.service-cards-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.container-fluid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-heading {
  font-size: 3rem;
  text-align: left;
  align-self: flex-start;
}

.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  position: relative;
}

.custom-black {
  background-color: #2B2A2A;
}

.custom-rounded {
  border-radius: 30px;
  overflow: hidden;
}

.custom-size {
  width: calc(100% - 100px);
  height: 0;
  padding-bottom: calc(56.25% + 100px);
  margin: 0 auto;
}

.image-wrapper {
  position: absolute;
  top: -30px;
  left: 50px;
  right: 50px;
}

.custom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
}

.slider-button.prev {
  left: 10px;
}

.slider-button.next {
  right: 10px;
}

@media (max-width: 991.98px) {
  .service-cards-section {
    min-height: 100vh;
  }
  
  .custom-size,
  .image-wrapper {
    width: calc(100% - 40px);
    padding-bottom: 100%;
    margin: 0 20px;
  }

  .image-wrapper {
    left: 20px;
    right: 20px;
    top: -10px;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    min-height: 100vh;
  }

  .section-heading {
    font-size: 2.5rem;
  }
}
</style>