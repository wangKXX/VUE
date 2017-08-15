import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Zhuce from '@/components/Zhuce'
import Main from '@/components/main'


Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    }
  ]
})
