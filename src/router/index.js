import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ccp',
      name: 'ccp',
      component: () => import('../views/ccp.vue')
    },
    {
      path: '/cdv',
      name: 'cdv',
      component: () => import('../views/cdv.vue')
    },
    {
      path: '/saa',
      name: 'saa',
      component: () => import('../views/saa.vue')
    },
    {
      path: '/db',
      name: 'db',
      component: () => import('../views/db.vue')
    },
    {
      path: '/ml',
      name: 'ml',
      component: () => import('../views/ml.vue')
    }
  ]
})

export default router
