<template>
  <div>
    <SeoMeta 
      :title="metaTitle"
      :description="metaDescription"
      :ogImage="ogImage"
      :ogUrl="ogUrl"
    />
    <StructuredData type="Organization" :data="organizationSchema" />
    <StructuredData type="WebPage" :data="webPageSchema" />
    <StructuredData type="BreadcrumbList" :data="breadcrumbSchema" />
    
    <HeaderHome />
    <QuickNEasy />
    <ServiceCards />
    <OurServices />
    <Consultation />
    <DigitalWorld />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderHome from '@/components/HeaderHome.vue'
import QuickNEasy from '@/components/QuickNEasy.vue'
import ServiceCards from '@/components/ServiceCards.vue'
import OurServices from '@/components/OurServices.vue'
import Consultation from '@/components/Consultation.vue'
import DigitalWorld from '@/components/DigitalWorld.vue'
import FAQ from '@/components/FAQ.vue'
import CTA from '@/components/CTA.vue'
import SeoMeta from '@/components/SeoMeta.vue'
import StructuredData from '@/components/StructuredData.vue'
import { createOrganizationSchema, createWebPageSchema, createBreadcrumbSchema } from '@/utils/structuredData'

const metaTitle = ref('Home | Ultify Solutions')
const metaDescription = ref('Ultify Solutions is a leading digital marketing agency offering innovative strategies to boost your online presence.')
const ogImage = ref('https://ultifysolutions.com/images/home-og.jpg')
const ogUrl = ref('https://ultifysolutions.com')

const organizationSchema = createOrganizationSchema({
  name: 'Ultify Solutions',
  url: 'https://ultifysolutions.com',
  logo: 'https://ultifysolutions.com/logo.png',
  contactPoint: {
    telephone: '+61-2-1234-5678',
    contactType: 'customer service'
  },
  sameAs: [
    'https://www.facebook.com/UltifySolutions',
    'https://www.linkedin.com/company/ultify-solutions',
    'https://twitter.com/UltifySolutions'
  ]
})

const webPageSchema = createWebPageSchema({
  name: 'Ultify Solutions - Digital Marketing Agency',
  description: 'Ultify Solutions is a leading digital marketing agency offering innovative strategies to boost your online presence.',
  url: 'https://ultifysolutions.com'
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' }
])

// If you're planning to fetch data from Strapi in the future, you can add it here
// For example:
// const { data: pageData } = await useFetch('/api/home-page')
// if (pageData.value) {
//   metaTitle.value = pageData.value.metaTitle
//   metaDescription.value = pageData.value.metaDescription
//   // Update other fields as necessary
// }
</script>

<style scoped>
/* Additional styling specific to the Home page */
</style>