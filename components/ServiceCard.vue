<template>
  <div class="col-lg-4 col-md-6 mb-5">
    <div class="card h-100 bg-primary text-white shadow-lg">
      <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5 d-flex align-items-center">
        <div class="flex-grow-1">
          <h5 class="mt-2">{{ title }}</h5>
          <p class="mb-3">{{ description }}</p>
          <a href="javascript:;" class="font-weight-bold text-xs text-uppercase text-white">
            Explore Now
            <i class="fas fa-arrow-right text-xs ms-1"></i>
          </a>
        </div>
        <img class="w-25 mb-3 ms-3" :src="imgSrc" :alt="altText">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    description: String,
    imgSrc: String,
    altText: String,
  },
};
</script>

<style scoped>
.card {
  border-radius: var(--bs-border-radius-lg, 0.75rem);
  transition: transform 0.3s ease;
  background-color: var(--bs-primary, #007bff); /* Global CSS variable for primary background */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Elegant shadow */
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  color: var(--bs-white, #fff); /* Global CSS variable for white text */
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}

.text-white {
  color: var(--bs-white) !important; /* Global CSS variable for white text */
}
</style>