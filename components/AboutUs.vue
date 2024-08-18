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
            <div class="rung rung-1"><span>Innovation</span></div>
            <div class="rung rung-2"><span>Creativity</span></div>
            <div class="rung rung-3"><span>Excellence</span></div>
            <div class="rung rung-4"><span>Integrity</span></div>
            <div class="rung rung-5"><span>Passion</span></div>
            <div class="rung rung-6"><span>Collaboration</span></div>
            <div class="rung rung-7"><span>Adaptability</span></div>
            <div class="rung rung-8"><span>Results-Driven</span></div>
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
  height: 500px;
  overflow: hidden;
}

.strand {
  position: absolute;
  width: 20px;
  height: 200%;
  background-color: var(--bs-white);
}

.strand-1 {
  left: 50%;
  transform: translateX(-50%) rotate(20deg);
}

.strand-2 {
  left: 50%;
  transform: translateX(-50%) rotate(-20deg);
}

.rung {
  position: absolute;
  left: 50%;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rung span {
  background-color: var(--bs-light);
  color: var(--bs-primary);
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.9em;
}

.rung-1 { top: 5%; transform: translateX(-50%) rotate(-20deg); }
.rung-2 { top: 15%; transform: translateX(-50%) rotate(20deg); }
.rung-3 { top: 30%; transform: translateX(-50%) rotate(-20deg); }
.rung-4 { top: 40%; transform: translateX(-50%) rotate(20deg); }
.rung-5 { top: 50%; transform: translateX(-50%) rotate(-20deg); }
.rung-6 { top: 60%; transform: translateX(-50%) rotate(20deg); }
.rung-7 { top: 75%; transform: translateX(-50%) rotate(-20deg); }
.rung-8 { top: 85%; transform: translateX(-50%) rotate(20deg); }

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .dna-helix {
    height: 400px;
  }

  .rung {
    width: 100px;
  }

  .rung span {
    font-size: 0.8em;
  }
}
</style>