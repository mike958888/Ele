import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue'),
    children:[
      {path:'/',redirect:'/home'},
      {path:'/home',name:'Home',component:()=>import('../views/Home.vue')},
      {path:'/order',name:'Order',component:()=>import('../views/Order.vue')},
      {path:'/me',name:'Me',component:()=>import('../views/Me.vue')}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path:'/address',
    name:'address',
    component:()=> import('../views/Address.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
