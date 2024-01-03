<script setup>
import TasksOverview from "../components/TasksOverview.vue";
</script>

<template>
  <div>
    <Suspense>
      <TasksOverview>
        <template #heading>Your open Tasks </template>
      </TasksOverview>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
