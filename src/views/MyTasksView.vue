<script setup>
import TasksOverview from "../components/TasksOverview.vue";
</script>

<template>
  <div>
    <Suspense>
      <TasksOverview></TasksOverview>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
