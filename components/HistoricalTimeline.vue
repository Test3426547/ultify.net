<template>
  <section class="py-6 bg-light">
    <div class="container">
      <h2 class="text-center text-primary mb-5">Historical Timeline</h2>
      <div class="row">
        <div class="col-md-8">
          <div class="timeline">
            <div class="timeline-container">
              <div class="timeline-item" v-for="item in timelineData" :key="item.year">
                <div class="timeline-icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="timeline-content">
                  <h3 class="timeline-title">{{ item.year }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img src="/chatbot-icon.png" alt="Company Logo" class="img-fluid" style="max-height: 400px;">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HistoricalTimeline',
  data() {
    return {
      timelineData: [
        {
          year: '2019',
          icon: 'fas fa-history',
          description: 'Our Co-Founders began their first venture by offering high-quality website design, SEO, and content creation services for leading agencies in Australia.'
        },
        {
          year: '2020',
          icon: 'fas fa-briefcase',
          description: 'We decided it was the right time to venture into our own branded business, starting with the intention of gaining as much experience as possible.'
        },
        {
          year: '2021',
          icon: 'fas fa-rocket',
          description: 'Our agency had a rough start, so we decided to intern for a leading digital marketing agency while running our business. This experience gave us insights into working with top brands in Australia, perfecting and developing our strategies.'
        },
        {
          year: '2022',
          icon: 'fas fa-sync-alt',
          description: 'We rebranded to ULTIFY Solutions, operating as a private digital marketing agency, servicing our clients with an improved and larger range of comprehensive services.'
        },
        {
          year: '2023',
          icon: 'fas fa-bullseye',
          description: 'Our agency decided it was the right time to go public and accept all clients and businesses with our solidified strategies. We are honored to have worked with leading companies and businesses of all sorts through our business, ULTIFY Solutions, bringing our tailored techniques to their craft.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.page-header {
  position: relative;
}

.bg-light {
  background-color: var(--bs-light-bg, #f8f9fa) !important;
}

.text-primary {
  color: var(--bs-primary) !important;
}

/* Timeline styling */
.timeline {
  position: relative;
  padding-left: 40px;
  margin-left: 20px;
  border-left: 2px solid var(--bs-primary);
}

.timeline-container {
  padding-bottom: 20px;
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-icon {
  position: absolute;
  left: -30px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--bs-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bs-light-text, #ffffff);
}

.timeline-icon i {
  font-size: 14px;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--bs-body-color);
}

.timeline-content p {
  margin-bottom: 0;
  color: var(--bs-body-color);
}

/* Dark mode styles */
.dark-mode .bg-light {
  background-color: var(--bs-dark-bg, #121212) !important;
}

.dark-mode .text-primary {
  color: var(--bs-primary-dark) !important;
}

.dark-mode .timeline {
  border-left-color: var(--bs-primary-dark);
}

.dark-mode .timeline-icon {
  background-color: var(--bs-primary-dark);
  color: var(--bs-dark-text, #212529);
}

.dark-mode .timeline-title,
.dark-mode .timeline-content p {
  color: var(--bs-light-text, #e1e1e1);
}
</style>