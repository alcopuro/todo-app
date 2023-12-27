<script setup>
const endpoint = "https://jsonplaceholder.typicode.com/todos/?userId=1";

const response = await fetch(endpoint, { method: "GET" });

const data = await response.json();
console.log(data);

const openTasks = data.filter((task) => {
  return !task.completed;
});
</script>

<template>
  <div>
    <h3>Your open tasks ({{ openTasks.length }})</h3>
    <div class="task-list">
      <div class="task-list__item" v-for="task in openTasks">
        {{ task.title }}
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
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  &__item {
    border: 2px #e3e3e3 solid;
    border-radius: 8px;
    padding: 1rem;
    background-color: white;
  }
}
</style>
