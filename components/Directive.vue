<template>
  <section class="directive-section">
    <div class="container">
      <div class="directive-box bg-white rounded-lg shadow-lg p-4 p-md-5">
        <div class="row align-items-center">
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="directive-title-wrapper">
              <h2 class="directive-title bg-primary text-white rounded-pill py-2 px-4 d-inline-block">
                Directive message from ULTIFY
              </h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="directive-message-wrapper">
              <p class="directive-message text-dark mb-0">
                "Throughout our years in the industry, we have solidified the ins and outs of all digital marketing elements. At ULTIFY, our agency truly understands consumer demands and we always actively remodel our systems to meet such criteria. As a result, we offer our free consultations for the best interest of connecting with like-minded individuals with whom we have built strong connections over the course of their digital journey. We can't wait to hear from you and excel your innovative ideas through digital marketing with our agency."
              </p>
            </div>
          </div>
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
  position: relative;
  z-index: 10;
  margin-top: -50px;
  margin-bottom: -50px;
  padding: 0;
  background: transparent;
}

.container {
  padding-top: 0;
  padding-bottom: 0;
}

.directive-box {
  border-radius: 20px;
}

.directive-title-wrapper {
  text-align: left;
}

.directive-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.directive-message {
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 767px) {
  .directive-section {
    margin-top: -30px;
    margin-bottom: -30px;
  }
  
  .directive-title {
    font-size: 1rem;
  }

  .directive-message {
    font-size: 0.9rem;
  }
}
</style>