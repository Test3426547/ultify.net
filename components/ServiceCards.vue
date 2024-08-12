<template>
  <div class="service-cards-section position-relative">
    <div class="container">
      <h2 class="main-heading text-primary text-center mb-2">Embrace the Digital Wave;</h2>
      <h2 class="main-heading text-primary text-center mb-2">Ride the tide or get left behind!</h2>
      <div class="row g-4">
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
  padding: 0 0 80px; /* Removed top padding */
  background-color: var(--bs-white);
  overflow: hidden;
}

.container {
  padding-top: 50px; /* Added padding to the container instead */
}

.main-heading,
.sub-heading {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin-top: 0; /* Ensure no top margin on headings */
  margin-bottom: 1rem; /* Add some space between headings and cards */
}

.sub-heading {
  font-size: 2.5rem;
  margin-bottom: 2rem; /* Add more space after the second heading */
}

/* Rest of the styles remain the same */

@media (max-width: 991.98px) {
  .container {
    padding-top: 30px; /* Adjust padding for smaller screens */
  }

  .card {
    margin-bottom: 40px;
  }
  
  .main-heading,
  .sub-heading {
    font-size: 2.5rem;
  }
  
  .sub-heading {
    font-size: 2rem;
  }
}
</style>