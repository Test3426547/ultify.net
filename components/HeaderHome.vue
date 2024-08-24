<template>
  <header class="header position-relative vh-100 overflow-hidden">
    <div class="header__background-top"></div>
    <div class="header__background-bottom"></div>
    <div class="container-fluid h-100">
      <div class="row h-100 position-relative">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-start ps-5">
          <h1 class="header__title fw-bold">
            ULTIFY capitalizes on digital<br>resources to elevate your brand.
          </h1>
          <p class="header__subtitle">
            Your Solutions Start With Ultify.
          </p>
          <h2 class="header__title fw-bold mt-4">
            Start now and maximise your<br>digital reach!
          </h2>
          <p class="header__subtitle mb-4">
            Explore our comprehensive services
          </p>
          <div class="header__services">
            <NuxtLink to="/paid-media" class="btn btn-outline-light rounded-pill me-2 mb-2">Paid Media</NuxtLink>
            <NuxtLink to="/seo" class="btn btn-outline-light rounded-pill me-2 mb-2">SEO</NuxtLink>
            <NuxtLink to="/content-creation" class="btn btn-outline-light rounded-pill me-2 mb-2">Content Creation</NuxtLink>
            <NuxtLink to="/website" class="btn btn-outline-light rounded-pill me-2 mb-2">Website</NuxtLink>
            <NuxtLink to="/social-media" class="btn btn-outline-light rounded-pill me-2 mb-2">Social Media</NuxtLink>
            <NuxtLink to="/print-media" class="btn btn-outline-light rounded-pill me-2 mb-2">Print Advertising</NuxtLink>
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-center align-items-center">
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
</script>

<style scoped>
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
  font-size: 3rem;
  max-width: 90%;
  color: var(--bs-primary);
}

.header__subtitle {
  font-size: 1.1rem;
  color: var(--bs-primary);
}

.header__services .btn {
  border-color: var(--bs-primary);
  color: var(--bs-primary);
  transition: all 0.3s ease;
}

.header__services .btn:hover, .header__services .btn:focus {
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
    font-size: 2.5rem;
  }

  .header__subtitle {
    font-size: 1rem;
  }

  .header__services .btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 768px) {
  .header__title {
    font-size: 2rem;
  }

  .header__subtitle {
    font-size: 0.9rem;
  }

  .header__services .btn {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>