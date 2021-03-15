import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/Index'
import LoginPage from '@/components/Login'
import MovieIndexPage from '@/components/MovieIndexPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/movie',
      name: 'MovieIndexPage',
      component: MovieIndexPage
    },
  ]
})
