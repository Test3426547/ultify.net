<template>
  <section class="faq-section">
    <div class="container">
      <h2 class="faq-title text-white">FAQ</h2>
      <p class="faq-subtitle text-white">
        If you have any questions that aren't addressed here, please feel free to contact our customer support team.
      </p>
      <div class="faq-grid">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <div class="faq-question bg-primary text-white" @click="toggleAnswer(index)">
            {{ faq.question }}
            <span class="faq-icon">{{ faq.showAnswer ? '▲' : '▼' }}</span>
          </div>
          <div v-if="faq.showAnswer" class="faq-answer bg-primary text-white">
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
.faq-section {
  background-color: #2B2A2A;
  min-height: 100vh;
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.faq-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
}

.faq-subtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  padding: 15px 20px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.faq-icon {
  font-size: 0.8rem;
}

.faq-answer {
  padding: 20px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>