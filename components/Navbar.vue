<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-start">
      <!-- Left column - Menu options -->
      <div class="menu-column">
        <ul class="nav-list">
          <li><NuxtLink to="/" ref="menuItem">Home</NuxtLink></li>
          <li class="services-dropdown">
            <a href="#" @click.prevent="toggleServices" ref="menuItem">Services <span class="arrow" :class="{ 'up': showServices }">&#9662;</span></a>
            <ul v-if="showServices" class="services-submenu">
              <li><NuxtLink to="/website" ref="menuItem">Website</NuxtLink></li>
              <li><NuxtLink to="/social-media" ref="menuItem">Social Media</NuxtLink></li>
              <li><NuxtLink to="/seo" ref="menuItem">SEO</NuxtLink></li>
              <li><NuxtLink to="/paid-media" ref="menuItem">Paid Media</NuxtLink></li>
              <li><NuxtLink to="/content-creation" ref="menuItem">Content Creation</NuxtLink></li>
              <li><NuxtLink to="/print-advertising" ref="menuItem">Print Advertising</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/about-us" ref="menuItem">About Us</NuxtLink></li>
          <li><NuxtLink to="/consultation" ref="menuItem">Consultation</NuxtLink></li>
          <li><NuxtLink to="/contact-us" ref="menuItem">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <!-- Right column - Contact form -->
      <div class="contact-form-column">
        <h2 class="text-white mb-4">Get in touch now.</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <input type="text" v-model="form.name" placeholder="Name" class="form-input">
          <input type="email" v-model="form.email" placeholder="Email" class="form-input">
          <input type="text" v-model="form.website" placeholder="Enter your company website" class="form-input">
          <textarea v-model="form.message" placeholder="Message (optional)" rows="4" class="form-input"></textarea>
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const isMenuOpen = ref(false)
const showServices = ref(false)
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  website: '',
  message: ''
})

const toggleServices = () => {
  showServices.value = !showServices.value
}

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = { name: '', email: '', website: '', message: '' }
}

onMounted(() => {
  const menuItems = document.querySelectorAll('[ref="menuItem"]')
  if (menuItems) {
    menuItems.forEach((item: Element) => {
      const menuItem = item as HTMLElement;
      gsap.to(menuItem, {
        y: 10,
        opacity: 0,
        duration: 0.2,
        paused: true,
        ease: 'power2.inOut',
      });
      menuItem.animation = gsap.to(menuItem, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        paused: true,
        ease: 'power2.out',
      });
      
      menuItem.addEventListener('mouseenter', () => menuItem.animation.play());
      menuItem.addEventListener('mouseleave', () => menuItem.animation.reverse());
    });
  }
});

router.afterEach(() => {
  showServices.value = false
})
</script>

<style scoped>
.navbar {
  padding: 2rem;
  background-color: var(--bs-primary) !important;
  height: 100vh;
  overflow-y: auto;
}

.container-fluid {
  height: 100%;
}

.menu-column {
  width: calc(50% - 150px);
}

.contact-form-column {
  width: calc(50% - 150px);
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 1.5rem;
}

.nav-list a {
  color: var(--bs-white);
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-list a:hover {
  color: var(--bs-light);
}

.services-dropdown {
  position: relative;
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.arrow.up {
  transform: rotate(180deg);
}

.services-submenu {
  list-style-type: none;
  padding-left: 1rem;
  margin-top: 1rem;
}

.services-submenu li {
  margin-bottom: 0.5rem;
}

.services-submenu a {
  font-size: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 2px solid var(--bs-white);
  background-color: transparent;
  color: var(--bs-white);
}

.form-input::placeholder {
  color: var(--bs-light);
}

textarea.form-input {
  border-radius: 1.5rem;
}

.submit-button {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 2px solid var(--bs-white);
  background-color: var(--bs-white);
  color: var(--bs-primary);
  font-weight: bold;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: transparent;
  color: var(--bs-white);
}

@media (max-width: 768px) {
  .navbar {
    height: auto;
    padding: 1rem;
  }

  .container-fluid {
    flex-direction: column;
  }

  .menu-column,
  .contact-form-column {
    width: 100%;
    margin-bottom: 2rem;
  }

  .nav-list a {
    font-size: 1.5rem;
  }

  .services-submenu a {
    font-size: 1.2rem;
  }
}
</style>