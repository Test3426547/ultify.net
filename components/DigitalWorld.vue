<template>
  <section class="digital-world">
    <div class="container">
      <h2 class="title">Impacting the digital world since 2019</h2>
      <div class="image-wrapper">
        <img src="/home-16.png" alt="Office Environment" class="responsive-image">
      </div>
      <div class="button-wrapper">
        <NuxtLink to="/about-us" class="btn btn-primary">ABOUT US</NuxtLink>
        <NuxtLink to="/contact-us" class="btn btn-primary">CONTACT US</NuxtLink>
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
  padding: 100px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--bs-dark);
  margin-bottom: 60px;
}

.image-wrapper {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
}

.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  font-size: 1.2rem;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.btn-primary {
  background-color: var(--bs-primary);
  color: var(--bs-white);
}

.btn-primary:hover {
  background-color: darken(var(--bs-primary), 10%);
}

@media (max-width: 768px) {
  .digital-world {
    padding: 80px 0;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  .image-wrapper {
    margin-bottom: 40px;
  }
  
  .btn {
    font-size: 1rem;
    padding: 12px 25px;
  }
}
</style>