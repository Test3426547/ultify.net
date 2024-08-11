<template>
  <section class="our-services">
    <div class="bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ms-auto me-auto text-center">
            <h3>Our Services</h3>
            <p>Explore our comprehensive range of expert services designed to meet your diverse needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :imgSrc="service.imgSrc"
          :altText="service.altText"
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
  data() {
    return {
      services: [
        {
          title: "Website",
          description: "Our website services include custom design, development, and maintenance to help you establish a strong online presence.",
          imgSrc: "website.svg",
          altText: "Website Service"
        },
        {
          title: "Social Media",
          description: "Engage and grow your audience with our comprehensive social media strategies and management services.",
          imgSrc: "social-media.svg",
          altText: "Social Media Service"
        },
        {
          title: "Content Creation",
          description: "We provide high-quality content creation services including writing, video production, and graphic design.",
          imgSrc: "content-creation.svg",
          altText: "Content Creation Service"
        },
        {
          title: "Graphic Design & Animation",
          description: "Transform your ideas into stunning visuals with our creative graphic design and animation services.",
          imgSrc: "graphic-design.svg",
          altText: "Graphic Design & Animation"
        },
        {
          title: "SEO",
          description: "Optimize your website to rank higher in search engines and attract more visitors with our SEO services.",
          imgSrc: "seo.svg",
          altText: "SEO Service"
        },
        {
          title: "SEM",
          description: "Leverage our SEM strategies to improve your online visibility and increase traffic.",
          imgSrc: "sem.svg",
          altText: "SEM Service"
        }
      ]
    };
  }
};
</script>

<style scoped>
.our-services {
  background-color: var(--bs-white);
}

.bg-primary {
  background-color: var(--bs-primary) !important;
}

.text-white {
  color: var(--bs-white) !important;
}

.row {
  margin-left: -20px;
  margin-right: -20px;
}

.col-lg-4 {
  padding-left: 20px;
  padding-right: 20px;
}
</style>