<script>
  import Group from 'vux/dist/components/group'
  import Cell from 'vux/dist/components/cell'
  import XButton from 'vux/dist/components/x-button'
  import XHeader from 'vux/dist/components/x-header'
  import XInput from 'vux/dist/components/x-input'
  import Selector from 'vux/dist/components/selector'
  import Box from 'vux/dist/components/box'
  import Divider from 'vux/dist/components/divider'

  export default {
    name: 'App',

    data() {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
      }
    },

    components: {
      Group,
      Cell,
      XButton,
      XHeader,
      XInput,
      Selector,
      Box,
      Divider
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
