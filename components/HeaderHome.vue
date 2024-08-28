<template>
  <header class="relative h-screen overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1/2 bg-white"></div>
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-primary"></div>
    <div class="container-fluid h-full">
      <div class="flex flex-col lg:flex-row h-full">
        <div class="lg:w-7/12 flex flex-col py-5 relative">
          <h1 class="text-4xl lg:text-5xl font-bold text-primary mt-[-100px]">
            ULTIFY capitalizes on digital<br>resources to elevate your
          </h1>
          <h2 class="text-2xl lg:text-3xl font-bold text-primary mt-10">
            Your Solutions Start With Ultify
          </h2>
          <h3 class="text-2xl lg:text-3xl font-bold text-primary mt-10">
            Com Heading
          </h3>
          <p class="text-lg lg:text-xl font-normal text-primary mt-6">
            Body text
          </p>
          <div class="flex flex-wrap mt-5">
            <button class="bg-primary text-white py-2 px-4 rounded-lg mr-2">
              Pill 1
            </button>
            <button class="bg-primary text-white py-2 px-4 rounded-lg mr-2">
              Pill 2
            </button>
            <button class="bg-primary text-white py-2 px-4 rounded-lg">
              Pill 3
            </button>
          </div>
        </div>
        <div class="lg:w-5/12 flex flex-col py-5 relative">
          <form class="absolute top-1/2 bottom-1/2 w-full p-5 bg-white rounded-lg">
            <h2 class="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Contact Form
            </h2>
            <input type="text" class="block w-full p-2 mb-4" placeholder="Business Name">
            <input type="text" class="block w-full p-2 mb-4" placeholder="Name">
            <input type="email" class="block w-full p-2 mb-4" placeholder="Email">
            <input type="tel" class="block w-full p-2 mb-4" placeholder="Phone">
            <button class="bg-primary text-white py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: 'Digital Marketing', path: '/digital-marketing' },
        { name: 'Content Creation', path: '/content-creation' },
        { name: 'Website', path: '/website' },
        { name: 'Social Media', path: '/social-media' },
        { name: 'Print Advertising', path: '/print-media' },
        { name: 'Lead Without A Sweat', path: '/lead-without-a-sweat' }
      ],
      form: {
        businessName: '',
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Implement form submission logic here
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-20px);
  }
  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}
</style>