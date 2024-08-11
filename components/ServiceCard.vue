<template>
  <div class="col-lg-4 col-md-6 mb-5">
    <div class="card h-100 bg-primary text-white shadow-3d" @click="navigateToService">
      <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5 d-flex align-items-center">
        <div class="flex-grow-1">
          <h5 class="mt-2 font-weight-bold text-white">{{ title }}</h5>
          <p class="mb-3">{{ description }}</p>
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
  methods: {
    navigateToService() {
      // Implement navigation logic here
      console.log(`Navigating to ${this.title} service page`);
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 1.5rem;
  transition: transform 0.3s ease;
  background-color: var(--bs-primary, #007bff);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  color: var(--bs-white, #fff);
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}

.text-white {
  color: var(--bs-white) !important;
}

.shadow-3d {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.1);
}
</style>