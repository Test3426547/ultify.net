<template>
  <section class="py-5 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ms-auto me-auto text-center">
          <h3 class="text-primary">Our Services</h3>
          <p class="text-primary">Explore our comprehensive range of expert services designed to meet your diverse needs.</p>
        </div>
      </div>
      <div class="row mt-5">
        <ServiceCard
          title="Website"
          description="Our website services include custom design, development, and maintenance to help you establish a strong online presence."
          imgSrc="website.svg"
          altText="Website Service"
        />
        <ServiceCard
          title="Social Media"
          description="Engage and grow your audience with our comprehensive social media strategies and management services."
          imgSrc="social-media.svg"
          altText="Social Media Service"
        />
        <ServiceCard
          title="Content Creation"
          description="We provide high-quality content creation services including writing, video production, and graphic design."
          imgSrc="content-creation.svg"
          altText="Content Creation Service"
        />
        <ServiceCard
          title="Graphic Design & Animation"
          description="Transform your ideas into stunning visuals with our creative graphic design and animation services."
          imgSrc="graphic-design.svg"
          altText="Graphic Design & Animation"
        />
        <ServiceCard
          title="SEO"
          description="Optimize your website to rank higher in search engines and attract more visitors with our SEO services."
          imgSrc="seo.svg"
          altText="SEO Service"
        />
        <ServiceCard
          title="SEM"
          description="Leverage our SEM strategies to improve your online visibility and increase traffic."
          imgSrc="sem.svg"
          altText="SEM Service"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue';

export default {
  name: 'OurServices',
  components: {
    ServiceCard,
  },
};
</script>

<style scoped>
.bg-white {
  background-color: var(--bs-white) !important;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important; /* Elegant shadow */
}
</style>