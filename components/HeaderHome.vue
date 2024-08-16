  <template>
    <div class="homepage">
      <div class="top-section">
        <div class="content">
          <!-- Your content here -->
        </div>
      </div>
      <div class="wave-container">
        <div class="wave-wrapper">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
        </div>
      </div>
      <div class="bottom-section">
        <!-- Additional content for the bottom section -->
      </div>
    </div>
  </template>
  <script setup>
  // No script needed for this implementation
  </script>
  <style scoped>
  .homepage {
    min-height: 100vh;
    font-family: Arial, sans-serif;
    position: relative;
    overflow: hidden;
  }
  
  .top-section {
    height: 60vh;
    background-color: var(--bs-light);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
  
  .content {
    max-width: 800px;
    text-align: center;
  }
  
  .wave-container {
    position: absolute;
    width: 100%;
    height: 200px;
    top: calc(60vh - 100px);
    left: 0;
    z-index: 2;
  }
  
  .wave-wrapper {
    position: absolute;
    width: 200%;
    height: 100%;
    animation: wave 10s linear infinite;
  }
  
  .wave {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    background: var(--bs-primary);
    opacity: 0.4;
  }
  
  .wave1 {
    animation: wave-animation 3s linear infinite;
  }
  
  .wave2 {
    animation: wave-animation 5s linear infinite;
  }
  
  .wave3 {
    animation: wave-animation 7s linear infinite;
  }
  
  .bottom-section {
    height: 40vh;
    background-color: var(--bs-primary);
    position: relative;
    z-index: 1;
  }
  
  @keyframes wave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes wave-animation {
    0% {
      border-radius: 0 0 50% 50%;
    }
    50% {
      border-radius: 0 0 40% 60%;
    }
    100% {
      border-radius: 0 0 50% 50%;
    }
  }
  
  @media (max-width: 768px) {
    .wave-container {
      height: 150px;
      top: calc(60vh - 75px);
    }
  }
  </style>