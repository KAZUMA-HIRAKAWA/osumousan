import Vue from 'vue'
import Router from 'vue-router'
import officeSelect from '@/components/officeselect'
import office from '@/components/seatselect'
import register from '@/components/register'
import complete from '@/components/complete'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'officeSelect',
    component: officeSelect
  },
  {
    path: '/office',
    name: 'office',
    component: office
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
