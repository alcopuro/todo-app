<script setup>
const props = defineProps({
  archive: {
    type: Boolean,
    required: false,
  },
});

const endpoint = "https://jsonplaceholder.typicode.com/todos/?userId=1";

const response = await fetch(endpoint, { method: "GET" });

const data = await response.json();

const tasks = data.filter((task) =>
  props.archive ? task.completed : !task.completed
);
</script>

<template>
  <div>
    <slot name="heading"></slot> ({{ tasks.length }})
    <div class="task-list">
      <div class="task-list__item" v-for="task in tasks">
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
