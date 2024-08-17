<template>
  <header class="header position-relative vh-100 overflow-hidden">
    <div class="header__background-top"></div>
    <div class="header__background-bottom"></div>
    <div class="container-fluid h-100">
      <div class="row h-100 position-relative">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
          <h1 class="header__title-top text-center fw-bold">
            Start capitalising on digital<br>resources to elevate your brand.
          </h1>
          <h2 class="header__title-bottom text-center fw-bold">
            Start now and maximise your digital reach.
          </h2>
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
  font-size: 2.5rem;
  max-width: 90%;
}

.header__title-bottom {
  position: absolute;
  top: calc(35% + 60px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-light);
  font-size: 2.5rem; /* 20% larger than the top title */
  max-width: 90%;
}

@media (max-width: 768px) {
  .header__title-top {
    font-size: 1.8rem;
  }
  
  .header__title-bottom {
    font-size: 2.16rem; /* Maintaining the 20% size difference */
  }
}
</style>