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
      <HeaderSocialMedia />
      <SocialMediaDetails />
      <Consultation />
      <DigitalWorld />
      <FAQ />
      <CTA />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderSocialMedia from '@/components/HeaderSocialMedia.vue'
import SocialMediaDetails from '@/components/SocialMediaDetails.vue'
import Consultation from '@/components/Consultation.vue'
import DigitalWorld from '@/components/DigitalWorld.vue'
import FAQ from '@/components/FAQ.vue'
import CTA from '@/components/CTA.vue'
import SeoMeta from '@/components/SeoMeta.vue'
import StructuredData from '@/components/StructuredData.vue'
import { createOrganizationSchema, createWebPageSchema, createBreadcrumbSchema, createServiceSchema } from '@/utils/structuredData'

const metaTitle = ref('Social Media Marketing Services | Ultify Solutions')
const metaDescription = ref('Boost your brand\'s online presence with Ultify Solutions\' expert social media marketing services. Engage your audience and drive growth across all major platforms.')
const ogImage = ref('https://ultifysolutions.com/images/social-media-marketing-og.jpg')
const ogUrl = ref('https://ultifysolutions.com/services/social-media-marketing')
const canonicalUrl = ref('https://ultifysolutions.com/services/social-media-marketing')
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
  name: 'Social Media Marketing Services | Ultify Solutions',
  description: 'Boost your brand\'s online presence with Ultify Solutions\' expert social media marketing services. Engage your audience and drive growth across all major platforms.',
  url: 'https://ultifysolutions.com/services/social-media-marketing'
}))

const breadcrumbSchema = ref(createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' },
  { name: 'Services', url: 'https://ultifysolutions.com/services' },
  { name: 'Social Media Marketing', url: 'https://ultifysolutions.com/services/social-media-marketing' }
]))

const serviceSchema = ref(createServiceSchema({
  name: 'Social Media Marketing Services',
  description: 'Comprehensive social media marketing services to boost your brand\'s online presence, engage your target audience, and drive business growth across all major social media platforms.',
  provider: 'Ultify Solutions',
  serviceType: 'Social Media Marketing',
  areaServed: 'Sydney, Australia',
  availableChannel: {
    url: 'https://ultifysolutions.com/services/social-media-marketing',
    name: 'Ultify Solutions Website'
  },
  offers: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook Marketing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instagram Marketing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn Marketing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Twitter Marketing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Marketing' } }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Marketing Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Service Types',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Strategy Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation and Curation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Community Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Advertising' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Analytics and Reporting' } }
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
const { data: pageData } = await useFetch('/api/social-media-marketing-page')
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
  // socialMediaDetails.value = pageData.value.socialMediaDetails
}
*/
</script>

<style scoped>
/* Additional styling specific to the Social Media Marketing page */
</style>