<script setup>
import { useTaskStore } from "@/stores/task";
import { computed } from "vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

const tasks = computed(() => props.tasks);

const taskStore = useTaskStore();

const toggleTask = (taskId) => {
  taskStore.toggleTask(taskId);
};
</script>

<template>
  <div>
    <h3><slot name="heading"></slot> ({{ tasks.length }})</h3>
    <div class="task-list">
      <div
        :class="[
          'task-list__item',
          { 'task-list__item--completed': task.completed },
        ]"
        v-for="task in tasks"
        :key="task.id"
      >
        <input
          type="checkbox"
          @input="toggleTask(task.id)"
          :checked="task.completed"
          v-model="task.completed"
          :id="task.id.toString()"
        />
        <label :for="task.id.toString()">{{ task.title }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-weight: bold;
}

.task-list {
  margin-top: 2rem;
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

    &--completed {
      span {
        text-decoration: line-through;
        &:hover {
          text-decoration: none;
        }
      }
    }
    span:hover {
      text-decoration: line-through;
    }

    input,
    label {
      cursor: pointer;
    }
  }
}
</style>
