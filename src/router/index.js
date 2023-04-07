import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

// 导入主页
import Home from '../views/home/Home.vue'
import singin from '../views/singin.vue'
import homebase from '../views/homebase.vue'
import Book from '../views/home/Book.vue'
import Picture from '../views/home/Picture.vue'
// 导入作家
import Author from '../views/Author.vue'
import Control from '../views/author/Control.vue'
import Manage from '../views/author/Manage.vue'
import DataCenter from '../views/author/DataCenter.vue'
import BuyPainting from '../views/author/BuyPainting.vue'
import UpdateNovel from '../views/author/UpdateNovel.vue'
// 导入画家
import Painter from '../views/Painter.vue'
import UpDate from '../views/painter/UpDate.vue'
import MyWork from '../views/painter/MyWork.vue'
import ApplicationManagement from '../views/painter/ApplicationManagement.vue'
// 消息通知
import News from '../views/News.vue'
// 用户个人资料
import UserInfo from '../views/UserInfo.vue'
// 导入钱包
import Wallet from '../views/Wallet.vue'
// 导入购物车
import Trolley from '../views/shop/Trolley.vue'
// 导入store实现登录才能观看首页
import store from '../store'



Vue.use(VueRouter)

const routes = [
  
  {
    path: '/userinfo',
    name: 'userinfo',
    component:  UserInfo
  },
  {
    path: '/new',
    name: 'new',
    component: News
  },
  // 画师管理区
  {
    path: '/painter',
    name: 'painter',
    component: Painter,
    redirect:'/painter/update',
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
      },
      
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
      },
      {
        path:'buypainting',
        component: BuyPainting,
      },
      {
        path:'UpdateNovel',
        component: UpdateNovel,
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
        component: () => import('../views/home/Home.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: "book",
        component : Book,
        component: () => import('../views/home/Book.vue')
      },
      {
        path: 'wallet',
        name: 'wallet',
        component:  Wallet
      },
      {
        path: 'trolley',
        name: 'trolley',
        component:  Trolley
      },
      {
        path: 'picture',
        name: 'picture',
        component:  Picture
      },
    ]
  }
]

const router = new VueRouter({
  routes,
  store
})

router.beforeEach((to, from, next) => {
  // 判断路由是否需要登录权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 判断用户是否已经登录
    if (! store.state.loginForm.username) {
      next({
        path: '/',
        query: { redirect: to.fullPath }  // 记录登录前的路由
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
