// vuex/modules/global.js
import {
  SET_MODEL
} from '../mutation-types'

// initial state
const state = {
  User: ''
}

// mutations
const mutations = {
  [SET_MODEL](state, User) {
    state.User = User
  }
}

export default {
  state,
  mutations
}
