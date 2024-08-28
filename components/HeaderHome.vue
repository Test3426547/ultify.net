<template>
  <header class="reset relative h-screen overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1/2 bg-white"></div>
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-primary"></div>
    <div class="container-fluid h-full p-0">
      <div class="flex flex-col lg:flex-row h-full">
        <div class="lg:w-7/12 flex flex-col py-5 relative">
          <div class="absolute top-1/2 -mt-52 left-12 right-0 z-10 text-center">
            <h1 class="text-5xl font-bold text-primary mb-4 leading-tight">
              ULTIFY capitalizes on digital<br>resources to elevate your brand.
            </h1>
            <p class="text-lg text-primary mt-5">
              Your Solutions Start With Ultify.
            </p>
          </div>
          <div class="absolute top-1/2 mt-2 left-12 right-0 z-10 text-center">
            <h2 class="text-5xl font-bold text-white mb-4 leading-tight">
              Start now and maximise your<br>digital reach!
            </h2>
            <p class="text-lg text-white mb-4">
              Explore our comprehensive services
            </p>
            <div class="flex flex-col -mt-5">
              <div class="flex flex-wrap gap-2 max-w-3xl justify-center">
                <NuxtLink v-for="service in services.slice(0, 3)" :key="service.path"
                  :to="service.path"
                  class="btn border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-xs py-2 px-4 rounded-full whitespace-nowrap w-32">
                  {{ service.name }}
                </NuxtLink>
              </div>
              <div class="flex flex-wrap gap-2 mt-2 max-w-3xl justify-center">
                <NuxtLink v-for="service in services.slice(3)" :key="service.path"
                  :to="service.path"
                  class="btn border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-xs py-2 px-4 rounded-full whitespace-nowrap w-32">
                  {{ service.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-5/12 flex justify-center items-center relative">
          <div class="consultation-form bg-light rounded-3xl shadow-lg -ml-12 w-96 max-w-lg flex flex-col h-96 max-h-96 mt-12 -mb-12 relative z-10">
            <div class="flex-grow flex flex-col overflow-y-auto p-4">
              <h2 class="text-center text-dark mb-4">Book A Free Consultation Now</h2>
              <div class="h-12"></div>
              <div class="px-6">
                <form @submit.prevent="handleSubmit" class="flex-grow flex flex-col">
                  <div class="mb-3 flex-grow flex items-center">
                    <input class="form-input rounded-full py-3 px-6 w-full bg-white" v-model="form.businessName" placeholder="URL/Business Name (if applicable)" type="text" />
                  </div>
                  <div class="mb-3 flex-grow flex items-center">
                    <input class="form-input rounded-full py-3 px-6 w-full bg-white" v-model="form.name" placeholder="Name" type="text" />
                  </div>
                  <div class="mb-3 flex-grow flex items-center">
                    <input class="form-input rounded-full py-3 px-6 w-full bg-white" v-model="form.email" placeholder="Email" type="email" />
                  </div>
                  <div class="mb-3 flex-grow flex items-center">
                    <input class="form-input rounded-full py-3 px-6 w-full bg-white" v-model="form.phone" placeholder="Phone" type="tel" />
                  </div>
                  <button type="submit" class="btn btn-primary rounded-full py-3 px-6 text-base mt-auto w-full">
                    LEAD WITHOUT A SWEAT
                  </button>
                </form>
              </div>
              <p class="text-dark mt-3 text-center text-xs">
                You are booking a free consultation with no maximum time (TnC's apply). We will call you on the given number on our first available time-slot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce z-10" width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 35L36.5 18.5L33.25 15.25L23.5 25V0H16.5V25L6.75 15.25L3.5 18.5L20 35Z" fill="white"/>
    </svg>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const services = [
  { name: 'Paid Media', path: '/paid-media' },
  { name: 'SEO', path: '/seo' },
  { name: 'Content Creation', path: '/content-creation' },
  { name: 'Website', path: '/website' },
  { name: 'Social Media', path: '/social-media' },
  { name: 'Print Advertising', path: '/print-media' }
];

const form = ref({
  businessName: '',
  name: '',
  email: '',
  phone: ''
});

const handleSubmit = () => {
  // Implement form submission logic here
  console.log('Form submitted:', form.value);
};
</script>

<style scoped>
.reset {
  all: initial;
  @apply text-base;
  @apply font-normal;
  @apply leading-normal;
  @apply text-gray-900;
  @apply bg-white;
}

.reset * {
  all: initial;
  @apply text-base;
  @apply font-normal;
  @apply leading-normal;
  @apply text-gray-900;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-20px);
  }
  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}
</style>