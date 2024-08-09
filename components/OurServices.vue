<template>
  <section class="our-services py-5">
    <div class="container">
      <div class="header-container mb-5">
        <h2 class="text-white mb-2">Our Services</h2>
        <p class="text-white">Explore our comprehensive range of expert services designed to meet your diverse needs.</p>
      </div>
      <div class="row g-4">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :imgSrc="service.imgSrc"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';

const services = [
  { title: 'Website', imgSrc: '/website.svg' },
  { title: 'Social Media', imgSrc: '/social-media.svg' },
  { title: 'Content Creation', imgSrc: '/content-creation.svg' },
  { title: 'Graphic Design & Animation', imgSrc: '/graphic-design.svg' },
  { title: 'SEO', imgSrc: '/seo.svg' },
  { title: 'SEM', imgSrc: '/sem.svg' },
];
</script>

<style scoped>
.our-services {
  background-color: var(--bs-white);
  position: relative;
  overflow: hidden;
}

.our-services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background-color: var(--bs-primary);
  z-index: 0;
}

.header-container {
  position: relative;
  z-index: 1;
  text-align: center;
}

.row {
  position: relative;
  z-index: 1;
}
</style>