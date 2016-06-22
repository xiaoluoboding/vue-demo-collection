// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// 导入各个模块的初始状态和 mutations
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组合各个模块
  modules: {
    index
  }
})
