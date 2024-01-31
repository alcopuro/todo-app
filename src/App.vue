<script setup>
import { RouterView } from "vue-router";
import NavigationHeader from "@/components/NavigationHeader.vue";

import { useTaskStore } from "./stores/task";
import { onMounted } from "vue";

const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.fetchTasks();
});
</script>

<template>
  <header>
    <NavigationHeader />
  </header>
  <main class="centered">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
