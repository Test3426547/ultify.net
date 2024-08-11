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
            View our many resources prior to your consultation. If you are
            ready, consult now!
          </p>
          <hr class="custom-line" />
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
  padding: 0 0 0 0; /* Reduced top padding by 50px */
  background-color: var(--bs-white);
  margin-top: -125px; /* Combined previous 75px reduction with additional 50px */
}

.container-fluid {
  max-width: 1400px;
  padding: 0 20px 50px 20px; /* Space out the section within the container */
}

.row {
  gap: 200px; /* Maintain the 200px gap between the sections */
}

.buttons-container {
  gap: 40px; /* Ensure uniform spacing between the pills */
  margin-left: -100px; /* Shift the pills 100px to the left */
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

.consultation-container {
  text-align: center; /* Centered text alignment */
  margin-right: 0; /* Removed right margin to center */
}

.consultation-container h2 {
  font-size: 2.5em;
  color: var(--bs-primary);
  margin-bottom: 20px;
  font-weight: bold;
  white-space: nowrap; /* Ensure the text stays on one line */
}

.consultation-container p {
  font-size: 1.2em;
  margin-bottom: 30px;
  font-weight: 600; /* Thicker text */
}

.consultation-container .custom-line {
  border-top: 2px solid var(--bs-primary);
  margin: 30px auto; /* Center the line */
  width: 80%; /* Adjust width to fit under the text */
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
  align-self: center; /* Center the button */
}

.consultation-button:hover {
  transform: translateY(-5px);
}

@media (max-width: 991px) {
  .row {
    gap: 60px;
  }

  .buttons-container,
  .consultation-container {
    align-items: center;
    text-align: center;
    margin-left: 0; /* Reset margin on smaller screens */
    margin-right: 0; /* Reset margin on smaller screens */
  }

  .consultation-container hr {
    width: 100%;
  }

  .consultation-button {
    align-self: center;
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