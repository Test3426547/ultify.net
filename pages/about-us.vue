<template>
  <div>
    <HeaderAboutUs />
    <AboutUs />
    <HistoricalTimeline />
    <Consultation />
    <FAQ />
    <CTA />
  </div>
</template>

<script>
import HeaderAboutUs from '~/components/HeaderAboutUs.vue';
import AboutUs from '~/components/AboutUs.vue';
import HistoricalTimeline from '~/components/HistoricalTimeline.vue';
import Consultation from '~/components/Consultation.vue';
import FAQ from '~/components/FAQ.vue';
import CTA from '~/components/CTA.vue';

export default {
  name: 'AboutUsPage',
  components: {
    HeaderAboutUs,
    AboutUs,
    HistoricalTimeline,
    Consultation,
    FAQ,
    CTA
  }
};
</script>

<style scoped>
/* Add any additional styling specific to the About Us page here */
</style>