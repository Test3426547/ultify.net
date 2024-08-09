<template>
  <div class="col-md-6 col-lg-4">
    <div class="service-card">
      <div class="icon-container">
        <img :src="imgSrc" :alt="title">
      </div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  imgSrc: String,
});
</script>

<style scoped>
.service-card {
  background-color: var(--bs-primary);
  border-radius: 15px;
  padding: 20px;
  text-align: left;
  color: var(--bs-white);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.icon-container img {
  width: 40px;
  height: 40px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0;
}
</style>