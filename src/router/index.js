import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Render from '@/components/Render'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/download',
      component: Render
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 } // Top of page on change
  }
})
