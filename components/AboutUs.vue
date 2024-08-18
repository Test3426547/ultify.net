<template>
  <section class="about-us py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="text-bs-primary fw-bold">Our DNA</h2>
          <h3 class="h4 mb-3">What ULTIFY is made of</h3>
          <p class="mb-4">
            At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape.
          </p>
          <NuxtLink to="/consultation" class="btn btn-bs-primary rounded-pill">
            Contact Us
          </NuxtLink>
        </div>
        <div class="col-lg-6">
          <div class="dna-helix position-relative">
            <svg
              viewBox="0 0 200 400"
              class="w-100 h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- DNA Strands -->
              <path
                d="M50,0 Q100,50 50,100 Q0,150 50,200 Q100,250 50,300 Q0,350 50,400"
                fill="none"
                stroke="var(--bs-primary)"
                stroke-width="4"
              />
              <path
                d="M150,0 Q100,50 150,100 Q200,150 150,200 Q100,250 150,300 Q200,350 150,400"
                fill="none"
                stroke="var(--bs-primary)"
                stroke-width="4"
              />
              
              <!-- DNA Rungs -->
              <line x1="50" y1="25" x2="150" y2="25" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="75" x2="150" y2="75" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="125" x2="150" y2="125" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="175" x2="150" y2="175" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="225" x2="150" y2="225" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="275" x2="150" y2="275" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="325" x2="150" y2="325" stroke="var(--bs-primary)" stroke-width="3" />
              <line x1="50" y1="375" x2="150" y2="375" stroke="var(--bs-primary)" stroke-width="3" />
            </svg>
            
            <!-- DNA Value Labels -->
            <div v-for="(value, index) in dnaValues" :key="index" class="dna-value" :style="getValueStyle(index)">
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dnaValues = ref(['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8']);

const getValueStyle = (index) => {
  const top = `${index * 12.5 + 3}%`;
  const left = index % 2 === 0 ? '15%' : '75%';
  return { top, left };
};
</script>

<style scoped>
.about-us {
  background-color: var(--bs-light);
}

.dna-helix {
  height: 400px;
}

.dna-value {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: var(--bs-white);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--bs-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 991.98px) {
  .dna-helix {
    height: 300px;
  }
  
  .dna-value {
    font-size: 0.7rem;
  }
}
</style>