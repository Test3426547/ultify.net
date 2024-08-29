<template>
    <div class="contact-form bg-light rounded-5 shadow-lg">
      <div class="contact-form-inner p-4">
        <h2 class="text-center text-dark mb-4" style="font-weight: 600;">Book A Free Consultation Now</h2>
        <div class="spacer"></div>
        <div class="form-container">
          <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
              <input
                class="form-control"
                v-model="form.businessName"
                placeholder="URL/Business Name (if applicable)"
                type="text"
              />
            </div>
            <div class="form-group mb-3">
              <input
                class="form-control"
                v-model="form.name"
                placeholder="Name"
                type="text"
              />
            </div>
            <div class="form-group mb-3">
              <input
                class="form-control"
                v-model="form.email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="form-group mb-3">
              <input
                class="form-control"
                v-model="form.phone"
                placeholder="Phone"
                type="tel"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg">
              LEAD WITHOUT A SWEAT
            </button>
          </form>
        </div>
        <p class="form-text text-dark mt-3 text-center">
          You are booking a free consultation with no maximum time (TnC's apply).
          We will call you on the given number on our first available time-slot.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    businessName: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const emit = defineEmits(['submit']);
  
  const handleSubmit = () => {
    emit('submit', form.value);
  };
  </script>
  
  <style scoped>
  .contact-form {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 550px;
    background-color: var(--bs-light);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 650px;
  }
  
  .contact-form-inner {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  
  .form-container {
    padding: 0 25px;
  }
  
  .spacer {
    height: 20px;
  }
  
  form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  
  .form-control {
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    border: none;
    background-color: var(--bs-white);
    width: 100%;
  }
  
  .btn-block {
    display: block;
    width: 100%;
    border-radius: 50px;
    padding: 0.85rem 1.5rem;
    margin-top: auto;
    font-size: 1rem;
  }
  
  .form-text {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
  </style>