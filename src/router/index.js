import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'


import Home from '../views/home/Home.vue'
import singin from '../views/singin.vue'
import homebase from '../views/homebase.vue'
import Book from '../views/home/Book.vue'
import Author from '../views/Author.vue'
import Control from '../views/author/Control.vue'
import Manage from '../views/author/Manage.vue'
import DataCenter from '../views/author/DataCenter.vue'
import Painter from '../views/Painter.vue'
import UpDate from '../views/painter/UpDate.vue'
import MyWork from '../views/painter/MyWork.vue'
import ApplicationManagement from '../views/painter/ApplicationManagement.vue'

Vue.use(VueRouter)

const routes = [
  // 画师管理区
  {
    path: '/painter',
    name: 'author',
    component: Painter,
    children:[
      {
        path:'update',
        component: UpDate,
      },
      {
        path:'mywork',
        component: MyWork,
      },
      {
        path:'applicationmanagement',
        component: ApplicationManagement,
      }
    ]
  },
  // 作家管理区
  {
    path: '/author',
    name: 'author',
    component: Author,
    redirect:'/author/control',
    children:[
      {
        path:'control',
        component:Control,
        // component: () => import('../views/author/Control.vue')
      },
      {
        path:'manage',
        component:Manage,
      },
      {
        path:'datacenter',
        component:DataCenter,
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {  
    path: '/singin',
    name: 'singin',
    component: singin
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {  
    
    // 这是主页模板
    path: '/homebase',
    name: 'homebase',
    component: homebase,
    redirect:'/homebase/home',  //自动改变路由路径
    children: [
      {
        path: "home",
        component : Home,
        component: () => import('../views/home/Home.vue')
      },
      {
        path: "book",
        component : Book,
        component: () => import('../views/home/Book.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
