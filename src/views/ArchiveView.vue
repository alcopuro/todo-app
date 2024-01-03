<script setup>
import TasksOverview from "../components/TasksOverview.vue";
</script>

<template>
  <div>
    <Suspense>
      <TasksOverview archive>
        <template #heading>Your completed tasks </template>
      </TasksOverview>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
