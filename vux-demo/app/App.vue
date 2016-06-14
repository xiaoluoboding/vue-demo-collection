<script>
  export default {
    name: 'App',

    data() {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
      }
    }
  }
</script>
<template>
  <div id="app">
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>
<style>
  @import '~vux/dist/vux.css';
</style>
