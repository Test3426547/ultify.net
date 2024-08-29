<template>
  <div>
    <SeoMeta 
      :title="metaTitle"
      :description="metaDescription"
      :ogImage="ogImage"
      :ogUrl="ogUrl"
      :canonicalUrl="canonicalUrl"
      :robots="robots"
    />
    <StructuredData type="Organization" :data="organizationSchema" />
    <StructuredData type="WebPage" :data="webPageSchema" />
    <StructuredData type="BreadcrumbList" :data="breadcrumbSchema" />
    <StructuredData type="Service" :data="serviceSchema" />
    
    <ClientOnly>
      <HeaderWebsite />
      <WebsiteTechnology />
      <WebsiteDetails />
      <Consultation />
      <DigitalWorld />
      <FAQ />
      <CTA />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderWebsite from '@/components/HeaderWebsite.vue'
import WebsiteTechnology from '@/components/WebsiteTechnology.vue'
import WebsiteDetails from '@/components/WebsiteDetails.vue'
import Consultation from '@/components/Consultation.vue'
import DigitalWorld from '@/components/DigitalWorld.vue'
import FAQ from '@/components/FAQ.vue'
import CTA from '@/components/CTA.vue'
import SeoMeta from '@/components/SeoMeta.vue'
import StructuredData from '@/components/StructuredData.vue'
import { createOrganizationSchema, createWebPageSchema, createBreadcrumbSchema, createServiceSchema } from '@/utils/structuredData'

const metaTitle = ref('Website Development Services | Ultify Solutions')
const metaDescription = ref('Expert website development services from Ultify Solutions. Create stunning, responsive, and high-performing websites tailored to your business needs.')
const ogImage = ref('https://ultifysolutions.com/images/website-development-og.jpg')
const ogUrl = ref('https://ultifysolutions.com/services/website-development')
const canonicalUrl = ref('https://ultifysolutions.com/services/website-development')
const robots = ref('index, follow')

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
  name: 'Website Development Services | Ultify Solutions',
  description: 'Expert website development services from Ultify Solutions. Create stunning, responsive, and high-performing websites tailored to your business needs.',
  url: 'https://ultifysolutions.com/services/website-development'
}))

const breadcrumbSchema = ref(createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' },
  { name: 'Services', url: 'https://ultifysolutions.com/services' },
  { name: 'Website Development', url: 'https://ultifysolutions.com/services/website-development' }
]))

const serviceSchema = ref(createServiceSchema({
  name: 'Website Development Services',
  description: 'Professional website development services tailored to your business needs. We create responsive, high-performing, and visually appealing websites.',
  provider: 'Ultify Solutions',
  serviceType: 'Website Development',
  areaServed: 'Sydney, Australia',
  availableChannel: {
    url: 'https://ultifysolutions.com/services/website-development',
    name: 'Ultify Solutions Website'
  }
}))

onMounted(() => {
  // You can add any necessary mounted logic here
})

// If you're planning to fetch data from Strapi in the future, you can add it here
// For example:
/*
const { data: pageData } = await useFetch('/api/website-development-page')
if (pageData.value) {
  metaTitle.value = pageData.value.metaTitle || metaTitle.value
  metaDescription.value = pageData.value.metaDescription || metaDescription.value
  ogImage.value = pageData.value.ogImage || ogImage.value
  ogUrl.value = pageData.value.ogUrl || ogUrl.value
  canonicalUrl.value = pageData.value.canonicalUrl || canonicalUrl.value
  robots.value = pageData.value.robots || robots.value

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
    availableChannel: serviceSchema.value.availableChannel,
    // Add more fields as needed, such as:
    // offers: pageData.value.offers,
    // hasOfferCatalog: pageData.value.hasOfferCatalog
  })
}
*/
</script>

<style scoped>
/* Additional styling specific to the Website Development page */
</style>