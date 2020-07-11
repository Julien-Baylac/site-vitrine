import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Birdhouses from '../views/projects/Birdhouses.vue'
import MemoryStorage from '../views/projects/MemoryStorage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/birdhouses',
    name: 'birdhouses',
    component: Birdhouses
  },
  {
    path: '/memory_storage',
    name: 'memory_storage',
    component: MemoryStorage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
