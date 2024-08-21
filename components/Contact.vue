<template>
  <section class="consultation">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="form-container">
            <h2>Book A Free Consultation Now</h2>
            <form id="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <input class="form-control" id="businessName" v-model="form.businessName" placeholder="URL/Business Name (if applicable)" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control" id="name" v-model="form.name" placeholder="Name" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control" id="email" v-model="form.email" placeholder="Email" type="email" />
              </div>
              <div class="form-group">
                <input class="form-control" id="phone" v-model="form.phone" placeholder="Phone" type="tel" />
              </div>
              <button type="submit" class="btn btn-custom btn-block">
                LEAD WITHOUT A SWEAT
              </button>
            </form>
            <p class="disclaimer">
              You are booking a free consultation with no maximum time (TnC's apply). We will call you on the given number on our first available time-slot.
            </p>
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
  padding: 0;
}

.form-container {
  background-color: #37B5FF;
  padding: 40px 30px;
  border-radius: 30px;
  max-width: 500px;
  margin: 0 auto;
}

h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: white;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 15px 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  font-size: 16px;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.btn-custom {
  background-color: #000000;
  color: #ffffff;
  border-radius: 50px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  border: none;
}

.btn-custom:hover {
  background-color: #333333;
}

.disclaimer {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: white;
}

/* Responsive styling */
@media (max-width: 991px) {
  .form-container {
    margin-bottom: 35px;
  }
}

@media (max-width: 767px) {
  .form-container {
    padding: 30px 20px;
  }
}
</style>