import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'
import Settings from '../views/Settings.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/results', name: 'Results', component: Results },
  { path: '/settings', name: 'Settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
