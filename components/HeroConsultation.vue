<template>
  <section class="hero-consultation bg-primary">
    <div class="container">
      <h2 class="main-heading text-white text-center mb-5">Our Consultation Guarantees</h2>
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-image">
            <img src="/consultation-01.webp" alt="Consultation Hero Image" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="info-container bg-white rounded-lg p-5">
            <div class="info-section">
              <h3 class="text-primary">We protect your intellectual property.</h3>
              <p class="text-primary">Our agency will provide NDA's to protect your intellectual property and confidential information.</p>
            </div>
            <div class="info-section">
              <h3 class="text-primary">No maximum time</h3>
              <p class="text-primary">We provide in-depth consultations with no maximum time to ensure you get the information you need.</p>
            </div>
            <div class="info-section">
              <h3 class="text-primary">Certified Consultants</h3>
              <p class="text-primary">Our consultations are managed by real business consultants who have passed our extensive certification checklist.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No setup needed for this component
</script>

<style scoped>
.hero-consultation {
  padding: 100px 0;
}

.main-heading {
  font-size: 3rem;
  font-weight: bold;
}

.hero-image {
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.info-section {
  margin-bottom: 30px;
}

.info-section:last-child {
  margin-bottom: 0;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

p {
  font-size: 1rem;
  line-height: 1.4;
}

@media (max-width: 991px) {
  .hero-image, .info-container {
    height: auto;
  }
  
  .hero-image {
    margin-bottom: 30px;
  }
}
</style>