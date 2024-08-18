<template>
    <div class="about-us-details">
      <section v-for="(section, index) in sections" :key="index" class="about-section" :class="{ 'text-right': index % 2 !== 0 }">
        <div class="container">
          <div class="row align-items-center">
            <div :class="['col-lg-6', { 'order-lg-2': index % 2 !== 0 }]">
              <div class="content-wrapper">
                <div class="number">{{ section.number }}/</div>
                <div class="pill-wrapper">
                  <div class="pill">{{ section.title }}</div>
                </div>
                <p class="description">{{ section.description }}</p>
              </div>
            </div>
            <div :class="['col-lg-6', { 'order-lg-1': index % 2 !== 0 }]">
              <div class="image-wrapper">
                <img :src="section.image" :alt="'About Us ' + section.number" class="img-fluid rounded-image">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const sections = [
    {
      number: '01',
      title: 'Two minds is better than one',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/about-us-01.png'
    },
    {
      number: '02',
      title: 'Not giving up until it\'s perfect',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/about-us-02.png'
    },
    {
      number: '03',
      title: 'Our time is your time',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '/about-us-03.png'
    },
    {
      number: '04',
      title: 'Our skills and your idea',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/about-us-04.png'
    }
  ];
  </script>
  
  <style scoped>
.about-us-details {
  background-color: var(--bs-light);
  padding: 80px 0;
}

.about-section {
  padding: 2.5rem 0;
  margin-bottom: 80px;
}

.about-section:last-child {
  margin-bottom: 0;
}

.container {
  max-width: 1400px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.col-lg-6 {
  padding-left: 15px;
  padding-right: 15px;
}

.content-wrapper {
  max-width: 80%;
}

.number {
  font-size: 1.2rem;
  color: var(--bs-gray-600);
  margin-bottom: 1rem;
}

.pill-wrapper {
  margin-bottom: 2rem;
}

.pill {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: var(--bs-primary);
  color: white;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: bold;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--bs-gray-700);
}

.image-wrapper {
  padding: 0;
  width: 540px; /* Set a fixed width to maintain original image size */
}

.rounded-image {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Move text sections */
.about-section:nth-child(odd) .content-wrapper {
  transform: translateX(-50px);
}

.about-section:nth-child(even) .content-wrapper {
  transform: translateX(50px);
}

@media (max-width: 1399.98px) {
  .container {
    max-width: 100%;
  }
}

@media (max-width: 991.98px) {
  .about-section {
    padding: 1.5rem 0;
    margin-bottom: 40px;
  }

  .content-wrapper {
    max-width: 100%;
    margin-bottom: 2rem;
    transform: none !important; /* Reset transform for smaller screens */
  }

  .image-wrapper {
    width: 100%;
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 767.98px) {
  .pill {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }

  .rounded-image {
    height: 300px;
  }
}
</style>