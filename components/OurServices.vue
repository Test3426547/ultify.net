<template>
  <section class="our-services">
    <div class="bg-primary text-white py-5 banner">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto text-center">
            <h3 class="wave-heading">Our Services</h3>
            <p class="faq-subtitle">Explore our comprehensive range of expert services designed to meet your diverse needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container service-grid">
      <div class="row g-4">
        <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-4">
          <div class="card h-100">
            <img :src="service.imgSrc" :alt="service.altText" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Website",
    description: "Our website services include custom design, development, and maintenance to help you establish a strong online presence.",
    imgSrc: "home-09.png",
    altText: "Website Service"
  },
  {
    title: "Social Media",
    description: "Engage and grow your audience with our comprehensive social media strategies and management services.",
    imgSrc: "home-10.png",
    altText: "Social Media Service"
  },
  {
    title: "Content Creation",
    description: "We provide high-quality content creation services including writing, video production, and graphic design.",
    imgSrc: "home-11.png",
    altText: "Content Creation Service"
  },
  {
    title: "Graphic Design & Animation",
    description: "Transform your ideas into stunning visuals with our creative graphic design and animation services.",
    imgSrc: "home-12.png",
    altText: "Graphic Design & Animation"
  },
  {
    title: "SEO",
    description: "Optimize your website to rank higher in search engines and attract more visitors with our SEO services.",
    imgSrc: "home-13.png",
    altText: "SEO Service"
  },
  {
    title: "SEM",
    description: "Leverage our SEM strategies to improve your online visibility and increase traffic.",
    imgSrc: "home-14.png",
    altText: "SEM Service"
  },
]
</script>

<style scoped>
.our-services {
  background-color: var(--bs-light);
}

.banner {
  padding-top: 110px !important;
  padding-bottom: 110px !important;
  margin-bottom: 100px;
}

.wave-heading {
  font-size: 3em;
  color: var(--bs-white);
}

.faq-subtitle {
  font-size: 1.2rem;
}

.service-grid {
  padding-top: 25px;
  padding-bottom: 100px;
}

.row {
  --bs-gutter-x: 40px;
}

.card {
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #6c757d;
}

@media (max-width: 991.98px) {
  .banner {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }

  .service-grid {
    padding-top: 15px;
    padding-bottom: 50px;
  }
}
</style>