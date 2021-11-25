import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../views/homePage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/homePage'
  },
  {
    path: '/homePage',
    component: homePage
  }
]

export default new Router({
  routes
})