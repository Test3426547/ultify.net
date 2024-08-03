<template>
  <header>
    <div class="page-header min-vh-100" :class="{ 'dark-mode': isDarkMode }">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-9 mx-auto text-center">
            <h1 class="mb-4 text-title">
              Rise to Digital Excellence with Your Own <span class="fw-bold">Website</span>
            </h1>
            <p class="lead text-subtitle mb-4">
              We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game, make the most of it!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-6 mb-4">
            <img class="w-100 border-radius-lg shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desire.jpg" alt="Image 1">
          </div>
          <div class="col-lg-3 col-6 mb-4">
            <img class="w-100 border-radius-lg shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/chair.jpg" alt="Image 2">
            <img class="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/facade.jpg" alt="Image 3">
          </div>
          <div class="col-lg-3 col-6 mb-4">
            <img class="w-100 border-radius-lg shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/architecture.jpg" alt="Image 4">
            <img class="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg" alt="Image 5">
          </div>
          <div class="col-lg-3 col-6 mb-4">
            <img class="w-100 border-radius-lg shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg" alt="Image 6">
            <img class="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/medusa.jpg" alt="Image 7">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderWebsite',
  computed: {
    isDarkMode() {
      return document.body.classList.contains('dark-mode');
    }
  }
};
</script>

<style scoped>
.page-header {
  background-color: var(--bs-light, #f8f9fa) !important;
  padding-top: 60px;
  padding-bottom: 60px;
}

/* Dark Mode Styles */
.page-header.dark-mode {
  background-color: var(--bs-dark-bg, #121212) !important;
}

.text-title {
  color: var(--bs-primary, #007bff) !important;
}

/* Dark Mode Title and Lead Text */
.dark-mode .text-title {
  color: var(--bs-light, #ffffff) !important;
}

.text-subtitle {
  color: var(--bs-secondary-text, #6c757d) !important;
}

.dark-mode .text-subtitle {
  color: var(--bs-light-text, #e1e1e1) !important;
}

img {
  border-radius: 0.5rem;
  object-fit: cover;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>