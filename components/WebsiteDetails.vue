<template>
  <section class="py-7 bg-light">
    <div class="container">
      <!-- Section 1: Website Design & Development -->
      <div class="row mb-5">
        <div class="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
          <img src="/website-04.png" class="w-100 border-radius-xl" alt="Website Design & Development">
        </div>
        <div class="col-lg-6 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
          <div class="p-3 pt-0">
            <h4 class="text-primary mb-0">Website Design & Development</h4>
            <p class="text-body">Need a custom designed, visually pleasing, highly optimized, and converting website? Let our team at ULTIFY handle all your website design and development needs. Our certified programmers and designers produce high-quality projects to help your business grow and outperform competitors in every aspect.</p>
          </div>
        </div>
      </div>

      <!-- Section 2: Mobile Conversion -->
      <div class="row mb-5">
        <div class="col-lg-6 col-md-8">
          <img src="/website-05.png" class="w-100 border-radius-xl" alt="Mobile Conversion">
        </div>
        <div class="col-lg-6 col-md-12 me-auto">
          <div class="p-3 pt-0">
            <h4 class="text-primary mb-0">Mobile Conversion</h4>
            <p class="text-body">Did you know that 86% of the world owns a smartphone, compared to only 25% owning a computer? This statistic emphasizes the importance of having a website optimized for all devices. At ULTIFY, we provide a highly optimized website for all devices, ensuring no loss in quality, conversion rates, or user experience.</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Website Management -->
      <div class="row mb-5">
        <div class="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
          <img src="/website-06.png" class="w-100 border-radius-xl" alt="Website Management">
        </div>
        <div class="col-lg-6 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
          <div class="p-3 pt-0">
            <h4 class="text-primary mb-0">Website Management</h4>
            <p class="text-body">ULTIFY provides comprehensive website management services to ensure your site is always up-to-date, secure, and performing at its best. Our services include regular updates, user experience improvements, and multimedia content management.</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Conversion Rate Optimization -->
      <div class="row mb-5">
        <div class="col-lg-6 col-md-8">
          <img src="/website-07.png" class="w-100 border-radius-xl" alt="Conversion Rate Optimization">
        </div>
        <div class="col-lg-6 col-md-12 me-auto">
          <div class="p-3 pt-0">
            <h4 class="text-primary mb-0">Conversion Rate Optimization</h4>
            <p class="text-body">What is the point of a website if it doesn't convert? At ULTIFY, we implement CRO strategies to maximize your site's effectiveness, driving more conversions and sales through meticulous analysis and A/B testing.</p>
          </div>
        </div>
      </div>

      <!-- Section 5: Website Maintenance -->
      <div class="row mb-5">
        <div class="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
          <img src="/website-08.png" class="w-100 border-radius-xl" alt="Website Maintenance">
        </div>
        <div class="col-lg-6 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
          <div class="p-3 pt-0">
            <h4 class="text-primary mb-0">Website Maintenance</h4>
            <p class="text-body">We offer comprehensive website maintenance services to ensure your site's security, reliability, and performance. Our team conducts regular checks and updates to keep your site running smoothly.</p>
          </div>
        </div>
      </div>

      <!-- Section 6: Website Audit & Strategy -->
      <div class="row mb-5">
        <div class="col-lg-6 col-md-8">
          <img src="/website-09.png" class="w-100 border-radius-xl" alt="Website Audit & Strategy">
        </div>
        <div class="col-lg-6 col-md-12 me-auto">
          <div class="p-3 pt-0">
            <h4 class="text-primary mb-0">Website Audit & Strategy</h4>
            <p class="text-body">Our audit and strategy services go beyond finding and fixing issues. We provide strategic guidance to unlock new opportunities and help your website reach its full potential.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebsiteDetails',
};
</script>

<style scoped>
.text-primary {
  color: var(--bs-primary) !important;
}

.text-body {
  color: var(--bs-body-color) !important;
}

.bg-light {
  background-color: var(--bs-light-bg) !important;
}

.border-radius-xl {
  border-radius: 0.75rem;
}

/* Dark mode styles */
.dark-mode .text-body {
  color: var(--bs-body-color-dark) !important;
}

.dark-mode .bg-light {
  background-color: var(--bs-dark-bg) !important;
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark) !important;
}
</style>