// vuex/modules/login.js
import {
  TOGGLE_LOADING,
  TOGGLE_LOGIN,
  SET_USER,
} from '../mutation-types'

// initial state
const state = {
  loading: false,
  isLogin: false
}

// mutations
const mutations = {
  [TOGGLE_LOADING](state) {
    state.loading = !state.loading
  },

  [TOGGLE_LOGIN](state) {
    state.isLogin = !state.isLogin
  },

  [SET_USER](state, docs) {
    state.user = docs
  }
}

export default {
  state,
  mutations
}
