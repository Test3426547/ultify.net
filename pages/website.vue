<template>
    <div>
      <HeaderWebsite />
      <WebsiteContent />
      <WebsiteTechnology />
      <WebsiteDetails />
      <Consultation />
      <FAQ />
      <CTA />
    </div>
  </template>
  
  <script>
  import HeaderWebsite from '@/components/HeaderWebsite.vue';
  import WebsiteContent from '@/components/WebsiteContent.vue';
  import WebsiteTechnology from '@/components/WebsiteTechnology.vue';
  import WebsiteDetails from '@/components/WebsiteDetails.vue';
  import Consultation from '@/components/Consultation.vue';
  import FAQ from '@/components/FAQ.vue';
  import CTA from '@/components/CTA.vue';
  
  export default {
    name: 'Website',
    components: {
      HeaderWebsite,
      WebsiteContent,
      WebsiteTechnology,
      WebsiteDetails,
      Consultation,
      FAQ,
      CTA,
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles for the page can be added here */
  </style>  