<template>
  <section class="seo-section">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-5 d-flex flex-column justify-content-center align-items-center buttons-container">
          <button class="seo-button">SEO</button>
          <button class="seo-button">FREE REPORT</button>
          <button class="seo-button live-chat">LIVE CHAT</button>
        </div>
        <div class="col-lg-5 d-flex flex-column justify-content-center consultation-container">
          <h2>So you want to ride the wave?!</h2>
          <p>
            View our many resources prior to your consultation.
            If you are ready, consult now!
          </p>
          <hr>
          <button class="consultation-button">FREE CONSULTATION</button>
        </div>
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

.container-fluid {
  max-width: 1400px;
}

.row {
  gap: 100px;
}

.buttons-container {
  gap: 60px;
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
  width: 100%;
  max-width: 300px;
}

.seo-button:hover {
  transform: translateY(-5px);
}

.seo-button.live-chat {
  transform: translateY(-30px);
}

.consultation-container {
  text-align: left;
}

.consultation-container h2 {
  font-size: 2.5em;
  color: var(--bs-primary);
  margin-bottom: 20px;
}

.consultation-container p {
  font-size: 1.1em;
  margin-bottom: 30px;
}

.consultation-container hr {
  border-top: 2px solid var(--bs-primary);
  margin: 30px 0;
}

.consultation-button {
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
  align-self: flex-start;
}

.consultation-button:hover {
  transform: translateY(-5px);
}

@media (max-width: 991px) {
  .row {
    gap: 60px;
  }

  .buttons-container, .consultation-container {
    align-items: center;
    text-align: center;
  }

  .consultation-container hr {
    width: 100%;
  }

  .consultation-button {
    align-self: center;
  }

  .seo-button.live-chat {
    transform: translateY(0);
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