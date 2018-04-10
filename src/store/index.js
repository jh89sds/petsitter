import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations: {
    setUserInfo (state, user) {
      state.user.displayName = user.displayName
      state.user.email = user.email
    }
  }
})

export default store
