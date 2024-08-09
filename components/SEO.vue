<template>
  <section class="seo-section">
    <div class="container">
      <div class="buttons-container">
        <button class="seo-button">SEO</button>
        <button class="seo-button">FREE REPORT</button>
        <button class="seo-button">LIVE CHAT</button>
      </div>
      <div class="consultation-container">
        <h2>So you want to ride the wave?!</h2>
        <p>
          View our many resources prior to your consultation.
          If you are ready, consult now!
        </p>
        <hr>
        <button class="consultation-button">FREE CONSULTATION</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.seo-section {
  padding: 80px 0;
  background-color: var(--bs-white);
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
}

.seo-button {
  background-color: var(--bs-primary);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1em;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.seo-button:hover {
  transform: translateY(-5px);
}

.consultation-container {
  width: 50%;
  text-align: right;
}

.consultation-container h2 {
  color: var(--bs-primary);
  font-size: 2.5em;
  margin-bottom: 20px;
}

.consultation-container p {
  font-size: 1.1em;
  margin-bottom: 20px;
  color: var(--bs-dark);
}

.consultation-container hr {
  width: 100%;
  border: 0;
  border-top: 1px solid var(--bs-primary);
  margin: 30px 0;
}

.consultation-button {
  background-color: var(--bs-primary);
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1em;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.consultation-button:hover {
  transform: translateY(-5px);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.seo-button:hover, .consultation-button:hover {
  animation: bounce 0.5s ease infinite;
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .buttons-container, .consultation-container {
    width: 100%;
    text-align: center;
  }

  .consultation-container {
    margin-top: 40px;
  }

  .seo-button, .consultation-button {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .seo-section {
    padding: 60px 0;
  }

  .consultation-container h2 {
    font-size: 2em;
  }

  .consultation-container p {
    font-size: 1em;
  }
}
</style>