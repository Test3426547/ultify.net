<template>
  <header class="header position-relative vh-100 overflow-hidden">
    <div class="header__background-top"></div>
    <div class="header__background-bottom"></div>
    <div class="container-fluid h-100">
      <div class="row h-100 position-relative">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
          <h1 class="header__title-top text-center fw-bold">
            ULTIFY capitalises on digital<br>resources to elevate your brand.
          </h1>
          <h2 class="header__title-bottom text-center fw-bold">
            Start now and maximise your<br>digital reach.
          </h2>
          <p class="header__subtitle text-center">
            Your Solutions Start With Ultify.
          </p>
          <a href="/consultation" class="header__cta-button btn btn-outline-light rounded-pill">
            Get Started
          </a>
          <svg class="header__scroll-arrow" width="14" height="70" viewBox="0 0 14 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 70L14 56L10.5 56L7 61V0H7V61L3.5 56L0 56L7 70Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// No JavaScript needed
</script>

<style scoped>
:root {
  --header-top-height: 35%;
  --header-bottom-height: 65%;
  --title-top-font-size: 3rem;
  --title-bottom-font-size: 3.4rem;
  --subtitle-font-size: 1.1rem;
  --button-font-size: 1rem;
  --arrow-width: 14px;
  --arrow-height: 70px;
}

.header__background-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-top-height);
  background-color: var(--bs-light);
}

.header__background-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--header-bottom-height);
  background-color: var(--bs-primary);
}

.header__title-top {
  position: absolute;
  bottom: calc(var(--header-bottom-height) + 60px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-primary);
  font-size: var(--title-top-font-size);
  max-width: 90%;
}

.header__title-bottom {
  position: absolute;
  top: calc(var(--header-top-height) + 60px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-white);
  font-size: var(--title-bottom-font-size);
  max-width: 90%;
}

.header__subtitle {
  position: absolute;
  top: calc(var(--header-top-height) + 60px + 300px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-white);
  font-size: var(--subtitle-font-size);
  width: 300px;
}

.header__cta-button {
  position: absolute;
  top: calc(var(--header-top-height) + 60px + 300px + 50px + var(--subtitle-font-size));
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 30px;
  font-size: var(--button-font-size);
  border-color: var(--bs-white);
  color: var(--bs-white);
  transition: all 0.3s ease;
}

.header__cta-button:hover, .header__cta-button:focus {
  background-color: var(--bs-white);
  color: var(--bs-primary);
}

.header__scroll-arrow {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 3s infinite;
  width: var(--arrow-width);
  height: var(--arrow-height);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 1200px) {
  :root {
    --title-top-font-size: 2.5rem;
    --title-bottom-font-size: 2.9rem;
  }
}

@media (max-width: 992px) {
  :root {
    --title-top-font-size: 2rem;
    --title-bottom-font-size: 2.4rem;
    --subtitle-font-size: 1rem;
  }
}

@media (max-width: 768px) {
  :root {
    --title-top-font-size: 1.8rem;
    --title-bottom-font-size: 2.16rem;
    --subtitle-font-size: 0.9rem;
    --button-font-size: 0.9rem;
    --arrow-width: 10px;
    --arrow-height: 50px;
  }

  .header__subtitle {
    width: 80%;
  }

  .header__cta-button {
    padding: 8px 24px;
  }
}

@media (max-width: 576px) {
  :root {
    --title-top-font-size: 1.5rem;
    --title-bottom-font-size: 1.8rem;
  }
}
</style>