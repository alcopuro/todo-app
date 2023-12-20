import { createRouter, createWebHistory } from 'vue-router'
import MyTasksView from '../views/MyTasksView.vue'
import ArchiveView from '../views/ArchiveView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mytasks',
      component: MyTasksView
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView
    }, 
  ]
})

export default router
