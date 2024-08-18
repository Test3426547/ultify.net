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
            CONTACT US
          </NuxtLink>
        </div>
        <div class="col-lg-6">
          <div class="dna-helix position-relative">
            <svg
              viewBox="0 0 300 800"
              class="w-100 h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- DNA Strands -->
              <path
                d="M75,0 Q150,100 75,200 Q0,300 75,400 Q150,500 75,600 Q0,700 75,800"
                fill="none"
                stroke="var(--bs-white)"
                stroke-width="4"
              />
              <path
                d="M225,0 Q150,100 225,200 Q300,300 225,400 Q150,500 225,600 Q300,700 225,800"
                fill="none"
                stroke="var(--bs-white)"
                stroke-width="4"
              />
              
              <!-- DNA Rungs and Values -->
              <g v-for="(value, index) in dnaValues" :key="index">
                <line :x1="75" :y1="index * 100 + 50" :x2="225" :y2="index * 100 + 50" stroke="var(--bs-white)" stroke-width="3" />
                <rect :x="120" :y="index * 100 + 35" width="60" height="30" fill="var(--bs-white)" rx="15" ry="15" />
                <text :x="150" :y="index * 100 + 55" font-size="14" fill="var(--bs-primary)" text-anchor="middle" dominant-baseline="middle" font-weight="bold">{{ value }}</text>
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
    max-height: 80vh;
  }
}
</style>