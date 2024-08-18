<template>
  <div class="about-us bg-primary text-white py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left side: Text content -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <small>Our DNA</small>
          <h2 class="display-4 mb-4">What ULTIFY is made of</h2>
          <p class="lead mb-4">
            At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape.
          </p>
          <router-link to="/consultation" class="btn btn-light btn-lg">
            Contact Us
          </router-link>
        </div>
        
        <!-- Right side: DNA helix illustration -->
        <div class="col-lg-6">
          <div class="dna-helix">
            <div v-for="(value, index) in companyValues" :key="index" class="dna-rung">
              <div class="dna-value">{{ value }}</div>
              <div class="dna-strand left"></div>
              <div class="dna-strand right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      companyValues: [
        'Transparency', 'Communication', 'Initiative', 'Creativity',
        'Process-Driven', 'Goal-Oriented', 'Efficient', 'Effective'
      ]
    }
  }
}
</script>

<style scoped>
.dna-helix {
  position: relative;
  height: 600px;
  overflow: hidden;
}

.dna-rung {
  position: relative;
  height: 75px; /* 600px / 8 rungs */
  display: flex;
  align-items: center;
}

.dna-value {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 15px;
  color: #007bff;
  font-weight: bold;
}

.dna-strand {
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
}

.dna-strand.left {
  transform: rotate(30deg);
  left: -20px;
}

.dna-strand.right {
  transform: rotate(-30deg);
  right: -20px;
}

/* Create the DNA crossover effect */
.dna-rung:nth-child(3) .dna-strand.left,
.dna-rung:nth-child(7) .dna-strand.left {
  transform: rotate(-30deg);
}

.dna-rung:nth-child(3) .dna-strand.right,
.dna-rung:nth-child(7) .dna-strand.right {
  transform: rotate(30deg);
}

@media (max-width: 991.98px) {
  .dna-helix {
    height: 400px;
  }
  
  .dna-rung {
    height: 50px;
  }
}
</style>