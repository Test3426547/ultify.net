<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row g-5">
        <template v-for="(service, index) in services" :key="index">
          <div :class="['col-12 col-md-6', index % 2 === 0 ? 'order-md-1' : 'order-md-2']">
            <div class="h-100 d-flex flex-column justify-content-center">
              <h3 class="text-primary mb-3">{{ service.title }}</h3>
              <p class="text-body mb-0">{{ service.description }}</p>
            </div>
          </div>
          <div :class="['col-12 col-md-6', index % 2 === 0 ? 'order-md-2' : 'order-md-1']">
            <img :src="service.image" class="img-fluid rounded-3 shadow" :alt="service.title">
          </div>
        </template>
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
          title: 'Mobile Conversion',
          description: 'Did you know that 86% of the world owns a smartphone, compared to only 25% owning a computer? This statistic emphasizes the importance of having a website optimized for all devices. At ULTIFY, we provide a highly optimized website for all devices, ensuring no loss in quality, conversion rates, or user experience.',
          image: '/website-05.png'
        },
        {
          title: 'Website Management',
          description: 'ULTIFY provides comprehensive website management services to ensure your site is always up-to-date, secure, and performing at its best. Our services include regular updates, user experience improvements, and multimedia content management.',
          image: '/website-06.png'
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'What is the point of a website if it doesnt convert? At ULTIFY, we implement CRO strategies to maximize your sites effectiveness, driving more conversions and sales through meticulous analysis and A/B testing.',
          image: '/website-07.png'
        },
        {
          title: 'Website Maintenance',
          description: 'We offer comprehensive website maintenance services to ensure your sites security, reliability, and performance. Our team conducts regular checks and updates to keep your site running smoothly.',
          image: '/website-08.png'
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
.bg-light {
  background-color: var(--bs-light) !important;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.text-body {
  color: var(--bs-body-color) !important;
}

@media (min-width: 768px) {
  .row > div {
    margin-bottom: 3rem;
  }
}
</style>