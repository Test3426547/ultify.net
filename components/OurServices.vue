<template>
  <section class="our-services">
    <div class="bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ms-auto me-auto text-center">
            <h3 class="services-heading">Our Services</h3>
            <p>Explore our comprehensive range of expert services designed to meet your diverse needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
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

<script>
import ServiceCard from './ServiceCard.vue';

export default {
  name: 'OurServices',
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: [
        // ... (your services data remains unchanged)
      ]
    };
  }
};
</script>

<style scoped>
.our-services {
  background-color: var(--bs-white);
}

.bg-primary {
  background-color: var(--bs-primary) !important;
}

.text-white {
  color: var(--bs-white) !important;
}

.services-heading {
  color: var(--bs-white);
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.row {
  margin-left: -20px;
  margin-right: -20px;
}

.col-lg-4 {
  padding-left: 20px;
  padding-right: 20px;
}
</style>