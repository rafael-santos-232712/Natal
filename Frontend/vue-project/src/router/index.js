import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Doar from '../views/Doar.vue'
import Receber from '../views/Receber.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: 'Doar',
      name: 'Doar',
      component:  () => import('../views/DoarView.vue'),

      path: 'Receber',
      name: 'Receber',
      component:  () => import('../views/ReceberView.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    
    }
  ]
})

export default router