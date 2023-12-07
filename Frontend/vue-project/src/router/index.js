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
      path: 'Doar',
      name: 'Doar',
      component:  () => import('../views/DoarView.vue'),

      path: 'Receber',
      name: 'Receber',
      component:  () => import('../views/ReceberView.vue')
    
    
    }
  ]
})

export default router
