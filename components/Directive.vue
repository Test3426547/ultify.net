<template>
  <section class="py-7 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="text-center">
            <h4 class="text-gradient text-primary">Directive message from Ultify -</h4>
            <blockquote class="blockquote">
              <p class="mb-0">
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
.bg-light {
  background-color: var(--bs-light) !important;
}

.text-gradient {
  background: -webkit-linear-gradient(left, var(--bs-blue), var(--bs-indigo));
  -webkit-background-clip: text;
  background-clip: initial; /* Replace the comment with a valid CSS property */
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

.text-primary {
  color: var(--bs-primary);
}

.mb-0 {
  margin-bottom: 0;
}
</style>