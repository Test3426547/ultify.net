<template>
  <section class="bg-light py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Get in touch.</h2>
      <div class="flex flex-col lg:flex-row justify-between">
        <!-- Left side - Category buttons -->
        <div class="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div class="space-y-4">
            <button 
              v-for="category in categories" 
              :key="category" 
              @click="selectCategory(category)"
              :class="[
                'w-full py-2 px-4 rounded-full border-2 transition-colors duration-300',
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Right side - Contact form -->
        <div class="w-full lg:w-1/2">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <input type="text" id="name" v-model="form.name" placeholder="Name" class="w-full px-4 py-2 rounded-full border-2 border-primary bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
            </div>
            <div>
              <input type="email" id="email" v-model="form.email" placeholder="Email" class="w-full px-4 py-2 rounded-full border-2 border-primary bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
            </div>
            <div>
              <input type="text" id="website" v-model="form.website" placeholder="Enter your company website (if applicable)" class="w-full px-4 py-2 rounded-full border-2 border-primary bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
            </div>
            <div>
              <textarea id="message" v-model="form.message" placeholder="Message" rows="4" class="w-full px-4 py-2 rounded-3xl border-2 border-primary bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <div>
              <button type="submit" class="w-full py-2 px-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                Hear Back From Us Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const categories = [
  'Website',
  'Social Media',
  'SEO',
  'Paid Media',
  'Content Creation',
  'Print Advertising',
  'Internship',
  'Sponsorship'
];

const selectedCategory = ref('');

const form = ref({
  name: '',
  email: '',
  website: '',
  message: ''
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value, 'Selected category:', selectedCategory.value);
};
</script>

<style scoped>
/* Add any additional styles here */
</style>