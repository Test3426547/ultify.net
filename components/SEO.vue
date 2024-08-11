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
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 50px; /* Add gap between left and right sections */
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: calc(50% - 25px); /* Adjust width to account for the gap */
}

.seo-button {
  background-color: var(--bs-primary);
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.seo-button:hover {
  transform: translateY(-5px);
}

.consultation-container {
  width: calc(50% - 25px); /* Adjust width to account for the gap */
  text-align: center;
}

/* ... rest of the styles remain unchanged ... */

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    align-items: center;
    gap: 60px; /* Adjust gap for mobile view */
  }

  .buttons-container, .consultation-container {
    width: 100%;
    text-align: center;
  }

  .consultation-container {
    margin-top: 0; /* Remove top margin as we're using gap */
  }

  .consultation-container {
    margin-top: 60px;
  }

  .seo-button, .consultation-button {
    width: 100%;
    max-width: 300px;
  }

  .buttons-container {
    gap: 40px;
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