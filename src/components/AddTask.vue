<script lang="ts" setup>
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";
const title = ref("");

const taksStore = useTaskStore();

const addTask = () => {
  if (title.value.length) {
    taksStore.addTask(title.value);
    title.value = "";
  }
};
</script>

<template>
  <div class="add-task">
    <h3>Add new Task</h3>
    <div class="add-task__controls">
      <input
        type="text"
        placeholder="Enter a new task..."
        v-model="title"
        @keyup.enter="addTask"
      />
      <button>ADD</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-weight: bold;
}

.add-task {
  margin-bottom: 2rem;

  &__controls {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    height: 40px;

    input {
      width: 250px;
    }

    input,
    button {
      padding: 0.5rem;
      border-radius: 8px;
      border: 2px #e3e3e3 solid;
    }

    button {
      cursor: pointer;
      font-weight: bold;
      background-color: white;
      &:hover {
        color: white;
        background-color: #58a0ff;
      }
    }
  }
}
</style>
