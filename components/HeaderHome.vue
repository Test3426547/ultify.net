<template>
  <header class="header position-relative vh-100 overflow-hidden">
    <div class="header__background-top"></div>
    <div class="header__background-bottom"></div>
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-lg-7 d-flex flex-column py-5 position-relative">
          <div class="header__top">
            <h1 class="header__title fw-bold text-primary">
              {{ headerData.title }}
            </h1>
            <p class="header__subtitle text-primary">
              {{ headerData.subtitle }}
            </p>
          </div>
          <div class="header__bottom">
            <h2 class="header__subtitle-large fw-bold text-white">
              {{ headerData.heading }}
            </h2>
            <p class="header__subtitle text-white mb-4">
              {{ headerData.subheading }}
            </p>
            <div class="header__services">
              <div class="row g-2 justify-content-start">
                <div class="col-md-4" v-for="service in headerData.pills.slice(0, 3)" :key="service.path">
                  <NuxtLink :to="service.path" class="btn btn-outline-light rounded-pill w-100">
                    {{ service.name }}
                  </NuxtLink>
                </div>
              </div>
              <div class="row g-2 mt-2 justify-content-start">
                <div class="col-md-4" v-for="service in headerData.pills.slice(3)" :key="service.path">
                  <NuxtLink :to="service.path" class="btn btn-outline-light rounded-pill w-100">
                    {{ service.name }}
                  </NuxtLink>
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

const strapi = useStrapi();

const headerData = ref({
  title: '',
  subtitle: '',
  heading: '',
  subheading: '',
  pills: []
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

onMounted(async () => {
  try {
    const { data } = await strapi.find('headers', {
      filters: { id: 1 },
    });
    
    if (data && data.length > 0) {
      const header = data[0];
      headerData.value = {
        title: header.title,
        subtitle: header.subtitle,
        heading: header.heading,
        subheading: header.subheading,
        pills: [
          { name: header.pill1, path: header.pill1Path },
          { name: header.pill2, path: header.pill2Path },
          { name: header.pill3, path: header.pill3Path },
          { name: header.pill4, path: header.pill4Path },
          { name: header.pill5, path: header.pill5Path },
          { name: header.pill6, path: header.pill6Path }
        ]
      };
    }
  } catch (error) {
    console.error('Error fetching header data:', error);
  }
});
</script>

<style scoped>
.header {
  position: relative;
}

.header__background-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-color: var(--bs-white);
}

.header__background-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-color: var(--bs-primary);
}

.header__top {
  position: absolute;
  /* Move top heading and body 50px down, and body an additional 20px */
  top: calc(50% - 210px);
  /* Move content 50px to the right */
  left: 50px;
  right: 0;
  z-index: 1;
}

.header__bottom {
  position: absolute;
  /* Move bottom heading 50px up */
  top: calc(50% + 10px);
  /* Move content 50px to the right */
  left: 50px;
  right: 0;
  z-index: 1;
}

.header__title {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.header__subtitle {
  font-size: 1.1rem;
  /* Move top body an additional 20px down */
  margin-top: 20px;
}

.header__subtitle-large {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.header__services {
  display: flex;
  flex-direction: column;
  /* Move all pills up 20px */
  margin-top: -20px;
}

.header__services .row {
  max-width: 700px;
}

.header__services .row + .row {
  /* Move bottom 3 pills 20px closer to top 3 pills */
  margin-top: -18px;
}

.header__services .btn {
  border-color: var(--bs-white);
  color: var(--bs-white);
  transition: all 0.3s ease;
  font-size: 0.7rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;
}

.header__services .btn:hover, .header__services .btn:focus {
  background-color: var(--bs-white);
  color: var(--bs-primary);
}

.consultation-form {
  position: relative;
  z-index: 1;
  width: calc(100% + 150px);
  max-width: 550px;
  background-color: var(--bs-light);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: calc(100% + 50px);
  max-height: 650px;
  margin-top: 50px;
  margin-bottom: -50px;
}

.ms-n50 {
  margin-left: -50px;
}

.consultation-form-inner {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.form-container {
  padding: 0 25px;
}

.spacer {
  height: 50px;
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

.disclaimer {
  margin-top: 1rem;
  font-size: 0.8rem;
}

.header__scroll-arrow {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 3s infinite;
  z-index: 1;
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

@media (max-width: 1200px) {
  .header__top, .header__bottom {
    left: 30px;
  }
}

@media (max-width: 992px) {
  .header__top {
    top: calc(50% - 190px);
  }

  .header__bottom {
    top: calc(50% + 20px);
  }

  .header__title {
    font-size: 2.5rem;
  }

  .header__subtitle-large {
    font-size: 2.5rem;
  }

  .header__subtitle {
    font-size: 1rem;
  }

  .consultation-form {
    width: 100%;
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .header__top, .header__bottom {
    left: 20px;
  }

  .header__top {
    top: calc(50% - 170px);
  }

  .header__bottom {
    top: calc(50% + 30px);
  }

  .header__title {
    font-size: 2rem;
  }

  .header__subtitle-large {
    font-size: 2rem;
  }

  .header__subtitle {
    font-size: 0.9rem;
  }

  .header__services .btn {
    font-size: 0.6rem;
    padding: 0.4rem 1rem;
  }

  .consultation-form {
    width: 100%;
    max-width: 400px;
  }
}
</style>
