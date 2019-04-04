import Vue from 'vue'
import Router from 'vue-router'
import office from '@/components/officeselect'
import ginza from '@/components/seatselectginza'
import register from '@/components/register'
import complete from '@/components/complete'

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
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/complete',
      name: 'complete',
      component: complete
    }
  ]
})
