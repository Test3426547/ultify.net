<template>
    <div :class="$style.contactForm">
      <div :class="$style.contactFormInner">
        <h2 :class="$style.title">Book A Free Consultation Now</h2>
        <form @submit.prevent="handleSubmit">
          <div :class="$style.formGroup">
            <input
              :class="$style.formControl"
              v-model="form.businessName"
              placeholder="URL/Business Name (if applicable)"
              type="text"
            />
          </div>
          <div :class="$style.formGroup">
            <input
              :class="$style.formControl"
              v-model="form.name"
              placeholder="Name"
              type="text"
            />
          </div>
          <div :class="$style.formGroup">
            <input
              :class="$style.formControl"
              v-model="form.email"
              placeholder="Email"
              type="email"
            />
          </div>
          <div :class="$style.formGroup">
            <input
              :class="$style.formControl"
              v-model="form.phone"
              placeholder="Phone"
              type="tel"
            />
          </div>
          <button type="submit" :class="$style.submitButton">
            LEAD WITHOUT A SWEAT
          </button>
        </form>
        <p :class="$style.formText">
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
  
  <style module>
  .contactForm {
    width: 100%;
    max-width: 400px;
    background-color: #f8f9fa;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .contactFormInner {
    padding: 30px;
  }
  
  .title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
    color: #333;
  }
  
  .formGroup {
    margin-bottom: 15px;
  }
  
  .formControl {
    display: block;
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 30px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .formControl:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .submitButton {
    display: block;
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }
  
  .submitButton:hover {
    background-color: #0056b3;
  }
  
  .formText {
    margin-top: 15px;
    font-size: 12px;
    color: #6c757d;
    text-align: center;
  }
  </style>