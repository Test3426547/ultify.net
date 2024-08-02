<template>
    <div>
      <HeaderHome />
      <Services />
      <Consultation />
      <OurServices />
      <FAQ />
      <CTA />
    </div>
  </template>
  
  <script>
  import HeaderHome from '@/components/HeaderHome.vue';
  import Services from '@/components/Services.vue';
  import Consultation from '@/components/Consultation.vue';
  import OurServices from '@/components/OurServices.vue';
  import FAQ from '@/components/FAQ.vue';
  import CTA from '@/components/CTA.vue';
  
  export default {
    name: 'Home',
    components: {
      HeaderHome,
      Services,
      Consultation,
      OurServices,
      FAQ,
      CTA,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional scoped styles here if needed */
  </style>  