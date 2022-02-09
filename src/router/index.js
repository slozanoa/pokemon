import { createRouter, createWebHashHistory } from 'vue-router'
import Started from '../components/Started.vue'
import Main from '../Main.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Started
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Main
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
