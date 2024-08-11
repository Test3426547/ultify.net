<template>
  <section class="consultation bg-light">
    <div class="container">
      <div class="row align-items-center">
        <!-- Form Section -->
        <div class="col-lg-6">
          <div class="form-container bg-white rounded-lg shadow-lg">
            <h2 class="text-center">Book A Free Consultation Now</h2>
            <form class="p-4" id="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <input class="form-control rounded-pill" id="businessName" v-model="form.businessName" placeholder="URL/Business Name (if applicable)" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control rounded-pill" id="name" v-model="form.name" placeholder="Name" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control rounded-pill" id="email" v-model="form.email" placeholder="Email" type="email" />
              </div>
              <div class="form-group">
                <input class="form-control rounded-pill" id="phone" v-model="form.phone" placeholder="Phone" type="tel" />
              </div>
              <button type="submit" class="btn btn-primary btn-block rounded-pill py-3">
                LEAD WITHOUT A SWEAT
              </button>
            </form>
            <p class="disclaimer text-dark">
              You are booking a free consultation with no maximum time (TnC's apply). We will call you on the given number on our first available time-slot.
            </p>
          </div>
        </div>

        <!-- Information Section -->
        <div class="col-lg-6">
          <div class="info-container bg-primary text-white rounded-lg p-5">
            <h3>We protect your intellectual property.</h3>
            <p>Our agency will provide NDA's to protect your intellectual property and confidential information.</p>

            <h3>No maximum time</h3>
            <p>We provide in-depth consultations with no maximum time to ensure you get the information you need.</p>

            <h3>Certified Consultants</h3>
            <p>Our consultations are managed by real business consultants who have passed our extensive certification checklist.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  businessName: '',
  name: '',
  email: '',
  phone: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
  // Implement your form submission logic here
};
</script>

<style scoped>
.consultation {
  padding: 100px 0;
}

.form-container {
  padding: 40px 50px;
  border-radius: 30px;
}

.info-container {
  border-radius: 30px;
}

h2 {
  margin-bottom: 30px;
  color: var(--bs-dark);
}

.form-group {
  margin-bottom: 25px;
}

.form-control {
  width: 100%;
  padding: 15px 20px;
  border: none;
  background-color: #f5f5f5;
}

.btn-block {
  display: block;
  width: 100%;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
}

.disclaimer {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

/* Responsive styling */
@media (max-width: 991px) {
  .container .row {
    flex-direction: column-reverse;
  }

  .form-container, .info-container {
    margin-bottom: 35px;
  }
}
</style>