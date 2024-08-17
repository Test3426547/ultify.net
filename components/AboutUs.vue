<template>
  <section class="about-us-section bg-primary text-white py-12">
    <div class="container mx-auto px-4">
      <h3 class="text-sm font-semibold uppercase mb-4">Who we are</h3>
      <h1 class="text-5xl font-bold mb-6">We are obsessed <span class="text-blue-300">with results.</span></h1>
      
      <div class="flex flex-wrap items-center">
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p class="text-lg mb-6">
            At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape.
          </p>
          <a href="#" class="text-blue-300 hover:text-blue-200 transition-colors duration-300">Read more ▼</a>
          <button class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            More about our services
          </button>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="relative">
            <svg viewBox="0 0 200 200" class="w-full max-w-md mx-auto">
              <path d="M100,10 A90,90 0 1,1 99.9,10" fill="none" stroke="#4299e1" stroke-width="20"/>
              <text>
                <textPath href="#circleText" startOffset="0%">
                  Create what is needed ← Determine what is needed ← Run the campaign ← Test, refine and improve ←
                </textPath>
              </text>
              <path id="circleText" d="M100,10 A90,90 0 1,1 99.9,10" fill="none"/>
            </svg>
            <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <span class="text-sm font-semibold mb-2">Meet and discuss the challenge</span>
              <span class="text-sm font-semibold">Develop the strategy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>

<style scoped>
.about-us-section {
  background-color: var(--bs-primary);
}

.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

textPath {
  font-size: 8px;
  fill: #63b3ed;
}
</style>