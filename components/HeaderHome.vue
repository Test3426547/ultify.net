<template>
  <div class="homepage">
    <div class="top-section">
      <div class="content">
        <span class="welcome">Welcome to Ultify</span>
        <h1>Capitalise on digital resources with ULTIFY</h1>
        <p>Our agency utilises digital resources and our working strategies to elevate your business operations. Start now and maximise your digital reach.</p>
        <button class="get-started-btn">Get Started</button>
      </div>
    </div>
    <div class="wave-container">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path :d="wavePath" fill="#ffffff" fill-opacity="1"></path>
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
      menuItems: ['Home', 'Services', 'About', 'Contact'],
      wavePath: '',
      waveAnimation: null
    }
  },
  mounted() {
    this.startWaveAnimation();
  },
  beforeUnmount() {
    this.stopWaveAnimation();
  },
  methods: {
    startWaveAnimation() {
      const animate = () => {
        const t = Date.now() / 1000;
        const points = [];
        for (let i = 0; i <= 1440; i += 10) {
          const y = Math.sin(i * 0.01 + t) * 20 + 100;
          points.push(`${i},${y}`);
        }
        this.wavePath = `M0,320L${points.join('L')}L1440,320Z`;
        this.waveAnimation = requestAnimationFrame(animate);
      };
      animate();
    },
    stopWaveAnimation() {
      if (this.waveAnimation) {
        cancelAnimationFrame(this.waveAnimation);
      }
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

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.welcome {
  background-color: var(--bs-primary);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--bs-primary);
  margin: 1rem 0;
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.get-started-btn {
  background-color: var(--bs-primary);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
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
}

.bottom-section {
  background: linear-gradient(-45deg, var(--bs-primary), #4682B4, var(--bs-primary), #4682B4);
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