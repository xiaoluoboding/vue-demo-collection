// vuex/modules/global.js
import {
  SET_MODEL,
  SET_SETTING
} from '../mutation-types'

// initial state
const state = {
  User: '',
  Summary: '',
  Message: '',
  setting: {}
}

// mutations
const mutations = {
  [SET_MODEL](state, User, Summary, Message) {
    state.User = User
    state.Summary = Summary
    state.Message = Message
  },
  [SET_SETTING](state, setting) {
    state.setting = setting
  }
}

export default {
  state,
  mutations
}
