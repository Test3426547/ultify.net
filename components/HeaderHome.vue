<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <button class="get-started-btn">Get Started</button>
      </div>
      <div class="hero-image">
        <!-- Add your hero image here -->
      </div>
    </div>
    <div class="wave-container">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,218.7C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>
    <div class="bottom-section">
      <div class="content">
        <h2>Our Services</h2>
        <!-- Add more content for the bottom section here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ['Home', 'Services', 'About', 'Contact']
    }
  }
}
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.top-section {
  background-color: #ffffff;
  color: #000000;
  padding: 2rem;
  min-height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logo img {
  height: 40px;
}

.menu {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.menu a {
  color: #000000;
  text-decoration: none;
}

.contact-btn {
  background-color: transparent;
  border: 1px solid #000000;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.welcome {
  background-color: #87CEEB;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: #87CEEB;
  margin: 1rem 0;
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.get-started-btn {
  background-color: #87CEEB;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
}

.hero-image {
  /* Add styles for your hero image */
}

.wave-container {
  position: relative;
  height: 150px;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: wave-animation 10s ease-in-out infinite alternate;
}

@keyframes wave-animation {
  0% {
    d: path("M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,218.7C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z");
  }
  50% {
    d: path("M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z");
  }
  100% {
    d: path("M0,32L48,48C96,64,192,96,288,117.3C384,139,480,149,576,154.7C672,160,768,160,864,149.3C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z");
  }
}

.bottom-section {
  background: linear-gradient(-45deg, #87CEEB, #4682B4, #87CEEB, #4682B4);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: #ffffff;
  padding: 2rem;
  min-height: calc(50vh - 150px);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
</style>