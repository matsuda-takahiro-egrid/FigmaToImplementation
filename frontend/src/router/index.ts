import { createRouter, createWebHistory } from 'vue-router'
import ComponentPreviewView from '@/views/ComponentPreviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'component-preview',
      component: ComponentPreviewView,
    },
  ],
})

export default router
