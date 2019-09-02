import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
// import Login from './views/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
  ]
})
