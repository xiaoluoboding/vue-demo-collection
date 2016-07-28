// vuex/modules/user.js
import {
  ADD_USER,
  FETCH_USER
} from '../mutation-types'
import User from '../models/user'

// 该模块的初始状态
const state = {
  userInfo: ''
}

// 相关的 mutations
const mutations = {
  [ADD_USER] (state, name) {
    let userInfo = {
      username: name,
      password: '111111'
    }
    User.create(userInfo, function (err, result) {
      if (err) {
        console.log(err);
      }
    })
  }
}

export default {
  state,
  mutations
}
