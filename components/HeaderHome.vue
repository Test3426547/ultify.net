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
          <svg class="header__scroll-arrow" width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 35L36.5 18.5L33.25 15.25L23.5 25V0H16.5V25L6.75 15.25L3.5 18.5L20 35Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// No JavaScript needed for now
</script>

<style scoped>
.header__background-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 35%;
  background-color: var(--bs-light);
}

.header__background-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65%;
  background-color: var(--bs-primary);
}

.header__title-top {
  position: absolute;
  bottom: calc(65% + 60px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-primary);
  font-size: 3rem;
  max-width: 90%;
}

.header__title-bottom {
  position: absolute;
  top: calc(35% + 60px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-white);
  font-size: 3.4rem;
  max-width: 90%;
}

.header__subtitle {
  position: absolute;
  top: calc(35% + 60px + 300px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-white);
  font-size: 1.1rem;
  width: 300px;
}

.header__cta-button {
  position: absolute;
  top: calc(35% + 60px + 300px + 50px + 1.1rem);
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 30px;
  font-size: 1rem;
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
  top: calc(35% + 60px + 300px + 50px + 1.1rem + 50px + 70px);
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

@media (max-width: 768px) {
  .header__title-top {
    font-size: 1.8rem;
  }
  
  .header__title-bottom {
    font-size: 2.16rem;
  }

  .header__subtitle {
    font-size: 1.2rem;
    width: 80%;
  }

  .header__cta-button {
    font-size: 0.9rem;
    padding: 8px 24px;
  }

  .header__scroll-arrow {
    width: 30px;
    height: 26.25px;
  }
}
</style>