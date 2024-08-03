<template>
  <section class="py-7 bg-light dark-mode-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="text-center">
            <h4 class="text-gradient text-primary dark-mode-text-primary">Directive message from Ultify -</h4>
            <blockquote class="blockquote dark-mode-blockquote">
              <p class="mb-0 dark-mode-text">
                “Throughout our years in the industry, we have solidified the ins and outs of all digital marketing elements. At ULTIFY, our agency truly understands consumer demands and we always actively remodel our systems to meet such criteria. As a result, we offer our free consultations for the best interest of connecting with like-minded individuals with whom we have built strong connections over the course of their digital journey. We can’t wait to hear from you and excel your innovative ideas through digital marketing with our agency.”
              </p>
            </blockquote>
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
/* Light Mode Styles */
.bg-light {
  background-color: var(--bs-light, #f8f9fa) !important;
}

.text-gradient {
  background: -webkit-linear-gradient(left, #007bff, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blockquote {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 1.5rem 0;
  border-left: 5px solid var(--bs-primary);
  padding-left: 1.5rem;
}

/* Dark Mode Styles */
.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd) !important;
}

.dark-mode .text-gradient {
  background: -webkit-linear-gradient(left, #66a1ff, #a57bf2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark-mode .blockquote {
  border-left: 5px solid var(--bs-primary-dark);
}

.dark-mode .blockquote p {
  color: var(--bs-body-color-dark);
}

.dark-mode-text-primary {
  color: var(--bs-primary-dark, #0d6efd) !important;
}

.dark-mode-blockquote {
  border-left-color: var(--bs-primary-dark, #0d6efd);
}

.dark-mode-text {
  color: var(--bs-body-color-dark, #adb5bd) !important;
}
</style>