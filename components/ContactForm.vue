<template>
    <div class="contact-form-wrapper">
      <div class="contact-form">
        <div class="contact-form-inner">
          <h2 class="title">
            Book A Free Consultation<br>Now
          </h2>
          <div class="form-container">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <input
                  v-model="form.businessName"
                  placeholder="URL/Business Name (if applicable)"
                  type="text"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="form.name"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="form.email"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="form.phone"
                  placeholder="Phone"
                  type="tel"
                />
              </div>
              <button type="submit" class="submit-button">
                LEAD WITHOUT A SWEAT
              </button>
            </form>
          </div>
          <p class="form-text">
            You are booking a free consultation with no maximum time (TnC's apply).
            We will call you on the given number on our first available time-slot.
          </p>
        </div>
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
  .contact-form-wrapper {
    /* This will isolate the component from global styles */
    all: initial;
  }
  
  .contact-form {
    @apply relative z-10 w-full max-w-[620px] bg-gray-100 rounded-3xl flex flex-col shadow-lg -ml-14 -mr-4 font-sans;
    height: calc(100% + 70px); /* Increased height by 70px */
  }
  
  .contact-form-inner {
    @apply flex flex-col justify-between p-8;
    height: 100%; /* Take full height of parent */
  }
  
  .title {
    @apply text-4xl font-semibold text-center mb-8 text-gray-800 leading-tight;
  }
  
  .form-container {
    @apply flex-grow flex flex-col justify-center; /* Center form elements vertically */
  }
  
  .form-group {
    @apply mb-2.5; /* 10px spacing between fields */
  }
  
  .form-group input {
    @apply w-full py-3 px-6 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded-full transition ease-in-out focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200;
    max-width: calc(100% - 20px); /* Reduce width by 20px */
    margin: 0 auto; /* Center the input fields */
  }
  
  .submit-button {
    @apply w-full py-3 px-6 text-base font-bold text-white bg-blue-400 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300 ease-in-out mt-2.5 mb-8;
    max-width: calc(100% - 20px); /* Reduce width by 20px */
    margin: 10px auto 0; /* Center the button and add top margin */
  }
  
  .form-text {
    @apply text-sm text-gray-600 text-center;
  }
  </style>