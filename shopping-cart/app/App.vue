<script>
  import Nav from './components/Nav.vue'

  export default {
    name: 'App',

    components: {
      'cart-nav': Nav
    }
  }
</script>
<template>
  <div id="app">
    <cart-nav></cart-nav>
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>
