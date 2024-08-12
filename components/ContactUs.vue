<template>
  <section class="consultation">
    <div class="background-image"></div>
    <div class="container-fluid h-100">
      <div class="row h-100 justify-content-end align-items-center">
        <div class="col-lg-6 form-column">
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
  height: calc(100vh - 250px);
  min-height: 550px;
  display: flex;
  align-items: center;
  background-color: #45c5ff;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/running-man.svg');
  background-size: 130%;
  background-position: center 25%;
  background-repeat: no-repeat;
}

.container-fluid {
  position: relative;
  z-index: 1;
}

.form-column {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
}

.form-container {
  background-color: var(--bs-light);
  padding: 55px 80px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 550px;
}

.form-container h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  line-height: 1.2;
}

.form-group {
  margin-bottom: 25px;
}

.form-container input {
  width: 100%;
  padding: 15px 25px;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  font-size: 18px;
  background-color: #ffffff;
}

.form-container button {
  width: 100%;
  padding: 15px;
  background-color: #45c5ff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: #3ab1e8;
}

.disclaimer {
  margin-top: 25px;
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.4;
}

@media (max-width: 1199px) {
  .form-column {
    padding-right: 15px;
  }

  .form-container {
    max-width: 100%;
    padding: 35px 50px;
  }
}

@media (max-width: 991px) {
  .consultation {
    height: auto;
    padding: 80px 0;
  }

  .background-image {
    background-size: cover;
  }

  .form-container {
    padding: 25px 30px;
  }

  .form-container h2 {
    font-size: 28px;
  }

  .form-container input,
  .form-container button {
    font-size: 16px;
    padding: 12px 20px;
  }
}
</style>