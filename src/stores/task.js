import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

// Supabase Client initialisieren
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);

  const sortedTasks = computed(() => tasks.value.sort((a, b) => b.id - a.id));
  const openTasks = computed(() => sortedTasks.value.filter((task) => !task.completed));
  const completedTasks = computed(() => sortedTasks.value.filter((task) => task.completed));

  async function fetchTasks() {
    let { data: tasksData, error } = await supabase
      .from('tasks')
      .select('*')
      .order('id', { ascending: false });

    if (error) console.error('error', error);
    else tasks.value = tasksData;
  }

  async function toggleTask(taskId) {
    const task = tasks.value.find((task) => task.id === taskId);
    let { data, error } = await supabase
      .from('tasks')
      .update({ completed: !task.completed })
      .eq('id', taskId);

    if (error) console.error('error', error);
    else fetchTasks(); // Aktualisiere die lokalen Tasks nach dem Update
  }

  async function addTask(title) {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title: title, completed: false }]);

    if (error) console.error('error', error);
    else fetchTasks(); // Tasks neu laden, um die neue Aufgabe anzuzeigen
  }

  return { fetchTasks, openTasks, completedTasks, toggleTask, addTask };
});
