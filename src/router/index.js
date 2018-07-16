import Vue from 'vue'
import Router from 'vue-router'
import Animate from '@/pages/animate/animate'
import Layout from '@/pages/layout/layout'
import Container from '@/pages/container/container'
import Select from '@/pages/select/select'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Animate',
      component: Animate
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
