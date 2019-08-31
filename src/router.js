import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/home/index.vue.'
import Login from './views/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: './login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
  ]
})
