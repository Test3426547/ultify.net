<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <h2 class="section-heading text-primary fw-bold mb-5">Our latest work</h2>
      <div class="slider-container position-relative">
        <div class="slider-wrapper d-flex transition-300" ref="sliderWrapper">
          <div v-for="(pair, index) in imagePairs" :key="index" class="slider-item d-flex justify-content-between w-100">
            <div v-for="(image, imageIndex) in pair" :key="imageIndex" class="card-wrapper col-12 col-lg-5 mb-4 mb-lg-0 position-relative">
              <div class="card custom-black custom-rounded shadow-lg custom-size"></div>
              <div class="image-wrapper custom-size custom-rounded">
                <img :src="image" :alt="`Work ${index * 2 + imageIndex + 1}`" class="custom-image" />
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-primary slider-control prev" @click="slide('prev')">&lt;</button>
        <button class="btn btn-primary slider-control next" @click="slide('next')">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sliderWrapper = ref(null);
const currentIndex = ref(0);

const imagePairs = [
  ['/index-01.webp', '/index-02.webp'],
  ['/7.webp', '/8.webp'],
  ['/9.webp', '/10.webp'],
  ['/11.webp', '/about-us-01.webp']
];

const slide = (direction) => {
  if (direction === 'next') {
    currentIndex.value = (currentIndex.value + 1) % imagePairs.length;
  } else {
    currentIndex.value = (currentIndex.value - 1 + imagePairs.length) % imagePairs.length;
  }
  updateSliderPosition();
};

const updateSliderPosition = () => {
  if (sliderWrapper.value) {
    sliderWrapper.value.style.transform = `translateX(-${currentIndex.value * 100}%)`;
  }
};

onMounted(() => {
  updateSliderPosition();
});
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
  overflow: hidden;
}

.slider-wrapper {
  width: 400%;
  transition: transform 0.3s ease;
}

.slider-item {
  width: 25%;
  flex-shrink: 0;
}

.custom-black {
  background-color: #2B2A2A;
}

.custom-rounded {
  border-radius: 30px;
  overflow: hidden;
}

.custom-size {
  width: calc(100% + 100px);
  height: 0;
  padding-bottom: calc(56.25% + 100px);
  margin-left: -50px;
  margin-right: -50px;
}

.image-wrapper {
  position: absolute;
  top: -30px;
  left: -30px;
}

.custom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

@media (max-width: 991.98px) {
  .service-cards-section {
    min-height: 100vh;
  }
  
  .custom-size,
  .image-wrapper {
    width: 100%;
    padding-bottom: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .image-wrapper {
    left: 0;
    top: -10px;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    min-height: 100vh;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .section-heading {
    font-size: 2.5rem;
  }
}
</style>