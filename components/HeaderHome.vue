<template>
  <header class="header position-relative vh-100 overflow-hidden">
    <div class="header__background-top"></div>
    <div class="header__background-bottom"></div>
    <div class="container-fluid h-100">
      <div class="row h-100 position-relative">
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-start ps-lg-5 ps-3">
          <h1 class="header__title header__title-top fw-bold mb-3">
            ULTIFY capitalizes on digital<br>resources to elevate your brand.
          </h1>
          <p class="header__subtitle mb-4">
            Your Solutions Start With Ultify.
          </p>
          <h2 class="header__title header__title-bottom fw-bold mb-3">
            Start now and maximise your<br>digital reach!
          </h2>
          <p class="header__subtitle mb-4">
            Explore our comprehensive services
          </p>
          <div class="d-flex flex-wrap gap-2">
            <NuxtLink v-for="service in services" :key="service.name" :to="service.link" class="btn btn-outline-primary rounded-pill">
              {{ service.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-5 d-flex align-items-center">
          <Consultation />
        </div>
      </div>
    </div>
    <svg class="header__scroll-arrow" width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 35L36.5 18.5L33.25 15.25L23.5 25V0H16.5V25L6.75 15.25L3.5 18.5L20 35Z" fill="white"/>
    </svg>
  </header>
</template>

<script setup>
import Consultation from './Consultation.vue';

const services = [
  { name: 'Paid Media', link: '/paid-media' },
  { name: 'SEO', link: '/seo' },
  { name: 'Content Creation', link: '/content-creation' },
  { name: 'Website', link: '/website' },
  { name: 'Social Media', link: '/social-media' },
  { name: 'Print Advertising', link: '/print-media' },
];
</script>

<style scoped>
.header {
  position: relative;
  overflow: hidden;
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

.header__title {
  font-size: 2.5rem;
  line-height: 1.2;
  z-index: 1;
}

.header__title-top {
  color: var(--bs-primary);
}

.header__title-bottom {
  color: var(--bs-white);
}

.header__subtitle {
  font-size: 1.1rem;
  z-index: 1;
}

.btn-outline-primary {
  border-color: var(--bs-primary);
  color: var(--bs-primary);
  transition: all 0.3s ease;
  padding: 10px 20px;
  font-size: 0.9rem;
}

.btn-outline-primary:hover, .btn-outline-primary:focus {
  background-color: var(--bs-primary);
  color: var(--bs-white);
}

.header__scroll-arrow {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 3s infinite;
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

@media (max-width: 991px) {
  .header__title {
    font-size: 2rem;
  }
  
  .header__subtitle {
    font-size: 1rem;
  }

  .btn-outline-primary {
    padding: 8px 16px;
    font-size: 0.8rem;
  }

  .header__scroll-arrow {
    width: 30px;
    height: 26.25px;
  }
}

@media (max-width: 768px) {
  .header__title {
    font-size: 1.8rem;
  }

  .header__subtitle {
    font-size: 0.9rem;
  }

  .btn-outline-primary {
    padding: 6px 12px;
    font-size: 0.7rem;
  }
}

@media (max-width: 576px) {
  .header__title {
    font-size: 1.5rem;
  }

  .header__subtitle {
    font-size: 0.8rem;
  }

  .btn-outline-primary {
    padding: 5px 10px;
    font-size: 0.6rem;
  }
}
</style>