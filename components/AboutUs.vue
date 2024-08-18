<template>
  <section class="about-us-section bg-primary text-white py-12">
    <div class="container mx-auto px-4">
      <h3 class="text-sm font-semibold uppercase mb-4">Our DNA</h3>
      <h1 class="text-5xl font-bold mb-6">We are obsessed <span class="text-blue-300">with results.</span></h1>
      
      <div class="flex flex-wrap items-center">
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p class="text-lg mb-6">
            At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape.
          </p>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="dna-helix">
            <div class="strand strand-1"></div>
            <div class="strand strand-2"></div>
            <div class="rung rung-1">Innovation</div>
            <div class="rung rung-2">Creativity</div>
            <div class="rung rung-3">Excellence</div>
            <div class="rung rung-4">Integrity</div>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <button class="bg-light hover:bg-gray-200 text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300">
          More about our services
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>

<style scoped>
.about-us-section {
  background-color: var(--bs-primary);
}

.container {
  max-width: 1200px;
}

.dna-helix {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.strand {
  position: absolute;
  width: 20px;
  height: 100%;
  background-color: var(--bs-white);
  animation: rotate 10s linear infinite;
}

.strand-1 {
  left: 40%;
  transform-origin: 50% 100%;
}

.strand-2 {
  right: 40%;
  transform-origin: 50% 0%;
}

.rung {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 20px;
  background-color: var(--bs-light);
  color: var(--bs-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.rung-1 { top: 20%; }
.rung-2 { top: 40%; }
.rung-3 { top: 60%; }
.rung-4 { top: 80%; }

@keyframes rotate {
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(360deg); }
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .dna-helix {
    height: 200px;
  }
}
</style>