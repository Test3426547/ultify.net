<template>
  <section class="service-cards-section">
    <div class="container">
      <h2 class="main-heading">ULTIFY is a leading digital agency because;</h2>
      <div class="cards-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
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
  </section>
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
:root {
  --spacing-large: 100px;
  --primary-color: var(--bs-primary);
  --white-color: var(--bs-white);
  --warning-color: var(--bs-warning);
}

.service-cards-section {
  background-color: var(--white-color);
  padding: var(--spacing-large) 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.main-heading {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: var(--spacing-large);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.card {
  background-color: var(--primary-color);
  border-radius: 25px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  position: relative;
  overflow: visible;
  flex: 1 1 calc(25% - 30px);
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-10px);
}

.card-body {
  padding: 2rem;
  flex-grow: 1;
}

.card-title {
  color: var(--white-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-text {
  color: var(--white-color);
  font-size: 1rem;
}

.card-badge {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--warning-color);
  color: var(--white-color);
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
  :root {
    --spacing-large: 80px;
  }
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 2rem;
  }
  :root {
    --spacing-large: 60px;
  }
}
</style>