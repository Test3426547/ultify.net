<template>
  <section class="directive-section bg-primary py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="directive-title-wrapper">
            <h2 class="directive-title bg-light text-dark rounded-pill py-2 px-4 d-inline-block">
              Directive message from ULTIFY
            </h2>
          </div>
        </div>
        <div class="col-md-8">
          <p class="directive-message text-white mb-0">
            "Throughout our years in the industry, we have solidified the ins and outs of all digital marketing elements. At ULTIFY, our agency truly understands consumer demands and we always actively remodel our systems to meet such criteria. As a result, we offer our free consultations for the best interest of connecting with like-minded individuals with whom we have built strong connections over the course of their digital journey. We can't wait to hear from you and excel your innovative ideas through digital marketing with our agency."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Directive',
};
</script>

<style scoped>
.directive-section {
  background-color: var(--bs-primary);
}

.directive-title-wrapper {
  text-align: center;
}

.directive-title {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: var(--bs-light);
  color: #000000;
}

.directive-message {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 767px) {
  .directive-title {
    font-size: 1.2rem;
  }

  .directive-message {
    font-size: 1rem;
  }
}
</style>