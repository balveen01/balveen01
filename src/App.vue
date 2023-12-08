<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <!-- add navigation bar -->
    <div class="grid grid-cols-4 gap-4 content-between text-center">
      <button>About Me</button>
      <button>Timeline</button>
      <button>Projects</button>
      <button>Technologies</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
