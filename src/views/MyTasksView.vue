<script setup>
import TasksOverview from "../components/TasksOverview.vue";
import { useTaskStore } from "@/stores/task";
const taksStore = useTaskStore();
</script>

<template>
  <div>
    <TasksOverview :tasks="taksStore.openTasks">
      <template #heading>Your open Tasks </template>
    </TasksOverview>
  </div>
</template>

<style lang="scss" scoped></style>
