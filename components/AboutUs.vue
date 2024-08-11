<template>
  <section class="py-7 bg-light">
    <div class="container">
      <!-- First Row -->
      <div class="row">
        <div class="col-lg-6 col-md-8 mb-4 mb-lg-0">
          <div class="image-container d-flex justify-content-center align-items-center h-100">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-city.jpg" class="img-fluid border-radius-xl" style="max-height: 400px;" alt="Colorful City">
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="p-3 pt-0">
            <h2 class="text-gradient text-primary mb-0">If you want results, you want ULTIFY.</h2>
            <h4 class="mb-4">About Ultify</h4>
            <p>
              At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape so that we can offer comprehensive and tailored solutions to drive remarkable results for our clients. We put attention to every detail, work off the clock, and our passion for innovation brings us the ability to create high-quality professional projects that convert since 2019. Our mission is to empower businesses by harnessing the power of digital marketing strategies, innovative technologies, and data-driven insights.
            </p>
            <p>
              We believe in the power of collaboration and building strong partnerships with our clients as digital marketing is projected to continue growing at record numbers (5 billion social media users by 2024). We take the time to understand our clients' unique business goals, target audience, and challenges. This allows us to develop customized strategies that deliver tangible outcomes, whether it is increasing brand visibility, smashing sales goals, improved lead generation, or enhanced customer engagement.
            </p>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="row mt-5">
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div class="p-3 pt-0">
            <h4 class="text-gradient text-primary mb-0">Driven by Perfection, Crafted by Experts.</h4>
            <h4 class="mb-4">Driven, Perfection, Experts</h4>
            <p>
              We are a digital marketing agency driven by perfection and expertise. Our passionate team goes the extra mile to deliver exceptional results. We craft innovative strategies and execute them with precision, propelling your brand forward in the digital realm. Trust our experts to navigate the ever-changing online marketing landscape and help you achieve remarkable success.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-8">
          <div class="image-container d-flex justify-content-center align-items-center h-100">
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/arena.jpg" class="img-fluid border-radius-xl" style="max-height: 400px;" alt="Arena">
          </div>
        </div>
      </div>

      <!-- Additional spacing to prevent overlap with the next section -->
      <div class="py-5"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
.image-container {
  min-height: 400px;
}

.border-radius-xl {
  border-radius: 1rem;
}

.text-gradient.text-primary {
  background: linear-gradient(to right, #5e72e4 0%, #825ee4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .image-container {
    min-height: 300px;
  }
}
</style>