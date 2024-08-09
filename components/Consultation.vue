<template>
  <section class="consultation bg-primary">
    <div class="container">
      <div class="row align-items-center">
        <!-- Image Section -->
        <div class="col-lg-6">
          <img src="/curved2.jpg" alt="Consultation Image" class="image">
        </div>
        <!-- Form Section -->
        <div class="col-lg-6">
          <div class="form-container bg-light">
            <h2>Book A Free Consultation Now</h2>
            <form class="p-3" id="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="businessName">URL/Business Name (if applicable)</label>
                <input
                  class="form-control"
                  id="businessName"
                  v-model="form.businessName"
                  placeholder="URL/Business Name (if applicable)"
                  type="text"
                />
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  class="form-control"
                  id="email"
                  v-model="form.email"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input
                  class="form-control"
                  id="phone"
                  v-model="form.phone"
                  placeholder="Phone"
                  type="tel"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">LEAD WITHOUT A SWEAT</button>
            </form>
            <p class="disclaimer">
              You are booking a free consultation with no maximum time (TnC's apply).
              We will call you on the given number on our first available time-slot.
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
  padding: 40px 0;
}

.image {
  width: 100%;
  border-radius: 20px;
}

.form-container {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  color: var(--bs-dark);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--bs-dark);
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-block {
  display: block;
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
}

.disclaimer {
  margin-top: 15px;
  font-size: 12px;
  color: var(--bs-dark);
  text-align: center;
}

/* Responsive styling */
@media (max-width: 768px) {
  .container .row {
    flex-direction: column;
  }

  .form-container {
    margin-top: 20px;
  }
}
</style>