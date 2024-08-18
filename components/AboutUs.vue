<template>
  <section class="about-us bg-bs-primary text-bs-white vh-100 d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="fw-bold display-4">Our DNA</h2>
          <h3 class="h4 mb-3">What ULTIFY is made of</h3>
          <p class="mb-4">
            At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape.
          </p>
          <NuxtLink to="/consultation" class="btn btn-bs-light text-bs-primary rounded-pill px-4 py-2">
            Contact Us
          </NuxtLink>
        </div>
        <div class="col-lg-6">
          <div class="dna-helix position-relative">
            <svg
              viewBox="0 0 300 600"
              class="w-100 h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- DNA Strands -->
              <path
                d="M75,0 Q150,75 75,150 Q0,225 75,300 Q150,375 75,450 Q0,525 75,600"
                fill="none"
                stroke="var(--bs-white)"
                stroke-width="4"
              />
              <path
                d="M225,0 Q150,75 225,150 Q300,225 225,300 Q150,375 225,450 Q300,525 225,600"
                fill="none"
                stroke="var(--bs-white)"
                stroke-width="4"
              />
              
              <!-- DNA Rungs -->
              <g v-for="(value, index) in dnaValues" :key="index">
                <line :x1="75" :y1="index * 75 + 37.5" :x2="225" :y2="index * 75 + 37.5" stroke="var(--bs-white)" stroke-width="3" />
                <rect :x="120" :y="index * 75 + 25" width="60" height="25" fill="var(--bs-white)" rx="12.5" ry="12.5" />
                <text :x="150" :y="index * 75 + 42.5" font-size="14" fill="var(--bs-primary)" text-anchor="middle" dominant-baseline="middle">{{ value }}</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dnaValues = ref(['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8']);
</script>

<style scoped>
.about-us {
  overflow: hidden;
}

.dna-helix {
  height: 100%;
}

@media (max-width: 991.98px) {
  .about-us {
    height: auto !important;
    min-height: 100vh;
    padding: 4rem 0;
  }
  
  .dna-helix {
    max-height: 60vh;
  }
}
</style>