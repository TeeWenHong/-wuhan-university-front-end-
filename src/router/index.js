import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

import Home from '../views/home/Home.vue'
import singin from '../views/singin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {  
    path: '/singin',
    name: 'singin',
    component: singin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
