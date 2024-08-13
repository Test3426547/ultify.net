<template>
  <section class="service-and-seo-section">
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
    <div class="seo-section">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-5 d-flex flex-column justify-content-center align-items-center buttons-container">
            <button class="seo-button">SEO</button>
            <button class="seo-button">FREE REPORT</button>
            <button class="seo-button live-chat">LIVE CHAT</button>
          </div>
          <div class="col-lg-5 d-flex flex-column justify-content-center consultation-container">
            <h2 class="wave-heading">So you want to ride the wave?!</h2>
            <div class="consultation-content">
              <p>
                View our many resources prior to your consultation. If you are
                ready, consult now!
              </p>
              <hr class="consultation-line" />
              <button class="consultation-button">FREE CONSULTATION</button>
            </div>
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

.service-and-seo-section {
  background-color: var(--white-color);
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
  padding-top: var(--spacing-large);
  margin-bottom: var(--spacing-large);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 100px;
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

.seo-section {
  padding: 0 0 70px 0;
  margin-top: -75px;
  position: relative;
  z-index: 1;
}

.container-fluid {
  max-width: 1400px;
  padding: 0 20px 50px 20px;
}

.row {
  gap: 200px;
}

.buttons-container {
  gap: 40px;
  margin-left: -100px;
}

.seo-button {
  background-color: var(--primary-color);
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
}

.seo-button:hover {
  transform: translateY(-5px);
}

.consultation-container {
  text-align: center;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}

.wave-heading {
  font-size: 2.5em;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: bold;
  white-space: nowrap;
  margin-top: 0;
}

.consultation-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 20px;
}

.consultation-container p {
  font-size: 1.2em;
  margin-bottom: 30px;
  font-weight: 600;
}

.consultation-line {
  border: none;
  height: 2px;
  background-color: var(--primary-color);
  opacity: 1;
  margin: 30px 0;
  width: 100%;
}

.consultation-button {
  background-color: var(--primary-color);
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-self: center;
  margin-top: 30px;
}

.consultation-button:hover {
  transform: translateY(-5px);
}

@media (max-width: 991.98px) {
  .main-heading {
    font-size: 2.5rem;
  }
  :root {
    --spacing-large: 80px;
  }
  .seo-section {
    margin-top: -50px;
    padding-bottom: 65px;
  }
  .row {
    gap: 60px;
  }
  .buttons-container,
  .consultation-container {
    align-items: center;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .consultation-container hr {
    width: 100%;
  }
  .consultation-button {
    align-self: center;
  }
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 2rem;
  }
  :root {
    --spacing-large: 60px;
  }
  .seo-section {
    margin-top: 0;
    padding: 25px 0 125px;
  }
  .wave-heading {
    font-size: 2em;
  }
  .consultation-container p {
    font-size: 1em;
  }
}
</style>