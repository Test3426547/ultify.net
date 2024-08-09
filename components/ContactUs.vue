<template>
  <section class="consultation">
    <div class="container">
      <div class="image-container">
        <img src="/home-05.png" alt="Digital Marketing Illustration">
      </div>
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
          You are booking a free consultation with no maximum time (TnC's apply).<br>
          We will call you on the given number on our first available time-slot.
        </p>
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
  background-color: var(--bs-primary);
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.image-container {
  flex: 1;
  max-width: 50%;
  margin-right: 40px;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
}

.form-container {
  flex: 0 0 45%;
  background-color: var(--bs-light);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--bs-dark);
  text-align: center;
  line-height: 1.2;
}

.form-group {
  margin-bottom: 20px;
}

.form-container input {
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  background-color: var(--bs-white);
}

.form-container button {
  width: 100%;
  padding: 15px;
  background-color: var(--bs-primary);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: var(--bs-primary-dark);
}

.disclaimer {
  margin-top: 20px;
  font-size: 14px;
  color: var(--bs-dark);
  text-align: center;
  line-height: 1.4;
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
  }

  .image-container {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }

  .form-container {
    width: 100%;
    max-width: 600px;
  }
}
</style>