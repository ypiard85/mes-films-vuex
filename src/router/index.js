import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/pages/Home"
import Film from "@/components/pages/Films"

const routes = [
 {
   path: '/',
   component: Home
 }, 
 {
   path: '/film/:id',
   component: Film
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
