<script setup>
import logoDark from "@/assets/logo_dark.png";
import 'flowbite';
import projects from "./components/projects.vue";
import aboutme from "./components/aboutme.vue"
import tech from "./components/tech.vue";
import bottomnav from "./components/footer.vue";
import timeline from "./components/timeline.vue";
</script>

<template>
  <!-- Top Navigation Bar -->
  <nav class="sticky top-0 bg-dark_color shadow-md z-20 w-full">
    <div class="-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img :src="logoDark" class="h-12" alt="Logo" />
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a href="#introandaboutme" class="block py-2 px-3 active:font-bold" aria-current="page">About Me</a>
          </li>
          <li>
            <a href="#timeline" class="block py-2 px-3 active:font-bold" aria-current="page">Timeline</a>
          </li>
          <li>
            <a href="#myprojects" class="block py-2 px-3 active:font-bold" aria-current="page">Projects</a>
          </li>
          <li>
            <a href="#technologies" class="block py-2 px-3 active:font-bold" aria-current="page">Technologies</a>
          </li>
          <li>
            <a href="https://github.com/balveen01" target="_blank" class="block py-2 px-3 " aria-current="page"><i class="fa-brands fa-github"></i></a>
          </li>
          <li>
            <a href="www.linkedin.com/in/balveen-kaur" target="_blank" class="block py-2 px-3 " aria-current="page"><i class="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <aboutme id="introandaboutme"/>
  <timeline id="timeline"/>
  <projects id="myprojects"/>
  <tech id="technologies"/>
  <bottomnav />

</template>

<script>
</script>
<style>

</style>
