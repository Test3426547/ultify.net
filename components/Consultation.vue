<template>
  <section class="consultation bg-primary">
    <div class="container">
      <div class="row align-items-center">

        <!-- Image Section -->
        <div class="col-lg-6">
          <div class="image-container">
            <img src="/home-15.webp" alt="Consultation Image" class="image">
          </div>
        </div>

        <!-- Form Section -->
        <div class="col-lg-6">
          <div class="form-container bg-light rounded-lg shadow-lg">
            <h2 class="text-center">Book A Free Consultation Now</h2>
            <form class="p-4" id="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <input class="form-control rounded-pill" id="businessName" v-model="form.businessName" placeholder="URL/Business Name (if applicable)" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control rounded-pill" id="name" v-model="form.name" placeholder="Name" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control rounded-pill" id="email" v-model="form.email" placeholder="Email" type="email" />
              </div>
              <div class="form-group">
                <input class="form-control rounded-pill" id="phone" v-model="form.phone" placeholder="Phone" type="tel" />
              </div>
              <button type="submit" class="btn btn-primary btn-block rounded-pill py-3">
                LEAD WITHOUT A SWEAT
              </button>
            </form>
            <p class="disclaimer text-dark">
              You are booking a free consultation with no maximum time (TnC's apply). We will call you on the given number on our first available time-slot.
            </p>
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
.consultation {
  padding: 100px 0;
}

.image-container {
  padding: 0;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-container {
  padding: 40px 50px;
  border-radius: 30px;
  margin-left: 35px;
}

h2 {
  margin-bottom: 30px;
  color: var(--bs-dark);
}

.form-group {
  margin-bottom: 25px;
}

.form-control {
  width: 100%;
  padding: 15px 20px;
  border: none;
  background-color: #f5f5f5;
}

.btn-block {
  display: block;
  width: 100%;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
}

.disclaimer {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
}

/* Responsive styling */
@media (max-width: 991px) {
  .container .row {
    flex-direction: column;
  }

  .image-container {
    margin-bottom: 35px;
  }

  .form-container {
    margin-left: 0;
  }
}
</style>
