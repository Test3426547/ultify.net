<template>
    <div class="relative z-10 w-full max-w-[620px] bg-gray-100 rounded-3xl flex flex-col h-full shadow-lg -ml-14 -mr-4 font-sans">
      <div class="flex-grow flex flex-col justify-between p-8">
        <h2 class="text-4xl font-semibold text-center mb-6 text-gray-800 leading-tight">
          Book A Free Consultation<br>Now
        </h2>
        <div class="px-4">
          <form @submit.prevent="handleSubmit">
            <div class="mb-6">
              <input
                v-model="form.businessName"
                placeholder="URL/Business Name (if applicable)"
                type="text"
                class="w-full py-3 px-6 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded-full transition ease-in-out focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div class="mb-6">
              <input
                v-model="form.name"
                placeholder="Name"
                type="text"
                class="w-full py-3 px-6 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded-full transition ease-in-out focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div class="mb-6">
              <input
                v-model="form.email"
                placeholder="Email"
                type="email"
                class="w-full py-3 px-6 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded-full transition ease-in-out focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div class="mb-6">
              <input
                v-model="form.phone"
                placeholder="Phone"
                type="tel"
                class="w-full py-3 px-6 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded-full transition ease-in-out focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <button type="submit" class="w-full py-3 px-6 text-base font-bold text-white bg-blue-400 hover:bg-blue-500 rounded-full cursor-pointer transition duration-300 ease-in-out my-5">
              LEAD WITHOUT A SWEAT
            </button>
          </form>
        </div>
        <p class="mt-4 text-sm text-gray-600 text-center">
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