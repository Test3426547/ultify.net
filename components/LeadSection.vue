<template>
  <div class="lead-section position-relative">
    <div class="container">
      <div class="content-wrapper">
        <h1 class="fw-bold mb-4">
          <span class="text-black">GAIN A</span> <span class="text-primary">LEAD,</span><br>
          <span class="text-black">WITHOUT THE</span> <span class="text-primary">SWEAT</span>
        </h1>
        <p class="lead">
          We understand that the digital marketing aspect of things is rather complicated, especially while running a business. Our SEO, SEM and PPC strategies have been proven to work and are constantly aligned with current algorithms. We are so confident, that if we don't deliver, we'll refund you. Whether you need leads, a website, content or a professional to help, we are ready and remove the hardwork from your path.
        </p>
      </div>
    </div>
    <div class="curved-background"></div>
    <div class="tape tape-left"></div>
    <div class="tape tape-right"></div>
  </div>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.lead-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--bs-primary);
  padding: 4rem 0;
}

.container {
  position: relative;
  z-index: 2;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: var(--bs-black);
}

h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.lead {
  font-size: 1rem;
  line-height: 1.6;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.curved-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 100%;
  background-color: white;
  border-radius: 50% / 100% 100% 0 0;
  z-index: 1;
}

.tape {
  position: absolute;
  width: 100px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  transform: rotate(-45deg);
  z-index: 3;
}

.tape-left {
  top: 20px;
  left: -30px;
}

.tape-right {
  top: 20px;
  right: -30px;
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .lead {
    font-size: 0.9rem;
  }

  .curved-background {
    width: 200%;
  }
}
</style>