<template>
  <section class="digital-world">
    <div class="container">
      <h2 class="title text-primary">Impacting the digital world since 2019</h2>
      <div class="image-wrapper">
        <img src="/home-16.png" alt="Office Environment" class="responsive-image">
      </div>
      <div class="button-wrapper">
        <NuxtLink to="/about-us" class="btn btn-primary btn-lg bounce-link">ABOUT US</NuxtLink>
        <NuxtLink to="/contact-us" class="btn btn-primary btn-lg bounce-link">CONTACT US</NuxtLink>
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
  font-size: 2.5rem; /* Reduced from 3.0rem */
  margin-bottom: 60px;
  color: var(--bs-primary); /* Changed to primary color */
}

.image-wrapper {
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  width: 80%; /* Reduced to 80% of original size */
  margin-left: auto;
  margin-right: auto;
}

.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.btn {
  font-size: 1.5rem;
  padding: 20px 0;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  width: 250px;
  display: inline-block;
  text-align: center;
}

.btn-lg {
  font-size: 1.8rem;
}

.btn-primary {
  background-color: var(--bs-primary);
  color: var(--bs-white);
}

.bounce-link:hover {
  transform: translateY(-5px);
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .digital-world {
    padding: 80px 0;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 80px;
  }
  
  .image-wrapper {
    margin-bottom: 60px;
    width: 90%; /* Slightly larger on mobile for better visibility */
  }
  
  .button-wrapper {
    gap: 40px;
  }
  
  .btn {
    font-size: 1.2rem;
    padding: 15px 0;
    width: 200px;
  }
  
  .btn-lg {
    font-size: 1.5rem;
  }
}
</style>