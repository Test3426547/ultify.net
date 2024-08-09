<template>
    <section class="contact-us">
      <div class="container">
        <div class="image-container">
          <img src="/curved2.jpg" alt="Image Description">
        </div>
        <div class="form-container">
          <h2>Book a Free Consultation Now</h2>
          <form @submit.prevent="submitForm">
            <label for="url">URL/Business Name (if applicable)</label>
            <input type="text" id="url" v-model="form.url" placeholder="URL/Business Name (if applicable)">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Name">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="Email">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="form.phone" placeholder="Phone">
            <button type="submit">LEAD WITHOUT A SWEAT</button>
          </form>
          <p class="disclaimer">
            You are booking a free consultation with no maximum time (TnC's apply).
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
  /* Basic reset and styling */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .contact-us {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .image-container img {
    max-width: 100%;
    height: auto;
  }
  
  .form-container {
    background-color: #e0e0e0;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-container h2 {
    margin-bottom: 20px;
  }
  
  .form-container label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-container button {
    background-color: #48cae4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .form-container button:hover {
    background-color: #0096c7;
  }
  
  .form-container .disclaimer {
    margin-top: 15px;
    font-size: 12px;
    color: #333;
  }
  
  /* Responsive styling */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  
    .form-container {
      margin-top: 20px;
    }
  }
  </style>