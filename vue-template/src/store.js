import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    office: '',
    position: ''
  },
  mutations: {
    setOffice (state, officeName) {
      state.office = officeName
    },
    setPosition (state, seatNunber) {
      state.position = seatNunber
    }
  }
})

export default store
