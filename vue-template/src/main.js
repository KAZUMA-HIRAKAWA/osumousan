// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faHandPointRight
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faHandPointRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
// LIFF初期化
// eslint-disable-next-line
liff.init(
  data => {
    const lineId = data.context.userId
    const utouId = data.context.utouId

    store.lineId = lineId
    store.utouId = utouId
    new Vue({
      el: '#app',
      store,
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  }
)
