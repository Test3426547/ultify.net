<template>
  <section class="py-7 bg-light dark-mode-bg">
    <div class="container">
      <!-- First Row -->
      <div class="row">
        <div class="col-lg-6 col-md-8">
          <div class="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-100">
            <div class="bg-gradient-info w-100 h-100 border-radius-xl position-absolute"></div>
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-city.jpg" class="w-100 border-radius-xl mt-6 ms-5 position-absolute" style="max-height: 400px;" alt="Colorful City">
          </div>
        </div>
        <div class="col-lg-6 col-md-12 ms-auto">
          <div class="p-3 pt-0">
            <h2 class="text-gradient text-primary dark-mode-text-gradient mb-0">If you want results, you want ULTIFY.</h2>
            <h4 class="mb-4 dark-mode-text-primary">About Ultify</h4>
            <p class="dark-mode-text">
              At ULTIFY, our digital marketing agency is highly passionate about bringing success to like-minded individuals and business owners through our traditional and digital marketing efforts. With a team of experienced leaders, professionals, and enthusiasts, we are proud to have a deep understanding of the ever-evolving digital landscape so that we can offer comprehensive and tailored solutions to drive remarkable results for our clients. We put attention to every detail, work off the clock, and our passion for innovation brings us the ability to create high-quality professional projects that convert since 2019. Our mission is to empower businesses by harnessing the power of digital marketing strategies, innovative technologies, and data-driven insights.
            </p>
            <p class="dark-mode-text">
              We believe in the power of collaboration and building strong partnerships with our clients as digital marketing is projected to continue growing at record numbers (5 billion social media users by 2024). We take the time to understand our clients' unique business goals, target audience, and challenges. This allows us to develop customized strategies that deliver tangible outcomes, whether it is increasing brand visibility, smashing sales goals, improved lead generation, or enhanced customer engagement.
            </p>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="row mt-5">
        <div class="col-lg-6 col-md-12 me-auto">
          <div class="p-3 pt-0">
            <h4 class="text-gradient text-primary dark-mode-text-gradient mb-0">Driven by Perfection, Crafted by Experts.</h4>
            <h4 class="mb-4 dark-mode-text-primary">Driven, Perfection, Experts</h4>
            <p class="dark-mode-text">
              We are a digital marketing agency driven by perfection and expertise. Our passionate team goes the extra mile to deliver exceptional results. We craft innovative strategies and execute them with precision, propelling your brand forward in the digital realm. Trust our experts to navigate the ever-changing online marketing landscape and help you achieve remarkable success.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-8">
          <div class="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-100">
            <div class="w-100 h-100 bg-gradient-warning border-radius-xl position-absolute"></div>
            <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/arena.jpg" class="w-100 border-radius-xl mt-6 ms-n5 position-absolute" style="max-height: 400px;" alt="Arena">
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
/* Light Mode Styles */
.bg-light {
  background-color: var(--bs-light-bg, #f8f9fa) !important;
}

.text-primary {
  color: var(--bs-primary);
}

.bg-gradient-info,
.bg-gradient-warning {
  border-radius: 1rem;
  opacity: 0.9;
}

.text-gradient {
  background: var(--bs-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  color: var(--bs-body-color, #212529);
}

/* Dark Mode Styles */
.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark);
}

.dark-mode .dark-mode-text-gradient {
  background: var(--bs-gradient-dark);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark-mode p,
.dark-mode .dark-mode-text {
  color: var(--bs-body-color-dark, #f8f9fa);
}

.dark-mode .bg-gradient-info,
.dark-mode .bg-gradient-warning {
  opacity: 1; /* Adjust if needed */
}
</style>