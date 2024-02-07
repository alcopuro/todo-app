import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])

  const sortedTasks = computed(() => tasks.value.sort((a,b) =>  b.id - a.id))

  const openTasks = computed(() => sortedTasks.value.filter((task) => !task.completed))

  const completedTasks = computed(() => sortedTasks.value.filter((task) => task.completed))
  
  async function fetchTasks() {
    const endpoint = "https://jsonplaceholder.typicode.com/todos/?userId=1";

    const response = await fetch(endpoint, { method: "GET" });

    const data = await response.json();
    tasks.value = data
  }

  function toggleTask(taskId) {
    const task = tasks.value.find((task) => task.id === taskId)
    task.completed = !task.completed
  }

  function addTask(title) {

    const allIds = tasks.value.map((task)=> task.id)
    tasks.value.push({
      title: title,
      completed: false,
      id: Math.max(...allIds) + 1
    })
  }

  return { fetchTasks, openTasks, completedTasks, toggleTask, addTask }
})
