<template>
  <section class="digital-world">
    <div class="container">
      <h2 class="title">Impacting the digital world since 2019</h2>
      <div class="image-wrapper">
        <img src="/home-16.png" alt="Office Environment" class="responsive-image">
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.digital-world {
  background-color: var(--bs-white);
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--bs-dark);
  margin-bottom: 40px;
}

.image-wrapper {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .digital-world {
    padding: 60px 0;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
}
</style>