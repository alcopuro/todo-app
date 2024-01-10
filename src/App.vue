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
