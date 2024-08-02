<template>
  <div>
    <HeaderConsultation />
    <ConsultationContact />
    <Directive />
    <FAQ />
    <CTA />
  </div>
</template>

<script>
import HeaderConsultation from '@/components/HeaderConsultation.vue';
import ConsultationContact from '@/components/ConsultationContact.vue';
import Directive from '@/components/Directive.vue';
import FAQ from '@/components/FAQ.vue';
import CTA from '@/components/CTA.vue';

export default {
  name: 'Consultation',
  components: {
    HeaderConsultation,
    ConsultationContact,
    Directive,
    FAQ,
    CTA,
  },
};
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>