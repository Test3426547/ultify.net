<template>
  <section class="py-7 bg-light">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card overflow-hidden">
            <div class="row">
              <!-- Form Section -->
              <div class="col-lg-7">
                <form class="p-3" id="contact-form" @submit.prevent="handleSubmit">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2 class="text-primary">Book a Free</h2>
                    <h2 class="text-primary">Consultation Now</h2>
                    <p class="lead">
                      We heard you are ready to begin your digital journey! Get talking to a suited expert for free, now!
                    </p>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="businessName">URL/Business Name (if applicable)</label>
                        <input
                          class="form-control"
                          id="businessName"
                          v-model="form.businessName"
                          placeholder="Enter your business name"
                          type="text"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="name">Name</label>
                        <input
                          class="form-control"
                          id="name"
                          v-model="form.name"
                          placeholder="Enter your name"
                          type="text"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="email">Email</label>
                        <input
                          class="form-control"
                          id="email"
                          v-model="form.email"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="phone">Phone</label>
                        <input
                          class="form-control"
                          id="phone"
                          v-model="form.phone"
                          placeholder="Enter your phone number"
                          type="tel"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <label for="message">Your message</label>
                        <textarea
                          name="message"
                          class="form-control"
                          id="message"
                          v-model="form.message"
                          rows="6"
                          placeholder="I want to say that..."
                        ></textarea>
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
                class="col-lg-5 position-relative bg-cover px-0"
                :style="{ backgroundImage: 'url(/home-05.png)' }"
              >
                <div class="position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none"></div>
                <div class="z-index-2 text-center d-flex h-100 w-100 justify-content-center">
                  <div class="mask bg-gradient-primary opacity-9"></div>
                  <div class="p-5 ps-sm-8 position-relative text-start my-auto text-white">
                    <h3>Contact Information</h3>
                    <p class="opacity-8 mb-4">
                      Fill up the form and our team will get back to you within 24 hours.
                    </p>
                    <div class="d-flex p-2">
                      <i class="fas fa-phone text-sm"></i>
                      <span class="ps-3 text-sm opacity-8">1800 ULTIFY</span>
                    </div>
                    <div class="d-flex p-2">
                      <i class="fas fa-envelope text-sm"></i>
                      <span class="ps-3 text-sm opacity-8">admin@ultify.net</span>
                    </div>
                    <div class="d-flex p-2">
                      <i class="fas fa-map-marker-alt text-sm"></i>
                      <span class="ps-3 text-sm opacity-8">Level 25, 50 Clarent St, Wynyard, Sydney, NSW, 2000, Australia</span>
                    </div>
                    <div class="mt-4">
                      <a href="https://www.instagram.com" class="btn btn-icon-only btn-link text-white me-2" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com" class="btn btn-icon-only btn-link text-white me-2" aria-label="Facebook">
                        <i class="fab fa-facebook"></i>
                      </a>
                      <a href="https://www.linkedin.com" class="btn btn-icon-only btn-link text-white" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End of Contact Information Section -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Consultation',
  data() {
    return {
      form: {
        businessName: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Implement form submission logic here
      console.log('Form submitted:', this.form);
    },
  },
};
</script>

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.text-primary {
  color: var(--bs-primary); /* Bootstrap variable for primary color */
}

.btn-primary {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.btn-primary:hover {
  background-color: darken(var(--bs-primary), 10%);
  border-color: darken(var(--bs-primary), 10%);
}
</style>