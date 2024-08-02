<template>
  <header class="page-header min-vh-80 bg-light position-relative">
    <div
      class="position-absolute top-0 end-0 w-50 h-100 z-index-0 d-none d-md-block"
      :style="{ backgroundImage: 'url(/curved7.jpg)', backgroundSize: 'cover' }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 d-flex justify-content-center flex-column">
          <div class="card card-body d-flex justify-content-center shadow-lg p-5 mt-5 bg-white">
            <h1 class="text-primary">Capitalise on digital</h1>
            <h1 class="mb-4">resources with Ultify</h1>
            <p class="lead pe-5 me-5">
              Our agency utilises digital resources and our working strategies
              to elevate your business operations. Start now and maximise your
              digital reach.
            </p>
            <div class="buttons">
              <NuxtLink to="/contact-us" class="btn btn-primary mt-4">Get Started</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderHome',
};
</script>

<style scoped>
.page-header {
  position: relative;
}

.card {
  background-color: rgba(255, 255, 255, 0.95); /* Slight transparency */
  border-radius: 8px;
}

.text-primary {
  color: var(--bs-primary); /* Bootstrap variable for primary color */
}

.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: white;
}

.btn-primary:hover {
  background-color: darken(var(--bs-primary), 10%);
  border-color: darken(var(--bs-primary), 10%);
}

h1 {
  color: var(--bs-primary); /* Ensure h1 elements use the primary color */
}
</style>