<template>
  <div class="col-lg-4 col-md-6 mb-5">
    <div class="card h-100">
      <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5">
        <img class="w-25 mb-3 ms-n2" :src="imgSrc" :alt="altText">
        <h5 class="mt-2">{{ title }}</h5>
        <p class="mb-3">{{ description }}</p>
        <a href="javascript:;" class="font-weight-bold text-xs text-uppercase text-primary">
          Explore Now
          <i class="fas fa-arrow-right text-xs ms-1"></i>
        </a>
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
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  background-color: var(--bs-card-bg, #fff);
  box-shadow: var(--bs-card-shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--bs-body-color, #333);
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}

.text-primary {
  color: var(--bs-primary);
}

/* Dark mode styles */
.dark-mode .card {
  background-color: var(--bs-dark-card-bg, #333);
  box-shadow: var(--bs-dark-card-shadow, 0 4px 6px rgba(0, 0, 0, 0.3));
}

.dark-mode .card-body {
  color: var(--bs-light-text, #e1e1e1);
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark);
}
</style>