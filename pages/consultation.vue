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
    <StructuredData type="Service" :data="serviceSchema" />
    
    <HeaderConsultation />
    <HeroConsultation />
    <ConsultationContact />
    <Directive />
    <DigitalWorld />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderConsultation from '@/components/HeaderConsultation.vue'
import HeroConsultation from '@/components/HeroConsultation.vue'
import ConsultationContact from '@/components/ConsultationContact.vue'
import Directive from '@/components/Directive.vue'
import DigitalWorld from '@/components/DigitalWorld.vue'
import FAQ from '@/components/FAQ.vue'
import CTA from '@/components/CTA.vue'
import SeoMeta from '@/components/SeoMeta.vue'
import StructuredData from '@/components/StructuredData.vue'
import { createOrganizationSchema, createWebPageSchema, createBreadcrumbSchema, createServiceSchema } from '@/utils/structuredData'

const metaTitle = ref('Free Consultation | Ultify Solutions')
const metaDescription = ref('Book a free consultation with Ultify Solutions. Get expert advice on digital marketing strategies tailored to boost your online presence.')
const ogImage = ref('https://ultifysolutions.com/images/consultation-og.jpg')
const ogUrl = ref('https://ultifysolutions.com/consultation')

const organizationSchema = ref(createOrganizationSchema({
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
}))

const webPageSchema = ref(createWebPageSchema({
  name: 'Free Digital Marketing Consultation | Ultify Solutions',
  description: 'Book a free consultation with Ultify Solutions. Get expert advice on digital marketing strategies tailored to boost your online presence.',
  url: 'https://ultifysolutions.com/consultation'
}))

const breadcrumbSchema = ref(createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' },
  { name: 'Consultation', url: 'https://ultifysolutions.com/consultation' }
]))

const serviceSchema = ref(createServiceSchema({
  name: 'Free Digital Marketing Consultation',
  description: 'Expert advice on digital marketing strategies tailored to boost your online presence.',
  provider: 'Ultify Solutions',
  serviceType: 'Digital Marketing Consultation',
  areaServed: 'Sydney, Australia',
  availableChannel: {
    url: 'https://ultifysolutions.com/consultation',
    name: 'Ultify Solutions Website'
  }
}))

// Strapi data fetching logic for future use
// Uncomment and adjust when ready to fetch data from Strapi
/*
const { data: pageData } = await useFetch('/api/consultation-page')
if (pageData.value) {
  metaTitle.value = pageData.value.metaTitle || metaTitle.value
  metaDescription.value = pageData.value.metaDescription || metaDescription.value
  ogImage.value = pageData.value.ogImage || ogImage.value
  
  // Update schema data if needed
  webPageSchema.value = createWebPageSchema({
    name: pageData.value.title || webPageSchema.value.name,
    description: pageData.value.description || webPageSchema.value.description,
    url: webPageSchema.value.url
  })

  serviceSchema.value = createServiceSchema({
    name: pageData.value.serviceName || serviceSchema.value.name,
    description: pageData.value.serviceDescription || serviceSchema.value.description,
    provider: serviceSchema.value.provider,
    serviceType: pageData.value.serviceType || serviceSchema.value.serviceType,
    areaServed: serviceSchema.value.areaServed,
    availableChannel: serviceSchema.value.availableChannel
  })

  // You can also update other components' data here if needed
  // For example:
  // consultationData.value = pageData.value.consultationContent
}
*/
</script>

<style scoped>
/* Additional styling specific to the Consultation page */
</style>