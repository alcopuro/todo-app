<script setup>
import { useTaskStore } from "@/stores/task";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

const taskStore = useTaskStore();

const toggleTask = (task) => {
  taskStore.toggleTask(task);
};
</script>

<template>
  <div>
    <slot name="heading"></slot> ({{ props.tasks.length }})
    <div class="task-list">
      <div
        class="task-list__item"
        v-for="task in props.tasks"
        @click="toggleTask(task)"
      >
        <input type="checkbox" />
        <span>{{ task.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-weight: bold;
}

.task-list {
  margin-top: 3rem;
  display: grid;

  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 100px;

  &__item {
    display: flex;
    gap: 1rem;
    align-items: center;

    border: 2px #e3e3e3 solid;
    border-radius: 8px;
    padding: 1rem;
    background-color: white;

    &:hover {
      border-color: #58a0ff;
    }
  }
}
</style>
