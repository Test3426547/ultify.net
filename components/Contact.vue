<template>
  <section class="py-5 mt-1 bg-light">
    <div class="container-fluid px-0">
      <div class="row justify-content-center text-center">
        <div class="col-12 position-relative">
          <div class="row align-items-center">
            <!-- Text Section -->
            <div class="col-xl-8 text-center mx-auto">
              <h2 class="display-5 fw-bold mb-3 text-primary">
                Get in contact
              </h2>
              <p class="text-body">
                Welcome to ULTIFY Solutions! We’re excited to hear from you. Beyond consultations, we’re here to assist you with a wide range of inquiries and opportunities. Whether you’re interested in learning more about our comprehensive service offerings, discussing potential collaborations, inquiring about career opportunities, or simply wanting to share feedback, we’re all ears. Our digital marketing agency believes in fostering strong relationships and utilizing open communication, so whatever the reason you’re reaching out, we’re ready to engage. Feel free to use the provided contact information to connect with us. Your thoughts and ideas matter, and we’re eager to explore how we can work together effectively.
              </p>
            </div>
            <!-- Image Section -->
            <div class="col-xl-4 position-relative p-0 d-flex justify-content-end">
              <img
                class="img-fluid rounded-end"
                src="@/assets/images/curved14.jpg"
                alt="Contact Us Image"
                style="max-height: 400px;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.bg-light {
  background-color: var(--bs-light) !important;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.text-body {
  color: var(--bs-body-color) !important;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.rounded-end {
  border-radius: 0 0.5rem 0.5rem 0;
}
</style>