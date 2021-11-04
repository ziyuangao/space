import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/index.vue'
import story from '../views/story.vue'
import heli from '../components/heli/index.vue'
import heliPage from '../components/heli/heliPage.vue'
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/story',
    component:story
  },
  {
    path:'/heli',
    component:heli,
    children:[
      {
        path:'/heliPage',
        component:heliPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
