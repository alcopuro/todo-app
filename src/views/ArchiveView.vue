<script setup>
import TasksOverview from "../components/TasksOverview.vue";
import { useTaskStore } from "@/stores/task";
const taksStore = useTaskStore();
</script>

<template>
  <div>
    <Suspense>
      <TasksOverview :tasks="taksStore.completedTasks">
        <template #heading>Your completed tasks </template>
      </TasksOverview>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
