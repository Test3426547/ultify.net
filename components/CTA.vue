<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">
          READY TO GET STARTED<br>
          WITH YOUR OWN DIGITAL<br>
          JOURNEY?
        </h2>
        <NuxtLink to="/contact-us" class="cta-button">
          TALK TO AN EXPERT TODAY
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTA',
};
</script>

<style scoped>
.cta-section {
  background-color: #48cae4;
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cta-title {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  max-width: 70%;
}

.cta-button {
  background-color: #ffffff;
  color: #48cae4;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 50px;
  transition: background-color 0.3s, color 0.3s;
}

.cta-button:hover {
  background-color: #e6f7fc;
}

@media (max-width: 1024px) {
  .cta-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 60px 0;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .cta-title {
    font-size: 2.5rem;
    max-width: 100%;
    margin-bottom: 30px;
  }

  .cta-button {
    font-size: 1rem;
    padding: 12px 25px;
  }
}
</style>