<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigationHeader from "@/components/NavigationHeader.vue";
</script>

<template>
  <header>
    <NavigationHeader />
  </header>
  <main class="centered">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
}
</style>
