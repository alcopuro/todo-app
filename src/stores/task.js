import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])

  const openTasks = computed(() => tasks.value.filter((task) => !task.completed))

  const completedTasks = computed(() => tasks.value.filter((task) => task.completed))
  
  async function fetchTasks() {
    const endpoint = "https://jsonplaceholder.typicode.com/todos/?userId=1";

    const response = await fetch(endpoint, { method: "GET" });

    const data = await response.json();
    tasks.value = data
  }

  function toggleTask(task) {
    task.completed = !task.completed
  }

  return { fetchTasks, openTasks, completedTasks, toggleTask }
})
