<template>
  <header class="relative h-screen overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-1/2 bg-white"></div>
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-primary"></div>
    <div class="container-fluid h-full">
      <div class="flex flex-col lg:flex-row h-full">
        <div class="lg:w-7/12 flex flex-col py-5 relative">
          <h1 class="text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight -mt-24 lg:-mt-24 xl:-mt-24 -ml-10 lg:-ml-10 xl:-ml-10">
            ULTIFY capitalizes on digital<br>resources to elevate your
          </h1>
          <h2 class="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight -ml-10 lg:-ml-10 xl:-ml-10 mt-10 lg:mt-10 xl:mt-10">
            Your Solutions Start With Ultify
          </h2>
          <h3 class="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight -ml-10 lg:-ml-10 xl:-ml-10 mt-20 lg:mt-20 xl:mt-20">
            Com Heading
          </h3>
          <p class="text-lg lg:text-xl font-normal text-primary mb-4 leading-tight -ml-10 lg:-ml-10 xl:-ml-10 mt-10 lg:mt-10 xl:mt-10">
            Body Text
          </p>
          <div class="flex flex-wrap justify-start mt-10 lg:mt-10 xl:mt-10 -ml-10 lg:-ml-10 xl:-ml-10">
            <div class="bg-white rounded-full py-2 px-4 mr-4 mb-4">Digital Marketing</div>
            <div class="bg-white rounded-full py-2 px-4 mr-4 mb-4">Content Creation</div>
            <div class="bg-white rounded-full py-2 px-4 mr-4 mb-4">Website</div>
            <div class="bg-white rounded-full py-2 px-4 mr-4 mt-4">Social Media</div>
            <div class="bg-white rounded-full py-2 px-4 mr-4 mt-4">Print Advertising</div>
            <div class="bg-white rounded-full py-2 px-4 mr-4 mt-4">Lead Without A Sweat</div>
          </div>
        </div>
        <div class="lg:w-5/12 flex flex-col py-5 relative">
          <form class="bg-white rounded-lg shadow-lg p-10 mt-20 lg:mt-20 xl:mt-20 -ml-10 lg:-ml-10 xl:-ml-10 w-96 lg:w-96 xl:w-96">
            <h2 class="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
              Contact Form
            </h2>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="businessName">
                Business Name
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="businessName" type="text" placeholder="Business Name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                Phone
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone">
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
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