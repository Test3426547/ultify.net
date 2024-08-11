<style scoped>
.about-us {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bs-white);
  padding: 80px 0;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.text-container {
  flex: 0 0 70%;
  position: relative;
}

.text-container h2 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.highlight {
  color: var(--bs-primary);
}

.image-container {
  position: relative;
  width: 120%; /* Increased width to show full image */
  padding-top: 45%; /* Adjusted aspect ratio */
  overflow: visible; /* Changed to visible to show full image */
  margin-left: -10%; /* Shift image to the left */
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed to contain to show full image */
}

.description-container {
  flex: 0 0 25%;
  padding-left: 40px;
}

.description-container h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.description-container p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 1200px) {
  .text-container h2 {
    font-size: 3rem;
  }
  
  .description-container h3 {
    font-size: 2rem;
  }

  .image-container {
    width: 110%;
    margin-left: -5%;
  }
}

@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }

  .text-container, .description-container {
    flex: 0 0 100%;
  }

  .description-container {
    margin-top: 40px;
    padding-left: 0;
  }

  .text-container h2 {
    font-size: 2.5rem;
  }

  .image-container {
    width: 100%;
    margin-left: 0;
    padding-top: 56.25%; /* Reset to 16:9 aspect ratio for mobile */
  }
}

@media (max-width: 768px) {
  .about-us {
    padding: 60px 0;
  }

  .text-container h2 {
    font-size: 2rem;
  }

  .description-container h3 {
    font-size: 1.75rem;
  }
}
</style>