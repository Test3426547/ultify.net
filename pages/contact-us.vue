<template>
  <div>
    <HeaderContact />
    <Contact />
    <Consultation />
    <FAQ />
    <CTA />
  </div>
</template>

<script>
import HeaderContact from '~/components/HeaderContact.vue';
import Contact from '~/components/Contact.vue';
import Consultation from '~/components/Consultation.vue';
import FAQ from '~/components/FAQ.vue';
import CTA from '~/components/CTA.vue';

export default {
  name: 'ContactUs',
  components: {
    HeaderContact,
    Contact,
    Consultation,
    FAQ,
    CTA,
  },
};
</script>

<style scoped>
/* You can add specific styles for the contact-us page here if needed */
</style>