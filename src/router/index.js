import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import List from '../components/List'
import Signup from '../components/Signup'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{ requiresAuth: true}
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})

export default router