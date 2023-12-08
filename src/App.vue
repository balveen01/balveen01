<script setup>
import { RouterLink, RouterView } from "vue-router";
import logoDark from "@/assets/logo_dark.png";

</script>

<template>
  <!-- add navigation bar -->
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-6 gap-4">
      <img class="w-1/3" :src="logoDark"/>
      <button>About Me</button>
      <button>Timeline</button>
      <button>Projects</button>
      <button>Technologies</button>
    </div>
  </div>

  <RouterView />
</template>

<script>

</script>
