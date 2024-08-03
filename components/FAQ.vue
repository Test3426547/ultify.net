<template>
  <div class="faq-section py-4 bg-light dark-mode-bg">
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-primary dark-mode-text-primary">Frequently Asked Questions</h2>
          <p class="dark-mode-text">We address common questions to help you understand our services and how we can assist you.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item mb-3">
            <p class="faq-question mb-1 cursor-pointer dark-mode-question" @click="toggleAnswer(index)">
              {{ faq.question }}
            </p>
            <p v-if="faq.showAnswer" class="faq-answer dark-mode-answer">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  { question: 'What is digital marketing?', answer: 'Digital marketing refers to the use of digital channels, such as search engines, social media, email, and websites, to promote a product or service.', showAnswer: false },
  { question: 'How do I get started?', answer: 'Getting started with digital marketing involves understanding your business goals, identifying your target audience, and selecting the right digital channels to reach them.', showAnswer: false },
  { question: 'Why is ULTIFY the best digital marketing agency in Australia?', answer: 'ULTIFY is renowned for its comprehensive digital strategies, a team of experts, and a proven track record in delivering exceptional results across various industries.', showAnswer: false },
  { question: 'What type of clients does ULTIFY work with?', answer: 'We work with a wide range of clients, from startups to established businesses, across various industries, helping them achieve their digital marketing goals.', showAnswer: false },
  { question: 'What digital marketing trends does ULTIFY know?', answer: 'ULTIFY stays ahead of the curve by continuously researching and implementing the latest trends, such as AI-driven marketing, voice search optimization, and influencer marketing.', showAnswer: false },
  { question: 'How do I find the right digital marketing agency for my company?', answer: 'Finding the right agency involves assessing your business needs, researching potential agencies\' expertise, and reviewing case studies and testimonials.', showAnswer: false },
  { question: 'What can a digital marketing agency do for my business?', answer: 'A digital marketing agency can help you build brand awareness, increase online presence, generate leads, and ultimately grow your business through various digital strategies.', showAnswer: false },
  { question: 'Which industries benefit most from digital marketing?', answer: 'While all industries can benefit from digital marketing, those in e-commerce, tech, healthcare, and entertainment often see significant growth and ROI.', showAnswer: false },
]);

const toggleAnswer = (index) => {
  faqs.value[index].showAnswer = !faqs.value[index].showAnswer;
};
</script>

<style scoped>
/* Light Mode Styles */
.bg-light {
  background-color: var(--bs-light, #f8f9fa) !important;
}

.text-primary {
  color: var(--bs-primary) !important;
}

.faq-question {
  cursor: pointer;
  font-weight: 600;
  color: #343a40;
  font-size: 1.1rem;
}

.faq-answer {
  margin: 0;
  color: #6c757d;
  font-size: 1rem;
}

/* Dark Mode Styles */
.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #343a40) !important;
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark, #0d6efd) !important;
}

.dark-mode .faq-question {
  color: var(--bs-body-color-dark, #adb5bd);
}

.dark-mode .faq-answer {
  color: var(--bs-body-color-dark, #adb5bd);
}
</style>