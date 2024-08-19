<template>
  <section class="contact-us-maps bg-bs-white text-bs-primary py-5 vh-100 d-flex flex-column">
    <div class="container flex-grow-1 d-flex flex-column">
      <div class="row align-items-center flex-grow-1">
        <div class="col-lg-6">
          <h2 class="company-name mb-3 fw-bold text-bs-primary" ref="companyName">ULTIFY SOLUTIONS</h2>
          <p class="tagline mb-4 fw-bold text-bs-primary" ref="tagline">If you need results, you need Ultify.</p>
          <address class="mb-3 fw-bold text-bs-primary" ref="address">
            Level 25, 50 Clarent St<br>
            Wynyard, Sydney, NSW, 2000<br>
            Australia
          </address>
          <p class="phone mb-2 fw-bold text-bs-primary" ref="phone">
            <font-awesome-icon :icon="['fas', 'phone']" class="me-2" /> 1800 ULTIFY
          </p>
          <p class="email mb-4 fw-bold text-bs-primary" ref="email">
            <font-awesome-icon :icon="['fas', 'envelope']" class="me-2" /> admin@ultify.net
          </p>
          <div class="social-icons">
            <a href="#" aria-label="Instagram" class="bounce-link me-3 text-bs-primary">
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            </a>
            <a href="#" aria-label="Facebook" class="bounce-link me-3 text-bs-primary">
              <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
            </a>
            <a href="#" aria-label="LinkedIn" class="bounce-link text-bs-primary">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
            </a>
          </div>
        </div>
        <div class="col-lg-6 position-relative">
          <div class="image-container" ref="contactImage">
            <img src="/contact-us-01.jpg" alt="Contact Us" class="img-fluid rounded-3">
          </div>
        </div>
      </div>
    </div>
    <div class="map-container w-100 flex-grow-1" ref="mapContainer">
      <div id="map" style="width: 100%; height: 100%;"></div>
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
const contactImage = ref(null);

onMounted(async () => {
  // Animate text elements
  gsap.from(companyName.value, { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out' });
  gsap.from(tagline.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power2.out' });
  gsap.from(address.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: 'power2.out' });
  gsap.from(phone.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: 'power2.out' });
  gsap.from(email.value, { opacity: 0, y: 20, duration: 0.8, delay: 0.8, ease: 'power2.out' });

  // Animate contact image
  gsap.from(contactImage.value, { opacity: 0, x: 200, duration: 1, delay: 0.5, ease: 'power2.out' });

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

.social-icons a {
  transition: transform 0.3s;
}

.social-icons a:hover {
  transform: translateY(-5px);
}

.bounce-link {
  transition: transform 0.3s;
}

.bounce-link:hover {
  transform: translateY(-5px);
}

.image-container {
  position: absolute;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
}
</style>