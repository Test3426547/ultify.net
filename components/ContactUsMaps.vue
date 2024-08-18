<template>
    <section class="contact-us-maps bg-bs-primary text-bs-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="company-name mb-3" ref="companyName">ULTIFY SOLUTIONS</h2>
            <p class="tagline mb-4" ref="tagline">If you need results, you need Ultify.</p>
            <address class="mb-3" ref="address">
              Level 25, 50 Clarent St Wynyard,<br>
              Sydney, NSW, 2000 Australia
            </address>
            <p class="phone mb-2" ref="phone">1800 ULTIFY</p>
            <p class="email" ref="email">admin@ultify.net</p>
          </div>
          <div class="col-lg-6">
            <div class="map-container rounded-3 overflow-hidden" ref="mapContainer">
              <div id="map" style="width: 100%; height: 400px;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { Loader } from '@googlemaps/js-api-loader';
  
  const companyName = ref(null);
  const tagline = ref(null);
  const address = ref(null);
  const phone = ref(null);
  const email = ref(null);
  const mapContainer = ref(null);
  
  onMounted(async () => {
    // Animate text elements
    gsap.from(companyName.value, { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' });
    gsap.from(tagline.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power2.out' });
    gsap.from(address.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: 'power2.out' });
    gsap.from(phone.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: 'power2.out' });
    gsap.from(email.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.8, ease: 'power2.out' });
  
    // Animate map container
    gsap.from(mapContainer.value, { opacity: 0, scale: 0.9, duration: 1, delay: 0.5, ease: 'power2.out' });
  
    // Load Google Maps
    const loader = new Loader({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
      version: 'weekly',
    });
  
    const google = await loader.load();
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -33.8688, lng: 151.2093 }, // Sydney coordinates
      zoom: 15,
    });
  
    new google.maps.Marker({
      position: { lat: -33.8688, lng: 151.2093 },
      map,
      title: 'ULTIFY SOLUTIONS',
    });
  });
  </script>
  
  <style scoped>
  .contact-us-maps {
    overflow: hidden;
  }
  
  .map-container {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .map-container:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  </style>