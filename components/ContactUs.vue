<template>
  <section class="consultation">
    <div class="background-image"></div>
    <div class="container-fluid">
      <div class="row justify-content-end">
        <div class="col-lg-5 form-column">
          <div class="form-container">
            <h2>Book A Free<br>Consultation Now</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" id="url" v-model="form.url" placeholder="URL/Business Name (if applicable)">
              </div>
              <div class="form-group">
                <input type="text" id="name" v-model="form.name" placeholder="Name">
              </div>
              <div class="form-group">
                <input type="email" id="email" v-model="form.email" placeholder="Email">
              </div>
              <div class="form-group">
                <input type="tel" id="phone" v-model="form.phone" placeholder="Phone">
              </div>
              <button type="submit">LEAD WITHOUT A SWEAT</button>
            </form>
            <p class="disclaimer">
              You are booking a free consultation with no maximum time (TnC's apply).
              We will call you on the given number on our first available time-slot.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  url: '',
  name: '',
  email: '',
  phone: ''
});

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted', form);
};
</script>

<style scoped>
.consultation {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #45c5ff; /* Fallback color */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/home-05.png'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8; /* Adjust this value to make the image more or less visible */
}

.container-fluid {
  position: relative;
  z-index: 1;
}

.form-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
}

.form-container h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  line-height: 1.2;
}

.form-group {
  margin-bottom: 15px;
}

.form-container input {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  font-size: 16px;
  background-color: #ffffff;
}

.form-container button {
  width: 100%;
  padding: 12px;
  background-color: #45c5ff; /* Adjust to match your exact brand color */
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: #3ab1e8; /* Slightly darker shade for hover effect */
}

.disclaimer {
  margin-top: 15px;
  font-size: 12px;
  color: #666;
  text-align: center;
  line-height: 1.4;
}

@media (max-width: 991px) {
  .consultation {
    padding: 60px 0;
  }

  .form-column {
    padding: 0 15px;
  }

  .form-container {
    max-width: 100%;
  }
}
</style>