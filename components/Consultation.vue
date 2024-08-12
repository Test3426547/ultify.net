<template>
  <section class="consultation">
    <div class="container-fluid h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-7 image-container">
          <img src="/path-to-your-image.webp" alt="Runners" class="runner-image">
        </div>
        <div class="col-lg-5 form-column">
          <div class="form-container bg-light shadow-lg">
            <h2 class="text-center">Book A Free Consultation Now</h2>
            <form class="p-4" id="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <input class="form-control" id="businessName" v-model="form.businessName" placeholder="URL/Business Name (if applicable)" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control" id="name" v-model="form.name" placeholder="Name" type="text" />
              </div>
              <div class="form-group">
                <input class="form-control" id="email" v-model="form.email" placeholder="Email" type="email" />
              </div>
              <div class="form-group">
                <input class="form-control" id="phone" v-model="form.phone" placeholder="Phone" type="tel" />
              </div>
              <button type="submit" class="btn btn-primary btn-block">
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
  height: 100vh;
  background-color: #45c5ff; /* Adjust this to match your exact brand color */
  overflow: hidden;
}

.image-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.runner-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
}

.form-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 450px;
  padding: 30px;
  border-radius: 20px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  border-radius: 50px;
  padding: 12px 20px;
  border: 1px solid #e0e0e0;
}

.btn-primary {
  background-color: #45c5ff;
  border: none;
  border-radius: 50px;
  padding: 12px 0;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #3ab1e8;
}

.disclaimer {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: #666;
}

@media (max-width: 991px) {
  .consultation {
    height: auto;
  }
  
  .image-container {
    height: 300px;
    margin-bottom: 30px;
  }
  
  .form-column {
    padding: 30px 15px;
  }
}
</style>