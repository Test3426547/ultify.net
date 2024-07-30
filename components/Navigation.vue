<template>
  <nav class="block w-full max-w-screen-2xl rounded-xl py-4 px-8 shadow-md w-full max-w-full rounded-none px-4 bg-transparent text-white shadow-none bg-transparent">
    <div class="container mx-auto flex items-center justify-between text-blue-gray-900">
      <NuxtLink
        to="/"
        class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mr-4 cursor-pointer text-lg font-bold"
      >
        Ultify Solutions
      </NuxtLink>
      <div class="hidden lg:block">
        <ul class="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
          <NuxtLink to="/about-us">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              About Us
            </li>
          </NuxtLink>
          <div class="relative group">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium cursor-pointer">
              Services
            </li>
            <div
              class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 mt-2"
            >
              <NuxtLink to="/website" class="block px-4 py-2 text-blue-gray-900">Website</NuxtLink>
              <NuxtLink to="/social-media" class="block px-4 py-2 text-blue-gray-900">Social Media</NuxtLink>
              <NuxtLink to="/seo" class="block px-4 py-2 text-blue-gray-900">SEO</NuxtLink>
              <NuxtLink to="/paid-media" class="block px-4 py-2 text-blue-gray-900">Paid Media</NuxtLink>
              <NuxtLink to="/content-creation" class="block px-4 py-2 text-blue-gray-900">Content Creation</NuxtLink>
              <NuxtLink to="/print-advertising" class="block px-4 py-2 text-blue-gray-900">Print Advertising</NuxtLink>
            </div>
          </div>
          <NuxtLink to="/contact-us">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Contact Us
            </li>
          </NuxtLink>
          <NuxtLink to="/consultation">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Consultation
            </li>
          </NuxtLink>
        </ul>
      </div>
      <button
        class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 ml-auto inline-block text-blue-gray-900 lg:hidden"
        type="button"
        data-collapse-target="navbar"
      >
        <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div
      data-collapse="navbar"
      class="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in lg:hidden"
    >
      <div class="mt-2 rounded-xl bg-white py-2">
        <ul class="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
          <NuxtLink to="/about-us">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              About Us
            </li>
          </NuxtLink>
          <NuxtLink to="/website">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Website
            </li>
          </NuxtLink>
          <NuxtLink to="/social-media">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Social Media
            </li>
          </NuxtLink>
          <NuxtLink to="/seo">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              SEO
            </li>
          </NuxtLink>
          <NuxtLink to="/paid-media">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Paid Media
            </li>
          </NuxtLink>
          <NuxtLink to="/content-creation">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Content Creation
            </li>
          </NuxtLink>
          <NuxtLink to="/print-advertising">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Print Advertising
            </li>
          </NuxtLink>
          <NuxtLink to="/contact-us">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Contact Us
            </li>
          </NuxtLink>
          <NuxtLink to="/consultation">
            <li class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 p-1 font-medium">
              Consultation
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { NuxtLink } from "#components";
</script>

<style scoped>
.navbar {
  background-color: #fff;
  z-index: 1030;
  height: 60px; /* Ensures navbar height consistency */
}

.navbar-brand {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.brand-logo {
  max-height: 40px; /* Limits the logo height */
  margin-right: 10px; /* Adds some space between logo and text */
}

.navbar-nav-hover .nav-link {
  text-decoration: none; /* Removes underline on hover */
}

.dropdown-menu {
  background-color: #fff;
  border-radius: 0.375rem;
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: left;
  }

  .navbar-collapse {
    justify-content: space-between;
  }
}
</style>