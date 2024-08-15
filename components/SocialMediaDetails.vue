<template>
    <section class="service-details bg-primary">
      <div class="container">
        <div class="service-row" v-for="(service, index) in services" :key="index">
          <div class="service-content" :class="{ 'right': index % 2 !== 0 }">
            <h2 class="service-title text-white">{{ service.title }}</h2>
            <p class="service-description">{{ service.description }}</p>
          </div>
          <div class="service-image" :class="{ 'left': index % 2 !== 0 }">
            <img :src="service.image" :alt="service.title">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ServiceDetails',
    data() {
      return {
        services: [
          {
            title: 'Social Media Marketing (SMM)',
            description: 'A successful social media marketing (SMM) campaign is greater than just a couple viral post. Do they convert? Do they sustain? Do they grow? At ULTIFY, our strategy isn’t just about quick wins, it’s about cultivating a long-lasting presence on social platforms that will consistently drive exponential organic engagement. Let our digital marketing agency intuitively plan, test and smash your organic social media campaigns.',
            image: '/social-media-01.jpg'
          },  
        
          {
            title: 'Social Media Management',
            description: 'A social media management system will allow your business to have a well-scheduled and statistically driven approach to uploading fresh, engaging and converting content. Our agency will also provide your clients with fast interactive and engaging responses, building your brands identity, reputation and improving customer service. Run your platforms on a schedule and make improvements based on data analysis, stop running with the wind!',
            image: '/social-media-02.png'
          },
          {
            title: 'Social Media Account Setup',
            description: 'Experience clear and optimised social media account setup with our digital marketing agency. At ULTIFY, our agency will handle everything from profile creation to the grand launch, ensuring you start on the right foot in this vast digital world.',
            image: '/social-media-03.png'
          },
          {
            title: 'Social Media Audit & Strategy',
            description: 'Our digital marketing agency evaluates your social media goals and current state in order to masterplan a strategic system that will not just bring views to your instagram (or whatever platform), but convert them into beautiful sales. We assess your current platform performance, social media profiles, competitors, marketable resources and target audience to determine clear data-driven insight, combined with our social media experience.',
            image: '/social-media-04.png'
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .service-details {
    padding: 200px 0;
    background-color: #f8f9fa;
  }
  
  .container {
    max-width: 1200px;  /* Adjusted to accommodate the new gap */
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .service-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 200px;
  }
  
  .service-row:last-child {
    margin-bottom: 0;
  }
  
  .service-content, .service-image {
    flex-basis: calc(50% - 50px);  /* 50% width minus 65px for the gap */
    max-width: calc(50% - 50px);
  }
  
  .service-content {
    transform: translateX(-65px);
  }
  
  .service-content.right {
    order: 2;
    transform: translateX(65px);
  }
  
  .service-image {
    transform: translateX(65px);
  }
  
  .service-image.left {
    order: 1;
    transform: translateX(-65px);
  }
  
  .service-title {
    margin-bottom: 20px;
    font-size: 28px;
    color: var(--bs-white);
  }
  
  .service-description {
    color: var(--bs-white);
    line-height: 1.6;
    font-size: 16px;
  }
  
  .service-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  @media (max-width: 992px) {
    .container {
      padding: 0 40px;
    }
  
    .service-row {
      flex-direction: column;
      margin-bottom: 100px;
    }
  
    .service-content, .service-image {
      flex-basis: 100%;
      max-width: 100%;
      transform: none;
      margin-bottom: 30px;
    }
  
    .service-content.right, .service-image.left {
      order: 0;
      transform: none;
    }
  
    .service-title {
      font-size: 24px;
    }
  
    .service-description {
      font-size: 14px;
    }
  }
  </style>