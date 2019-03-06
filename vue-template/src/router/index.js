import Vue from 'vue'
import Router from 'vue-router'
import office from '@/components/officeselect'
import seat from '@/components/seatselect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'office',
      component: office
    },
    {
      path: '/seat',
      name: 'seat',
      component: seat
    }
  ]
})
