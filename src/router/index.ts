import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Purchase from '../views/Purchase.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Purchase',
    component: Purchase
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
