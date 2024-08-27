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
    <StructuredData type="FAQPage" :data="faqSchema" />
    
    <HeaderContentCreation />
    <ContentCreationDetails />
    <Consultation />
    <DigitalWorld />
    <FAQ />
    <CTA />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderContentCreation from '@/components/HeaderContentCreation.vue'
import ContentCreationDetails from '@/components/ContentCreationDetails.vue'
import Consultation from '@/components/Consultation.vue'
import DigitalWorld from '@/components/DigitalWorld.vue'
import FAQ from '@/components/FAQ.vue'
import CTA from '@/components/CTA.vue'
import SeoMeta from '@/components/SeoMeta.vue'
import StructuredData from '@/components/StructuredData.vue'
import { createOrganizationSchema, createWebPageSchema, createBreadcrumbSchema, createServiceSchema } from '@/utils/structuredData'

const metaTitle = ref('Content Creation Services | Ultify Solutions')
const metaDescription = ref('Elevate your brand with Ultify Solutions\' expert content creation services. Engage your audience with compelling, SEO-optimized content across all platforms.')
const ogImage = ref('https://ultifysolutions.com/images/content-creation-og.jpg')
const ogUrl = ref('https://ultifysolutions.com/services/content-creation')
const canonicalUrl = ref('https://ultifysolutions.com/services/content-creation')
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
  name: 'Content Creation Services | Ultify Solutions',
  description: 'Elevate your brand with Ultify Solutions\' expert content creation services. Engage your audience with compelling, SEO-optimized content across all platforms.',
  url: 'https://ultifysolutions.com/services/content-creation'
}))

const breadcrumbSchema = ref(createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' },
  { name: 'Services', url: 'https://ultifysolutions.com/services' },
  { name: 'Content Creation', url: 'https://ultifysolutions.com/services/content-creation' }
]))

const serviceSchema = ref(createServiceSchema({
  name: 'Content Creation Services',
  description: 'Comprehensive content creation services to elevate your brand and engage your audience. We offer SEO-optimized content across various formats and platforms, tailored to your business goals and target audience.',
  provider: 'Ultify Solutions',
  serviceType: 'Content Creation',
  areaServed: 'Sydney, Australia',
  availableChannel: {
    url: 'https://ultifysolutions.com/services/content-creation',
    name: 'Ultify Solutions Website'
  },
  offers: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blog Writing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Content' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Production' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infographic Design' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whitepaper Creation' } }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Content Creation Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Content Creation Techniques',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audience Research' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Voice Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Strategy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Performance Analysis' } }
        ]
      }
    ]
  }
}))

const faqSchema = ref({
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of content do you create?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We create a wide range of content including blog posts, social media content, videos, infographics, whitepapers, e-books, case studies, and more. Our content is tailored to your specific needs and target audience.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does content creation benefit my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Content creation benefits your business by improving your online visibility, establishing your brand as an industry authority, engaging your target audience, driving website traffic, generating leads, and supporting your overall marketing and SEO efforts.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you optimize content for SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we optimize all content for SEO. This includes keyword research, strategic keyword placement, meta descriptions, title tags, and internal linking. Our goal is to create content that not only engages your audience but also ranks well in search engines.'
      }
    }
  ]
})

// Strapi data fetching logic for future use
// Uncomment and adjust when ready to fetch data from Strapi
/*
const { data: pageData } = await useFetch('/api/content-creation-page')
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

  if (pageData.value.faq) {
    faqSchema.value.mainEntity = pageData.value.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  // You can also update other components' data here if needed
  // For example:
  // contentCreationData.value = pageData.value.contentCreationDetails
}
*/
</script>

<style scoped>
/* Additional styling specific to the Content Creation page */
</style>