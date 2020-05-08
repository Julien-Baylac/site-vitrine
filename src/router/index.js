import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/art_projects',
    name: 'art_projects',
    component: () => import('@/views/ArtProjects.vue')
  },
  {
    path: '/in_compagny',
    name: 'in_compagny',
    component: () => import('@/views/InCompagny.vue')
  },
  {
    path: '/my_projects',
    name: 'my_projects',
    component: () => import('@/views/MyProjects.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/curriculumvitae',
    name: 'curriculumvitae',
    component: () => import('@/views/CV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
