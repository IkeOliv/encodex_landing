import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import MainLayout from '../components/layout/MainLayout.vue'

import ServicesView from '../views/ServicesView.vue'
import ShowServiceView from '../views/ShowServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'modulos',
          component: ServicesView,
        },
        {
          path: ':id',
          name: 'ver servicio',
          component: ShowServiceView,
        }
      ]
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0 }
  }
})

export default router
