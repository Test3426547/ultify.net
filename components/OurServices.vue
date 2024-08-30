<template>
  <section class="our-services">
    <div class="bg-primary text-white py-5 banner">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto text-center">
            <h3 class="wave-heading">Our Services</h3>
            <p class="faq-subtitle">Explore our comprehensive range of expert services designed to meet your diverse needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container service-grid">
      <div class="row g-4">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :imgSrc="service.imgSrc"
          :altText="service.altText"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import ServiceCard from './ServiceCard.vue'

const services = ref([
  {
    title: "Website",
    description: "Our website services include custom design, development, and maintenance to help you establish a strong online presence.",
    imgSrc: "/images/home-09.png",
    altText: "Website Service"
  },
  // ... other service objects ...
])

onMounted(() => {
  nextTick(() => {
    emit('loaded')
  })
})
</script>

<style scoped>
.our-services {
  background-color: var(--bs-light);
}

.banner {
  padding-block: 110px;
  margin-bottom: 100px;
}

.wave-heading {
  font-size: 3em;
  color: var(--bs-white);
}

.faq-subtitle {
  font-size: 1.2rem;
}

.service-grid {
  padding-top: 25px;
  padding-bottom: 100px; /* Increased bottom padding */
}

.row {
  --bs-gutter-x: 40px; /* Increase horizontal gap between cards */
}

@media (max-width: 991.98px) {
  .banner {
    padding-block: 50px;
  }

  .service-grid {
    padding-top: 15px;
    padding-bottom: 50px;
  }
}
</style>