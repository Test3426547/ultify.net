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
  max-width: 1400px; /* Increased to accommodate the extra spacing */
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  margin-left: -65px;
  margin-right: -65px;
}

.col-lg-6 {
  padding-left: 65px;
  padding-right: 65px;
}

.content-wrapper {
  max-width: 90%;
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
}

.rounded-image {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Adjust text positioning */
.about-section:nth-child(even) .content-wrapper {
  margin-left: auto;
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

  .row {
    margin-left: -15px;
    margin-right: -15px;
  }

  .col-lg-6 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .content-wrapper {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .about-section:nth-child(even) .content-wrapper {
    margin-left: 0;
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