<template>
  <div class="service-cards-section position-relative">
    <div class="container">
      <h2 class="main-heading text-primary text-center mb-2">ULTIFY is a leading digital agency because;</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
        <div class="col d-flex" v-for="(card, index) in cards" :key="index">
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
    
    <section class="seo-section">
      <div class="container">
        <div class="row justify-content-between align-items-start">
          <div class="col-lg-5 d-flex flex-column justify-content-start align-items-start buttons-container">
            <button class="seo-button">SEO</button>
            <button class="seo-button">FREE REPORT</button>
            <button class="seo-button live-chat">LIVE CHAT</button>
          </div>
          <div class="col-lg-6 d-flex flex-column justify-content-start consultation-container">
            <h2 class="wave-heading">So you want to ride the wave?!</h2>
            <div class="consultation-content">
              <p>
                View our many resources prior to your consultation. If you are ready, consult now!
              </p>
              <hr class="consultation-line" />
              <button class="consultation-button">FREE CONSULTATION</button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  padding: 115px 0 50px;
  background-color: var(--bs-white);
  overflow: hidden;
}

.main-heading {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin-top: 0;
  margin-bottom: 70px; /* This ensures 70px space between heading and cards */
}

.row.mb-5 {
  margin-bottom: 0 !important;
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

.seo-section {
  padding: 50px 0;
  background-color: var(--bs-white);
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  --bs-gutter-x: 30px;
}

.buttons-container {
  gap: 20px;
  margin-left: 0;
  padding-left: 50px;
}

.seo-button {
  background-color: var(--bs-primary);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 250px;
  margin-bottom: 20px;
}

.seo-button:hover {
  transform: translateY(-5px);
}

.consultation-container {
  text-align: left;
  margin-right: -50px;
}

.wave-heading {
  font-size: 2.5em;
  color: var(--bs-primary);
  margin-bottom: 20px;
  font-weight: bold;
  white-space: nowrap;
  margin-top: 0;
}

.consultation-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.consultation-container p {
  font-size: 1.2em;
  margin-bottom: 30px;
  font-weight: 600;
  color: #6c757d;
}

.consultation-line {
  border: none;
  height: 2px;
  background-color: var(--bs-primary);
  opacity: 1;
  margin: 30px 0;
  width: 100%;
}

.consultation-button {
  background-color: var(--bs-primary);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
}

.consultation-button:hover {
  transform: translateY(-5px);
}

@media (max-width: 991.98px) {
  .service-cards-section {
    padding: 80px 0 30px;
  }

  .seo-section {
    padding: 40px 0;
  }

  .main-heading {
    font-size: 2.5rem;
  }

  .row {
    --bs-gutter-x: 20px;
  }

  .buttons-container,
  .consultation-container {
    align-items: center;
    text-align: center;
    margin-left: 0;
    padding-left: 0;
  }

  .consultation-container hr {
    width: 100%;
  }

  .consultation-button {
    align-self: center;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    padding: 60px 0 20px;
  }

  .seo-section {
    padding: 30px 0;
  }

  .main-heading {
    font-size: 2rem;
  }

  .wave-heading {
    font-size: 2em;
  }

  .consultation-container p {
    font-size: 1em;
  }
}
</style>