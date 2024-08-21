<template>
  <div class="service-cards-section position-relative bg-light">
    <div class="container-fluid h-100 d-flex flex-column justify-content-center">
      <h2 class="section-heading text-primary fw-bold mb-5">Our latest work</h2>
      <div class="carousel-wrapper position-relative">
        <button class="carousel-control prev" @click="prevSlide" aria-label="Previous slide">
          <i class="bi bi-chevron-left"></i>
        </button>
        <div class="carousel-container overflow-hidden">
          <div class="carousel-slide" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(pair, index) in cardPairs" :key="index" class="row w-100 justify-content-between">
              <div v-for="card in pair" :key="card.id" class="col-12 col-lg-5 mb-4 mb-lg-0 position-relative">
                <div class="card custom-black custom-rounded shadow-lg custom-size"></div>
                <div class="image-wrapper custom-size custom-rounded">
                  <img :src="card.image" :alt="card.alt" class="custom-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control next" @click="nextSlide" aria-label="Next slide">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cards = [
  { id: 1, image: '/index-01.webp', alt: 'Work 1' },
  { id: 2, image: '/index-02.webp', alt: 'Work 2' },
  { id: 3, image: '/index-03.webp', alt: 'Work 3' },
  { id: 4, image: '/index-04.webp', alt: 'Work 4' },
  { id: 5, image: '/index-05.webp', alt: 'Work 5' },
  { id: 6, image: '/index-06.webp', alt: 'Work 6' },
  { id: 7, image: '/index-07.webp', alt: 'Work 7' },
  { id: 8, image: '/index-08.webp', alt: 'Work 8' },
];

const cardPairs = computed(() => {
  const pairs = [];
  for (let i = 0; i < cards.length; i += 2) {
    pairs.push(cards.slice(i, i + 2));
  }
  return pairs;
});

const currentSlide = ref(0);
const totalSlides = computed(() => cardPairs.value.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
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

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
}

.carousel-slide {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide .row {
  flex-shrink: 0;
  width: 100%;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  z-index: 10;
}

.carousel-control.prev {
  left: 0;
}

.carousel-control.next {
  right: 0;
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