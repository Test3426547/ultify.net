<template>
  <section class="service-details bg-light">
    <div class="container">
      <div class="service-row" v-for="(service, index) in services" :key="index">
        <div class="service-content" :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }">
          <h2 class="service-title">{{ service.title }}</h2>
          <p class="service-description">{{ service.description }}</p>
        </div>
        <div class="service-image" :class="{ 'right': index % 2 === 0, 'left': index % 2 !== 0 }">
          <img :src="service.image" :alt="service.title">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceDetails',
  data() {
    return {
      services: [
        {
          title: 'Website Design & Development',
          description: 'Need a custom designed, visually pleasing, highly optimized, and converting website? Let our team at ULTIFY handle all your website design and development needs. Our certified programmers and designers produce high-quality projects to help your business grow and outperform competitors in every aspect.',
          image: '/website-04.png'
        },
        {
          title: 'Website Management',
          description: 'ULTIFY provides comprehensive website management services to ensure your site is always up-to-date, secure, and performing at its best. Our services include regular updates, user experience improvements, and multimedia content management.',
          image: '/website-06.png'
        },
        {
          title: 'Website Maintenance',
          description: 'We offer comprehensive website maintenance services to ensure your sites security, reliability, and performance. Our team conducts regular checks and updates to keep your site running smoothly.',
          image: '/website-08.png'
        },
        {
          title: 'Mobile Conversion',
          description: 'Did you know that 86% of the world owns a smartphone, compared to only 25% owning a computer? This statistic emphasizes the importance of having a website optimized for all devices. At ULTIFY, we provide a highly optimized website for all devices, ensuring no loss in quality, conversion rates, or user experience.',
          image: '/website-05.png'
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'What is the point of a website if it doesnt convert? At ULTIFY, we implement CRO strategies to maximize your sites effectiveness, driving more conversions and sales through meticulous analysis and A/B testing.',
          image: '/website-07.png'
        },
        {
          title: 'Website Audit & Strategy',
          description: 'Our audit and strategy services go beyond finding and fixing issues. We provide strategic guidance to unlock new opportunities and help your website reach its full potential.',
          image: '/website-09.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-details {
  height: 5000px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f8f9fa;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.service-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.service-content, .service-image {
  flex-basis: 45%;
}

.service-content.left {
  margin-left: -100px;
}

.service-content.right {
  margin-right: -100px;
}

.service-title {
  color: #3498db;
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.service-description {
  color: #34495e;
  line-height: 1.6;
  font-size: 1.1rem;
}

.service-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 1200px) {
  .service-content.left, .service-content.right {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .service-row {
    flex-direction: column;
  }

  .service-content, .service-image {
    flex-basis: 100%;
    margin-bottom: 30px;
  }
}
</style>