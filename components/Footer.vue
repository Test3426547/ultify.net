<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="company-info">
          <h2>ULTIFY SOLUTIONS</h2>
          <p>If you need results, you need Ultify.</p>
          <address>
            Level 25, 50 Clarent St<br>
            Wynyard, Sydney, NSW, 2000<br>
            Australia
          </address>
          <div class="contact-info">
            <p><font-awesome-icon :icon="['fas', 'phone']" /> 1800 ULTIFY</p>
            <p><font-awesome-icon :icon="['fas', 'envelope']" /> admin@ultify.net</p>
          </div>
          <div class="social-icons">
            <a href="#" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="#" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="#" aria-label="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          </div>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h3>Company</h3>
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/consultation">Consultation</NuxtLink></li>
              <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
              <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
            </ul>
          </div>
          <div class="link-column">
            <h3>Services</h3>
            <ul>
              <li><NuxtLink to="/website">Website</NuxtLink></li>
              <li><NuxtLink to="/social-media">Social Media</NuxtLink></li>
              <li><NuxtLink to="/seo">SEO</NuxtLink></li>
              <li><NuxtLink to="/sem">SEM</NuxtLink></li>
              <li><NuxtLink to="/content-creation">Content Creation</NuxtLink></li>
              <li><NuxtLink to="/print-advertising">Print Advertising</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: var(--bs-white);
  color: var(--bs-primary);
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.company-info {
  flex: 0 0 40%;
}

.company-info h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.company-info p,
.company-info address {
  margin-bottom: 0.5rem;
}

.contact-info {
  margin-top: 1rem;
}

.social-icons {
  margin-top: 1rem;
}

.social-icons a {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--bs-primary);
}

.footer-links {
  display: flex;
  flex: 0 0 50%;
  justify-content: space-between;
}

.link-column h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.link-column ul {
  list-style-type: none;
  padding: 0;
}

.link-column ul li {
  margin-bottom: 0.5rem;
}

.link-column ul li a {
  color: var(--bs-primary);
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .company-info,
  .footer-links {
    flex: 0 0 100%;
    margin-bottom: 2rem;
  }
}
</style>