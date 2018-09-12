import Vue from 'vue'
import Router from 'vue-router'
import Canvas from '@/components/Canvas'
import Signature from '@/components/Signature'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Signature
    },
    {
      path: '/form',
      component: Canvas
    }
  ]
})
