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
    
    <ClientOnly>
      <HeaderHome @loaded="componentsLoaded[0] = true" />
      <QuickNEasy v-if="componentsLoaded[0]" @loaded="componentsLoaded[1] = true" />
      <ServiceCards v-if="componentsLoaded[1]" @loaded="componentsLoaded[2] = true" />
      <OurServices v-if="componentsLoaded[2]" @loaded="componentsLoaded[3] = true" />
      <Consultation v-if="componentsLoaded[3]" @loaded="componentsLoaded[4] = true" />
      <DigitalWorld v-if="componentsLoaded[4]" @loaded="componentsLoaded[5] = true" />
      <FAQ v-if="componentsLoaded[5]" @loaded="componentsLoaded[6] = true" />
      <CTA v-if="componentsLoaded[6]" @loaded="componentsLoaded[7] = true" />
    </ClientOnly>
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

const componentsLoaded = ref([false, false, false, false, false, false, false, false])

const metaTitle = ref('Home | Ultify Solutions')
const metaDescription = ref('Ultify Solutions is a leading digital marketing agency offering innovative strategies to boost your online presence.')
const ogImage = ref('https://ultifysolutions.com/images/home-og.jpg')
const ogUrl = ref('https://ultifysolutions.com')
const canonicalUrl = ref('https://ultifysolutions.com')
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
  name: 'Ultify Solutions - Digital Marketing Agency',
  description: 'Ultify Solutions is a leading digital marketing agency offering innovative strategies to boost your online presence.',
  url: 'https://ultifysolutions.com'
}))

const breadcrumbSchema = ref(createBreadcrumbSchema([
  { name: 'Home', url: 'https://ultifysolutions.com' }
]))

// If you're planning to fetch data from Strapi in the future, you can add it here
// For example:
/*
const { data: pageData } = await useFetch('/api/home-page')
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
}
*/
</script>

<style scoped>
/* Additional styling specific to the Home page */
</style>