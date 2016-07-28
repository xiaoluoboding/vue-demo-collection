<script>
import store from './vuex/store'
// import mongoose from 'mongoose'
// import env_conf from './config/env_dev.json'
// mongoose.connect(env_conf.db.uri, env_conf.db.options)
// import { setModel } from './vuex/actions'
// import User from './vuex/models/user'

export default {
  name: 'App',

  store,

  data () {
    return {
      title: 'vuex-mongoose',
      users: []
    }
  },

  ready () {
    // this.setModel(User)
  }
}
</script>

<template>
  <div id="app">
    <h1><span v-text="title"></span></h1>
  </div>
</template>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
