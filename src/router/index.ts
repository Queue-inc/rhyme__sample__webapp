import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Purchase from '../views/Purchase.vue'
import Divination from '../views/Divination.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Purchase',
    component: Purchase,
  },
  {
    path: '/',
    name: 'Divination',
    component: Divination,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
