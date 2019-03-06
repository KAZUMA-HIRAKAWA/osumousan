import Vue from 'vue'
import Router from 'vue-router'
import office from '@/components/officeselect'
import ginza from '@/components/seatselectginza'
import maru from '@/components/seatselectmaru'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'office',
      component: office
    },
    {
      path: '/ginza',
      name: 'ginza',
      component: ginza
    },
    {
      path: '/maru',
      name: 'maru',
      component: maru
    },
  ]
})
