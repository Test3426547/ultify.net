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
      <HeaderService service-id="6" />
      <PrintMediaDetails />
      <Consultation />
      <DigitalWorld />
      <FAQ />
      <CTA />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderService from '@/components/HeaderService.vue'
import PrintMediaDetails from '@/components/PrintMediaDetails.vue'
import Consultation from '@/components/Consultation.vue'
import DigitalWorld from '@/components/DigitalWorld.vue'
import FAQ from '@/components/FAQ.vue'
import CTA from '@/components/CTA.vue'
import SeoMeta from '@/components/SeoMeta.vue'
import StructuredData from '@/components/StructuredData.vue'
import { createOrganizationSchema, createWebPageSchema, createBreadcrumbSchema, createServiceSchema } from '@/utils/structuredData'

const metaTitle = ref('Print Advertising Services | Ultify Solutions')
const metaDescription = ref('Elevate your brand with Ultify Solutions\' expert print advertising services. Create impactful print campaigns that resonate with your target audience.')
const ogImage = ref('https://ultifysolutions.com/images/print-advertising-og.jpg')
const ogUrl = ref('https://ultifysolutions.com/services/print-advertising')
const canonicalUrl = ref('https://ultifysolutions.com/services/print-advertising')
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
  name: 'Print Advertising Services | Ultify Solutions',
  description: 'Elevate your brand with Ultify Solutions\' expert print advertising services. Create impactful print campaigns that resonate with your target audience.',
  url: 'https://ultifysolutions.com/services/print-advertising'
}))

const breadcrumbSchema = ref(createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' },
  { name: 'Services', url: 'https://ultifysolutions.com/services' },
  { name: 'Print Advertising', url: 'https://ultifysolutions.com/services/print-advertising' }
]))

const serviceSchema = ref(createServiceSchema({
  name: 'Print Advertising Services',
  description: 'Comprehensive print advertising services to elevate your brand and create impactful campaigns. We offer creative design, strategic placement, and measurable results for all types of print media.',
  provider: 'Ultify Solutions',
  serviceType: 'Print Advertising',
  areaServed: 'Sydney, Australia',
  availableChannel: {
    url: 'https://ultifysolutions.com/services/print-advertising',
    name: 'Ultify Solutions Website'
  },
  offers: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newspaper Advertising' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Magazine Advertising' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brochure Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Poster Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direct Mail Campaigns' } }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Print Advertising Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Print Advertising Techniques',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creative Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copywriting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Media Planning and Buying' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Print Production Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Campaign Performance Analysis' } }
        ]
      }
    ]
  }
}))

onMounted(() => {
  // You can add any necessary mounted logic here
})

// Strapi data fetching logic for future use
// Uncomment and adjust when ready to fetch data from Strapi
/*
const { data: pageData } = await useFetch('/api/print-advertising-page')
if (pageData.value) {
  metaTitle.value = pageData.value.metaTitle || metaTitle.value
  metaDescription.value = pageData.value.metaDescription || metaDescription.value
  ogImage.value = pageData.value.ogImage || ogImage.value
  ogUrl.value = pageData.value.ogUrl || ogUrl.value
  canonicalUrl.value = pageData.value.canonicalUrl || canonicalUrl.value
  robots.value = pageData.value.robots || robots.value
  
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
    availableChannel: serviceSchema.value.availableChannel,
    offers: pageData.value.offers || serviceSchema.value.offers,
    hasOfferCatalog: pageData.value.hasOfferCatalog || serviceSchema.value.hasOfferCatalog
  })

  // You can also update other components' data here if needed
  // For example:
  // printAdvertisingData.value = pageData.value.printAdvertisingDetails
}
*/
</script>

<style scoped>
/* Additional styling specific to the Print Advertising page */
</style>