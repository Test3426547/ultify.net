<template>
  <header class="header position-relative vh-100 overflow-hidden">
    <div class="header__background-top"></div>
    <div class="header__background-bottom"></div>
    <div class="container-fluid h-100">
      <div class="row h-100 position-relative">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <h1 class="header__title text-center fw-bold">
            Start capitalising on digital<br>resources to elevate your brand.
          </h1>
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

.header__title {
  position: absolute;
  bottom: calc(65% + 100px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--bs-primary);
  font-size: 2.5rem;
  max-width: 90%;
}

@media (max-width: 768px) {
  .header__title {
    font-size: 1.8rem;
  }
}
</style>