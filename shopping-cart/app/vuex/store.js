// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// import parts from modules
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // combine sub modules
  modules: {
    index
  }
})
