<template>
  <section class="faq-section bg-dark py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="text-white">FAQ</h2>
        <p class="text-muted">
          If you have any questions that aren't addressed here, please feel free to contact our customer support team.
        </p>
      </div>
      <div class="faq-container">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <div class="faq-question-container" @click="toggleAnswer(index)">
            <span class="faq-question text-white">{{ faq.question }}</span>
            <i :class="{'faq-icon': true, 'expanded': faq.showAnswer}">&#9660;</i>
          </div>
          <div v-if="faq.showAnswer" class="faq-answer text-muted">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
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
.bg-dark {
  background-color: var(--bs-dark) !important;
}

.text-white {
  color: var(--bs-white) !important;
}

.text-muted {
  color: var(--bs-muted) !important;
}

.faq-section {
  padding: 60px 0;
  color: var(--bs-light);
}

.text-center {
  margin-bottom: 40px;
}

.faq-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.faq-item {
  background-color: var(--bs-primary);
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.faq-question-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question {
  font-weight: 600;
  color: var(--bs-white);
}

.faq-icon {
  transition: transform 0.3s ease;
}

.faq-icon.expanded {
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 10px;
  color: var(--bs-body-color);
}
</style>