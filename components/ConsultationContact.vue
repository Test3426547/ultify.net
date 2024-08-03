<template>
  <section class="py-7 bg-light dark-mode-bg">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card overflow-hidden">
            <div class="row">
              <!-- Form Section -->
              <div class="col-lg-7">
                <form class="p-3" id="contact-form" @submit.prevent="submitForm">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2 class="text-gradient text-primary dark-mode-text-gradient">Book a Free</h2>
                    <h2 class="text-gradient text-primary dark-mode-text-gradient">Consultation Now</h2>
                    <p class="lead dark-mode-text">
                      We heard you are ready to begin your digital journey! Get talking to a suited expert for free, now!
                    </p>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="businessName" class="dark-mode-text">URL/Business Name (if applicable)</label>
                        <input
                          class="form-control dark-mode-input"
                          id="businessName"
                          placeholder="Enter your business name"
                          type="text"
                          v-model="form.businessName"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="name" class="dark-mode-text">Name</label>
                        <input
                          class="form-control dark-mode-input"
                          id="name"
                          placeholder="Enter your name"
                          type="text"
                          v-model="form.name"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="email" class="dark-mode-text">Email</label>
                        <input
                          class="form-control dark-mode-input"
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                          v-model="form.email"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="phone" class="dark-mode-text">Phone</label>
                        <input
                          class="form-control dark-mode-input"
                          id="phone"
                          placeholder="Enter your phone number"
                          type="tel"
                          v-model="form.phone"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <div class="form-group mb-0">
                          <label for="message" class="dark-mode-text">Your message</label>
                          <textarea
                            name="message"
                            class="form-control dark-mode-input"
                            id="message"
                            rows="6"
                            placeholder="I want to say that..."
                            v-model="form.message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 text-end ms-auto">
                        <button type="submit" class="btn btn-primary btn-round bg-gradient-primary mb-0">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- Contact Information Section -->
              <div
                class="col-lg-5 position-relative bg-cover px-0 dark-mode-bg-cover"
                :style="{ backgroundImage: 'url(/home-05.png)' }"
              >
                <div class="p-5 ps-sm-8 position-relative text-start my-auto">
                  <h3 class="text-primary dark-mode-text-primary">We protect your intellectual property.</h3>
                  <p class="dark-mode-text">
                    Our agency will provide NDA’s to protect your intellectual property and confidential information. We understand that during a consultation you are sharing plans, innovations, and information that you may wish to be kept privately between us. A standard NDA will be sent out to you from us through your contact email or phone number. Please note this is an NDA for the consultation. A NDA or agreement will always be offered and provided as protection for any agreements of services made during or after the consultation.
                  </p>

                  <h3 class="text-primary dark-mode-text-primary">No maximum time</h3>
                  <p class="dark-mode-text">
                    At ULTIFY we understand that the common “Free Consultation” provided as an industry standard by most agencies typically just leads for you to then book and pay for more consultations. As a result, you may be paying money to these agencies before they actually do any work. We provide in-depth consultations with no maximum time; if we are not able to determine and provide the information you need during our first consultation for work to be started, then the next consultation will be free as well, just until you get the information you need. We want to make sure our free consultations are actually free and impactful, so we can develop a strong relationship for a good start.
                  </p>

                  <h3 class="text-primary dark-mode-text-primary">Certified Consultants</h3>
                  <p class="dark-mode-text">
                    At ULTIFY, we provide consultations that are actively managed by real business consultants who have passed our extensive certification checklist. We want you to be speaking to the experts that know the work best and not just a representative following a money-grabbing guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

// Form data and submit function
const form = ref({
  businessName: '',
  name: '',
  email: '',
  phone: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
  // Implement your form submission logic here
};
</script>

<style scoped>
/* Light Mode Styles */
.bg-light {
  background-color: var(--bs-light-bg, #f8f9fa) !important;
}

.text-primary {
  color: var(--bs-primary);
}

.card, .card-header, .card-body, .form-group, .form-control {
  background-color: var(--bs-light-bg, #f8f9fa);
  color: var(--bs-body-color, #212529);
}

/* Dark Mode Styles */
.dark-mode-bg {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

.dark-mode-bg-cover {
  background-color: var(--bs-dark-bg, #343a40);
}

.dark-mode-text-primary {
  color: var(--bs-primary-dark) !important;
}

.dark-mode-text {
  color: var(--bs-light, #f8f9fa);
}

.dark-mode-input {
  background-color: var(--bs-dark-input-bg, #495057) !important;
  color: var(--bs-dark-input-text, #f8f9fa) !important;
  border: 1px solid var(--bs-dark-input-border, #6c757d) !important;
}

.text-gradient {
  background: -webkit-linear-gradient(left, #007bff, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>