<template>
  <div class="service-cards-section position-relative">
    <div class="container">
      <div class="row text-center align-items-stretch">
        <div class="col-lg-3 col-md-6 mb-5 d-flex" v-for="(card, index) in cards" :key="index">
          <div class="card shadow border-radius-lg p-4 flex-fill">
            <div class="card-body">
              <h5 class="text-white">{{ card.title }}</h5>
              <p class="text-white">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: 'Guaranteed Leads',
    description: 'Our digital marketing agency will help you masterplan and put into action an effective strategy for lead generation.'
  },
  {
    title: 'Guaranteed Traffic',
    description: 'Drive traffic with our comprehensive digital marketing strategies.'
  },
  {
    title: 'Guaranteed Rankings',
    description: 'Our SEO services are designed to boost your rankings, or you don\'t pay!'
  },
  {
    title: 'Guaranteed Growth',
    description: 'Our commitment is to ensure your sustained growth.'
  }
]
</script>

<style scoped>
.service-cards-section {
  padding: 50px 0;
  background-color: var(--bs-white);
}

.card {
  backdrop-filter: blur(10px);
  background-color: var(--bs-primary);
  transition: background-color 0.3s, color 0.3s;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  background-color: var(--bs-primary-dark);
  color: var(--bs-white);
}

.card-body {
  text-align: left;
}

.text-white {
  color: var(--bs-white) !important;
}
</style>