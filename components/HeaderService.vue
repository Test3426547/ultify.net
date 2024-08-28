<template>
    <header class="header position-relative vh-100 overflow-hidden">
      <div class="header__background-top"></div>
      <div class="header__background-bottom"></div>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-lg-7 d-flex flex-column py-5 position-relative">
            <div class="header__top content-shift">
              <h1 class="header__title fw-bold text-primary" v-if="headerData">
                {{ headerData.Title }}
              </h1>
              <p class="header__subtitle text-primary" v-if="headerData">
                {{ headerData.Subtitle }}
              </p>
            </div>
            <div class="header__bottom content-shift">
              <h2 class="header__subtitle-large fw-bold text-white" v-if="headerData">
                {{ headerData.Heading }}
              </h2>
              <p class="header__subtitle text-white mb-4" v-if="headerData">
                {{ headerData.Subheading }}
              </p>
              <div class="header__services">
                <div class="row g-2 justify-content-start">
                  <div class="col-md-4" v-for="service in services.slice(0, 3)" :key="service">
                    <button class="btn btn-outline-light rounded-pill w-100">
                      {{ service }}
                    </button>
                  </div>
                </div>
                <div class="row g-2 mt-2 justify-content-start">
                  <div class="col-md-4" v-for="service in services.slice(3)" :key="service">
                    <button class="btn btn-outline-light rounded-pill w-100">
                      {{ service }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-flex justify-content-center align-items-center position-relative">
            <div class="consultation-form bg-light rounded-5 shadow-lg ms-n50">
              <div class="consultation-form-inner p-4">
                <h2 class="text-center text-dark mb-4">Book A Free Consultation Now</h2>
                <div class="spacer"></div>
                <div class="form-container">
                  <form @submit.prevent="handleSubmit">
                    <div class="form-group mb-3">
                      <input class="form-control" v-model="form.businessName" placeholder="URL/Business Name (if applicable)" type="text" />
                    </div>
                    <div class="form-group mb-3">
                      <input class="form-control" v-model="form.name" placeholder="Name" type="text" />
                    </div>
                    <div class="form-group mb-3">
                      <input class="form-control" v-model="form.email" placeholder="Email" type="email" />
                    </div>
                    <div class="form-group mb-3">
                      <input class="form-control" v-model="form.phone" placeholder="Phone" type="tel" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-lg">
                      LEAD WITHOUT A SWEAT
                    </button>
                  </form>
                </div>
                <p class="disclaimer text-dark mt-3 text-center">
                  You are booking a free consultation with no maximum time (TnC's apply). We will call you on the given number on our first available time-slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg class="header__scroll-arrow" width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35L36.5 18.5L33.25 15.25L23.5 25V0H16.5V25L6.75 15.25L3.5 18.5L20 35Z" fill="white"/>
      </svg>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStrapi } from '#imports';
  
  const { find } = useStrapi();
  
  const props = defineProps({
    serviceType: {
      type: String,
      required: true,
      validator: (value) => ['website', 'seo', 'social-media', 'content-creation', 'paid-media', 'print-advertising'].includes(value)
    }
  });
  
  const headerData = ref(null);
  const services = ref([]);
  
  onMounted(async () => {
    try {
      const response = await find('header-services', {
        filters: {
          ServiceType: props.serviceType
        }
      });
      if (response.data && response.data.length > 0) {
        headerData.value = response.data[0].attributes;
        services.value = headerData.value.Services.split(',').map(service => service.trim());
      }
    } catch (error) {
      console.error('Error fetching header data:', error);
    }
  });
  
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