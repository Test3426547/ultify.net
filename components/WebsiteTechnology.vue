<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center">
        <!-- Framework Technology Section -->
        <div class="col-md-6 mb-md-0 mb-4">
          <h3 class="text-gradient text-primary mb-0">Our Framework Technology</h3>
          <p class="text-body">Our technology stack includes a range of popular frameworks to ensure robust and scalable solutions. We have the expertise to work beyond these listed technologies, offering tailored solutions for your needs.</p>
          <ul class="list-unstyled">
            <li><span class="me-2">&#9679;</span> Framework Development</li>
            <li><span class="me-2">&#9679;</span> React Development</li>
            <li><span class="me-2">&#9679;</span> Angular JS Development</li>
            <li><span class="me-2">&#9679;</span> Ruby Development</li>
            <li><span class="me-2">&#9679;</span> Django Development</li>
            <li><span class="me-2">&#9679;</span> NodeJS Development</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="blur-shadow-image text-center">
            <picture>
              <source srcset="/website-02m.png" media="(max-width: 767px)">
              <source srcset="/website-02.png">
              <img src="/website-02.png" alt="Framework Technologies" class="img-fluid shadow border-radius-lg max-height-600">
            </picture>
          </div>
        </div>
      </div>
      <hr class="horizontal dark my-6 mx-7">
      <div class="row align-items-center">
        <!-- CMS Technology Section -->
        <div class="col-md-6 mb-md-0 mb-4">
          <h3 class="text-gradient text-primary mb-0">Our CMS Technology</h3>
          <p class="text-body">We specialize in various CMS platforms to deliver efficient content management solutions. Our expertise is not limited to these technologies, and we can work with other CMS platforms as well.</p>
          <ul class="list-unstyled">
            <li><span class="me-2">&#9679;</span> CMS Development</li>
            <li><span class="me-2">&#9679;</span> Shopify Development</li>
            <li><span class="me-2">&#9679;</span> WordPress Development</li>
            <li><span class="me-2">&#9679;</span> GoDaddy Development</li>
            <li><span class="me-2">&#9679;</span> Wix Development</li>
            <li><span class="me-2">&#9679;</span> Weebly Development</li>
            <li><span class="me-2">&#9679;</span> Squarespace Development</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="blur-shadow-image text-center">
            <picture>
              <source srcset="/website-03m.png" media="(max-width: 767px)">
              <source srcset="/website-03.png">
              <img src="/website-03.png" alt="CMS Technologies" class="img-fluid shadow border-radius-lg max-height-600">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebsiteTechnology',
};
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #007bff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-body {
  color: var(--bs-body-color, #343a40);
}

.bg-light {
  background-color: var(--bs-light-bg, #f8f9fa) !important;
}

.blur-shadow-image img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

.horizontal.dark {
  border-color: var(--bs-dark-bg, #343a40);
}

/* Dark mode styles */
.dark-mode .text-body {
  color: var(--bs-light-text, #f8f9fa);
}

.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #121212) !important;
}

.dark-mode .text-gradient {
  background: linear-gradient(to right, #00d4ff, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>