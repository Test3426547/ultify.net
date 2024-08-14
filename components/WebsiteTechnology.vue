<template>
  <section class="website-technologies">
    <!-- Framework Technologies Section -->
    <div class="technology-section framework-section">
      <div class="content-wrapper">
        <h2 class="section-title">Websites & Digital Platforms</h2>
        <p class="section-description">
          We design digital platforms to empower users and your brand's tribe. This deep
          understanding of what motivates them allows us to forge and fine-tune the most
          powerful strategies that generate rapid ROI for your business.
        </p>
        <ul class="technology-list">
          <li v-for="framework in frameworks" :key="framework.name" 
              @mouseover="activeFramework = framework.name"
              @mouseleave="activeFramework = null">
            {{ framework.name }}
          </li>
        </ul>
        <div class="project-link">WEB & DIGITAL PROJECTS →</div>
      </div>
      <div class="image-wrapper">
        <transition name="fade" mode="out-in">
          <img :key="activeFramework" :src="getFrameworkImage" alt="Framework" class="framework-image">
        </transition>
        <div class="featured-case">
          <p>Featured case study</p>
          <h3>Amount — The Future Of Digital Banking Technology.</h3>
        </div>
      </div>
    </div>

    <!-- CMS Technologies Section -->
    <div class="technology-section cms-section">
      <div class="image-wrapper">
        <transition name="fade" mode="out-in">
          <img :key="activeCMS" :src="getCMSImage" alt="CMS" class="cms-image">
        </transition>
        <div class="featured-case">
          <p>Featured case study</p>
          <h3>ENF — The Power Of Decentralization.</h3>
        </div>
      </div>
      <div class="content-wrapper">
        <h2 class="section-title">Digital Product Design</h2>
        <p class="section-description">
          In the new digital era, users are in control of content and community, and
          experience design is essential. Together, we define, develop, and deliver different
          design solutions that create an unparalleled competitive advantage for companies
          in a sea of competition. Focused on radical differentiation at every turn, with
          growth moves pre-loaded into everything we touch.
        </p>
        <ul class="technology-list">
          <li v-for="cms in cmsTechnologies" :key="cms.name"
              @mouseover="activeCMS = cms.name"
              @mouseleave="activeCMS = null">
            {{ cms.name }}
          </li>
        </ul>
        <div class="project-link">WEB3 PROJECTS →</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebsiteTechnologies',
  data() {
    return {
      activeFramework: null,
      activeCMS: null,
      frameworks: [
        { name: 'Nuxt.js Development', image: '/nuxt.svg' },
        { name: 'Next.js Development', image: '/next.svg' },
        { name: 'Angular Development', image: '/angular.svg' },
        { name: 'React Development', image: '/react.svg' },
        { name: 'Vue Development', image: '/vue.svg' },
        { name: 'Django Development', image: '/django.svg' },
      ],
      cmsTechnologies: [
        { name: 'Shopify Development', image: '/shopify.svg' },
        { name: 'WordPress Development', image: '/wordpress.svg' },
        { name: 'GoDaddy Development', image: '/godaddy.svg' },
        { name: 'Wix Development', image: '/wix.svg' },
        { name: 'Weebly Development', image: '/weebly.svg' },
        { name: 'Squarespace Development', image: '/squarespace.svg' },
      ],
    };
  },
  computed: {
    getFrameworkImage() {
      const framework = this.frameworks.find(f => f.name === this.activeFramework);
      return framework ? framework.image : '/placeholder.svg';
    },
    getCMSImage() {
      const cms = this.cmsTechnologies.find(c => c.name === this.activeCMS);
      return cms ? cms.image : '/placeholder.svg';
    },
  },
};
</script>

<style scoped>
.website-technologies {
  font-family: Arial, sans-serif;
}

.technology-section {
  display: flex;
  min-height: 100vh;
  padding: 4rem 0;
}

.framework-section {
  background: linear-gradient(135deg, #e0e6ff 0%, #b8e7ff 100%);
}

.cms-section {
  background: linear-gradient(135deg, #d4d9ff 0%, #ffd6e0 100%);
}

.content-wrapper, .image-wrapper {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.section-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
}

.technology-list {
  list-style-type: none;
  padding: 0;
}

.technology-list li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.technology-list li:hover {
  color: #007bff;
}

.project-link {
  margin-top: 2rem;
  font-weight: bold;
  cursor: pointer;
}

.framework-image, .cms-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.framework-image:hover, .cms-image:hover {
  transform: scale(1.05);
}

.featured-case {
  margin-top: 2rem;
  font-size: 0.9rem;
}

.featured-case h3 {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .technology-section {
    flex-direction: column;
  }

  .cms-section {
    flex-direction: column-reverse;
  }
}
</style>