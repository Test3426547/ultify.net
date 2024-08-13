<template>
  <div class="service-cards-section position-relative">
    <div class="container">
      <h2 class="main-heading text-primary text-center mb-2">ULTIFY is a leading digital agency because;</h2>
      <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6 d-flex" v-for="(card, index) in cards" :key="index">
          <div class="card flex-fill">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
            <div class="card-badge">
              <span>{{ index + 1 }}</span>
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
    description: 'Our digital marketing agency will help you masterplan and put to action an effective and efficient strategy for lead generation.'
  },
  {
    title: 'Guaranteed Traffic',
    description: 'What\'s anything without the traffic? You could have all the components required to do the work, but no traffic means no sales.'
  },
  {
    title: 'Guaranteed Rankings',
    description: 'Our digital marketing agency specialises in climbing those seo rankings, or you don\'t pay!'
  },
  {
    title: 'Guaranteed Growth',
    description: 'Our digital marketing agencies plan is to take care of you and not just for a short time.'
  }
]
</script>

<style scoped>
.service-cards-section {
  padding: 115px 0 50px; /* Changed from 50px 0 to 115px 0 50px */
  background-color: var(--bs-white);
  overflow: hidden;
}

/* The rest of the styles remain unchanged */

.main-heading {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin-top: 0;
  margin-bottom: 1rem;
}

.card {
  background-color: var(--bs-primary);
  border-radius: 25px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
}

.card:hover {
  transform: translateY(-10px);
}

.card-body {
  padding: 2rem;
  text-align: left;
  flex-grow: 1;
}

.card-title {
  color: var(--bs-white);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-text {
  color: var(--bs-white);
  font-size: 1rem;
}

.card-badge {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bs-warning);
  color: var(--bs-white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 991.98px) {
  .main-heading {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 2rem;
  }
}
</style>